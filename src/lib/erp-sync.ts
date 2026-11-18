import bcrypt from "bcryptjs";
import { ApiError } from "@/lib/api";
import { db } from "@/lib/db";
import {
  ProductStatus,
  POStatus,
  OrderChannel,
  PriceTier,
  OrderStatus,
  PaymentStatus,
  DeliveryMethod,
  Courier,
  ReturnType,
  ReturnStatus,
  ReviewStatus,
  CustomerTier,
  SupplierPaymentType,
  StaffStatus,
  LookupKind,
  FooterLinkType,
  StockMovementType,
} from "@prisma/client";
import { type AdminSession } from "@/lib/auth";
import { ALL_MODULE_KEYS, hasPermission, LEGACY_ACCESS_LABELS, moduleLabel } from "@/lib/rbac";

function expandStaffPermissionKeys(perms: string[]): string[] {
  const expanded = perms.flatMap((x) => {
    const key: string = LEGACY_ACCESS_LABELS[x] || x;
    return key === "*" ? [...ALL_MODULE_KEYS] : [key];
  });
  return Array.from(new Set(expanded)).sort();
}

const STAFF_SHIFT_OPTIONS = [
  "Full-Time (Day Shift)",
  "Full-Time (Night Shift)",
  "Part-Time (Day Shift)",
  "Part-Time (Night Shift)",
  "Remote (Day Shift)",
  "Remote (Night Shift)",
] as const;

const STAFF_STATUS_DISPLAY: Record<StaffStatus, string> = {
  ACTIVE: "Permanent",
  ON_LEAVE: "On Leave",
  INACTIVE: "Inactive",
  INTERNSHIP: "Internship",
  PROBATION: "Probation",
  PERMANENT: "Permanent",
  NOTICE_PERIOD: "Notice Period",
  CONTRACTUAL: "Contractual",
};

function staffStatusToLabel(status: StaffStatus): string {
  return STAFF_STATUS_DISPLAY[status] || "Permanent";
}

function labelToStaffStatus(raw: string | null | undefined): StaffStatus {
  const clean = String(raw || "").trim().toLowerCase().replace(/[\s_-]+/g, " ");
  if (clean === "internship") return StaffStatus.INTERNSHIP;
  if (clean === "probation") return StaffStatus.PROBATION;
  if (clean === "notice period") return StaffStatus.NOTICE_PERIOD;
  if (clean === "contractual") return StaffStatus.CONTRACTUAL;
  if (clean === "on leave") return StaffStatus.ON_LEAVE;
  if (clean === "inactive") return StaffStatus.INACTIVE;
  return StaffStatus.PERMANENT;
}

function normalizeStaffShift(raw: string | null | undefined): string {
  const clean = String(raw || "").trim();
  if (!clean) return "Full-Time (Day Shift)";
  const exact = STAFF_SHIFT_OPTIONS.find((opt) => opt.toLowerCase() === clean.toLowerCase());
  if (exact) return exact;
  const lower = clean.toLowerCase();
  const isNight = lower.includes("night");
  if (lower.includes("remote")) return isNight ? "Remote (Night Shift)" : "Remote (Day Shift)";
  if (lower.includes("part")) return isNight ? "Part-Time (Night Shift)" : "Part-Time (Day Shift)";
  return isNight ? "Full-Time (Night Shift)" : "Full-Time (Day Shift)";
}

const STAFF_DEPARTMENT_OPTIONS = [
  "Human Resources",
  "Finance & Accounts",
  "Sales & Marketing",
  "Engineering & IT",
  "Operations & Administrations",
  "Inventory & Supply Chain",
  "Lead & Customer Management",
  "Sourcing & Procurement",
] as const;

const DEPARTMENT_ROLES_MAP: Record<string, string[]> = {
  "Human Resources": [
    "Chief Human Resources Officer",
    "HR Manager",
    "Talent Acquisition Specialist",
    "HR Generalist",
    "HR Executive",
    "HR Assistant",
  ],
  "Finance & Accounts": [
    "Chief Financial Officer",
    "Accounting Manager",
    "Senior Accountant",
    "Financial Analyst",
    "Executice Accountant",
    "Junior Accountant",
  ],
  "Sales & Marketing": [
    "Sales & Marketing Director",
    "Sales Manager",
    "Digital Marketing Manager",
    "Digital Marketing Executive",
    "Sales Representative",
    "Marketing Assistant",
  ],
  "Engineering & IT": [
    "Chief Technology Officer (CTO)",
    "Product Manager",
    "Software Engineer",
    "Software QA Engineer",
    "IT Support Executive",
    "Project Manager",
  ],
  "Operations & Administrations": [
    "Chief Operating Officer",
    "Operations Manager",
    "Office Manager",
    "Administrative Executive",
    "Administrative Assistant",
    "Receptionist",
  ],
  "Inventory & Supply Chain": [
    "Supply Chain Director",
    "Supply Chain Manager",
    "Warehouse Manager",
    "Demand Planner",
    "Inventory Control Specialist",
    "Material Handler",
  ],
  "Lead & Customer Management": [
    "Head of Customer Support",
    "Customer Support Manager",
    "Customer Support Specialist",
    "Customer Support Executive",
    "Customer Support Assistant",
  ],
  "Sourcing & Procurement": [
    "Chief Procurement Officer",
    "Procurement Manager",
    "Strategic Sourcing Specialist",
    "Purchasing Executive",
    "Purchasing Assistant",
  ],
};

function buildStaffRolesByDept(dbRoles: Array<{ name: string; dept?: string | null }>): Record<string, string[]> {
  const result: Record<string, string[]> = {};
  for (const dept of STAFF_DEPARTMENT_OPTIONS) {
    result[dept] = [...(DEPARTMENT_ROLES_MAP[dept] || [])];
  }
  for (const r of dbRoles) {
    if (!r.dept || !r.name) continue;
    const normDept = normalizeStaffDept(r.dept);
    const list = result[normDept] || (result[normDept] = []);
    if (!list.some((x) => x.toLowerCase() === r.name.toLowerCase())) {
      list.push(r.name);
    }
  }
  return result;
}

function normalizeStaffDept(raw: string | null | undefined): string {
  const clean = String(raw || "").trim();
  if (!clean) return "Operations & Administrations";
  const exact = STAFF_DEPARTMENT_OPTIONS.find((opt) => opt.toLowerCase() === clean.toLowerCase());
  if (exact) return exact;
  const lower = clean.toLowerCase();
  if (lower.includes("human") || lower === "hr") return "Human Resources";
  if (lower.includes("finance") || lower.includes("account")) return "Finance & Accounts";
  if (
    lower.includes("sales") ||
    lower.includes("market") ||
    lower.includes("brand") ||
    lower.includes("cms") ||
    lower.includes("promo")
  ) {
    return "Sales & Marketing";
  }
  if (lower.includes("engineer") || lower.includes("it") || lower.includes("tech")) {
    return "Engineering & IT";
  }
  if (
    lower.includes("inventory") ||
    lower.includes("warehouse") ||
    lower.includes("supply") ||
    lower.includes("dispatch") ||
    lower.includes("logistic") ||
    lower.includes("courier")
  ) {
    return "Inventory & Supply Chain";
  }
  if (lower.includes("lead") || lower.includes("customer") || lower.includes("crm")) {
    return "Lead & Customer Management";
  }
  if (
    lower.includes("sourc") ||
    lower.includes("procure") ||
    lower.includes("supplier") ||
    lower.includes("import")
  ) {
    return "Sourcing & Procurement";
  }
  return "Operations & Administrations";
}

function initialsFromName(name: string | null | undefined, fallback = "ST"): string {
  const parts = String(name || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (!parts.length) return fallback;
  return parts
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const ORDER_STATUS_DISPLAY: Record<OrderStatus, string> = {
  NEW: "New",
  CONFIRMED: "Confirmed",
  PACKED: "Packed",
  DISPATCHED: "Dispatched",
  DELIVERED: "Delivered",
  DELIVERY_FAILED: "Delivery Failed",
  CANCELLED: "Cancelled",
  RETURNED: "Returned",
  REFUNDED: "Refunded",
};

const ORDER_STATUS_FROM_DISPLAY: Record<string, OrderStatus> = {
  New: OrderStatus.NEW,
  Confirmed: OrderStatus.CONFIRMED,
  Packed: OrderStatus.PACKED,
  Dispatched: OrderStatus.DISPATCHED,
  Delivered: OrderStatus.DELIVERED,
  "Delivery Failed": OrderStatus.DELIVERY_FAILED,
  Cancelled: OrderStatus.CANCELLED,
  Returned: OrderStatus.RETURNED,
  Refunded: OrderStatus.REFUNDED,
};

const PAY_STATUS_DISPLAY: Record<PaymentStatus, string> = {
  PAID: "Paid",
  COLLECTED: "Collected",
  PENDING: "Pending",
  REFUNDED: "Refunded",
};

const PAY_STATUS_FROM_DISPLAY: Record<string, PaymentStatus> = {
  Paid: PaymentStatus.PAID,
  Collected: PaymentStatus.COLLECTED,
  Pending: PaymentStatus.PENDING,
  Refunded: PaymentStatus.REFUNDED,
};

const COURIER_DISPLAY: Record<Courier, string> = {
  STEADFAST: "Steadfast Courier",
  PATHAO: "Pathao Courier",
  REDX: "RedX Logistics",
  PAPERFLY: "Paperfly",
  SELF: "In-House Concierge",
};

const COURIER_FROM_DISPLAY: Record<string, Courier> = {
  "Steadfast Courier": Courier.STEADFAST,
  "Pathao Courier": Courier.PATHAO,
  "RedX Logistics": Courier.REDX,
  Paperfly: Courier.PAPERFLY,
};

const CHANNEL_DISPLAY: Record<OrderChannel, string> = {
  STOREFRONT: "Storefront",
  SHOWROOM_POS: "Showroom POS",
  FACEBOOK: "Facebook",
  INSTAGRAM: "Instagram",
  WHATSAPP: "WhatsApp",
};

function fmtDateStr(d: Date | null | undefined, withTime = false): string {
  if (!d) return "—";
  const dhaka = new Date(d.getTime() + 6 * 3600 * 1000);
  const iso = dhaka.toISOString();
  return withTime ? `${iso.slice(0, 10)} ${iso.slice(11, 16)}` : iso.slice(0, 10);
}

function imgKeyFromUrl(url: string | null | undefined, fallback = "silk_blouse"): string {
  if (!url) return fallback;
  const m = url.match(/\/seed\/([a-z0-9_]+)\.(jpg|png|webp)$/i);
  if (m) return m[1];
  return url;
}

export async function buildHydratedPlatformState() {
  const [
    settings,
    categories,
    products,
    suppliers,
    purchaseOrders,
    preorders,
    orders,
    returnsLog,
    customers,
    reviews,
    coupons,
    heroSlides,
    promoBanners,
    footerSections,
    lookups,
    staffRoles,
    staffMembers,
    expenses,
    paymentsLog,
    accounts,
    adminNotifications,
    storeNotifications,
    movements,
  ] = await Promise.all([
    db.storeSettings.findUnique({ where: { id: "default" } }),
    db.category.findMany({
      include: { subcategories: { orderBy: { sortOrder: "asc" } } },
      orderBy: { sortOrder: "asc" },
    }),
    db.product.findMany({
      include: {
        category: true,
        subcategory: true,
        images: { orderBy: { sortOrder: "asc" } },
        variants: { orderBy: { sortOrder: "asc" } },
      },
      orderBy: { createdAt: "asc" },
    }),
    db.supplier.findMany({ orderBy: { code: "asc" } }),
    db.purchaseOrder.findMany({ orderBy: { date: "asc" } }),
    db.preorder.findMany({ orderBy: { createdAt: "asc" } }),
    db.order.findMany({
      include: { items: true },
      orderBy: { createdAt: "desc" },
    }),
    db.returnRequest.findMany({
      include: { order: true },
      orderBy: { createdAt: "desc" },
    }),
    db.customer.findMany({ orderBy: { code: "asc" } }),
    db.review.findMany({
      include: { product: true },
      orderBy: { createdAt: "desc" },
    }),
    db.coupon.findMany({ orderBy: { createdAt: "asc" } }),
    db.heroSlide.findMany({ orderBy: { sortOrder: "asc" } }),
    db.promoBanner.findMany({ orderBy: { sortOrder: "asc" } }),
    db.footerSection.findMany({
      include: { links: { orderBy: { sortOrder: "asc" } } },
      orderBy: { sortOrder: "asc" },
    }),
    db.lookup.findMany({ orderBy: { sortOrder: "asc" } }),
    db.staffRole.findMany({ orderBy: { name: "asc" } }),
    db.staff.findMany({
      include: { role: true },
      orderBy: [{ createdAt: "asc" }, { code: "asc" }],
    }),
    db.expense.findMany({
      include: { staff: { include: { role: true } } },
      orderBy: { date: "desc" },
    }),
    db.supplierPayment.findMany({
      include: { supplier: true },
      orderBy: { date: "desc" },
    }),
    db.account.findMany(),
    db.adminNotification.findMany({ orderBy: { createdAt: "desc" } }),
    db.notification.findMany({ orderBy: { createdAt: "desc" } }),
    db.stockMovement.findMany({
      include: { product: true, variant: true },
      orderBy: { createdAt: "desc" },
    }),
  ]);

  const erpProducts = products.map((p) => {
    const available = p.variants.reduce((s, v) => s + v.available, 0);
    const reserved = p.variants.reduce((s, v) => s + v.reserved, 0);
    const sold = p.variants.reduce((s, v) => s + v.sold, 0);
    const returned = p.variants.reduce((s, v) => s + v.returned, 0);
    const damaged = p.variants.reduce((s, v) => s + v.damaged, 0);
    const primaryImage = p.images[0]?.url || "/seed/silk_blouse.jpg";
    const gallery = p.images.length ? p.images.map((im) => im.url) : [primaryImage];
    const variants = p.variants.length ? p.variants.map((v) => v.name) : ["Standard"];

    return {
      id: p.id,
      sku: p.sku,
      title: p.title,
      category: p.category.name,
      subcategory: p.subcategory?.name || "General",
      supplierId: p.supplierId || "SUP-01",
      costPrice: p.costPrice,
      landedCost: p.landedCost || p.costPrice,
      wholesalePrice: p.wholesalePrice,
      price: p.price,
      oldPrice: p.oldPrice,
      available,
      reserved,
      sold,
      returned,
      damaged,
      reorderThreshold: p.reorderThreshold,
      isPublished: p.isPublished,
      statusLabel: p.statusLabel || (p.isPublished ? "Active" : "Draft"),
      isDeal: p.isDeal,
      isFeatured: p.isFeatured,
      isNew: p.isNew,
      isJustForYou: p.isJustForYou,
      specialTab: p.specialTab || "Best Sellers",
      rating: p.rating,
      reviewsCount: p.reviewsCount,
      variants,
      image: primaryImage,
      imageKey: p.imageKey || imgKeyFromUrl(primaryImage),
      gallery,
      videoUrl: p.videoUrl || "",
      videoCaption: p.videoCaption || "",
      description: p.description,
      specs: p.specs,
      seoKeywords: p.seoKeywords || "",
      seoDescription: p.seoDescription || "",
      geoKeywords: p.geoKeywords || "",
    };
  });

  const erpCategories = categories.map((c) => ({
    id: c.id,
    name: c.name,
    imgKey: imgKeyFromUrl(c.imageUrl, "silk_blouse"),
    customImage: c.imageUrl && !c.imageUrl.startsWith("/seed/") ? c.imageUrl : undefined,
    imageUrl: c.imageUrl || "/seed/silk_blouse.jpg",
    enabled: c.enabled,
    rolloutPhase: c.rolloutPhase || "Active Capsule",
    subs: c.subcategories.map((s) => s.name),
  }));

  const erpHeroSliders = heroSlides.map((hs) => ({
    id: hs.id,
    eyebrow: hs.tag,
    tag: hs.tag,
    title: hs.title,
    desc: hs.subtitle,
    subtitle: hs.subtitle,
    cta: hs.ctaText,
    ctaText: hs.ctaText,
    category: hs.targetCategory,
    targetCat: hs.targetCategory,
    secondaryText: hs.secondaryText || "",
    secondaryCat: hs.secondaryCategory || "",
    image: hs.imageUrl,
    bgImgKey: imgKeyFromUrl(hs.imageUrl, "hero"),
    showcaseProductId: hs.showcaseProductId || "p5",
  }));

  const erpFooterSections = footerSections.map((sec) => ({
    id: sec.id,
    title: sec.title,
    items: sec.links.map((lk) => ({
      id: lk.id,
      label: lk.label,
      type: lk.type === FooterLinkType.CATEGORY ? "category" : "info",
      targetCat: lk.targetCategory || undefined,
      modalTitle: lk.modalTitle || lk.label,
      message: lk.message || "",
    })),
  }));

  const erpSuppliers = suppliers.map((s) => ({
    id: s.code,
    name: s.name,
    contact: s.contact || "",
    phone: s.phone || "",
    category: s.category || "Accessories & Hair Clips",
    moq: s.moq,
    leadDays: s.leadDays,
    quotedRange: s.quotedRange || "৳ 250 – ৳ 950 / unit",
    terms: s.terms || "50% Advance • 50% on Delivery",
    address: s.address || "Dhaka, Bangladesh",
    paidAmount: s.paidAmount,
    payable: s.payable,
    advanceByStaff: s.advanceByStaff || "Nadia Sultana",
    dueByStaff: s.dueByStaff || "Farhan Islam",
    advanceAccount: s.advanceAccount || "acc_bkash",
    dueAccount: s.dueAccount || "acc_bank",
    defectClaims: s.defectClaims || "0 open claims",
    notes: s.notes || "",
  }));

  const prodTitleById = new Map(products.map((p) => [p.id, p.title]));
  const erpShipments = purchaseOrders.map((po) => ({
    id: po.number,
    date: fmtDateStr(po.date, false),
    supplierId: po.supplierId,
    productId: po.productId,
    sku: po.sku,
    productTitle: prodTitleById.get(po.productId) || po.sku,
    moq: po.moq,
    orderedQty: po.orderedQty,
    receivedQty: po.receivedQty,
    damagedQty: po.damagedQty,
    costPrice: po.costPrice,
    landedCost: po.landedCost,
    wholesalePrice: po.wholesalePrice,
    retailPrice: po.retailPrice,
    warehouse: po.warehouse,
    status: po.status === POStatus.RECEIVED ? "RECEIVED" : po.statusLabel || "PENDING_GRN",
  }));

  const erpPreorders = preorders.map((pr) => ({
    id: pr.number,
    sku: pr.sku,
    productTitle: pr.productTitle,
    customerName: pr.customerName,
    customerPhone: pr.customerPhone,
    supplierName: pr.supplierName || "",
    leadTime: pr.leadTime || "5 Days",
    expectedArrival: fmtDateStr(pr.expectedArrival, false),
    orderValue: pr.orderValue,
    depositHeld: pr.depositHeld,
    status: pr.status,
  }));

  const erpOrders = orders.map((o) => ({
    id: o.number,
    date: fmtDateStr(o.createdAt, true),
    customerName: o.customerName,
    customerPhone: o.customerPhone,
    customerAddress: o.customerAddress,
    channel: CHANNEL_DISPLAY[o.channel] || "Storefront",
    campaignSource: o.campaignSource || "Direct Storefront",
    tier: o.tier,
    courier: o.courier ? COURIER_DISPLAY[o.courier] : "Steadfast Courier",
    trackingNumber: o.trackingNumber || "PENDING",
    dispatchDate: o.dispatchDate ? fmtDateStr(o.dispatchDate, false) : "—",
    deliveryAttempts: o.deliveryAttempts,
    deliveryOutcome: o.deliveryOutcome || "",
    deliveryMethod:
      o.deliveryMethod === DeliveryMethod.OUTSIDE_DHAKA
        ? `Outside Dhaka Nationwide (৳ ${o.deliveryFee || 130})`
        : o.deliveryMethod === DeliveryMethod.EXPRESS
          ? "Express Delivery (Varies by distance)"
          : `Inside Dhaka Standard (৳ ${o.deliveryFee || 70})`,
    deliveryFee: o.deliveryFee,
    discount: o.discount,
    paymentMethod: o.paymentMethod,
    paymentStatus: PAY_STATUS_DISPLAY[o.paymentStatus] || "Pending",
    codSettled: o.codSettled,
    packagingCost: o.packagingCost,
    courierActualCost: o.courierActualCost,
    codFee: o.codFee,
    items: o.items.map((it) => ({
      productId: it.productId || "p1",
      sku: it.sku,
      title: it.title,
      variant: it.variantName || "Standard",
      qty: it.qty,
      unitPrice: it.unitPrice,
      unitCost: it.unitCost,
    })),
    subtotal: o.subtotal,
    totalRevenue: o.total,
    totalCogs: o.totalCogs,
    status: ORDER_STATUS_DISPLAY[o.status] || "New",
  }));

  const erpReturnsLog = returnsLog.map((r) => ({
    id: r.number,
    orderId: r.reason && r.reason.startsWith("ORD-") ? r.reason : r.order.number,
    customerName: r.order.customerName,
    items: r.items,
    status:
      r.status === ReturnStatus.EXCHANGE_DISPATCHED
        ? "Exchange Dispatched"
        : r.status === ReturnStatus.RESTOCKED
          ? "Restocked to Available"
          : r.status === ReturnStatus.DEFECTIVE
            ? "Logged as Damaged"
            : "Processed",
    actionNote: r.actionNote || "",
    refundAmount: r.refundAmount,
  }));

  const erpCrmCustomers = customers.map((c) => ({
    id: c.code,
    name: c.name,
    phone: c.phone,
    email: c.email || "",
    gender: c.gender || "Female",
    dob: c.dob || "14 October, 1997",
    tier:
      c.tier === CustomerTier.VIP
        ? "VIP"
        : c.tier === CustomerTier.REPEAT
          ? "Repeat"
          : c.tier === CustomerTier.INACTIVE
            ? "Inactive"
            : "New",
    rating: c.rating,
    points: c.points,
    ordersCount: c.ordersCount,
    completedOrders: c.completedOrders,
    spend: c.spend,
    returnsCount: c.returnsCount,
    failedCount: c.failedCount,
    address: c.address || "Uttara Sector 12, Dhaka, Bangladesh",
    notes: c.notes || "",
    consent: {
      sms: c.consentSms,
      whatsapp: c.consentWhatsapp,
      email: c.consentEmail,
    },
    referralCode: c.referralCode || `${c.name.split(" ")[0].toUpperCase()}-VIP10`,
  }));

  const erpReviews = reviews.map((rv) => ({
    id: rv.id,
    date: fmtDateStr(rv.createdAt, false),
    customerName: rv.customerName,
    sku: rv.product.sku,
    productTitle: rv.product.title,
    rating: rv.rating,
    comment: rv.comment,
    status:
      rv.status === ReviewStatus.APPROVED
        ? "Approved"
        : rv.status === ReviewStatus.REJECTED
          ? "Rejected"
          : "Pending",
  }));

  const erpCoupons = coupons.map((c) => ({
    code: c.code,
    discountPct: c.discountPct,
    minOrder: c.minOrder,
    startDate: c.startDate ? fmtDateStr(c.startDate, false) : "2027-01-01",
    endDate: c.endDate ? fmtDateStr(c.endDate, false) : "2027-12-31",
    usageLimit: c.usageLimit || 500,
    usedCount: c.usedCount,
    source: c.source || "Storefront",
    attributedOrders: c.attributedOrders,
    attributedRevenue: c.attributedRevenue,
    active: c.active,
  }));

  const erpStaffMembers = staffMembers.map((st) => {
    const cleanCode = st.code && !/^stf-/i.test(st.code) && !/^staff_/i.test(st.code) ? st.code : "";
    return {
      id: st.id,
      dbId: st.id,
      staffId: cleanCode,
      loginId: st.loginId || undefined,
      name: st.name,
      phone: st.phone || "",
      email: st.email,
      role: st.role.name,
      dept: normalizeStaffDept(st.dept),
      shift: normalizeStaffShift(st.shift),
      avatar: st.avatar || initialsFromName(st.name),
      status: staffStatusToLabel(st.status),
      accesses: st.permissions.includes("*")
        ? Object.keys(LEGACY_ACCESS_LABELS)
        : st.permissions.map((k) => moduleLabel(k)),
    };
  });

  const erpExpenses = expenses.map((ex) => {
    const rawCode = ex.staff?.code || "";
    const cleanStaffCode = rawCode && !/^stf-/i.test(rawCode) ? rawCode : (ex.staff?.id || "");
    return {
      id: ex.number,
      date: fmtDateStr(ex.date, false),
      title: ex.title,
      details: ex.details || ex.title,
      category: ex.category,
      account: ex.accountId || "acc_cash",
      responsibleStaffId: ex.staff ? cleanStaffCode : "",
      responsibleStaffName: ex.staff?.name || "Unassigned / Former Staff",
      responsibleStaffRole: ex.staff?.role.name || "Former / Unassigned",
      amount: ex.amount,
    };
  });

  const erpPaymentsLog = paymentsLog.map((pl) => ({
    id: pl.number,
    date: fmtDateStr(pl.date, false),
    supplierId: pl.supplier.code,
    supplierName: pl.supplier.name,
    poId: pl.poNumber || "PO-2027-100",
    paymentType: pl.paymentType || (pl.type === SupplierPaymentType.ADVANCE ? "Advance Payment" : "Due Payment"),
    amount: pl.amount,
    accountKey: pl.accountId || "acc_bank",
    accountName: pl.accountName || "City Bank Corporate A/C",
    advanceByStaff: pl.advanceByStaff || "Nadia Sultana",
    dueByStaff: pl.dueByStaff || "Farhan Islam",
    details: pl.details || "",
  }));

  const erpAccounts: Record<string, { name: string; balance: number }> = {};
  for (const acc of accounts) {
    erpAccounts[acc.id] = { name: acc.name, balance: acc.balance };
  }

  const erpInventoryMovements = movements.map((mv) => ({
    time: fmtDateStr(mv.createdAt, true),
    productId: mv.productId,
    productTitle: mv.product.title,
    sku: mv.product.sku,
    variant: mv.variant?.name || "Standard",
    type: mv.label,
    note: mv.note || "",
  }));

  const erpNotifications = adminNotifications.map((n, idx) => ({
    id: n.id,
    time: idx === 0 ? "10 mins ago" : `${idx + 1} hrs ago`,
    type: n.type,
    msg: n.message,
  }));

  const erpDb = {
    cms: {
      logoLightUrl: settings?.logoLightUrl || "/seed/logo_light.png",
      logoDarkUrl: settings?.logoDarkUrl || "/seed/logo_dark.png",
      topOfferText:
        settings?.topOfferText || "COMPLIMENTARY GIFT WRAPPING ON ALL ORDERS • EXPRESS DELIVERY ACROSS DHAKA",
      topPhone: settings?.conciergePhone || "+880 1711-889900",
      secTrendTitle: settings?.secTrendTitle || "Trendsetters",
      secNewTitle: settings?.secNewTitle || "New Arrivals",
      secJfyTitle: settings?.secJfyTitle || "Just For You",
      newsletterTitle: settings?.newsletterTitle || "Join the Tehzib Private Circle",
      newsletterSub:
        settings?.newsletterSub ||
        "Receive private previews of seasonal drops, bespoke sizing invitations, and atelier stories.",
      footerBio:
        settings?.footerBio ||
        "Tehzib is a contemporary Bangladeshi fashion, footwear, accessories, and lifestyle house blending Parisian Blush aesthetics with artisanal heritage.",
      footerAddress: settings?.footerAddress || "Uttara Sector 12, Dhaka, Bangladesh",
      footerEmail: settings?.footerEmail || "concierge@tehzib.com",
      footerPhone: settings?.footerPhone || "+880 1711-889900",
      footerCopyright: settings?.footerCopyright || "© 2027 Tehzib. All rights reserved.",
      socials: {
        fb: settings?.socialFacebook || "https://facebook.com/tehzib.bd",
        insta: settings?.socialInstagram || "https://instagram.com/tehzib.bd",
        tiktok: settings?.socialTiktok || "https://tiktok.com/@tehzib.bd",
        threads: settings?.socialThreads || "https://threads.net/@tehzib.bd",
      },
      heroSliders: erpHeroSliders,
      categories: erpCategories,
      footerSections: erpFooterSections,
    },
    suppliers: erpSuppliers,
    products: erpProducts,
    shipments: erpShipments,
    preorders: erpPreorders,
    orders: erpOrders,
    returnsLog: erpReturnsLog,
    crmCustomers: erpCrmCustomers,
    reviews: erpReviews,
    coupons: erpCoupons,
    expenseCategories: lookups
      .filter((l) => l.kind === LookupKind.EXPENSE_CATEGORY)
      .map((l) => l.value),
    supplierCategories: lookups
      .filter((l) => l.kind === LookupKind.SUPPLIER_CATEGORY)
      .map((l) => l.value),
    paymentTermsList: lookups
      .filter((l) => l.kind === LookupKind.PAYMENT_TERM)
      .map((l) => l.value),
    staffRoles: staffRoles.map((r) => r.name),
    staffRolesByDept: buildStaffRolesByDept(staffRoles),
    staffMembers: erpStaffMembers,
    expenses: erpExpenses,
    paymentsLog: erpPaymentsLog,
    accounts: erpAccounts,
    emsNotifications: erpNotifications,
    inventoryMovements: erpInventoryMovements,
  };

  const storefrontNotifications = storeNotifications.map((sn, idx) => ({
    id: sn.id,
    group: idx < 2 ? "Today" : idx < 4 ? "Yesterday" : "Earlier",
    icon: sn.icon,
    title: sn.title,
    body: sn.body,
    time: idx === 0 ? "NOW" : idx === 1 ? "2H AGO" : "1D AGO",
    isRecent: idx === 0,
    unread: !sn.readAt,
    targetView: sn.targetView || "home",
  }));

  const promoBannersFormatted = promoBanners.map((pb) => ({
    eyebrow: pb.eyebrow,
    title: pb.title,
    sub: pb.sub,
    targetCat: pb.targetCategory,
    imgKey: imgKeyFromUrl(pb.imageUrl, "heels"),
    imageUrl: pb.imageUrl,
  }));

  return {
    erpDb,
    storefrontNotifications,
    promoBanners: promoBannersFormatted,
    logos: {
      light: settings?.logoLightUrl || "/seed/logo_light.png",
      dark: settings?.logoDarkUrl || "/seed/logo_dark.png",
    },
  };
}

let persistPlatformQueue: Promise<unknown> = Promise.resolve();

/**
 * Persists mutated ERP_DB + Storefront state back to PostgreSQL inside an ACID transaction.
 * Serialized sequentially so overlapping autosaves cannot collide on SELECT/INSERT upserts.
 */
export async function persistPlatformStateToPostgres(
  payload: {
    erpDb?: Record<string, any>;
    logos?: { light?: string; dark?: string };
    notifications?: Array<Record<string, any>>;
    deletedStaffIds?: string[];
  },
  adminSession: AdminSession | null = null,
) {
  const run = persistPlatformQueue.then(
    () => persistPlatformStateInner(payload, adminSession),
    () => persistPlatformStateInner(payload, adminSession),
  );
  persistPlatformQueue = run.catch(() => undefined);
  return run;
}

async function persistPlatformStateInner(
  payload: {
    erpDb?: Record<string, any>;
    logos?: { light?: string; dark?: string };
    notifications?: Array<Record<string, any>>;
    deletedStaffIds?: string[];
  },
  adminSession: AdminSession | null = null,
) {
  const erp = payload.erpDb;
  if (!erp) return;

  await db.$transaction(
    async (tx) => {
      // 1. Store Settings & CMS
      if (erp.cms) {
        const c = erp.cms;
        await tx.storeSettings.upsert({
          where: { id: "default" },
          create: {
            id: "default",
            logoLightUrl: payload.logos?.light || c.logoLightUrl || "/seed/logo_light.png",
            logoDarkUrl: payload.logos?.dark || c.logoDarkUrl || "/seed/logo_dark.png",
            topOfferText: c.topOfferText || "",
            conciergePhone: c.topPhone || "+880 1711-889900",
            secTrendTitle: c.secTrendTitle || "Trendsetters",
            secNewTitle: c.secNewTitle || "New Arrivals",
            secJfyTitle: c.secJfyTitle || "Just For You",
            newsletterTitle: c.newsletterTitle || "Join the Tehzib Private Circle",
            newsletterSub: c.newsletterSub || "",
            footerBio: c.footerBio || "",
            footerAddress: c.footerAddress || "Uttara Sector 12, Dhaka, Bangladesh",
            footerEmail: c.footerEmail || "concierge@tehzib.com",
            footerPhone: c.footerPhone || "+880 1711-889900",
            footerCopyright: c.footerCopyright || "© 2027 Tehzib. All rights reserved.",
            socialFacebook: c.socials?.fb || "",
            socialInstagram: c.socials?.insta || "",
            socialTiktok: c.socials?.tiktok || "",
            socialThreads: c.socials?.threads || "",
          },
          update: {
            logoLightUrl: payload.logos?.light || c.logoLightUrl || undefined,
            logoDarkUrl: payload.logos?.dark || c.logoDarkUrl || undefined,
            topOfferText: c.topOfferText,
            conciergePhone: c.topPhone,
            secTrendTitle: c.secTrendTitle,
            secNewTitle: c.secNewTitle,
            secJfyTitle: c.secJfyTitle,
            newsletterTitle: c.newsletterTitle,
            newsletterSub: c.newsletterSub,
            footerBio: c.footerBio,
            footerAddress: c.footerAddress,
            footerEmail: c.footerEmail,
            footerPhone: c.footerPhone,
            footerCopyright: c.footerCopyright,
            socialFacebook: c.socials?.fb,
            socialInstagram: c.socials?.insta,
            socialTiktok: c.socials?.tiktok,
            socialThreads: c.socials?.threads,
          },
        });

        // Categories & Subcategories
        if (Array.isArray(c.categories)) {
          for (let i = 0; i < c.categories.length; i++) {
            const cat = c.categories[i];
            const slug = slugify(cat.name);
            const imgUrl =
              cat.customImage ||
              cat.imageUrl ||
              (cat.imgKey?.startsWith("/") || cat.imgKey?.startsWith("data:")
                ? cat.imgKey
                : `/seed/${cat.imgKey || "silk_blouse"}.jpg`);
            const upsertedCat = await tx.category.upsert({
              where: { name: cat.name },
              create: {
                name: cat.name,
                slug,
                imageUrl: imgUrl,
                enabled: cat.enabled !== false,
                rolloutPhase: cat.rolloutPhase || "Active Capsule",
                sortOrder: i,
              },
              update: {
                imageUrl: imgUrl,
                enabled: cat.enabled !== false,
                rolloutPhase: cat.rolloutPhase || "Active Capsule",
                sortOrder: i,
              },
            });
            const subs: string[] = Array.isArray(cat.subs) ? cat.subs : [];
            for (let j = 0; j < subs.length; j++) {
              const sName = subs[j];
              const sSlug = slugify(sName);
              if (!sSlug) continue;
              await tx.subcategory.upsert({
                where: { categoryId_slug: { categoryId: upsertedCat.id, slug: sSlug } },
                create: {
                  name: sName,
                  slug: sSlug,
                  sortOrder: j,
                  categoryId: upsertedCat.id,
                },
                update: { name: sName, sortOrder: j },
              });
            }
          }
        }

        // Hero Sliders
        if (Array.isArray(c.heroSliders)) {
          await tx.heroSlide.deleteMany();
          for (let i = 0; i < c.heroSliders.length; i++) {
            const hs = c.heroSliders[i];
            const img =
              hs.image && (hs.image.startsWith("/") || hs.image.startsWith("http") || hs.image.startsWith("data:"))
                ? hs.image
                : hs.bgImgKey &&
                    (hs.bgImgKey.startsWith("/") || hs.bgImgKey.startsWith("http") || hs.bgImgKey.startsWith("data:"))
                  ? hs.bgImgKey
                  : `/seed/${hs.bgImgKey || hs.image || "hero"}.jpg`;
            await tx.heroSlide.create({
              data: {
                id: hs.id || `slide-${i + 1}`,
                tag: hs.eyebrow || hs.tag || "Tehzib Edit",
                title: hs.title || "Tehzib Collection",
                subtitle: hs.desc || hs.subtitle || "",
                ctaText: hs.cta || hs.ctaText || "Shop Collection →",
                targetCategory: hs.category || hs.targetCat || "All",
                secondaryText: hs.secondaryText || "",
                secondaryCategory: hs.secondaryCat || "",
                imageUrl: img,
                showcaseProductId: hs.showcaseProductId || "p5",
                sortOrder: i,
                active: true,
              },
            });
          }
        }

        // Footer Sections
        if (Array.isArray(c.footerSections)) {
          await tx.footerLink.deleteMany();
          await tx.footerSection.deleteMany();
          for (let i = 0; i < c.footerSections.length; i++) {
            const sec = c.footerSections[i];
            await tx.footerSection.create({
              data: {
                id: sec.id || `fsec_${i}`,
                title: sec.title,
                sortOrder: i,
                links: {
                  create: (sec.items || []).map((it: any, j: number) => ({
                    id: it.id || `flink_${i}_${j}`,
                    label: it.label,
                    type: it.type === "category" ? FooterLinkType.CATEGORY : FooterLinkType.INFO,
                    modalTitle: it.modalTitle || it.label,
                    message: it.message || "",
                    targetCategory: it.targetCat || null,
                    sortOrder: j,
                  })),
                },
              },
            });
          }
        }
      }

      // 2. Accounts
      if (erp.accounts && typeof erp.accounts === "object") {
        for (const [accId, acc] of Object.entries(erp.accounts) as Array<[string, any]>) {
          await tx.account.updateMany({
            where: { id: accId },
            data: { name: acc.name, balance: Math.round(Number(acc.balance) || 0) },
          });
        }
      }

      // 3. Suppliers
      if (Array.isArray(erp.suppliers)) {
        for (const sup of erp.suppliers) {
          await tx.supplier.upsert({
            where: { code: sup.id },
            create: {
              id: sup.id,
              code: sup.id,
              name: sup.name,
              contact: sup.contact || "",
              phone: sup.phone || "",
              category: sup.category || "",
              moq: Number(sup.moq) || 1,
              leadDays: Number(sup.leadDays) || 3,
              quotedRange: sup.quotedRange || "",
              terms: sup.terms || "",
              address: sup.address || "",
              paidAmount: Math.round(Number(sup.paidAmount) || 0),
              payable: Math.round(Number(sup.payable) || 0),
              advanceByStaff: sup.advanceByStaff || "Nadia Sultana",
              dueByStaff: sup.dueByStaff || "Farhan Islam",
              advanceAccount: sup.advanceAccount || "acc_bkash",
              dueAccount: sup.dueAccount || "acc_bank",
              defectClaims: sup.defectClaims || "",
              notes: sup.notes || "",
            },
            update: {
              name: sup.name,
              contact: sup.contact || "",
              phone: sup.phone || "",
              category: sup.category || "",
              moq: Number(sup.moq) || 1,
              leadDays: Number(sup.leadDays) || 3,
              quotedRange: sup.quotedRange || "",
              terms: sup.terms || "",
              address: sup.address || "",
              paidAmount: Math.round(Number(sup.paidAmount) || 0),
              payable: Math.round(Number(sup.payable) || 0),
              advanceByStaff: sup.advanceByStaff,
              dueByStaff: sup.dueByStaff,
              advanceAccount: sup.advanceAccount,
              dueAccount: sup.dueAccount,
              defectClaims: sup.defectClaims || "",
              notes: sup.notes || "",
            },
          });
        }
      }

      // 4. Products, Variants & Images
      if (Array.isArray(erp.products)) {
        const allCats = await tx.category.findMany({ include: { subcategories: true } });
        const catByName = new Map(allCats.map((c) => [c.name, c]));

        for (const p of erp.products) {
          let cat = catByName.get(p.category);
          if (!cat) {
            cat = await tx.category.create({
              data: {
                name: p.category || "Accessories",
                slug: slugify(p.category || "Accessories"),
                imageUrl: "/seed/silk_blouse.jpg",
                enabled: true,
              },
              include: { subcategories: true },
            });
            catByName.set(cat.name, cat);
          }

          let subId: string | null = null;
          if (p.subcategory) {
            const existingSub = cat.subcategories.find((s) => s.name === p.subcategory);
            if (existingSub) {
              subId = existingSub.id;
            } else {
              const sSlug = slugify(p.subcategory);
              if (sSlug) {
                const createdSub = await tx.subcategory.upsert({
                  where: { categoryId_slug: { categoryId: cat.id, slug: sSlug } },
                  create: { name: p.subcategory, slug: sSlug, categoryId: cat.id },
                  update: { name: p.subcategory },
                });
                subId = createdSub.id;
              }
            }
          }

          const uniqueSku = p.id === "p8" && p.sku === "THZ-AC-008" ? "THZ-AC-008-CLW" : p.sku;
          const upsertedProd = await tx.product.upsert({
            where: { id: p.id },
            create: {
              id: p.id,
              sku: uniqueSku,
              slug: `${slugify(p.title)}-${slugify(uniqueSku)}-${p.id}`,
              title: p.title,
              categoryId: cat.id,
              subcategoryId: subId,
              supplierId: p.supplierId || null,
              costPrice: Math.round(Number(p.costPrice) || 0),
              landedCost: Math.round(Number(p.landedCost || p.costPrice) || 0),
              wholesalePrice: Math.round(Number(p.wholesalePrice) || 0),
              price: Math.round(Number(p.price) || 0),
              oldPrice: p.oldPrice ? Math.round(Number(p.oldPrice)) : null,
              status: p.isPublished === false ? ProductStatus.DRAFT : ProductStatus.ACTIVE,
              statusLabel: p.statusLabel || (p.isPublished === false ? "Draft" : "Active"),
              isPublished: p.isPublished !== false,
              isDeal: Boolean(p.isDeal),
              isFeatured: Boolean(p.isFeatured ?? p.isDeal),
              isNew: Boolean(p.isNew),
              isJustForYou: Boolean(p.isJustForYou),
              specialTab: p.specialTab || "Best Sellers",
              rating: Number(p.rating) || 4.9,
              reviewsCount: Number(p.reviewsCount) || 84,
              reorderThreshold: Number(p.reorderThreshold) || 5,
              description: p.description || "",
              specs: p.specs || "",
              videoUrl: p.videoUrl || null,
              videoCaption: p.videoCaption || null,
              seoKeywords: p.seoKeywords || "",
              seoDescription: p.seoDescription || "",
              geoKeywords: p.geoKeywords || "",
            },
            update: {
              title: p.title,
              categoryId: cat.id,
              subcategoryId: subId,
              supplierId: p.supplierId || null,
              costPrice: Math.round(Number(p.costPrice) || 0),
              landedCost: Math.round(Number(p.landedCost || p.costPrice) || 0),
              wholesalePrice: Math.round(Number(p.wholesalePrice) || 0),
              price: Math.round(Number(p.price) || 0),
              oldPrice: p.oldPrice ? Math.round(Number(p.oldPrice)) : null,
              status: p.isPublished === false ? ProductStatus.DRAFT : ProductStatus.ACTIVE,
              statusLabel: p.statusLabel || (p.isPublished === false ? "Draft" : "Active"),
              isPublished: p.isPublished !== false,
              isDeal: Boolean(p.isDeal),
              isNew: Boolean(p.isNew),
              isJustForYou: Boolean(p.isJustForYou),
              specialTab: p.specialTab || "Best Sellers",
              reorderThreshold: Number(p.reorderThreshold) || 5,
              description: p.description || "",
              specs: p.specs || "",
              videoUrl: p.videoUrl || null,
              videoCaption: p.videoCaption || null,
              seoKeywords: p.seoKeywords || "",
              seoDescription: p.seoDescription || "",
              geoKeywords: p.geoKeywords || "",
            },
          });

          // Sync primary stock counts on the product's first variant
          const existingVars = await tx.productVariant.findMany({
            where: { productId: upsertedProd.id },
            orderBy: { sortOrder: "asc" },
          });
          if (existingVars.length > 0) {
            await tx.productVariant.update({
              where: { id: existingVars[0].id },
              data: {
                available: Math.max(0, Math.round(Number(p.available) || 0)),
                reserved: Math.max(0, Math.round(Number(p.reserved) || 0)),
                sold: Math.max(0, Math.round(Number(p.sold) || 0)),
                returned: Math.max(0, Math.round(Number(p.returned) || 0)),
                damaged: Math.max(0, Math.round(Number(p.damaged) || 0)),
              },
            });
            for (let vi = 1; vi < existingVars.length; vi++) {
              await tx.productVariant.update({
                where: { id: existingVars[vi].id },
                data: { available: 0, reserved: 0, sold: 0, returned: 0, damaged: 0 },
              });
            }
          } else {
            const vNames: string[] = Array.isArray(p.variants) && p.variants.length ? p.variants : ["Standard"];
            for (let vi = 0; vi < vNames.length; vi++) {
              await tx.productVariant.create({
                data: {
                  productId: upsertedProd.id,
                  sku: vi === 0 ? uniqueSku : `${uniqueSku}-${vi + 1}`,
                  name: vNames[vi],
                  sortOrder: vi,
                  available: vi === 0 ? Math.max(0, Math.round(Number(p.available) || 0)) : 0,
                  reserved: vi === 0 ? Math.max(0, Math.round(Number(p.reserved) || 0)) : 0,
                  sold: vi === 0 ? Math.max(0, Math.round(Number(p.sold) || 0)) : 0,
                  returned: vi === 0 ? Math.max(0, Math.round(Number(p.returned) || 0)) : 0,
                  damaged: vi === 0 ? Math.max(0, Math.round(Number(p.damaged) || 0)) : 0,
                },
              });
            }
          }

          // Update images if gallery or image provided
          const galleryUrls: string[] =
            Array.isArray(p.gallery) && p.gallery.length
              ? p.gallery
              : p.image
                ? [p.image]
                : [];
          if (galleryUrls.length > 0) {
            await tx.productImage.deleteMany({ where: { productId: upsertedProd.id } });
            await tx.productImage.createMany({
              data: galleryUrls.map((url, idx) => ({
                productId: upsertedProd.id,
                url,
                alt: `${p.title} - ${idx + 1}`,
                sortOrder: idx,
              })),
            });
          }
        }
      }

      // 5. Purchase Orders (Shipments)
      if (Array.isArray(erp.shipments)) {
        for (const sh of erp.shipments) {
          const status: POStatus =
            sh.status === "RECEIVED"
              ? POStatus.RECEIVED
              : sh.status === "IN_TRANSIT"
                ? POStatus.IN_TRANSIT
                : POStatus.ORDERED;
          const prodExists = await tx.product.findUnique({ where: { id: sh.productId } });
          if (!prodExists) continue;
          await tx.purchaseOrder.upsert({
            where: { number: sh.id },
            create: {
              id: sh.id,
              number: sh.id,
              supplierId: sh.supplierId,
              productId: sh.productId,
              sku: sh.sku || prodExists.sku,
              moq: Number(sh.moq) || 1,
              orderedQty: Number(sh.orderedQty) || 0,
              receivedQty: Number(sh.receivedQty) || 0,
              damagedQty: Number(sh.damagedQty) || 0,
              costPrice: Math.round(Number(sh.costPrice) || 0),
              landedCost: Math.round(Number(sh.landedCost || sh.costPrice) || 0),
              wholesalePrice: Math.round(Number(sh.wholesalePrice) || 0),
              retailPrice: Math.round(Number(sh.retailPrice) || 0),
              warehouse: sh.warehouse || "Uttara Sector 12 Hub",
              status,
              statusLabel: sh.status || "PENDING_GRN",
            },
            update: {
              receivedQty: Number(sh.receivedQty) || 0,
              damagedQty: Number(sh.damagedQty) || 0,
              costPrice: Math.round(Number(sh.costPrice) || 0),
              landedCost: Math.round(Number(sh.landedCost || sh.costPrice) || 0),
              wholesalePrice: Math.round(Number(sh.wholesalePrice) || 0),
              retailPrice: Math.round(Number(sh.retailPrice) || 0),
              status,
              statusLabel: sh.status || "PENDING_GRN",
            },
          });
        }
      }

      // 6. Orders
      if (Array.isArray(erp.orders)) {
        for (const ord of erp.orders) {
          const status = ORDER_STATUS_FROM_DISPLAY[ord.status] || OrderStatus.NEW;
          const paymentStatus = PAY_STATUS_FROM_DISPLAY[ord.paymentStatus] || PaymentStatus.PENDING;
          const courier = COURIER_FROM_DISPLAY[ord.courier] || Courier.STEADFAST;
          const channel: OrderChannel =
            ord.channel === "Instagram"
              ? OrderChannel.INSTAGRAM
              : ord.channel === "Facebook"
                ? OrderChannel.FACEBOOK
                : ord.channel === "WhatsApp"
                  ? OrderChannel.WHATSAPP
                  : ord.channel === "Showroom POS"
                    ? OrderChannel.SHOWROOM_POS
                    : OrderChannel.STOREFRONT;

          const existingOrder = await tx.order.findUnique({ where: { number: ord.id } });
          if (existingOrder) {
            await tx.order.update({
              where: { id: existingOrder.id },
              data: {
                status,
                paymentStatus,
                codSettled: Boolean(ord.codSettled),
                courier,
                trackingNumber: ord.trackingNumber || null,
                deliveryAttempts: Number(ord.deliveryAttempts) || 0,
                deliveryOutcome: ord.deliveryOutcome || "",
              },
            });
          } else {
            await tx.order.create({
              data: {
                id: ord.id,
                number: ord.id,
                customerName: ord.customerName || "Walk-In Customer",
                customerPhone: ord.customerPhone || "+880 1700-000000",
                customerAddress: ord.customerAddress || "Dhaka, Bangladesh",
                channel,
                campaignSource: ord.campaignSource || "Storefront",
                tier: ord.tier === "WHOLESALE" ? PriceTier.WHOLESALE : PriceTier.RETAIL,
                status,
                deliveryMethod: String(ord.deliveryMethod || "").toLowerCase().includes("outside")
                  ? DeliveryMethod.OUTSIDE_DHAKA
                  : String(ord.deliveryMethod || "").toLowerCase().includes("express")
                    ? DeliveryMethod.EXPRESS
                    : DeliveryMethod.INSIDE_DHAKA,
                deliveryFee: Math.round(Number(ord.deliveryFee) || 0),
                courier,
                trackingNumber: ord.trackingNumber || "PENDING",
                deliveryAttempts: Number(ord.deliveryAttempts) || 0,
                deliveryOutcome: ord.deliveryOutcome || "",
                subtotal: Math.round(Number(ord.subtotal) || 0),
                discount: Math.round(Number(ord.discount) || 0),
                total: Math.round(Number(ord.totalRevenue) || 0),
                totalCogs: Math.round(Number(ord.totalCogs) || 0),
                paymentMethod: ord.paymentMethod || "Cash on Delivery (COD)",
                paymentStatus,
                codSettled: Boolean(ord.codSettled),
                packagingCost: Math.round(Number(ord.packagingCost) || 35),
                courierActualCost: Math.round(Number(ord.courierActualCost) || 60),
                codFee: Math.round(Number(ord.codFee) || 0),
                items: {
                  create: (ord.items || []).map((it: any) => ({
                    productId: it.productId || null,
                    sku: it.sku || "THZ-SKU",
                    title: it.title || "Tehzib Item",
                    variantName: it.variant || "Standard",
                    qty: Number(it.qty) || 1,
                    unitPrice: Math.round(Number(it.unitPrice) || 0),
                    unitCost: Math.round(Number(it.unitCost) || 0),
                  })),
                },
              },
            });
          }
        }
      }

      // 7. Returns Log
      if (Array.isArray(erp.returnsLog)) {
        const firstOrder = await tx.order.findFirst();
        if (firstOrder) {
          for (const ret of erp.returnsLog) {
            const matchedOrder = await tx.order.findUnique({ where: { number: ret.orderId } });
            await tx.returnRequest.upsert({
              where: { number: ret.id },
              create: {
                id: ret.id,
                number: ret.id,
                orderId: matchedOrder?.id || firstOrder.id,
                type: ReturnType.RETURN,
                status: String(ret.status).includes("Damaged")
                  ? ReturnStatus.DEFECTIVE
                  : String(ret.status).includes("Exchange")
                    ? ReturnStatus.EXCHANGE_DISPATCHED
                    : ReturnStatus.RESTOCKED,
                items: ret.items || "",
                reason: ret.orderId,
                actionNote: ret.actionNote || "",
                refundAmount: Math.round(Number(ret.refundAmount) || 0),
              },
              update: {
                items: ret.items || "",
                actionNote: ret.actionNote || "",
                refundAmount: Math.round(Number(ret.refundAmount) || 0),
              },
            });
          }
        }
      }

      // 8. CRM Customers
      if (Array.isArray(erp.crmCustomers)) {
        for (const c of erp.crmCustomers) {
          const tier: CustomerTier =
            c.tier === "VIP"
              ? CustomerTier.VIP
              : c.tier === "Repeat"
                ? CustomerTier.REPEAT
                : c.tier === "Inactive"
                  ? CustomerTier.INACTIVE
                  : CustomerTier.NEW;
          const cleanEmail = c.email ? String(c.email).trim().toLowerCase() : null;
          const cleanPhone = String(c.phone || "").trim();
          let existingCust = await tx.customer.findUnique({ where: { code: c.id } });
          if (!existingCust && (cleanEmail || cleanPhone)) {
            existingCust = await tx.customer.findFirst({
              where: {
                OR: [
                  ...(cleanEmail ? [{ email: cleanEmail }] : []),
                  ...(cleanPhone ? [{ phone: cleanPhone }] : []),
                ],
              },
            });
          }
          let safeEmail = cleanEmail;
          if (safeEmail && (!existingCust || existingCust.email !== safeEmail)) {
            const clash = await tx.customer.findUnique({ where: { email: safeEmail } });
            if (clash && clash.id !== existingCust?.id) {
              safeEmail = existingCust ? existingCust.email : null;
            }
          }
          let safePhone = cleanPhone || existingCust?.phone || c.id;
          if (safePhone && (!existingCust || existingCust.phone !== safePhone)) {
            const phoneClash = await tx.customer.findUnique({ where: { phone: safePhone } });
            if (phoneClash && phoneClash.id !== existingCust?.id) {
              safePhone = existingCust ? existingCust.phone : `${safePhone}-${c.id}`;
            }
          }
          if (existingCust) {
            await tx.customer.update({
              where: { id: existingCust.id },
              data: {
                name: c.name,
                email: safeEmail,
                phone: safePhone,
                tier,
                rating: Number(c.rating) || 4.9,
                points: Math.round(Number(c.points) || 0),
                ordersCount: Number(c.ordersCount) || 0,
                completedOrders: Number(c.completedOrders) || 0,
                spend: Math.round(Number(c.spend) || 0),
                returnsCount: Number(c.returnsCount) || 0,
                failedCount: Number(c.failedCount) || 0,
                address: c.address || "",
                notes: c.notes || "",
                consentSms: c.consent?.sms !== false,
                consentWhatsapp: c.consent?.whatsapp !== false,
                consentEmail: c.consent?.email !== false,
              },
            });
          } else {
            await tx.customer.create({
              data: {
                id: c.id,
                code: c.id,
                name: c.name,
                phone: safePhone,
                email: safeEmail,
                tier,
                rating: Number(c.rating) || 4.9,
                points: Math.round(Number(c.points) || 0),
                ordersCount: Number(c.ordersCount) || 0,
                completedOrders: Number(c.completedOrders) || 0,
                spend: Math.round(Number(c.spend) || 0),
                returnsCount: Number(c.returnsCount) || 0,
                failedCount: Number(c.failedCount) || 0,
                address: c.address || "",
                notes: c.notes || "",
                consentSms: c.consent?.sms !== false,
                consentWhatsapp: c.consent?.whatsapp !== false,
                consentEmail: c.consent?.email !== false,
                referralCode: c.referralCode || null,
              },
            });
          }
        }
      }

      // 9. Reviews
      if (Array.isArray(erp.reviews)) {
        for (const rv of erp.reviews) {
          const status =
            rv.status === "Approved"
              ? ReviewStatus.APPROVED
              : rv.status === "Rejected"
                ? ReviewStatus.REJECTED
                : ReviewStatus.PENDING;
          const existingRev = await tx.review.findUnique({ where: { id: rv.id } });
          if (existingRev) {
            await tx.review.update({
              where: { id: rv.id },
              data: { status, rating: Number(rv.rating) || 5, comment: rv.comment },
            });
          } else {
            const prod = await tx.product.findFirst({ where: { sku: rv.sku } });
            if (prod) {
              await tx.review.create({
                data: {
                  id: rv.id,
                  productId: prod.id,
                  customerName: rv.customerName || "Verified Buyer",
                  rating: Number(rv.rating) || 5,
                  comment: rv.comment || "",
                  status,
                },
              });
            }
          }
        }
      }

      // 10. Coupons
      if (Array.isArray(erp.coupons)) {
        for (const cpn of erp.coupons) {
          await tx.coupon.upsert({
            where: { code: cpn.code },
            create: {
              code: cpn.code,
              discountPct: Number(cpn.discountPct) || 10,
              minOrder: Math.round(Number(cpn.minOrder) || 0),
              usageLimit: Number(cpn.usageLimit) || 500,
              usedCount: Number(cpn.usedCount) || 0,
              source: cpn.source || "Storefront",
              attributedOrders: Number(cpn.attributedOrders) || 0,
              attributedRevenue: Math.round(Number(cpn.attributedRevenue) || 0),
              active: cpn.active !== false,
            },
            update: {
              discountPct: Number(cpn.discountPct) || 10,
              minOrder: Math.round(Number(cpn.minOrder) || 0),
              usageLimit: Number(cpn.usageLimit) || 500,
              usedCount: Number(cpn.usedCount) || 0,
              source: cpn.source || "Storefront",
              attributedOrders: Number(cpn.attributedOrders) || 0,
              attributedRevenue: Math.round(Number(cpn.attributedRevenue) || 0),
              active: cpn.active !== false,
            },
          });
        }
      }

      // 11. Staff Roles & Members (sync before Expenses & Payments so new/renamed staff FKs resolve)
      const hasTeamAdmin = Boolean(adminSession && hasPermission(adminSession.permissions, "team"));

      if (hasTeamAdmin && erp.staffRolesByDept && typeof erp.staffRolesByDept === "object") {
        for (const [rawDept, roles] of Object.entries(erp.staffRolesByDept)) {
          if (!Array.isArray(roles)) continue;
          const normDept = normalizeStaffDept(rawDept);
          for (const rawRoleName of roles) {
            const rName = String(rawRoleName || "").trim();
            if (!rName || rName === "__ADD_NEW__") continue;
            await tx.staffRole.upsert({
              where: { name: rName },
              create: {
                name: rName,
                dept: normDept,
                permissions: rName.toLowerCase().includes("founder") || rName === "Chief Operating Officer" ? ["*"] : ["dashboard"],
              },
              update: { dept: normDept },
            });
          }
        }
      } else if (hasTeamAdmin && Array.isArray(erp.staffRoles)) {
        for (const rawRoleName of erp.staffRoles) {
          const rName = String(rawRoleName || "").trim();
          if (!rName) continue;
          await tx.staffRole.upsert({
            where: { name: rName },
            create: {
              name: rName,
              permissions: rName.toLowerCase().includes("founder") ? ["*"] : ["dashboard"],
            },
            update: {},
          });
        }
      }

      // Apply explicit staff deletions before upserting remaining/new members so freed emails/Staff IDs can be reused immediately.
      const keptStaffIds = new Set<string>();
      if (Array.isArray(erp.staffMembers)) {
        for (const st of erp.staffMembers) {
          if (st?.dbId) keptStaffIds.add(String(st.dbId).trim());
          if (st?.id) keptStaffIds.add(String(st.id).trim());
        }
      }
      const explicitDeleteIds = [
        ...(Array.isArray(payload.deletedStaffIds) ? payload.deletedStaffIds : []),
        ...(Array.isArray(erp.__deletedStaffIds) ? erp.__deletedStaffIds : []),
      ]
        .map((id) => String(id || "").trim())
        .filter(Boolean);
      if (explicitDeleteIds.length > 0) {
        if (!adminSession) {
          throw new ApiError(403, "Admin authentication required to delete staff members.");
        }
        if (!hasTeamAdmin) {
          throw new ApiError(403, "Working Team Admin permission required to delete staff members.");
        }
      }
      const rawDeleteIds = explicitDeleteIds.filter((id) => !keptStaffIds.has(id));
      const uniqueDeleteIds = Array.from(new Set(rawDeleteIds));
      if (uniqueDeleteIds.length > 0) {
        const existingStaffRows = await tx.staff.findMany({ select: { id: true } });
        const deleteIdSet = new Set(uniqueDeleteIds);
        const matchedDeleteIds = existingStaffRows
          .filter((row) => deleteIdSet.has(row.id))
          .map((row) => row.id);
        if (matchedDeleteIds.length > 0) {
          if (existingStaffRows.length - matchedDeleteIds.length < 1) {
            throw new ApiError(400, "At least 1 staff member must remain in the system.");
          }
          await tx.staff.deleteMany({
            where: { id: { in: matchedDeleteIds } },
          });
        }
      }

      if (adminSession && Array.isArray(erp.staffMembers)) {
        for (let stIdx = 0; stIdx < erp.staffMembers.length; stIdx++) {
          const st = erp.staffMembers[stIdx];
          const roleName = String(st.role || "Operations Staff").trim() || "Operations Staff";
          const emailClean = String(st.email || "").trim().toLowerCase();
          const prevEmailClean = st.prevEmail ? String(st.prevEmail).trim().toLowerCase() : "";
          const lookupId = String(st.dbId || st.id || "").trim();
          const rawCustomId = st.staffId !== undefined && st.staffId !== null ? String(st.staffId).trim() : "";
          const cleanCustomId = /^stf-|^staff_/i.test(rawCustomId) ? "" : rawCustomId;

          // Deterministic identity lookup: immutable DB id first, then previous/current email, then loginId.
          // Never match another employee purely by `code` (Staff ID) or a Staff ID collision could overwrite them!
          let existingSt = lookupId ? await tx.staff.findUnique({ where: { id: lookupId }, include: { role: true } }) : null;
          if (!existingSt && prevEmailClean) {
            existingSt = await tx.staff.findFirst({
              where: { email: { equals: prevEmailClean, mode: "insensitive" } },
              include: { role: true },
            });
          }
          if (!existingSt && emailClean) {
            existingSt = await tx.staff.findFirst({
              where: { email: { equals: emailClean, mode: "insensitive" } },
              include: { role: true },
            });
          }
          if (!existingSt && st.loginId) {
            existingSt = await tx.staff.findUnique({ where: { loginId: String(st.loginId).trim() }, include: { role: true } });
          }

          if (!hasTeamAdmin) {
            if (!existingSt) {
              throw new ApiError(403, "Working Team Admin permission required to create staff members.");
            }
            const existingCleanCode =
              existingSt.code && !/^stf-|^staff_/i.test(existingSt.code) ? existingSt.code : "";
            const existingPermKeys = expandStaffPermissionKeys(existingSt.permissions);
            const rawIncomingPerms = Array.isArray(st.accesses) && st.accesses.length
              ? st.accesses
              : existingSt.permissions;
            const incomingPermKeys = expandStaffPermissionKeys(rawIncomingPerms);
            const resolvedStatus = labelToStaffStatus(st.status);
            const resolvedShift = normalizeStaffShift(st.shift);
            const resolvedAvatar =
              typeof st.avatar === "string" && st.avatar.trim()
                ? st.avatar.trim().slice(0, 2).toUpperCase()
                : initialsFromName(st.name);
            const newPlainPass = typeof st.newPassword === "string" ? st.newPassword.trim() : "";

            const privilegedChanged =
              roleName !== existingSt.role.name ||
              resolvedStatus !== existingSt.status ||
              resolvedShift !== normalizeStaffShift(existingSt.shift) ||
              (emailClean && emailClean !== existingSt.email.toLowerCase()) ||
              cleanCustomId !== existingCleanCode ||
              incomingPermKeys.join(",") !== existingPermKeys.join(",");

            const resolvedDept = normalizeStaffDept(st.dept);
            const basicChanged =
              String(st.name || "").trim() !== existingSt.name ||
              String(st.phone || "") !== (existingSt.phone || "") ||
              resolvedDept !== normalizeStaffDept(existingSt.dept) ||
              resolvedAvatar !== (existingSt.avatar || initialsFromName(existingSt.name)) ||
              Boolean(newPlainPass);

            if (existingSt.id !== adminSession.staffId) {
              if (privilegedChanged || basicChanged) {
                throw new ApiError(403, "Working Team Admin permission required to modify other staff records.");
              }
              continue;
            }

            if (privilegedChanged) {
              throw new ApiError(
                403,
                "Only Working Team Admin can modify your role, status, email, Staff ID, or permissions.",
              );
            }

            if (basicChanged) {
              const hashedPass = newPlainPass ? await bcrypt.hash(newPlainPass, 10) : undefined;
              await tx.staff.update({
                where: { id: existingSt.id },
                data: {
                  name: st.name,
                  phone: st.phone || "",
                  dept: resolvedDept,
                  avatar: resolvedAvatar,
                  ...(hashedPass ? { passwordHash: hashedPass } : {}),
                },
              });
            }
            continue;
          }

          const targetDept = normalizeStaffDept(st.dept);
          const role = await tx.staffRole.upsert({
            where: { name: roleName },
            create: {
              name: roleName,
              dept: targetDept,
              permissions: roleName.toLowerCase().includes("founder") || roleName === "Chief Operating Officer" ? ["*"] : ["dashboard"],
            },
            update: { dept: targetDept },
          });
          const perms = Array.isArray(st.accesses) && st.accesses.length
            ? st.accesses.map((a: string) => LEGACY_ACCESS_LABELS[a] || a)
            : role.permissions.length
              ? role.permissions
              : ["dashboard"];

          if (emailClean) {
            const emailConflict = await tx.staff.findFirst({
              where: {
                email: { equals: emailClean, mode: "insensitive" },
                ...(existingSt ? { NOT: { id: existingSt.id } } : {}),
              },
            });
            if (emailConflict) {
              throw new ApiError(409, `Email "${emailClean}" is already assigned to ${emailConflict.name}.`);
            }
          }

          let nextCode = cleanCustomId;
          if (!nextCode) {
            if (existingSt && /^stf-|^staff_/i.test(existingSt.code)) {
              nextCode = existingSt.code;
            } else {
              nextCode = lookupId && !/^stf-/i.test(lookupId) ? lookupId : `staff_${Date.now()}_${stIdx}`;
            }
          }

          const codeConflict = await tx.staff.findFirst({
            where: {
              code: { equals: nextCode, mode: "insensitive" },
              ...(existingSt ? { NOT: { id: existingSt.id } } : {}),
            },
          });
          if (codeConflict) {
            throw new ApiError(409, `Staff ID "${nextCode}" is already assigned to ${codeConflict.name}.`);
          }

          const resolvedStatus = labelToStaffStatus(st.status);
          const resolvedShift = normalizeStaffShift(st.shift);
          const resolvedDept = normalizeStaffDept(st.dept);
          const resolvedAvatar =
            typeof st.avatar === "string" && st.avatar.trim()
              ? st.avatar.trim().slice(0, 2).toUpperCase()
              : initialsFromName(st.name);
          const newPlainPass = typeof st.newPassword === "string" ? st.newPassword.trim() : "";
          const hashedPass = newPlainPass ? await bcrypt.hash(newPlainPass, 10) : undefined;

          if (existingSt) {
            await tx.staff.update({
              where: { id: existingSt.id },
              data: {
                code: nextCode,
                name: st.name,
                phone: st.phone || "",
                email: emailClean || existingSt.email,
                roleId: role.id,
                dept: resolvedDept,
                shift: resolvedShift,
                status: resolvedStatus,
                avatar: resolvedAvatar,
                permissions: perms,
                ...(hashedPass ? { passwordHash: hashedPass } : {}),
              },
            });
          } else {
            const createId = lookupId || `staff_${Date.now()}_${stIdx}`;
            const defaultHash = hashedPass || (await bcrypt.hash("Tehzib@2027", 10));
            await tx.staff.create({
              data: {
                id: createId,
                code: nextCode,
                name: st.name,
                phone: st.phone || "",
                email: emailClean || `${createId.toLowerCase()}@tehzib.com`,
                passwordHash: defaultHash,
                roleId: role.id,
                dept: resolvedDept,
                shift: resolvedShift,
                status: resolvedStatus,
                avatar: resolvedAvatar,
                permissions: perms,
              },
            });
          }
        }
      }

      // 12. Expenses
      if (Array.isArray(erp.expenses)) {
        const allStaff = await tx.staff.findMany();
        const staffLookup = new Map<string, string>();
        for (const s of allStaff) {
          staffLookup.set(s.id, s.id);
          staffLookup.set(s.code, s.id);
          staffLookup.set(s.code.toLowerCase(), s.id);
          staffLookup.set(s.name.toLowerCase(), s.id);
          staffLookup.set(s.email.toLowerCase(), s.id);
        }
        for (const ex of erp.expenses) {
          const matchedStaffId =
            (ex.responsibleStaffId && staffLookup.get(String(ex.responsibleStaffId).trim())) ||
            (ex.responsibleStaffId && staffLookup.get(String(ex.responsibleStaffId).trim().toLowerCase())) ||
            (ex.responsibleStaffName && staffLookup.get(String(ex.responsibleStaffName).trim().toLowerCase())) ||
            null;
          await tx.expense.upsert({
            where: { number: ex.id },
            create: {
              id: ex.id,
              number: ex.id,
              title: ex.title,
              details: ex.details || ex.title,
              category: ex.category || "Other E-Commerce Opex",
              amount: Math.round(Number(ex.amount) || 0),
              accountId: ex.account || "acc_cash",
              staffId: matchedStaffId,
            },
            update: {
              title: ex.title,
              details: ex.details || ex.title,
              category: ex.category || "Other E-Commerce Opex",
              amount: Math.round(Number(ex.amount) || 0),
              accountId: ex.account || "acc_cash",
              staffId: matchedStaffId,
            },
          });
        }
      }

      // 13. Supplier Payments Log
      if (Array.isArray(erp.paymentsLog)) {
        for (const pl of erp.paymentsLog) {
          const supExists = await tx.supplier.findUnique({ where: { code: pl.supplierId } });
          if (!supExists) continue;
          const isAdv = String(pl.paymentType || "").toLowerCase().includes("advance");
          await tx.supplierPayment.upsert({
            where: { number: pl.id },
            create: {
              id: pl.id,
              number: pl.id,
              supplierId: supExists.id,
              poNumber: pl.poId || null,
              type: isAdv ? SupplierPaymentType.ADVANCE : SupplierPaymentType.DUE_SETTLEMENT,
              paymentType: pl.paymentType || "Advance Payment",
              amount: Math.round(Number(pl.amount) || 0),
              accountId: pl.accountKey || null,
              accountName: pl.accountName || null,
              advanceByStaff: pl.advanceByStaff || "Nadia Sultana",
              dueByStaff: pl.dueByStaff || "Farhan Islam",
              details: pl.details || "",
            },
            update: {
              amount: Math.round(Number(pl.amount) || 0),
              advanceByStaff: pl.advanceByStaff || "Nadia Sultana",
              dueByStaff: pl.dueByStaff || "Farhan Islam",
              details: pl.details || "",
            },
          });
        }
      }

      // 14. Lookups (Expense categories, Supplier categories, Payment terms)
      if (Array.isArray(erp.expenseCategories)) {
        for (let i = 0; i < erp.expenseCategories.length; i++) {
          const val = erp.expenseCategories[i];
          await tx.lookup.upsert({
            where: { kind_value: { kind: LookupKind.EXPENSE_CATEGORY, value: val } },
            create: { kind: LookupKind.EXPENSE_CATEGORY, value: val, sortOrder: i },
            update: { sortOrder: i },
          });
        }
      }
      if (Array.isArray(erp.supplierCategories)) {
        for (let i = 0; i < erp.supplierCategories.length; i++) {
          const val = erp.supplierCategories[i];
          await tx.lookup.upsert({
            where: { kind_value: { kind: LookupKind.SUPPLIER_CATEGORY, value: val } },
            create: { kind: LookupKind.SUPPLIER_CATEGORY, value: val, sortOrder: i },
            update: { sortOrder: i },
          });
        }
      }
      if (Array.isArray(erp.paymentTermsList)) {
        for (let i = 0; i < erp.paymentTermsList.length; i++) {
          const val = erp.paymentTermsList[i];
          await tx.lookup.upsert({
            where: { kind_value: { kind: LookupKind.PAYMENT_TERM, value: val } },
            create: { kind: LookupKind.PAYMENT_TERM, value: val, sortOrder: i },
            update: { sortOrder: i },
          });
        }
      }

      // 15. Inventory Movements (sync latest added movements)
      if (Array.isArray(erp.inventoryMovements) && erp.inventoryMovements.length > 0) {
        const currentCount = await tx.stockMovement.count();
        if (erp.inventoryMovements.length > currentCount) {
          const newCount = erp.inventoryMovements.length - currentCount;
          const newestSlice = erp.inventoryMovements.slice(0, newCount).reverse();
          const firstProd = await tx.product.findFirst();
          for (const mv of newestSlice) {
            const matchedProd =
              (mv.productId && (await tx.product.findUnique({ where: { id: mv.productId } }))) ||
              (mv.sku && (await tx.product.findFirst({ where: { sku: mv.sku } }))) ||
              firstProd;
            if (!matchedProd) continue;
            await tx.stockMovement.create({
              data: {
                type: StockMovementType.MANUAL_ADJUSTMENT,
                productId: matchedProd.id,
                label: mv.type || "Stock Update",
                note: mv.note || "",
                reference: mv.sku || matchedProd.sku,
              },
            });
          }
        }
      }
    },
    { maxWait: 10000, timeout: 30000 },
  );
}
