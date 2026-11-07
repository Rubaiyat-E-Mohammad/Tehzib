# TEHZIB — Live Storefront & Operations Management System (OMS)

Production-ready full-stack web application for **TEHZIB**, a contemporary Bangladeshi fashion, footwear, accessories, clothing, and mom & kids e-commerce brand headquartered in **Uttara Sector 12, Dhaka, Bangladesh**.

Built with a single **Next.js (App Router, TypeScript)** application, **PostgreSQL + Prisma ORM**, **TanStack Query + Zustand**, **HTTP-only JWT authentication + RBAC**, and an **S3 / Cloudflare R2 + Local Upload Storage Adapter**.

---

## 1. Architecture & Tech Stack

- **Framework**: Next.js 16 (App Router) with React 19 & TypeScript
- **Database**: PostgreSQL 16 + Prisma ORM (`prisma/schema.prisma` with 31 relational models and ACID `prisma.$transaction()` workflows)
- **State & Real-Time Synchronization**:
  - **Server Hydration**: Dynamic Server Components (`/` and `/admin`) hydrate live PostgreSQL data on initial render via `buildHydratedPlatformState()`.
  - **Client Cache & Mutations**: TanStack Query (`/api/platform`, `/api/products`, `/api/inventory`, `/api/purchase-orders`, `/api/orders`, `/api/finance`, `/api/auth/*`, `/api/upload`, `/api/newsletter`) synchronizes every Storefront and Admin ERP action back to PostgreSQL in real time.
  - **Local UI Persistence**: Zustand (`src/store/useStorefrontStore.ts`) persists theme (`light` / `dark`), shopping bag (`cart`), `wishlist`, and workspace mode (`storefront` / `admin`).
- **Authentication & RBAC**:
  - Stateless `jose` HS256 HTTP-only cookie sessions (`tz_admin` for ERP staff, `tz_customer` for Storefront customers) + `bcryptjs` password verification.
  - Granular Role-Based Access Control (`src/lib/rbac.ts`) across all 9 ERP modules (`dashboard`, `products`, `inventory`, `suppliers`, `orders`, `customers`, `cms`, `finance`, `settings`).
- **Media Storage**:
  - Configurable via `STORAGE_DRIVER` in `.env`: writes to `/public/uploads` in local development (`STORAGE_DRIVER="local"`) and seamlessly switches to **Cloudflare R2 / AWS S3** (`STORAGE_DRIVER="s3"`) in production.

---

## 2. Quick Start Setup

### Prerequisites
- **Node.js** 20+
- **PostgreSQL** 16+ running locally on port `5432`

### Step 1: Configure Environment Variables
Copy `.env.example` to `.env` and verify your PostgreSQL connection string:
```bash
cp .env.example .env
```

Default `.env` configuration:
```env
DATABASE_URL="postgresql://rubaiyatemohammad@127.0.0.1:5432/tehzib?schema=public"
JWT_SECRET="tehzib-uttara-dhaka-super-secret-jwt-key-2027-enterprise-erp"
STORAGE_DRIVER="local"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Run Database Migrations & Seed Prototype Data
```bash
# Run Prisma migrations and seed all prototype data in one command:
npm run db:setup

# Or run individually:
npm run db:migrate
npm run db:seed
```

### Step 4: Start the Development Server
```bash
npm run dev
```

- **Customer Storefront**: [http://localhost:3000](http://localhost:3000)
- **Backend Admin ERP**: [http://localhost:3000/adminpage](http://localhost:3000/adminpage)

---

## 3. Default Credentials

### Admin ERP Portal (`/adminpage`)
| Role | Email / Username | Password | Access Scope |
| :--- | :--- | :--- | :--- |
| **Super Admin** | `admin@tehzib.com` (or `admin`) | `Tehzib@2027` | All 9 ERP Modules + System Settings |
| **Operations Manager** | `rafiq@tehzib.com` | `Tehzib@2027` | Dashboard, Products, Inventory, Suppliers, Orders, Customers |
| **Inventory Executive** | `tasnim@tehzib.com` | `Tehzib@2027` | Dashboard, Products, Inventory, Suppliers |
| **Customer Support** | `nabila@tehzib.com` | `Tehzib@2027` | Dashboard, Orders, Customers |
| **Finance Officer** | `kamrul@tehzib.com` | `Tehzib@2027` | Dashboard, Orders, Finance |

### Customer Storefront (`/`)
| Customer | Email / Phone | Password | Loyalty Tier |
| :--- | :--- | :--- | :--- |
| **Nusrat Jahan** | `nusrat.jahan@gmail.com` / `+880 1711-234567` | `Tehzib123` | Gold (1,280 pts) |

---

## 4. Key Architecture Directories

```text
├── prisma/
│   ├── schema.prisma                # 31 PostgreSQL models for Storefront + 9-Module ERP
│   ├── migrations/                  # SQL migration history
│   ├── seed.ts                      # Idempotent PostgreSQL database seed script
│   └── seed-data/prototype-seed.json
├── public/
│   ├── seed/                        # Extracted product, hero & brand logo assets
│   ├── uploads/                     # Local media upload target (when STORAGE_DRIVER="local")
│   └── tehzib-runtime.js            # Interactive Storefront & 9-Module ERP client runtime
├── src/
│   ├── app/
│   │   ├── page.tsx                 # SSR Customer Storefront entry point
│   │   ├── admin/page.tsx           # SSR Backend Admin ERP entry point
│   │   └── api/
│   │       ├── platform/route.ts    # Full PostgreSQL state hydration (GET) & ACID sync (PUT)
│   │       ├── auth/admin/route.ts  # Staff JWT login, session check, logout & AuditLog
│   │       ├── auth/customer/route.ts # Customer JWT login, signup, profile update & logout
│   │       ├── products/route.ts    # Product & Variant Master Catalogue CRUD
│   │       ├── inventory/route.ts   # ACID Stock Adjustment & Movement Log API
│   │       ├── purchase-orders/route.ts # 3-Step Supplier -> Draft PO -> GRN Receiving -> Auto-Publish
│   │       ├── orders/route.ts      # Storefront / POS / Social Order creation + stock reservation
│   │       ├── finance/route.ts     # COD Reconciliation & Operating Expense ledger API
│   │       ├── upload/route.ts      # Multipart & Base64 image upload endpoint (Local / S3 / R2)
│   │       └── newsletter/route.ts  # Storefront footer newsletter subscription API
│   ├── components/
│   │   └── TehzibPlatformClient.tsx # React + TanStack Query + Zustand bridge
│   ├── lib/
│   │   ├── db.ts                    # PrismaClient singleton
│   │   ├── erp-sync.ts              # PostgreSQL <-> Platform state hydration & ACID persistence
│   │   ├── auth.ts                  # JWT session signing/verification & RBAC guard
│   │   ├── rbac.ts                  # 9-Module ERP permission matrix
│   │   ├── storage.ts               # S3 / Cloudflare R2 + Local disk storage adapter
│   │   └── format.ts                # BDT formatting, slugify & stock helpers
│   ├── store/
│   │   └── useStorefrontStore.ts    # Zustand persisted store (theme, cart, wishlist, appMode)
│   └── styles/
│       └── prototype.css            # Dual-theme design system tokens & responsive styles
```
