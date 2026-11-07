import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import tls from "node:tls";
import { handle, ok, ApiError } from "@/lib/api";
import { createCustomerSession, destroyCustomerSession, getCustomerSession } from "@/lib/auth";

export const dynamic = "force-dynamic";

function resolveSmtpConfig() {
  let smtpHost = (process.env.SMTP_HOST || "").trim();
  let smtpPort = Number(process.env.SMTP_PORT || 0);
  let smtpUser = (process.env.SMTP_USER || "").trim();
  let smtpPass = (process.env.SMTP_PASS || "").trim();
  let fromName = (process.env.SMTP_FROM_NAME || "").trim();

  if (!smtpUser || !smtpPass) {
    try {
      const envText = fs.readFileSync(path.join(process.cwd(), ".env"), "utf8");
      for (const line of envText.split(/\r?\n/)) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith("#")) continue;
        const eqIdx = trimmed.indexOf("=");
        if (eqIdx < 0) continue;
        const key = trimmed.slice(0, eqIdx).trim();
        const val = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, "");
        if (key === "SMTP_HOST" && !smtpHost) smtpHost = val;
        if (key === "SMTP_PORT" && !smtpPort) smtpPort = Number(val);
        if (key === "SMTP_USER" && !smtpUser) smtpUser = val;
        if (key === "SMTP_PASS" && !smtpPass) smtpPass = val;
        if (key === "SMTP_FROM_NAME" && !fromName) fromName = val;
      }
    } catch {}
  }

  return {
    smtpHost: smtpHost || "smtp.gmail.com",
    smtpPort: smtpPort || 465,
    smtpUser,
    smtpPass,
    fromName: fromName || "Tehzib Lifestyle",
  };
}

type OtpEntry = {
  codeHash: string;
  expiresAt: number;
  attempts: number;
};

const globalForOtp = globalThis as unknown as {
  __tehzibEmailOtpStore?: Map<string, OtpEntry>;
};

const otpStore =
  globalForOtp.__tehzibEmailOtpStore ??
  (globalForOtp.__tehzibEmailOtpStore = new Map<string, OtpEntry>());

function hashOtp(email: string, code: string): string {
  return crypto
    .createHash("sha256")
    .update(`tehzib-otp:${email.toLowerCase()}:${code.trim()}`)
    .digest("hex");
}

function sendGmailSmtpEmail(opts: {
  smtpHost: string;
  smtpPort: number;
  smtpUser: string;
  smtpPass: string;
  fromName: string;
  to: string;
  subject: string;
  html: string;
}): Promise<void> {
  return new Promise((resolve, reject) => {
    const cleanPass = opts.smtpPass.replace(/\s+/g, "");
    const socket = tls.connect(
      {
        host: opts.smtpHost,
        port: opts.smtpPort,
        servername: opts.smtpHost,
        rejectUnauthorized: true,
      },
      () => {
        // Connected over implicit TLS (port 465)
      }
    );

    socket.setTimeout(15000);
    let buffer = "";
    let step = 0;
    let settled = false;

    const failWith = (err: Error) => {
      if (settled) return;
      settled = true;
      try {
        socket.destroy();
      } catch {}
      reject(err);
    };

    const sendLine = (line: string) => {
      socket.write(line + "\r\n");
    };

    socket.on("timeout", () => failWith(new Error("Gmail SMTP connection timed out")));
    socket.on("error", (err) => failWith(err));
    socket.on("close", () => {
      if (!settled) {
        failWith(new Error("Gmail SMTP connection closed unexpectedly"));
      }
    });

    socket.on("data", (chunk) => {
      buffer += chunk.toString("utf8");
      const lines = buffer.split("\r\n");
      buffer = lines.pop() ?? "";

      for (const line of lines) {
        if (!line) continue;
        // Multi-line SMTP responses have a hyphen at index 3 (e.g. "250-..."); wait for final line ("250 ...")
        if (line.length >= 4 && line[3] === "-") continue;

        const status = parseInt(line.slice(0, 3), 10);

        if (step === 0) {
          if (status !== 220) return failWith(new Error(`SMTP greeting failed: ${line}`));
          step = 1;
          sendLine("EHLO tehzib.local");
        } else if (step === 1) {
          if (status !== 250) return failWith(new Error(`SMTP EHLO failed: ${line}`));
          step = 2;
          const authPlain = Buffer.from(`\0${opts.smtpUser}\0${cleanPass}`, "utf8").toString("base64");
          sendLine(`AUTH PLAIN ${authPlain}`);
        } else if (step === 2) {
          if (status !== 235) {
            return failWith(
              new Error("Gmail SMTP authentication failed. Please check SMTP_USER and your 16-character Gmail App Password in .env.")
            );
          }
          step = 3;
          sendLine(`MAIL FROM:<${opts.smtpUser}>`);
        } else if (step === 3) {
          if (status !== 250) return failWith(new Error(`SMTP MAIL FROM failed: ${line}`));
          step = 4;
          sendLine(`RCPT TO:<${opts.to}>`);
        } else if (step === 4) {
          if (status !== 250) return failWith(new Error(`SMTP RCPT TO failed: ${line}`));
          step = 5;
          sendLine("DATA");
        } else if (step === 5) {
          if (status !== 354) return failWith(new Error(`SMTP DATA failed: ${line}`));
          step = 6;
          const msg = [
            `From: "${opts.fromName}" <${opts.smtpUser}>`,
            `To: <${opts.to}>`,
            `Subject: ${opts.subject}`,
            "MIME-Version: 1.0",
            'Content-Type: text/html; charset="UTF-8"',
            "",
            opts.html,
            ".",
          ].join("\r\n");
          sendLine(msg);
        } else if (step === 6) {
          if (status !== 250) return failWith(new Error(`SMTP message rejected: ${line}`));
          step = 7;
          settled = true;
          sendLine("QUIT");
          socket.end();
          resolve();
        }
      }
    });
  });
}

export const GET = handle(async () => {
  const session = await getCustomerSession();
  return ok({ session });
});

export const POST = handle(async (req) => {
  const body = (await req.json().catch(() => null)) as {
    action?: "send_otp" | "verify_otp" | "establish_session";
    target?: string;
    code?: string;
    customerId?: string;
    name?: string;
    email?: string;
    phone?: string;
    emailVerified?: boolean;
    phoneVerified?: boolean;
  } | null;

  if (!body || typeof body !== "object") {
    throw new ApiError(400, "Invalid request payload");
  }

  if (body.action === "send_otp") {
    const email = String(body.target || "").trim().toLowerCase();
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      throw new ApiError(400, "Please enter a valid email address.");
    }

    const { smtpHost, smtpPort, smtpUser, smtpPass, fromName } = resolveSmtpConfig();

    if (!smtpUser || !smtpPass) {
      throw new ApiError(
        503,
        "Email service is awaiting Gmail SMTP credentials (SMTP_USER & SMTP_PASS) in .env."
      );
    }

    const otpCode = String(crypto.randomInt(100000, 1000000));
    otpStore.set(email, {
      codeHash: hashOtp(email, otpCode),
      expiresAt: Date.now() + 5 * 60 * 1000,
      attempts: 0,
    });

    const html = `
      <div style="font-family:'Plus Jakarta Sans',Arial,sans-serif;max-width:520px;margin:0 auto;padding:28px;border:1px solid #eadcd9;border-radius:14px;background:#fcf8f7;color:#1d1616;">
        <div style="font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#a06b68;margin-bottom:6px;">Tehzib Privé Club</div>
        <h2 style="font-family:Georgia,serif;font-size:24px;margin:0 0 12px;">Verify Your Email Address</h2>
        <p style="font-size:14px;line-height:1.55;color:#4a3f3f;margin:0 0 20px;">
          Use the following 6-digit verification code to verify your email address on <strong>Tehzib</strong>. This code is valid for 5 minutes:
        </p>
        <div style="padding:16px 20px;text-align:center;background:#ffffff;border:1px solid #dfcac6;border-radius:10px;font-family:monospace;font-size:28px;font-weight:800;letter-spacing:8px;color:#1d1616;margin-bottom:20px;">
          ${otpCode}
        </div>
        <p style="font-size:12px;color:#7a6c6c;margin:0;">
          If you did not request this code, you can safely ignore this email.
        </p>
      </div>
    `;

    try {
      await sendGmailSmtpEmail({
        smtpHost,
        smtpPort,
        smtpUser,
        smtpPass,
        fromName,
        to: email,
        subject: `${otpCode} is your Tehzib verification code`,
        html,
      });
    } catch (err) {
      otpStore.delete(email);
      throw new ApiError(502, err instanceof Error ? err.message : "Failed to send verification email via Gmail SMTP.");
    }

    return ok({
      sent: true,
      target: email,
      expiresInSeconds: 300,
    });
  }

  if (body.action === "verify_otp") {
    const email = String(body.target || "").trim().toLowerCase();
    const code = String(body.code || "").trim();

    if (!email || !/^\d{6}$/.test(code)) {
      throw new ApiError(400, "Please enter the 6-digit verification code sent to your email.");
    }

    const entry = otpStore.get(email);
    if (!entry) {
      throw new ApiError(400, "Please request a verification code first.");
    }

    if (Date.now() > entry.expiresAt) {
      otpStore.delete(email);
      throw new ApiError(400, "This verification code has expired. Please request a new code.");
    }

    entry.attempts += 1;
    if (entry.attempts > 5) {
      otpStore.delete(email);
      throw new ApiError(429, "Too many incorrect attempts. Please request a new verification code.");
    }

    if (hashOtp(email, code) !== entry.codeHash) {
      throw new ApiError(400, "Incorrect verification code. Please check your email inbox and try again.");
    }

    otpStore.delete(email);
    return ok({ verified: true, target: email });
  }

  if (!body.customerId || !body.name) {
    throw new ApiError(400, "Missing customerId or name");
  }

  const sessionPayload = {
    customerId: String(body.customerId),
    name: String(body.name),
    email: body.email ? String(body.email) : "",
    phone: body.phone ? String(body.phone) : "",
    emailVerified: Boolean(body.emailVerified),
    phoneVerified: Boolean(body.phoneVerified),
  };

  await createCustomerSession(sessionPayload);
  return ok({ session: sessionPayload });
});

export const DELETE = handle(async () => {
  await destroyCustomerSession();
  return ok({ signedOut: true });
});
