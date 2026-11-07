import "dotenv/config";
import {
  PrismaClient,
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
  AccountType,
  SupplierPaymentType,
  StaffStatus,
  LookupKind,
  FooterLinkType,
  StockMovementType,
} from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function resolveImgUrl(val: string | undefined | null): string {
  if (!val) return "/seed/silk_blouse.jpg";
  if (val.startsWith("@img/")) return `/seed/${val.slice(5)}`;
  if (val.startsWith("/") || val.startsWith("http") || val.startsWith("data:")) return val;
  if (val === "logo_light") return "/seed/logo_light.png";
  if (val === "logo_dark") return "/seed/logo_dark.png";
  return `/seed/${val}.jpg`;
}

function safeDate(val: string | undefined | null, fallbackToNow = false): Date | null {
  if (!val || val === "—" || val === "-") return fallbackToNow ? new Date() : null;
  const iso = val.includes(" ") ? val.replace(" ", "T") + ":00+06:00" : `${val}T12:00:00+06:00`;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return fallbackToNow ? new Date() : null;
  return d;
}

const LEGACY_ACCESS_TO_KEY: Record<string, string> = {
  "Dashboard & BI": "dashboard",
  "Product & Catalogue": "products",
  "Inventory & Stock": "inventory",
  "Suppliers & PO": "procurement",
  "Orders & POS": "orders",
  "Customer CRM": "crm",
  "Expenses & Payments": "finance",
  "Storefront CMS": "cms",
  "Working Team Admin": "team",
};

async function main() {
  const raw: Record<string, any> = SEED_DATA;
  const erp = raw.ERP;
  const defaultProducts: Array<Record<string, any>> = raw.DEFAULT_PRODUCTS || [];
  const defaultProductMap = new Map(defaultProducts.map((p) => [p.id, p]));

  console.log("🌱 Seeding Tehzib PostgreSQL database...");

  // Clean existing tables in dependency order
  await prisma.auditLog.deleteMany();
  await prisma.adminNotification.deleteMany();
  await prisma.notification.deleteMany();
  await prisma.loyaltyTransaction.deleteMany();
  await prisma.review.deleteMany();
  await prisma.returnRequest.deleteMany();
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.customer.deleteMany();
  await prisma.supplierPayment.deleteMany();
  await prisma.goodsReceipt.deleteMany();
  await prisma.purchaseOrder.deleteMany();
  await prisma.preorder.deleteMany();
  await prisma.stockMovement.deleteMany();
  await prisma.productVariant.deleteMany();
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.subcategory.deleteMany();
  await prisma.category.deleteMany();
  await prisma.supplier.deleteMany();
  await prisma.expense.deleteMany();
  await prisma.account.deleteMany();
  await prisma.lookup.deleteMany();
  await prisma.footerLink.deleteMany();
  await prisma.footerSection.deleteMany();
  await prisma.promoBanner.deleteMany();
  await prisma.heroSlide.deleteMany();
  await prisma.coupon.deleteMany();
  await prisma.socialChannel.deleteMany();
  await prisma.storeSettings.deleteMany();
  await prisma.staff.deleteMany();
  await prisma.staffRole.deleteMany();

  // 1. Accounts
  const accountEntries = Object.entries(erp.accounts || {}) as Array<[string, { name: string; balance: number }]>;
  for (const [accId, acc] of accountEntries) {
    const type: AccountType =
      accId === "acc_bank"
        ? AccountType.BANK
        : accId === "acc_cash"
          ? AccountType.CASH
          : accId === "acc_bkash"
            ? AccountType.BKASH
            : AccountType.NAGAD;
    await prisma.account.create({
      data: {
        id: accId,
        name: acc.name,
        type,
        balance: Number(acc.balance) || 0,
      },
    });
  }

  // 2. Lookups (Expense Categories, Supplier Categories, Payment Terms)
  const expCats: string[] = erp.expenseCategories || [];
  for (let i = 0; i < expCats.length; i++) {
    await prisma.lookup.create({
      data: { kind: LookupKind.EXPENSE_CATEGORY, value: expCats[i], sortOrder: i },
    });
  }
  const supCats: string[] = erp.supplierCategories || [];
  for (let i = 0; i < supCats.length; i++) {
    await prisma.lookup.create({
      data: { kind: LookupKind.SUPPLIER_CATEGORY, value: supCats[i], sortOrder: i },
    });
  }
  const payTerms: string[] = erp.paymentTermsList || [];
  for (let i = 0; i < payTerms.length; i++) {
    await prisma.lookup.create({
      data: { kind: LookupKind.PAYMENT_TERM, value: payTerms[i], sortOrder: i },
    });
  }

  // 3. Staff Roles & Staff Members
  const passwordHash = await bcrypt.hash(process.env.SEED_ADMIN_PASSWORD || "Tehzib@2027", 10);
  const roleMap = new Map<string, string>();
  const staffRoles: string[] = erp.staffRoles || [];
  for (const roleName of staffRoles) {
    const isFounder = roleName.toLowerCase().includes("founder");
    const created = await prisma.staffRole.create({
      data: {
        name: roleName,
        isSystem: isFounder,
        permissions: isFounder
          ? ["*"]
          : ["dashboard", "products", "inventory", "procurement", "orders", "crm", "finance", "cms"],
      },
    });
    roleMap.set(roleName, created.id);
  }

  const staffByCode = new Map<string, string>();
  const staffByName = new Map<string, string>();
  for (const st of erp.staffMembers || []) {
    let roleId = roleMap.get(st.role);
    if (!roleId) {
      const r = await prisma.staffRole.create({
        data: { name: st.role, permissions: ["dashboard"] },
      });
      roleId = r.id;
      roleMap.set(st.role, roleId);
    }
    const perms = Array.isArray(st.accesses)
      ? st.accesses.map((a: string) => LEGACY_ACCESS_TO_KEY[a] || a)
      : ["dashboard"];
    const initials = String(st.name || "TA")
      .split(" ")
      .map((w: string) => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
    const createdStaff = await prisma.staff.create({
      data: {
        id: st.id,
        code: st.id,
        name: st.name,
        email: st.email,
        loginId: st.email === "admin@tehzib.com" ? "tehzib-admin" : null,
        phone: st.phone,
        passwordHash,
        roleId,
        dept: st.dept,
        status: st.status === "Active" ? StaffStatus.ACTIVE : StaffStatus.INACTIVE,
        permissions: perms,
        avatar: initials,
      },
    });
    staffByCode.set(st.id, createdStaff.id);
    staffByName.set(st.name, createdStaff.id);
  }

  // 4. Categories & Subcategories (combining CMS categories & product subcategories)
  const cmsCats: Array<Record<string, any>> = erp.cms?.categories || [];
  const defaultCats: Array<Record<string, any>> = raw.DEFAULT_CATEGORIES_LIST || [];
  const catMap = new Map<string, string>();
  const subMap = new Map<string, string>(); // key: `${categoryName}::${subName}`

  for (let i = 0; i < cmsCats.length; i++) {
    const c = cmsCats[i];
    const defMatch = defaultCats.find((dc) => dc.name === c.name);
    const mergedSubs = Array.from(
      new Set([...(Array.isArray(c.subs) ? c.subs : []), ...(defMatch?.subcategories || [])]),
    );
    const createdCat = await prisma.category.create({
      data: {
        name: c.name,
        slug: slugify(c.name),
        imageUrl: resolveImgUrl(c.imgKey),
        enabled: c.enabled !== false,
        rolloutPhase: c.rolloutPhase || "Active Capsule",
        sortOrder: i,
      },
    });
    catMap.set(c.name, createdCat.id);

    for (let j = 0; j < mergedSubs.length; j++) {
      const subName = mergedSubs[j];
      const subSlug = slugify(subName);
      const sub = await prisma.subcategory.upsert({
        where: { categoryId_slug: { categoryId: createdCat.id, slug: subSlug } },
        update: {},
        create: {
          name: subName,
          slug: subSlug,
          sortOrder: j,
          categoryId: createdCat.id,
        },
      });
      subMap.set(`${c.name}::${subName}`, sub.id);
    }
  }

  // 5. Suppliers
  const supplierByCode = new Map<string, string>();
  for (const sup of erp.suppliers || []) {
    const createdSup = await prisma.supplier.create({
      data: {
        id: sup.id,
        code: sup.id,
        name: sup.name,
        contact: sup.contact,
        phone: sup.phone,
        category: sup.category,
        moq: Number(sup.moq) || 12,
        leadDays: Number(sup.leadDays) || 3,
        quotedRange: sup.quotedRange,
        terms: sup.terms,
        address: sup.address,
        paidAmount: Number(sup.paidAmount) || 0,
        payable: Number(sup.payable) || 0,
        advanceByStaff: sup.advanceByStaff || "Nadia Sultana",
        dueByStaff: sup.dueByStaff || "Farhan Islam",
        advanceAccount: sup.advanceAccount || "acc_bkash",
        dueAccount: sup.dueAccount || "acc_bank",
        defectClaims: sup.defectClaims,
        notes: sup.notes,
      },
    });
    supplierByCode.set(sup.id, createdSup.id);
  }

  // 6. Products, Images, Variants
  const productByLegacyId = new Map<string, string>();
  const productBySku = new Map<string, string>();
  for (let i = 0; i < (erp.products || []).length; i++) {
    const p = erp.products[i];
    const dp = defaultProductMap.get(p.id);
    let catId = catMap.get(p.category);
    if (!catId) {
      const createdCat = await prisma.category.create({
        data: {
          name: p.category,
          slug: slugify(p.category),
          imageUrl: "/seed/silk_blouse.jpg",
          enabled: true,
        },
      });
      catId = createdCat.id;
      catMap.set(p.category, catId);
    }

    let subId: string | null = null;
    if (p.subcategory) {
      const key = `${p.category}::${p.subcategory}`;
      subId = subMap.get(key) || null;
      if (!subId) {
        const subSlug = slugify(p.subcategory);
        const createdSub = await prisma.subcategory.upsert({
          where: { categoryId_slug: { categoryId: catId, slug: subSlug } },
          update: {},
          create: {
            name: p.subcategory,
            slug: subSlug,
            categoryId: catId,
          },
        });
        subId = createdSub.id;
        subMap.set(key, subId);
      }
    }

    const primaryImg = resolveImgUrl(p.image || dp?.image);
    const galleryRaw: string[] = Array.isArray(dp?.gallery) && dp.gallery.length ? dp.gallery : [primaryImg];
    const galleryUrls = Array.from(new Set([primaryImg, ...galleryRaw.map((g) => resolveImgUrl(g))]));
    const variantsList: string[] =
      Array.isArray(p.variants) && p.variants.length ? p.variants : ["Standard"];
    const uniqueSku = p.id === "p8" && p.sku === "THZ-AC-008" ? "THZ-AC-008-CLW" : p.sku;

    const createdProd = await prisma.product.create({
      data: {
        id: p.id,
        sku: uniqueSku,
        slug: `${slugify(p.title)}-${slugify(uniqueSku)}`,
        title: p.title,
        categoryId: catId,
        subcategoryId: subId,
        supplierId: p.supplierId ? supplierByCode.get(p.supplierId) || null : null,
        costPrice: Number(p.costPrice) || 0,
        landedCost: Number(p.landedCost) || Number(p.costPrice) || 0,
        wholesalePrice: Number(p.wholesalePrice) || 0,
        price: Number(p.price) || 0,
        oldPrice: p.oldPrice ? Number(p.oldPrice) : null,
        status: p.isPublished === false ? ProductStatus.DRAFT : ProductStatus.ACTIVE,
        statusLabel: p.statusLabel || (p.isPublished === false ? "Draft" : "Active"),
        isPublished: p.isPublished !== false,
        isDeal: Boolean(p.isDeal),
        isFeatured: dp ? Boolean(dp.isFeatured) : Boolean(p.isDeal),
        isNew: Boolean(p.isNew),
        isJustForYou: Boolean(p.isJustForYou),
        specialTab: p.specialTab || dp?.specialTab || "Best Sellers",
        rating: Number(dp?.rating || p.rating || 4.9),
        reviewsCount: Number(dp?.reviewsCount || p.reviewsCount || 84),
        reorderThreshold: Number(p.reorderThreshold) || 5,
        imageKey: dp?.imageKey || null,
        description: p.description || "",
        specs: p.specs || "",
        seoKeywords: p.seoKeywords || "",
        seoDescription: p.seoDescription || "",
        geoKeywords: p.geoKeywords || "Uttara Sector 12 Dhaka, Gulshan, Banani, Dhanmondi, Bangladesh",
        images: {
          create: galleryUrls.map((url, idx) => ({
            url,
            alt: `${p.title} - View ${idx + 1}`,
            sortOrder: idx,
          })),
        },
        variants: {
          create: variantsList.map((vName, idx) => ({
            sku: idx === 0 ? uniqueSku : `${uniqueSku}-${slugify(vName).toUpperCase().slice(0, 8)}-${idx + 1}`,
            name: vName,
            sortOrder: idx,
            available: idx === 0 ? Number(p.available || 0) : 0,
            reserved: idx === 0 ? Number(p.reserved || 0) : 0,
            sold: idx === 0 ? Number(p.sold || 0) : 0,
            returned: idx === 0 ? Number(p.returned || 0) : 0,
            damaged: idx === 0 ? Number(p.damaged || 0) : 0,
          })),
        },
      },
    });
    productByLegacyId.set(p.id, createdProd.id);
    productBySku.set(uniqueSku, createdProd.id);
  }

  // 7. Purchase Orders (Shipments) & Goods Receipts
  const poByNumber = new Map<string, string>();
  for (const sh of erp.shipments || []) {
    const supId = supplierByCode.get(sh.supplierId);
    const prodId = productByLegacyId.get(sh.productId) || productBySku.get(sh.sku);
    if (!supId || !prodId) continue;
    const status: POStatus =
      sh.status === "RECEIVED"
        ? POStatus.RECEIVED
        : sh.status === "IN_TRANSIT"
          ? POStatus.IN_TRANSIT
          : POStatus.ORDERED;

    const po = await prisma.purchaseOrder.create({
      data: {
        id: sh.id,
        number: sh.id,
        date: new Date(`${sh.date}T10:00:00+06:00`),
        supplierId: supId,
        productId: prodId,
        sku: sh.sku,
        moq: Number(sh.moq) || 1,
        orderedQty: Number(sh.orderedQty) || 0,
        receivedQty: Number(sh.receivedQty) || 0,
        damagedQty: Number(sh.damagedQty) || 0,
        costPrice: Number(sh.costPrice) || 0,
        landedCost: Number(sh.landedCost) || Number(sh.costPrice) || 0,
        wholesalePrice: Number(sh.wholesalePrice) || 0,
        retailPrice: Number(sh.retailPrice) || 0,
        warehouse: sh.warehouse || "Uttara Sector 12 Hub",
        status,
        statusLabel: sh.status || "PENDING_GRN",
      },
    });
    poByNumber.set(sh.id, po.id);

    if (status === POStatus.RECEIVED && Number(sh.receivedQty) > 0) {
      await prisma.goodsReceipt.create({
        data: {
          number: `GRN-${sh.id}`,
          poId: po.id,
          receivedQty: Number(sh.receivedQty),
          damagedQty: Number(sh.damagedQty) || 0,
          landedCost: Number(sh.landedCost) || Number(sh.costPrice) || 0,
          receivedAt: new Date(`${sh.date}T15:00:00+06:00`),
          note: "Initial batch verified at Uttara Sector 12 Hub",
        },
      });
    }
  }

  // 8. Preorders
  for (const pr of erp.preorders || []) {
    await prisma.preorder.create({
      data: {
        id: pr.id,
        number: pr.id,
        sku: pr.sku,
        productTitle: pr.productTitle,
        customerName: pr.customerName,
        customerPhone: pr.customerPhone,
        supplierName: pr.supplierName,
        leadTime: pr.leadTime,
        expectedArrival: pr.expectedArrival ? new Date(`${pr.expectedArrival}T12:00:00+06:00`) : null,
        orderValue: Number(pr.orderValue) || 0,
        depositHeld: Number(pr.depositHeld) || 0,
        status: pr.status || "Deposit Collected • In Production",
      },
    });
  }

  // 9. Supplier Payments Log
  for (const pay of erp.paymentsLog || []) {
    const supId = supplierByCode.get(pay.supplierId);
    if (!supId) continue;
    const isAdv = String(pay.paymentType || "").toLowerCase().includes("advance");
    const staffId = staffByName.get(isAdv ? pay.advanceByStaff : pay.dueByStaff) || null;
    await prisma.supplierPayment.create({
      data: {
        id: pay.id,
        number: pay.id,
        date: new Date(`${pay.date}T12:00:00+06:00`),
        supplierId: supId,
        poId: poByNumber.get(pay.poId) || null,
        poNumber: pay.poId || null,
        type: isAdv ? SupplierPaymentType.ADVANCE : SupplierPaymentType.DUE_SETTLEMENT,
        paymentType: pay.paymentType || "Advance Payment",
        amount: Number(pay.amount) || 0,
        accountId: pay.accountKey || null,
        accountName: pay.accountName || null,
        staffId,
        advanceByStaff: pay.advanceByStaff || "Nadia Sultana",
        dueByStaff: pay.dueByStaff || "Farhan Islam",
        details: pay.details || "",
      },
    });
  }

  // 10. Customers (CRM + Storefront default customers)
  const customerByPhone = new Map<string, string>();
  const customerByName = new Map<string, string>();
  for (const c of erp.crmCustomers || []) {
    const tier: CustomerTier =
      c.tier === "VIP"
        ? CustomerTier.VIP
        : c.tier === "Repeat"
          ? CustomerTier.REPEAT
          : c.tier === "Inactive"
            ? CustomerTier.INACTIVE
            : CustomerTier.NEW;
    const cust = await prisma.customer.create({
      data: {
        id: c.id,
        code: c.id,
        name: c.name,
        phone: c.phone,
        email: c.email || null,
        passwordHash,
        gender: "Female",
        dob: "14 October, 1997",
        address: c.address || "Uttara Sector 12, Dhaka, Bangladesh",
        tier,
        rating: Number(c.rating) || 4.9,
        points: Number(c.points) || 0,
        ordersCount: Number(c.ordersCount) || 0,
        completedOrders: Number(c.completedOrders) || 0,
        spend: Number(c.spend) || 0,
        returnsCount: Number(c.returnsCount) || 0,
        failedCount: Number(c.failedCount) || 0,
        notes: c.notes || "",
        consentSms: c.consent?.sms !== false,
        consentWhatsapp: c.consent?.whatsapp !== false,
        consentEmail: c.consent?.email !== false,
        referralCode: c.referralCode || null,
      },
    });
    customerByPhone.set(c.phone, cust.id);
    customerByName.set(c.name, cust.id);
  }

  // Also add storefront DEFAULT_CUSTOMERS if not already present by phone/name
  for (const dc of raw.DEFAULT_CUSTOMERS || []) {
    if (customerByPhone.has(dc.phone) || customerByName.has(dc.name)) continue;
    const cust = await prisma.customer.create({
      data: {
        code: dc.id.toUpperCase(),
        name: dc.name,
        email: dc.email,
        phone: dc.phone,
        passwordHash,
        gender: dc.gender,
        dob: dc.dob,
        address: dc.address,
        tier: CustomerTier.VIP,
        rating: parseFloat(String(dc.rating)) || 4.9,
        points: Number(dc.points) || 1450,
        ordersCount: 2,
        completedOrders: 1,
        spend: 7630,
      },
    });
    customerByPhone.set(dc.phone, cust.id);
    customerByName.set(dc.name, cust.id);
  }

  // 11. Orders & OrderItems
  const orderByNumber = new Map<string, string>();
  for (const ord of erp.orders || []) {
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

    const statusMap: Record<string, OrderStatus> = {
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
    const payStatusMap: Record<string, PaymentStatus> = {
      Paid: PaymentStatus.PAID,
      Collected: PaymentStatus.COLLECTED,
      Pending: PaymentStatus.PENDING,
      Refunded: PaymentStatus.REFUNDED,
    };
    const courierMap: Record<string, Courier> = {
      "Steadfast Courier": Courier.STEADFAST,
      "Pathao Courier": Courier.PATHAO,
      "RedX Logistics": Courier.REDX,
      Paperfly: Courier.PAPERFLY,
    };

    const createdOrd = await prisma.order.create({
      data: {
        id: ord.id,
        number: ord.id,
        createdAt: safeDate(ord.date, true)!,
        customerId: customerByPhone.get(ord.customerPhone) || customerByName.get(ord.customerName) || null,
        customerName: ord.customerName,
        customerPhone: ord.customerPhone,
        customerAddress: ord.customerAddress,
        channel,
        campaignSource: ord.campaignSource || "Direct Storefront",
        tier: ord.tier === "WHOLESALE" ? PriceTier.WHOLESALE : PriceTier.RETAIL,
        status: statusMap[ord.status] || OrderStatus.NEW,
        deliveryMethod: String(ord.deliveryMethod || "").toLowerCase().includes("outside")
          ? DeliveryMethod.OUTSIDE_DHAKA
          : String(ord.deliveryMethod || "").toLowerCase().includes("express")
            ? DeliveryMethod.EXPRESS
            : DeliveryMethod.INSIDE_DHAKA,
        deliveryFee: Number(ord.deliveryFee) || 70,
        courier: courierMap[ord.courier] || Courier.STEADFAST,
        trackingNumber: ord.trackingNumber || null,
        dispatchDate: safeDate(ord.dispatchDate, false),
        deliveryAttempts: Number(ord.deliveryAttempts) || 0,
        deliveryOutcome: ord.deliveryOutcome || "",
        subtotal: Number(ord.subtotal) || 0,
        discount: Number(ord.discount) || 0,
        total: Number(ord.totalRevenue) || 0,
        totalCogs: Number(ord.totalCogs) || 0,
        paymentMethod: ord.paymentMethod || "Cash on Delivery (COD)",
        paymentStatus: payStatusMap[ord.paymentStatus] || PaymentStatus.PENDING,
        codSettled: Boolean(ord.codSettled),
        packagingCost: Number(ord.packagingCost) || 35,
        courierActualCost: Number(ord.courierActualCost) || 60,
        codFee: Number(ord.codFee) || 0,
        items: {
          create: (ord.items || []).map((it: any) => ({
            productId: productByLegacyId.get(it.productId) || productBySku.get(it.sku) || null,
            sku: it.sku || "THZ-SKU",
            title: it.title,
            variantName: it.variant || "Standard",
            qty: Number(it.qty) || 1,
            unitPrice: Number(it.unitPrice) || 0,
            unitCost: Number(it.unitCost) || 0,
          })),
        },
      },
    });
    orderByNumber.set(ord.id, createdOrd.id);
  }

  // 12. Returns Log
  for (const ret of erp.returnsLog || []) {
    const firstOrderId = Array.from(orderByNumber.values())[0];
    const targetOrderId = orderByNumber.get(ret.orderId) || firstOrderId;
    if (!targetOrderId) continue;
    await prisma.returnRequest.create({
      data: {
        id: ret.id,
        number: ret.id,
        orderId: targetOrderId,
        type: ReturnType.EXCHANGE,
        status: ReturnStatus.EXCHANGE_DISPATCHED,
        items: ret.items,
        reason: ret.orderId,
        actionNote: ret.actionNote,
        refundAmount: Number(ret.refundAmount) || 0,
      },
    });
  }

  // 13. Reviews
  for (const rev of erp.reviews || []) {
    const prodId =
      productBySku.get(rev.sku) ||
      Array.from(productByLegacyId.values())[0];
    if (!prodId) continue;
    await prisma.review.create({
      data: {
        id: rev.id,
        productId: prodId,
        customerId: customerByName.get(rev.customerName) || null,
        customerName: rev.customerName,
        rating: Number(rev.rating) || 5,
        comment: rev.comment,
        status:
          rev.status === "Approved"
            ? ReviewStatus.APPROVED
            : rev.status === "Rejected"
              ? ReviewStatus.REJECTED
              : ReviewStatus.PENDING,
        createdAt: rev.date ? new Date(`${rev.date}T12:00:00+06:00`) : new Date(),
      },
    });
  }

  // 14. Coupons & Vouchers
  const seenCodes = new Set<string>();
  for (const cpn of erp.coupons || []) {
    seenCodes.add(cpn.code);
    await prisma.coupon.create({
      data: {
        code: cpn.code,
        title: `${cpn.discountPct}% OFF Campaign Voucher`,
        description: `Valid on orders over ৳${cpn.minOrder}`,
        discountPct: Number(cpn.discountPct) || 10,
        minOrder: Number(cpn.minOrder) || 0,
        startDate: cpn.startDate ? new Date(`${cpn.startDate}T00:00:00+06:00`) : null,
        endDate: cpn.endDate ? new Date(`${cpn.endDate}T23:59:59+06:00`) : null,
        usageLimit: Number(cpn.usageLimit) || 500,
        usedCount: Number(cpn.usedCount) || 0,
        source: cpn.source || "Storefront",
        attributedOrders: Number(cpn.attributedOrders) || 0,
        attributedRevenue: Number(cpn.attributedRevenue) || 0,
        active: cpn.active !== false,
      },
    });
  }
  for (const v of raw.DEFAULT_VOUCHERS || []) {
    if (seenCodes.has(v.code)) continue;
    seenCodes.add(v.code);
    await prisma.coupon.create({
      data: {
        code: v.code,
        title: v.title,
        description: v.desc,
        discountPct: Number(v.discountPct) || 15,
        minOrder: 1000,
        startDate: new Date("2027-01-01T00:00:00+06:00"),
        endDate: new Date("2027-12-31T23:59:59+06:00"),
        usageLimit: 500,
        usedCount: 15,
        source: "Privilege Voucher",
        attributedOrders: 8,
        attributedRevenue: 24500,
        active: true,
      },
    });
  }

  // 15. Hero Slides & Promo Banners
  const defaultSlides: Array<Record<string, any>> = raw.DEFAULT_HERO_SLIDES || [];
  for (let i = 0; i < defaultSlides.length; i++) {
    const hs = defaultSlides[i];
    await prisma.heroSlide.create({
      data: {
        id: hs.id || `slide-${i + 1}`,
        tag: hs.tag,
        title: hs.title,
        subtitle: hs.subtitle,
        ctaText: hs.ctaText,
        targetCategory: hs.targetCat || "All",
        secondaryText: hs.secondaryText || "",
        secondaryCategory: hs.secondaryCat || "",
        imageUrl: resolveImgUrl(hs.bgImgKey),
        showcaseProductId: hs.showcaseProductId || "p5",
        sortOrder: i,
        active: true,
      },
    });
  }

  const promoBanners: Array<Record<string, any>> = raw.DEFAULT_PROMO_BANNERS || [];
  for (let i = 0; i < promoBanners.length; i++) {
    const pb = promoBanners[i];
    await prisma.promoBanner.create({
      data: {
        eyebrow: pb.eyebrow,
        title: pb.title,
        sub: pb.sub,
        targetCategory: pb.targetCat,
        imageUrl: resolveImgUrl(pb.imgKey),
        sortOrder: i,
        active: true,
      },
    });
  }

  // 16. StoreSettings & Footer Sections
  const cms = erp.cms || {};
  await prisma.storeSettings.create({
    data: {
      id: "default",
      logoLightUrl: "/seed/logo_light.png",
      logoDarkUrl: "/seed/logo_dark.png",
      topOfferText: cms.topOfferText || "",
      conciergePhone: cms.topPhone || "+880 1711-889900",
      secCategoriesTitle: "Top Categories",
      secTrendTitle: cms.secTrendTitle || "Trendsetters",
      secNewTitle: cms.secNewTitle || "New Arrivals",
      secJfyTitle: cms.secJfyTitle || "Just For You",
      secCapsuleTitle: "Curated Capsule",
      newsletterTitle: cms.newsletterTitle || "Join the Tehzib Private Circle",
      newsletterSub:
        cms.newsletterSub ||
        "Receive private previews of seasonal drops, bespoke sizing invitations, and atelier stories.",
      footerBio:
        cms.footerBio ||
        "Tehzib is a contemporary Bangladeshi fashion, footwear, accessories, and lifestyle house blending Parisian Blush aesthetics with artisanal heritage.",
      footerAddress: cms.footerAddress || "Uttara Sector 12, Dhaka, Bangladesh",
      footerEmail: cms.footerEmail || "concierge@tehzib.com",
      footerPhone: cms.footerPhone || "+880 1711-889900",
      footerCopyright: cms.footerCopyright || "© 2027 Tehzib. All rights reserved.",
      socialFacebook: cms.socials?.fb || "https://facebook.com/tehzib.bd",
      socialInstagram: cms.socials?.insta || "https://instagram.com/tehzib.bd",
      socialTiktok: cms.socials?.tiktok || "https://tiktok.com/@tehzib.bd",
      socialThreads: cms.socials?.threads || "https://threads.net/@tehzib.bd",
      insideDhakaFee: 70,
      outsideDhakaFee: 130,
      freeDeliveryThreshold: 2500,
    },
  });

  const footerSecs: Array<Record<string, any>> = cms.footerSections || [];
  for (let i = 0; i < footerSecs.length; i++) {
    const fsSec = footerSecs[i];
    await prisma.footerSection.create({
      data: {
        id: fsSec.id,
        title: fsSec.title,
        sortOrder: i,
        links: {
          create: (fsSec.items || []).map((item: any, j: number) => ({
            id: item.id,
            label: item.label,
            type: item.type === "category" ? FooterLinkType.CATEGORY : FooterLinkType.INFO,
            modalTitle: item.modalTitle || item.label,
            message: item.message || "",
            targetCategory: item.targetCat || null,
            sortOrder: j,
          })),
        },
      },
    });
  }

  // 17. Expenses
  for (const ex of erp.expenses || []) {
    await prisma.expense.create({
      data: {
        id: ex.id,
        number: ex.id,
        date: new Date(`${ex.date}T12:00:00+06:00`),
        title: ex.title,
        details: ex.details || "",
        category: ex.category,
        amount: Number(ex.amount) || 0,
        accountId: ex.account || null,
        staffId: staffByCode.get(ex.responsibleStaffId) || staffByName.get(ex.responsibleStaffName) || null,
      },
    });
  }

  // 18. Inventory Movements
  for (const mv of erp.inventoryMovements || []) {
    const prodId =
      productByLegacyId.get(mv.productId) ||
      productBySku.get(mv.sku) ||
      Array.from(productByLegacyId.values())[0];
    if (!prodId) continue;
    const type: StockMovementType = String(mv.type).includes("PO Receipt")
      ? StockMovementType.PO_RECEIPT
      : String(mv.type).includes("Reserved")
        ? StockMovementType.ORDER_RESERVED
        : String(mv.type).includes("Sold")
          ? StockMovementType.ORDER_DELIVERED
          : StockMovementType.MANUAL_ADJUSTMENT;
    await prisma.stockMovement.create({
      data: {
        createdAt: new Date(mv.time.replace(" ", "T") + ":00+06:00"),
        type,
        productId: prodId,
        label: mv.type,
        note: mv.note,
        reference: mv.sku,
      },
    });
  }

  // 19. Storefront & Admin Notifications
  for (const n of raw.DEFAULT_NOTIFICATIONS || []) {
    await prisma.notification.create({
      data: {
        id: n.id,
        icon: n.icon || "✦",
        title: n.title,
        body: n.body,
        targetView: n.targetView || "home",
        readAt: n.unread ? null : new Date(),
      },
    });
  }

  for (const en of erp.emsNotifications || []) {
    await prisma.adminNotification.create({
      data: {
        id: en.id,
        type: en.type,
        message: en.msg,
      },
    });
  }

  // 20. Social Channels
  await prisma.socialChannel.createMany({
    data: [
      { platform: "Facebook Page & Shop", handle: "@tehzib.bd", syncOn: true, lastSync: new Date(), alertsOn: true },
      { platform: "Instagram Shopping", handle: "@tehzib.bd", syncOn: true, lastSync: new Date(), alertsOn: true },
      { platform: "WhatsApp Concierge", handle: "+880 1711-889900", syncOn: true, lastSync: new Date(), alertsOn: true },
      { platform: "TikTok Shop Feed", handle: "@tehzib.bd", syncOn: true, lastSync: new Date(), alertsOn: true },
    ],
  });

  console.log("✅ Seed completed! Categories, 20 Products, 4 Suppliers, 5 Staff, 4 Orders, CRM, Finance & CMS seeded.");
}

const SEED_DATA = {
  "IMG": [
    "logo_light.png",
    "logo_dark.png",
    "hero.jpg",
    "silk_blouse.jpg",
    "clothing_set.jpg",
    "heels.jpg",
    "cream_bag.jpg",
    "champagne_bag.jpg",
    "watch.jpg",
    "necklace.jpg",
    "clips.jpg",
    "mom_kids.jpg",
    "kids_backpack.jpg",
    "acrylic_org.jpg",
    "jewelry_box.jpg",
    "desk_caddy.jpg",
    "bento_baskets.jpg",
    "snowglobe.jpg",
    "giftbox.jpg",
    "vase.jpg"
  ],
  "DEFAULT_PRODUCTS": [
    {
      "id": "p1",
      "subcategory": "Satin Blouses & Tops",
      "title": "Blush Satin Wrap Blouse",
      "category": "Clothing",
      "price": 2650,
      "oldPrice": 3200,
      "discount": "-17%",
      "isDeal": true,
      "available": 14,
      "sold": 36,
      "stockStatus": "IN STOCK",
      "rating": 4.9,
      "reviewsCount": 128,
      "isFeatured": true,
      "isNew": true,
      "isJustForYou": true,
      "specialTab": "Best Sellers",
      "variants": [
        "XS",
        "S",
        "M",
        "L",
        "XL"
      ],
      "image": "@img/silk_blouse.jpg",
      "gallery": [
        "@img/silk_blouse.jpg",
        "@img/clothing_set.jpg",
        "@img/necklace.jpg",
        "@img/cream_bag.jpg"
      ],
      "description": "Tailored from lustrous mulberry-touch satin in Tehzib's signature Parisian Blush tone. Features a draped wrap bodice, pearl-buttoned bishop sleeves, and a breathable lining suited for Dhaka's festive evenings and elevated workwear.",
      "specs": "Fabric: 100% Silky Matte Satin • Fit: Relaxed Wrap Fit • Care: Gentle hand wash or dry clean • Origin: Crafted in Dhaka Studio",
      "imageKey": "silk_blouse"
    },
    {
      "id": "p2",
      "subcategory": "Co-Ord Sets",
      "title": "Cashmere-Touch Linen Co-Ord Set",
      "category": "Clothing",
      "price": 3450,
      "oldPrice": 4100,
      "discount": "-16%",
      "isDeal": true,
      "available": 9,
      "sold": 41,
      "stockStatus": "IN STOCK",
      "rating": 4.8,
      "reviewsCount": 94,
      "isFeatured": true,
      "isNew": true,
      "isJustForYou": false,
      "specialTab": "Best Sellers",
      "variants": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "image": "@img/clothing_set.jpg",
      "gallery": [
        "@img/clothing_set.jpg",
        "@img/silk_blouse.jpg",
        "@img/heels.jpg",
        "@img/champagne_bag.jpg"
      ],
      "description": "Contemporary two-piece co-ord set featuring a longline architectural tunic and wide-leg pleated trousers in warm cashmere beige. Designed for effortless day-to-dinner sophistication.",
      "specs": "Fabric: Cotton-Linen Blend • Pieces: 2 (Tunic + Wide-Leg Trouser) • Trouser Waist: Elasticated back with side zip",
      "imageKey": "clothing_set"
    },
    {
      "id": "p3",
      "subcategory": "Slingback Heels",
      "title": "Blush Slingback Kitten Heels",
      "category": "Shoes",
      "price": 2950,
      "oldPrice": 3600,
      "discount": "-18%",
      "isDeal": true,
      "available": 11,
      "sold": 49,
      "stockStatus": "IN STOCK",
      "rating": 4.9,
      "reviewsCount": 156,
      "isFeatured": true,
      "isNew": false,
      "isJustForYou": true,
      "specialTab": "Shoes & Fashion",
      "variants": [
        "EU 36",
        "EU 37",
        "EU 38",
        "EU 39",
        "EU 40"
      ],
      "image": "@img/heels.jpg",
      "gallery": [
        "@img/heels.jpg",
        "@img/cream_bag.jpg",
        "@img/champagne_bag.jpg",
        "@img/silk_blouse.jpg"
      ],
      "description": "Hand-crafted pointed-toe slingback kitten heels with a double-cushioned memory foam footbed and champagne buckle hardware. Inspired by contemporary Bangladeshi footwear ateliers.",
      "specs": "Upper: Vegan Nappa Leather • Heel Height: 2.2 inches (5.5 cm) • Insole: Plush padded latex • Sole: Non-slip rubber",
      "imageKey": "heels"
    },
    {
      "id": "p4",
      "subcategory": "Crossbody Bags",
      "title": "Quilted Cream Crossbody Bag",
      "category": "Fashion",
      "price": 2850,
      "oldPrice": 3500,
      "discount": "-19%",
      "isDeal": true,
      "available": 16,
      "sold": 54,
      "stockStatus": "IN STOCK",
      "rating": 4.9,
      "reviewsCount": 210,
      "isFeatured": true,
      "isNew": false,
      "isJustForYou": true,
      "specialTab": "Best Sellers",
      "variants": [
        "Alabaster Cream",
        "Blush Rose",
        "Obsidian Black"
      ],
      "image": "@img/cream_bag.jpg",
      "gallery": [
        "@img/cream_bag.jpg",
        "@img/champagne_bag.jpg",
        "@img/watch.jpg",
        "@img/heels.jpg"
      ],
      "description": "Diamond-quilted crossbody bag in soft alabaster cream with an interwoven champagne gold chain strap, magnetic turn-lock closure, and dual interior compartments.",
      "specs": "Dimensions: 23cm x 15cm x 7cm • Hardware: Brushed Champagne Gold • Strap: Convertible shoulder to crossbody",
      "imageKey": "cream_bag"
    },
    {
      "id": "p5",
      "subcategory": "Evening Clutches",
      "title": "Champagne Top-Handle Evening Clutch",
      "category": "Fashion",
      "price": 3250,
      "oldPrice": null,
      "discount": null,
      "isDeal": false,
      "available": 22,
      "sold": 18,
      "stockStatus": "IN STOCK",
      "rating": 4.8,
      "reviewsCount": 87,
      "isFeatured": false,
      "isNew": true,
      "isJustForYou": true,
      "specialTab": "Shoes & Fashion",
      "variants": [
        "Champagne Gold",
        "Rose Quartz"
      ],
      "image": "@img/champagne_bag.jpg",
      "gallery": [
        "@img/champagne_bag.jpg",
        "@img/cream_bag.jpg",
        "@img/necklace.jpg",
        "@img/heels.jpg"
      ],
      "description": "Structured top-handle evening bag in metallic champagne satin-leather with a detachable chain strap. Fits smartphones, compact powder, and evening essentials effortlessly.",
      "specs": "Dimensions: 21cm x 13cm x 6cm • Lining: Velvet micro-suede • Closure: Sculpted clasp",
      "imageKey": "champagne_bag"
    },
    {
      "id": "p6",
      "subcategory": "Minimalist Watches",
      "title": "Rose-Gold Mesh Minimalist Watch",
      "category": "Fashion",
      "price": 3650,
      "oldPrice": 4400,
      "discount": "-17%",
      "isDeal": true,
      "available": 8,
      "sold": 32,
      "stockStatus": "LOW STOCK",
      "rating": 4.9,
      "reviewsCount": 112,
      "isFeatured": true,
      "isNew": true,
      "isJustForYou": false,
      "specialTab": "Shoes & Fashion",
      "variants": [
        "32mm Rose Gold",
        "28mm Champagne"
      ],
      "image": "@img/watch.jpg",
      "gallery": [
        "@img/watch.jpg",
        "@img/necklace.jpg",
        "@img/jewelry_box.jpg",
        "@img/champagne_bag.jpg"
      ],
      "description": "Ultra-slim 32mm timepiece featuring a mother-of-pearl sunray dial, Japanese quartz movement, and an adjustable rose-gold Milanese mesh strap.",
      "specs": "Case Diameter: 32mm • Movement: Japanese Quartz • Water Resistance: 3 ATM • Warranty: 1 Year",
      "imageKey": "watch"
    },
    {
      "id": "p7",
      "subcategory": "18K Plated Jewellery",
      "title": "18K Gold-Plated Layered Necklace",
      "category": "Accessories",
      "price": 1450,
      "oldPrice": null,
      "discount": null,
      "isDeal": false,
      "available": 30,
      "sold": 65,
      "stockStatus": "IN STOCK",
      "rating": 4.8,
      "reviewsCount": 143,
      "isFeatured": false,
      "isNew": true,
      "isJustForYou": true,
      "specialTab": "Accessories",
      "variants": [
        "18K Rose Gold",
        "18K Yellow Gold"
      ],
      "image": "@img/necklace.jpg",
      "gallery": [
        "@img/necklace.jpg",
        "@img/jewelry_box.jpg",
        "@img/clips.jpg",
        "@img/watch.jpg"
      ],
      "description": "Waterproof, tarnish-free 316L stainless steel double-layered coin and solitaire pendant necklace plated in 18K gold. Hypoallergenic for everyday wear.",
      "specs": "Material: 316L Stainless Steel + 18K PVD Plating • Length: 40cm + 5cm extender • Tarnish-Resistant: Yes",
      "imageKey": "necklace"
    },
    {
      "id": "p8",
      "subcategory": "Hair Claws & Clips",
      "title": "Pearl & Tortoiseshell Hair Claw Set (4 Pcs)",
      "category": "Accessories",
      "price": 680,
      "oldPrice": null,
      "discount": null,
      "isDeal": false,
      "available": 45,
      "sold": 120,
      "stockStatus": "IN STOCK",
      "rating": 4.7,
      "reviewsCount": 198,
      "isFeatured": false,
      "isNew": false,
      "isJustForYou": true,
      "specialTab": "Accessories",
      "variants": [
        "4-Piece Curated Set"
      ],
      "image": "@img/clips.jpg",
      "gallery": [
        "@img/clips.jpg",
        "@img/necklace.jpg",
        "@img/acrylic_org.jpg",
        "@img/jewelry_box.jpg"
      ],
      "description": "Set of four heavyweight cellulose acetate hair claws adorned with luminous faux pearls and blush tortoiseshell marbling. Strong spring grip for thick hair.",
      "specs": "Quantity: 4 Clips per Box • Material: Eco-friendly Cellulose Acetate & Pearl • Grip: Reinforced alloy spring",
      "imageKey": "clips"
    },
    {
      "id": "p9",
      "subcategory": "Matching Twin Sets",
      "title": "Mommy & Me Matching Cable-Knit Set",
      "category": "Mom & Kids",
      "price": 3950,
      "oldPrice": 4600,
      "discount": "-14%",
      "isDeal": false,
      "available": 12,
      "sold": 29,
      "stockStatus": "IN STOCK",
      "rating": 5,
      "reviewsCount": 76,
      "isFeatured": false,
      "isNew": true,
      "isJustForYou": false,
      "specialTab": "Mom & Kids",
      "variants": [
        "Mom M + Kid 3-4Y",
        "Mom L + Kid 5-6Y",
        "Mom S + Kid 1-2Y"
      ],
      "image": "@img/mom_kids.jpg",
      "gallery": [
        "@img/mom_kids.jpg",
        "@img/kids_backpack.jpg",
        "@img/bento_baskets.jpg",
        "@img/giftbox.jpg"
      ],
      "description": "Heartwarming twin capsule featuring a soft combed-cotton cable-knit cardigan for Mom and a matching knit co-ord for little ones in warm oatmeal and blush.",
      "specs": "Material: 100% Organic Combed Cotton • Includes: Adult Knit Top + Child Knit Set • Hypoallergenic & Breathable",
      "imageKey": "mom_kids"
    },
    {
      "id": "p10",
      "subcategory": "Kids Mini Backpacks",
      "title": "Little Explorer Quilted Mini Backpack",
      "category": "Mom & Kids",
      "price": 1650,
      "oldPrice": null,
      "discount": null,
      "isDeal": false,
      "available": 19,
      "sold": 44,
      "stockStatus": "IN STOCK",
      "rating": 4.8,
      "reviewsCount": 64,
      "isFeatured": false,
      "isNew": false,
      "isJustForYou": false,
      "specialTab": "Mom & Kids",
      "variants": [
        "Blush Pink",
        "Warm Cream"
      ],
      "image": "@img/kids_backpack.jpg",
      "gallery": [
        "@img/kids_backpack.jpg",
        "@img/mom_kids.jpg",
        "@img/snowglobe.jpg",
        "@img/bento_baskets.jpg"
      ],
      "description": "Featherlight quilted nursery and preschool backpack with padded adjustable straps, insulated bottle pocket, and wipe-clean lining.",
      "specs": "Dimensions: 26cm x 22cm x 11cm • Weight: 280g • Water-Resistant Nylon & Cotton Quilting",
      "imageKey": "kids_backpack"
    },
    {
      "id": "p11",
      "subcategory": "Vanity Organizers",
      "title": "Velvet Travel Jewellery Box",
      "category": "Accessories",
      "price": 1450,
      "oldPrice": null,
      "discount": null,
      "isDeal": false,
      "available": 6,
      "sold": 82,
      "stockStatus": "LOW STOCK",
      "rating": 4.9,
      "reviewsCount": 164,
      "isFeatured": false,
      "isNew": false,
      "isJustForYou": true,
      "specialTab": "Accessories",
      "variants": [
        "Parisian Blush",
        "Cashmere Ivory"
      ],
      "image": "@img/jewelry_box.jpg",
      "gallery": [
        "@img/jewelry_box.jpg",
        "@img/acrylic_org.jpg",
        "@img/necklace.jpg",
        "@img/clips.jpg"
      ],
      "description": "Plush velvet jewellery organizer case with dedicated ring rolls, earring grid, necklace hooks, and a built-in vanity mirror.",
      "specs": "Dimensions: 16cm x 11cm x 5.5cm • Exterior: Fine Velvet • Hardware: Rose-gold zipper",
      "imageKey": "jewelry_box"
    },
    {
      "id": "p12",
      "subcategory": "Vanity Organizers",
      "title": "Crystal Acrylic Vanity Organizer",
      "category": "Accessories",
      "price": 1850,
      "oldPrice": null,
      "discount": null,
      "isDeal": false,
      "available": 24,
      "sold": 51,
      "stockStatus": "IN STOCK",
      "rating": 4.8,
      "reviewsCount": 92,
      "isFeatured": false,
      "isNew": false,
      "isJustForYou": false,
      "specialTab": "Accessories",
      "variants": [
        "Large Dustproof Tier"
      ],
      "image": "@img/acrylic_org.jpg",
      "gallery": [
        "@img/acrylic_org.jpg",
        "@img/jewelry_box.jpg",
        "@img/desk_caddy.jpg",
        "@img/vase.jpg"
      ],
      "description": "Dustproof dome-top skincare and fragrance organizer with smooth-gliding drawers for lipsticks, serums, and palettes.",
      "specs": "Material: High-Clarity PMMA Acrylic • Drawers: 3 Tiered Compartments • Water-Washable",
      "imageKey": "acrylic_org"
    },
    {
      "id": "p13",
      "subcategory": "Block Heel Mules",
      "title": "Champagne Pearl-Strap Block Mules",
      "category": "Shoes",
      "price": 2750,
      "oldPrice": null,
      "discount": null,
      "isDeal": false,
      "available": 15,
      "sold": 38,
      "stockStatus": "IN STOCK",
      "rating": 4.8,
      "reviewsCount": 73,
      "isFeatured": false,
      "isNew": true,
      "isJustForYou": false,
      "specialTab": "Shoes & Fashion",
      "variants": [
        "EU 36",
        "EU 37",
        "EU 38",
        "EU 39",
        "EU 40"
      ],
      "image": "@img/heels.jpg",
      "gallery": [
        "@img/heels.jpg",
        "@img/champagne_bag.jpg",
        "@img/cream_bag.jpg",
        "@img/silk_blouse.jpg"
      ],
      "description": "Effortless slip-on block heel mules featuring a luminous pearl-embellished strap and stable 2-inch architectural heel.",
      "specs": "Heel Height: 2.0 inches • Upper: Satin & Pearl Strap • Footbed: Double-padded micro-suede",
      "imageKey": "heels"
    },
    {
      "id": "p14",
      "subcategory": "Quilted Ballet Flats",
      "title": "Quilted Nappa Ballet Flats",
      "category": "Shoes",
      "price": 2250,
      "oldPrice": null,
      "discount": null,
      "isDeal": false,
      "available": 5,
      "sold": 67,
      "stockStatus": "LOW STOCK",
      "rating": 4.9,
      "reviewsCount": 109,
      "isFeatured": false,
      "isNew": false,
      "isJustForYou": true,
      "specialTab": "Best Sellers",
      "variants": [
        "EU 36",
        "EU 37",
        "EU 38",
        "EU 39"
      ],
      "image": "@img/heels.jpg",
      "gallery": [
        "@img/heels.jpg",
        "@img/cream_bag.jpg",
        "@img/clothing_set.jpg",
        "@img/silk_blouse.jpg"
      ],
      "description": "Cloud-soft quilted everyday ballet flats with a delicate bow and flexible non-slip sole for all-day Dhaka commutes.",
      "specs": "Heel: 0.5 inch flat • Upper: Quilted Vegan Nappa • Insole: Breathable cushioned arch support",
      "imageKey": "heels"
    },
    {
      "id": "p15",
      "subcategory": "Modest Luxe Kaftans",
      "title": "Ivory Pleated Modest Luxe Kaftan",
      "category": "Clothing",
      "price": 3890,
      "oldPrice": null,
      "discount": null,
      "isDeal": false,
      "available": 18,
      "sold": 27,
      "stockStatus": "IN STOCK",
      "rating": 4.9,
      "reviewsCount": 61,
      "isFeatured": false,
      "isNew": false,
      "isJustForYou": false,
      "specialTab": "Best Sellers",
      "variants": [
        "Free Size (Fits S-XL)",
        "Petite Length"
      ],
      "image": "@img/clothing_set.jpg",
      "gallery": [
        "@img/clothing_set.jpg",
        "@img/silk_blouse.jpg",
        "@img/champagne_bag.jpg",
        "@img/necklace.jpg"
      ],
      "description": "Flowing micro-pleated georgette kaftan with detachable self-tie belt and champagne thread embroidery along the cuffs.",
      "specs": "Fabric: Premium Micro-Pleated Georgette • Inner Slip: Included • Length: 54 inches",
      "imageKey": "clothing_set"
    },
    {
      "id": "p16",
      "subcategory": "Nursery Storage",
      "title": "Pastel Nursery & Toy Storage Baskets (3 Pcs)",
      "category": "Mom & Kids",
      "price": 1150,
      "oldPrice": null,
      "discount": null,
      "isDeal": false,
      "available": 25,
      "sold": 58,
      "stockStatus": "IN STOCK",
      "rating": 4.8,
      "reviewsCount": 83,
      "isFeatured": false,
      "isNew": false,
      "isJustForYou": false,
      "specialTab": "Mom & Kids",
      "variants": [
        "Blush & Cream Trio"
      ],
      "image": "@img/bento_baskets.jpg",
      "gallery": [
        "@img/bento_baskets.jpg",
        "@img/mom_kids.jpg",
        "@img/kids_backpack.jpg",
        "@img/desk_caddy.jpg"
      ],
      "description": "Set of three modular nursery and diaper-station organizer baskets with cut-out handles in pastel blush and cashmere.",
      "specs": "Pieces: 3 Stackable Baskets • Material: BPA-Free Food-Grade PP • Wipe-Clean Design",
      "imageKey": "bento_baskets"
    },
    {
      "id": "p17",
      "subcategory": "Signature Gift Boxes",
      "title": "Tehzib Signature Blush Keepsake Gift Box",
      "category": "Accessories",
      "price": 2150,
      "oldPrice": null,
      "discount": null,
      "isDeal": false,
      "available": 20,
      "sold": 45,
      "stockStatus": "IN STOCK",
      "rating": 5,
      "reviewsCount": 118,
      "isFeatured": false,
      "isNew": false,
      "isJustForYou": false,
      "specialTab": "Best Sellers",
      "variants": [
        "Signature Gift Set"
      ],
      "image": "@img/giftbox.jpg",
      "gallery": [
        "@img/giftbox.jpg",
        "@img/snowglobe.jpg",
        "@img/vase.jpg",
        "@img/jewelry_box.jpg"
      ],
      "description": "Magnetic keepsake gift hamper containing a ceramic minimalist vase, pearl hair claw, scented soy candle, and handwritten card.",
      "specs": "Box Type: Rigid Magnetic Ribbon Box • Includes: 4 Curated Lifestyle Pieces + Custom Card",
      "imageKey": "giftbox"
    }
  ],
  "DEFAULT_CATEGORIES_LIST": [
    {
      "name": "Clothing",
      "imgKey": "silk_blouse",
      "subcategories": [
        "Satin Blouses & Tops",
        "Co-Ord Sets",
        "Modest Luxe Kaftans"
      ]
    },
    {
      "name": "Shoes",
      "imgKey": "heels",
      "subcategories": [
        "Slingback Heels",
        "Block Heel Mules",
        "Quilted Ballet Flats"
      ]
    },
    {
      "name": "Fashion",
      "imgKey": "cream_bag",
      "subcategories": [
        "Crossbody Bags",
        "Evening Clutches",
        "Minimalist Watches"
      ]
    },
    {
      "name": "Accessories",
      "imgKey": "necklace",
      "subcategories": [
        "18K Plated Jewellery",
        "Hair Claws & Clips",
        "Vanity Organizers",
        "Signature Gift Boxes"
      ]
    },
    {
      "name": "Mom & Kids",
      "imgKey": "mom_kids",
      "subcategories": [
        "Matching Twin Sets",
        "Kids Mini Backpacks",
        "Nursery Storage"
      ]
    }
  ],
  "DEFAULT_HERO_SLIDES": [
    {
      "id": "slide-1",
      "tag": "Contemporary Dhaka Edit",
      "title": "Sleek Everyday Luxury, Curated for Her",
      "subtitle": "Discover draped satin clothing, sculpted heels, quilted handbags, 18K jewellery, and charming mom & kids essentials crafted for modern living.",
      "ctaText": "Shop Collection →",
      "targetCat": "All",
      "secondaryText": "Explore Fashion Bags",
      "secondaryCat": "Fashion",
      "bgImgKey": "hero",
      "showcaseProductId": "p5"
    },
    {
      "id": "slide-2",
      "tag": "Satin & Modest Couture",
      "title": "Effortless Draped Silhouettes & Co-Ord Sets",
      "subtitle": "Tailored from lustrous mulberry-touch satin and breathable cashmere-blend knits in Tehzib's signature Parisian Blush & Warm Ivory palette.",
      "ctaText": "Explore Clothing →",
      "targetCat": "Clothing",
      "secondaryText": "",
      "secondaryCat": "",
      "bgImgKey": "clothing_set",
      "showcaseProductId": "p1"
    },
    {
      "id": "slide-3",
      "tag": "Sculpted Footwear Edit",
      "title": "Statement Slingbacks & Pearl-Strap Mules",
      "subtitle": "Step out in architectural heels, double-padded satin footbeds, and handcrafted evening clutches designed for Dhaka soirées.",
      "ctaText": "Shop Shoes & Heels →",
      "targetCat": "Shoes",
      "secondaryText": "",
      "secondaryCat": "",
      "bgImgKey": "heels",
      "showcaseProductId": "p3"
    },
    {
      "id": "slide-4",
      "tag": "Little Ones & Fine Adornments",
      "title": "Matching Twin Sets & 18K Vermeil Jewellery",
      "subtitle": "Celebrate everyday moments with soft combed-cotton Mom & Kids knitwear, quilted mini backpacks, and tarnish-free rose-gold keepsakes.",
      "ctaText": "Shop Mom & Kids →",
      "targetCat": "Mom & Kids",
      "secondaryText": "Shop Jewellery",
      "secondaryCat": "Accessories",
      "bgImgKey": "mom_kids",
      "showcaseProductId": "p9"
    }
  ],
  "DEFAULT_PROMO_BANNERS": [
    {
      "eyebrow": "Sculpted Footwear & Bags",
      "title": "The Statement Heels & Clutch Edit",
      "sub": "Pointed slingbacks, pearl mules & quilted evening bags.",
      "targetCat": "Shoes",
      "imgKey": "heels"
    },
    {
      "eyebrow": "Little Ones & Matching Sets",
      "title": "Mom & Kids Capsule Collection",
      "sub": "Matching cable-knit twin sets, mini backpacks & nursery baskets.",
      "targetCat": "Mom & Kids",
      "imgKey": "mom_kids"
    }
  ],
  "DEFAULT_VOUCHERS": [
    {
      "code": "TEHZIB15",
      "discountPct": 15,
      "title": "15% Privilege Welcome Voucher",
      "desc": "Valid on all Clothing, Shoes, Fashion, Accessories & Mom & Kids items."
    },
    {
      "code": "SAVE15",
      "discountPct": 15,
      "title": "15% Seasonal Capsule Voucher",
      "desc": "Applicable across all curated collections."
    },
    {
      "code": "PRIV20",
      "discountPct": 20,
      "title": "20% Tehzib Privé Gold Tier Voucher",
      "desc": "Exclusive 20% privilege discount for Privé members."
    }
  ],
  "DEFAULT_CUSTOMERS": [
    {
      "id": "cust-1",
      "name": "Nusrat Jahan",
      "email": "nusrat.jahan@tehzib.com",
      "phone": "+880 1711-948210",
      "gender": "Female",
      "dob": "14 October, 1997",
      "address": "Uttara Sector 12, Dhaka, Bangladesh",
      "rating": "4.9 / 5.0",
      "points": 1450
    },
    {
      "id": "cust-2",
      "name": "Samira Rahman",
      "email": "samira.rahman@dhakamail.com",
      "phone": "+880 1819-332104",
      "gender": "Female",
      "dob": "22 March, 1995",
      "address": "Gulshan Avenue, Road 71, Dhaka",
      "rating": "5.0 / 5.0",
      "points": 2300
    },
    {
      "id": "cust-3",
      "name": "Farzana Karim",
      "email": "farzana.k@gmail.com",
      "phone": "+880 1912-887410",
      "gender": "Female",
      "dob": "08 November, 1999",
      "address": "Dhanmondi Road 9/A, Dhaka",
      "rating": "4.8 / 5.0",
      "points": 890
    }
  ],
  "DEFAULT_ORDERS": [
    {
      "orderId": "#THZ-2026",
      "customerName": "Nusrat Jahan",
      "customerPhone": "+880 1711-948210",
      "address": "Uttara Sector 12, Dhaka, Bangladesh",
      "status": "To Receive",
      "date": "Today • Expected within 24 hrs",
      "items": "Blush Satin Wrap Blouse (M), Quilted Cream Crossbody Bag",
      "lineItems": [
        {
          "id": "p1",
          "title": "Blush Satin Wrap Blouse",
          "variant": "M",
          "qty": 1,
          "price": 2650
        },
        {
          "id": "p4",
          "title": "Quilted Cream Crossbody Bag",
          "variant": "Alabaster Cream",
          "qty": 1,
          "price": 2850
        }
      ],
      "deliveryMethod": "standard",
      "paymentMethod": "Cash on Delivery",
      "source": "Customer Storefront",
      "total": 5500
    },
    {
      "orderId": "#THZ-1988",
      "customerName": "Nusrat Jahan",
      "customerPhone": "+880 1711-948210",
      "address": "Uttara Sector 12, Dhaka, Bangladesh",
      "status": "To Review",
      "date": "Delivered • 3 Days Ago",
      "items": "18K Gold-Plated Layered Necklace, Pearl Hair Claw Set",
      "lineItems": [
        {
          "id": "p7",
          "title": "18K Gold-Plated Layered Necklace",
          "variant": "18K Rose Gold",
          "qty": 1,
          "price": 1450
        },
        {
          "id": "p8",
          "title": "Pearl & Tortoiseshell Hair Claw Set (4 Pcs)",
          "variant": "4-Piece Curated Set",
          "qty": 1,
          "price": 680
        }
      ],
      "deliveryMethod": "standard",
      "paymentMethod": "bKash Mobile Wallet",
      "source": "Staff POS (Uttara Studio)",
      "total": 2130
    }
  ],
  "DEFAULT_NOTIFICATIONS": [
    {
      "id": "n1",
      "group": "Today",
      "icon": "🚚",
      "title": "Order #THZ-2026 Shipped!",
      "body": "Great news! Your Tehzib package is on its way to Uttara Sector 12 and will arrive within 24 hours.",
      "time": "NOW",
      "isRecent": true,
      "unread": true,
      "targetView": "account"
    },
    {
      "id": "n2",
      "group": "Today",
      "icon": "%",
      "title": "Flash Sale: Up to 19% Off Signature Edit",
      "body": "Enjoy exclusive savings on Blush Satin Wrap Blouses, Kitten Heels & Quilted Bags. Use code TEHZIB15 at checkout.",
      "time": "2H AGO",
      "isRecent": false,
      "unread": true,
      "targetView": "home"
    },
    {
      "id": "n3",
      "group": "Yesterday",
      "icon": "🛡",
      "title": "Security Login Verified",
      "body": "Your Tehzib Privé account was signed in from Dhaka, Bangladesh.",
      "time": "1D AGO",
      "isRecent": false,
      "unread": false,
      "targetView": "account"
    },
    {
      "id": "n4",
      "group": "Yesterday",
      "icon": "📦",
      "title": "Package Delivered (#THZ-1988)",
      "body": "Your order #THZ-1988 has been delivered to your doorstep in Dhaka. Enjoy your Tehzib pieces!",
      "time": "1D AGO",
      "isRecent": false,
      "unread": false,
      "targetView": "account"
    },
    {
      "id": "n5",
      "group": "Earlier",
      "icon": "✦",
      "title": "Tehzib Privé Reward Points Earned",
      "body": "You've earned 500 Privé points! Redeem them with code TEHZIB15 on your next purchase.",
      "time": "3D AGO",
      "isRecent": false,
      "unread": false,
      "targetView": "cart"
    }
  ],
  "DEFAULT_STORE_SETTINGS": {
    "promoText": "Complimentary Dhaka Delivery over ৳2,500 • Use Voucher",
    "promoCode": "TEHZIB15",
    "promoSuffix": "for 15% Off",
    "conciergePhone": "+880 1711-889900",
    "standardDeliveryFee": 60,
    "address": "Uttara Sector 12, Dhaka, Bangladesh",
    "copyright": "© 2027 Tehzib. All rights reserved."
  },
  "AUTHORIZED_ADMINS": {
    "admin@tehzib.com": {
      "pass": "Tehzib@2027",
      "name": "Founder & Store Owner",
      "role": "Founder & Store Owner (Full Access)",
      "avatar": "TA"
    },
    "tehzib-admin": {
      "pass": "Tehzib@2027",
      "name": "Tehzib Master Admin",
      "role": "Founder & Store Owner (Full Access)",
      "avatar": "TA"
    },
    "ops@tehzib.com": {
      "pass": "Tehzib@2027",
      "name": "Inventory & Courier Lead",
      "role": "Order Fulfillment & Courier Ops",
      "avatar": "OP"
    },
    "finance@tehzib.com": {
      "pass": "Tehzib@2027",
      "name": "Finance & COD Controller",
      "role": "Finance & COD Reconciliation",
      "avatar": "FN"
    }
  },
  "ERP": {
    "cms": {
      "topOfferText": "COMPLIMENTARY GIFT WRAPPING ON ALL ORDERS • EXPRESS DELIVERY ACROSS DHAKA",
      "topPhone": "+880 1711-889900",
      "secTrendTitle": "Trendsetters",
      "secNewTitle": "New Arrivals",
      "secJfyTitle": "Just For You",
      "newsletterTitle": "Join the Tehzib Private Circle",
      "newsletterSub": "Receive private previews of seasonal drops, bespoke sizing invitations, and atelier stories.",
      "footerBio": "Tehzib is a contemporary Bangladeshi fashion, footwear, accessories, and lifestyle house blending Parisian Blush aesthetics with artisanal heritage.",
      "footerAddress": "Uttara Sector 12, Dhaka, Bangladesh",
      "footerEmail": "concierge@tehzib.com",
      "footerPhone": "+880 1711-889900",
      "footerCopyright": "© 2027 Tehzib. All rights reserved.",
      "socials": {
        "fb": "https://facebook.com/tehzib.bd",
        "insta": "https://instagram.com/tehzib.bd",
        "tiktok": "https://tiktok.com/@tehzib.bd",
        "threads": "https://threads.net/@tehzib.bd"
      },
      "heroSliders": [
        {
          "id": "hs1",
          "eyebrow": "TEHZIB ATELIER • 2027 COLLECTION",
          "title": "Parisian Blush & Velvet Noir Elegance",
          "desc": "Hand-draped mulberry satin blouses, statement hair accessories, quilted bags, and artisanal footwear crafted for contemporary Bangladesh.",
          "cta": "Explore Collection",
          "category": "Accessories",
          "image": "@img/hero.jpg"
        },
        {
          "id": "hs2",
          "eyebrow": "ARTISANAL FOOTWEAR & STATEMENT BAGS",
          "title": "Sculpted Slingbacks & Quilted Crossbody Bags",
          "desc": "Memory-foam cushioned kitten heels and champagne-hardware evening clutches designed for effortless day-to-gala transitions.",
          "cta": "Shop Shoes & Bags",
          "category": "Fashion",
          "image": "@img/heels.jpg"
        },
        {
          "id": "hs3",
          "eyebrow": "MOM & MINI CURATED CAPSULE",
          "title": "Organic Breathable Comfort for Mom & Kids",
          "desc": "Hypoallergenic combed cotton loungewear sets, pastel plush backpacks, and keepsake nursery organizers.",
          "cta": "Discover Mom & Kids",
          "category": "Mom & Kids",
          "image": "@img/mom_kids.jpg"
        }
      ],
      "categories": [
        {
          "name": "Fashion",
          "imgKey": "cream_bag",
          "enabled": true,
          "rolloutPhase": "Day-1 Core",
          "subs": [
            "Crossbody Bags",
            "Evening Clutches",
            "Silk Scarves & Wraps",
            "Statement Belts"
          ]
        },
        {
          "name": "Accessories",
          "imgKey": "necklace",
          "enabled": true,
          "rolloutPhase": "Day-1 Core",
          "subs": [
            "Hair Clips & Pins",
            "Pearl & Gold Jewelry",
            "Dress Watches",
            "Vanity & Jewelry Boxes"
          ]
        },
        {
          "name": "Mom & Kids",
          "imgKey": "mom_kids",
          "enabled": true,
          "rolloutPhase": "Active Capsule",
          "subs": [
            "Mom & Mini Sets",
            "Kids Backpacks",
            "Nursery Storage Baskets",
            "Keepsake Gifts"
          ]
        },
        {
          "name": "Shoes",
          "imgKey": "heels",
          "enabled": true,
          "rolloutPhase": "Active Capsule",
          "subs": [
            "Slingback Heels",
            "Embellished Mules",
            "Block Heel Sandals",
            "Festive Flats"
          ]
        },
        {
          "name": "Clothing",
          "imgKey": "silk_blouse",
          "enabled": true,
          "rolloutPhase": "Active Capsule",
          "subs": [
            "Satin Blouses & Tops",
            "Co-Ord Sets",
            "Modest Outerwear",
            "Festive Atelier Ensembles"
          ]
        },
        {
          "name": "Gifts & Seasonal",
          "imgKey": "giftbox",
          "enabled": false,
          "rolloutPhase": "Organized for Phase-2",
          "subs": [
            "Curated Gift Hampers",
            "Eid Luxury Boxes",
            "Bridal Bridesmaid Kits"
          ]
        }
      ],
      "footerSections": [
        {
          "id": "fsec_company",
          "title": "Company",
          "items": [
            {
              "id": "fi_about",
              "label": "About Us",
              "type": "info",
              "modalTitle": "About Tehzib Lifestyle",
              "message": "Tehzib Lifestyle Bangladesh is a contemporary fashion, footwear, accessories, and Mom & Kids house headquartered in Uttara Sector 12, Dhaka, blending Parisian Blush aesthetics with studio craftsmanship."
            },
            {
              "id": "fi_return",
              "label": "Return Policy",
              "type": "info",
              "modalTitle": "Return & Exchange Policy",
              "message": "Tehzib Lifestyle Bangladesh offers authentic studio-curated Clothing, Shoes, Fashion Bags, Jewellery & Mom & Kids collections with 7-day easy exchanges and Dhaka concierge delivery."
            },
            {
              "id": "fi_faq",
              "label": "FAQs",
              "type": "info",
              "modalTitle": "Frequently Asked Questions",
              "message": "Find quick answers on bespoke sizing, Inside Dhaka (৳70) & Nationwide (৳130) courier timelines, bKash/Nagad/COD payments, and 7-day exchanges from our Uttara Sector 12 studio."
            },
            {
              "id": "fi_privacy",
              "label": "Privacy Policy",
              "type": "info",
              "modalTitle": "Privacy Policy",
              "message": "Your personal profile, contact numbers, delivery addresses, and order records are strictly protected under Tehzib Privé security standards."
            },
            {
              "id": "fi_terms",
              "label": "Terms & Conditions",
              "type": "info",
              "modalTitle": "Terms & Conditions",
              "message": "All orders are subject to real-time stock reservation at our Uttara Sector 12 hub. Express delivery charges vary based on distance."
            }
          ]
        },
        {
          "id": "fsec_care",
          "title": "Customer Care",
          "items": [
            {
              "id": "fi_guarantee",
              "label": "Money-back Guarantee",
              "type": "info",
              "modalTitle": "Authenticity & Quality Guarantee",
              "message": "Every Tehzib piece undergoes 3-stage quality inspection before dispatch. If any item arrives with a defect, we offer an immediate free replacement or 100% money-back refund."
            },
            {
              "id": "fi_prod_ret",
              "label": "Product Returns",
              "type": "info",
              "modalTitle": "Easy 7-Day Returns",
              "message": "Initiate a return or size exchange within 7 days of receiving your parcel with original tags and blush gift packaging intact."
            },
            {
              "id": "fi_support",
              "label": "Support Center",
              "type": "info",
              "modalTitle": "24/7 Dhaka Support Center",
              "message": "Call our Uttara Sector 12 Dhaka concierge desk at +880 1711-889900 or email concierge@tehzib.com for instant order and styling support."
            },
            {
              "id": "fi_shipping",
              "label": "Shipping",
              "type": "info",
              "modalTitle": "Nationwide Bangladesh Shipping",
              "message": "We dispatch daily via Steadfast & Pathao Courier: Inside Dhaka Standard (৳70), Express Dhaka Concierge (distance-based), and Outside Dhaka Home Delivery (৳130)."
            }
          ]
        },
        {
          "id": "fsec_pop_cats",
          "title": "Popular Categories",
          "items": [
            {
              "id": "fi_cat_cl",
              "label": "Clothing",
              "type": "category",
              "targetCat": "Clothing",
              "modalTitle": "Clothing Collection",
              "message": "Shop mulberry satin blouses, breathable linen co-ord sets, and festive atelier ensembles."
            },
            {
              "id": "fi_cat_sh",
              "label": "Shoes & Heels",
              "type": "category",
              "targetCat": "Shoes",
              "modalTitle": "Shoes & Heels Collection",
              "message": "Explore cushioned slingback kitten heels, pearl mules, and block heel sandals."
            },
            {
              "id": "fi_cat_fa",
              "label": "Fashion Bags & Watches",
              "type": "category",
              "targetCat": "Fashion",
              "modalTitle": "Fashion Bags & Watches",
              "message": "Discover quilted crossbody bags, crystal evening clutches, and silk wraps."
            },
            {
              "id": "fi_cat_ac",
              "label": "Jewellery & Accessories",
              "type": "category",
              "targetCat": "Accessories",
              "modalTitle": "Jewellery & Accessories",
              "message": "Browse Parisian blush claw clips, freshwater pearl chokers, and rose-gold watches."
            },
            {
              "id": "fi_cat_mk",
              "label": "Mom & Kids",
              "type": "category",
              "targetCat": "Mom & Kids",
              "modalTitle": "Mom & Kids Capsule",
              "message": "Hypoallergenic organic cotton sets, kids backpacks, and nursery organizers."
            }
          ]
        }
      ]
    },
    "suppliers": [
      {
        "id": "SUP-01",
        "name": "Chawkbazar & Uttara Accessories Hub",
        "contact": "Tariqul Islam",
        "phone": "+880 1711-223344",
        "category": "Accessories & Hair Clips",
        "moq": 12,
        "leadDays": 2,
        "quotedRange": "৳ 140 – ৳ 320 / unit",
        "terms": "Cash on Delivery (GRN)",
        "address": "Uttara Sector 10 / Chawkbazar Wholesale, Dhaka",
        "paidAmount": 92100,
        "payable": 0,
        "defectClaims": "1 claim resolved (2 chipped clips replaced free)",
        "notes": "Reliable 48-hour restock for claw clips, pearl pins & hair accessories. Ideal for testing new designs with small 12-pc MOQs."
      },
      {
        "id": "SUP-02",
        "name": "Aurelia Luxury Bags & Hardware Atelier",
        "contact": "Sabrina Chowdhury",
        "phone": "+880 1912-887766",
        "category": "Fashion Bags & Clutches",
        "moq": 20,
        "leadDays": 5,
        "quotedRange": "৳ 1,150 – ৳ 1,650 / unit",
        "terms": "50% Advance • 50% on Delivery",
        "address": "Banani Road 11 & Mirpur Leather Zone, Dhaka",
        "paidAmount": 118000,
        "payable": 84000,
        "defectClaims": "0 open claims (99.2% QC pass rate)",
        "notes": "Strong craftsmanship on quilted crossbody bags and crystal box clutches."
      },
      {
        "id": "SUP-03",
        "name": "Dhaka Mulberry Silk & Apparel Studio",
        "contact": "Mahmudul Hasan",
        "phone": "+880 1819-556677",
        "category": "Clothing & Fabrics",
        "moq": 15,
        "leadDays": 4,
        "quotedRange": "৳ 1,100 – ৳ 1,750 / unit",
        "terms": "Net 15 Days Credit",
        "address": "BSCIC Industrial Area, Tongi, Gazipur",
        "paidAmount": 145000,
        "payable": 48000,
        "defectClaims": "1 minor stitching rework completed",
        "notes": "Produces satin wrap blouses and breathable linen co-ord sets."
      },
      {
        "id": "SUP-04",
        "name": "Tehzib Signature Footwear & Kids Craft Studio",
        "contact": "Nafis Rahman",
        "phone": "+880 1611-334455",
        "category": "Footwear & Leather",
        "moq": 24,
        "leadDays": 6,
        "quotedRange": "৳ 850 – ৳ 1,450 / unit",
        "terms": "50% Advance • 50% on Delivery",
        "address": "Sector 12 Uttara & Hazaribagh Craft Zone, Dhaka",
        "paidAmount": 85000,
        "payable": 22000,
        "defectClaims": "0 open claims (cushioning & stitching verified)",
        "notes": "Handcrafted slingback kitten heels, pearl mules, and Mom & Kids footwear sets."
      }
    ],
    "products": [
      {
        "id": "p_claw",
        "sku": "TEH-ACC-CLP-PNK",
        "title": "Signature Parisian Pink Claw Clip",
        "category": "Accessories",
        "subcategory": "Hair Clips & Pins",
        "supplierId": "SUP-01",
        "costPrice": 180,
        "landedCost": 210,
        "wholesalePrice": 280,
        "price": 450,
        "oldPrice": 590,
        "available": 3,
        "reserved": 0,
        "sold": 2,
        "returned": 0,
        "damaged": 0,
        "reorderThreshold": 3,
        "isPublished": true,
        "statusLabel": "Active",
        "isDeal": true,
        "isNew": true,
        "isJustForYou": true,
        "specialTab": "Accessories",
        "variants": [
          "Blush Pink",
          "Ivory Pearl",
          "Tortoiseshell"
        ],
        "image": "@img/necklace.jpg",
        "description": "Hand-polished cellulose acetate claw clip in Tehzib's signature Parisian Blush Pink with inlaid pearl accents and high-tension spring.",
        "specs": "Material: Cellulose Acetate & Reinforced Spring • Length: 11cm • Variant SKU: TEH-ACC-CLP-PNK",
        "seoKeywords": "pink claw clip bangladesh, hair accessories dhaka, tehzib claw clip",
        "seoDescription": "Shop Tehzib's Signature Parisian Pink Claw Clip with non-slip grip and pearl finish.",
        "geoKeywords": "Uttara Sector 12 Dhaka, Gulshan, Banani, Dhanmondi"
      },
      {
        "id": "p1",
        "sku": "THZ-CL-001",
        "title": "Blush Satin Wrap Blouse",
        "category": "Clothing",
        "subcategory": "Satin Blouses & Tops",
        "supplierId": "SUP-03",
        "costPrice": 1193,
        "landedCost": 1336,
        "wholesalePrice": 1908,
        "price": 2650,
        "oldPrice": 3200,
        "available": 14,
        "reserved": 0,
        "sold": 36,
        "returned": 0,
        "damaged": 0,
        "reorderThreshold": 5,
        "isPublished": true,
        "statusLabel": "Active",
        "isDeal": true,
        "isNew": true,
        "isJustForYou": true,
        "specialTab": "Best Sellers",
        "variants": [
          "XS",
          "S",
          "M",
          "L",
          "XL"
        ],
        "image": "@img/silk_blouse.jpg",
        "description": "Tailored from lustrous mulberry-touch satin in Tehzib's signature Parisian Blush tone. Features a draped wrap bodice, pearl-buttoned bishop sleeves, and a breathable lining suited for Dhaka's festive evenings and elevated workwear.",
        "specs": "Fabric: 100% Silky Matte Satin • Fit: Relaxed Wrap Fit • Care: Gentle hand wash or dry clean • Origin: Crafted in Dhaka Studio",
        "seoKeywords": "blush satin wrap blouse, satin blouses & tops bangladesh, tehzib",
        "seoDescription": "Shop Blush Satin Wrap Blouse at Tehzib Lifestyle Bangladesh.",
        "geoKeywords": "Uttara Sector 12 Dhaka, Gulshan, Banani, Dhanmondi, Bangladesh"
      },
      {
        "id": "p2",
        "sku": "THZ-CL-002",
        "title": "Cashmere-Touch Linen Co-Ord Set",
        "category": "Clothing",
        "subcategory": "Co-Ord Sets",
        "supplierId": "SUP-03",
        "costPrice": 1553,
        "landedCost": 1739,
        "wholesalePrice": 2484,
        "price": 3450,
        "oldPrice": 4100,
        "available": 9,
        "reserved": 0,
        "sold": 41,
        "returned": 0,
        "damaged": 0,
        "reorderThreshold": 5,
        "isPublished": true,
        "statusLabel": "Active",
        "isDeal": true,
        "isNew": true,
        "isJustForYou": false,
        "specialTab": "Best Sellers",
        "variants": [
          "S",
          "M",
          "L",
          "XL"
        ],
        "image": "@img/clothing_set.jpg",
        "description": "Contemporary two-piece co-ord set featuring a longline architectural tunic and wide-leg pleated trousers in warm cashmere beige. Designed for effortless day-to-dinner sophistication.",
        "specs": "Fabric: Cotton-Linen Blend • Pieces: 2 (Tunic + Wide-Leg Trouser) • Trouser Waist: Elasticated back with side zip",
        "seoKeywords": "cashmere-touch linen co-ord set, co-ord sets bangladesh, tehzib",
        "seoDescription": "Shop Cashmere-Touch Linen Co-Ord Set at Tehzib Lifestyle Bangladesh.",
        "geoKeywords": "Uttara Sector 12 Dhaka, Gulshan, Banani, Dhanmondi, Bangladesh"
      },
      {
        "id": "p3",
        "sku": "THZ-SH-003",
        "title": "Blush Slingback Kitten Heels",
        "category": "Shoes",
        "subcategory": "Slingback Heels",
        "supplierId": "SUP-02",
        "costPrice": 1328,
        "landedCost": 1487,
        "wholesalePrice": 2124,
        "price": 2950,
        "oldPrice": 3600,
        "available": 11,
        "reserved": 1,
        "sold": 49,
        "returned": 0,
        "damaged": 0,
        "reorderThreshold": 5,
        "isPublished": true,
        "statusLabel": "Active",
        "isDeal": true,
        "isNew": false,
        "isJustForYou": true,
        "specialTab": "Shoes & Fashion",
        "variants": [
          "EU 36",
          "EU 37",
          "EU 38",
          "EU 39",
          "EU 40"
        ],
        "image": "@img/heels.jpg",
        "description": "Hand-crafted pointed-toe slingback kitten heels with a double-cushioned memory foam footbed and champagne buckle hardware. Inspired by contemporary Bangladeshi footwear ateliers.",
        "specs": "Upper: Vegan Nappa Leather • Heel Height: 2.2 inches (5.5 cm) • Insole: Plush padded latex • Sole: Non-slip rubber",
        "seoKeywords": "blush slingback kitten heels, slingback heels bangladesh, tehzib",
        "seoDescription": "Shop Blush Slingback Kitten Heels at Tehzib Lifestyle Bangladesh.",
        "geoKeywords": "Uttara Sector 12 Dhaka, Gulshan, Banani, Dhanmondi, Bangladesh"
      },
      {
        "id": "p4",
        "sku": "THZ-FA-004",
        "title": "Quilted Cream Crossbody Bag",
        "category": "Fashion",
        "subcategory": "Crossbody Bags",
        "supplierId": "SUP-02",
        "costPrice": 1283,
        "landedCost": 1437,
        "wholesalePrice": 2052,
        "price": 2850,
        "oldPrice": 3500,
        "available": 16,
        "reserved": 0,
        "sold": 54,
        "returned": 0,
        "damaged": 0,
        "reorderThreshold": 5,
        "isPublished": true,
        "statusLabel": "Active",
        "isDeal": true,
        "isNew": false,
        "isJustForYou": true,
        "specialTab": "Best Sellers",
        "variants": [
          "Alabaster Cream",
          "Blush Rose",
          "Obsidian Black"
        ],
        "image": "@img/cream_bag.jpg",
        "description": "Diamond-quilted crossbody bag in soft alabaster cream with an interwoven champagne gold chain strap, magnetic turn-lock closure, and dual interior compartments.",
        "specs": "Dimensions: 23cm x 15cm x 7cm • Hardware: Brushed Champagne Gold • Strap: Convertible shoulder to crossbody",
        "seoKeywords": "quilted cream crossbody bag, crossbody bags bangladesh, tehzib",
        "seoDescription": "Shop Quilted Cream Crossbody Bag at Tehzib Lifestyle Bangladesh.",
        "geoKeywords": "Uttara Sector 12 Dhaka, Gulshan, Banani, Dhanmondi, Bangladesh"
      },
      {
        "id": "p5",
        "sku": "THZ-FA-005",
        "title": "Champagne Top-Handle Evening Clutch",
        "category": "Fashion",
        "subcategory": "Evening Clutches",
        "supplierId": "SUP-01",
        "costPrice": 1463,
        "landedCost": 1639,
        "wholesalePrice": 2340,
        "price": 3250,
        "oldPrice": null,
        "available": 22,
        "reserved": 1,
        "sold": 18,
        "returned": 0,
        "damaged": 0,
        "reorderThreshold": 5,
        "isPublished": true,
        "statusLabel": "Active",
        "isDeal": false,
        "isNew": true,
        "isJustForYou": true,
        "specialTab": "Shoes & Fashion",
        "variants": [
          "Champagne Gold",
          "Rose Quartz"
        ],
        "image": "@img/champagne_bag.jpg",
        "description": "Structured top-handle evening bag in metallic champagne satin-leather with a detachable chain strap. Fits smartphones, compact powder, and evening essentials effortlessly.",
        "specs": "Dimensions: 21cm x 13cm x 6cm • Lining: Velvet micro-suede • Closure: Sculpted clasp",
        "seoKeywords": "champagne top-handle evening clutch, evening clutches bangladesh, tehzib",
        "seoDescription": "Shop Champagne Top-Handle Evening Clutch at Tehzib Lifestyle Bangladesh.",
        "geoKeywords": "Uttara Sector 12 Dhaka, Gulshan, Banani, Dhanmondi, Bangladesh"
      },
      {
        "id": "p6",
        "sku": "THZ-FA-006",
        "title": "Rose-Gold Mesh Minimalist Watch",
        "category": "Fashion",
        "subcategory": "Minimalist Watches",
        "supplierId": "SUP-03",
        "costPrice": 1643,
        "landedCost": 1840,
        "wholesalePrice": 2628,
        "price": 3650,
        "oldPrice": 4400,
        "available": 8,
        "reserved": 0,
        "sold": 32,
        "returned": 0,
        "damaged": 0,
        "reorderThreshold": 5,
        "isPublished": true,
        "statusLabel": "Active",
        "isDeal": true,
        "isNew": true,
        "isJustForYou": false,
        "specialTab": "Shoes & Fashion",
        "variants": [
          "32mm Rose Gold",
          "28mm Champagne"
        ],
        "image": "@img/watch.jpg",
        "description": "Ultra-slim 32mm timepiece featuring a mother-of-pearl sunray dial, Japanese quartz movement, and an adjustable rose-gold Milanese mesh strap.",
        "specs": "Case Diameter: 32mm • Movement: Japanese Quartz • Water Resistance: 3 ATM • Warranty: 1 Year",
        "seoKeywords": "rose-gold mesh minimalist watch, minimalist watches bangladesh, tehzib",
        "seoDescription": "Shop Rose-Gold Mesh Minimalist Watch at Tehzib Lifestyle Bangladesh.",
        "geoKeywords": "Uttara Sector 12 Dhaka, Gulshan, Banani, Dhanmondi, Bangladesh"
      },
      {
        "id": "p7",
        "sku": "THZ-AC-007",
        "title": "18K Gold-Plated Layered Necklace",
        "category": "Accessories",
        "subcategory": "18K Plated Jewellery",
        "supplierId": "SUP-02",
        "costPrice": 653,
        "landedCost": 731,
        "wholesalePrice": 1044,
        "price": 1450,
        "oldPrice": null,
        "available": 30,
        "reserved": 0,
        "sold": 65,
        "returned": 0,
        "damaged": 0,
        "reorderThreshold": 5,
        "isPublished": true,
        "statusLabel": "Active",
        "isDeal": false,
        "isNew": true,
        "isJustForYou": true,
        "specialTab": "Accessories",
        "variants": [
          "18K Rose Gold",
          "18K Yellow Gold"
        ],
        "image": "@img/necklace.jpg",
        "description": "Waterproof, tarnish-free 316L stainless steel double-layered coin and solitaire pendant necklace plated in 18K gold. Hypoallergenic for everyday wear.",
        "specs": "Material: 316L Stainless Steel + 18K PVD Plating • Length: 40cm + 5cm extender • Tarnish-Resistant: Yes",
        "seoKeywords": "18k gold-plated layered necklace, 18k plated jewellery bangladesh, tehzib",
        "seoDescription": "Shop 18K Gold-Plated Layered Necklace at Tehzib Lifestyle Bangladesh.",
        "geoKeywords": "Uttara Sector 12 Dhaka, Gulshan, Banani, Dhanmondi, Bangladesh"
      },
      {
        "id": "p8",
        "sku": "THZ-AC-008",
        "title": "Pearl & Tortoiseshell Hair Claw Set (4 Pcs)",
        "category": "Accessories",
        "subcategory": "Hair Claws & Clips",
        "supplierId": "SUP-01",
        "costPrice": 306,
        "landedCost": 343,
        "wholesalePrice": 490,
        "price": 680,
        "oldPrice": null,
        "available": 45,
        "reserved": 0,
        "sold": 120,
        "returned": 0,
        "damaged": 0,
        "reorderThreshold": 5,
        "isPublished": true,
        "statusLabel": "Active",
        "isDeal": false,
        "isNew": false,
        "isJustForYou": true,
        "specialTab": "Accessories",
        "variants": [
          "4-Piece Curated Set"
        ],
        "image": "@img/clips.jpg",
        "description": "Set of four heavyweight cellulose acetate hair claws adorned with luminous faux pearls and blush tortoiseshell marbling. Strong spring grip for thick hair.",
        "specs": "Quantity: 4 Clips per Box • Material: Eco-friendly Cellulose Acetate & Pearl • Grip: Reinforced alloy spring",
        "seoKeywords": "pearl & tortoiseshell hair claw set (4 pcs), hair claws & clips bangladesh, tehzib",
        "seoDescription": "Shop Pearl & Tortoiseshell Hair Claw Set (4 Pcs) at Tehzib Lifestyle Bangladesh.",
        "geoKeywords": "Uttara Sector 12 Dhaka, Gulshan, Banani, Dhanmondi, Bangladesh"
      },
      {
        "id": "p9",
        "sku": "THZ-MK-009",
        "title": "Mommy & Me Matching Cable-Knit Set",
        "category": "Mom & Kids",
        "subcategory": "Matching Twin Sets",
        "supplierId": "SUP-04",
        "costPrice": 1778,
        "landedCost": 1991,
        "wholesalePrice": 2844,
        "price": 3950,
        "oldPrice": 4600,
        "available": 12,
        "reserved": 0,
        "sold": 29,
        "returned": 0,
        "damaged": 0,
        "reorderThreshold": 5,
        "isPublished": true,
        "statusLabel": "Active",
        "isDeal": false,
        "isNew": true,
        "isJustForYou": false,
        "specialTab": "Mom & Kids",
        "variants": [
          "Mom M + Kid 3-4Y",
          "Mom L + Kid 5-6Y",
          "Mom S + Kid 1-2Y"
        ],
        "image": "@img/mom_kids.jpg",
        "description": "Heartwarming twin capsule featuring a soft combed-cotton cable-knit cardigan for Mom and a matching knit co-ord for little ones in warm oatmeal and blush.",
        "specs": "Material: 100% Organic Combed Cotton • Includes: Adult Knit Top + Child Knit Set • Hypoallergenic & Breathable",
        "seoKeywords": "mommy & me matching cable-knit set, matching twin sets bangladesh, tehzib",
        "seoDescription": "Shop Mommy & Me Matching Cable-Knit Set at Tehzib Lifestyle Bangladesh.",
        "geoKeywords": "Uttara Sector 12 Dhaka, Gulshan, Banani, Dhanmondi, Bangladesh"
      },
      {
        "id": "p10",
        "sku": "THZ-MK-010",
        "title": "Little Explorer Quilted Mini Backpack",
        "category": "Mom & Kids",
        "subcategory": "Kids Mini Backpacks",
        "supplierId": "SUP-03",
        "costPrice": 743,
        "landedCost": 832,
        "wholesalePrice": 1188,
        "price": 1650,
        "oldPrice": null,
        "available": 19,
        "reserved": 0,
        "sold": 44,
        "returned": 0,
        "damaged": 0,
        "reorderThreshold": 5,
        "isPublished": true,
        "statusLabel": "Active",
        "isDeal": false,
        "isNew": false,
        "isJustForYou": false,
        "specialTab": "Mom & Kids",
        "variants": [
          "Blush Pink",
          "Warm Cream"
        ],
        "image": "@img/kids_backpack.jpg",
        "description": "Featherlight quilted nursery and preschool backpack with padded adjustable straps, insulated bottle pocket, and wipe-clean lining.",
        "specs": "Dimensions: 26cm x 22cm x 11cm • Weight: 280g • Water-Resistant Nylon & Cotton Quilting",
        "seoKeywords": "little explorer quilted mini backpack, kids mini backpacks bangladesh, tehzib",
        "seoDescription": "Shop Little Explorer Quilted Mini Backpack at Tehzib Lifestyle Bangladesh.",
        "geoKeywords": "Uttara Sector 12 Dhaka, Gulshan, Banani, Dhanmondi, Bangladesh"
      },
      {
        "id": "p11",
        "sku": "THZ-AC-011",
        "title": "Velvet Travel Jewellery Box",
        "category": "Accessories",
        "subcategory": "Vanity Organizers",
        "supplierId": "SUP-03",
        "costPrice": 653,
        "landedCost": 731,
        "wholesalePrice": 1044,
        "price": 1450,
        "oldPrice": null,
        "available": 6,
        "reserved": 0,
        "sold": 82,
        "returned": 0,
        "damaged": 0,
        "reorderThreshold": 5,
        "isPublished": true,
        "statusLabel": "Active",
        "isDeal": false,
        "isNew": false,
        "isJustForYou": false,
        "specialTab": "Accessories",
        "variants": [
          "Parisian Blush",
          "Cashmere Ivory"
        ],
        "image": "@img/jewelry_box.jpg",
        "description": "Plush velvet jewellery organizer case with dedicated ring rolls, earring grid, necklace hooks, and a built-in vanity mirror.",
        "specs": "Dimensions: 16cm x 11cm x 5.5cm • Exterior: Fine Velvet • Hardware: Rose-gold zipper",
        "seoKeywords": "velvet travel jewellery box, vanity organizers bangladesh, tehzib",
        "seoDescription": "Shop Velvet Travel Jewellery Box at Tehzib Lifestyle Bangladesh.",
        "geoKeywords": "Uttara Sector 12 Dhaka, Gulshan, Banani, Dhanmondi, Bangladesh"
      },
      {
        "id": "p12",
        "sku": "THZ-AC-012",
        "title": "Crystal Acrylic Vanity Organizer",
        "category": "Accessories",
        "subcategory": "Vanity Organizers",
        "supplierId": "SUP-02",
        "costPrice": 833,
        "landedCost": 933,
        "wholesalePrice": 1332,
        "price": 1850,
        "oldPrice": null,
        "available": 24,
        "reserved": 0,
        "sold": 51,
        "returned": 0,
        "damaged": 0,
        "reorderThreshold": 5,
        "isPublished": true,
        "statusLabel": "Active",
        "isDeal": false,
        "isNew": false,
        "isJustForYou": false,
        "specialTab": "Accessories",
        "variants": [
          "Large Dustproof Tier"
        ],
        "image": "@img/acrylic_org.jpg",
        "description": "Dustproof dome-top skincare and fragrance organizer with smooth-gliding drawers for lipsticks, serums, and palettes.",
        "specs": "Material: High-Clarity PMMA Acrylic • Drawers: 3 Tiered Compartments • Water-Washable",
        "seoKeywords": "crystal acrylic vanity organizer, vanity organizers bangladesh, tehzib",
        "seoDescription": "Shop Crystal Acrylic Vanity Organizer at Tehzib Lifestyle Bangladesh.",
        "geoKeywords": "Uttara Sector 12 Dhaka, Gulshan, Banani, Dhanmondi, Bangladesh"
      },
      {
        "id": "p13",
        "sku": "THZ-SH-013",
        "title": "Champagne Pearl-Strap Block Mules",
        "category": "Shoes",
        "subcategory": "Block Heel Mules",
        "supplierId": "SUP-02",
        "costPrice": 1238,
        "landedCost": 1387,
        "wholesalePrice": 1980,
        "price": 2750,
        "oldPrice": null,
        "available": 15,
        "reserved": 0,
        "sold": 38,
        "returned": 0,
        "damaged": 0,
        "reorderThreshold": 5,
        "isPublished": true,
        "statusLabel": "Active",
        "isDeal": false,
        "isNew": true,
        "isJustForYou": false,
        "specialTab": "Shoes & Fashion",
        "variants": [
          "EU 36",
          "EU 37",
          "EU 38",
          "EU 39",
          "EU 40"
        ],
        "image": "@img/heels.jpg",
        "description": "Effortless slip-on block heel mules featuring a luminous pearl-embellished strap and stable 2-inch architectural heel.",
        "specs": "Heel Height: 2.0 inches • Upper: Satin & Pearl Strap • Footbed: Double-padded micro-suede",
        "seoKeywords": "champagne pearl-strap block mules, block heel mules bangladesh, tehzib",
        "seoDescription": "Shop Champagne Pearl-Strap Block Mules at Tehzib Lifestyle Bangladesh.",
        "geoKeywords": "Uttara Sector 12 Dhaka, Gulshan, Banani, Dhanmondi, Bangladesh"
      },
      {
        "id": "p14",
        "sku": "THZ-SH-014",
        "title": "Quilted Nappa Ballet Flats",
        "category": "Shoes",
        "subcategory": "Quilted Ballet Flats",
        "supplierId": "SUP-01",
        "costPrice": 1013,
        "landedCost": 1135,
        "wholesalePrice": 1620,
        "price": 2250,
        "oldPrice": null,
        "available": 5,
        "reserved": 0,
        "sold": 67,
        "returned": 0,
        "damaged": 0,
        "reorderThreshold": 5,
        "isPublished": true,
        "statusLabel": "Active",
        "isDeal": false,
        "isNew": false,
        "isJustForYou": true,
        "specialTab": "Best Sellers",
        "variants": [
          "EU 36",
          "EU 37",
          "EU 38",
          "EU 39"
        ],
        "image": "@img/heels.jpg",
        "description": "Cloud-soft quilted everyday ballet flats with a delicate bow and flexible non-slip sole for all-day Dhaka commutes.",
        "specs": "Heel: 0.5 inch flat • Upper: Quilted Vegan Nappa • Insole: Breathable cushioned arch support",
        "seoKeywords": "quilted nappa ballet flats, quilted ballet flats bangladesh, tehzib",
        "seoDescription": "Shop Quilted Nappa Ballet Flats at Tehzib Lifestyle Bangladesh.",
        "geoKeywords": "Uttara Sector 12 Dhaka, Gulshan, Banani, Dhanmondi, Bangladesh"
      },
      {
        "id": "p15",
        "sku": "THZ-CL-015",
        "title": "Ivory Pleated Modest Luxe Kaftan",
        "category": "Clothing",
        "subcategory": "Modest Luxe Kaftans",
        "supplierId": "SUP-03",
        "costPrice": 1751,
        "landedCost": 1961,
        "wholesalePrice": 2801,
        "price": 3890,
        "oldPrice": null,
        "available": 18,
        "reserved": 0,
        "sold": 27,
        "returned": 0,
        "damaged": 0,
        "reorderThreshold": 5,
        "isPublished": true,
        "statusLabel": "Active",
        "isDeal": false,
        "isNew": false,
        "isJustForYou": false,
        "specialTab": "Best Sellers",
        "variants": [
          "Free Size (Fits S-XL)",
          "Petite Length"
        ],
        "image": "@img/clothing_set.jpg",
        "description": "Flowing micro-pleated georgette kaftan with detachable self-tie belt and champagne thread embroidery along the cuffs.",
        "specs": "Fabric: Premium Micro-Pleated Georgette • Inner Slip: Included • Length: 54 inches",
        "seoKeywords": "ivory pleated modest luxe kaftan, modest luxe kaftans bangladesh, tehzib",
        "seoDescription": "Shop Ivory Pleated Modest Luxe Kaftan at Tehzib Lifestyle Bangladesh.",
        "geoKeywords": "Uttara Sector 12 Dhaka, Gulshan, Banani, Dhanmondi, Bangladesh"
      },
      {
        "id": "p16",
        "sku": "THZ-MK-016",
        "title": "Pastel Nursery & Toy Storage Baskets (3 Pcs)",
        "category": "Mom & Kids",
        "subcategory": "Nursery Storage",
        "supplierId": "SUP-02",
        "costPrice": 518,
        "landedCost": 580,
        "wholesalePrice": 828,
        "price": 1150,
        "oldPrice": null,
        "available": 25,
        "reserved": 0,
        "sold": 58,
        "returned": 0,
        "damaged": 0,
        "reorderThreshold": 5,
        "isPublished": true,
        "statusLabel": "Active",
        "isDeal": false,
        "isNew": false,
        "isJustForYou": false,
        "specialTab": "Mom & Kids",
        "variants": [
          "Blush & Cream Trio"
        ],
        "image": "@img/bento_baskets.jpg",
        "description": "Set of three modular nursery and diaper-station organizer baskets with cut-out handles in pastel blush and cashmere.",
        "specs": "Pieces: 3 Stackable Baskets • Material: BPA-Free Food-Grade PP • Wipe-Clean Design",
        "seoKeywords": "pastel nursery & toy storage baskets (3 pcs), nursery storage bangladesh, tehzib",
        "seoDescription": "Shop Pastel Nursery & Toy Storage Baskets (3 Pcs) at Tehzib Lifestyle Bangladesh.",
        "geoKeywords": "Uttara Sector 12 Dhaka, Gulshan, Banani, Dhanmondi, Bangladesh"
      },
      {
        "id": "p17",
        "sku": "THZ-AC-017",
        "title": "Tehzib Signature Blush Keepsake Gift Box",
        "category": "Accessories",
        "subcategory": "Signature Gift Boxes",
        "supplierId": "SUP-01",
        "costPrice": 968,
        "landedCost": 1084,
        "wholesalePrice": 1548,
        "price": 2150,
        "oldPrice": null,
        "available": 20,
        "reserved": 0,
        "sold": 45,
        "returned": 0,
        "damaged": 0,
        "reorderThreshold": 5,
        "isPublished": true,
        "statusLabel": "Active",
        "isDeal": false,
        "isNew": false,
        "isJustForYou": false,
        "specialTab": "Best Sellers",
        "variants": [
          "Signature Gift Set"
        ],
        "image": "@img/giftbox.jpg",
        "description": "Magnetic keepsake gift hamper containing a ceramic minimalist vase, pearl hair claw, scented soy candle, and handwritten card.",
        "specs": "Box Type: Rigid Magnetic Ribbon Box • Includes: 4 Curated Lifestyle Pieces + Custom Card",
        "seoKeywords": "tehzib signature blush keepsake gift box, signature gift boxes bangladesh, tehzib",
        "seoDescription": "Shop Tehzib Signature Blush Keepsake Gift Box at Tehzib Lifestyle Bangladesh.",
        "geoKeywords": "Uttara Sector 12 Dhaka, Gulshan, Banani, Dhanmondi, Bangladesh"
      },
      {
        "id": "p18",
        "sku": "THZ-FA-007",
        "title": "Champagne Crystal Box Clutch (Awaiting Shipment)",
        "category": "Fashion",
        "subcategory": "Evening Clutches",
        "supplierId": "SUP-02",
        "costPrice": 1480,
        "landedCost": 1600,
        "wholesalePrice": 2400,
        "price": 3390,
        "oldPrice": 3990,
        "available": 0,
        "reserved": 0,
        "sold": 0,
        "returned": 0,
        "damaged": 0,
        "reorderThreshold": 5,
        "isPublished": false,
        "statusLabel": "Draft",
        "isDeal": true,
        "isNew": true,
        "isJustForYou": true,
        "specialTab": "Shoes & Fashion",
        "variants": [
          "Champagne Gold",
          "Rose Quartz"
        ],
        "image": "@img/champagne_bag.jpg",
        "description": "Hand-set crystal frame evening clutch in brushed champagne satin with detachable serpentine chain.",
        "specs": "Frame: Brushed Brass • Exterior: Duchesse Satin • Dimensions: 20cm x 12cm x 5cm",
        "seoKeywords": "bridal clutch bangladesh, champagne evening bag dhaka, tehzib clutch",
        "seoDescription": "Champagne Crystal Box Clutch with detachable chain for weddings and festive galas.",
        "geoKeywords": "Uttara Sector 12 Dhaka, Gulshan 2, Banani Dhaka"
      },
      {
        "id": "p19",
        "sku": "THZ-AC-008",
        "title": "Freshwater Pearl & Gold Layered Choker (Awaiting Shipment)",
        "category": "Accessories",
        "subcategory": "Pearl & Gold Jewelry",
        "supplierId": "SUP-01",
        "costPrice": 790,
        "landedCost": 890,
        "wholesalePrice": 1350,
        "price": 1890,
        "oldPrice": 2300,
        "available": 0,
        "reserved": 0,
        "sold": 0,
        "returned": 0,
        "damaged": 0,
        "reorderThreshold": 5,
        "isPublished": false,
        "statusLabel": "Draft",
        "isDeal": false,
        "isNew": true,
        "isJustForYou": true,
        "specialTab": "Accessories",
        "variants": [
          "Adjustable 16-18 inch"
        ],
        "image": "@img/necklace.jpg",
        "description": "Double-strand baroque freshwater pearl choker with 18K gold-vermeil toggle clasp.",
        "specs": "Pearls: Cultured Freshwater Pearls • Clasp: 18K Gold Plated Brass",
        "seoKeywords": "pearl necklace bangladesh, layered choker dhaka, tehzib jewelry",
        "seoDescription": "Hand-strung Freshwater Pearl & Gold Layered Choker by Tehzib.",
        "geoKeywords": "Uttara Sector 12 Dhaka, Dhanmondi, Banani, Sylhet"
      }
    ],
    "shipments": [
      {
        "id": "PO-2027-100",
        "date": "2027-02-12",
        "supplierId": "SUP-01",
        "productId": "p_claw",
        "sku": "TEH-ACC-CLP-PNK",
        "productTitle": "Signature Parisian Pink Claw Clip",
        "moq": 5,
        "orderedQty": 5,
        "receivedQty": 5,
        "damagedQty": 0,
        "costPrice": 180,
        "landedCost": 210,
        "wholesalePrice": 280,
        "retailPrice": 450,
        "warehouse": "Uttara Sector 12 Hub • Bin A1",
        "status": "RECEIVED"
      },
      {
        "id": "PO-2027-101",
        "date": "2027-02-22",
        "supplierId": "SUP-02",
        "productId": "p18",
        "sku": "THZ-FA-007",
        "productTitle": "Champagne Crystal Box Clutch (Awaiting Shipment)",
        "moq": 20,
        "orderedQty": 30,
        "receivedQty": 0,
        "damagedQty": 0,
        "costPrice": 1480,
        "landedCost": 1600,
        "wholesalePrice": 2400,
        "retailPrice": 3390,
        "warehouse": "Uttara Sector 12 Hub • Rack B2",
        "status": "IN_TRANSIT"
      },
      {
        "id": "PO-2027-102",
        "date": "2027-02-23",
        "supplierId": "SUP-01",
        "productId": "p19",
        "sku": "THZ-AC-008",
        "productTitle": "Freshwater Pearl & Gold Layered Choker (Awaiting Shipment)",
        "moq": 15,
        "orderedQty": 40,
        "receivedQty": 0,
        "damagedQty": 0,
        "costPrice": 790,
        "landedCost": 890,
        "wholesalePrice": 1350,
        "retailPrice": 1890,
        "warehouse": "Uttara Sector 12 Hub • Vault A1",
        "status": "PENDING_GRN"
      }
    ],
    "preorders": [
      {
        "id": "PRE-2027-01",
        "sku": "THZ-FA-007",
        "productTitle": "Champagne Crystal Box Clutch (Eid Atelier Drop)",
        "customerName": "Tasnima Ahmed",
        "customerPhone": "+880 1711-334455",
        "supplierName": "Aurelia Luxury Bags & Hardware Atelier",
        "leadTime": "7 Days (Local Atelier Batch)",
        "expectedArrival": "2027-03-04",
        "orderValue": 3390,
        "depositHeld": 1000,
        "status": "Deposit Collected • In Production"
      },
      {
        "id": "PRE-2027-02",
        "sku": "THZ-AC-008",
        "productTitle": "Freshwater Pearl & Gold Layered Choker",
        "customerName": "Maliha Rahman",
        "customerPhone": "+880 1819-778899",
        "supplierName": "Chawkbazar & Uttara Accessories Hub",
        "leadTime": "4 Days",
        "expectedArrival": "2027-03-01",
        "orderValue": 1890,
        "depositHeld": 500,
        "status": "Arriving at Uttara Hub Tomorrow"
      }
    ],
    "orders": [
      {
        "id": "ORD-2027-901",
        "date": "2027-02-25 11:20",
        "customerName": "Tasnima Ahmed",
        "customerPhone": "+880 1711-334455",
        "customerAddress": "House 18, Road 7, Sector 12, Uttara, Dhaka",
        "channel": "Storefront",
        "campaignSource": "Facebook Page Posts",
        "tier": "RETAIL",
        "courier": "Steadfast Courier",
        "trackingNumber": "SF-BD-882910",
        "dispatchDate": "2027-02-25",
        "deliveryAttempts": 1,
        "deliveryOutcome": "Delivered on first attempt; COD collected by rider",
        "deliveryMethod": "Inside Dhaka Standard (৳ 70)",
        "deliveryFee": 70,
        "discount": 0,
        "paymentMethod": "Cash on Delivery (COD)",
        "paymentStatus": "Paid",
        "codSettled": true,
        "packagingCost": 35,
        "courierActualCost": 60,
        "codFee": 36,
        "items": [
          {
            "productId": "p_claw",
            "sku": "TEH-ACC-CLP-PNK",
            "title": "Signature Parisian Pink Claw Clip",
            "variant": "Blush Pink",
            "qty": 2,
            "unitPrice": 450,
            "unitCost": 210
          },
          {
            "productId": "p1",
            "sku": "THZ-CL-001",
            "title": "Blush Satin Wrap Blouse",
            "variant": "M",
            "qty": 1,
            "unitPrice": 2650,
            "unitCost": 1280
          }
        ],
        "subtotal": 3550,
        "totalRevenue": 3620,
        "totalCogs": 1700,
        "status": "Delivered"
      },
      {
        "id": "ORD-2027-902",
        "date": "2027-02-26 14:40",
        "customerName": "Farzana Karim",
        "customerPhone": "+880 1911-667788",
        "customerAddress": "Road 11, Banani, Dhaka",
        "channel": "Instagram",
        "campaignSource": "Paid Meta / Instagram Ads",
        "tier": "RETAIL",
        "courier": "Pathao Courier",
        "trackingNumber": "PTH-992041",
        "dispatchDate": "2027-02-26",
        "deliveryAttempts": 1,
        "deliveryOutcome": "Delivered to concierge desk; COD collected by Pathao, awaiting bank settlement",
        "deliveryMethod": "Inside Dhaka Standard (৳ 70)",
        "deliveryFee": 70,
        "discount": 150,
        "paymentMethod": "Cash on Delivery (COD)",
        "paymentStatus": "Collected",
        "codSettled": false,
        "packagingCost": 45,
        "courierActualCost": 65,
        "codFee": 28,
        "items": [
          {
            "productId": "p4",
            "sku": "THZ-FA-004-CRM",
            "title": "Quilted Cream Crossbody Bag",
            "variant": "Alabaster Cream",
            "qty": 1,
            "unitPrice": 2850,
            "unitCost": 1350
          }
        ],
        "subtotal": 2850,
        "totalRevenue": 2770,
        "totalCogs": 1350,
        "status": "Delivered"
      },
      {
        "id": "ORD-2027-903",
        "date": "2027-02-27 10:15",
        "customerName": "Meherin Chowdhury",
        "customerPhone": "+880 1819-445566",
        "customerAddress": "House 42, Road 27, Dhanmondi, Dhaka",
        "channel": "Facebook",
        "campaignSource": "Facebook Community Groups",
        "tier": "RETAIL",
        "courier": "Steadfast Courier",
        "trackingNumber": "SF-BD-884102",
        "dispatchDate": "2027-02-27",
        "deliveryAttempts": 1,
        "deliveryOutcome": "Out for delivery with Steadfast Dhanmondi hub",
        "deliveryMethod": "Inside Dhaka Standard (৳ 70)",
        "deliveryFee": 70,
        "discount": 0,
        "paymentMethod": "Cash on Delivery (COD)",
        "paymentStatus": "Pending",
        "codSettled": false,
        "packagingCost": 40,
        "courierActualCost": 60,
        "codFee": 33,
        "items": [
          {
            "productId": "p6",
            "sku": "THZ-SH-006",
            "title": "Rose-Gold Mesh Minimalist Watch",
            "variant": "28mm Petite",
            "qty": 1,
            "unitPrice": 3250,
            "unitCost": 1550
          }
        ],
        "subtotal": 3250,
        "totalRevenue": 3320,
        "totalCogs": 1550,
        "status": "Dispatched"
      },
      {
        "id": "ORD-2027-904",
        "date": "2027-02-28 09:30",
        "customerName": "Sadia Afrin",
        "customerPhone": "+880 1715-990011",
        "customerAddress": "Sector 7, Road 9, Uttara, Dhaka",
        "channel": "Storefront",
        "campaignSource": "Homepage Offer Bar",
        "tier": "RETAIL",
        "courier": "Unassigned (Awaiting Packing)",
        "trackingNumber": "PENDING",
        "dispatchDate": "—",
        "deliveryAttempts": 0,
        "deliveryOutcome": "New customer order — stock reserved automatically",
        "deliveryMethod": "Inside Dhaka Standard (৳ 70)",
        "deliveryFee": 70,
        "discount": 0,
        "paymentMethod": "bKash Merchant",
        "paymentStatus": "Paid",
        "codSettled": true,
        "packagingCost": 40,
        "courierActualCost": 60,
        "codFee": 0,
        "items": [
          {
            "productId": "p3",
            "sku": "THZ-SH-003-38",
            "title": "Blush Slingback Kitten Heels",
            "variant": "EU 38",
            "qty": 1,
            "unitPrice": 2950,
            "unitCost": 1420
          }
        ],
        "subtotal": 2950,
        "totalRevenue": 3020,
        "totalCogs": 1420,
        "status": "New"
      }
    ],
    "returnsLog": [
      {
        "id": "RET-2027-01",
        "orderId": "ORD-2027-894",
        "customerName": "Nabila Haque",
        "items": "1x Blush Slingback Kitten Heels (EU 37 → Exchange for EU 38)",
        "status": "Exchange Dispatched",
        "actionNote": "Returned pair inspected clean; restocked EU 37 to Available (+1)",
        "refundAmount": 0
      }
    ],
    "crmCustomers": [
      {
        "id": "CUST-101",
        "name": "Tasnima Ahmed",
        "phone": "+880 1711-334455",
        "email": "tasnima.ahmed@example.com",
        "tier": "VIP",
        "rating": 4.9,
        "points": 1450,
        "ordersCount": 5,
        "completedOrders": 5,
        "spend": 18450,
        "returnsCount": 0,
        "failedCount": 0,
        "address": "House 18, Road 7, Sector 12, Uttara, Dhaka",
        "notes": "Loves blush hair clips & satin wraps; always accepts COD on 1st attempt.",
        "consent": {
          "sms": true,
          "whatsapp": true,
          "email": true
        },
        "referralCode": "TASNIMA-VIP10"
      },
      {
        "id": "CUST-102",
        "name": "Farzana Karim",
        "phone": "+880 1911-667788",
        "email": "farzana.k@example.com",
        "tier": "Repeat",
        "rating": 4.8,
        "points": 820,
        "ordersCount": 3,
        "completedOrders": 3,
        "spend": 9120,
        "returnsCount": 0,
        "failedCount": 0,
        "address": "Road 11, Banani, Dhaka",
        "notes": "Prefers afternoon delivery before 4 PM at office reception.",
        "consent": {
          "sms": true,
          "whatsapp": true,
          "email": false
        },
        "referralCode": "FARZANA-THZ"
      },
      {
        "id": "CUST-103",
        "name": "Meherin Chowdhury",
        "phone": "+880 1819-445566",
        "email": "meherin.c@example.com",
        "tier": "Repeat",
        "rating": 5,
        "points": 640,
        "ordersCount": 2,
        "completedOrders": 1,
        "spend": 3450,
        "returnsCount": 0,
        "failedCount": 0,
        "address": "House 42, Road 27, Dhanmondi, Dhaka",
        "notes": "Found Tehzib via Facebook Group review post.",
        "consent": {
          "sms": true,
          "whatsapp": true,
          "email": true
        },
        "referralCode": "MEHERIN-THZ"
      },
      {
        "id": "CUST-104",
        "name": "Sadia Afrin",
        "phone": "+880 1715-990011",
        "email": "sadia.afrin@example.com",
        "tier": "New",
        "rating": 5,
        "points": 250,
        "ordersCount": 1,
        "completedOrders": 0,
        "spend": 0,
        "returnsCount": 0,
        "failedCount": 0,
        "address": "Sector 7, Road 9, Uttara, Dhaka",
        "notes": "First-time storefront buyer; paid via bKash.",
        "consent": {
          "sms": true,
          "whatsapp": false,
          "email": true
        },
        "referralCode": "SADIA-NEW"
      }
    ],
    "reviews": [
      {
        "id": "REV-01",
        "date": "2027-02-26",
        "customerName": "Tasnima Ahmed",
        "sku": "TEH-ACC-CLP-PNK",
        "productTitle": "Signature Parisian Pink Claw Clip",
        "rating": 5,
        "comment": "The spring tension on this pink claw clip is amazing—holds thick hair all day and the pearl finish looks so luxe!",
        "status": "Approved"
      },
      {
        "id": "REV-02",
        "date": "2027-02-27",
        "customerName": "Farzana Karim",
        "sku": "THZ-FA-004",
        "productTitle": "Quilted Cream Crossbody Bag",
        "rating": 5,
        "comment": "Came in Tehzib's blush gift box. The quilting and champagne chain look exactly like the photos.",
        "status": "Approved"
      },
      {
        "id": "REV-03",
        "date": "2027-02-28",
        "customerName": "Anika Tabassum",
        "sku": "THZ-SH-003",
        "productTitle": "Blush Slingback Kitten Heels",
        "rating": 5,
        "comment": "Wore these for 6 hours at a wedding reception in Gulshan—zero foot pain thanks to the cushioned insole!",
        "status": "Pending Approval"
      }
    ],
    "coupons": [
      {
        "code": "TEHZIB10",
        "discountPct": 10,
        "minOrder": 1200,
        "startDate": "2027-01-01",
        "endDate": "2027-12-31",
        "usageLimit": 500,
        "usedCount": 42,
        "source": "Homepage Offer Bar",
        "attributedOrders": 18,
        "attributedRevenue": 54200,
        "active": true
      },
      {
        "code": "BLUSH15",
        "discountPct": 15,
        "minOrder": 2500,
        "startDate": "2027-02-01",
        "endDate": "2027-05-30",
        "usageLimit": 200,
        "usedCount": 19,
        "source": "Paid Meta / Instagram Ads",
        "attributedOrders": 14,
        "attributedRevenue": 46800,
        "active": true
      },
      {
        "code": "FBGROUP12",
        "discountPct": 12,
        "minOrder": 1000,
        "startDate": "2027-02-10",
        "endDate": "2027-04-15",
        "usageLimit": 100,
        "usedCount": 11,
        "source": "Facebook Community Groups",
        "attributedOrders": 11,
        "attributedRevenue": 28900,
        "active": true
      }
    ],
    "expenseCategories": [
      "Packaging & Unboxing",
      "Advertising & Boosts",
      "Transport & Local Sourcing",
      "Courier & Delivery Charges",
      "Studio Rent & Utilities",
      "Other E-Commerce Opex"
    ],
    "supplierCategories": [
      "Accessories & Hair Clips",
      "Fashion Bags & Clutches",
      "Clothing & Fabrics",
      "Footwear & Leather",
      "Mom & Kids"
    ],
    "paymentTermsList": [
      "50% Advance • 50% on Delivery",
      "Cash on Delivery (GRN)",
      "Net 15 Days Credit",
      "100% Advance Paid"
    ],
    "staffRoles": [
      "Founder & Store Owner (Full Access)",
      "Finance & Accounts Controller",
      "Procurement & Supplier Manager",
      "Inventory & Warehouse Lead",
      "Order Fulfillment & Courier Ops",
      "Marketing, Merchandising & CMS"
    ],
    "staffMembers": [
      {
        "id": "STF-101",
        "name": "Tahmid Alvi",
        "phone": "+880 1711-889900",
        "email": "admin@tehzib.com",
        "role": "Founder & Store Owner (Full Access)",
        "dept": "Executive & Strategy",
        "status": "Active",
        "accesses": [
          "Dashboard & BI",
          "Product & Catalogue",
          "Inventory & Stock",
          "Suppliers & PO",
          "Orders & POS",
          "Customer CRM",
          "Expenses & Payments",
          "Storefront CMS",
          "Working Team Admin"
        ]
      },
      {
        "id": "STF-102",
        "name": "Farhan Islam",
        "phone": "+880 1819-223311",
        "email": "finance@tehzib.com",
        "role": "Finance & Accounts Controller",
        "dept": "Finance & Accounts",
        "status": "Active",
        "accesses": [
          "Dashboard & BI",
          "Suppliers & PO",
          "Expenses & Payments",
          "Working Team Admin"
        ]
      },
      {
        "id": "STF-103",
        "name": "Nadia Sultana",
        "phone": "+880 1912-445588",
        "email": "procurement@tehzib.com",
        "role": "Procurement & Supplier Manager",
        "dept": "Sourcing & Procurement",
        "status": "Active",
        "accesses": [
          "Product & Catalogue",
          "Inventory & Stock",
          "Suppliers & PO",
          "Expenses & Payments"
        ]
      },
      {
        "id": "STF-104",
        "name": "Tanvir Hossain",
        "phone": "+880 1611-778844",
        "email": "ops@tehzib.com",
        "role": "Order Fulfillment & Courier Ops",
        "dept": "Uttara Hub Dispatch",
        "status": "Active",
        "accesses": [
          "Inventory & Stock",
          "Orders & POS",
          "Customer CRM"
        ]
      },
      {
        "id": "STF-105",
        "name": "Lamia Chowdhury",
        "phone": "+880 1715-664422",
        "email": "cms@tehzib.com",
        "role": "Marketing, Merchandising & CMS",
        "dept": "Brand & Growth",
        "status": "Active",
        "accesses": [
          "Dashboard & BI",
          "Product & Catalogue",
          "Customer CRM",
          "Storefront CMS"
        ]
      }
    ],
    "expenses": [
      {
        "id": "EXP-301",
        "date": "2027-02-08",
        "title": "Custom Blush Foil Gift Boxes, Tissue & Satin Ribbon (300 sets)",
        "details": "300 matte blush magnetic gift boxes with gold foil Tehzib logo + satin ribbons from Uttara Packaging Press (Inv #UP-882)",
        "category": "Packaging & Unboxing",
        "account": "acc_bkash",
        "responsibleStaffId": "STF-103",
        "responsibleStaffName": "Nadia Sultana",
        "responsibleStaffRole": "Procurement & Supplier Manager",
        "amount": 4200
      },
      {
        "id": "EXP-302",
        "date": "2027-02-15",
        "title": "Meta & Instagram Sponsored Carousel Campaign (Claw Clips & Bags)",
        "details": "7-day conversion ad boost targeting Dhaka, Gulshan, Banani, Uttara & Dhanmondi shoppers for Trendsetters collection",
        "category": "Advertising & Boosts",
        "account": "acc_bank",
        "responsibleStaffId": "STF-105",
        "responsibleStaffName": "Lamia Chowdhury",
        "responsibleStaffRole": "Marketing, Merchandising & CMS",
        "amount": 5500
      },
      {
        "id": "EXP-303",
        "date": "2027-02-19",
        "title": "Local Van & Rickshaw Transport from Chawkbazar / Banani Suppliers",
        "details": "Covered van pickup for 3 cartons of claw clips and quilted crossbody bags to Uttara Sector 12 Hub",
        "category": "Transport & Local Sourcing",
        "account": "acc_cash",
        "responsibleStaffId": "STF-104",
        "responsibleStaffName": "Tanvir Hossain",
        "responsibleStaffRole": "Order Fulfillment & Courier Ops",
        "amount": 1150
      },
      {
        "id": "EXP-304",
        "date": "2027-02-24",
        "title": "Bubble Wrap, Poly Mailers & Thermal Barcode Labels",
        "details": "5 rolls heavy-duty bubble wrap and 1,000 waterproof courier flyers for Steadfast & Pathao dispatch",
        "category": "Packaging & Unboxing",
        "account": "acc_cash",
        "responsibleStaffId": "STF-104",
        "responsibleStaffName": "Tanvir Hossain",
        "responsibleStaffRole": "Order Fulfillment & Courier Ops",
        "amount": 950
      }
    ],
    "paymentsLog": [
      {
        "id": "PAY-501",
        "date": "2027-02-12",
        "supplierId": "SUP-01",
        "supplierName": "Chawkbazar & Uttara Accessories Hub",
        "poId": "PO-2027-100",
        "paymentType": "Advance Payment",
        "amount": 45000,
        "accountKey": "acc_bkash",
        "accountName": "bKash Merchant Wallet",
        "advanceByStaff": "Nadia Sultana",
        "dueByStaff": "Farhan Islam",
        "details": "Initial 50% advance for hair clips & pearl accessories batch"
      },
      {
        "id": "PAY-502",
        "date": "2027-02-15",
        "supplierId": "SUP-01",
        "supplierName": "Chawkbazar & Uttara Accessories Hub",
        "poId": "PO-2027-100",
        "paymentType": "Due Payment",
        "amount": 47100,
        "accountKey": "acc_cash",
        "accountName": "Cash in Hand (Uttara Hub)",
        "advanceByStaff": "Nadia Sultana",
        "dueByStaff": "Farhan Islam",
        "details": "Full due settled upon GRN inspection at Uttara Sector 12 Hub"
      },
      {
        "id": "PAY-503",
        "date": "2027-02-20",
        "supplierId": "SUP-02",
        "supplierName": "Aurelia Luxury Bags & Hardware Atelier",
        "poId": "PO-2027-101",
        "paymentType": "Advance Payment",
        "amount": 118000,
        "accountKey": "acc_bank",
        "accountName": "City Bank Corporate A/C",
        "advanceByStaff": "Tahmid Alvi",
        "dueByStaff": "Farhan Islam",
        "details": "50% production advance via City Bank corporate transfer for quilted bags & clutches"
      },
      {
        "id": "PAY-504",
        "date": "2027-02-22",
        "supplierId": "SUP-03",
        "supplierName": "Dhaka Mulberry Silk & Apparel Studio",
        "poId": "PO-2027-098",
        "paymentType": "Due Payment",
        "amount": 65000,
        "accountKey": "acc_bank",
        "accountName": "City Bank Corporate A/C",
        "advanceByStaff": "Nadia Sultana",
        "dueByStaff": "Farhan Islam",
        "details": "Partial due installment paid for mulberry satin blouse batch"
      },
      {
        "id": "PAY-505",
        "date": "2027-02-24",
        "supplierId": "SUP-04",
        "supplierName": "Tehzib Signature Footwear & Kids Craft Studio",
        "poId": "PO-2027-099",
        "paymentType": "Advance Payment",
        "amount": 85000,
        "accountKey": "acc_nagad",
        "accountName": "Nagad Merchant Wallet",
        "advanceByStaff": "Nadia Sultana",
        "dueByStaff": "Tahmid Alvi",
        "details": "Advance paid for slingback kitten heels & Mom-Kids cotton capsule"
      }
    ],
    "accounts": {
      "acc_bank": {
        "name": "City Bank Corporate A/C",
        "balance": 184500
      },
      "acc_cash": {
        "name": "Cash in Hand (Uttara Hub)",
        "balance": 42800
      },
      "acc_bkash": {
        "name": "bKash Merchant Wallet",
        "balance": 68400
      },
      "acc_nagad": {
        "name": "Nagad Merchant Wallet",
        "balance": 29500
      }
    },
    "emsNotifications": [
      {
        "id": "EN-1",
        "time": "10 mins ago",
        "type": "Order Confirmation",
        "msg": "Order ORD-2027-904 placed by Sadia Afrin (৳ 3,020 via bKash) — 1x Blush Slingback Kitten Heels reserved."
      },
      {
        "id": "EN-2",
        "time": "25 mins ago",
        "type": "Low-Stock Alert",
        "msg": "SKU TEH-ACC-CLP-PNK (Signature Parisian Pink Claw Clip) has 3 units available (Reorder Threshold: 3)."
      },
      {
        "id": "EN-3",
        "time": "2 hours ago",
        "type": "Dispatch Update",
        "msg": "Order ORD-2027-903 handed over to Steadfast Courier (Tracking: SF-BD-884102)."
      },
      {
        "id": "EN-4",
        "time": "Yesterday",
        "type": "COD Settlement Alert",
        "msg": "Order ORD-2027-902 delivered by Pathao Courier — ৳ 2,770 COD collected by rider, pending bank settlement."
      }
    ],
    "inventoryMovements": [
      {
        "time": "2027-02-12 10:00",
        "productId": "p_claw",
        "productTitle": "Signature Parisian Pink Claw Clip",
        "sku": "TEH-ACC-CLP-PNK",
        "variant": "Blush Pink",
        "type": "PO Receipt (+5 Available)",
        "note": "PO-2027-100 received from Chawkbazar & Uttara Accessories Hub (Purchase ৳180, Landed ৳210)"
      },
      {
        "time": "2027-02-25 11:20",
        "productId": "p_claw",
        "productTitle": "Signature Parisian Pink Claw Clip",
        "sku": "TEH-ACC-CLP-PNK",
        "variant": "Blush Pink",
        "type": "Order Sold (-2 Available → 3 Left)",
        "note": "Order ORD-2027-901 delivered to Tasnima Ahmed (5 initial - 2 sold = 3 available)"
      },
      {
        "time": "2027-02-27 10:15",
        "productId": "p6",
        "productTitle": "Rose-Gold Mesh Minimalist Watch",
        "sku": "THZ-AC-005",
        "variant": "28mm Petite",
        "type": "Order Reserved (-1 Avail, +1 Reserved)",
        "note": "Order ORD-2027-903 dispatched via Steadfast Courier"
      },
      {
        "time": "2027-02-28 09:30",
        "productId": "p3",
        "productTitle": "Blush Slingback Kitten Heels",
        "sku": "THZ-SH-003",
        "variant": "EU 38",
        "type": "Order Reserved (-1 Avail, +1 Reserved)",
        "note": "Order ORD-2027-904 placed by Sadia Afrin"
      }
    ]
  }
};

main()
  .catch((e) => {
    console.error("Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

