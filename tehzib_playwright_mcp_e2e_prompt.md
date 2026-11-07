# Tehzib Full-Stack E2E Testing & Auto-Remediation Master Prompt (Playwright MCP + Antigravity CLI)

This document has been triple-audited against every screen, modal, form ID, `onclick` / `onchange` handler, CSS rule, and business workflow in the Tehzib platform. Copy and paste the master prompt block below directly into **Antigravity CLI** with **Playwright MCP** connected.

## Summary of 3-Pass Audit Coverage (185 Test Cases Across 18 Suites)

| Suite | Focus Area | Test Case Range | Count |
| :--- | :--- | :--- | :--- |
| **Suite 1** | Boot, Console/Network Zero-Error Gate, Top Mode Bar & Dual Theme Palettes | `TC-001` – `TC-010` | 10 |
| **Suite 2** | Storefront Header, Side Spacing, Sticky Scroll Logo Integrity & Category Subnav | `TC-011` – `TC-022` | 12 |
| **Suite 3** | Full-Width Hero Carousel (Desktop Controls vs. Mobile Compact View & Hidden Arrows) | `TC-023` – `TC-031` | 9 |
| **Suite 4** | Homepage Curated Sections (`Trendsetters`, `New Arrivals`, `Just For You`, Capsules & Newsletter) | `TC-032` – `TC-042` | 11 |
| **Suite 5** | Catalog Filtering, Search, Sorting, 2-Part Breadcrumbs & Multi-Column Top Alignment | `TC-043` – `TC-054` | 12 |
| **Suite 6** | Product Detail Page (PDP), Gallery/Zoom, Variants, Stepper, Tabs & SEO/GEO Metadata | `TC-055` – `TC-064` | 10 |
| **Suite 7** | Alerts Dropdown, Account Dropdown, Auth Modal (Login/Sign Up) & Account Dashboard Alignment | `TC-065` – `TC-076` | 12 |
| **Suite 8** | Shopping Cart, Vouchers, Checkout Delivery Rules (Distance-Based Express) & Order Sync | `TC-077` – `TC-088` | 12 |
| **Suite 9** | Storefront 4-Column Footer, Dynamic Policy Modals, Tablet Dock & Mobile Hamburger Drawer | `TC-089` – `TC-099` | 11 |
| **Suite 10** | Backend Admin Auth Gate, High-Contrast Sidebar, Single-Line Subtabs & Frozen Table Headers | `TC-100` – `TC-112` | 13 |
| **Suite 11** | ERP Module 1: Dashboard & BI Reports (Accounting Separation, 5-Stage Flow, Cohort/Forecast BI) | `TC-113` – `TC-119` | 7 |
| **Suite 12** | ERP Module 2: Product & Catalogue Management (Category Images, Multi-Media & Variant Modal) | `TC-120` – `TC-130` | 11 |
| **Suite 13** | ERP Module 3: Inventory & Stock Control (Single-Source Engine, Adjustments & Audit Filters) | `TC-131` – `TC-137` | 7 |
| **Suite 14** | ERP Module 4: Suppliers, PO, Rich-Text Entry, Partial/Full GRN Receiving & Preorders | `TC-138` – `TC-149` | 12 |
| **Suite 15** | ERP Module 5: Order Pipeline, Courier Booking, Returns, POS & Compact A4 Printable Invoice | `TC-150` – `TC-162` | 13 |
| **Suite 16** | ERP Module 6 & 7: Customer CRM (Top Form, Reviews, Loyalty) & Finance (COD, Profit, Expenses) | `TC-163` – `TC-171` | 9 |
| **Suite 17** | ERP Module 8 & 9: Promotions/CMS (Coupons, Sliders, Logos, Footer CRUD) & Working Team Ledgers | `TC-172` – `TC-179` | 8 |
| **Suite 18** | Production Edge Cases, Security Sanitization, Custom Option Creator (`+ New`) & Persistence | `TC-180` – `TC-185` | 6 |

## Master E2E Testing & Auto-Fix Prompt to Paste into Antigravity CLI

```text
You are an Autonomous Principal QA Automation Architect and Full-Stack Remediation Engineer. You have access to our project codebase, terminal, and the connected **Playwright MCP** browser automation server.

Your mission is to execute a 100% exhaustive End-to-End (E2E) verification of the "TEHZIB" E-Commerce Storefront and Enterprise Backend ERP/EMS platform across all **185 test cases (`TC-001` to `TC-185`)** below, and **automatically fix every bug, layout defect, CSS specificity collision, state desynchronization, or console/network error you discover** until all 185 test cases pass.

========================================================================
PART 1: AUTONOMOUS PLAYWRIGHT MCP EXECUTION & AUTO-REMEDIATION LOOP
========================================================================
Follow this closed-loop workflow without stopping early:

1. LAUNCH & MONITOR:
   - Start or verify the local web server and navigate to the live URL using Playwright MCP (`browser_navigate`).
   - Continuously check `browser_console_messages` and `browser_network_requests`. Zero uncaught JS exceptions (`pageerror`), zero console errors, and zero failed network/asset requests (`4xx`/`5xx` or broken images with `naturalWidth === 0`) are permitted.

2. DUAL-SELECTOR COMPATIBILITY (PROTOTYPE & FULL-STACK BUILD):
   - Use Playwright MCP (`browser_snapshot`, `browser_click`, `browser_type`, `browser_select_option`, `browser_hover`, `browser_evaluate`, `browser_resize`, `browser_take_screenshot`) AND/OR automated `@playwright/test` spec files.
   - Target the exact DOM IDs and `data-*` attributes listed in each test case (or their equivalent semantic `getByRole` / `getByText` / `getByLabel` selectors if testing a modular Next.js component build).

3. MULTI-VIEWPORT & DUAL-THEME MATRIX:
   - Execute visual and geometric assertions across:
     - Desktop Wide: `1440x900`
     - Tablet / Small Laptop: `1024x768`
     - Mobile Portrait: `390x844`
   - Verify all UI and contrast rules in BOTH `data-theme="light"` (Parisian Blush) and `data-theme="dark"` (Velvet Noir).

4. FIX IMMEDIATELY & RE-VERIFY:
   - Whenever any test case (`TC-001` to `TC-185`) fails:
     1) Record the failing `TC-XXX` ID, expected assertion, and actual DOM/computed-style output.
     2) Fix the root cause directly in the source code (HTML/JSX, CSS/Tailwind, state/database logic).
     3) Reload and re-run the test case via Playwright MCP immediately to confirm it passes before proceeding.

========================================================================
PART 2: COMPLETE 185-CASE E2E TEST MATRIX (TC-001 TO TC-185)
========================================================================

------------------------------------------------------------------------
SUITE 1: BOOT, ZERO-ERROR GATE, TOP MODE BAR & DUAL THEME PALETTES
------------------------------------------------------------------------
- TC-001 [Clean Boot & Asset Integrity]: Navigate to the app at `1440x900`. Verify 0 console errors, 0 uncaught page errors, and verify via `browser_evaluate` that every visible `<img>` has `complete === true` and `naturalWidth > 0`.
- TC-002 [Top Mode Bar Structure]: Inspect `#platformModeBar`. Verify it displays `#switchStorefrontModeBtn` (`Live Customer Storefront`), `#switchAdminModeBtn` (`E-Commerce Management System (Backend Admin)`), and `#liveSyncStatusPill` (`#liveSyncStatusText`).
- TC-003 [Top Mode Bar — 3 Legacy Buttons Removed]: Verify `#quickAddProductBtn` (`+ Supplier Product / GRN`), `#quickStaffOrderBtn` (`+ Staff POS Order`), and `#globalThemeSwitchBarBtn` (`Dark: Velvet Noir` / `Light: Parisian Blush` text pill) are completely absent from `#platformModeBar`.
- TC-004 [Light Theme CSS Variables]: Set `data-theme="light"`. Verify via `getComputedStyle(document.documentElement)` that `--bg-main` is `#FAF8F5`, `--bg-card` is `#F3ECE7`, `--bg-elevated` is `#FFFFFF`, `--text-main` is `#181214`, `--accent-rose` is `#D899A1`, and `--accent-rose-deep` is `#B86B77`.
- TC-005 [Dark Theme CSS Variables]: Click `#themeToggleBtn` to switch to `data-theme="dark"`. Verify `--bg-main` is `#090708`, `--bg-card` is `#151113`, `--bg-elevated` is `#1E181B`, `--text-main` is `#F7F4EF`, `--accent-rose` is `#E4BAB7`, and `--accent-champagne` is `#D4A373`.
- TC-006 [Icon-Only Theme Switchers]: Verify `#themeToggleBtn` (Storefront), `#erpThemeToggleBtn` (ERP Topbar), and `#authThemeToggleBtn` (Admin Auth Gate) render only Sun/Moon SVG icons (`#themeIconMoon`, `#themeIconSun`, `.theme-icon-slot`) with zero text labels ("Dark Mode" / "White Mode").
- TC-007 [Automatic Brand Logo Theme Switching]: Toggle between Light and Dark themes and verify `#brandLogoImg` and all `[data-brand-logo]` elements automatically switch between `TEHZIB_LOGOS.light` and `TEHZIB_LOGOS.dark`.
- TC-008 [Theme Persistence Across Page Reload]: Switch to Dark theme, reload the page via Playwright MCP, and verify `document.documentElement.getAttribute("data-theme") === "dark"` is restored from `localStorage.getItem("tehzib_erp_theme")`.
- TC-009 [Zero Horizontal Page Overflow — Desktop]: Across Home, Catalog, PDP, Cart, Checkout, Account, Notifications, Auth Gate, and all 9 ERP views at `1440x900`, assert `document.documentElement.scrollWidth <= document.documentElement.clientWidth`.
- TC-010 [Zero Horizontal Page Overflow — Mobile]: Resize to `390x844` and repeat the overflow check across all Storefront and ERP screens, asserting `document.documentElement.scrollWidth <= document.documentElement.clientWidth`.

------------------------------------------------------------------------
SUITE 2: STOREFRONT HEADER, SIDE SPACING, STICKY LOGO & CATEGORY BAR
------------------------------------------------------------------------
- TC-011 [Top Offer Header Removed]: Verify `#promoTopStrip` (`.promo-top-strip`) is completely absent from `.site-header` on the Homepage and all other pages.
- TC-012 [Header Left & Right Spacing on Desktop]: At `1440x900` and `1280x800`, inspect `.header-main` via `getComputedStyle`. Verify `paddingLeft` is `36px` (`>= 32px`) and `paddingRight` is `36px` (`>= 32px`) so `#globalSearchForm` on the left and `#navCartBtn` on the right have generous breathing room from screen edges.
- TC-013 [Header 3-Column Element Order]: Verify `.header-main` positions `#globalSearchForm` on the left (`justify-self: start`), `#headerLogoBtn` in the center (`justify-self: center`), and `.header-actions` on the right (`justify-self: end`).
- TC-014 [Sticky Header Offset Sync (`--mode-bar-height`)]: Verify `getComputedStyle(document.querySelector(".site-header")).top` equals the exact pixel height of `#platformModeBar` (`--mode-bar-height`).
- TC-015 [Logo Never Cut Off While Scrolling]: Scroll down `500px` (`window.scrollTo(0, 500)`) on Home and Catalog. Measure `modeBarBottom = document.getElementById("platformModeBar").getBoundingClientRect().bottom` and `logoTop = document.getElementById("brandLogoImg").getBoundingClientRect().top`. Assert `logoTop >= modeBarBottom + 4` so the Tehzib logo is never clipped at the top while scrolling.
- TC-016 [Logo Click Redirects to Home]: From Catalog, Cart, or Account, click `#headerLogoBtn` and verify `#view-home` becomes `.active`.
- TC-017 [Center Category Bar Below Logo — No Home Link]: Inspect `#subNavCategories` inside `.sub-nav-strip`. Verify it is centered below the logo, displays all enabled categories (`Fashion`, `Accessories`, `Mom & Kids`, `Shoes`, `Clothing`), and does NOT contain a `"Home"` link.
- TC-018 [Hover Over Category Shows Subcategories Dropdown]: Use `browser_hover` on each `.cat-dropdown-item` in `#subNavCategories`. Verify its `.subcat-dropdown-menu` transitions to `visibility: "visible"` and `opacity: "1"`, listing all subcategories (`[data-nav-subcat]`).
- TC-019 [Click Category in Center Bar]: Click `[data-nav-cat="Fashion"]` in `#subNavCategories`. Verify `#view-catalog` opens with `state.catalogCategory === "Fashion"` and `state.catalogSubcategory === "All"`.
- TC-020 [Click Subcategory in Hover Dropdown]: Hover over `Fashion` and click `[data-nav-subcat="Evening Clutches"][data-parent-cat="Fashion"]`. Verify `#view-catalog` opens filtered to `Fashion` $ightarrow$ `Evening Clutches`.
- TC-021 [Legacy Debug Navigation Line Removed]: Verify no bar exists showing debug screen links (`Product Details, Cart, Checkout, Account, Wishlist, Notification`).
- TC-022 [Mobile View Header (<768px)]: Resize to `390x844`. Verify `.header-main` shows ONLY `#headerLogoBtn`, `#mobileHamburgerBtn` (3-bar icon), and `#globalSearchForm`, with `paddingLeft: 18px` and `paddingRight: 18px`, while `.header-actions` and `.sub-nav-strip` have `display: "none"`.

------------------------------------------------------------------------
SUITE 3: STOREFRONT FULL-WIDTH HERO CAROUSEL (DESKTOP & MOBILE)
------------------------------------------------------------------------
- TC-023 [End-to-End Full-Width Hero Banner]: At `1440x900`, verify `.hero-slider-viewport` spans the full width of `.hero-section` and renders all slides from `state.heroSlides`.
- TC-024 [Legacy 3 Service Sections Removed]: Verify the 3 legacy feature boxes (`Express Delivery`, `Bespoke Size`, `Signature Gift`) are absent.
- TC-025 [No Slide Numbers Displayed]: Inspect `.hero-slider-controls`. Verify only dot buttons (`[data-hero-dot]`) are rendered and no numeric slide counters are present.
- TC-026 [Desktop Hero Next/Prev Arrow Navigation]: At `1440x900`, click `#heroNextSlideBtn` and `#heroPrevSlideBtn`. Verify `[data-hero-slide].active` and `[data-hero-dot].active` cycle accurately through all slides.
- TC-027 [Hero Dot Click Navigation]: Click `[data-hero-dot="2"]` and verify slide index `2` becomes `.active`.
- TC-028 [Hero CTA & Showcase Card Click]: Click `.hero-cta-btn` on the active slide and verify it navigates to `#view-catalog` with the slide's target category. Return to Home, click `.hero-showcase-card` (`[data-open-pdp]`), and verify it opens that product's PDP (`#view-product`).
- TC-029 [Mobile Hero Compact Proportions (<768px)]: Resize to `390x844`. Measure `.hero-slider-viewport.getBoundingClientRect().height`. Assert height is compact (`220px <= height <= 310px`), matching desktop banner proportions rather than a lengthy vertical block.
- TC-030 [Mobile Hero Side Arrows Hidden (<768px)]: At `390x844`, verify `#heroPrevSlideBtn` and `#heroNextSlideBtn` (`.hero-slider-arrow`) have `getComputedStyle(el).display === "none"`.
- TC-031 [Mobile Hero Showcase Card Hidden (<768px)]: At `390x844`, verify `.hero-showcase-card` has `getComputedStyle(el).display === "none"`.

------------------------------------------------------------------------
SUITE 4: HOMEPAGE CURATED SECTIONS & NEWSLETTER VISIBILITY
------------------------------------------------------------------------
- TC-032 [Top Categories Desktop & Mobile Grids]: At `1440x900`, verify `#topCategoriesDesktopGrid` is visible and clicking a `.top-cat-rect-card` opens `#view-catalog` for that category. At `390x844`, verify `#topCategoriesMobileRow` (`.cat-circle-item`) is visible and functional.
- TC-033 ["Trendsetters" Section & Countdown Timer]: Verify `#feSecHeadingTrend` reads `"Trendsetters"` (renamed from "Deals of the Day"), `#flashTimerText` ticks every second (`Ends in: HH:MM:SS`), and `#dealsOfTheDayGrid` cards display the `.inventory-status` bar (`Available` vs. `Sold`).
- TC-034 [Promotional Split Banners]: Verify `.promo-banners-grid` renders both promotional banner cards (`.promo-banner-dark` and `.promo-banner-warm`) and their `Shop Now` buttons navigate to the target categories.
- TC-035 ["New Arrivals" Section Replaces Featured Products]: Verify no section is titled `"Featured Products"`, and `#feSecHeadingNew` displays `"New Arrivals"` with products rendered in `#newArrivalsGrid`.
- TC-036 ["Just For You" Section]: Verify `#feSecHeadingJfy` displays `"Just For You"` with products rendered in `#justForYouGrid`.
- TC-037 [Curated Capsule Tabs]: Click each `[data-special-tab]` button in `#specialOfferTabs` (`Best Sellers`, `Accessories`, `Shoes & Fashion`, `Mom & Kids`) and verify `#specialOfferGrid` updates immediately.
- TC-038 [View All Buttons Navigation & Overflow Check]: Click `#viewAllCategoriesBtn`, `#viewAllDealsBtn`, `# specialExploreAllBtn`, and `[data-view-all]` links on `New Arrivals` and `Just For You`. Verify each opens `#view-catalog` with zero horizontal overflow.
- TC-039 [Newsletter Visible ONLY on Homepage]: On `#view-home`, verify `#newsletterForm`, `#feNewsletterTitle`, and `#feNewsletterSub` are visible. Enter `"test@tehzib.com"` into `#newsletterEmailInput` and submit; verify the toast confirmation and input reset.
- TC-040 [Newsletter Absent on Non-Home Views]: Switch to `catalog`, `product`, `cart`, `checkout`, `account`, and `notifications`. Verify `#newsletterForm` is not visible (`offsetParent === null`).
- TC-041 [Product Card Quick-Add to Cart (`+`)]: Click `[data-quick-add]` on a product card in `#dealsOfTheDayGrid`. Verify `#headerCartBadge` increments by `1` and `#appToast` displays `"Added ... to Cart"`.
- TC-042 [Product Card Wishlist Toggle (`♡` / `♥`)]: Click `[data-toggle-wish]` on a product card. Verify the button toggles `.active` (`♥`) and `#headerWishBadge` increments/decrements accurately.

------------------------------------------------------------------------
SUITE 5: CATALOG, 2-PART BREADCRUMBS & MULTI-COLUMN TOP ALIGNMENT
------------------------------------------------------------------------
- TC-043 [Catalog Breadcrumb — All Categories / All Products]: Open `#view-catalog` with `state.catalogCategory = "All"` and `state.catalogSubcategory = "All"`. Verify `#catalogBreadcrumbCat` reads `"All Categories"`, `#catalogBreadcrumbCurrent` reads `"All Products"`, and `#catalogBreadcrumbSubcat` is hidden (`display: none`), forming the exact 2-part trail `All Categories / All Products`.
- TC-044 [Catalog Breadcrumb — Category Selected (`Fashion / All Fashion`)]: Click `[data-select-cat="Fashion"]` in `#catalogSidebarCategories`. Verify the breadcrumb displays `Fashion / All Fashion`.
- TC-045 [Catalog Breadcrumb — All Other Categories]: Click `Accessories`, `Mom & Kids`, `Shoes`, and `Clothing` in `#catalogSidebarCategories`. Verify breadcrumbs read `Accessories / All Accessories`, `Mom & Kids / All Mom & Kids`, `Shoes / All Shoes`, and `Clothing / All Clothing`.
- TC-046 [Catalog Breadcrumb — Subcategory Selected (`Fashion / Evening Clutches`)]: With `Fashion` selected, click `• Evening Clutches` (`[data-nav-subcat="Evening Clutches"]`) in the sidebar. Verify the breadcrumb reads `Fashion / Evening Clutches` and `#catalogHeadingTitle` reads `"Fashion — Evening Clutches"`.
- TC-047 [Catalog Breadcrumb Parent Click Reset]: While viewing `Fashion / Evening Clutches`, click `#catalogBreadcrumbCat` (`Fashion`). Verify `state.catalogSubcategory` resets to `"All"` and the breadcrumb returns to `Fashion / All Fashion`.
- TC-048 [Catalog Left Sidebar & Right Top-Bar Exact Alignment]: At `1440x900`, open `#view-catalog`. Measure `sidebarTop = document.querySelector(".catalog-sidebar").getBoundingClientRect().top` and `topBarTop = document.querySelector(".catalog-top-bar").getBoundingClientRect().top`. Assert `Math.abs(sidebarTop - topBarTop) <= 2` both at `scrollY = 0` and after scrolling down `120px` (`window.scrollTo(0, 120)`).
- TC-049 [Catalog Result Counter Accuracy]: Verify `#catalogResultCountText` (`Showing X products`) matches the exact number of `.product-card` elements rendered inside `#catalogProductsGrid`.
- TC-050 [Catalog Sorting — Price Low to High & High to Low]: Select `price-asc` and then `price-desc` in `#catalogSortSelect`. Verify the prices of cards in `#catalogProductsGrid` are sorted in non-decreasing and non-increasing order respectively.
- TC-051 [Catalog Sorting — A–Z, Z–A & Latest]: Select `az`, `za`, and `latest` in `#catalogSortSelect` and verify `#catalogProductsGrid` re-orders accurately.
- TC-052 [Global Search Bar Submission]: Enter `"Satin"` in `#globalSearchInput` and submit `#globalSearchForm`. Verify `#view-catalog` opens, `#catalogHeadingTitle` includes `Search: "Satin"`, and only matching products are shown.
- TC-053 [Empty Search & Reset Filters Button]: Search for `"NONEXISTENT_SKU_999"`. Verify `#resetCatalogSearchBtn` appears inside `#catalogProductsGrid`, and clicking it clears `#globalSearchInput` and restores all products.
- TC-054 [Non-Catalog Breadcrumbs — Cart, Checkout & Account]: Open Cart, Checkout, and Account. Verify their `.breadcrumb-inner` trails are `All Categories / Shopping Cart`, `Shopping Cart / Checkout`, and `My Account / Account Details`.

------------------------------------------------------------------------
SUITE 6: PRODUCT DETAIL PAGE (PDP) & SEO/GEO METADATA
------------------------------------------------------------------------
- TC-055 [Open PDP & Verify Core Product Data]: Click any product card (`[data-open-pdp="p_claw"]`). Verify `#view-product` opens and `#pdpProductTitle`, `#pdpCategoryTag`, `#pdpPriceDisplay`, `#pdpReviewCount`, and `#pdpStockBadge` match the product record.
- TC-056 [PDP Breadcrumb Trail & Clicks]: Verify `#pdpBreadcrumbCat`, `#pdpBreadcrumbSubcat`, and `#pdpBreadcrumbTitle` display `${Category} / ${Subcategory} / ${Title}` (no `Home` link). Click `#pdpBreadcrumbSubcat` and verify it navigates to `#view-catalog` filtered to that subcategory.
- TC-057 [PDP Thumbnail Strip & Prev/Next Gallery Navigation]: On PDP, click each `[data-thumb-idx]` in `#pdpThumbnailStrip`, then click `#pdpNextImgBtn` and `#pdpPrevImgBtn`. Verify `#pdpMainImage.src` and `.pdp-thumb-item.active` update on every click.
- TC-058 [PDP Image Zoom Modal]: Click `#pdpZoomBtn`. Verify `#genericModalBackdrop` opens showing the zoomed product image, and clicking `#modalTopCrossBtn` (`✕`) closes it.
- TC-059 [PDP Variant Pill Selection]: Click each `[data-select-variant]` pill in `#pdpVariantPills`. Verify `.variant-pill.active` moves to the clicked variant and updates `state.pdpVariant`.
- TC-060 [PDP Quantity Stepper Boundaries]: Click `#pdpQtyMinusBtn` when `#pdpQtyValue` is `1` and verify it stays at `1`. Click `#pdpQtyPlusBtn` 3 times and verify `#pdpQtyValue` becomes `4`.
- TC-061 [PDP Add to Cart & Wishlist Toggle]: With quantity `4` and a selected variant, click `#pdpAddToCartBtn` and verify `#headerCartBadge` increases by `4`. Click `#pdpWishlistBtn` and verify `.pdp-fav-circle-btn.active` toggles and updates `#headerWishBadge`.
- TC-062 [PDP Description Tab — SKU, Wholesale Price, SEO & GEO Fields]: With `[data-pdp-tab="description"]` active, verify `#pdpTabContent` displays the product description, `SKU & Supplier Ref`, `B2B Wholesale Price`, `SEO Meta Description`, `SEO Keywords`, and `GEO Keywords`.
- TC-063 [PDP Specifications & Reviews Tabs]: Click `[data-pdp-tab="specs"]` and `[data-pdp-tab="reviews"]`. Verify `#pdpTabContent` renders the product specifications and verified customer reviews respectively.
- TC-064 [PDP You May Also Like Grid]: Verify `#pdpRelatedGrid` displays 4 related products (excluding the active product) and clicking any card switches the PDP to that product.

------------------------------------------------------------------------
SUITE 7: ALERTS DROPDOWN, ACCOUNT DROPDOWN, AUTH MODAL & ACCOUNT DASHBOARD
------------------------------------------------------------------------
- TC-065 [Alerts Button Opens Dropdown Panel]: Click `#navNotificationsBtn`. Verify `#notifDropdownPanel` toggles `.open` as a dropdown without changing `state.currentView`.
- TC-066 [Alerts Dropdown Read Single & Mark All Read]: Click an unread item (`[data-notif-id]`) in `#headerNotifDropdownList` and verify its `.unread` class is removed. Click `#dropdownMarkAllReadBtn` and verify all notifications become read and `#headerNotifBadge` hides (`display: none`).
- TC-067 [Account Button Opens Dropdown with Rating, Points & Auth Prompt]: Click `#navAccountBtn`. Verify `#accountDropdownPanel` opens showing `#accountDropdownAuthBox` (`Login / Sign In` and `Sign Up` buttons when logged out), `#dropdownUserRatingVal` (`4.9 / 5.0`), `#dropdownRewardPointsVal` (`1,450 Pts`), and `[data-acc-drop-nav]` links.
- TC-068 [Login Modal Submission]: Click `[data-open-auth="login"]` in `#accountDropdownAuthBox`. Verify `#authModalBackdrop` opens with `#authLoginForm` visible. Enter `"nusrat.jahan@tehzib.com"` in `#loginIdentifierInput`, submit `#authLoginForm`, and verify `state.isLoggedIn === true` and `#authModalBackdrop` closes.
- TC-069 [Sign Up Modal Submission & +500 Bonus Points]: Open `#authModalBackdrop` and click `#authTabSignupBtn` (or `[data-open-auth="signup"]`). Fill `#signupNameInput`, `#signupEmailInput`, and `#signupPhoneInput`, and submit `#authSignupForm`. Verify `state.isLoggedIn === true`, `state.rewardPoints` increases by `500`, and the new customer is added.
- TC-070 [Forgot Password Toast & Auth Modal Close]: Open `#authModalBackdrop`, click `#forgotPassLinkBtn` to verify the password-reset toast, then click `#closeAuthModalBtn` (`✕`) to close the modal.
- TC-071 [Account Dashboard Left & Right Column Exact Top Alignment]: Navigate to `#view-account` at `1440x900`. Measure `leftTop = document.querySelector(".account-sidebar-card").getBoundingClientRect().top` and `rightTop = document.querySelector(".account-main-card").getBoundingClientRect().top`. Assert `Math.abs(leftTop - rightTop) <= 2` both at `scrollY = 0` and after scrolling down `120px`.
- TC-072 [Account Profile Edit & Sync to Admin CRM]: On `#accountPanel-details`, click `#toggleEditProfileBtn` (`✎ Edit Profile`), update `#inputFullName` and `#inputPhone`, and click `#toggleEditProfileBtn` (`✓ Save Changes`). Verify `#valFullName`, `#sidebarProfileName`, and `#sidebarAvatarInitials` update immediately.
- TC-073 [Account Change Password & Edit Address Modals]: Click `#changePasswordBtn` to test the password update modal, then switch to `Address Book` (`[data-account-panel="addresses"]`), click `#accountEditAddressBtn`, update `#modalAddrName`, `#modalAddrLine`, `#modalAddrPhone` in `#genericModalBackdrop`, click `#modalConfirmBtn`, and verify `#accountSavedAddressText` updates.
- TC-074 [Account 5-Status Order Filter & Sub-Panels]: Click each `[data-order-quick]` button (`To Pay`, `To Ship`, `To Receive`, `To Review`, `Returns`) and each `[data-account-panel]` button in the sidebar (`details`, `addresses`, `vouchers`, `orders`, `wishlist`). Verify `#ordersPanelTitle`, `#ordersListContainer`, and `#accountBreadcrumbCurrent` update accurately.
- TC-075 [Wishlist Panel Sorting, Add to Cart & Item Removal]: Open `#accountPanel-wishlist` (via `#navWishlistBtn` or `#accountWishlistViewAllBtn`). Test `#wishlistSortSelect` (`recent`, `price-asc`, `price-desc`), click `+ Add to Cart` on a wishlist card, and click `🗑` (`[data-remove-wish]`) $ightarrow$ `#modalConfirmBtn` to remove an item and verify `#wishlistCounterSubtitle` decrements.
- TC-076 [Account Log Out Confirmation Modal]: Click `#triggerLogoutModalBtn` (or `#dropdownSignOutBtn` in the Account dropdown). Confirm logout and verify `state.isLoggedIn` becomes `false`.

------------------------------------------------------------------------
SUITE 8: SHOPPING CART, VOUCHERS, CHECKOUT DELIVERY RULES & ORDER SYNC
------------------------------------------------------------------------
- TC-077 [Shopping Cart Left Column & Order Summary Exact Top Alignment]: Open `#view-cart` at `1440x900`. Measure `leftTop = document.querySelector("#view-cart .cart-checkout-layout > div").getBoundingClientRect().top` and `rightTop = document.querySelector("#view-cart .summary-sticky-card").getBoundingClientRect().top`. Assert `Math.abs(leftTop - rightTop) <= 2`.
- TC-078 [Checkout Left Column & Order Summary Exact Top Alignment]: Open `#view-checkout` at `1440x900`. Measure `leftTop = document.querySelector("#view-checkout .cart-checkout-layout > div").getBoundingClientRect().top` and `rightTop = document.querySelector("#view-checkout .summary-sticky-card").getBoundingClientRect().top`. Assert `Math.abs(leftTop - rightTop) <= 2`.
- TC-079 [Cart Item Checkboxes, Select All & Quantity Stepper]: In `#view-cart`, toggle `[data-cart-check]`, click `#cartSelectAllToggle`, and click `[data-cart-plus]` and `[data-cart-minus]`. Verify `#cartSummarySubtotalLabel`, `#cartSummarySubtotalVal`, and `#cartGrandTotalVal` recalculate live.
- TC-080 [Cart Single Item Delete & Bulk Delete Modals]: Click `[data-cart-remove]` on a cart item and confirm in `#genericModalBackdrop`. Test `#cartBulkDeleteBtn` to remove selected items, and verify the empty-cart state when 0 items remain (then add 2 items back for checkout tests).
- TC-081 [Valid & Invalid Voucher Code Application]: Enter `"INVALID99"` in `#cartVoucherInput` and click `#cartVoucherApplyBtn`; verify the error toast lists active codes. Then enter `"TEHZIB15"` (or `"BLUSH15"`) and click `#cartVoucherApplyBtn` (and `#checkoutVoucherApplyBtn` on Checkout); verify `#cartDiscountRow` displays the discount and reduces `#cartGrandTotalVal`.
- TC-082 [Checkout Delivery Options — No Scheduled Option]: Open `#view-checkout` and inspect `#deliveryOptionsGrid`. Verify there are strictly 2 `.delivery-option-card` elements (`standard` and `express`) and NO `"Scheduled"` delivery option exists.
- TC-083 [Checkout Express Option — Varies by Distance (No Exact Charge)]: Inspect `[data-delivery-method="express"]`. Verify it states `"Charge varies by distance"` (never a hardcoded BDT figure). Click `[data-delivery-method="express"]` and verify `#checkoutDeliveryFeeVal` reads `"Varies by distance"` and `#checkoutGrandTotalVal` appends `"+ Express"`.
- TC-084 [Checkout Standard Delivery Option]: Click `[data-delivery-method="standard"]`. Verify `#checkoutDeliveryFeeVal` displays the standard Dhaka delivery fee (`৳60.00`) and `#checkoutGrandTotalVal` includes the exact fee.
- TC-085 [Checkout Address Edit & Payment Method Drawer]: On `#view-checkout`, click `#checkoutChangeAddressBtn` to edit recipient details (`#checkoutAddrTitle`, `#checkoutAddrLine`, `#checkoutAddrPhone`). Click `#checkoutChangePaymentBtn` to toggle `#paymentSelectorDrawer` and select `[data-pay-choice="bKash Mobile Wallet"]` or `[data-pay-choice="Cash on Delivery"]`, verifying `#checkoutPaymentName` and `#checkoutPaymentSub` update.
- TC-086 [Customer Order Placement & Confirmation Modal]: Click `#confirmOrderBtn` on `#view-checkout`. Verify the confirmation modal opens with a new `#THZ-XXXX` order ID, and clicking `Track in My Orders` (`#modalConfirmBtn`) navigates to `#view-account` (`#accountPanel-orders`).
- TC-087 [Storefront Order Two-Way Sync to Backend ERP]: Immediately after `TC-086`, inspect `ERP_DB`:
  1) Verify `ERP_DB.orders[0]` contains the newly placed storefront order (`channel: "Storefront"`, `status: "New"`).
  2) Verify each ordered product in `ERP_DB.products` had its `available` count decremented by `qty` and `reserved` count incremented by `qty`.
  3) Verify `ERP_DB.inventoryMovements[0]` logged `"Storefront Order Reserved (-X Avail, +X Reserved)"`.
  4) Verify `ERP_DB.emsNotifications[0]` logged the new `Order Confirmation`.
- TC-088 [Storefront Order Appears in Customer Notifications]: Open `#notifDropdownPanel` (or `#view-notifications`) and verify the `"Order #THZ-XXXX Confirmed!"` notification appears at the top of Today's alerts.

------------------------------------------------------------------------
SUITE 9: STOREFRONT 4-COLUMN FOOTER, TABLET DOCK & MOBILE DRAWER
------------------------------------------------------------------------
- TC-089 [Footer 4-Column Layout & Brand Column Content]: Scroll to `.site-footer` and inspect `#storefrontFooterGrid`. Verify 4 `.footer-col` columns are rendered (`Company`, `Customer Care`, `Popular Categories` alongside `#storefrontFooterBrandCol`), and `#storefrontFooterBrandCol` contains:
  - Tehzib dark logo (`img[data-asset-src="logo_dark"]`),
  - `#feFooterBio`: `"Tehzib is a contemporary Bangladeshi fashion, footwear, accessories, and lifestyle house blending Parisian Blush aesthetics with artisanal heritage."`,
  - `.footer-phone`: `"+880 1711-889900"`,
  - Address: `"📍 Uttara Sector 12, Dhaka, Bangladesh"`.
- TC-090 [Footer 4 Social Pills (`Fb`, `Insta`, `TikTok`, `Threads`)]: Verify `.footer-social-row` contains 4 `.footer-social-pill` buttons (`[data-social-link="Facebook"]`, `Instagram`, `TikTok`, `Threads`) with SVG icons and labels `Fb`, `Insta`, `TikTok`, `Threads`, and clicking each triggers the follow toast.
- TC-091 [Footer Links & Dynamic Info Popup Modals]: Click each `[data-footer-info]` button under `Company` (`About Us`, `Return Policy`, `FAQs`, `Privacy Policy`, `Terms & Conditions`) and `Customer Care` (`Money-back Guarantee`, `Product Returns`, `Support Center`, `Shipping`). Verify `#genericModalBackdrop` opens with the matching title and message, and `#modalActionsRow` is hidden (`display: none`) for close-only info modals while `#modalTopCrossBtn` (`✕`) closes the modal.
- TC-092 [Footer Popular Categories Navigation]: Click each `[data-footer-cat]` link under `Popular Categories` (`Clothing`, `Shoes & Heels`, `Fashion Bags & Watches`, `Jewellery & Accessories`, `Mom & Kids`) and verify it navigates to `#view-catalog` filtered to that category.
- TC-093 [Footer Copyright 2027 & No Payment Badges]: Inspect `.footer-bottom-bar`. Verify text is `"© 2027 Tehzib. All rights reserved."` (never `@2025`) and verify zero `.pay-badge` or payment method icons exist in `.site-footer`.
- TC-094 [Tablet Bottom Navigation Dock (`769px–1024px`)]: Resize viewport to `900x768`. Verify `.mobile-bottom-dock` is visible (`display: flex`), and clicking `[data-dock-target="home"]`, `catalog`, `notifications`, `account`, and `#mobileDockCartFab` navigates to each screen.
- TC-095 [Mobile Bottom Dock Hidden on Phone (`<=768px`)]: Resize viewport to `390x844`. Verify `.mobile-bottom-dock` has `display: "none"` so mobile navigation is consolidated cleanly inside the 3-bar Hamburger drawer.
- TC-096 [Mobile Hamburger Drawer Open & Close]: At `390x844`, click `#mobileHamburgerBtn` to open `#mobileMenuBackdrop`. Verify clicking `#closeMobileMenuBtn` (`✕`) or clicking the backdrop outside `.mobile-drawer-panel` closes the drawer.
- TC-097 [Mobile Hamburger Drawer Theme & Auth Actions]: Inside `#mobileMenuBackdrop`, click `#mobileThemeToggleBtn` and verify the theme switches between Light and Dark. Click `#mobileOpenAuthBtn` and verify `#authModalBackdrop` opens.
- TC-098 [Mobile Hamburger Drawer Quick Screen & Alerts Toggle]: Inside `#mobileMenuBackdrop`, test `#mobileMenuCartBtn`, `#mobileMenuWishBtn`, `#mobileMenuAccountBtn`, and `#mobileMenuNotifBtn` (which toggles `#mobileDrawerNotifBox` and `#mobileMarkAllReadBtn`).
- TC-099 [Mobile Hamburger Drawer Categories & Subcategories]: Inside `#mobileMenuBackdrop`, click a category (`[data-nav-cat]`) and a subcategory pill (`[data-nav-subcat]`) and verify the drawer closes and opens `#view-catalog` with the selected filter.

------------------------------------------------------------------------
SUITE 10: BACKEND ADMIN AUTH GATE, HIGH-CONTRAST SIDEBAR, SINGLE-LINE SUBTABS & FROZEN TABLE HEADER
------------------------------------------------------------------------
- TC-100 [Separate Admin Authentication Gate]: Click `#switchAdminModeBtn` when unauthenticated. Verify `#authGateScreen` is visible (`display: flex`) and `#erpAppShell`, `.site-header`, `.app-main`, and `.site-footer` are hidden (`display: none`).
- TC-101 [Admin Auth Gate Quick-Fill Credentials & Role Select]: On `#authGateScreen`, click each `.auth-cred-row` (`admin@tehzib.com`, `ops@tehzib.com`, `finance@tehzib.com`) and verify `fillAuthCreds` populates `#loginAdminId`, `#loginAdminPass` (`Tehzib@2027`), and `#loginRoleSelect`.
- TC-102 [Admin Auth Gate Invalid vs. Valid Login]: Enter an incorrect password in `#loginAdminPass` and submit `#adminLoginForm`; verify `#authErrorBanner` becomes visible. Then enter `admin@tehzib.com` / `Tehzib@2027` and submit; verify `#authGateScreen` hides, `#erpAppShell` displays, and `#activeAdminName` / `#activeAdminRole` update in `.erp-topbar`.
- TC-103 [Left Sidebar High-Contrast Active & Hover Highlight — Light Theme]: Set `data-theme="light"`. In `#erpSidebar`, click each of the 9 `.erp-nav-btn` buttons (`dashboard`, `products`, `inventory`, `procurement`, `orders`, `crm`, `finance`, `marketing_cms`, `working_team`). Verify via `getComputedStyle` that `.erp-nav-btn.active` has `backgroundColor: "rgb(24, 18, 20)"` (`#181214`), `color: "rgb(250, 248, 245)"` (`#FAF8F5`), and `borderLeftWidth: "5px"` (`#D899A1`), and hovering over an inactive `.erp-nav-btn` shows `backgroundColor: "rgb(243, 228, 230)"` (`#F3E4E6`).
- TC-104 [Left Sidebar High-Contrast Active & Hover Highlight — Dark Theme]: Set `data-theme="dark"`. Verify `.erp-nav-btn.active` has `backgroundColor: "rgb(228, 186, 183)"` (`#E4BAB7`), `color: "rgb(9, 7, 8)"` (`#090708`), and `borderLeftWidth: "5px"` (`#D4A373`), and hovering over an inactive `.erp-nav-btn` shows `backgroundColor: "rgb(40, 30, 33)"` (`#281E21`).
- TC-105 [Left Sidebar Logo Containment & Zero Horizontal Scroll]: Inspect `#erpSidebar` and `.erp-sidebar-brand img`. Verify the logo fits cleanly (`width <= 88px`, `height <= 44px`, `objectFit: "contain"`) and `#erpSidebar.scrollWidth <= #erpSidebar.clientWidth` (`overflowX: "hidden"`).
- TC-106 [Single Storefront Redirect & Removal of Duplicate Preview / Reset Demo DB]: Inspect `#erpSidebar .erp-sidebar-footer` and `.erp-topbar-right`. Verify `#openStorefrontPreviewBtn`, `#topPreviewStorefrontBtn`, `#resetErpDataBtn`, and the sidebar `← Storefront` button are all absent, leaving only `#switchStorefrontModeBtn` in `#platformModeBar` to redirect to the Storefront and `#sidebarLogoutBtn` (`Sign Out`) in `.erp-sidebar-footer`.
- TC-107 [Single-Line Concise `.subtab-btn` Buttons Across All 7 Multi-Tab ERP Views]: At `1440x900`, open each ERP view that has a `.subtab-bar` (`dashboard`, `orders`, `crm`, `procurement`, `finance`, `marketing_cms`, `working_team`). For every `.subtab-bar`:
  1) Verify `getComputedStyle(bar).flexWrap === "nowrap"`.
  2) Measure `getBoundingClientRect().top` of every `.subtab-btn` in that bar and assert all buttons in the bar share the exact same `top` coordinate (`Math.abs(btnA.top - btnB.top) <= 2` — strictly 1 single line).
  3) Verify every `.subtab-btn` has a visible border (`borderTopWidth !== "0px"`) and button background, and `.subtab-btn.active` has high-contrast active colors in both Light (`#181214` bg / `#FAF8F5` text) and Dark (`#E4BAB7` bg / `#090708` text) themes.
- TC-108 [Frozen Top Horizontal Scrollbar + 1st Row of Column Names (`<thead>`) on All ERP Tables]: Across all 22 ERP tables in `#erpAppShell`, inspect each `.table-scroll-shell`:
  1) Verify `.table-frozen-header` is present at the top of `.table-scroll-shell` with `position: "sticky"`.
  2) Verify `.table-frozen-header` contains `.table-top-scroll` on top and `.table-frozen-thead` directly below it.
  3) Verify `.table-frozen-thead` contains `<table class="erp-table erp-frozen-head-table"><thead>...</thead></table>` where every `<th>` has `getComputedStyle(th).visibility === "visible"`, `opacity === "1"`, and non-empty column name text matching the table's `<thead>`.
- TC-109 [No Bottom Horizontal Scrollbar Under Tables]: Inspect `.table-wrap` across all ERP tables. Verify `getComputedStyle(wrap).scrollbarWidth === "none"` so there is never a second horizontal scrollbar beneath the table.
- TC-110 [Table Top Scrollbar Drag, Track Click, Arrow Buttons & Wheel Sync]: On a wide ERP table (e.g., `#productsMasterTableBody` or `#inventoryValuationBody`), click the right arrow `.top-scroll-arrow[data-scroll-dir="1"]`, click the track `.top-scroll-track`, and drag `.top-scroll-thumb`. Verify `wrap.scrollLeft` increases, `frozenThead.scrollLeft === wrap.scrollLeft`, and `.top-scroll-thumb`'s `style.left` updates proportionally.
- TC-111 [Table Vertical Scroll — Header & Scrollbar Stay Frozen Together]: Scroll the window vertically down `450px` (`window.scrollTo(0, 450)`) while viewing `#view-inventory` or `#view-products`. Measure `frozenRect = shell.querySelector(".table-frozen-header").getBoundingClientRect()`. Verify `.table-frozen-header` stays stuck right below `.erp-topbar` (`Math.abs(frozenRect.top - erpTopbarRect.bottom) <= 2`), keeping the scrollbar and the 1st row of column names (`<thead>`) locked together with zero data rows visible above the scrollbar.
- TC-112 [Backend 12px Typography Scale]: Verify via `getComputedStyle` that `#erpAppShell`, `.erp-table td`, `.form-input`, `.form-select`, and `.form-textarea` have `fontSize === "12px"`.

------------------------------------------------------------------------
SUITE 11: ERP MODULE 1 — DASHBOARD & BI REPORTS
------------------------------------------------------------------------
- TC-113 [Dashboard — No Top Callout Banner]: Open `#view-dashboard` and verify no explanatory callout banner appears above `#dashboardKpiGrid`.
- TC-114 [Dashboard 6 Daily Decision KPI Cards]: Verify `#dashboardKpiGrid` renders 6 KPI cards with live values from `computeErpMetrics()` (Orders Awaiting Action, Dispatched In-Transit, Delivered Earned Revenue, COD Cash Settled vs. Pending, Operating Expenses & COGS, and True Net Profit).
- TC-115 [Dashboard Recent Orders & One-Click Workflow Advance]: In `#dashboardRecentOrdersBody`, click the quick action button (`Confirm →`, `Pack →`, or `Dispatch →` via `advanceOrderWorkflowStep`) or `🧾 Invoice` (`openOrderInvoiceModal`). Verify the order status advances or the A4 invoice opens.
- TC-116 [Dashboard Low-Stock Alerts & Quick Restock (`+5 Stock`)]: In `#dashboardLowStockAndPos`, click `+5 Stock` (`quickRestockProduct`) on a low-stock SKU. Verify its `available` count increases by `5` and logs a stock movement.
- TC-117 [Dashboard 5-Stage Visual Operational Flow Diagram]: Inspect `#dashboardVerticalFlowDiagram` in Light and Dark themes. Verify `.erp-flow-card` and `.erp-flow-stage-box` use theme-aware CSS variables (`var(--bg-elevated)`, `var(--bg-card)`, `var(--text-main)`), and clicking any stage box navigates to that module.
- TC-118 [Dashboard Subtab 2 — Profitability, Cohort & Demand Forecast BI]: Click `Profitability & Analytics` (`[data-dash-tab="analytics"]`). Verify `#reportSkuProfitBody` (with visible frozen `<thead>` column names), `#analyticsCohortBody`, and `#analyticsForecastBody` render accurately.
- TC-119 [Dashboard Subtab 3 — Capabilities Matrix]: Click `Capabilities Matrix` (`[data-dash-tab="capabilities"]`). Verify `#extendedCapabilitiesTable` renders all 8 extended capabilities with visible column headers and working `Open Tool →` buttons.

------------------------------------------------------------------------
SUITE 12: ERP MODULE 2 — PRODUCT & CATALOGUE MANAGEMENT
------------------------------------------------------------------------
- TC-120 [Category, Subcategories & Category Image Manager — Preset Selection]: Open `#view-products`. In `#cmsCategoryForm`, change `#cmsCatImgPreset` and verify `previewCategoryImageSelection()` updates `#cmsCatImgLivePreview.src` and `#cmsCatImgPreviewLabel`.
- TC-121 [Add New Storefront Category & Subcategories]: Fill `#cmsCatName` (`"Bridal Atelier"`), `#cmsCatSubs` (`"Bridal Clutches, Zardozi Wraps"`), select an image preset, and submit `#cmsCategoryForm`. Verify the new category card appears in `#categoryRolloutGrid` and in the Storefront `#subNavCategories` bar.
- TC-122 [Edit Existing Category & Toggle Storefront Rollout]: Click `✎ Edit / Image` (`editCategoryInForm(0)`) on a card in `#categoryRolloutGrid` and verify `#cmsCategoryForm` populates. Toggle the category's `Enabled on Storefront` checkbox (`toggleCategoryStorefrontRollout(0)`) and verify it hides/shows on the Storefront.
- TC-123 [Product Master Table Search, Status Filter & Category Filter]: Test `#prodSearchInput`, `#prodFilterStatus` (`ALL`, `Active`, `Draft`, `Out of Stock`, `Discontinued`), and `#prodFilterCategory`. Verify `#productsMasterTableBody` updates and its frozen `<thead>` column names remain visible.
- TC-124 [Product Master Table Quick Actions (`+5 Stock` & `Publish`/`Unpublish`)]: In `#productsMasterTableBody`, click `+5` (`quickRestockProduct`) and `Unpublish`/`Publish` (`togglePublishProduct`). Verify stock and storefront visibility update immediately.
- TC-125 [Open Product & Variant SKU Editor Modal (`#productEditorModal`)]: Click `+ Create New Product & Variants` (`openProductEditorModal('')`) and then click `✎ Edit` (`openProductEditorModal('p_claw')`). Verify `#productEditorModal` opens and populates all fields (`#editProdTitle`, `#editProdSku`, `#editProdSupplier`, `#editProdCategory`, `#editProdSubcategory`, `#editProdStock`, `#editProdCost`, `#editProdWholesale`, `#editProdRetail`, `#editProdOldPrice`, `#editProdVariants`, `#editProdPublished`).
- TC-126 [Product Editor Modal — Multi-Image Gallery & Preset Adder]: Inside `#productEditorModal`, select a preset in `#editProdPresetAdd` and click `+ Add` (`addPresetImageToEditGallery()`). Verify a new thumbnail appears in `#editProdGalleryPreview` and `#editProdMediaCountBadge` increments.
- TC-127 [Product Editor Modal — Set Primary Cover & Remove Gallery Image]: In `#editProdGalleryPreview`, click a secondary thumbnail (`setPrimaryEditGalleryImage(1)`) to make it the `PRIMARY` cover, then click `✕` (`removeEditGalleryImage(1)`) on a thumbnail to remove it.
- TC-128 [Product Editor Modal — Product Video URL & Caption]: Enter a video URL in `#editProdVideoUrl` and caption in `#editProdVideoCaption` (or upload via `#editProdVideoUpload`) and verify `#editProdMediaCountBadge` displays `"Video Attached"`.
- TC-129 [Product Editor Modal — Description, Specs, SEO, GEO & Collection Tags]: Fill `#editProdDescription`, `#editProdSpecs`, `#editProdSeoKeywords`, `#editProdSeoDesc`, and `#editProdGeoKeywords`, check `#editProdDeal`, `#editProdNew`, and `#editProdJfy`, and submit `#masterProductEditForm`.
- TC-130 [Verify Edited/Created Product Live on Storefront]: Switch to the Customer Storefront and verify the saved product's updated price, discount badge, gallery images, variants, description, specs, and SEO/GEO metadata appear on Home, Catalog, and PDP.

------------------------------------------------------------------------
SUITE 13: ERP MODULE 3 — INVENTORY & STOCK CONTROL
------------------------------------------------------------------------
- TC-131 [Inventory View — No Top Pink Claw Clip Banner]: Open `#view-inventory` and verify `#clawClipExampleBannerText` and its parent callout card are completely removed.
- TC-132 [Inventory KPI Grid]: Verify `#inventoryKpiGrid` renders 4 KPI cards (`Available Stock to Sell`, `Reserved & Sold Units`, `Inventory Landed Valuation`, and `Low-Stock Reorder Alerts`).
- TC-133 [Record Stock Movement — Receive & Direct Sale]: In `#stockAdjustForm`, select a product in `#adjProductId` (verifying `populateStockAdjustDefaults()` updates `#adjVariantName` and `#adjLandedCost`), choose `RECEIVE` in `#adjType`, enter `#adjQty = 6`, `#adjReason = "E2E GRN Check"`, and submit. Then repeat with `SOLD` (`#adjQty = 2`). Verify `available` and `sold` counts update in `#inventoryValuationBody`.
- TC-134 [Record Stock Movement — Return Restock, Damage & Reorder Threshold]: In `#stockAdjustForm`, test `RETURN_RESTOCK` (`+ Available, + Returned`), `DAMAGE` (`- Available, + Damaged`), and `SET_THRESHOLD` (updates `reorderThreshold`). Verify all columns in `#inventoryValuationBody` reflect the exact changes.
- TC-135 [Stock Movement Audit Trail — Date Picker & Quick Date Select Filter]: In `#inventoryMovementLog`, select a recorded date in `#auditFilterDateSelect` (`handleAuditDateSelectChange`) and in `#auditFilterDate` (`handleAuditDatePickerChange`). Verify `#auditDateMatchBadge` and `#inventoryMovementLog` filter to movements on that date.
- TC-136 [Stock Movement Audit Trail — Product Filter & Reset]: Select a product in `#auditFilterProduct` (`renderAuditTrailLog()`) and verify only movements for that product appear. Click `Reset` (`resetAuditTrailFilters()`) and verify all filters reset to `"ALL"`.
- TC-137 [SKU & Variant Stock Control Matrix Health Filter]: Change `#invFilterHealth` through `ALL`, `LOW`, `RESERVED`, and `DAMAGED` and verify `#inventoryValuationBody` filters rows while keeping the frozen `<thead>` column names visible.

------------------------------------------------------------------------
SUITE 14: ERP MODULE 4 — SUPPLIERS, PO, 3-STEP RECEIVING & PREORDERS
------------------------------------------------------------------------
- TC-138 [Purchase Orders & Receiving Table (`#shipmentsTableBody`)]: Open `#view-procurement` (`Purchase Orders & GRN`). Verify `#procurementKpiGrid` and `#shipmentsTableBody` render with visible frozen `<thead>` column names (`PO ID & Date`, `Supplier & Lead Time`, `Product & SKU`, `MOQ`, `Ordered / Received / Outst.`, `Purchase / Landed Cost`, `Total PO Value`, `Status`, `Action`).
- TC-139 [Supplier Directory — Select Existing Supplier to Populate Paid & Due]: Switch to `Supplier Directory` (`[data-proc-tab="suppliers"]`). Select `SUP-02` in `#supEditSelect` (`populateSupplierFormForEdit`) or click `💰 Paid / Due` (`loadSupplierForBalanceEntry('SUP-02')`) in `#suppliersTableBody`. Verify `#addSupplierForm` populates the supplier's name, contact, phone, MOQ, lead days, `#supPaidAmount`, and `#supPayableAmount`.
- TC-140 [Supplier Directory — Set vs. Add Balance Mode & Responsible Staff]: In `#addSupplierForm`, test `#supBalanceMode` (`SET` vs. `ADD`), enter `#supPaidAmount`, `#supPayableAmount`, `#supAdvanceAccount`, `#supAdvanceStaff`, `#supDueAccount`, `#supDueStaff`, and `#supPaymentNote`, and submit. Verify `#suppliersTableBody` and `ERP_DB.paymentsLog` update, then test `Reset` (`resetSupplierBalanceForm()`).
- TC-141 [Supplier Directory — Quick Pay Due Modal & Defect Claim Modal]: In `#suppliersTableBody`, click `paySupplierBalance('SUP-02')` (if shown) or `⚠️ Defect Claim` (`logSupplierDefectClaim('SUP-02')`). Submit the modal in `#genericModalBackdrop` and verify the supplier record updates.
- TC-142 [New Supplier Product Entry — Live Margin & PO Due Calculators]: Switch to `New Supplier Product` (`[data-proc-tab="entry"]`). Change `#spOrderedQty`, `#spCostPrice`, `#spWholesalePrice`, `#spRetailPrice`, and `#spAdvancePaid`. Verify `updateSpMarginPreview()` and `updateSpPoDueFromAdvance()` automatically recalculate `#spWholesaleMarginHint`, `#spRetailMarginHint`, `#spTotalPoValue`, and `#spPayableDue`.
- TC-143 [New Supplier Product Entry — Rich-Text Toolbar Buttons]: Click the `.rich-tool-btn` formatting buttons above `#spDescription` and `#spSpecification` (`insertTextFormat('spDescription', '• ')`, `insertTextFormat('spSpecification', '
• Material: ')`, etc.) and verify the formatted text is inserted into the textareas.
- TC-144 [Step 1 of 3-Step Workflow — Save Supplier Product as Unpublished Draft]: Fill `#supplierProductEntryForm` (including `#spTitle`, `#spSku`, `#spCategory`, `#spSubcategory`, `#spOrderedQty = 20`, `#spCostPrice`, `#spWholesalePrice`, `#spRetailPrice`, `#spAdvancePaid`, `#spPayableDue`, `#spAdvanceAccount`, `#spAdvanceStaff`, `#spDueAccount`, `#spDueStaff`, `#spDescription`, `#spSpecification`, `#spSeoKeywords`, `#spSeoDescription`, `#spGeoKeywords`) and submit. Verify:
  1) The new product is saved with `isPublished: false` (`Draft`) and `available: 0`.
  2) The new product is NOT visible on the Customer Storefront.
  3) A new PO shipment with `orderedQty: 20`, `receivedQty: 0`, and `status: "PENDING_GRN"` is added to `ERP_DB.shipments`.
- TC-145 [Step 2 of 3-Step Workflow — Partial GRN Shipment Receiving]: Switch to `Purchase Orders & GRN` (`[data-proc-tab="shipments"]`) and click `✓ Receive Stock` (`openReceiveShipmentModal`) on the new PO. In `#receiveShipmentModal` (`#confirmGrnForm`), enter `#grnReceivedQty = 12` (out of `20` ordered) and `#grnDamagedQty = 1`, keep `#grnAutoPublishCheck` checked, and submit. Verify:
  1) The PO status becomes `"PARTIAL"` (`12 Rec / 8 Outst.`).
  2) The product's `available` stock becomes `12`, `damaged` becomes `1`, and `isPublished` becomes `true` (`Active`).
- TC-146 [Step 3 of 3-Step Workflow — Complete Remaining GRN & Verify on Storefront]: Click `✓ Receive Stock` again on the `"PARTIAL"` PO, receive the remaining `8` units, and submit `#confirmGrnForm`. Verify the PO status becomes `"RECEIVED"` (`0 Outst.`), product `available` stock becomes `20`, and switching to the Customer Storefront displays the published product ready for customer purchase.
- TC-147 [Preorders & Lead Times Subtab]: Switch to `Preorders & Lead Times` (`[data-proc-tab="preorders"]`). Verify `#preordersTableBody` renders with visible frozen `<thead>` column headers.
- TC-148 [Preorder Customer Notification Action]: In `#preordersTableBody`, click the action button (`notifyPreorderCustomer`) on a preorder row and verify the status/toast updates.
- TC-149 [Close Receive Shipment Modal (`✕`)]: Open `#receiveShipmentModal` and click `.erp-modal-cross-btn` (`closeReceiveShipmentModal()`); verify it closes cleanly.

------------------------------------------------------------------------
SUITE 15: ERP MODULE 5 — ORDERS, COURIER, RETURNS, POS & COMPACT A4 INVOICE
------------------------------------------------------------------------
- TC-150 [Order Pipeline KPI Strip & Filters]: Open `#view-orders` (`Order Pipeline & Dispatch`). Verify `#ordersKpiStrip` renders 5 KPI cards and test filtering `#ordersMasterTableBody` via `#orderSearchInput`, `#orderFilterStatus`, and `#orderFilterChannel`.
- TC-151 [Order Pipeline Inline Workflow Status & Payment Status Selectors]: In `#ordersMasterTableBody`, change an order's workflow status `<select>` (`updateOrderStatus`) and payment status `<select>` (`updateOrderPaymentStatus`). Verify stock reservations/sales and financial KPIs update immediately.
- TC-152 [Order Pipeline Courier Booking Modal (`bookCourierForOrder`)]: Click `🚚 Courier` (`bookCourierForOrder`) on an order row. In `#genericModalBackdrop`, select a courier (`#modalCourierName`), enter `#modalTrackingNum` and `#modalCourierOutcome`, and click `#modalConfirmBtn`. Verify the order's courier and tracking number update in `#ordersMasterTableBody`.
- TC-153 [Returns, Exchanges & Refunds Subtab (`#returnProcessForm`)]: Click `Returns, Exchanges & Refunds` (`[data-ord-tab="returns"]`). Select an order in `#retOrderId`, test `#retOutcomeType` (`Returned_Restock`, `Returned_Damaged`, `Exchange_Dispatched`, `Delivery_Failed`, `Refund_Issued`), enter `#retRefundAmount` and `#retInspectionNote`, and submit `#returnProcessForm`. Verify `#returnsExceptionsTableBody` and inventory counts update.
- TC-154 [Create Order (POS & Social) — Removed Invoice Workflow Box Check]: Click `Create Order (POS & Social)` (`[data-ord-tab="pos"]`). Verify the removed `INVOICE WORKFLOW: 1. Preview Invoice (Modal) -> 2. Print Invoice` box is NOT inside `#staffOrderBuilderForm`.
- TC-155 [Create Order (POS & Social) — CRM Auto-Fill & Retail vs. Wholesale Tier]: In `#staffOrderBuilderForm`, select an existing customer in `#posCustomerSelect` (`populatePosCustomerFromCrm()`) and verify `#posCustName`, `#posCustPhone`, and `#posCustAddress` auto-fill. Switch `#posPriceTier` between `RETAIL` and `WHOLESALE` and verify `#posTotalsSummaryBox` recalculates line item prices using `price` vs. `wholesalePrice`.
- TC-156 [Create Order (POS & Social) — Add/Remove Line Items & Discount]: Select a product in `#posItemProductSelect`, enter `#posItemVariant` and `#posItemQty = 2`, and click `#posAddItemBtn`. Verify the item appears in `#posCartItemsWrap`. Test removing an item (`removePosDraftItem`), add an item back, enter `#posDiscountInput = 100`, and verify `#posTotalsSummaryBox` updates.
- TC-157 [Create Order (POS & Social) — Submit & Auto-Open Invoice Modal]: Submit `#staffOrderBuilderForm`. Verify the new POS order is added to `ERP_DB.orders`, variant stock is reserved (`available` decremented, `reserved` incremented), and `#invoiceModal` opens automatically.
- TC-158 [A4 Printable Invoice — No Table Scrollbar & Visible Column Headers]: With `#invoiceModal` open (via POS submit or clicking `🧾 Invoice` / `openOrderInvoiceModal` on any order), inspect `.invoice-items-table` inside `#printableInvoiceSheet`:
  1) Verify `.invoice-items-table` is NOT wrapped in `.table-scroll-shell` and has NO `.table-top-scroll` horizontal scrollbar.
  2) Verify all 6 column headers (`#`, `Item Description & SKU`, `Variant (Colour / Size)`, `Qty`, `Unit Price`, `Line Total`) are visible (`visibility: "visible"`, `opacity: "1"`).
- TC-159 [A4 Printable Invoice — A4 Width (`210mm`)]: Inspect `#invoiceModal .erp-modal-dialog` and `#printableInvoiceSheet`. Verify `maxWidth` / `width` is `210mm` (`~793.7px` at 96 DPI).
- TC-160 [A4 Printable Invoice — Compact Layout With Zero Hollow Gap]: Inspect `#printableInvoiceSheet` via `getComputedStyle`. Verify `display === "block"` and `minHeight === "auto"` (not `297mm` with `justify-content: space-between`), and verify the vertical distance between the bottom of `.invoice-items-table` and the top of the totals/signature row is compact (`<= 45px`), leaving zero hollow gap in the middle of the page.
- TC-161 [A4 Printable Invoice — Zero Internal Company/Margin Info Disclosed]: Inspect `#printableInvoiceSheet.innerText`. Assert it does NOT contain `"Warehouse Packing & Exchange Note"`, `"Internal ERP Margin Check"`, `"Landed COGS"`, or `"Est. Net Contribution"`.
- TC-162 [A4 Printable Invoice — Strictly Two Modal Options (Print & Close)]: Inspect `#invoiceModal`. Verify:
  1) `.modal-header` contains ONLY `🖨 Print Invoice` (`printPreviewedInvoice()`) and `✕` (`Close`).
  2) There is NO `Load Sample Invoice` button in `.modal-header`, NO `STEP 1: INVOICE PREVIEW READY` banner inside `#invoiceModalBody`, and NO `.modal-footer` duplicate print button.

------------------------------------------------------------------------
SUITE 16: ERP MODULES 6 & 7 — CUSTOMER CRM & FINANCE / EXPENSES
------------------------------------------------------------------------
- TC-163 [CRM Customer Directory — Horizontal Top Form & Segment Filter]: Open `#view-crm` (`Customer Directory`). Verify `#crmCustomerForm` is positioned horizontally above `#crmCustomersTableBody`. Filter `#crmCustomersTableBody` via `#crmSegmentFilter` (`ALL`, `VIP`, `Repeat`, `New`, `Inactive`).
- TC-164 [CRM Edit Customer into Top Form & Save]: Click `✎ Edit` (`loadCustomerIntoCrmForm`) on a row in `#crmCustomersTableBody`. Verify `#crmName`, `#crmPhone`, `#crmEmail`, `#crmTier`, `#crmPoints`, `#crmAddress`, `#crmNotes`, and consent checkboxes (`#crmConsentSms`, `#crmConsentWa`, `#crmConsentEmail`) populate in `#crmCustomerForm`. Modify `#crmPoints` and submit; verify the table and Storefront reward points update.
- TC-165 [CRM Customer Reviews Moderation]: Switch to `Customer Reviews` (`[data-crm-tab="reviews"]`). Click `✓ Approve` / `Unapprove` (`toggleReviewApproval`) on a review row in `#crmReviewsTableBody` and verify its status badge toggles between `Approved` and `Pending Approval`.
- TC-166 [CRM Loyalty & Referrals Bonus Points]: Switch to `Loyalty & Referrals` (`[data-crm-tab="loyalty"]`). Click `+100 Bonus Pts` (`awardBonusPoints`) on a customer card in `#crmLoyaltySummaryBody` and verify their points balance increases by `100`.
- TC-167 [Finance — Courier COD Settlement Single & Bulk]: Open `#view-finance` (`COD & Payment Settlement`). Verify `#financeDistinctionKpis` renders 5 KPI cards. Click `Settle COD` (`reconcileSingleOrderCod`) on a row in `#codReconciliationTableBody` and click `✓ Settle All Collected Courier COD to Bank` (`settleAllCollectedCod()`). Verify `codSettled` becomes `true`, payment status becomes `Paid`, and bank balance increases.
- TC-168 [Finance — Order Profit & Margin Breakdown]: Switch to `Order Profit & Margin` (`[data-fin-tab="contribution"]`). Verify `#orderContributionTableBody` renders with visible frozen `<thead>` column headers and accurate gross profit / net contribution calculations per order.
- TC-169 [Finance — Record Operating Expense]: Switch to `Operating Expenses` (`[data-fin-tab="expenses"]`). Fill `#addExpenseForm` (`#expTitle`, `#expDetails`, `#expCategory`, `#expAmount`, `#expResponsibleStaff`, `#expAccount`) and submit. Verify the new expense appears at the top of `#expensesTableBody`, deducts from the selected account balance, updates Net Profit KPIs, and appears in Working Team Expense Reports.

------------------------------------------------------------------------
SUITE 17: ERP MODULES 8 & 9 — PROMOTIONS / CMS & WORKING TEAM LEDGERS
------------------------------------------------------------------------
- TC-170 [Promotions & CMS — Create & Toggle Coupon]: Open `#view-marketing_cms` (`Coupons & Campaigns`). Submit `#createCouponForm` with `#cpnCode = "TEHZIB20"`, `#cpnDiscountPct = 20`, `#cpnMinOrder = 1000`, `#cpnUsageLimit = 50`. Verify `"TEHZIB20"` appears in `#couponsCampaignsTableBody`, test `toggleCouponStatus`, and verify `"TEHZIB20"` works on the Storefront Cart voucher input.
- TC-171 [Promotions & CMS — Hero Sliders Add, Edit & Delete]: Switch to `Hero Sliders` (`[data-cms-tab="sliders"]`). Click `✎ Edit` (`loadSlideIntoEditor`) on a slide in `#cmsSlidersListContainer`, update `#cmsSlideTitle`, and submit `#cmsHeroSlideForm`. Test adding a new slide and deleting a slide (`deleteHeroSlide`), verifying live sync with the Storefront hero carousel.
- TC-172 [Promotions & CMS — Brand Logo Upload & Reset Default]: Switch to `Brand Logo & Footer CMS` (`[data-cms-tab="header_sections"]`). Test `#cmsBrandLogoForm` and click `Reset Default` (`resetDefaultBrandLogos()`), verifying `[data-brand-logo]` and `#brandLogoImg` remain intact.
- TC-173 [Promotions & CMS — Homepage Section Headings & Footer Info Form]: Submit `#cmsHeaderSectionsForm` (updating `#cmsSecTrendTitle`, `#cmsSecNewTitle`, `#cmsSecJfyTitle`, `#cmsNewsletterTitle`, `#cmsNewsletterSub`) and `#cmsFooterForm` (updating `#cmsFooterBio`, `#cmsFooterAddress`, `#cmsFooterPhone`, `#cmsFooterEmail`, `#cmsFooterCopyright`, and social URLs). Switch to the Storefront and verify all updated titles and footer fields reflect live.
- TC-174 [Promotions & CMS — Dynamic Footer Columns CRUD (`#cmsFooterSectionColForm`)]: In `Dynamic Footer Sections & Popup Info / Messages CMS`, create a new footer column via `#cmsFooterSectionColForm`, rename an existing column via `editFooterSectionColumn`, reset via `resetFooterSectionColForm()`, and delete the test column via `deleteFooterSectionColumn`. Verify `#storefrontFooterGrid` updates live on every action.
- TC-175 [Promotions & CMS — Dynamic Footer Links & Popup Messages CRUD (`#cmsFooterLinkItemForm`)]: Click `+ Add New Link / Info` (`prepareNewFooterItemInSection`), toggle `#cmsFooterItemType` (`toggleFooterItemTypeFields()`), add a new link with popup message via `#cmsFooterLinkItemForm`, test `✎ Edit Info / Msg` (`editFooterLinkItem`), test `👁 Preview Box` (`previewFooterInfoPopup`), and test `Delete` (`deleteFooterLinkItem`).
- TC-176 [Promotions & CMS — Multi-Channel Social Sync & Alerts]: Switch to `Social Sync & Alerts` (`[data-cms-tab="multichannel"]`). Click `↻ Sync All Channels Now` (`triggerMultiChannelSync()`) and verify `#multiChannelSyncCards` and `#emsNotificationsList` update.
- TC-177 [Working Team — Create/Edit Staff & Assign RBAC Module Accesses]: Open `#view-working_team` (`Staff & Role Access`). Fill `#workingTeamStaffForm` (`#wtStaffName`, `#wtStaffPhone`, `#wtStaffEmail`, `#wtStaffRole`, `#wtStaffDept`, `#wtStaffStatus`, and `#wtAccessCheckboxes`), submit, and verify `#wtStaffTableBody` and all Responsible Staff dropdowns across the ERP update. Test `✎ Edit` (`editWorkingTeamStaff`) and `Reset` (`resetWorkingTeamStaffForm()`).
- TC-178 [Working Team — Expense Report by Responsible Staff]: Switch to `Team Expense Report` (`[data-wt-tab="expenses"]`). Click a staff summary card in `#wtStaffExpenseSummaryCards` (`filterTeamReportByStaff`) and test `#wtExpFilterStaff` and `#wtExpFilterCategory`. Verify `#wtExpenseReportTableBody` filters accurately with visible frozen `<thead>` column headers.
- TC-179 [Working Team — Record Supplier Payment & Payment Report Filters]: Switch to `Team Payment Report` (`[data-wt-tab="payments"]`). Submit `#wtRecordPaymentForm` (`#wtPaySupplier`, `#wtPayType`, `#wtPayAmount`, `#wtPayAccount`, `#wtPayAdvStaff`, `#wtPayDueStaff`, `#wtPayDetails`). Verify the payment appears in `#wtPaymentReportTableBody`, updates supplier paid/payable balances, and filters cleanly via `#wtPayFilterStaff` and `#wtPayFilterType`.

------------------------------------------------------------------------
SUITE 18: DYNAMIC CUSTOM OPTIONS (`+ NEW`), SECURITY, EDGE CASES & PERSISTENCE
------------------------------------------------------------------------
- TC-180 [Inline `+ New` Custom Option Creator Across All 6 Option Types]: Test `openCreateCustomOptionModal` (and selecting `➕ + Create New...` via `handleDynamicSelectAddNew`) for all 6 types: `expenseCategory`, `account` (Bank/bKash), `staff` (Responsible Staff), `staffRole`, `supplierCategory`, and `paymentTerms`. Verify each newly created option is saved in `ERP_DB`, populated into all matching `<select>` elements, and selected automatically.
- TC-181 [Mobile ERP Sidebar Toggle (`<840px`)]: In Backend Admin mode at `390x844`, click `#mobileSidebarToggleBtn` (`☰`). Verify `#erpSidebar` toggles `.mobile-open` and allows switching between ERP modules on mobile.
- TC-182 [Modal Escape Key & Backdrop Click Dismissal]: Verify that pressing `Escape` or clicking the backdrop overlay closes `#authModalBackdrop`, `#genericModalBackdrop`, `#productEditorModal`, `#receiveShipmentModal`, and `#invoiceModal`.
- TC-183 [Input Validation & Special Character / XSS Safe Rendering]: Enter product titles, customer names, and expense notes containing characters like `&`, `<`, `>`, `"`, and `'` (e.g., `"Mom & Kids < Luxe '27 >"`). Verify they render safely without breaking DOM markup or executing scripts.
- TC-184 [Full LocalStorage / Database Persistence Across Reload]: Reload the browser (`page.reload()`) and verify that all newly created products, categories, orders, stock movements, expenses, staff members, and custom dropdown options persist intact.
- TC-185 [Admin Sign Out & Re-Authentication Cycle]: Click `#sidebarLogoutBtn` (`Sign Out`) in `#erpSidebar`. Verify `#erpAppShell` hides and `#authGateScreen` appears; log back in and verify all ERP modules render cleanly with zero console or network errors.

========================================================================
PART 3: FINAL E2E VERIFICATION REPORT
========================================================================
After executing all 185 test cases via Playwright MCP and fixing any discovered issues:
1. Run a final verification pass confirming `185 / 185` test cases pass with `0` console errors and `0` network errors.
2. Output a structured summary listing every bug found and fixed during the E2E run.
```
