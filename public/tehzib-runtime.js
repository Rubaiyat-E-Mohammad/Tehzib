// Tehzib Full-Stack Storefront + Enterprise ERP Runtime Controller
const IMG = {
  logo_light: "/seed/logo_light.png",
  logo_dark: "/seed/logo_dark.png",
  hero: "/seed/hero.jpg",
  silk_blouse: "/seed/silk_blouse.jpg",
  clothing_set: "/seed/clothing_set.jpg",
  heels: "/seed/heels.jpg",
  cream_bag: "/seed/cream_bag.jpg",
  champagne_bag: "/seed/champagne_bag.jpg",
  watch: "/seed/watch.jpg",
  necklace: "/seed/necklace.jpg",
  clips: "/seed/clips.jpg",
  mom_kids: "/seed/mom_kids.jpg",
  kids_backpack: "/seed/kids_backpack.jpg",
  acrylic_org: "/seed/acrylic_org.jpg",
  jewelry_box: "/seed/jewelry_box.jpg",
  desk_caddy: "/seed/desk_caddy.jpg",
  bento_baskets: "/seed/bento_baskets.jpg",
  snowglobe: "/seed/snowglobe.jpg",
  giftbox: "/seed/giftbox.jpg",
  vase: "/seed/vase.jpg"
};
    document.querySelectorAll("[data-asset-src]").forEach(el => {
      const k = el.getAttribute("data-asset-src");
      if (IMG[k]) el.src = IMG[k];
    });

    const TEHZIB_LOGOS = {
      light: IMG.logo_light,
      dark: IMG.logo_dark
    };

    const DEFAULT_PRODUCTS = [
      {
        id: "p1",
        subcategory: "Satin Blouses & Tops",
        title: "Blush Satin Wrap Blouse",
        category: "Clothing",
        price: 2650,
        oldPrice: 3200,
        discount: "-17%",
        isDeal: true,
        available: 14,
        sold: 36,
        stockStatus: "IN STOCK",
        rating: 4.9,
        reviewsCount: 128,
        isFeatured: true,
        isNew: false,
        isJustForYou: true,
        specialTab: "Best Sellers",
        variants: ["XS", "S", "M", "L", "XL"],
        image: IMG.silk_blouse,
        gallery: [IMG.silk_blouse, IMG.clothing_set, IMG.necklace, IMG.cream_bag],
        description: "Tailored from lustrous mulberry-touch satin in Tehzib's signature Parisian Blush tone. Features a draped wrap bodice, pearl-buttoned bishop sleeves, and a breathable lining suited for Dhaka's festive evenings and elevated workwear.",
        specs: "Fabric: 100% Silky Matte Satin • Fit: Relaxed Wrap Fit • Care: Gentle hand wash or dry clean • Origin: Crafted in Dhaka Studio"
      },
      {
        id: "p2",
        subcategory: "Co-Ord Sets",
        title: "Cashmere-Touch Linen Co-Ord Set",
        category: "Clothing",
        price: 3450,
        oldPrice: 4100,
        discount: "-16%",
        isDeal: true,
        available: 9,
        sold: 41,
        stockStatus: "IN STOCK",
        rating: 4.8,
        reviewsCount: 94,
        isFeatured: true,
        isNew: true,
        isJustForYou: false,
        specialTab: "Best Sellers",
        variants: ["S", "M", "L", "XL"],
        image: IMG.clothing_set,
        gallery: [IMG.clothing_set, IMG.silk_blouse, IMG.heels, IMG.champagne_bag],
        description: "Contemporary two-piece co-ord set featuring a longline architectural tunic and wide-leg pleated trousers in warm cashmere beige. Designed for effortless day-to-dinner sophistication.",
        specs: "Fabric: Cotton-Linen Blend • Pieces: 2 (Tunic + Wide-Leg Trouser) • Trouser Waist: Elasticated back with side zip"
      },
      {
        id: "p3",
        subcategory: "Slingback Heels",
        title: "Blush Slingback Kitten Heels",
        category: "Shoes",
        price: 2950,
        oldPrice: 3600,
        discount: "-18%",
        isDeal: true,
        available: 11,
        sold: 49,
        stockStatus: "IN STOCK",
        rating: 4.9,
        reviewsCount: 156,
        isFeatured: true,
        isNew: false,
        isJustForYou: true,
        specialTab: "Shoes & Fashion",
        variants: ["EU 36", "EU 37", "EU 38", "EU 39", "EU 40"],
        image: IMG.heels,
        gallery: [IMG.heels, IMG.cream_bag, IMG.champagne_bag, IMG.silk_blouse],
        description: "Hand-crafted pointed-toe slingback kitten heels with a double-cushioned memory foam footbed and champagne buckle hardware. Inspired by contemporary Bangladeshi footwear ateliers.",
        specs: "Upper: Vegan Nappa Leather • Heel Height: 2.2 inches (5.5 cm) • Insole: Plush padded latex • Sole: Non-slip rubber"
      },
      {
        id: "p4",
        subcategory: "Crossbody Bags",
        title: "Quilted Cream Crossbody Bag",
        category: "Fashion",
        price: 2850,
        oldPrice: 3500,
        discount: "-19%",
        isDeal: true,
        available: 16,
        sold: 54,
        stockStatus: "IN STOCK",
        rating: 4.9,
        reviewsCount: 210,
        isFeatured: true,
        isNew: false,
        isJustForYou: true,
        specialTab: "Best Sellers",
        variants: ["Alabaster Cream", "Blush Rose", "Obsidian Black"],
        image: IMG.cream_bag,
        gallery: [IMG.cream_bag, IMG.champagne_bag, IMG.watch, IMG.heels],
        description: "Diamond-quilted crossbody bag in soft alabaster cream with an interwoven champagne gold chain strap, magnetic turn-lock closure, and dual interior compartments.",
        specs: "Dimensions: 23cm x 15cm x 7cm • Hardware: Brushed Champagne Gold • Strap: Convertible shoulder to crossbody"
      },
      {
        id: "p5",
        subcategory: "Evening Clutches",
        title: "Champagne Top-Handle Evening Clutch",
        category: "Fashion",
        price: 3250,
        oldPrice: null,
        discount: null,
        isDeal: false,
        available: 22,
        sold: 18,
        stockStatus: "IN STOCK",
        rating: 4.8,
        reviewsCount: 87,
        isFeatured: false,
        isNew: true,
        isJustForYou: true,
        specialTab: "Shoes & Fashion",
        variants: ["Champagne Gold", "Rose Quartz"],
        image: IMG.champagne_bag,
        gallery: [IMG.champagne_bag, IMG.cream_bag, IMG.necklace, IMG.heels],
        description: "Structured top-handle evening bag in metallic champagne satin-leather with a detachable chain strap. Fits smartphones, compact powder, and evening essentials effortlessly.",
        specs: "Dimensions: 21cm x 13cm x 6cm • Lining: Velvet micro-suede • Closure: Sculpted clasp"
      },
      {
        id: "p6",
        subcategory: "Minimalist Watches",
        title: "Rose-Gold Mesh Minimalist Watch",
        category: "Fashion",
        price: 3650,
        oldPrice: 4400,
        discount: "-17%",
        isDeal: true,
        available: 8,
        sold: 32,
        stockStatus: "LOW STOCK",
        rating: 4.9,
        reviewsCount: 112,
        isFeatured: true,
        isNew: true,
        isJustForYou: false,
        specialTab: "Shoes & Fashion",
        variants: ["32mm Rose Gold", "28mm Champagne"],
        image: IMG.watch,
        gallery: [IMG.watch, IMG.necklace, IMG.jewelry_box, IMG.champagne_bag],
        description: "Ultra-slim 32mm timepiece featuring a mother-of-pearl sunray dial, Japanese quartz movement, and an adjustable rose-gold Milanese mesh strap.",
        specs: "Case Diameter: 32mm • Movement: Japanese Quartz • Water Resistance: 3 ATM • Warranty: 1 Year"
      },
      {
        id: "p7",
        subcategory: "18K Plated Jewellery",
        title: "18K Gold-Plated Layered Necklace",
        category: "Accessories",
        price: 1450,
        oldPrice: null,
        discount: null,
        isDeal: false,
        available: 30,
        sold: 65,
        stockStatus: "IN STOCK",
        rating: 4.8,
        reviewsCount: 143,
        isFeatured: false,
        isNew: true,
        isJustForYou: true,
        specialTab: "Accessories",
        variants: ["18K Rose Gold", "18K Yellow Gold"],
        image: IMG.necklace,
        gallery: [IMG.necklace, IMG.jewelry_box, IMG.clips, IMG.watch],
        description: "Waterproof, tarnish-free 316L stainless steel double-layered coin and solitaire pendant necklace plated in 18K gold. Hypoallergenic for everyday wear.",
        specs: "Material: 316L Stainless Steel + 18K PVD Plating • Length: 40cm + 5cm extender • Tarnish-Resistant: Yes"
      },
      {
        id: "p8",
        subcategory: "Hair Claws & Clips",
        title: "Pearl & Tortoiseshell Hair Claw Set (4 Pcs)",
        category: "Accessories",
        price: 680,
        oldPrice: null,
        discount: null,
        isDeal: false,
        available: 45,
        sold: 120,
        stockStatus: "IN STOCK",
        rating: 4.7,
        reviewsCount: 198,
        isFeatured: false,
        isNew: false,
        isJustForYou: true,
        specialTab: "Accessories",
        variants: ["4-Piece Curated Set"],
        image: IMG.clips,
        gallery: [IMG.clips, IMG.necklace, IMG.acrylic_org, IMG.jewelry_box],
        description: "Set of four heavyweight cellulose acetate hair claws adorned with luminous faux pearls and blush tortoiseshell marbling. Strong spring grip for thick hair.",
        specs: "Quantity: 4 Clips per Box • Material: Eco-friendly Cellulose Acetate & Pearl • Grip: Reinforced alloy spring"
      },
      {
        id: "p9",
        subcategory: "Matching Twin Sets",
        title: "Mommy & Me Matching Cable-Knit Set",
        category: "Mom & Kids",
        price: 3950,
        oldPrice: 4600,
        discount: "-14%",
        isDeal: false,
        available: 12,
        sold: 29,
        stockStatus: "IN STOCK",
        rating: 5.0,
        reviewsCount: 76,
        isFeatured: false,
        isNew: true,
        isJustForYou: false,
        specialTab: "Mom & Kids",
        variants: ["Mom M + Kid 3-4Y", "Mom L + Kid 5-6Y", "Mom S + Kid 1-2Y"],
        image: IMG.mom_kids,
        gallery: [IMG.mom_kids, IMG.kids_backpack, IMG.bento_baskets, IMG.giftbox],
        description: "Heartwarming twin capsule featuring a soft combed-cotton cable-knit cardigan for Mom and a matching knit co-ord for little ones in warm oatmeal and blush.",
        specs: "Material: 100% Organic Combed Cotton • Includes: Adult Knit Top + Child Knit Set • Hypoallergenic & Breathable"
      },
      {
        id: "p10",
        subcategory: "Kids Mini Backpacks",
        title: "Little Explorer Quilted Mini Backpack",
        category: "Mom & Kids",
        price: 1650,
        oldPrice: null,
        discount: null,
        isDeal: false,
        available: 19,
        sold: 44,
        stockStatus: "IN STOCK",
        rating: 4.8,
        reviewsCount: 64,
        isFeatured: false,
        isNew: false,
        isJustForYou: false,
        specialTab: "Mom & Kids",
        variants: ["Blush Pink", "Warm Cream"],
        image: IMG.kids_backpack,
        gallery: [IMG.kids_backpack, IMG.mom_kids, IMG.snowglobe, IMG.bento_baskets],
        description: "Featherlight quilted nursery and preschool backpack with padded adjustable straps, insulated bottle pocket, and wipe-clean lining.",
        specs: "Dimensions: 26cm x 22cm x 11cm • Weight: 280g • Water-Resistant Nylon & Cotton Quilting"
      },
      {
        id: "p11",
        subcategory: "Vanity Organizers",
        title: "Velvet Travel Jewellery Box",
        category: "Accessories",
        price: 1450,
        oldPrice: null,
        discount: null,
        isDeal: false,
        available: 6,
        sold: 82,
        stockStatus: "LOW STOCK",
        rating: 4.9,
        reviewsCount: 164,
        isFeatured: false,
        isNew: false,
        isJustForYou: false,
        specialTab: "Accessories",
        variants: ["Parisian Blush", "Cashmere Ivory"],
        image: IMG.jewelry_box,
        gallery: [IMG.jewelry_box, IMG.acrylic_org, IMG.necklace, IMG.clips],
        description: "Plush velvet jewellery organizer case with dedicated ring rolls, earring grid, necklace hooks, and a built-in vanity mirror.",
        specs: "Dimensions: 16cm x 11cm x 5.5cm • Exterior: Fine Velvet • Hardware: Rose-gold zipper"
      },
      {
        id: "p12",
        subcategory: "Vanity Organizers",
        title: "Crystal Acrylic Vanity Organizer",
        category: "Accessories",
        price: 1850,
        oldPrice: null,
        discount: null,
        isDeal: false,
        available: 24,
        sold: 51,
        stockStatus: "IN STOCK",
        rating: 4.8,
        reviewsCount: 92,
        isFeatured: false,
        isNew: false,
        isJustForYou: false,
        specialTab: "Accessories",
        variants: ["Large Dustproof Tier"],
        image: IMG.acrylic_org,
        gallery: [IMG.acrylic_org, IMG.jewelry_box, IMG.desk_caddy, IMG.vase],
        description: "Dustproof dome-top skincare and fragrance organizer with smooth-gliding drawers for lipsticks, serums, and palettes.",
        specs: "Material: High-Clarity PMMA Acrylic • Drawers: 3 Tiered Compartments • Water-Washable"
      },
      {
        id: "p13",
        subcategory: "Block Heel Mules",
        title: "Champagne Pearl-Strap Block Mules",
        category: "Shoes",
        price: 2750,
        oldPrice: null,
        discount: null,
        isDeal: false,
        available: 15,
        sold: 38,
        stockStatus: "IN STOCK",
        rating: 4.8,
        reviewsCount: 73,
        isFeatured: false,
        isNew: true,
        isJustForYou: false,
        specialTab: "Shoes & Fashion",
        variants: ["EU 36", "EU 37", "EU 38", "EU 39", "EU 40"],
        image: IMG.heels,
        gallery: [IMG.heels, IMG.champagne_bag, IMG.cream_bag, IMG.silk_blouse],
        description: "Effortless slip-on block heel mules featuring a luminous pearl-embellished strap and stable 2-inch architectural heel.",
        specs: "Heel Height: 2.0 inches • Upper: Satin & Pearl Strap • Footbed: Double-padded micro-suede"
      },
      {
        id: "p14",
        subcategory: "Quilted Ballet Flats",
        title: "Quilted Nappa Ballet Flats",
        category: "Shoes",
        price: 2250,
        oldPrice: null,
        discount: null,
        isDeal: false,
        available: 5,
        sold: 67,
        stockStatus: "LOW STOCK",
        rating: 4.9,
        reviewsCount: 109,
        isFeatured: false,
        isNew: false,
        isJustForYou: true,
        specialTab: "Best Sellers",
        variants: ["EU 36", "EU 37", "EU 38", "EU 39"],
        image: IMG.heels,
        gallery: [IMG.heels, IMG.cream_bag, IMG.clothing_set, IMG.silk_blouse],
        description: "Cloud-soft quilted everyday ballet flats with a delicate bow and flexible non-slip sole for all-day Dhaka commutes.",
        specs: "Heel: 0.5 inch flat • Upper: Quilted Vegan Nappa • Insole: Breathable cushioned arch support"
      },
      {
        id: "p15",
        subcategory: "Modest Luxe Kaftans",
        title: "Ivory Pleated Modest Luxe Kaftan",
        category: "Clothing",
        price: 3890,
        oldPrice: null,
        discount: null,
        isDeal: false,
        available: 18,
        sold: 27,
        stockStatus: "IN STOCK",
        rating: 4.9,
        reviewsCount: 61,
        isFeatured: false,
        isNew: false,
        isJustForYou: false,
        specialTab: "Best Sellers",
        variants: ["Free Size (Fits S-XL)", "Petite Length"],
        image: IMG.clothing_set,
        gallery: [IMG.clothing_set, IMG.silk_blouse, IMG.champagne_bag, IMG.necklace],
        description: "Flowing micro-pleated georgette kaftan with detachable self-tie belt and champagne thread embroidery along the cuffs.",
        specs: "Fabric: Premium Micro-Pleated Georgette • Inner Slip: Included • Length: 54 inches"
      },
      {
        id: "p16",
        subcategory: "Nursery Storage",
        title: "Pastel Nursery & Toy Storage Baskets (3 Pcs)",
        category: "Mom & Kids",
        price: 1150,
        oldPrice: null,
        discount: null,
        isDeal: false,
        available: 25,
        sold: 58,
        stockStatus: "IN STOCK",
        rating: 4.8,
        reviewsCount: 83,
        isFeatured: false,
        isNew: false,
        isJustForYou: false,
        specialTab: "Mom & Kids",
        variants: ["Blush & Cream Trio"],
        image: IMG.bento_baskets,
        gallery: [IMG.bento_baskets, IMG.mom_kids, IMG.kids_backpack, IMG.desk_caddy],
        description: "Set of three modular nursery and diaper-station organizer baskets with cut-out handles in pastel blush and cashmere.",
        specs: "Pieces: 3 Stackable Baskets • Material: BPA-Free Food-Grade PP • Wipe-Clean Design"
      },
      {
        id: "p17",
        subcategory: "Signature Gift Boxes",
        title: "Tehzib Signature Blush Keepsake Gift Box",
        category: "Accessories",
        price: 2150,
        oldPrice: null,
        discount: null,
        isDeal: false,
        available: 20,
        sold: 45,
        stockStatus: "IN STOCK",
        rating: 5.0,
        reviewsCount: 118,
        isFeatured: false,
        isNew: false,
        isJustForYou: false,
        specialTab: "Best Sellers",
        variants: ["Signature Gift Set"],
        image: IMG.giftbox,
        gallery: [IMG.giftbox, IMG.snowglobe, IMG.vase, IMG.jewelry_box],
        description: "Magnetic keepsake gift hamper containing a ceramic minimalist vase, pearl hair claw, scented soy candle, and handwritten card.",
        specs: "Box Type: Rigid Magnetic Ribbon Box • Includes: 4 Curated Lifestyle Pieces + Custom Card"
      }
    ];

    // ========================================================================
    // UNIFIED DYNAMIC DATABASE (STOREFRONT + ADMIN / STAFF BACKEND)
    // ========================================================================
    const DEFAULT_CATEGORIES_LIST = [
      {
        name: "Clothing",
        imgKey: "silk_blouse",
        subcategories: ["Satin Blouses & Tops", "Co-Ord Sets", "Modest Luxe Kaftans"]
      },
      {
        name: "Shoes",
        imgKey: "heels",
        subcategories: ["Slingback Heels", "Block Heel Mules", "Quilted Ballet Flats"]
      },
      {
        name: "Fashion",
        imgKey: "cream_bag",
        subcategories: ["Crossbody Bags", "Evening Clutches", "Minimalist Watches"]
      },
      {
        name: "Accessories",
        imgKey: "necklace",
        subcategories: ["18K Plated Jewellery", "Hair Claws & Clips", "Vanity Organizers", "Signature Gift Boxes"]
      },
      {
        name: "Mom & Kids",
        imgKey: "mom_kids",
        subcategories: ["Matching Twin Sets", "Kids Mini Backpacks", "Nursery Storage"]
      }
    ];

    const DEFAULT_HERO_SLIDES = [
      {
        id: "slide-1",
        tag: "Contemporary Dhaka Edit",
        title: "Sleek Everyday Luxury, Curated for Her",
        subtitle: "Discover draped satin clothing, sculpted heels, quilted handbags, 18K jewellery, and charming mom & kids essentials crafted for modern living.",
        ctaText: "Shop Collection →",
        targetCat: "All",
        secondaryText: "Explore Fashion Bags",
        secondaryCat: "Fashion",
        bgImgKey: "hero",
        showcaseProductId: "p5"
      },
      {
        id: "slide-2",
        tag: "Satin & Modest Couture",
        title: "Effortless Draped Silhouettes & Co-Ord Sets",
        subtitle: "Tailored from lustrous mulberry-touch satin and breathable cashmere-blend knits in Tehzib's signature Parisian Blush & Warm Ivory palette.",
        ctaText: "Explore Clothing →",
        targetCat: "Clothing",
        secondaryText: "",
        secondaryCat: "",
        bgImgKey: "clothing_set",
        showcaseProductId: "p1"
      },
      {
        id: "slide-3",
        tag: "Sculpted Footwear Edit",
        title: "Statement Slingbacks & Pearl-Strap Mules",
        subtitle: "Step out in architectural heels, double-padded satin footbeds, and handcrafted evening clutches designed for Dhaka soirées.",
        ctaText: "Shop Shoes & Heels →",
        targetCat: "Shoes",
        secondaryText: "",
        secondaryCat: "",
        bgImgKey: "heels",
        showcaseProductId: "p3"
      },
      {
        id: "slide-4",
        tag: "Little Ones & Fine Adornments",
        title: "Matching Twin Sets & 18K Vermeil Jewellery",
        subtitle: "Celebrate everyday moments with soft combed-cotton Mom & Kids knitwear, quilted mini backpacks, and tarnish-free rose-gold keepsakes.",
        ctaText: "Shop Mom & Kids →",
        targetCat: "Mom & Kids",
        secondaryText: "Shop Jewellery",
        secondaryCat: "Accessories",
        bgImgKey: "mom_kids",
        showcaseProductId: "p9"
      }
    ];

    const DEFAULT_PROMO_BANNERS = [
      {
        eyebrow: "Sculpted Footwear & Bags",
        title: "The Statement Heels & Clutch Edit",
        sub: "Pointed slingbacks, pearl mules & quilted evening bags.",
        targetCat: "Shoes",
        imgKey: "heels"
      },
      {
        eyebrow: "Little Ones & Matching Sets",
        title: "Mom & Kids Capsule Collection",
        sub: "Matching cable-knit twin sets, mini backpacks & nursery baskets.",
        targetCat: "Mom & Kids",
        imgKey: "mom_kids"
      }
    ];

    const DEFAULT_VOUCHERS = [
      {
        code: "TEHZIB15",
        discountPct: 15,
        title: "15% Privilege Welcome Voucher",
        desc: "Valid on all Clothing, Shoes, Fashion, Accessories & Mom & Kids items."
      },
      {
        code: "SAVE15",
        discountPct: 15,
        title: "15% Seasonal Capsule Voucher",
        desc: "Applicable across all curated collections."
      },
      {
        code: "PRIV20",
        discountPct: 20,
        title: "20% Tehzib Privé Gold Tier Voucher",
        desc: "Exclusive 20% privilege discount for Privé members."
      }
    ];

    const DEFAULT_CUSTOMERS = [
      {
        id: "cust-1",
        name: "Nusrat Jahan",
        email: "nusrat.jahan@tehzib.com",
        phone: "+880 1711-948210",
        gender: "Female",
        dob: "14 October, 1997",
        address: "Uttara Sector 12, Dhaka, Bangladesh",
        rating: "4.9 / 5.0",
        points: 1450
      },
      {
        id: "cust-2",
        name: "Samira Rahman",
        email: "samira.rahman@dhakamail.com",
        phone: "+880 1819-332104",
        gender: "Female",
        dob: "22 March, 1995",
        address: "Gulshan Avenue, Road 71, Dhaka",
        rating: "5.0 / 5.0",
        points: 2300
      },
      {
        id: "cust-3",
        name: "Farzana Karim",
        email: "farzana.k@gmail.com",
        phone: "+880 1912-887410",
        gender: "Female",
        dob: "08 November, 1999",
        address: "Dhanmondi Road 9/A, Dhaka",
        rating: "4.8 / 5.0",
        points: 890
      }
    ];

    const DEFAULT_ORDERS = [
      {
        orderId: "#THZ-2026",
        customerName: "Nusrat Jahan",
        customerPhone: "+880 1711-948210",
        address: "Uttara Sector 12, Dhaka, Bangladesh",
        status: "To Receive",
        date: "Today • Expected within 24 hrs",
        items: "Blush Satin Wrap Blouse (M), Quilted Cream Crossbody Bag",
        lineItems: [
          { id: "p1", title: "Blush Satin Wrap Blouse", variant: "M", qty: 1, price: 2650 },
          { id: "p4", title: "Quilted Cream Crossbody Bag", variant: "Alabaster Cream", qty: 1, price: 2850 }
        ],
        deliveryMethod: "standard",
        paymentMethod: "Cash on Delivery",
        source: "Customer Storefront",
        total: 5500
      },
      {
        orderId: "#THZ-1988",
        customerName: "Nusrat Jahan",
        customerPhone: "+880 1711-948210",
        address: "Uttara Sector 12, Dhaka, Bangladesh",
        status: "To Review",
        date: "Delivered • 3 Days Ago",
        items: "18K Gold-Plated Layered Necklace, Pearl Hair Claw Set",
        lineItems: [
          { id: "p7", title: "18K Gold-Plated Layered Necklace", variant: "18K Rose Gold", qty: 1, price: 1450 },
          { id: "p8", title: "Pearl & Tortoiseshell Hair Claw Set (4 Pcs)", variant: "4-Piece Curated Set", qty: 1, price: 680 }
        ],
        deliveryMethod: "standard",
        paymentMethod: "bKash Mobile Wallet",
        source: "Staff POS (Uttara Studio)",
        total: 2130
      }
    ];

    const DEFAULT_NOTIFICATIONS = [
      {
        id: "n1",
        group: "Today",
        icon: "🚚",
        title: "Order #THZ-2026 Shipped!",
        body: "Great news! Your Tehzib package is on its way to Uttara Sector 12 and will arrive within 24 hours.",
        time: "NOW",
        isRecent: true,
        unread: true,
        targetView: "account"
      },
      {
        id: "n2",
        group: "Today",
        icon: "%",
        title: "Flash Sale: Up to 19% Off Signature Edit",
        body: "Enjoy exclusive savings on Blush Satin Wrap Blouses, Kitten Heels & Quilted Bags. Use code TEHZIB15 at checkout.",
        time: "2H AGO",
        isRecent: false,
        unread: true,
        targetView: "home"
      },
      {
        id: "n3",
        group: "Yesterday",
        icon: "🛡",
        title: "Security Login Verified",
        body: "Your Tehzib Privé account was signed in from Dhaka, Bangladesh.",
        time: "1D AGO",
        isRecent: false,
        unread: false,
        targetView: "account"
      },
      {
        id: "n4",
        group: "Yesterday",
        icon: "📦",
        title: "Package Delivered (#THZ-1988)",
        body: "Your order #THZ-1988 has been delivered to your doorstep in Dhaka. Enjoy your Tehzib pieces!",
        time: "1D AGO",
        isRecent: false,
        unread: false,
        targetView: "account"
      },
      {
        id: "n5",
        group: "Earlier",
        icon: "✦",
        title: "Tehzib Privé Reward Points Earned",
        body: "You've earned 500 Privé points! Redeem them with code TEHZIB15 on your next purchase.",
        time: "3D AGO",
        isRecent: false,
        unread: false,
        targetView: "cart"
      }
    ];

    const DEFAULT_STORE_SETTINGS = {
      promoText: "Complimentary Dhaka Delivery over ৳2,500 • Use Voucher",
      promoCode: "TEHZIB15",
      promoSuffix: "for 15% Off",
      conciergePhone: "+880 1711-889900",
      standardDeliveryFee: 60,
      address: "Uttara Sector 12, Dhaka, Bangladesh",
      copyright: "© 2027 Tehzib. All rights reserved."
    };

    const STORAGE_KEY = "TEHZIB_DYNAMIC_DB_V9";

    function createEmptyProfile() {
      return {
        id: "",
        name: "",
        email: "",
        phone: "",
        phoneNormalized: "",
        gender: "Not Specified",
        dob: "Not Specified",
        address: "",
        emailVerified: false,
        phoneVerified: false
      };
    }

    function isValidEmailAddress(raw) {
      const val = String(raw || "").trim().toLowerCase();
      return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val);
    }

    function parseBdPhone(raw) {
      if (!raw) return null;
      const cleaned = String(raw).replace(/[\s\-().]/g, "");
      let core10 = "";
      if (/^\+8801[3-9]\d{8}$/.test(cleaned)) {
        core10 = cleaned.slice(4);
      } else if (/^8801[3-9]\d{8}$/.test(cleaned)) {
        core10 = cleaned.slice(3);
      } else if (/^\+881[3-9]\d{8}$/.test(cleaned)) {
        core10 = cleaned.slice(3);
      } else if (/^881[3-9]\d{8}$/.test(cleaned)) {
        core10 = cleaned.slice(2);
      } else if (/^01[3-9]\d{8}$/.test(cleaned)) {
        core10 = cleaned.slice(1);
      } else if (/^1[3-9]\d{8}$/.test(cleaned)) {
        core10 = cleaned;
      } else {
        return null;
      }
      return {
        core10,
        normalized: "+880" + core10,
        formatted: `+880 ${core10.slice(0, 4)}-${core10.slice(4)}`,
        local: "0" + core10
      };
    }

    function cloneDeep(obj) {
      return JSON.parse(JSON.stringify(obj));
    }

    function resolveAssetUrl(keyOrDataUri) {
      if (!keyOrDataUri) return IMG.silk_blouse;
      if (IMG[keyOrDataUri]) return IMG[keyOrDataUri];
      return keyOrDataUri;
    }

    function findAssetKeyForUrl(url) {
      for (const k of Object.keys(IMG)) {
        if (IMG[k] === url) return k;
      }
      return "silk_blouse";
    }

    const SEED_PRODUCTS = DEFAULT_PRODUCTS.map((p, idx) => {
      const imgKey = findAssetKeyForUrl(p.image);
      return {
        ...p,
        imageKey: imgKey,
        isNew: [0, 1, 4, 5, 8].includes(idx) ? true : Boolean(p.isNew),
        isJustForYou: [2, 3, 6, 7, 10].includes(idx) ? true : Boolean(p.isJustForYou)
      };
    });

    let PRODUCTS = [];

    const state = {
      appMode: "storefront",
      adminSection: "dashboard",
      adminOrderFilter: "All",
      adminProdSearch: "",
      adminProdCatFilter: "All",
      uploadedCustomImageDataUri: "",
      posSearch: "",
      posCart: [
        { id: "p1", variant: "M", qty: 1 },
        { id: "p3", variant: "EU 38", qty: 1 }
      ],
      auditLog: [
        { time: "Just Now", actor: "System Engine", action: "Initialized unified dynamic database connecting Storefront & Admin Panel." },
        { time: "Today", actor: "Staff POS (Uttara Studio)", action: "Synced 17 studio products, 5 categories, 4 hero slides, and active customer orders." }
      ],
      theme: "light",
      currentView: "home",
      catalogCategory: "All",
      catalogSubcategory: "All",
      catalogSort: "featured",
      isLoggedIn: false,
      currentCustomerId: "",
      registeredCustomers: [],
      pendingRedirect: null,
      pendingWishProductId: "",
      userRating: "—",
      rewardPoints: 0,
      searchQuery: "",
      specialTab: "Best Sellers",
      activeProductId: "p1",
      pdpGalleryIdx: 0,
      pdpVariant: "M",
      pdpQty: 1,
      pdpTab: "description",
      voucherApplied: false,
      appliedVoucherCode: "TEHZIB15",
      appliedVoucherPct: 15,
      deliveryMethod: "standard",
      deliveryFee: 60,
      paymentMethod: "Cash on Delivery",
      isEditingProfile: false,
      categoriesList: cloneDeep(DEFAULT_CATEGORIES_LIST),
      heroSlides: cloneDeep(DEFAULT_HERO_SLIDES),
      promoBanners: cloneDeep(DEFAULT_PROMO_BANNERS),
      vouchers: cloneDeep(DEFAULT_VOUCHERS),
      customers: [],
      storeSettings: cloneDeep(DEFAULT_STORE_SETTINGS),
      profile: createEmptyProfile(),
      cart: [],
      wishlist: [],
      wishlistSort: "recent",
      orders: [],
      notifications: []
    };

    function hydrateProducts(rawList) {
      return rawList.map(p => {
        const resolvedMain = p.customImageDataUri || resolveAssetUrl(p.imageKey) || p.image || IMG.silk_blouse;
        return {
          ...p,
          image: resolvedMain,
          gallery: [resolvedMain, IMG.clothing_set, IMG.necklace, IMG.cream_bag]
        };
      });
    }

    PRODUCTS = hydrateProducts(cloneDeep(SEED_PRODUCTS));

    function findCustomerByIdentifier(rawIdent) {
      const val = String(rawIdent || "").trim();
      if (!val) return null;
      const lower = val.toLowerCase();
      const parsedPhone = parseBdPhone(val);
      return state.registeredCustomers.find(c => {
        if (c.email && String(c.email).trim().toLowerCase() === lower) return true;
        if (parsedPhone) {
          const cPhone = parseBdPhone(c.phoneNormalized || c.phone);
          if (cPhone && cPhone.core10 === parsedPhone.core10) return true;
        }
        return false;
      }) || null;
    }

    function getErpDbSafe() {
      // ERP_DB is declared later with `let`; accessing it before initialization throws (TDZ).
      try {
        return ERP_DB || null;
      } catch (e) {
        return null;
      }
    }

    function syncCustomerRecordWithErpCrm(custRecord) {
      const erp = getErpDbSafe();
      if (!custRecord || !erp || !Array.isArray(erp.crmCustomers)) return;
      const existing = erp.crmCustomers.find(c =>
        c.id === custRecord.id ||
        (custRecord.email && c.email && c.email.toLowerCase() === custRecord.email.toLowerCase()) ||
        (custRecord.phoneNormalized && parseBdPhone(c.phone)?.core10 === parseBdPhone(custRecord.phoneNormalized)?.core10)
      );
      if (existing) {
        existing.name = custRecord.name;
        existing.email = custRecord.email || existing.email;
        existing.phone = custRecord.phone || existing.phone;
        existing.address = custRecord.address || existing.address;
        existing.points = Number(custRecord.points ?? existing.points ?? 500);
      } else {
        erp.crmCustomers.unshift({
          id: custRecord.id,
          name: custRecord.name,
          phone: custRecord.phone || "—",
          email: custRecord.email || "—",
          tier: "Privé Member",
          rating: 5.0,
          points: Number(custRecord.points ?? 500),
          ordersCount: Array.isArray(custRecord.orders) ? custRecord.orders.length : 0,
          completedOrders: 0,
          spend: 0,
          returnsCount: 0,
          failedCount: 0,
          address: custRecord.address || "Dhaka, Bangladesh",
          notes: `Verified Storefront Member (${custRecord.emailVerified ? "Email Verified" : ""}${custRecord.emailVerified && custRecord.phoneVerified ? " & " : ""}${custRecord.phoneVerified ? "BD Phone Verified" : ""})`,
          consent: { sms: Boolean(custRecord.phoneVerified), whatsapp: Boolean(custRecord.phoneVerified), email: Boolean(custRecord.emailVerified) },
          referralCode: (custRecord.name.split(" ")[0] || "THZ").toUpperCase() + "-THZ"
        });
      }
    }

    function syncActiveCustomerToRegistry() {
      if (!state.isLoggedIn || !state.currentCustomerId) return;
      const idx = state.registeredCustomers.findIndex(c => c.id === state.currentCustomerId);
      if (idx === -1) return;
      const parsedPh = parseBdPhone(state.profile.phone);
      const updated = {
        ...state.registeredCustomers[idx],
        name: state.profile.name,
        email: state.profile.email || "",
        phone: parsedPh ? parsedPh.formatted : (state.profile.phone || ""),
        phoneNormalized: parsedPh ? parsedPh.normalized : (state.profile.phoneNormalized || ""),
        gender: state.profile.gender || "Not Specified",
        dob: state.profile.dob || "Not Specified",
        address: state.profile.address || "",
        avatar: state.profile.avatar || "",
        emailVerified: Boolean(state.profile.emailVerified),
        phoneVerified: Boolean(state.profile.phoneVerified),
        points: Number(state.rewardPoints || 0),
        rating: state.userRating || "5.0 / 5.0",
        cart: cloneDeep(state.cart),
        wishlist: [...state.wishlist],
        orders: cloneDeep(state.orders),
        notifications: cloneDeep(state.notifications)
      };
      state.registeredCustomers[idx] = updated;
      state.customers = state.registeredCustomers.map(c => ({
        id: c.id,
        name: c.name,
        email: c.email,
        phone: c.phone,
        gender: c.gender,
        dob: c.dob,
        address: c.address,
        rating: c.rating,
        points: c.points
      }));
      syncCustomerRecordWithErpCrm(updated);
    }

    function applyCustomerSession(custRecord, options = {}) {
      if (!custRecord) return;
      const guestCart = Array.isArray(state.cart) ? cloneDeep(state.cart) : [];
      const savedCart = Array.isArray(custRecord.cart) ? cloneDeep(custRecord.cart) : [];
      const mergedCart = [...savedCart];
      guestCart.forEach(item => {
        const existing = mergedCart.find(c => c.id === item.id && c.variant === item.variant);
        if (existing) {
          if (!options.isRestore) existing.qty += item.qty;
        } else {
          mergedCart.push(item);
        }
      });

      const parsedPh = parseBdPhone(custRecord.phone || custRecord.phoneNormalized);
      state.isLoggedIn = true;
      state.currentCustomerId = custRecord.id;
      state.profile = {
        id: custRecord.id,
        name: custRecord.name || "",
        email: custRecord.email || "",
        phone: parsedPh ? parsedPh.formatted : (custRecord.phone || ""),
        phoneNormalized: parsedPh ? parsedPh.normalized : (custRecord.phoneNormalized || ""),
        gender: custRecord.gender || "Not Specified",
        dob: custRecord.dob || "Not Specified",
        address: custRecord.address || "",
        avatar: custRecord.avatar || "",
        emailVerified: Boolean(custRecord.emailVerified),
        phoneVerified: Boolean(custRecord.phoneVerified)
      };
      state.rewardPoints = Number(custRecord.points ?? 500);
      state.userRating = custRecord.rating || "5.0 / 5.0";
      state.cart = mergedCart;
      state.wishlist = Array.isArray(custRecord.wishlist) ? [...custRecord.wishlist] : [];
      state._lastPendingWish = state.pendingWishProductId || "";
      if (state.pendingWishProductId) {
        if (!state.wishlist.includes(state.pendingWishProductId)) {
          state.wishlist.push(state.pendingWishProductId);
        }
        state.pendingWishProductId = "";
      }
      state.orders = Array.isArray(custRecord.orders) ? cloneDeep(custRecord.orders) : [];
      state.notifications = Array.isArray(custRecord.notifications) && custRecord.notifications.length
        ? cloneDeep(custRecord.notifications)
        : [
            {
              id: "n-welcome-" + custRecord.id,
              group: "Today",
              icon: "✦",
              title: `Welcome to Tehzib Privé, ${custRecord.name}!`,
              body: `Your verified account is active with ${Number(state.rewardPoints).toLocaleString("en-IN")} Privé Reward Points.`,
              time: "Just Now",
              isRecent: true,
              unread: true,
              targetView: "account"
            }
          ];

      syncActiveCustomerToRegistry();

      if (!options.skipServerCookie) {
        fetch("/api/auth/customer", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: "establish_session",
            customerId: state.profile.id,
            name: state.profile.name,
            email: state.profile.email,
            phone: state.profile.phone,
            emailVerified: state.profile.emailVerified,
            phoneVerified: state.profile.phoneVerified
          })
        }).catch(() => {});
      }
    }

    function performCustomerLogout() {
      syncActiveCustomerToRegistry();
      state.isLoggedIn = false;
      state.currentCustomerId = "";
      state.profile = createEmptyProfile();
      state.userRating = "—";
      state.rewardPoints = 0;
      state.cart = [];
      state.wishlist = [];
      state.orders = [];
      state.notifications = [];
      state.voucherApplied = false;
      state.isEditingProfile = false;
      saveDynamicDatabase("Customer signed out");
      fetch("/api/auth/customer", { method: "DELETE" }).catch(() => {});
    }

    function loadDynamicDatabase() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed.products && Array.isArray(parsed.products) && parsed.products.length) {
            PRODUCTS = hydrateProducts(parsed.products);
          }
          if (parsed.categoriesList && Array.isArray(parsed.categoriesList)) state.categoriesList = parsed.categoriesList;
          if (parsed.heroSlides && Array.isArray(parsed.heroSlides)) state.heroSlides = parsed.heroSlides;
          if (parsed.promoBanners && Array.isArray(parsed.promoBanners)) state.promoBanners = parsed.promoBanners;
          if (parsed.vouchers && Array.isArray(parsed.vouchers)) state.vouchers = parsed.vouchers;
          if (parsed.registeredCustomers && Array.isArray(parsed.registeredCustomers)) {
            state.registeredCustomers = parsed.registeredCustomers;
          }
          if (parsed.storeSettings) state.storeSettings = { ...DEFAULT_STORE_SETTINGS, ...parsed.storeSettings };
          if (parsed.cart && Array.isArray(parsed.cart)) state.cart = parsed.cart;
          if (parsed.auditLog && Array.isArray(parsed.auditLog)) state.auditLog = parsed.auditLog;
          state.deliveryFee = state.storeSettings.standardDeliveryFee;

          if (parsed.isLoggedIn && parsed.currentCustomerId) {
            const activeCust = state.registeredCustomers.find(c => c.id === parsed.currentCustomerId);
            if (activeCust) {
              applyCustomerSession(activeCust, { isRestore: true, skipServerCookie: true });
            }
          }
        }
      } catch (err) {
        // Fallback silently if sandboxed storage is restricted
      }
      try {
        const srv = window.__TEHZIB_INITIAL_SERVER_STATE__;
        if (srv) {
          if (srv.logos?.light) TEHZIB_LOGOS.light = srv.logos.light;
          if (srv.logos?.dark) TEHZIB_LOGOS.dark = srv.logos.dark;
          if (Array.isArray(srv.promoBanners) && srv.promoBanners.length) {
            state.promoBanners = JSON.parse(JSON.stringify(srv.promoBanners));
          }
          if (!state.isLoggedIn && srv.customerSession && srv.customerSession.customerId) {
            const matched = state.registeredCustomers.find(c => c.id === srv.customerSession.customerId);
            if (matched) {
              applyCustomerSession(matched, { isRestore: true, skipServerCookie: true });
            }
          }
        }
        if (typeof window.__tehzibZustandGetState === "function") {
          const zs = window.__tehzibZustandGetState();
          if (zs) {
            if (!state.isLoggedIn && Array.isArray(zs.cart) && zs.cart.length && !state.cart.length) {
              state.cart = JSON.parse(JSON.stringify(zs.cart));
            }
            if (zs.theme === "dark" || zs.theme === "light") state.theme = zs.theme;
          }
        }
      } catch (e) {}
    }

    function saveDynamicDatabase(logActionText = "") {
      if (logActionText) {
        state.auditLog.unshift({
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          actor: state.appMode === "admin" ? "Admin / Staff Panel" : "Customer Storefront",
          action: logActionText
        });
        state.auditLog = state.auditLog.slice(0, 30);
      }
      syncActiveCustomerToRegistry();
      try {
        const serializableProducts = PRODUCTS.map(p => ({
          id: p.id,
          subcategory: p.subcategory,
          title: p.title,
          category: p.category,
          price: p.price,
          oldPrice: p.oldPrice,
          discount: p.discount,
          isDeal: p.isDeal,
          available: p.available,
          sold: p.sold,
          stockStatus: p.stockStatus,
          rating: p.rating,
          reviewsCount: p.reviewsCount,
          isFeatured: p.isFeatured,
          isNew: p.isNew,
          isJustForYou: p.isJustForYou,
          specialTab: p.specialTab,
          variants: p.variants,
          imageKey: p.imageKey || findAssetKeyForUrl(p.image),
          customImageDataUri: p.customImageDataUri || "",
          description: p.description,
          specs: p.specs
        }));
        const payload = {
          products: serializableProducts,
          categoriesList: state.categoriesList,
          heroSlides: state.heroSlides,
          promoBanners: state.promoBanners,
          vouchers: state.vouchers,
          registeredCustomers: state.registeredCustomers,
          currentCustomerId: state.currentCustomerId,
          isLoggedIn: state.isLoggedIn,
          storeSettings: state.storeSettings,
          cart: state.cart,
          auditLog: state.auditLog
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      } catch (err) {
        // Ignore quota or sandbox storage exceptions
      }
      if (typeof window.__tehzibZustandSync === "function") {
        window.__tehzibZustandSync({
          cart: state.cart,
          wishlist: state.isLoggedIn ? state.wishlist : [],
          theme: state.theme
        });
      }
      if (logActionText && typeof window.__tehzibScheduleServerSync === "function" && typeof ERP_DB !== "undefined") {
        window.__tehzibScheduleServerSync({
          erpDb: ERP_DB,
          logos: TEHZIB_LOGOS,
          notifications: state.notifications
        });
      }
    }

    loadDynamicDatabase();

    function getTopCategoriesComputed() {
      const list = state.categoriesList.map(c => {
        const count = PRODUCTS.filter(p => p.category === c.name).length;
        return {
          name: c.name,
          count: `${count} Curated Design${count === 1 ? "" : "s"}`,
          img: resolveAssetUrl(c.imgKey)
        };
      });
      list.push({
        name: "All",
        count: `${PRODUCTS.length} Total Products`,
        img: IMG.giftbox
      });
      return list;
    }

    function getCategorySubcategoriesMap() {
      const map = {};
      state.categoriesList.forEach(c => {
        map[c.name] = c.subcategories || [];
      });
      return map;
    }

    function formatBDT(amount) {
      return "৳" + Number(amount || 0).toLocaleString("en-IN");
    }

    
    let modalConfirmCallback = null;
    function openModal({ title, message, confirmText = "Confirm", customHtml = "", onConfirm }) {
      const authBackdrop = document.getElementById("authModalBackdrop");
      if (authBackdrop) authBackdrop.classList.remove("open");
      if (typeof closeHeaderDropdowns === "function") closeHeaderDropdowns();
      window.__suspendedErpModalIds = Array.from(document.querySelectorAll(".erp-modal-backdrop.open"))
        .map(el => el.id)
        .filter(Boolean);
      document.querySelectorAll(".erp-modal-backdrop.open").forEach(el => el.classList.remove("open"));
      document.getElementById("modalTitle").textContent = title;
      document.getElementById("modalMessage").textContent = message;
      const customBody = document.getElementById("modalCustomBody");
      if (customHtml) {
        customBody.innerHTML = customHtml;
        customBody.style.display = "block";
      } else {
        customBody.innerHTML = "";
        customBody.style.display = "none";
      }
      const confirmBtn = document.getElementById("modalConfirmBtn");
      const actionsRow = document.getElementById("modalActionsRow");
      confirmBtn.textContent = confirmText;
      modalConfirmCallback = onConfirm || null;
      const isCloseOnly = !onConfirm || /^close(\s+preview)?$/i.test(String(confirmText || "").trim());
      if (actionsRow) {
        actionsRow.style.display = isCloseOnly ? "none" : "flex";
      }
      confirmBtn.style.display = isCloseOnly ? "none" : "inline-flex";
      document.getElementById("genericModalBackdrop").classList.add("open");
    }

    function closeModal() {
      document.getElementById("genericModalBackdrop").classList.remove("open");
      modalConfirmCallback = null;
      if (Array.isArray(window.__suspendedErpModalIds) && window.__suspendedErpModalIds.length > 0) {
        window.__suspendedErpModalIds.forEach(id => {
          const el = document.getElementById(id);
          if (el) el.classList.add("open");
        });
        window.__suspendedErpModalIds = [];
      }
    }

    document.getElementById("modalCancelBtn").addEventListener("click", closeModal);
    document.getElementById("modalTopCrossBtn")?.addEventListener("click", closeModal);
    document.getElementById("genericModalBackdrop")?.addEventListener("click", (e) => {
      if (e.target.id === "genericModalBackdrop") closeModal();
    });
    document.getElementById("modalConfirmBtn").addEventListener("click", async () => {
      if (typeof modalConfirmCallback === "function") {
        // A callback may return `false` (or a Promise resolving to `false`) to keep the modal open.
        if ((await modalConfirmCallback()) === false) return;
      }
      closeModal();
    });


    function applyTheme(themeName) {
      state.theme = themeName;
      document.documentElement.setAttribute("data-theme", themeName);
      try {
        localStorage.setItem("tehzib_erp_theme", themeName);
      } catch (e) {}
      if (typeof window.__tehzibZustandSync === "function") {
        window.__tehzibZustandSync({ theme: themeName });
      }

      const logoSrc = themeName === "dark" ? TEHZIB_LOGOS.dark : TEHZIB_LOGOS.light;
      const logoImg = document.getElementById("brandLogoImg");
      if (logoImg) logoImg.src = logoSrc;
      document.querySelectorAll("[data-brand-logo]").forEach(img => {
        img.src = logoSrc;
      });

      const moonIcon = document.getElementById("themeIconMoon");
      const sunIcon = document.getElementById("themeIconSun");

      if (themeName === "dark") {
        if (moonIcon) moonIcon.style.display = "none";
        if (sunIcon) sunIcon.style.display = "block";
      } else {
        if (moonIcon) moonIcon.style.display = "block";
        if (sunIcon) sunIcon.style.display = "none";
      }

      const sunSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
      const moonSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
      document.querySelectorAll(".theme-icon-slot").forEach(slot => {
        slot.innerHTML = themeName === "dark" ? sunSvg : moonSvg;
      });
    }

    function toggleTheme() {
      const next = state.theme === "light" ? "dark" : "light";
      applyTheme(next);
    }

    document.getElementById("themeToggleBtn").addEventListener("click", toggleTheme);

    function showToast(msg) {
      if (typeof msg === "string" && /^Switched to /i.test(msg)) return;
      const erpToast = document.getElementById("erpToast");
      if (erpToast) erpToast.classList.remove("show");
      const toast = document.getElementById("appToast");
      if (toast) {
        toast.textContent = msg;
        toast.classList.add("show");
        clearTimeout(window.__toastTimer);
        window.__toastTimer = setTimeout(() => toast.classList.remove("show"), 2900);
      }
    }

    function switchWorkspaceMode(mode, targetErpSection = "") {
      state.appMode = mode;
      const storeHeader = document.querySelector(".site-header");
      const storeMain = document.querySelector(".app-main");
      const storeFooter = document.querySelector(".site-footer");
      const storeDock = document.querySelector(".mobile-bottom-dock");
      const authGate = document.getElementById("authGateScreen");
      const erpShell = document.getElementById("erpAppShell");

      document.getElementById("switchStorefrontModeBtn")?.classList.toggle("active", mode === "storefront");
      document.getElementById("switchAdminModeBtn")?.classList.toggle("active", mode === "admin");
      if (mode === "storefront" && window.location.pathname.startsWith("/admin")) {
        window.location.href = "/";
        return;
      }

      if (mode === "admin") {
        document.title = "Tehzib OMS — Operations Management System";
        if (storeHeader) storeHeader.style.display = "none";
        if (storeMain) storeMain.style.display = "none";
        if (storeFooter) storeFooter.style.display = "none";
        if (storeDock) storeDock.style.display = "none";

        if (targetErpSection) {
          window.__pendingErpTargetView = targetErpSection;
        }

        if (window.__erpAdminAuthenticated) {
          if (authGate) authGate.style.display = "none";
          if (erpShell) erpShell.style.display = "block";
          if (window.__pendingErpTargetView) {
            switchErpView(window.__pendingErpTargetView);
            window.__pendingErpTargetView = "";
          } else {
            renderAllErpModules();
          }
        } else {
          if (erpShell) erpShell.style.display = "none";
          if (authGate) authGate.style.display = "flex";
        }
      } else {
        if (authGate) authGate.style.display = "none";
        if (erpShell) erpShell.style.display = "none";
        if (storeHeader) storeHeader.style.display = "";
        if (storeMain) storeMain.style.display = "";
        if (storeFooter) storeFooter.style.display = "";
        if (storeDock) storeDock.style.display = "";
        syncErpToStorefront();
        renderAll();
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    document.getElementById("switchStorefrontModeBtn")?.addEventListener("click", () => switchWorkspaceMode("storefront"));
    document.getElementById("switchAdminModeBtn")?.addEventListener("click", () => switchWorkspaceMode("admin"));

    function closeHeaderDropdowns() {
      const notifPanel = document.getElementById("notifDropdownPanel");
      const accPanel = document.getElementById("accountDropdownPanel");
      if (notifPanel) notifPanel.classList.remove("open");
      if (accPanel) accPanel.classList.remove("open");
      const mobileDrawer = document.getElementById("mobileMenuBackdrop");
      if (mobileDrawer) mobileDrawer.classList.remove("open");
      const liveSearchEl = document.getElementById("liveSearchDropdown");
      if (liveSearchEl) liveSearchEl.classList.remove("open");
    }

    function switchScreen(screenName, options = {}) {
      if (state.appMode !== "storefront") {
        switchWorkspaceMode("storefront");
      }
      closeHeaderDropdowns();

      const protectedScreens = ["account", "wishlist", "checkout", "notifications"];
      if (protectedScreens.includes(screenName) && !state.isLoggedIn) {
        state.pendingRedirect = { screen: screenName, options };
        const reasonMap = {
          checkout: "Please sign in or create a verified Tehzib account to proceed to checkout.",
          wishlist: "Please sign in or sign up to access and save your Wishlist.",
          notifications: "Please sign in to view your personal order updates and alerts.",
          account: "Please sign in or sign up to access your Tehzib account profile."
        };
        openAuthModal("login", { alertMessage: reasonMap[screenName] || reasonMap.account });
        return;
      }

      state.currentView = screenName;
      if (screenName !== "product") {
        document.title = "Tehzib — Contemporary Bangladeshi Fashion, Footwear, Accessories & Lifestyle";
      }

      document.querySelectorAll(".screen-view").forEach(sec => sec.classList.remove("active"));

      let targetSectionId = "view-" + screenName;
      if (screenName === "wishlist") {
        targetSectionId = "view-account";
        switchAccountPanel("wishlist");
      } else if (screenName === "account" && !options.keepPanel) {
        switchAccountPanel("details");
      }

      const targetEl = document.getElementById(targetSectionId);
      if (targetEl) targetEl.classList.add("active");

      document.querySelectorAll(".quick-screen-pill").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-screen-jump") === screenName);
      });

      document.querySelectorAll(".dock-item-btn").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-dock-target") === screenName);
      });

      window.scrollTo({ top: 0, behavior: "smooth" });
      renderAll();
    }

    function renderDynamicStorefrontCMS() {
      const s = state.storeSettings;

      const footerPhoneEl = document.querySelector(".footer-phone");
      if (footerPhoneEl) footerPhoneEl.textContent = s.conciergePhone;
      const footerAddrEl = document.querySelector("#storefrontFooterBrandCol div:nth-child(4)");
      if (footerAddrEl) footerAddrEl.textContent = "📍 " + s.address;
      const footerCopyEl = document.querySelector(".footer-bottom-bar div");
      if (footerCopyEl) footerCopyEl.textContent = s.copyright;

      const footerGridEl = document.getElementById("storefrontFooterGrid");
      const brandColEl = document.getElementById("storefrontFooterBrandCol");
      if (footerGridEl && brandColEl && ERP_DB?.cms?.footerSections) {
        Array.from(footerGridEl.querySelectorAll(".footer-col")).forEach(col => {
          if (col.id !== "storefrontFooterBrandCol") col.remove();
        });
        ERP_DB.cms.footerSections.forEach(sec => {
          const colDiv = document.createElement("div");
          colDiv.className = "footer-col";
          const linksHtml = (sec.items || []).map(item => {
            if (item.type === "category" && item.targetCat) {
              return `<li><button type="button" data-footer-cat="${item.targetCat}" data-footer-item-id="${item.id}" data-footer-sec-id="${sec.id}">${item.label}</button></li>`;
            }
            return `<li><button type="button" data-footer-info="${item.modalTitle || item.label}" data-footer-item-id="${item.id}" data-footer-sec-id="${sec.id}">${item.label}</button></li>`;
          }).join("");
          colDiv.innerHTML = `
            <h4>${sec.title}</h4>
            <ul class="footer-links">${linksHtml}</ul>
          `;
          footerGridEl.appendChild(colDiv);
        });
      }

      const subNavEl = document.getElementById("subNavCategories");
      if (subNavEl) {
        subNavEl.innerHTML = state.categoriesList.map(c => `
          <div class="cat-dropdown-item">
            <button type="button" class="sub-nav-btn ${state.catalogCategory === c.name && state.currentView === 'catalog' ? 'active' : ''}" data-nav-cat="${c.name}">
              ${c.name} <span class="cat-caret">▾</span>
            </button>
            <div class="subcat-dropdown-menu">
              ${(c.subcategories || []).map(sc => `
                <button type="button" class="subcat-item-btn" data-nav-subcat="${sc}" data-parent-cat="${c.name}">
                  ${sc}
                </button>
              `).join("")}
            </div>
          </div>
        `).join("");
      }

      const mobileCatContainer = document.querySelector(".mobile-drawer-panel > div:last-child");
      if (mobileCatContainer) {
        mobileCatContainer.innerHTML = `
          <div style="font-size:11.5px; font-weight:800; text-transform:uppercase; letter-spacing:0.08em; color:var(--text-muted); margin-bottom:10px;">
            Shop By Category &amp; Subcategory
          </div>
          ${state.categoriesList.map((c, idx) => `
            <div class="mobile-drawer-cat-group" style="${idx === state.categoriesList.length - 1 ? 'border-bottom:none;' : ''}">
              <button type="button" class="account-dropdown-link-btn" data-nav-cat="${c.name}">
                <strong>${c.name}</strong> <span>&rsaquo;</span>
              </button>
              <div class="mobile-drawer-subcats">
                ${(c.subcategories || []).map(sc => `
                  <button type="button" class="quick-screen-pill" data-nav-subcat="${sc}" data-parent-cat="${c.name}">${sc}</button>
                `).join("")}
              </div>
            </div>
          `).join("")}
        `;
      }

      const heroViewport = document.querySelector("#heroSliderContainer .hero-slider-viewport");
      if (heroViewport && state.heroSlides.length > 0) {
        if (activeHeroSlide >= state.heroSlides.length) activeHeroSlide = 0;
        const slidesHtml = state.heroSlides.map((sl, idx) => {
          const showcaseProd = PRODUCTS.find(p => p.id === sl.showcaseProductId) || PRODUCTS[0];
          const bgImg = resolveAssetUrl(sl.bgImgKey);
          return `
            <div class="hero-slide ${idx === activeHeroSlide ? 'active' : ''}" data-hero-slide="${idx}">
              <img class="hero-main-img" src="${bgImg}" alt="${sl.title}" />
              <div class="hero-slide-backdrop"></div>
              <div class="hero-slide-inner">
                <div class="hero-overlay">
                  <span class="hero-tag">${sl.tag}</span>
                  <h2 class="hero-title">${sl.title}</h2>
                  <p class="hero-subtitle">${sl.subtitle}</p>
                  <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
                    <button type="button" class="hero-cta-btn" data-select-cat="${sl.targetCat || 'All'}">
                      ${sl.ctaText || 'Shop Collection →'}
                    </button>
                    ${sl.secondaryText ? `
                      <button type="button" class="service-pill-btn" data-select-cat="${sl.secondaryCat || 'Fashion'}" style="padding:13px 22px; font-size:13.5px; background:rgba(255,255,255,0.14); color:#FAF8F5; border:1px solid rgba(255,255,255,0.3);">
                        ${sl.secondaryText}
                      </button>
                    ` : ""}
                  </div>
                </div>
                ${showcaseProd ? `
                  <div class="hero-showcase-card" data-open-pdp="${showcaseProd.id}">
                    <img class="hero-showcase-thumb" src="${showcaseProd.image}" alt="${showcaseProd.title}" />
                    <div>
                      <span class="promo-eyebrow" style="display:block; margin-bottom:4px;">${showcaseProd.category} Highlight</span>
                      <div style="font-family:'Cormorant Garamond', serif; font-size:22px; font-weight:700; line-height:1.15; margin-bottom:6px;">${showcaseProd.title}</div>
                      <div style="font-size:15px; font-weight:800; color:var(--accent-rose);">
                        ${formatBDT(showcaseProd.price)}
                        ${showcaseProd.oldPrice ? `<span style="font-size:12px; color:rgba(250,248,245,0.6); text-decoration:line-through; font-weight:500;">${formatBDT(showcaseProd.oldPrice)}</span>` : ""}
                      </div>
                    </div>
                  </div>
                ` : ""}
              </div>
            </div>
          `;
        }).join("");

        const dotsHtml = state.heroSlides.map((_, idx) => `
          <button type="button" class="hero-dot-btn ${idx === activeHeroSlide ? 'active' : ''}" data-hero-dot="${idx}" aria-label="Slide ${idx + 1}"></button>
        `).join("");

        heroViewport.innerHTML = `
          ${slidesHtml}
          <button type="button" class="hero-slider-arrow hero-slider-prev" id="heroPrevSlideBtn" aria-label="Previous slide">&lsaquo;</button>
          <button type="button" class="hero-slider-arrow hero-slider-next" id="heroNextSlideBtn" aria-label="Next slide">&rsaquo;</button>
          <div class="hero-slider-controls">${dotsHtml}</div>
        `;
      }

      const bannersGrid = document.querySelector(".promo-banners-grid");
      if (bannersGrid && state.promoBanners.length >= 2) {
        const b1 = state.promoBanners[0];
        const b2 = state.promoBanners[1];
        bannersGrid.innerHTML = `
          <div class="promo-banner-card promo-banner-dark">
            <div class="promo-banner-content">
              <div class="promo-eyebrow">${b1.eyebrow}</div>
              <h3 class="promo-banner-title">${b1.title}</h3>
              <p class="promo-banner-sub">${b1.sub}</p>
              <button type="button" class="hero-cta-btn" data-select-cat="${b1.targetCat}" style="padding:9px 18px; font-size:12.5px;">Shop Now</button>
            </div>
            <img class="promo-banner-thumb" src="${resolveAssetUrl(b1.imgKey || 'heels')}" alt="${b1.title}" />
          </div>
          <div class="promo-banner-card promo-banner-warm">
            <div class="promo-banner-content">
              <div class="promo-eyebrow">${b2.eyebrow}</div>
              <h3 class="promo-banner-title">${b2.title}</h3>
              <p class="promo-banner-sub">${b2.sub}</p>
              <button type="button" class="service-pill-btn" data-select-cat="${b2.targetCat}" style="padding:10px 20px; font-size:12.5px;">Shop Now</button>
            </div>
            <img class="promo-banner-thumb" src="${resolveAssetUrl(b2.imgKey || 'mom_kids')}" alt="${b2.title}" />
          </div>
        `;
      }
    }

    function buildProductCardHtml(p, showInventory = false) {
      const isWished = state.isLoggedIn && state.wishlist.includes(p.id);
      const totalUnits = Math.max(1, Number(p.available || 0) + Number(p.sold || 0));
      const pctSold = Math.min(95, Math.round((Number(p.sold || 0) / totalUnits) * 100));
      return `
        <article class="product-card" data-product-id="${p.id}">
          <div class="product-card-media" data-open-pdp="${p.id}">
            ${p.discount ? `<span class="discount-tag">${p.discount}</span>` : ""}
            <button type="button" class="card-wish-btn ${isWished ? "active" : ""}" data-toggle-wish="${p.id}" aria-label="Save to Wishlist">
              ${isWished ? "♥" : "♡"}
            </button>
            <img src="${p.image}" alt="${p.title}" loading="lazy" />
          </div>
          <div class="product-card-cat">${p.category}</div>
          <h3 class="product-card-title" data-open-pdp="${p.id}" title="${p.title}">${p.title}</h3>
          <div class="product-card-price-row">
            <div class="price-group">
              <span class="price-current">${formatBDT(p.price)}</span>
              ${p.oldPrice ? `<span class="price-original">${formatBDT(p.oldPrice)}</span>` : ""}
            </div>
            <button type="button" class="circle-plus-btn" data-quick-add="${p.id}" aria-label="Add ${p.title} to Cart">+</button>
          </div>
          ${showInventory ? `
            <div class="inventory-status">
              <div class="inventory-labels">
                <span>Available: ${p.available}</span>
                <span>Sold: ${p.sold}</span>
              </div>
              <div class="inventory-track">
                <div class="inventory-fill" style="width:${pctSold}%;"></div>
              </div>
            </div>
          ` : ""}
        </article>
      `;
    }

    function renderHome() {
      const topCats = getTopCategoriesComputed();
      const desktopCatEl = document.getElementById("topCategoriesDesktopGrid");
      if (desktopCatEl) {
        desktopCatEl.innerHTML = topCats.map(c => `
          <div class="top-cat-rect-card" data-select-cat="${c.name}">
            <div class="top-cat-rect-left">
              <img class="top-cat-thumb" src="${c.img}" alt="${c.name}" />
              <div>
                <div class="top-cat-name">${c.name === "All" ? "All Curated Edit" : c.name}</div>
                <div class="top-cat-count">${c.count}</div>
              </div>
            </div>
            <span style="color:var(--text-muted); font-weight:700;">&rsaquo;</span>
          </div>
        `).join("");
      }

      const mobileCatEl = document.getElementById("topCategoriesMobileRow");
      if (mobileCatEl) {
        mobileCatEl.innerHTML = topCats.map(c => `
          <button type="button" class="cat-circle-item" data-select-cat="${c.name}">
            <div class="cat-circle-icon">
              <img src="${c.img}" alt="${c.name}" />
            </div>
            <span class="cat-circle-label">${c.name}</span>
          </button>
        `).join("");
      }

      const deals = PRODUCTS.filter(p => p.isDeal).slice(0, 10);
      const dealsToShow = deals.length ? deals : PRODUCTS.slice(0, 5);
      document.getElementById("dealsOfTheDayGrid").innerHTML = dealsToShow.map(p => buildProductCardHtml(p, true)).join("");

      const newArrivals = PRODUCTS.filter(p => p.isNew);
      const newToShow = newArrivals.length ? newArrivals : PRODUCTS.slice(0, 5);
      document.getElementById("newArrivalsGrid").innerHTML = newToShow.map(p => buildProductCardHtml(p)).join("");

      const justForYou = PRODUCTS.filter(p => p.isJustForYou);
      const jfyToShow = justForYou.length ? justForYou : PRODUCTS.slice(2, 7);
      document.getElementById("justForYouGrid").innerHTML = jfyToShow.map(p => buildProductCardHtml(p)).join("");

      const specialItems = PRODUCTS.filter(p => p.specialTab === state.specialTab).slice(0, 8);
      document.getElementById("specialOfferGrid").innerHTML = specialItems.map(p => buildProductCardHtml(p)).join("");
    }

    function normalizeSearchText(str) {
      return String(str || "")
        .toLowerCase()
        .replace(/jewellery/g, "jewelry")
        .replace(/co-ord/g, "coord");
    }

    function stemSearchWord(w) {
      if (w.length > 4 && w.endsWith("ies")) return w.slice(0, -3) + "y";
      if (w.length > 4 && (w.endsWith("ches") || w.endsWith("shes") || w.endsWith("xes"))) return w.slice(0, -2);
      if (w.length > 3 && w.endsWith("s") && !w.endsWith("ss")) return w.slice(0, -1);
      return w;
    }

    function tokenizeSearch(str) {
      return normalizeSearchText(str).split(/[^a-z0-9]+/).filter(Boolean);
    }

    function wordMatchesSearchToken(word, tok) {
      const wStem = stemSearchWord(word);
      const tStem = stemSearchWord(tok);
      if (word === tok || wStem === tStem) return 100;
      if (word.startsWith(tok)) return 85;
      if (tStem.length >= 3 && (word.startsWith(tStem) || wStem.startsWith(tStem))) return 75;
      return 0;
    }

    function filterProductsByQuery(list, rawQuery, options = {}) {
      const q = String(rawQuery || "").trim();
      if (!q) return list;
      const queryTokens = tokenizeSearch(q);
      if (!queryTokens.length) return list;

      const titleMatches = [];
      const taxonomyMatches = [];

      for (const p of list) {
        const rawTitleNorm = normalizeSearchText(p.title || "");
        const titleForTokens = (queryTokens.includes("top") || queryTokens.includes("tops")) && !rawTitleNorm.includes("top-")
          ? rawTitleNorm
          : rawTitleNorm.replace(/\btop-handle\b/g, "handle");
        const titleWords = titleForTokens.split(/[^a-z0-9]+/).filter(Boolean);
        const skuNorm = String(p.sku || "").toLowerCase();
        const variantWords = options.includeVariants && Array.isArray(p.variants)
          ? tokenizeSearch(p.variants.join(" "))
          : [];

        let allInTitleOrSku = true;
        let titleScore = 0;
        for (const tok of queryTokens) {
          let best = 0;
          if (tok.length >= 2 && (skuNorm.startsWith(tok) || skuNorm.includes(tok))) best = 95;
          for (const tw of titleWords) {
            best = Math.max(best, wordMatchesSearchToken(tw, tok));
          }
          for (const vw of variantWords) {
            best = Math.max(best, wordMatchesSearchToken(vw, tok) * 0.8);
          }
          if (best === 0) {
            allInTitleOrSku = false;
            break;
          }
          titleScore += best;
        }

        if (allInTitleOrSku) {
          titleMatches.push({ p, score: titleScore });
          continue;
        }

        const taxWords = [
          ...titleWords,
          ...tokenizeSearch(p.category || ""),
          ...tokenizeSearch(p.subcategory || ""),
          ...variantWords
        ];
        let allInTaxonomy = true;
        let taxScore = 0;
        for (const tok of queryTokens) {
          let best = 0;
          for (const w of taxWords) {
            best = Math.max(best, wordMatchesSearchToken(w, tok));
          }
          if (best === 0) {
            allInTaxonomy = false;
            break;
          }
          taxScore += best;
        }
        if (allInTaxonomy) {
          taxonomyMatches.push({ p, score: taxScore });
        }
      }

      const categoryKeywordSet = new Set(["clothing", "shoe", "shoes", "fashion", "accessory", "accessories", "kid", "kids", "jewelry", "top", "tops"]);
      const isCategorySearch = queryTokens.every(t =>
        categoryKeywordSet.has(t) ||
        categoryKeywordSet.has(stemSearchWord(t)) ||
        (t.length >= 3 && Array.from(categoryKeywordSet).some(ck => ck.startsWith(t)))
      );

      if (titleMatches.length > 0 && !isCategorySearch) {
        return titleMatches.sort((a, b) => b.score - a.score).map(x => x.p);
      }
      const combined = [...titleMatches, ...taxonomyMatches];
      return combined.sort((a, b) => b.score - a.score).map(x => x.p);
    }

    function highlightSearchMatch(text, rawQuery) {
      const safeText = String(text || "");
      const tokens = tokenizeSearch(rawQuery).filter(t => t.length >= 2);
      if (!tokens.length) return safeText;
      return safeText.split(/(\s+)/).map(part => {
        if (/^\s+$/.test(part)) return part;
        const cleanWord = normalizeSearchText(part).replace(/[^a-z0-9]/g, "");
        if (!cleanWord) return part;
        const matched = tokens.some(tok => wordMatchesSearchToken(cleanWord, tok) > 0);
        return matched ? `<mark class="live-search-mark">${part}</mark>` : part;
      }).join("");
    }

    function renderLiveSearchDropdown(rawQuery) {
      const dropdown = document.getElementById("liveSearchDropdown");
      const clearBtn = document.getElementById("globalSearchClearBtn");
      const q = String(rawQuery || "").trim();
      if (clearBtn) {
        clearBtn.style.display = q.length > 0 ? "inline-flex" : "none";
      }
      if (!dropdown) return;
      if (!q) {
        dropdown.classList.remove("open");
        dropdown.innerHTML = "";
        return;
      }

      const matches = filterProductsByQuery(PRODUCTS, q);
      if (matches.length === 0) {
        dropdown.innerHTML = `
          <div class="live-search-header">
            <span>Live Search</span>
            <span>0 Results</span>
          </div>
          <div class="live-search-empty">
            No products found for <strong>"${q.replace(/[<>&"]/g, "")}"</strong>.<br/>
            <span style="font-size:11.5px;">Try searching by product title, category, or SKU.</span>
          </div>
        `;
        dropdown.classList.add("open");
        return;
      }

      const previewItems = matches.slice(0, 6);
      dropdown.innerHTML = `
        <div class="live-search-header">
          <span>Live Search Suggestions</span>
          <span>${matches.length} Product${matches.length === 1 ? "" : "s"} Found</span>
        </div>
        <div class="live-search-list">
          ${previewItems.map(p => `
            <button type="button" class="live-search-item" data-live-search-pdp="${p.id}">
              <div class="live-search-item-left">
                <img class="live-search-thumb" src="${p.image}" alt="${p.title}" />
                <div class="live-search-meta">
                  <div class="live-search-title">${highlightSearchMatch(p.title, q)}</div>
                  <div class="live-search-sub">${p.category}${p.subcategory ? " • " + p.subcategory : ""}${p.sku ? " • " + p.sku : ""}</div>
                </div>
              </div>
              <div class="live-search-item-right">
                <span class="live-search-price">${formatBDT(p.price)}</span>
                <span style="font-size:10px; font-weight:700; color:${p.available > 0 ? "var(--status-green)" : "var(--danger)"};">${p.available > 0 ? "In Stock" : "Out of Stock"}</span>
              </div>
            </button>
          `).join("")}
        </div>
        <div class="live-search-footer">
          <button type="button" class="live-search-view-all-btn" id="liveSearchViewAllBtn">
            View all ${matches.length} result${matches.length === 1 ? "" : "s"} for "${q.replace(/[<>&"]/g, "")}"
          </button>
        </div>
      `;
      dropdown.classList.add("open");
    }

    function renderCatalog() {
      const catNames = ["All", ...state.categoriesList.map(c => c.name)];
      const subcatMap = getCategorySubcategoriesMap();
      const sidebarEl = document.getElementById("catalogSidebarCategories");
      const basePool = state.searchQuery && state.searchQuery.trim()
        ? filterProductsByQuery(PRODUCTS, state.searchQuery)
        : PRODUCTS;

      sidebarEl.innerHTML = catNames.map(cat => {
        const count = cat === "All" ? basePool.length : basePool.filter(p => p.category === cat).length;
        const activeClass = state.catalogCategory === cat ? "active" : "";
        const subcats = subcatMap[cat] || [];
        return `
          <div>
            <button type="button" class="sidebar-cat-btn ${activeClass}" data-select-cat="${cat}" style="width:100%;">
              <span>${cat === "All" ? "All Categories" : cat}</span>
              <span class="sidebar-cat-count">${count}</span>
            </button>
            ${state.catalogCategory === cat && subcats.length ? `
              <div style="display:flex; flex-direction:column; gap:4px; padding:6px 0 6px 12px;">
                ${subcats.map(sc => `
                  <button type="button" class="subcat-item-btn" data-nav-subcat="${sc}" data-parent-cat="${cat}" style="${state.catalogSubcategory === sc ? 'background:var(--accent-soft); color:var(--text-main); font-weight:700;' : ''}">
                    <span>• ${sc}</span>
                  </button>
                `).join("")}
              </div>
            ` : ""}
          </div>
        `;
      }).join("");

      let list = basePool.filter(p => {
        const matchesCat = state.catalogCategory === "All" || p.category === state.catalogCategory;
        const matchesSubcat = !state.catalogSubcategory || state.catalogSubcategory === "All" || p.subcategory === state.catalogSubcategory;
        return matchesCat && matchesSubcat;
      });

      if (state.catalogSort === "az") list.sort((a, b) => a.title.localeCompare(b.title));
      else if (state.catalogSort === "za") list.sort((a, b) => b.title.localeCompare(a.title));
      else if (state.catalogSort === "price-desc") list.sort((a, b) => b.price - a.price);
      else if (state.catalogSort === "price-asc") list.sort((a, b) => a.price - b.price);
      else if (state.catalogSort === "latest") list = [...list].reverse();

      const catTitle = state.catalogCategory === "All" ? "All Categories" : state.catalogCategory;
      const secondCrumbTitle = (!state.catalogSubcategory || state.catalogSubcategory === "All")
        ? (state.catalogCategory === "All" ? "All Products" : `All ${state.catalogCategory}`)
        : state.catalogSubcategory;

      const bcCatEl = document.getElementById("catalogBreadcrumbCat");
      const bcSubcatEl = document.getElementById("catalogBreadcrumbSubcat");
      if (bcCatEl) bcCatEl.textContent = catTitle;
      if (bcSubcatEl) {
        bcSubcatEl.textContent = secondCrumbTitle;
        bcSubcatEl.style.display = "none";
      }
      document.getElementById("catalogBreadcrumbCurrent").textContent = secondCrumbTitle;

      const displayHeading = (!state.catalogSubcategory || state.catalogSubcategory === "All")
        ? (state.catalogCategory === "All" ? "All Curated Products" : state.catalogCategory)
        : `${state.catalogCategory} — ${state.catalogSubcategory}`;

      document.getElementById("catalogHeadingTitle").textContent = state.searchQuery
        ? `${displayHeading} — Search: "${state.searchQuery}"`
        : displayHeading;
      document.getElementById("catalogResultCountText").textContent = `Showing ${list.length} product${list.length === 1 ? "" : "s"}`;

      const gridEl = document.getElementById("catalogProductsGrid");
      if (list.length === 0) {
        gridEl.innerHTML = `<div style="grid-column:1/-1; padding:36px; text-align:center; background:var(--bg-elevated); border-radius:12px; border:1px solid var(--border-color);">No matching products found. <button type="button" class="view-all-link" id="resetCatalogSearchBtn">Reset Filters</button></div>`;
        const resetBtn = document.getElementById("resetCatalogSearchBtn");
        if (resetBtn) {
          resetBtn.addEventListener("click", () => {
            state.searchQuery = "";
            state.catalogCategory = "All";
            state.catalogSubcategory = "All";
            document.getElementById("globalSearchInput").value = "";
            renderCatalog();
          });
        }
      } else {
        gridEl.innerHTML = list.map(p => buildProductCardHtml(p)).join("");
      }
    }

    function renderPDP() {
      const p = PRODUCTS.find(item => item.id === state.activeProductId) || PRODUCTS[0];
      if (!p) return;
      document.getElementById("pdpBreadcrumbCat").textContent = p.category;
      const pdpSubEl = document.getElementById("pdpBreadcrumbSubcat");
      if (pdpSubEl) pdpSubEl.textContent = p.subcategory || "Curated Edit";
      document.getElementById("pdpBreadcrumbTitle").textContent = p.title;
      document.getElementById("pdpCategoryTag").textContent = p.category;
      document.getElementById("pdpProductTitle").textContent = p.title;
      try {
        if (state.currentView === "product" && state.appMode === "storefront") {
          document.title = p.title + " — Tehzib Lifestyle Bangladesh";
        }
        const setMeta = (name, content) => {
          if (!content) return;
          let m = document.querySelector('meta[name="' + name + '"]');
          if (!m) {
            m = document.createElement("meta");
            m.setAttribute("name", name);
            document.head.appendChild(m);
          }
          m.setAttribute("content", content);
        };
        setMeta("description", p.seoDescription || p.description || "");
        setMeta("keywords", p.seoKeywords || "");
        setMeta("geo.placename", p.geoKeywords || "Uttara Sector 12, Dhaka, Bangladesh");
      } catch (e) {}
      document.getElementById("pdpReviewCount").textContent = `(${p.reviewsCount || 24} Reviews • ${p.available} Available)`;

      const stockBadge = document.getElementById("pdpStockBadge");
      const statusText = p.available <= 0 ? "OUT OF STOCK" : (p.available <= 8 ? "LOW STOCK" : "IN STOCK");
      p.stockStatus = statusText;
      stockBadge.textContent = statusText;
      stockBadge.className = "stock-badge " + (statusText === "IN STOCK" ? "stock-in" : "stock-low");

      const gallery = p.gallery && p.gallery.length ? p.gallery : [p.image];
      const safeIdx = state.pdpGalleryIdx % gallery.length;
      document.getElementById("pdpMainImage").src = gallery[safeIdx];

      document.getElementById("pdpThumbnailStrip").innerHTML = gallery.map((imgUrl, idx) => `
        <div class="pdp-thumb-item ${idx === safeIdx ? "active" : ""}" data-thumb-idx="${idx}">
          <img src="${imgUrl}" alt="${p.title} view ${idx + 1}" />
        </div>
      `).join("");

      if (!p.variants || !p.variants.length) p.variants = ["Standard"];
      if (!p.variants.includes(state.pdpVariant)) {
        state.pdpVariant = p.variants[0];
      }
      document.getElementById("pdpVariantPills").innerHTML = p.variants.map(v => `
        <button type="button" class="variant-pill ${v === state.pdpVariant ? "active" : ""}" data-select-variant="${v}">${v}</button>
      `).join("");

      document.getElementById("pdpPriceDisplay").textContent = formatBDT(p.price) + ".00";
      const oldPriceEl = document.getElementById("pdpOldPriceDisplay");
      if (p.oldPrice) {
        oldPriceEl.textContent = formatBDT(p.oldPrice) + ".00";
        oldPriceEl.style.display = "inline";
      } else {
        oldPriceEl.style.display = "none";
      }
      document.getElementById("pdpQtyValue").textContent = state.pdpQty;

      document.querySelectorAll("#pdpTabsBar .pdp-tab-link").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-pdp-tab") === state.pdpTab);
      });
      const tabBody = document.getElementById("pdpTabContent");
      if (state.pdpTab === "description") {
        tabBody.innerHTML = `
          <div style="display:flex; flex-direction:column; gap:12px;">
            <p style="white-space:pre-line;">${p.description || "Studio-crafted piece curated by Tehzib Bangladesh."}</p>
            <div style="padding:12px 14px; border-radius:10px; background:var(--bg-main); border:1px solid var(--border-color); font-size:12px; display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:8px;">
              <div><strong style="color:var(--text-muted); text-transform:uppercase; font-size:10.5px; display:block;">SKU &amp; Supplier Ref</strong><span class="mono">${p.sku || ("THZ-" + p.id.toUpperCase())} (${p.supplierId || "SUP-01"})</span></div>
              <div><strong style="color:var(--text-muted); text-transform:uppercase; font-size:10.5px; display:block;">B2B Wholesale Price</strong><span class="mono">${formatBDT(p.wholesalePrice || Math.round(p.price * 0.72))}</span></div>
              <div style="grid-column:1/-1;"><strong style="color:var(--text-muted); text-transform:uppercase; font-size:10.5px; display:block;">SEO Meta Description</strong><span>${p.seoDescription || p.description || ""}</span></div>
              <div><strong style="color:var(--text-muted); text-transform:uppercase; font-size:10.5px; display:block;">SEO Keywords</strong><span>${p.seoKeywords || (p.category + ", " + (p.subcategory || "") + ", tehzib bangladesh")}</span></div>
              <div><strong style="color:var(--text-muted); text-transform:uppercase; font-size:10.5px; display:block;">GEO Keywords</strong><span>${p.geoKeywords || "Uttara Sector 12 Dhaka, Gulshan, Banani, Bangladesh"}</span></div>
            </div>
          </div>
        `;
      } else if (state.pdpTab === "reviews") {
        const erpReviews = (typeof ERP_DB !== "undefined" && Array.isArray(ERP_DB.reviews))
          ? ERP_DB.reviews.filter(r => (r.productId === p.id || r.productTitle === p.title) && r.status !== "Hidden")
          : [];
        const dynamicReviewsHtml = erpReviews.map(r => `
          <div style="padding:10px 14px; border-radius:8px; background:var(--bg-main); border:1px solid var(--border-color);">
            <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
              <strong>${r.customer || "Verified Buyer"}</strong>
              <span class="stars-gold">${"★".repeat(Math.max(1, Math.min(5, Number(r.rating) || 5)))}</span>
            </div>
            <p style="font-size:13px; margin-top:3px;">${r.comment || r.text || ""}</p>
            ${r.reply ? `<div style="margin-top:6px; padding:6px 10px; border-left:2px solid var(--accent-rose-deep); font-size:12px; color:var(--text-secondary);"><strong>Tehzib Studio Response:</strong> ${r.reply}</div>` : ""}
          </div>
        `).join("");

        const reviewActionHtml = state.isLoggedIn
          ? `
            <form id="pdpSubmitReviewForm" style="margin-top:8px; padding:12px 14px; border-radius:10px; background:var(--bg-main); border:1px solid var(--border-color); display:flex; flex-direction:column; gap:8px;">
              <div style="font-weight:700; font-size:13px;">Write a Customer Review as ${state.profile.name}</div>
              <div style="display:flex; gap:8px; flex-wrap:wrap;">
                <select id="pdpReviewRatingSelect" class="info-edit-input" style="display:block; max-width:170px; margin:0;">
                  <option value="5">★★★★★ (5/5)</option>
                  <option value="4">★★★★☆ (4/5)</option>
                  <option value="3">★★★☆☆ (3/5)</option>
                  <option value="2">★★☆☆☆ (2/5)</option>
                  <option value="1">★☆☆☆☆ (1/5)</option>
                </select>
                <input type="text" id="pdpReviewCommentInput" class="info-edit-input" placeholder="Share your experience with this Tehzib piece..." style="display:block; flex:1; min-width:220px; margin:0;" required />
                <button type="submit" class="service-pill-btn" style="padding:8px 16px; font-size:12.5px;">Submit Review</button>
              </div>
            </form>
          `
          : `
            <div style="margin-top:6px; padding:12px 14px; border-radius:10px; background:var(--bg-main); border:1px dashed var(--border-strong); display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:10px;">
              <span style="font-size:12.5px; color:var(--text-secondary);">Only signed-in Tehzib members can submit product reviews.</span>
              <button type="button" class="quick-screen-pill" data-open-auth="login" style="font-size:12px;">Sign In to Write a Review</button>
            </div>
          `;

        tabBody.innerHTML = `
          <div style="display:flex; flex-direction:column; gap:10px;">
            ${dynamicReviewsHtml}
            <div style="padding:10px 14px; border-radius:8px; background:var(--bg-main); border:1px solid var(--border-color);">
              <strong>Samira Rahman (Gulshan, Dhaka)</strong> <span class="stars-gold">★★★★★</span>
              <p style="font-size:13px; margin-top:3px;">Impeccable stitching and packaging! The Parisian blush tone looks even more luxurious in person.</p>
            </div>
            <div style="padding:10px 14px; border-radius:8px; background:var(--bg-main); border:1px solid var(--border-color);">
              <strong>Farzana Karim (Dhanmondi, Dhaka)</strong> <span class="stars-gold">★★★★★</span>
              <p style="font-size:13px; margin-top:3px;">Received swiftly via Dhaka Express concierge. True to size and very comfortable.</p>
            </div>
            ${reviewActionHtml}
          </div>
        `;
      } else {
        tabBody.innerHTML = `<p>${p.specs || "Crafted in Tehzib Dhaka Studio."}</p>`;
      }

      const wishBtn = document.getElementById("pdpWishlistBtn");
      wishBtn.classList.toggle("active", state.isLoggedIn && state.wishlist.includes(p.id));

      const related = PRODUCTS.filter(item => item.id !== p.id).slice(0, 4);
      document.getElementById("pdpRelatedGrid").innerHTML = related.map(item => buildProductCardHtml(item)).join("");
    }

    function computeCartTotals() {
      const selectedItems = state.cart.filter(item => item.selected);
      let subtotal = 0;
      let totalCount = 0;
      selectedItems.forEach(ci => {
        const p = PRODUCTS.find(x => x.id === ci.id);
        if (p) {
          subtotal += p.price * ci.qty;
          totalCount += ci.qty;
        }
      });
      const pct = state.voucherApplied ? (Number(state.appliedVoucherPct) || 15) : 0;
      const discount = state.voucherApplied ? Math.round(subtotal * (pct / 100)) : 0;
      const afterDiscount = Math.max(0, subtotal - discount);
      return { subtotal, discount, afterDiscount, selectedCount: selectedItems.length, totalUnits: totalCount, pct };
    }

    function renderCart() {
      const totalItems = state.cart.length;
      const allSelected = totalItems > 0 && state.cart.every(i => i.selected);
      document.getElementById("cartPageHeading").textContent = `Shopping Cart (${totalItems} Item${totalItems === 1 ? "" : "s"})`;
      document.getElementById("cartSelectAllLabel").textContent = `Select All (${totalItems} Items)`;
      const selectAllBox = document.getElementById("cartSelectAllBox");
      selectAllBox.classList.toggle("checked", allSelected);

      const container = document.getElementById("cartItemsContainer");
      if (totalItems === 0) {
        container.innerHTML = `
          <div style="padding:40px; text-align:center; background:var(--bg-elevated); border:1px solid var(--border-color); border-radius:14px;">
            <h3 class="section-heading" style="font-size:22px; margin-bottom:8px;">Your Tehzib Shopping Bag is Empty</h3>
            <p style="font-size:13.5px; color:var(--text-muted); margin-bottom:18px;">Explore our contemporary Clothing, Shoes, Fashion Bags, Accessories &amp; Mom &amp; Kids collections.</p>
            <button type="button" class="service-pill-btn" data-go-home="1" style="padding:10px 22px;">Continue Shopping</button>
          </div>
        `;
      } else {
        container.innerHTML = state.cart.map(ci => {
          const p = PRODUCTS.find(x => x.id === ci.id);
          if (!p) return "";
          const lineTotal = p.price * ci.qty;
          return `
            <div class="cart-item-card">
              <div class="cart-item-left">
                <button type="button" class="circle-checkbox ${ci.selected ? "checked" : ""}" data-cart-check="${ci.id}" aria-label="Select ${p.title}">✓</button>
                <img class="cart-item-thumb" src="${p.image}" alt="${p.title}" data-open-pdp="${p.id}" style="cursor:pointer;" />
                <div class="cart-item-meta">
                  <h4 data-open-pdp="${p.id}" style="cursor:pointer;">${p.title}</h4>
                  <div class="cart-item-variant">Variant: ${ci.variant}</div>
                  <div class="cart-item-unit">Unit Price: ${formatBDT(p.price)}</div>
                </div>
              </div>
              <div class="cart-item-right">
                <div class="qty-stepper-pill">
                  <button type="button" class="qty-step-btn" data-cart-minus="${ci.id}">&minus;</button>
                  <span class="qty-step-val">${ci.qty}</span>
                  <button type="button" class="qty-step-btn" data-cart-plus="${ci.id}">+</button>
                </div>
                <div class="cart-line-total">${formatBDT(lineTotal)}</div>
                <button type="button" class="trash-icon-btn" data-cart-remove="${ci.id}" aria-label="Remove item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path>
                  </svg>
                </button>
              </div>
            </div>
          `;
        }).join("");
      }

      const totals = computeCartTotals();
      document.getElementById("cartSummarySubtotalLabel").textContent = `Subtotal (${totals.selectedCount} items)`;
      document.getElementById("cartSummarySubtotalVal").textContent = formatBDT(totals.subtotal);
      const discRow = document.getElementById("cartDiscountRow");
      if (state.voucherApplied && totals.discount > 0) {
        discRow.style.display = "flex";
        discRow.querySelector("span").textContent = `Privilege Discount (${state.appliedVoucherCode} • ${totals.pct}%)`;
        document.getElementById("cartDiscountVal").textContent = "-" + formatBDT(totals.discount);
      } else {
        discRow.style.display = "none";
      }
      document.getElementById("cartGrandTotalVal").textContent = formatBDT(totals.afterDiscount);
      document.getElementById("cartSuggestedGrid").innerHTML = PRODUCTS.slice(4, 8).map(p => buildProductCardHtml(p)).join("");
    }

    function renderCheckout() {
      const selectedItems = state.cart.filter(i => i.selected);
      const miniList = document.getElementById("checkoutMiniCartList");
      if (selectedItems.length === 0) {
        miniList.innerHTML = `<div style="font-size:13px; color:var(--text-muted); padding:10px 0;">No items selected in cart.</div>`;
      } else {
        miniList.innerHTML = selectedItems.map(ci => {
          const p = PRODUCTS.find(x => x.id === ci.id);
          if (!p) return "";
          return `
            <div class="mini-cart-row">
              <div style="display:flex; align-items:center; gap:10px;">
                <img class="mini-cart-thumb" src="${p.image}" alt="${p.title}" />
                <div>
                  <div style="font-weight:700; font-size:13px;">${p.title}</div>
                  <div style="font-size:11.5px; color:var(--text-muted);">Qty: ${ci.qty} | ${ci.variant}</div>
                </div>
              </div>
              <div style="font-weight:700;">${formatBDT(p.price * ci.qty)}</div>
            </div>
          `;
        }).join("");
      }

      const stdCard = document.querySelector('[data-delivery-method="standard"]');
      if (stdCard) {
        stdCard.setAttribute("data-delivery-fee", state.storeSettings.standardDeliveryFee);
        const priceDiv = stdCard.querySelector("div:last-child");
        if (priceDiv) priceDiv.textContent = formatBDT(state.storeSettings.standardDeliveryFee) + ".00";
      }
      if (state.deliveryMethod === "standard") {
        state.deliveryFee = Number(state.storeSettings.standardDeliveryFee || 60);
      }

      const totals = computeCartTotals();
      const isExpress = state.deliveryMethod === "express";
      const effectiveFee = isExpress ? 0 : state.deliveryFee;
      const grand = totals.afterDiscount + effectiveFee;
      document.getElementById("checkoutSubtotalVal").textContent = formatBDT(totals.afterDiscount) + ".00";
      document.getElementById("checkoutDeliveryFeeVal").textContent = isExpress
        ? "Varies by distance"
        : (state.deliveryFee === 0 ? "FREE" : formatBDT(state.deliveryFee) + ".00");
      document.getElementById("checkoutGrandTotalVal").textContent = isExpress
        ? formatBDT(grand) + ".00 + Express"
        : formatBDT(grand) + ".00";
      document.getElementById("checkoutPaymentName").textContent = state.paymentMethod;
      document.getElementById("checkoutPaymentSub").textContent = isExpress
        ? `${formatBDT(grand)} (+ distance-based Express fee) via ${state.paymentMethod}`
        : `${formatBDT(grand)} to be paid via ${state.paymentMethod}`;
      document.getElementById("checkoutAddrTitle").textContent = `${state.profile.name} | Home`;
      document.getElementById("checkoutAddrLine").textContent = state.profile.address;
      document.getElementById("checkoutAddrPhone").textContent = state.profile.phone;
    }

    function switchAccountPanel(panelName, orderFilter = "To Receive") {
      ["details", "wishlist", "orders", "addresses", "vouchers"].forEach(name => {
        const el = document.getElementById("accountPanel-" + name);
        if (el) el.style.display = name === panelName ? "block" : "none";
      });
      document.querySelectorAll(".account-nav-btn").forEach(btn => {
        const matchPanel = btn.getAttribute("data-account-panel") === panelName;
        const btnFilter = btn.getAttribute("data-order-filter");
        if (panelName === "orders" && btnFilter) {
          btn.classList.toggle("active", btnFilter === orderFilter);
        } else {
          btn.classList.toggle("active", matchPanel && !btnFilter);
        }
      });
      const accCrumbMap = {
        details: "Account Details",
        wishlist: "My Wishlist",
        orders: "My Orders",
        addresses: "Address Book",
        vouchers: "Vouchers & Coupons"
      };
      document.getElementById("accountBreadcrumbCurrent").textContent =
        accCrumbMap[panelName] || "Account Details";

      if (panelName === "orders") {
        document.getElementById("ordersPanelTitle").textContent = `My Orders — ${orderFilter}`;
        const ordersEl = document.getElementById("ordersListContainer");
        const listToShow = state.orders.filter(o => o.status === orderFilter || orderFilter === "All");
        if (!listToShow.length) {
          ordersEl.innerHTML = `
            <div class="info-field-box" style="text-align:center; padding:28px 18px;">
              <div style="font-weight:700; font-size:15px; margin-bottom:4px;">No orders in "${orderFilter}"</div>
              <div style="font-size:13px; color:var(--text-muted); margin-bottom:14px;">${state.orders.length ? "Try another order status tab." : "You haven't placed any orders yet."}</div>
              <button type="button" class="service-pill-btn" data-go-home="1" style="padding:9px 20px;">Start Shopping</button>
            </div>
          `;
          return;
        }
        ordersEl.innerHTML = listToShow.map(o => `
          <div class="info-field-box" style="margin-bottom:12px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
            <div>
              <div style="font-weight:800; font-size:15px;">
                Order ${o.orderId} • <span style="color:var(--accent-rose-deep);">${o.status}</span>
                <span class="admin-badge admin-badge-rose" style="margin-left:6px; font-size:10.5px;">${o.source || "Storefront"}</span>
              </div>
              <div style="font-size:13px; color:var(--text-secondary); margin:3px 0;">${o.items}</div>
              <div style="font-size:12px; color:var(--text-muted);">${o.date} • ${o.paymentMethod || "Cash on Delivery"}</div>
            </div>
            <div style="font-weight:800; font-size:16px;">${formatBDT(o.total)}</div>
          </div>
        `).join("");
      }
    }

    function buildVerifyBadgeHtml(channel) {
      if (channel !== "email") return "";
      const value = state.profile.email;
      const verified = state.profile.emailVerified;
      if (!value) {
        return `<button type="button" class="verify-action-pill" data-profile-verify="email">+ Add &amp; Verify</button>`;
      }
      if (verified) {
        return `<span class="verify-status-pill verified">✓ Verified</span>`;
      }
      return `<button type="button" class="verify-action-pill" data-profile-verify="email">Verify Now</button>`;
    }

    function resolveCustomerAvatarUrl() {
      if (!state.isLoggedIn) return "";
      if (state.profile.avatar) return state.profile.avatar;
      const email = String(state.profile.email || "").trim().toLowerCase();
      if (email && email.includes("@")) {
        return `https://unavatar.io/${encodeURIComponent(email)}?fallback=false`;
      }
      return "";
    }

    function renderAccountAndWishlist() {
      const displayName = state.profile.name || "Tehzib Member";
      const initials = displayName
        .split(" ")
        .filter(Boolean)
        .map(w => w[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
      const avatarEl = document.getElementById("sidebarAvatarInitials");
      const avatarUrl = resolveCustomerAvatarUrl();
      if (avatarEl) {
        const safeInitials = initials || "TH";
        if (avatarUrl) {
          avatarEl.innerHTML = `<span class="avatar-initials-text">${safeInitials}</span><img class="profile-avatar-img" src="${escapeHtmlText(avatarUrl)}" alt="${escapeHtmlText(displayName)}" style="display:none;" onload="this.style.display='block'; if(this.previousElementSibling) this.previousElementSibling.style.display='none';" onerror="this.style.display='none'; if(this.previousElementSibling) this.previousElementSibling.style.display='';" /><span class="avatar-edit-overlay">Photo</span>`;
        } else {
          avatarEl.innerHTML = `<span class="avatar-initials-text">${safeInitials}</span><span class="avatar-edit-overlay">Photo</span>`;
        }
      }
      document.getElementById("sidebarProfileName").textContent = displayName;
      document.getElementById("sidebarProfileEmail").textContent = state.profile.email || "No email added";
      const sidePhone = document.getElementById("sidebarProfilePhone");
      if (sidePhone) sidePhone.textContent = state.profile.phone || "";
      const sideBadges = document.getElementById("sidebarVerificationBadges");
      if (sideBadges) {
        sideBadges.innerHTML = state.isLoggedIn
          ? `<span class="verify-status-pill ${state.profile.emailVerified ? "verified" : "pending"}">${state.profile.emailVerified ? "✓ Email Verified" : "Email Unverified"}</span>`
          : "";
      }

      document.getElementById("valFullName").textContent = state.profile.name || "—";
      document.getElementById("valEmail").textContent = state.profile.email || "—";
      document.getElementById("valPhone").textContent = state.profile.phone || "—";
      const valAddr = document.getElementById("valAddress");
      if (valAddr) valAddr.textContent = state.profile.address || "—";
      document.getElementById("valGender").textContent = state.profile.gender || "Not Specified";
      document.getElementById("valDob").textContent = state.profile.dob || "Not Specified";
      const emailBadge = document.getElementById("accountEmailVerifyBadge");
      if (emailBadge) emailBadge.innerHTML = state.isLoggedIn ? buildVerifyBadgeHtml("email") : "";
      const phoneBadge = document.getElementById("accountPhoneVerifyBadge");
      if (phoneBadge) phoneBadge.innerHTML = "";

      document.getElementById("accountSavedAddressText").textContent = state.profile.address
        ? `${displayName} — ${state.profile.address}${state.profile.phone ? ` (${state.profile.phone})` : ""}`
        : "No delivery address saved yet. Add one to speed up checkout.";

      const toReceiveCount = state.orders.filter(o => o.status === "To Receive").length;
      ["sidebarOrdersToReceiveBadge", "quickOrdersToReceiveBadge"].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          el.textContent = toReceiveCount;
          el.style.display = toReceiveCount > 0 ? "flex" : "none";
        }
      });

      const vouchersPanel = document.querySelector("#accountPanel-vouchers .info-grid-2");
      if (vouchersPanel) {
        vouchersPanel.innerHTML = state.vouchers.map(v => `
          <div class="info-field-box">
            <div class="info-field-label">${v.title} (${v.discountPct}% OFF)</div>
            <div class="info-field-val">Code: ${v.code}</div>
            <p style="font-size:12px; color:var(--text-muted); margin-top:4px;">${v.desc || "Valid on all curated Tehzib collections."}</p>
          </div>
        `).join("");
      }

      let wishedProducts = state.wishlist.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
      if (state.wishlistSort === "price-asc") wishedProducts.sort((a, b) => a.price - b.price);
      else if (state.wishlistSort === "price-desc") wishedProducts.sort((a, b) => b.price - a.price);

      document.getElementById("wishlistCounterSubtitle").textContent = `(${wishedProducts.length} Items)`;
      document.getElementById("sidebarWishCount").textContent = wishedProducts.length;

      const buildWishlistCard = p => `
        <div class="product-card">
          <div class="product-card-media" data-open-pdp="${p.id}">
            <button type="button" class="card-wish-btn" data-remove-wish="${p.id}" aria-label="Remove item">
              🗑
            </button>
            <img src="${p.image}" alt="${p.title}" />
          </div>
          <h4 class="product-card-title" data-open-pdp="${p.id}">${p.title}</h4>
          <div>
            <span class="stock-badge ${p.stockStatus === "IN STOCK" ? "stock-in" : "stock-low"}">${p.stockStatus}</span>
          </div>
          <div class="price-current" style="margin-bottom:4px;">${formatBDT(p.price)}</div>
          <button type="button" class="wish-add-pill-btn" data-quick-add="${p.id}">+ Add to Cart</button>
        </div>
      `;

      document.getElementById("accountWishlistPreviewGrid").innerHTML =
        wishedProducts.slice(0, 3).map(buildWishlistCard).join("") || `<p style="font-size:13px; color:var(--text-muted);">Your wishlist is currently empty.</p>`;

      document.getElementById("wishlistMainGrid").innerHTML =
        wishedProducts.map(buildWishlistCard).join("") || `<p style="font-size:14px; color:var(--text-muted);">No items saved in your wishlist yet.</p>`;
    }

    function renderHeaderDropdowns() {
      const unreadCount = state.notifications.filter(n => n.unread).length;
      const subEl = document.getElementById("dropdownNotifSub");
      if (subEl) {
        subEl.textContent = unreadCount > 0 ? `${unreadCount} unread notification${unreadCount === 1 ? "" : "s"}` : "All caught up";
      }

      const buildDropNotifHtml = (n) => `
        <div class="dropdown-notif-item ${n.unread ? "unread" : ""}" data-notif-id="${n.id}">
          <div style="display:flex; align-items:flex-start; gap:10px;">
            <div class="notif-icon-circle" style="width:34px; height:34px; font-size:14px; flex-shrink:0;">
              <span>${n.icon}</span>
              ${n.unread ? `<span class="notif-unread-dot"></span>` : ""}
            </div>
            <div>
              <div style="font-weight:700; font-size:13px; margin-bottom:2px;">${n.title}</div>
              <div style="font-size:12px; color:var(--text-secondary); line-height:1.35;">${n.body}</div>
            </div>
          </div>
          <div style="font-size:10.5px; font-weight:700; white-space:nowrap; color:var(--text-muted);">${n.time}</div>
        </div>
      `;

      const signedOutNotifHtml = `
        <div style="padding:18px 14px; text-align:center;">
          <div style="font-weight:700; font-size:13.5px; margin-bottom:4px;">Sign in to see your alerts</div>
          <div style="font-size:12px; color:var(--text-muted); margin-bottom:10px;">Order updates, delivery tracking &amp; Privé rewards appear here.</div>
          <button type="button" class="service-pill-btn" data-open-auth="login" style="padding:7px 16px; font-size:12px;">Sign In</button>
        </div>
      `;
      const emptyNotifHtml = `<div style="padding:16px 14px; text-align:center; font-size:12.5px; color:var(--text-muted);">No notifications yet.</div>`;
      const notifListHtml = !state.isLoggedIn
        ? signedOutNotifHtml
        : (state.notifications.map(buildDropNotifHtml).join("") || emptyNotifHtml);

      const listEl = document.getElementById("headerNotifDropdownList");
      if (listEl) {
        listEl.innerHTML = notifListHtml;
      }
      const mobileListEl = document.getElementById("mobileDrawerNotifList");
      if (mobileListEl) {
        mobileListEl.innerHTML = notifListHtml;
      }
      const markAllBtn = document.getElementById("dropdownMarkAllReadBtn");
      if (markAllBtn) markAllBtn.style.display = state.isLoggedIn ? "" : "none";
      if (subEl && !state.isLoggedIn) subEl.textContent = "Not signed in";

      const accountLabel = document.querySelector("#navAccountBtn span:last-child");
      if (accountLabel) {
        accountLabel.textContent = state.isLoggedIn
          ? ((state.profile.name || "Account").split(" ")[0].slice(0, 12))
          : "Sign In";
      }
      const headerAvatarImg = document.getElementById("headerAccountAvatarImg");
      const headerDefaultSvg = document.getElementById("headerAccountDefaultSvg");
      const headerAvatarUrl = resolveCustomerAvatarUrl();
      if (headerAvatarImg && headerDefaultSvg) {
        if (state.isLoggedIn && headerAvatarUrl) {
          if (headerAvatarImg.getAttribute("data-src") !== headerAvatarUrl) {
            headerAvatarImg.setAttribute("data-src", headerAvatarUrl);
            headerAvatarImg.onload = () => {
              headerAvatarImg.style.display = "block";
              headerDefaultSvg.style.display = "none";
            };
            headerAvatarImg.onerror = () => {
              headerAvatarImg.style.display = "none";
              headerDefaultSvg.style.display = "";
            };
            headerAvatarImg.src = headerAvatarUrl;
          }
        } else {
          headerAvatarImg.removeAttribute("data-src");
          headerAvatarImg.removeAttribute("src");
          headerAvatarImg.style.display = "none";
          headerDefaultSvg.style.display = "";
        }
      }

      const metricsGrid = document.getElementById("accountDropdownMetricsGrid");
      if (metricsGrid) metricsGrid.style.display = state.isLoggedIn ? "" : "none";
      const dropLinks = document.getElementById("accountDropdownLinks");
      if (dropLinks) dropLinks.style.display = state.isLoggedIn ? "" : "none";

      const authBox = document.getElementById("accountDropdownAuthBox");
      if (authBox) {
        if (state.isLoggedIn) {
          const contactLine = state.profile.email || state.profile.phone || "";
          authBox.innerHTML = `
            <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; margin-bottom:10px;">
              <div style="min-width:0;">
                <div style="font-weight:800; font-size:14.5px;">${state.profile.name}</div>
                <div style="font-size:12px; color:var(--text-muted); overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${contactLine}</div>
              </div>
              <span class="stock-badge stock-in" style="margin:0;">SIGNED IN</span>
            </div>
            <div style="display:flex; gap:8px;">
              <button type="button" class="quick-screen-pill" data-acc-drop-nav="details" style="flex:1; text-align:center;">My Account</button>
              <button type="button" class="bulk-delete-btn" id="dropdownSignOutBtn" style="padding:5px 12px; font-size:12px;">Sign Out</button>
            </div>
          `;
        } else {
          authBox.innerHTML = `
            <div style="font-weight:800; font-size:14.5px; margin-bottom:3px;">Welcome to Tehzib Privé</div>
            <div style="font-size:12px; color:var(--text-secondary); margin-bottom:10px;">Sign in or create an account to manage orders &amp; redeem your Privé points.</div>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
              <button type="button" class="service-pill-btn" data-open-auth="login" style="padding:8px 12px; font-size:12.5px; width:100%;">Sign In</button>
              <button type="button" class="quick-screen-pill" data-open-auth="signup" style="padding:8px 12px; font-size:12.5px; width:100%; text-align:center;">Sign Up</button>
            </div>
          `;
        }
      }

      const ratingEl = document.getElementById("dropdownUserRatingVal");
      if (ratingEl) ratingEl.textContent = state.userRating;
      const pointsEl = document.getElementById("dropdownRewardPointsVal");
      if (pointsEl) pointsEl.textContent = Number(state.rewardPoints || 0).toLocaleString("en-IN") + " Pts";

      const mobName = document.getElementById("mobileDrawerUserName");
      const mobStatus = document.getElementById("mobileDrawerUserStatus");
      const mobAuthBtn = document.getElementById("mobileOpenAuthBtn");
      if (mobName) mobName.textContent = state.isLoggedIn ? state.profile.name : "Not Signed In";
      if (mobStatus) {
        mobStatus.textContent = state.isLoggedIn
          ? `★ ${state.userRating} • ✦ ${Number(state.rewardPoints || 0).toLocaleString("en-IN")} Pts`
          : "Sign in or create an account";
      }
      if (mobAuthBtn) mobAuthBtn.textContent = state.isLoggedIn ? "Sign Out" : "Sign In";
    }

    function renderNotifications() {
      renderHeaderDropdowns();
      const groups = ["Today", "Yesterday", "Earlier"];
      const wrapper = document.getElementById("notificationsListWrapper");
      if (!state.notifications.length) {
        wrapper.innerHTML = `<div style="padding:30px 16px; text-align:center; font-size:13.5px; color:var(--text-muted);">You have no notifications yet.</div>`;
        return;
      }
      wrapper.innerHTML = groups.map(groupName => {
        const items = state.notifications.filter(n => n.group === groupName);
        if (!items.length) return "";
        return `
          <div class="notif-group-title">${groupName}</div>
          ${items.map(n => `
            <div class="notif-item-row ${n.unread ? "unread" : ""}" data-notif-id="${n.id}">
              <div style="display:flex; align-items:flex-start; gap:14px;">
                <div class="notif-icon-circle">
                  <span>${n.icon}</span>
                  ${n.unread ? `<span class="notif-unread-dot"></span>` : ""}
                </div>
                <div>
                  <div style="font-weight:700; font-size:15px; margin-bottom:3px;">${n.title}</div>
                  <div style="font-size:13.5px; color:var(--text-secondary);">${n.body}</div>
                </div>
              </div>
              <div style="font-size:11.5px; font-weight:700; white-space:nowrap; color:${n.isRecent ? "var(--status-green)" : "var(--text-muted)"};">
                ${n.time}
              </div>
            </div>
          `).join("")}
        `;
      }).join("");
    }

    function updateBadges() {
      const cartCount = state.cart.reduce((acc, i) => acc + i.qty, 0);
      const wishCount = state.isLoggedIn ? state.wishlist.length : 0;
      const unreadNotifs = state.isLoggedIn ? state.notifications.filter(n => n.unread).length : 0;

      document.getElementById("headerCartBadge").textContent = cartCount;
      document.getElementById("mobileDockCartBadge").textContent = cartCount;
      document.getElementById("headerWishBadge").textContent = wishCount;

      const notifBadge = document.getElementById("headerNotifBadge");
      const dockNotifBadge = document.getElementById("mobileDockNotifBadge");
      notifBadge.textContent = unreadNotifs;
      notifBadge.style.display = unreadNotifs > 0 ? "flex" : "none";
      dockNotifBadge.textContent = unreadNotifs;
      dockNotifBadge.style.display = unreadNotifs > 0 ? "flex" : "none";

      const mCart = document.getElementById("mobileMenuCartCount");
      const mWish = document.getElementById("mobileMenuWishCount");
      const mNotif = document.getElementById("mobileMenuNotifCount");
      if (mCart) mCart.textContent = cartCount;
      if (mWish) mWish.textContent = wishCount;
      if (mNotif) mNotif.textContent = unreadNotifs;

      const syncText = document.getElementById("liveSyncStatusText");
      if (syncText) {
        syncText.textContent = `Dynamic DB Synced (${PRODUCTS.length} Products • ${state.orders.length} Orders)`;
      }
    }


        // ========================================================================
    // TEHZIB ENTERPRISE ERP & CMS ENGINE (OPERATIONS MANAGEMENT SYSTEM - OMS)
    // ========================================================================
    const ERP_STORAGE_KEY = "tehzib_unified_ems_v8";
    const AUTH_SESSION_KEY = "tehzib_admin_session_v4";

    const AUTHORIZED_ADMINS = {
      "admin@tehzib.com": { pass: "Tehzib@2027", name: "Founder & Store Owner", role: "Founder & Store Owner (Full Access)", avatar: "TA" },
      "tehzib-admin": { pass: "Tehzib@2027", name: "Tehzib Master Admin", role: "Founder & Store Owner (Full Access)", avatar: "TA" },
      "ops@tehzib.com": { pass: "Tehzib@2027", name: "Inventory & Courier Lead", role: "Order Fulfillment & Courier Ops", avatar: "OP" },
      "finance@tehzib.com": { pass: "Tehzib@2027", name: "Finance & COD Controller", role: "Finance & COD Reconciliation", avatar: "FN" }
    };

    let uploadedSpImageData = "";
    let uploadedHeroImageData = "";
    let posDraftItems = [];

    function createDefaultErpDatabase() {
      return {
        cms: {
          topOfferText: "COMPLIMENTARY GIFT WRAPPING ON ALL ORDERS • EXPRESS DELIVERY ACROSS DHAKA",
          topPhone: "+880 1711-889900",
          secTrendTitle: "Trendsetters",
          secNewTitle: "New Arrivals",
          secJfyTitle: "Just For You",
          newsletterTitle: "Join the Tehzib Private Circle",
          newsletterSub: "Receive private previews of seasonal drops, bespoke sizing invitations, and atelier stories.",
          footerBio: "Tehzib is a contemporary Bangladeshi fashion, footwear, accessories, and lifestyle house blending Parisian Blush aesthetics with artisanal heritage.",
          footerAddress: "Uttara Sector 12, Dhaka, Bangladesh",
          footerEmail: "concierge@tehzib.com",
          footerPhone: "+880 1711-889900",
          footerCopyright: "© 2027 Tehzib. All rights reserved.",
          socials: {
            fb: "https://facebook.com/tehzib.bd",
            insta: "https://instagram.com/tehzib.bd",
            tiktok: "https://tiktok.com/@tehzib.bd",
            threads: "https://threads.net/@tehzib.bd"
          },
          heroSliders: [
            {
              id: "hs1",
              eyebrow: "TEHZIB ATELIER • 2027 COLLECTION",
              title: "Parisian Blush & Velvet Noir Elegance",
              desc: "Hand-draped mulberry satin blouses, statement hair accessories, quilted bags, and artisanal footwear crafted for contemporary Bangladesh.",
              cta: "Explore Collection",
              category: "Accessories",
              image: IMG.hero
            },
            {
              id: "hs2",
              eyebrow: "ARTISANAL FOOTWEAR & STATEMENT BAGS",
              title: "Sculpted Slingbacks & Quilted Crossbody Bags",
              desc: "Memory-foam cushioned kitten heels and champagne-hardware evening clutches designed for effortless day-to-gala transitions.",
              cta: "Shop Shoes & Bags",
              category: "Fashion",
              image: IMG.heels
            },
            {
              id: "hs3",
              eyebrow: "MOM & MINI CURATED CAPSULE",
              title: "Organic Breathable Comfort for Mom & Kids",
              desc: "Hypoallergenic combed cotton loungewear sets, pastel plush backpacks, and keepsake nursery organizers.",
              cta: "Discover Mom & Kids",
              category: "Mom & Kids",
              image: IMG.mom_kids
            }
          ],
          categories: [
            { name: "Fashion", imgKey: "cream_bag", enabled: true, rolloutPhase: "Day-1 Core", subs: ["Crossbody Bags", "Evening Clutches", "Silk Scarves & Wraps", "Statement Belts"] },
            { name: "Accessories", imgKey: "necklace", enabled: true, rolloutPhase: "Day-1 Core", subs: ["Hair Clips & Pins", "Pearl & Gold Jewelry", "Dress Watches", "Vanity & Jewelry Boxes"] },
            { name: "Mom & Kids", imgKey: "mom_kids", enabled: true, rolloutPhase: "Active Capsule", subs: ["Mom & Mini Sets", "Kids Backpacks", "Nursery Storage Baskets", "Keepsake Gifts"] },
            { name: "Shoes", imgKey: "heels", enabled: true, rolloutPhase: "Active Capsule", subs: ["Slingback Heels", "Embellished Mules", "Block Heel Sandals", "Festive Flats"] },
            { name: "Clothing", imgKey: "silk_blouse", enabled: true, rolloutPhase: "Active Capsule", subs: ["Satin Blouses & Tops", "Co-Ord Sets", "Modest Outerwear", "Festive Atelier Ensembles"] },
            { name: "Gifts & Seasonal", imgKey: "giftbox", enabled: false, rolloutPhase: "Organized for Phase-2", subs: ["Curated Gift Hampers", "Eid Luxury Boxes", "Bridal Bridesmaid Kits"] }
          ],
          footerSections: [
            {
              id: "fsec_company",
              title: "Company",
              items: [
                { id: "fi_about", label: "About Us", type: "info", modalTitle: "About Tehzib Lifestyle", message: "Tehzib Lifestyle Bangladesh is a contemporary fashion, footwear, accessories, and Mom & Kids house headquartered in Uttara Sector 12, Dhaka, blending Parisian Blush aesthetics with studio craftsmanship." },
                { id: "fi_return", label: "Return Policy", type: "info", modalTitle: "Return & Exchange Policy", message: "Tehzib Lifestyle Bangladesh offers authentic studio-curated Clothing, Shoes, Fashion Bags, Jewellery & Mom & Kids collections with 7-day easy exchanges and Dhaka concierge delivery." },
                { id: "fi_faq", label: "FAQs", type: "info", modalTitle: "Frequently Asked Questions", message: "Find quick answers on bespoke sizing, Inside Dhaka (৳70) & Nationwide (৳130) courier timelines, bKash/Nagad/COD payments, and 7-day exchanges from our Uttara Sector 12 studio." },
                { id: "fi_privacy", label: "Privacy Policy", type: "info", modalTitle: "Privacy Policy", message: "Your personal profile, contact numbers, delivery addresses, and order records are strictly protected under Tehzib Privé security standards." },
                { id: "fi_terms", label: "Terms & Conditions", type: "info", modalTitle: "Terms & Conditions", message: "All orders are subject to real-time stock reservation at our Uttara Sector 12 hub. Express delivery charges vary based on distance." }
              ]
            },
            {
              id: "fsec_care",
              title: "Customer Care",
              items: [
                { id: "fi_guarantee", label: "Money-back Guarantee", type: "info", modalTitle: "Authenticity & Quality Guarantee", message: "Every Tehzib piece undergoes 3-stage quality inspection before dispatch. If any item arrives with a defect, we offer an immediate free replacement or 100% money-back refund." },
                { id: "fi_prod_ret", label: "Product Returns", type: "info", modalTitle: "Easy 7-Day Returns", message: "Initiate a return or size exchange within 7 days of receiving your parcel with original tags and blush gift packaging intact." },
                { id: "fi_support", label: "Support Center", type: "info", modalTitle: "24/7 Dhaka Support Center", message: "Call our Uttara Sector 12 Dhaka concierge desk at +880 1711-889900 or email concierge@tehzib.com for instant order and styling support." },
                { id: "fi_shipping", label: "Shipping", type: "info", modalTitle: "Nationwide Bangladesh Shipping", message: "We dispatch daily via Steadfast & Pathao Courier: Inside Dhaka Standard (৳70), Express Dhaka Concierge (distance-based), and Outside Dhaka Home Delivery (৳130)." }
              ]
            },
            {
              id: "fsec_pop_cats",
              title: "Popular Categories",
              items: [
                { id: "fi_cat_cl", label: "Clothing", type: "category", targetCat: "Clothing", modalTitle: "Clothing Collection", message: "Shop mulberry satin blouses, breathable linen co-ord sets, and festive atelier ensembles." },
                { id: "fi_cat_sh", label: "Shoes & Heels", type: "category", targetCat: "Shoes", modalTitle: "Shoes & Heels Collection", message: "Explore cushioned slingback kitten heels, pearl mules, and block heel sandals." },
                { id: "fi_cat_fa", label: "Fashion Bags & Watches", type: "category", targetCat: "Fashion", modalTitle: "Fashion Bags & Watches", message: "Discover quilted crossbody bags, crystal evening clutches, and silk wraps." },
                { id: "fi_cat_ac", label: "Jewellery & Accessories", type: "category", targetCat: "Accessories", modalTitle: "Jewellery & Accessories", message: "Browse Parisian blush claw clips, freshwater pearl chokers, and rose-gold watches." },
                { id: "fi_cat_mk", label: "Mom & Kids", type: "category", targetCat: "Mom & Kids", modalTitle: "Mom & Kids Capsule", message: "Hypoallergenic organic cotton sets, kids backpacks, and nursery organizers." }
              ]
            }
          ]
        },

        suppliers: [
          {
            id: "SUP-01",
            name: "Chawkbazar & Uttara Accessories Hub",
            contact: "Tariqul Islam",
            phone: "+880 1711-223344",
            category: "Accessories & Hair Clips",
            moq: 12,
            leadDays: 2,
            quotedRange: "৳ 140 – ৳ 320 / unit",
            terms: "Cash on Delivery (GRN)",
            address: "Uttara Sector 10 / Chawkbazar Wholesale, Dhaka",
            paidAmount: 92100,
            payable: 0,
            defectClaims: "1 claim resolved (2 chipped clips replaced free)",
            notes: "Reliable 48-hour restock for claw clips, pearl pins & hair accessories. Ideal for testing new designs with small 12-pc MOQs."
          },
          {
            id: "SUP-02",
            name: "Aurelia Luxury Bags & Hardware Atelier",
            contact: "Sabrina Chowdhury",
            phone: "+880 1912-887766",
            category: "Fashion Bags & Clutches",
            moq: 20,
            leadDays: 5,
            quotedRange: "৳ 1,150 – ৳ 1,650 / unit",
            terms: "50% Advance • 50% on Delivery",
            address: "Banani Road 11 & Mirpur Leather Zone, Dhaka",
            paidAmount: 118000,
            payable: 84000,
            defectClaims: "0 open claims (99.2% QC pass rate)",
            notes: "Strong craftsmanship on quilted crossbody bags and crystal box clutches."
          },
          {
            id: "SUP-03",
            name: "Dhaka Mulberry Silk & Apparel Studio",
            contact: "Mahmudul Hasan",
            phone: "+880 1819-556677",
            category: "Clothing & Fabrics",
            moq: 15,
            leadDays: 4,
            quotedRange: "৳ 1,100 – ৳ 1,750 / unit",
            terms: "Net 15 Days Credit",
            address: "BSCIC Industrial Area, Tongi, Gazipur",
            paidAmount: 145000,
            payable: 48000,
            defectClaims: "1 minor stitching rework completed",
            notes: "Produces satin wrap blouses and breathable linen co-ord sets."
          },
          {
            id: "SUP-04",
            name: "Tehzib Signature Footwear & Kids Craft Studio",
            contact: "Nafis Rahman",
            phone: "+880 1611-334455",
            category: "Footwear & Leather",
            moq: 24,
            leadDays: 6,
            quotedRange: "৳ 850 – ৳ 1,450 / unit",
            terms: "50% Advance • 50% on Delivery",
            address: "Sector 12 Uttara & Hazaribagh Craft Zone, Dhaka",
            paidAmount: 85000,
            payable: 22000,
            defectClaims: "0 open claims (cushioning & stitching verified)",
            notes: "Handcrafted slingback kitten heels, pearl mules, and Mom & Kids footwear sets."
          }
        ],

        products: [],

        shipments: [
          {
            id: "PO-2027-100",
            date: "2027-02-12",
            supplierId: "SUP-01",
            productId: "p_claw",
            sku: "TEH-ACC-CLP-PNK",
            productTitle: "Signature Parisian Pink Claw Clip",
            moq: 5,
            orderedQty: 5,
            receivedQty: 5,
            damagedQty: 0,
            costPrice: 180,
            landedCost: 210,
            wholesalePrice: 280,
            retailPrice: 450,
            warehouse: "Uttara Sector 12 Hub • Bin A1",
            status: "RECEIVED"
          },
          {
            id: "PO-2027-101",
            date: "2027-02-22",
            supplierId: "SUP-02",
            productId: "p18",
            sku: "THZ-FA-007",
            productTitle: "Champagne Crystal Box Clutch (Awaiting Shipment)",
            moq: 20,
            orderedQty: 30,
            receivedQty: 0,
            damagedQty: 0,
            costPrice: 1480,
            landedCost: 1600,
            wholesalePrice: 2400,
            retailPrice: 3390,
            warehouse: "Uttara Sector 12 Hub • Rack B2",
            status: "IN_TRANSIT"
          },
          {
            id: "PO-2027-102",
            date: "2027-02-23",
            supplierId: "SUP-01",
            productId: "p19",
            sku: "THZ-AC-008",
            productTitle: "Freshwater Pearl & Gold Layered Choker (Awaiting Shipment)",
            moq: 15,
            orderedQty: 40,
            receivedQty: 0,
            damagedQty: 0,
            costPrice: 790,
            landedCost: 890,
            wholesalePrice: 1350,
            retailPrice: 1890,
            warehouse: "Uttara Sector 12 Hub • Vault A1",
            status: "PENDING_GRN"
          }
        ],

        preorders: [
          {
            id: "PRE-2027-01",
            sku: "THZ-FA-007",
            productTitle: "Champagne Crystal Box Clutch (Eid Atelier Drop)",
            customerName: "Tasnima Ahmed",
            customerPhone: "+880 1711-334455",
            supplierName: "Aurelia Luxury Bags & Hardware Atelier",
            leadTime: "7 Days (Local Atelier Batch)",
            expectedArrival: "2027-03-04",
            orderValue: 3390,
            depositHeld: 1000,
            status: "Deposit Collected • In Production"
          },
          {
            id: "PRE-2027-02",
            sku: "THZ-AC-008",
            productTitle: "Freshwater Pearl & Gold Layered Choker",
            customerName: "Maliha Rahman",
            customerPhone: "+880 1819-778899",
            supplierName: "Chawkbazar & Uttara Accessories Hub",
            leadTime: "4 Days",
            expectedArrival: "2027-03-01",
            orderValue: 1890,
            depositHeld: 500,
            status: "Arriving at Uttara Hub Tomorrow"
          }
        ],

        orders: [
          {
            id: "ORD-2027-901",
            date: "2027-02-25 11:20",
            customerName: "Tasnima Ahmed",
            customerPhone: "+880 1711-334455",
            customerAddress: "House 18, Road 7, Sector 12, Uttara, Dhaka",
            channel: "Storefront",
            campaignSource: "Facebook Page Posts",
            tier: "RETAIL",
            courier: "Steadfast Courier",
            trackingNumber: "SF-BD-882910",
            dispatchDate: "2027-02-25",
            deliveryAttempts: 1,
            deliveryOutcome: "Delivered on first attempt; COD collected by rider",
            deliveryMethod: "Inside Dhaka Standard (৳ 70)",
            deliveryFee: 70,
            discount: 0,
            paymentMethod: "Cash on Delivery (COD)",
            paymentStatus: "Paid",
            codSettled: true,
            packagingCost: 35,
            courierActualCost: 60,
            codFee: 36,
            items: [
              { productId: "p_claw", sku: "TEH-ACC-CLP-PNK", title: "Signature Parisian Pink Claw Clip", variant: "Blush Pink", qty: 2, unitPrice: 450, unitCost: 210 },
              { productId: "p1", sku: "THZ-CL-001", title: "Blush Satin Wrap Blouse", variant: "M", qty: 1, unitPrice: 2650, unitCost: 1280 }
            ],
            subtotal: 3550,
            totalRevenue: 3620,
            totalCogs: 1700,
            status: "Delivered"
          },
          {
            id: "ORD-2027-902",
            date: "2027-02-26 14:40",
            customerName: "Farzana Karim",
            customerPhone: "+880 1911-667788",
            customerAddress: "Road 11, Banani, Dhaka",
            channel: "Instagram",
            campaignSource: "Paid Meta / Instagram Ads",
            tier: "RETAIL",
            courier: "Pathao Courier",
            trackingNumber: "PTH-992041",
            dispatchDate: "2027-02-26",
            deliveryAttempts: 1,
            deliveryOutcome: "Delivered to concierge desk; COD collected by Pathao, awaiting bank settlement",
            deliveryMethod: "Inside Dhaka Standard (৳ 70)",
            deliveryFee: 70,
            discount: 150,
            paymentMethod: "Cash on Delivery (COD)",
            paymentStatus: "Collected",
            codSettled: false,
            packagingCost: 45,
            courierActualCost: 65,
            codFee: 28,
            items: [
              { productId: "p4", sku: "THZ-FA-004-CRM", title: "Quilted Cream Crossbody Bag", variant: "Alabaster Cream", qty: 1, unitPrice: 2850, unitCost: 1350 }
            ],
            subtotal: 2850,
            totalRevenue: 2770,
            totalCogs: 1350,
            status: "Delivered"
          },
          {
            id: "ORD-2027-903",
            date: "2027-02-27 10:15",
            customerName: "Meherin Chowdhury",
            customerPhone: "+880 1819-445566",
            customerAddress: "House 42, Road 27, Dhanmondi, Dhaka",
            channel: "Facebook",
            campaignSource: "Facebook Community Groups",
            tier: "RETAIL",
            courier: "Steadfast Courier",
            trackingNumber: "SF-BD-884102",
            dispatchDate: "2027-02-27",
            deliveryAttempts: 1,
            deliveryOutcome: "Out for delivery with Steadfast Dhanmondi hub",
            deliveryMethod: "Inside Dhaka Standard (৳ 70)",
            deliveryFee: 70,
            discount: 0,
            paymentMethod: "Cash on Delivery (COD)",
            paymentStatus: "Pending",
            codSettled: false,
            packagingCost: 40,
            courierActualCost: 60,
            codFee: 33,
            items: [
              { productId: "p6", sku: "THZ-SH-006", title: "Rose-Gold Mesh Minimalist Watch", variant: "28mm Petite", qty: 1, unitPrice: 3250, unitCost: 1550 }
            ],
            subtotal: 3250,
            totalRevenue: 3320,
            totalCogs: 1550,
            status: "Dispatched"
          },
          {
            id: "ORD-2027-904",
            date: "2027-02-28 09:30",
            customerName: "Sadia Afrin",
            customerPhone: "+880 1715-990011",
            customerAddress: "Sector 7, Road 9, Uttara, Dhaka",
            channel: "Storefront",
            campaignSource: "Homepage Offer Bar",
            tier: "RETAIL",
            courier: "Unassigned (Awaiting Packing)",
            trackingNumber: "PENDING",
            dispatchDate: "—",
            deliveryAttempts: 0,
            deliveryOutcome: "New customer order — stock reserved automatically",
            deliveryMethod: "Inside Dhaka Standard (৳ 70)",
            deliveryFee: 70,
            discount: 0,
            paymentMethod: "bKash Merchant",
            paymentStatus: "Paid",
            codSettled: true,
            packagingCost: 40,
            courierActualCost: 60,
            codFee: 0,
            items: [
              { productId: "p3", sku: "THZ-SH-003-38", title: "Blush Slingback Kitten Heels", variant: "EU 38", qty: 1, unitPrice: 2950, unitCost: 1420 }
            ],
            subtotal: 2950,
            totalRevenue: 3020,
            totalCogs: 1420,
            status: "New"
          }
        ],

        returnsLog: [
          {
            id: "RET-2027-01",
            orderId: "ORD-2027-894",
            customerName: "Nabila Haque",
            items: "1x Blush Slingback Kitten Heels (EU 37 → Exchange for EU 38)",
            status: "Exchange Dispatched",
            actionNote: "Returned pair inspected clean; restocked EU 37 to Available (+1)",
            refundAmount: 0
          }
        ],

        crmCustomers: [
          {
            id: "CUST-101",
            name: "Tasnima Ahmed",
            phone: "+880 1711-334455",
            email: "tasnima.ahmed@example.com",
            tier: "VIP",
            rating: 4.9,
            points: 1450,
            ordersCount: 5,
            completedOrders: 5,
            spend: 18450,
            returnsCount: 0,
            failedCount: 0,
            address: "House 18, Road 7, Sector 12, Uttara, Dhaka",
            notes: "Loves blush hair clips & satin wraps; always accepts COD on 1st attempt.",
            consent: { sms: true, whatsapp: true, email: true },
            referralCode: "TASNIMA-VIP10"
          },
          {
            id: "CUST-102",
            name: "Farzana Karim",
            phone: "+880 1911-667788",
            email: "farzana.k@example.com",
            tier: "Repeat",
            rating: 4.8,
            points: 820,
            ordersCount: 3,
            completedOrders: 3,
            spend: 9120,
            returnsCount: 0,
            failedCount: 0,
            address: "Road 11, Banani, Dhaka",
            notes: "Prefers afternoon delivery before 4 PM at office reception.",
            consent: { sms: true, whatsapp: true, email: false },
            referralCode: "FARZANA-THZ"
          },
          {
            id: "CUST-103",
            name: "Meherin Chowdhury",
            phone: "+880 1819-445566",
            email: "meherin.c@example.com",
            tier: "Repeat",
            rating: 5.0,
            points: 640,
            ordersCount: 2,
            completedOrders: 1,
            spend: 3450,
            returnsCount: 0,
            failedCount: 0,
            address: "House 42, Road 27, Dhanmondi, Dhaka",
            notes: "Found Tehzib via Facebook Group review post.",
            consent: { sms: true, whatsapp: true, email: true },
            referralCode: "MEHERIN-THZ"
          },
          {
            id: "CUST-104",
            name: "Sadia Afrin",
            phone: "+880 1715-990011",
            email: "sadia.afrin@example.com",
            tier: "New",
            rating: 5.0,
            points: 250,
            ordersCount: 1,
            completedOrders: 0,
            spend: 0,
            returnsCount: 0,
            failedCount: 0,
            address: "Sector 7, Road 9, Uttara, Dhaka",
            notes: "First-time storefront buyer; paid via bKash.",
            consent: { sms: true, whatsapp: false, email: true },
            referralCode: "SADIA-NEW"
          }
        ],

        reviews: [
          {
            id: "REV-01",
            date: "2027-02-26",
            customerName: "Tasnima Ahmed",
            sku: "TEH-ACC-CLP-PNK",
            productTitle: "Signature Parisian Pink Claw Clip",
            rating: 5,
            comment: "The spring tension on this pink claw clip is amazing—holds thick hair all day and the pearl finish looks so luxe!",
            status: "Approved"
          },
          {
            id: "REV-02",
            date: "2027-02-27",
            customerName: "Farzana Karim",
            sku: "THZ-FA-004",
            productTitle: "Quilted Cream Crossbody Bag",
            rating: 5,
            comment: "Came in Tehzib's blush gift box. The quilting and champagne chain look exactly like the photos.",
            status: "Approved"
          },
          {
            id: "REV-03",
            date: "2027-02-28",
            customerName: "Anika Tabassum",
            sku: "THZ-SH-003",
            productTitle: "Blush Slingback Kitten Heels",
            rating: 5,
            comment: "Wore these for 6 hours at a wedding reception in Gulshan—zero foot pain thanks to the cushioned insole!",
            status: "Pending Approval"
          }
        ],

        coupons: [
          {
            code: "TEHZIB10",
            discountPct: 10,
            minOrder: 1200,
            startDate: "2027-01-01",
            endDate: "2027-12-31",
            usageLimit: 500,
            usedCount: 42,
            source: "Homepage Offer Bar",
            attributedOrders: 18,
            attributedRevenue: 54200,
            active: true
          },
          {
            code: "BLUSH15",
            discountPct: 15,
            minOrder: 2500,
            startDate: "2027-02-01",
            endDate: "2027-05-30",
            usageLimit: 200,
            usedCount: 19,
            source: "Paid Meta / Instagram Ads",
            attributedOrders: 14,
            attributedRevenue: 46800,
            active: true
          },
          {
            code: "FBGROUP12",
            discountPct: 12,
            minOrder: 1000,
            startDate: "2027-02-10",
            endDate: "2027-04-15",
            usageLimit: 100,
            usedCount: 11,
            source: "Facebook Community Groups",
            attributedOrders: 11,
            attributedRevenue: 28900,
            active: true
          }
        ],

        expenseCategories: [
          "Packaging & Unboxing",
          "Advertising & Boosts",
          "Transport & Local Sourcing",
          "Courier & Delivery Charges",
          "Studio Rent & Utilities",
          "Other E-Commerce Opex"
        ],

        supplierCategories: [
          "Accessories & Hair Clips",
          "Fashion Bags & Clutches",
          "Clothing & Fabrics",
          "Footwear & Leather",
          "Mom & Kids"
        ],

        paymentTermsList: [
          "50% Advance • 50% on Delivery",
          "Cash on Delivery (GRN)",
          "Net 15 Days Credit",
          "100% Advance Paid"
        ],

        staffRoles: [
          "Founder & Store Owner (Full Access)",
          "Finance & Accounts Controller",
          "Procurement & Supplier Manager",
          "Inventory & Warehouse Lead",
          "Order Fulfillment & Courier Ops",
          "Marketing, Merchandising & CMS"
        ],

        staffMembers: [
          {
            id: "STF-101",
            name: "Tahmid Alvi",
            phone: "+880 1711-889900",
            email: "admin@tehzib.com",
            role: "Founder & Store Owner (Full Access)",
            dept: "Executive & Strategy",
            status: "Active",
            accesses: ["Dashboard & BI", "Product & Catalogue", "Inventory & Stock", "Suppliers & PO", "Orders & POS", "Customer CRM", "Expenses & Payments", "Storefront CMS", "Working Team Admin"]
          },
          {
            id: "STF-102",
            name: "Farhan Islam",
            phone: "+880 1819-223311",
            email: "finance@tehzib.com",
            role: "Finance & Accounts Controller",
            dept: "Finance & Accounts",
            status: "Active",
            accesses: ["Dashboard & BI", "Suppliers & PO", "Expenses & Payments", "Working Team Admin"]
          },
          {
            id: "STF-103",
            name: "Nadia Sultana",
            phone: "+880 1912-445588",
            email: "procurement@tehzib.com",
            role: "Procurement & Supplier Manager",
            dept: "Sourcing & Procurement",
            status: "Active",
            accesses: ["Product & Catalogue", "Inventory & Stock", "Suppliers & PO", "Expenses & Payments"]
          },
          {
            id: "STF-104",
            name: "Tanvir Hossain",
            phone: "+880 1611-778844",
            email: "ops@tehzib.com",
            role: "Order Fulfillment & Courier Ops",
            dept: "Uttara Hub Dispatch",
            status: "Active",
            accesses: ["Inventory & Stock", "Orders & POS", "Customer CRM"]
          },
          {
            id: "STF-105",
            name: "Lamia Chowdhury",
            phone: "+880 1715-664422",
            email: "cms@tehzib.com",
            role: "Marketing, Merchandising & CMS",
            dept: "Brand & Growth",
            status: "Active",
            accesses: ["Dashboard & BI", "Product & Catalogue", "Customer CRM", "Storefront CMS"]
          }
        ],

        expenses: [
          { id: "EXP-301", date: "2027-02-08", title: "Custom Blush Foil Gift Boxes, Tissue & Satin Ribbon (300 sets)", details: "300 matte blush magnetic gift boxes with gold foil Tehzib logo + satin ribbons from Uttara Packaging Press (Inv #UP-882)", category: "Packaging & Unboxing", account: "acc_bkash", responsibleStaffId: "STF-103", responsibleStaffName: "Nadia Sultana", responsibleStaffRole: "Procurement & Supplier Manager", amount: 4200 },
          { id: "EXP-302", date: "2027-02-15", title: "Meta & Instagram Sponsored Carousel Campaign (Claw Clips & Bags)", details: "7-day conversion ad boost targeting Dhaka, Gulshan, Banani, Uttara & Dhanmondi shoppers for Trendsetters collection", category: "Advertising & Boosts", account: "acc_bank", responsibleStaffId: "STF-105", responsibleStaffName: "Lamia Chowdhury", responsibleStaffRole: "Marketing, Merchandising & CMS", amount: 5500 },
          { id: "EXP-303", date: "2027-02-19", title: "Local Van & Rickshaw Transport from Chawkbazar / Banani Suppliers", details: "Covered van pickup for 3 cartons of claw clips and quilted crossbody bags to Uttara Sector 12 Hub", category: "Transport & Local Sourcing", account: "acc_cash", responsibleStaffId: "STF-104", responsibleStaffName: "Tanvir Hossain", responsibleStaffRole: "Order Fulfillment & Courier Ops", amount: 1150 },
          { id: "EXP-304", date: "2027-02-24", title: "Bubble Wrap, Poly Mailers & Thermal Barcode Labels", details: "5 rolls heavy-duty bubble wrap and 1,000 waterproof courier flyers for Steadfast & Pathao dispatch", category: "Packaging & Unboxing", account: "acc_cash", responsibleStaffId: "STF-104", responsibleStaffName: "Tanvir Hossain", responsibleStaffRole: "Order Fulfillment & Courier Ops", amount: 950 }
        ],

        paymentsLog: [
          { id: "PAY-501", date: "2027-02-12", supplierId: "SUP-01", supplierName: "Chawkbazar & Uttara Accessories Hub", poId: "PO-2027-100", paymentType: "Advance Payment", amount: 45000, accountKey: "acc_bkash", accountName: "bKash Merchant Wallet", advanceByStaff: "Nadia Sultana", dueByStaff: "Farhan Islam", details: "Initial 50% advance for hair clips & pearl accessories batch" },
          { id: "PAY-502", date: "2027-02-15", supplierId: "SUP-01", supplierName: "Chawkbazar & Uttara Accessories Hub", poId: "PO-2027-100", paymentType: "Due Payment", amount: 47100, accountKey: "acc_cash", accountName: "Cash in Hand (Uttara Hub)", advanceByStaff: "Nadia Sultana", dueByStaff: "Farhan Islam", details: "Full due settled upon GRN inspection at Uttara Sector 12 Hub" },
          { id: "PAY-503", date: "2027-02-20", supplierId: "SUP-02", supplierName: "Aurelia Luxury Bags & Hardware Atelier", poId: "PO-2027-101", paymentType: "Advance Payment", amount: 118000, accountKey: "acc_bank", accountName: "City Bank Corporate A/C", advanceByStaff: "Tahmid Alvi", dueByStaff: "Farhan Islam", details: "50% production advance via City Bank corporate transfer for quilted bags & clutches" },
          { id: "PAY-504", date: "2027-02-22", supplierId: "SUP-03", supplierName: "Dhaka Mulberry Silk & Apparel Studio", poId: "PO-2027-098", paymentType: "Due Payment", amount: 65000, accountKey: "acc_bank", accountName: "City Bank Corporate A/C", advanceByStaff: "Nadia Sultana", dueByStaff: "Farhan Islam", details: "Partial due installment paid for mulberry satin blouse batch" },
          { id: "PAY-505", date: "2027-02-24", supplierId: "SUP-04", supplierName: "Tehzib Signature Footwear & Kids Craft Studio", poId: "PO-2027-099", paymentType: "Advance Payment", amount: 85000, accountKey: "acc_nagad", accountName: "Nagad Merchant Wallet", advanceByStaff: "Nadia Sultana", dueByStaff: "Tahmid Alvi", details: "Advance paid for slingback kitten heels & Mom-Kids cotton capsule" }
        ],

        accounts: {
          acc_bank: { name: "City Bank Corporate A/C", balance: 184500 },
          acc_cash: { name: "Cash in Hand (Uttara Hub)", balance: 42800 },
          acc_bkash: { name: "bKash Merchant Wallet", balance: 68400 },
          acc_nagad: { name: "Nagad Merchant Wallet", balance: 29500 }
        },

        emsNotifications: [
          { id: "EN-1", time: "10 mins ago", type: "Order Confirmation", msg: "Order ORD-2027-904 placed by Sadia Afrin (৳ 3,020 via bKash) — 1x Blush Slingback Kitten Heels reserved." },
          { id: "EN-2", time: "25 mins ago", type: "Low-Stock Alert", msg: "SKU TEH-ACC-CLP-PNK (Signature Parisian Pink Claw Clip) has 3 units available (Reorder Threshold: 3)." },
          { id: "EN-3", time: "2 hours ago", type: "Dispatch Update", msg: "Order ORD-2027-903 handed over to Steadfast Courier (Tracking: SF-BD-884102)." },
          { id: "EN-4", time: "Yesterday", type: "COD Settlement Alert", msg: "Order ORD-2027-902 delivered by Pathao Courier — ৳ 2,770 COD collected by rider, pending bank settlement." }
        ],

        inventoryMovements: [
          { time: "2027-02-12 10:00", productId: "p_claw", productTitle: "Signature Parisian Pink Claw Clip", sku: "TEH-ACC-CLP-PNK", variant: "Blush Pink", type: "PO Receipt (+5 Available)", note: "PO-2027-100 received from Chawkbazar & Uttara Accessories Hub (Purchase ৳180, Landed ৳210)" },
          { time: "2027-02-25 11:20", productId: "p_claw", productTitle: "Signature Parisian Pink Claw Clip", sku: "TEH-ACC-CLP-PNK", variant: "Blush Pink", type: "Order Sold (-2 Available → 3 Left)", note: "Order ORD-2027-901 delivered to Tasnima Ahmed (5 initial - 2 sold = 3 available)" },
          { time: "2027-02-27 10:15", productId: "p6", productTitle: "Rose-Gold Mesh Minimalist Watch", sku: "THZ-AC-005", variant: "28mm Petite", type: "Order Reserved (-1 Avail, +1 Reserved)", note: "Order ORD-2027-903 dispatched via Steadfast Courier" },
          { time: "2027-02-28 09:30", productId: "p3", productTitle: "Blush Slingback Kitten Heels", sku: "THZ-SH-003", variant: "EU 38", type: "Order Reserved (-1 Avail, +1 Reserved)", note: "Order ORD-2027-904 placed by Sadia Afrin" }
        ]
      };
    }

    let ERP_DB = createDefaultErpDatabase();

    function loadErpDatabase() {
      if (window.__TEHZIB_INITIAL_SERVER_STATE__ && window.__TEHZIB_INITIAL_SERVER_STATE__.erpDb) {
        try {
          ERP_DB = JSON.parse(JSON.stringify(window.__TEHZIB_INITIAL_SERVER_STATE__.erpDb));
          if (window.__TEHZIB_INITIAL_SERVER_STATE__.logos) {
            if (window.__TEHZIB_INITIAL_SERVER_STATE__.logos.light) TEHZIB_LOGOS.light = window.__TEHZIB_INITIAL_SERVER_STATE__.logos.light;
            if (window.__TEHZIB_INITIAL_SERVER_STATE__.logos.dark) TEHZIB_LOGOS.dark = window.__TEHZIB_INITIAL_SERVER_STATE__.logos.dark;
          }
          localStorage.setItem(ERP_STORAGE_KEY, JSON.stringify(ERP_DB));
          return;
        } catch (e) {
          console.error("Failed to hydrate ERP_DB from server state:", e);
        }
      }
      try {
        const raw = localStorage.getItem(ERP_STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed && parsed.products && parsed.suppliers && parsed.cms) {
            const defDb = createDefaultErpDatabase();
            ERP_DB = parsed;
            if (!Array.isArray(ERP_DB.cms.footerSections) || !ERP_DB.cms.footerSections.length) {
              ERP_DB.cms.footerSections = defDb.cms.footerSections;
            }
            if (!Array.isArray(ERP_DB.expenseCategories) || !ERP_DB.expenseCategories.length) {
              ERP_DB.expenseCategories = defDb.expenseCategories;
            }
            if (!Array.isArray(ERP_DB.supplierCategories) || !ERP_DB.supplierCategories.length) {
              ERP_DB.supplierCategories = defDb.supplierCategories;
            }
            if (!Array.isArray(ERP_DB.paymentTermsList) || !ERP_DB.paymentTermsList.length) {
              ERP_DB.paymentTermsList = defDb.paymentTermsList;
            }
            if (!Array.isArray(ERP_DB.staffRoles) || !ERP_DB.staffRoles.length) {
              ERP_DB.staffRoles = defDb.staffRoles;
            }
            if (!Array.isArray(ERP_DB.staffMembers) || !ERP_DB.staffMembers.length) {
              ERP_DB.staffMembers = defDb.staffMembers;
            }
            if (!Array.isArray(ERP_DB.paymentsLog) || !ERP_DB.paymentsLog.length) {
              ERP_DB.paymentsLog = defDb.paymentsLog;
            }
            if (Array.isArray(ERP_DB.expenses)) {
              ERP_DB.expenses.forEach((ex, idx) => {
                if (!ex.details) ex.details = ex.title + " — Verified voucher entry at Uttara Sector 12 Hub";
                if (!ex.responsibleStaffName) {
                  const fallbackStaff = ERP_DB.staffMembers[idx % ERP_DB.staffMembers.length];
                  ex.responsibleStaffId = fallbackStaff.id;
                  ex.responsibleStaffName = fallbackStaff.name;
                  ex.responsibleStaffRole = fallbackStaff.role;
                }
              });
            }
            if (Array.isArray(ERP_DB.suppliers)) {
              ERP_DB.suppliers.forEach(s => {
                if (!s.advanceByStaff) s.advanceByStaff = "Nadia Sultana";
                if (!s.dueByStaff) s.dueByStaff = "Farhan Islam";
                if (!s.advanceAccount) s.advanceAccount = "acc_bkash";
                if (!s.dueAccount) s.dueAccount = "acc_bank";
              });
            }
            if (Array.isArray(ERP_DB.inventoryMovements)) {
              ERP_DB.inventoryMovements = ERP_DB.inventoryMovements.map(mv => ({
                ...mv,
                productTitle: resolveMovementProductName(mv)
              }));
            }
            ERP_DB.products.forEach((p, idx) => {
              if (!p.image || p.image.length < 30) {
                const keys = ["necklace", "silk_blouse", "clothing_set", "heels", "cream_bag", "watch", "mom_kids", "champagne_bag", "giftbox"];
                p.image = IMG[keys[idx % keys.length]];
              }
            });
          }
        }
      } catch (e) {
        ERP_DB = createDefaultErpDatabase();
      }
    }

    function saveErpDatabase() {
      try {
        localStorage.setItem(ERP_STORAGE_KEY, JSON.stringify(ERP_DB));
      } catch (e) {}
      if (typeof syncErpToStorefront === "function") {
        syncErpToStorefront();
      }
      if (typeof window.__tehzibScheduleServerSync === "function") {
        window.__tehzibScheduleServerSync({
          erpDb: ERP_DB,
          logos: TEHZIB_LOGOS,
          notifications: state.notifications
        });
      }
    }

    function formatBdt(n) {
      const num = Math.round(Number(n) || 0);
      return "৳ " + num.toLocaleString("en-IN");
    }

    function nowTimestamp() {
      const d = new Date();
      const pad = x => String(x).padStart(2, "0");
      return `2027-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
    }

    // ========================================================================
    // ADMIN AUTHENTICATION GATE (ID & PASSWORD REQUIRED)
    // ========================================================================
    function initAuthGate() {
      const form = document.getElementById("adminLoginForm");
      const quickFillBtn = document.getElementById("quickFillAdminBtn");
      const togglePassBtn = document.getElementById("togglePassVisBtn");
      const passInput = document.getElementById("loginAdminPass");
      const idInput = document.getElementById("loginAdminId");
      const roleSelect = document.getElementById("loginRoleSelect");

      if (quickFillBtn) {
        quickFillBtn.addEventListener("click", () => {
          idInput.value = "admin@tehzib.com";
          passInput.value = "Tehzib@2027";
          document.getElementById("authErrorBanner").style.display = "none";
          showToast("Admin credentials filled — click Authenticate to enter Tehzib OMS");
        });
      }

      if (togglePassBtn) {
        togglePassBtn.addEventListener("click", () => {
          passInput.type = passInput.type === "password" ? "text" : "password";
        });
      }

      if (form) {
        form.addEventListener("submit", e => {
          e.preventDefault();
          const rawId = (idInput.value || "").trim().toLowerCase();
          const rawPass = (passInput.value || "").trim();
          const chosenRole = roleSelect.value;

          const remember = Boolean(document.getElementById("rememberSessionCheck")?.checked);
          fetch("/api/auth/admin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ identifier: rawId, password: rawPass, remember })
          })
            .then(r => r.json())
            .then(res => {
              const matched = AUTHORIZED_ADMINS[rawId];
              if ((res && res.ok && res.data?.session) || (matched && rawPass === matched.pass)) {
                document.getElementById("authErrorBanner").style.display = "none";
                const srvSess = res?.data?.session;
                const sessionObj = {
                  id: srvSess?.email || idInput.value.trim(),
                  role: chosenRole || srvSess?.role || matched?.role || "Founder & Store Owner (Full Access)",
                  avatar: srvSess?.avatar || matched?.avatar || "TA"
                };
                if (remember) {
                  try {
                    localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(sessionObj));
                  } catch (err) {}
                }
                unlockErpWorkspace(sessionObj);
                showToast(`Authenticated into Tehzib OMS as ${sessionObj.id}`);
              } else {
                document.getElementById("authErrorBanner").style.display = "block";
              }
            })
            .catch(() => {
              const matched = AUTHORIZED_ADMINS[rawId];
              if (matched && rawPass === matched.pass) {
                document.getElementById("authErrorBanner").style.display = "none";
                const sessionObj = { id: idInput.value.trim(), role: chosenRole || matched.role, avatar: matched.avatar };
                unlockErpWorkspace(sessionObj);
                showToast(`Authenticated into Tehzib OMS as ${sessionObj.id}`);
              } else {
                document.getElementById("authErrorBanner").style.display = "block";
              }
            });
        });
      }

      const logoutBtn = document.getElementById("sidebarLogoutBtn");
      if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
          try {
            localStorage.removeItem(AUTH_SESSION_KEY);
          } catch (e) {}
          fetch("/api/auth/admin", { method: "DELETE" }).catch(() => {});
          window.__erpAdminAuthenticated = false;
          window.__erpSessionObj = null;
          document.getElementById("erpAppShell").style.display = "none";
          document.getElementById("authGateScreen").style.display = "flex";
          document.getElementById("loginAdminPass").value = "";
          showToast("Signed out of Tehzib Backend OMS");
        });
      }
    }

    function unlockErpWorkspace(sessionObj) {
      window.__erpAdminAuthenticated = true;
      window.__erpSessionObj = sessionObj;
      if (state.appMode === "admin") {
        document.getElementById("authGateScreen").style.display = "none";
        document.getElementById("erpAppShell").style.display = "block";
      }
      document.getElementById("activeAdminName").textContent = sessionObj.id;
      document.getElementById("activeAdminRole").textContent = sessionObj.role;
      document.getElementById("activeAdminAvatar").textContent = sessionObj.avatar || "TA";
      if (window.__pendingErpTargetView) {
        switchErpView(window.__pendingErpTargetView);
        window.__pendingErpTargetView = "";
      } else {
        renderAllErpModules();
      }
    }

    // ========================================================================
    // NAVIGATION & SUBTABS
    // ========================================================================
    const VIEW_TITLES = {
      dashboard: ["Dashboard & Business Intelligence Reports", "Daily operational numbers: Orders awaiting action, Delivered vs. Placed revenue, COD reconciliation & stock alerts"],
      products: ["Product & Catalogue Management", "Create, edit, publish & archive products • Multi-image & video gallery • Category images & subcategories"],
      inventory: ["Inventory & Stock Management", "Track Available, Reserved, Sold, Returned & Damaged stock by SKU • Purchase & Landed Cost • Automatic order deduction"],
      orders: ["Order Management, Courier Integration & Returns", "Workflow: New → Confirmed → Packed → Dispatched → Delivered • Courier booking, COD tracking, returns & invoices"],
      crm: ["Customer Management (CRM), Reviews & Loyalty", "Customer profiles, delivery addresses, order/return history, segments (New, Repeat, VIP, Inactive), reviews & loyalty"],
      procurement: ["Supplier, Purchasing (PO) & Preorder Management", "Small-MOQ local suppliers vs. direct import economics comparator, PO receiving, supplier balances & preorders"],
      finance: ["Payments, Expenses, COD Reconciliation & Profitability", "Distinguish Sales Revenue, Cash Collected, Courier COD Receivables, Landed Costs, Expenses & Net Contribution"],
      marketing_cms: ["Promotions, Coupon & Brand CMS", "Create coupons/vouchers, hero section sliders, offer banner, brand logo, dynamic footer sections & info popups"],
      working_team: ["Working Team — Staff Roles, Access Control, Expense & Payment Reports", "Create staff, assign roles & module permissions, and audit staff-wise operating expenses, advance payments & due settlements"]
    };

    function switchErpView(viewKey) {
      const aliasMap = { reports: "dashboard", cms: "marketing_cms", hrm: "working_team", expenses_assets: "finance", accounts: "finance" };
      const resolvedKey = aliasMap[viewKey] || viewKey;
      document.querySelectorAll(".erp-view").forEach(v => v.classList.remove("active"));
      const target = document.getElementById("view-" + resolvedKey);
      if (target) target.classList.add("active");

      document.querySelectorAll(".erp-nav-btn").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-erp-nav") === resolvedKey);
      });

      if (VIEW_TITLES[resolvedKey]) {
        document.getElementById("topbarPageTitle").textContent = VIEW_TITLES[resolvedKey][0];
        document.getElementById("topbarPageSub").textContent = VIEW_TITLES[resolvedKey][1];
      }

      const sb = document.getElementById("erpSidebar");
      if (sb) sb.classList.remove("mobile-open");
      renderAllErpModules();
    }

    function switchDashTab(tabKey) {
      document.querySelectorAll("[data-dash-tab]").forEach(b => {
        b.classList.toggle("active", b.getAttribute("data-dash-tab") === tabKey);
      });
      ["overview", "analytics", "capabilities"].forEach(k => {
        const el = document.getElementById("dashTab-" + k);
        if (el) el.style.display = k === tabKey ? "block" : "none";
      });
      syncAllTopTableScrollbars();
    }

    function switchOrdTab(tabKey) {
      document.querySelectorAll("[data-ord-tab]").forEach(b => {
        b.classList.toggle("active", b.getAttribute("data-ord-tab") === tabKey);
      });
      ["pipeline", "returns", "pos"].forEach(k => {
        const el = document.getElementById("ordTab-" + k);
        if (el) el.style.display = k === tabKey ? "block" : "none";
      });
      syncAllTopTableScrollbars();
    }

    function switchCrmTab(tabKey) {
      document.querySelectorAll("[data-crm-tab]").forEach(b => {
        b.classList.toggle("active", b.getAttribute("data-crm-tab") === tabKey);
      });
      ["directory", "reviews", "loyalty"].forEach(k => {
        const el = document.getElementById("crmTab-" + k);
        if (el) el.style.display = k === tabKey ? "block" : "none";
      });
      syncAllTopTableScrollbars();
    }

    function switchProcTab(tabKey) {
      document.querySelectorAll("[data-proc-tab]").forEach(b => {
        b.classList.toggle("active", b.getAttribute("data-proc-tab") === tabKey);
      });
      ["shipments", "suppliers", "entry", "preorders"].forEach(k => {
        const el = document.getElementById("procTab-" + k);
        if (el) el.style.display = k === tabKey ? "block" : "none";
      });
      syncAllTopTableScrollbars();
    }

    function switchFinTab(tabKey) {
      document.querySelectorAll("[data-fin-tab]").forEach(b => {
        b.classList.toggle("active", b.getAttribute("data-fin-tab") === tabKey);
      });
      ["cod", "contribution", "expenses"].forEach(k => {
        const el = document.getElementById("finTab-" + k);
        if (el) el.style.display = k === tabKey ? "block" : "none";
      });
      syncAllTopTableScrollbars();
    }

    function switchCmsTab(tabKey) {
      document.querySelectorAll("[data-cms-tab]").forEach(b => {
        b.classList.toggle("active", b.getAttribute("data-cms-tab") === tabKey);
      });
      ["coupons", "multichannel", "sliders", "header_sections"].forEach(k => {
        const el = document.getElementById("cmsTab-" + k);
        if (el) el.style.display = k === tabKey ? "block" : "none";
      });
      syncAllTopTableScrollbars();
    }

    function insertTextFormat(textareaId, snippet) {
      const el = document.getElementById(textareaId);
      if (!el) return;
      const start = el.selectionStart || el.value.length;
      const end = el.selectionEnd || el.value.length;
      el.value = el.value.substring(0, start) + snippet + el.value.substring(end);
      el.focus();
    }

    // ========================================================================
    // E-COMMERCE METRICS & FINANCIAL SEPARATION ENGINE
    // ========================================================================
    function computeErpMetrics() {
      const orders = ERP_DB.orders || [];
      const awaitingOrders = orders.filter(o => ["New", "Confirmed", "Packed"].includes(o.status));
      const dispatchedOrders = orders.filter(o => o.status === "Dispatched");
      const deliveredOrders = orders.filter(o => o.status === "Delivered");
      const failedOrReturned = orders.filter(o => ["Cancelled", "Delivery Failed", "Returned", "Refunded"].includes(o.status));

      // Placed Order Value (Pipeline) vs Dispatched vs Earned Revenue (Delivered ONLY)
      const placedPipelineValue = awaitingOrders.reduce((s, o) => s + (Number(o.totalRevenue) || 0), 0);
      const dispatchedTransitValue = dispatchedOrders.reduce((s, o) => s + (Number(o.totalRevenue) || 0), 0);
      const earnedDeliveredRevenue = deliveredOrders.reduce((s, o) => s + (Number(o.totalRevenue) || 0), 0);
      const deliveredLandedCogs = deliveredOrders.reduce((s, o) => s + (Number(o.totalCogs) || 0), 0);
      const deliveredPackagingAndCourier = deliveredOrders.reduce((s, o) => s + (Number(o.packagingCost || 35) + Number(o.courierActualCost || 60) + Number(o.codFee || 0)), 0);

      const grossProfitDelivered = earnedDeliveredRevenue - deliveredLandedCogs;
      const totalOrderContribution = grossProfitDelivered - deliveredPackagingAndCourier;
      const avgContributionPerOrder = deliveredOrders.length ? Math.round(totalOrderContribution / deliveredOrders.length) : 0;

      const operatingExpenses = (ERP_DB.expenses || []).reduce((s, e) => s + (Number(e.amount) || 0), 0);
      const netOperatingProfit = totalOrderContribution - operatingExpenses;

      // Cash Collected vs Pending Courier COD
      const settledPaidOrders = orders.filter(o => o.paymentStatus === "Paid" && o.status !== "Refunded");
      const cashCollectedFromOrders = settledPaidOrders.reduce((s, o) => s + (Number(o.totalRevenue) || 0) - (Number(o.codFee) || 0), 0);
      const pendingCodOrders = orders.filter(o => o.paymentMethod.includes("COD") && (o.paymentStatus === "Pending" || o.paymentStatus === "Collected") && !["Cancelled", "Delivery Failed", "Returned", "Refunded"].includes(o.status));
      const pendingCodReceivable = pendingCodOrders.reduce((s, o) => s + (Number(o.totalRevenue) || 0), 0);

      const completedOutcomes = deliveredOrders.length + failedOrReturned.length;
      const deliverySuccessRate = completedOutcomes > 0 ? ((deliveredOrders.length / completedOutcomes) * 100).toFixed(1) : "100.0";

      // Stock Aggregates
      const products = ERP_DB.products || [];
      const totalAvailUnits = products.reduce((s, p) => s + (Number(p.available) || 0), 0);
      const totalReservedUnits = products.reduce((s, p) => s + (Number(p.reserved) || 0), 0);
      const totalSoldUnits = products.reduce((s, p) => s + (Number(p.sold) || 0), 0);
      const totalDamagedUnits = products.reduce((s, p) => s + (Number(p.damaged) || 0), 0);

      const inventoryLandedValue = products.reduce((s, p) => s + (Number(p.available) || 0) * (Number(p.landedCost || p.costPrice) || 0), 0);
      const inventoryRetailValue = products.reduce((s, p) => s + (Number(p.available) || 0) * (Number(p.price) || 0), 0);

      const publishedCount = products.filter(p => p.isPublished).length;
      const unpublishedCount = products.filter(p => !p.isPublished).length;
      const pendingShipmentsCount = (ERP_DB.shipments || []).filter(sh => sh.status !== "RECEIVED").length;
      const lowStockProducts = products.filter(p => p.isPublished && Number(p.available) <= Number(p.reorderThreshold || 5));

      const totalAccountsPayable = (ERP_DB.suppliers || []).reduce((s, sup) => s + (Number(sup.payable) || 0), 0);

      return {
        ordersTodayCount: orders.length,
        awaitingActionCount: awaitingOrders.length,
        dispatchedCount: dispatchedOrders.length,
        deliveredCount: deliveredOrders.length,
        failedOrReturnedCount: failedOrReturned.length,
        deliverySuccessRate,
        placedPipelineValue,
        dispatchedTransitValue,
        earnedDeliveredRevenue,
        deliveredLandedCogs,
        grossProfitDelivered,
        totalOrderContribution,
        avgContributionPerOrder,
        operatingExpenses,
        netOperatingProfit,
        cashCollectedFromOrders,
        pendingCodReceivable,
        pendingCodCount: pendingCodOrders.length,
        totalAvailUnits,
        totalReservedUnits,
        totalSoldUnits,
        totalDamagedUnits,
        inventoryLandedValue,
        inventoryRetailValue,
        publishedCount,
        unpublishedCount,
        pendingShipmentsCount,
        lowStockCount: lowStockProducts.length,
        lowStockProducts,
        totalAccountsPayable
      };
    }

    // ========================================================================
    // RENDER ALL OMS MODULES
    // ========================================================================
    function renderAllErpModules() {
      const m = computeErpMetrics();

      // Update Sidebar Badges
      const setTxt = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
      setTxt("navBadgeAction", `${m.awaitingActionCount} Act`);
      setTxt("navBadgeProducts", `${ERP_DB.products.length} SKUs`);
      setTxt("navBadgeLowStock", `${m.lowStockCount} Alert`);
      setTxt("navBadgeUnpublished", `${m.pendingShipmentsCount} POs`);
      setTxt("navBadgeOrders", `${ERP_DB.orders.length}`);
      setTxt("navBadgeCrm", `${ERP_DB.crmCustomers.length}`);
      setTxt("navBadgeCod", formatBdt(m.pendingCodReceivable));
      setTxt("navBadgeTeam", `${(ERP_DB.staffMembers || []).length} Staff`);

      populateAllDynamicOptionSelects();
      renderDashboard(m);
      renderProductsMasterTable();
      renderInventoryModule(m);
      renderOrdersModule(m);
      renderCrmModule(m);
      renderProcurementModule(m);
      renderFinanceModule(m);
      renderCmsModule();
      renderWorkingTeamModule();
      syncAllTopTableScrollbars();
    }



    // ------------------------------------------------------------------------
    // 8. DASHBOARD & BUSINESS INTELLIGENCE REPORTS
    // ------------------------------------------------------------------------
    function renderDashboard(m) {
      const kpiGrid = document.getElementById("dashboardKpiGrid");
      if (kpiGrid) {
        kpiGrid.innerHTML = `
          <div class="kpi-card">
            <div class="kpi-label"><span>Orders &amp; Awaiting Action</span><span>🛍</span></div>
            <div class="kpi-value mono">${m.ordersTodayCount} Orders (${m.awaitingActionCount} Action)</div>
            <div class="kpi-sub">
              <span>In-Transit: ${m.dispatchedCount}</span>
              <span class="badge badge-orange">${m.awaitingActionCount} Need Dispatch</span>
            </div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label"><span>Delivered &amp; Success Rate</span><span>🚚</span></div>
            <div class="kpi-value mono">${m.deliveredCount} Delivered (${m.deliverySuccessRate}%)</div>
            <div class="kpi-sub">
              <span>Exceptions/Returns: ${m.failedOrReturnedCount}</span>
              <span class="badge badge-green">Success Rate</span>
            </div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label"><span>Earned Revenue (Delivered Only)</span><span>📈</span></div>
            <div class="kpi-value mono">${formatBdt(m.earnedDeliveredRevenue)}</div>
            <div class="kpi-sub">
              <span>Placed Pipeline: ${formatBdt(m.placedPipelineValue + m.dispatchedTransitValue)}</span>
              <span class="badge badge-blue">Earned</span>
            </div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label"><span>Cash Collected vs. Pending COD</span><span>🏦</span></div>
            <div class="kpi-value mono">${formatBdt(m.cashCollectedFromOrders)}</div>
            <div class="kpi-sub">
              <span>Unsettled COD: ${formatBdt(m.pendingCodReceivable)}</span>
              <span class="badge badge-rose">${m.pendingCodCount} COD Pending</span>
            </div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label"><span>Net Profit &amp; Order Contribution</span><span>💎</span></div>
            <div class="kpi-value mono">${formatBdt(m.netOperatingProfit)}</div>
            <div class="kpi-sub">
              <span>Avg Contrib/Order: ${formatBdt(m.avgContributionPerOrder)}</span>
              <span class="badge ${m.netOperatingProfit >= 0 ? 'badge-green' : 'badge-danger'}">Gross: ${formatBdt(m.grossProfitDelivered)}</span>
            </div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label"><span>Inventory &amp; Reorder Alerts</span><span>📦</span></div>
            <div class="kpi-value mono">${m.totalAvailUnits} Avail / ${m.totalReservedUnits} Res</div>
            <div class="kpi-sub">
              <span>Landed Val: ${formatBdt(m.inventoryLandedValue)}</span>
              <span class="badge ${m.lowStockCount > 0 ? 'badge-danger' : 'badge-green'}">${m.lowStockCount} Low Stock</span>
            </div>
          </div>
        `;
      }

      // Financial separation bars
      const barsEl = document.getElementById("dashboardFinancialBars");
      if (barsEl) {
        const maxRef = Math.max(1, m.earnedDeliveredRevenue + m.placedPipelineValue + m.dispatchedTransitValue);
        const rows = [
          { label: "1. Placed & In-Transit Order Pipeline (Not Yet Earned Revenue)", val: m.placedPipelineValue + m.dispatchedTransitValue, color: "#B87A28" },
          { label: "2. Earned Sales Revenue (Successfully Delivered Orders Only)", val: m.earnedDeliveredRevenue, color: "#2D7A53" },
          { label: "3. Actual Cash Collected (Settled COD + bKash/Nagad/Bank)", val: m.cashCollectedFromOrders, color: "#35689A" },
          { label: "4. Pending Courier COD Settlement Receivable", val: m.pendingCodReceivable, color: "#B57E7A" },
          { label: "5. Landed Product Cost (COGS) + Operating Expenses", val: m.deliveredLandedCogs + m.operatingExpenses, color: "#B84A58" },
          { label: "6. True Net Profit (After Landed Cost, Courier, Packaging & Ads)", val: Math.max(0, m.netOperatingProfit), color: "#2D7A53" }
        ];
        barsEl.innerHTML = rows.map(r => {
          const pct = Math.min(100, Math.max(8, Math.round((r.val / maxRef) * 100)));
          return `
            <div class="bar-row">
              <div class="bar-label-line">
                <span>${r.label}</span>
                <span class="mono">${formatBdt(r.val)}</span>
              </div>
              <div class="bar-track">
                <div class="bar-fill" style="width:${pct}%;background:${r.color};"></div>
              </div>
            </div>
          `;
        }).join("");
      }

      // 5-Stage Vertical Flow Diagram (Light & Dark Theme Compatible + Highlighted Live Stage Info from 2nd image)
      const flowEl = document.getElementById("dashboardVerticalFlowDiagram");
      if (flowEl) {
        const flowBoxes = [
          {
            num: "1",
            title: "Product & Supplier Setup",
            sub: "Products, variants, prices, purchase costs",
            highlight: `${ERP_DB.products.length} SKUs • ${ERP_DB.suppliers.length} Suppliers`,
            target: "products"
          },
          {
            num: "2",
            title: "Inventory Control",
            sub: "Available stock, reserved stock, reorder alerts",
            highlight: `${m.totalAvailUnits} Avail • ${m.totalReservedUnits} Reserved • ${m.lowStockCount} Alerts`,
            target: "inventory"
          },
          {
            num: "3",
            title: "Order Processing",
            sub: "Order confirmation, packing, dispatch",
            highlight: `${m.awaitingActionCount} Awaiting • ${m.dispatchedCount} Dispatched`,
            target: "orders"
          },
          {
            num: "4",
            title: "Delivery & Payment Reconciliation",
            sub: "Delivered orders, COD collection, returns",
            highlight: `${m.deliveredCount} Delivered • ${formatBdt(m.pendingCodReceivable)} COD`,
            target: "finance"
          },
          {
            num: "5",
            title: "Business Intelligence",
            sub: "Profitability, stock movement, sales and restocking decisions",
            highlight: `Earned: ${formatBdt(m.earnedDeliveredRevenue)} • Profit: ${formatBdt(m.netOperatingProfit)}`,
            target: "dashboard"
          }
        ];
        flowEl.innerHTML = flowBoxes.map((b, idx) => `
          <div class="erp-flow-stage-box" onclick="switchErpView('${b.target}')">
            <div class="erp-flow-stage-top">
              <span class="erp-flow-stage-badge">STAGE ${b.num}</span>
              <span style="font-size:11px;font-weight:700;color:var(--accent-rose-deep);">Open Module →</span>
            </div>
            <div class="erp-flow-stage-title">${b.title}</div>
            <div class="erp-flow-stage-sub">${b.sub}</div>
            <div class="erp-flow-stage-highlight">✦ ${b.highlight}</div>
          </div>
          ${idx < flowBoxes.length - 1 ? `<div class="erp-flow-stage-arrow">↓</div>` : ``}
        `).join("");
      }

      // Recent / Action Orders
      const recentOrdersEl = document.getElementById("dashboardRecentOrdersBody");
      if (recentOrdersEl) {
        recentOrdersEl.innerHTML = ERP_DB.orders.slice(0, 6).map(o => `
          <tr>
            <td class="mono" style="font-weight:700;">${o.id}</td>
            <td>
              <div style="font-weight:600;">${o.customerName}</div>
              <div style="font-size:10.5px;color:var(--text-muted);">${o.customerPhone}</div>
            </td>
            <td><span class="badge badge-rose">${o.channel}</span></td>
            <td class="mono" style="font-weight:700;">${formatBdt(o.totalRevenue)}</td>
            <td><span class="badge ${o.paymentStatus === 'Paid' ? 'badge-green' : 'badge-orange'}">${o.paymentStatus}</span></td>
            <td><span class="badge ${o.status === 'Delivered' ? 'badge-green' : (o.status === 'New' ? 'badge-orange' : 'badge-blue')}">${o.status}</span></td>
            <td>
              <button type="button" class="btn btn-sm btn-secondary" onclick="advanceOrderWorkflowStep('${o.id}')">Next Step →</button>
            </td>
          </tr>
        `).join("");
      }

      // Low Stock & Pending POs
      const lowStockEl = document.getElementById("dashboardLowStockAndPos");
      if (lowStockEl) {
        const lowItems = m.lowStockProducts.slice(0, 5);
        const pendingPos = ERP_DB.shipments.filter(s => s.status !== "RECEIVED");
        lowStockEl.innerHTML = `
          <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:14px;">
            ${lowItems.map(p => `
              <div style="display:flex;align-items:center;justify-content:space-between;padding:9px 12px;border-radius:8px;background:var(--bg-card);border:1px solid var(--border-color);">
                <div>
                  <div style="font-weight:700;font-size:12px;">${p.title} <span class="mono" style="color:var(--accent-rose-deep);">(${p.sku})</span></div>
                  <div style="font-size:11px;color:var(--text-muted);">Available: <strong>${p.available}</strong> • Reserved: ${p.reserved || 0} • Reorder Threshold: ${p.reorderThreshold || 5}</div>
                </div>
                <button type="button" class="btn btn-sm btn-rose" onclick="quickRestockProduct('${p.id}')">+ Restock 10</button>
              </div>
            `).join("") || `<div style="font-size:12px;color:var(--status-green);">✓ All published SKUs are above reorder thresholds.</div>`}
          </div>
          <div style="font-size:11.5px;font-weight:700;text-transform:uppercase;color:var(--text-muted);margin-bottom:6px;">Incoming Supplier Purchase Orders (${pendingPos.length})</div>
          <div style="display:flex;flex-direction:column;gap:8px;">
            ${pendingPos.map(sh => `
              <div style="display:flex;align-items:center;justify-content:space-between;padding:9px 12px;border-radius:8px;background:var(--bg-subtle);border:1px solid var(--border-color);">
                <div>
                  <div style="font-weight:700;font-size:12px;">${sh.id}: ${sh.productTitle}</div>
                  <div style="font-size:11px;color:var(--text-muted);">Ordered: ${sh.orderedQty} units • Landed: ${formatBdt(sh.landedCost || sh.costPrice)}/unit</div>
                </div>
                <button type="button" class="btn btn-sm btn-success" onclick="openReceiveShipmentModal('${sh.id}')">Receive GRN</button>
              </div>
            `).join("")}
          </div>
        `;
      }

      // Advanced Analytics Subtab (Product Profitability, Cohort Analysis, Demand Forecast)
      const skuBody = document.getElementById("reportSkuProfitBody");
      if (skuBody) {
        skuBody.innerHTML = ERP_DB.products.map(p => {
          const purchase = Number(p.costPrice) || 0;
          const landed = Number(p.landedCost || Math.round(purchase * 1.12));
          const selling = Number(p.price) || 0;
          const unitMargin = selling - landed;
          const marginPct = selling > 0 ? Math.round((unitMargin / selling) * 100) : 0;
          const sold = Number(p.sold) || 0;
          const delivRev = sold * selling;
          const delivCogs = sold * landed;
          const grossProf = delivRev - delivCogs;
          return `
            <tr>
              <td>
                <div style="font-weight:700;">${p.title}</div>
                <div class="mono" style="font-size:10.5px;color:var(--accent-rose-deep);">${p.sku}</div>
              </td>
              <td><span class="badge badge-rose">${p.category}</span></td>
              <td class="mono">${formatBdt(purchase)}</td>
              <td class="mono">${formatBdt(landed)}</td>
              <td class="mono" style="font-weight:700;">${formatBdt(selling)}</td>
              <td><span class="badge badge-green">+${formatBdt(unitMargin)} (${marginPct}%)</span></td>
              <td class="mono">${p.available} / ${p.reserved || 0} / ${sold}</td>
              <td class="mono">${formatBdt(delivRev)}</td>
              <td class="mono">${formatBdt(delivCogs)}</td>
              <td class="mono" style="font-weight:700;color:var(--status-green);">${formatBdt(grossProf)}</td>
            </tr>
          `;
        }).join("");
      }

      const cohortEl = document.getElementById("analyticsCohortBody");
      if (cohortEl) {
        const custs = ERP_DB.crmCustomers || [];
        const vipCount = custs.filter(c => c.tier === "VIP").length;
        const repCount = custs.filter(c => c.tier === "Repeat").length;
        const newCount = custs.filter(c => c.tier === "New").length;
        cohortEl.innerHTML = `
          <div class="table-wrap">
            <table class="erp-table">
              <thead>
                <tr>
                  <th>Cohort Segment</th>
                  <th>Customers</th>
                  <th>Repeat Rate</th>
                  <th>Avg Order Frequency</th>
                  <th>Cohort Completed Spend</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="badge badge-rose">VIP Circle</span></td>
                  <td class="mono">${vipCount}</td>
                  <td class="mono">92%</td>
                  <td class="mono">4.8 orders</td>
                  <td class="mono">${formatBdt(custs.filter(c => c.tier === "VIP").reduce((s, c) => s + Number(c.spend || 0), 0))}</td>
                </tr>
                <tr>
                  <td><span class="badge badge-green">Repeat Buyers</span></td>
                  <td class="mono">${repCount}</td>
                  <td class="mono">68%</td>
                  <td class="mono">2.5 orders</td>
                  <td class="mono">${formatBdt(custs.filter(c => c.tier === "Repeat").reduce((s, c) => s + Number(c.spend || 0), 0))}</td>
                </tr>
                <tr>
                  <td><span class="badge badge-blue">New Acquisitions</span></td>
                  <td class="mono">${newCount}</td>
                  <td class="mono">34% (Projected)</td>
                  <td class="mono">1.0 order</td>
                  <td class="mono">${formatBdt(custs.filter(c => c.tier === "New").reduce((s, c) => s + Number(c.spend || 0), 0))}</td>
                </tr>
              </tbody>
            </table>
          </div>
        `;
      }

      const forecastEl = document.getElementById("analyticsForecastBody");
      if (forecastEl) {
        forecastEl.innerHTML = `
          <div class="table-wrap">
            <table class="erp-table">
              <thead>
                <tr>
                  <th>SKU &amp; Item</th>
                  <th>Avail Stock</th>
                  <th>30-Day Forecast</th>
                  <th>Days of Cover</th>
                  <th>Restock Action</th>
                </tr>
              </thead>
              <tbody>
                ${ERP_DB.products.slice(0, 5).map(p => {
                  const forecast30 = Math.max(6, Math.round((Number(p.sold) || 4) * 0.65));
                  const dailyVel = forecast30 / 30;
                  const daysCover = Math.round((Number(p.available) || 0) / Math.max(0.2, dailyVel));
                  const recOrder = Math.max(12, forecast30 - Number(p.available || 0));
                  return `
                    <tr>
                      <td><strong>${p.title}</strong><div class="mono" style="font-size:10.5px;">${p.sku}</div></td>
                      <td class="mono">${p.available}</td>
                      <td class="mono">${forecast30} units</td>
                      <td><span class="badge ${daysCover <= 10 ? 'badge-danger' : 'badge-green'}">${daysCover} days</span></td>
                      <td><button type="button" class="btn btn-sm btn-secondary" onclick="quickRestockProduct('${p.id}')">Order ${recOrder} pcs</button></td>
                    </tr>
                  `;
                }).join("")}
              </tbody>
            </table>
          </div>
        `;
      }

      // Extended Capabilities Table matching image_809a2e.png verbatim
      const capTable = document.getElementById("extendedCapabilitiesTable");
      if (capTable) {
        const capRows = [
          { name: "Courier integration", desc: "Delivery booking, tracking, delivery status and COD settlement", nav: "orders", tabFn: "switchOrdTab('pipeline')" },
          { name: "Returns & exchanges", desc: "Return requests, inspection, restocking and refunds", nav: "orders", tabFn: "switchOrdTab('returns')" },
          { name: "Reviews & testimonials", desc: "Approve genuine reviews and manage customer feedback", nav: "crm", tabFn: "switchCrmTab('reviews')" },
          { name: "Notifications", desc: "Order confirmation, dispatch updates and low-stock alerts", nav: "marketing_cms", tabFn: "switchCmsTab('multichannel')" },
          { name: "Preorder management", desc: "Supplier lead times, expected arrival, customer communication and deposits if introduced", nav: "procurement", tabFn: "switchProcTab('preorders')" },
          { name: "Loyalty & referrals", desc: "Reward repeat purchases and referrals", nav: "crm", tabFn: "switchCrmTab('loyalty')" },
          { name: "Advanced analytics", desc: "Product profitability, cohort analysis, demand forecasting", nav: "dashboard", tabFn: "switchDashTab('analytics')" },
          { name: "Multi-channel integration", desc: "Sync products and orders from Facebook, Instagram or other channels", nav: "marketing_cms", tabFn: "switchCmsTab('multichannel')" }
        ];
        capTable.innerHTML = `
          <thead>
            <tr>
              <th>Operational Capability</th>
              <th>Tehzib OMS Implementation Description</th>
              <th>Status</th>
              <th>Open Module</th>
            </tr>
          </thead>
          <tbody>
            ${capRows.map(r => `
              <tr>
                <td style="font-weight:700;font-size:12.5px;">${r.name}</td>
                <td style="color:var(--text-secondary);">${r.desc}</td>
                <td><span class="badge badge-green">Active &amp; Live</span></td>
                <td><button type="button" class="btn btn-sm btn-rose" onclick="switchErpView('${r.nav}');${r.tabFn};">Open Tool →</button></td>
              </tr>
            `).join("")}
          </tbody>
        `;
      }
    }

    // ------------------------------------------------------------------------
    // 1. PRODUCT & CATALOGUE MANAGEMENT
    // ------------------------------------------------------------------------
    function renderProductsMasterTable() {
      // Render Category Rollout Grid with Category Images & Subcategories
      const catGrid = document.getElementById("categoryRolloutGrid");
      if (catGrid && ERP_DB.cms && Array.isArray(ERP_DB.cms.categories)) {
        catGrid.innerHTML = ERP_DB.cms.categories.map((c, idx) => {
          const skuCount = ERP_DB.products.filter(p => p.category === c.name).length;
          const isEnabled = c.enabled !== false;
          const catImgSrc = c.customImage || IMG[c.imgKey] || IMG.giftbox;
          return `
            <div style="padding:12px 14px;border-radius:12px;background:var(--bg-card);border:1px solid ${isEnabled ? 'var(--accent-rose)' : 'var(--border-color)'};display:flex;flex-direction:column;justify-content:space-between;gap:10px;">
              <div style="display:flex;align-items:center;gap:11px;">
                <img src="${catImgSrc}" alt="${c.name}" style="width:52px;height:52px;border-radius:10px;object-fit:cover;border:1px solid var(--border-color);flex-shrink:0;background:var(--bg-elevated);" />
                <div style="min-width:0;flex:1;">
                  <div style="display:flex;align-items:center;justify-content:space-between;gap:6px;">
                    <strong style="font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${c.name}</strong>
                    <span class="badge ${isEnabled ? 'badge-green' : 'badge-orange'}">${isEnabled ? 'Active' : 'Held'}</span>
                  </div>
                  <div style="font-size:11px;color:var(--text-muted);margin-top:2px;">${skuCount} SKUs • ${(c.subs || []).length} Subcategories</div>
                </div>
              </div>
              <div style="display:flex;gap:4px;flex-wrap:wrap;">
                ${(c.subs || []).slice(0, 4).map(sub => `<span class="badge badge-rose" style="font-size:10px;">${sub}</span>`).join("")}
              </div>
              <div style="display:flex;gap:6px;">
                <button type="button" class="btn btn-sm btn-secondary" style="flex:1;" onclick="editCategoryInForm(${idx})">Edit / Image</button>
                <button type="button" class="btn btn-sm ${isEnabled ? 'btn-secondary' : 'btn-rose'}" style="flex:1;" onclick="toggleCategoryStorefrontRollout(${idx})">
                  ${isEnabled ? 'Pause' : '✓ Activate'}
                </button>
              </div>
            </div>
          `;
        }).join("");
      }
      previewCategoryImageSelection();

      const tbody = document.getElementById("productsMasterTableBody");
      if (!tbody) return;

      const statusFilter = document.getElementById("prodFilterStatus")?.value || "ALL";
      const catFilter = document.getElementById("prodFilterCategory")?.value || "ALL";
      const q = (document.getElementById("prodSearchInput")?.value || "").trim().toLowerCase();

      const statusAndCatFiltered = ERP_DB.products.filter(p => {
        const pStatus = p.statusLabel || (p.isPublished ? (p.available <= 0 ? "Out of Stock" : "Active") : "Draft");
        if (statusFilter !== "ALL" && pStatus !== statusFilter) return false;
        if (catFilter !== "ALL" && p.category !== catFilter) return false;
        return true;
      });
      const filtered = q
        ? filterProductsByQuery(statusAndCatFiltered, q, { includeVariants: true })
        : statusAndCatFiltered;

      tbody.innerHTML = filtered.map(p => {
        const purchase = Number(p.costPrice) || 0;
        const landed = Number(p.landedCost || Math.round(purchase * 1.12));
        const marginPct = p.price > 0 ? Math.round(((p.price - landed) / p.price) * 100) : 0;
        const variantsList = Array.isArray(p.variants) && p.variants.length ? p.variants : ["Standard"];
        const varSkus = variantsList.slice(0, 3).map(v => `${p.sku}-${v.replace(/[^A-Za-z0-9]/g, "").slice(0, 3).toUpperCase()}`);
        const pStatus = p.statusLabel || (p.isPublished ? (p.available <= 0 ? "Out of Stock" : "Active") : "Draft");

        return `
          <tr>
            <td>
              <div class="prod-cell">
                <img class="prod-thumb" src="${p.image}" alt="${p.title}" />
                <div>
                  <div style="font-weight:700;">${p.title}</div>
                  <div style="font-size:11px;color:var(--text-muted);">${p.subcategory} • 📸 ${(Array.isArray(p.gallery) && p.gallery.length) ? p.gallery.length : 4} Photos • 🎬 ${p.videoCaption || 'Video Ready'}</div>
                </div>
              </div>
            </td>
            <td>
              <div class="mono" style="font-weight:700;font-size:12px;">${p.sku}</div>
              <div class="mono" style="font-size:10.5px;color:var(--text-muted);">${varSkus.join(", ")}</div>
            </td>
            <td><span class="badge badge-rose">${p.category}</span></td>
            <td class="mono">
              <div>Buy: ${formatBdt(purchase)}</div>
              <div style="font-size:10.5px;color:var(--text-muted);">Landed: ${formatBdt(landed)}</div>
            </td>
            <td class="mono">
              <div style="font-weight:700;">${formatBdt(p.price)} <span style="font-size:10.5px;color:var(--status-green);">(${marginPct}%)</span></div>
              ${p.oldPrice ? `<div style="font-size:10.5px;color:var(--text-muted);text-decoration:line-through;">Reg: ${formatBdt(p.oldPrice)}</div>` : ``}
            </td>
            <td class="mono">
              <strong>${p.available}</strong> Avail • ${p.reserved || 0} Res • ${p.sold || 0} Sold
            </td>
            <td>
              <div style="display:flex;gap:4px;flex-wrap:wrap;">
                ${p.isDeal ? '<span class="badge badge-rose">Trendsetters</span>' : ''}
                ${p.isNew ? '<span class="badge badge-blue">New Arrival</span>' : ''}
                ${p.isJustForYou ? '<span class="badge badge-green">Just For You</span>' : ''}
              </div>
            </td>
            <td>
              <span class="badge ${pStatus === 'Active' ? 'badge-green' : (pStatus === 'Draft' ? 'badge-orange' : 'badge-danger')}">
                ${pStatus}
              </span>
            </td>
            <td>
              <div style="display:flex;gap:5px;flex-wrap:wrap;">
                <button type="button" class="btn btn-sm btn-secondary" onclick="openProductEditorModal('${p.id}')">Edit</button>
                <button type="button" class="btn btn-sm ${p.isPublished ? 'btn-danger' : 'btn-success'}" onclick="togglePublishProduct('${p.id}')">
                  ${p.isPublished ? 'Archive/Draft' : 'Publish'}
                </button>
              </div>
            </td>
          </tr>
        `;
      }).join("");
    }

    function toggleCategoryStorefrontRollout(idx) {
      const cat = ERP_DB.cms.categories[idx];
      if (!cat) return;
      cat.enabled = cat.enabled === false ? true : false;
      saveErpDatabase();
      renderAllErpModules();
      showToast(`${cat.name} is now ${cat.enabled ? 'ACTIVE on Storefront' : 'HELD for future rollout'}`);
    }

    function togglePublishProduct(prodId) {
      const p = ERP_DB.products.find(x => x.id === prodId);
      if (!p) return;
      if (!p.isPublished && p.available <= 0) {
        p.available = 10;
      }
      p.isPublished = !p.isPublished;
      p.statusLabel = p.isPublished ? "Active" : "Draft";
      saveErpDatabase();
      renderAllErpModules();
      showToast(`${p.sku} (${p.title}) is now ${p.isPublished ? 'Active & Published on Storefront' : 'Moved to Draft'}`);
    }

    function openProductEditorModal(prodId) {
      const p = prodId ? ERP_DB.products.find(x => x.id === prodId) : null;
      const supSel = document.getElementById("editProdSupplier");
      if (supSel) {
        supSel.innerHTML = ERP_DB.suppliers.map(s => `<option value="${s.id}">${s.name}</option>`).join("");
      }

      document.getElementById("prodModalHeading").textContent = p ? `Edit Product & Variants: ${p.title}` : "Create New Product & Variant SKUs";
      document.getElementById("editProdId").value = p ? p.id : "";
      document.getElementById("editProdTitle").value = p ? p.title : "";
      document.getElementById("editProdSku").value = p ? p.sku : ("TEH-SKU-" + (ERP_DB.products.length + 101));
      if (p && supSel) supSel.value = p.supplierId;
      document.getElementById("editProdCategory").value = p ? p.category : "Accessories";
      document.getElementById("editProdSubcategory").value = p ? p.subcategory : "Hair Clips & Pins";
      document.getElementById("editProdStock").value = p ? p.available : 12;
      document.getElementById("editProdCost").value = p ? p.costPrice : 180;
      document.getElementById("editProdWholesale").value = p ? (p.landedCost || p.wholesalePrice || 210) : 210;
      document.getElementById("editProdRetail").value = p ? p.price : 450;
      document.getElementById("editProdOldPrice").value = p ? (p.oldPrice || 0) : 550;
      document.getElementById("editProdVariants").value = p && Array.isArray(p.variants) ? p.variants.join(", ") : "Blush Pink, Ivory Pearl, Champagne";
      document.getElementById("editProdPublished").value = p ? (p.statusLabel === "Discontinued" ? "discontinued" : (p.isPublished ? "true" : "false")) : "true";
      document.getElementById("editProdDescription").value = p ? p.description : "Handcrafted contemporary piece designed for Tehzib Bangladesh.";
      document.getElementById("editProdSpecs").value = p ? p.specs : "Material: Premium Grade • QC Verified at Uttara Hub";
      document.getElementById("editProdSeoKeywords").value = p ? p.seoKeywords : "tehzib bangladesh, dhaka fashion, accessories bd";
      document.getElementById("editProdSeoDesc").value = p ? p.seoDescription : "Shop authentic Tehzib collections with fast delivery across Bangladesh.";
      document.getElementById("editProdGeoKeywords").value = p ? p.geoKeywords : "Uttara Sector 12 Dhaka, Gulshan, Banani, Dhanmondi";
      document.getElementById("editProdDeal").checked = p ? Boolean(p.isDeal) : true;
      document.getElementById("editProdNew").checked = p ? Boolean(p.isNew) : true;
      document.getElementById("editProdJfy").checked = p ? Boolean(p.isJustForYou) : true;

      // Load multi-image gallery and video fields
      const baseImg = p && p.image ? p.image : IMG.necklace;
      window.__editProdGalleryList = (p && Array.isArray(p.gallery) && p.gallery.length)
        ? [...p.gallery]
        : [baseImg, IMG.cream_bag, IMG.silk_blouse, IMG.heels];
      const vidUrlEl = document.getElementById("editProdVideoUrl");
      const vidCapEl = document.getElementById("editProdVideoCaption");
      if (vidUrlEl) vidUrlEl.value = p && p.videoUrl ? p.videoUrl : "https://tehzib.com/media/studio-360-showcase.mp4";
      if (vidCapEl) vidCapEl.value = p && p.videoCaption ? p.videoCaption : "360° Studio Close-Up & Styling Video (0:30s)";
      renderEditProdGalleryPreview();

      window.__suspendedErpModalIds = [];
      document.querySelectorAll(".erp-modal-backdrop.open, .modal-backdrop.open").forEach(m => m.classList.remove("open"));
      document.getElementById("productEditorModal").classList.add("open");
      const modalBodyEl = document.querySelector("#productEditorModal .modal-body");
      if (modalBodyEl) modalBodyEl.scrollTop = 0;
    }

    function closeProductEditorModal() {
      document.getElementById("productEditorModal").classList.remove("open");
    }

    // ------------------------------------------------------------------------
    // 2. INVENTORY & STOCK MANAGEMENT (INCL. PINK CLAW CLIP LIVE EXAMPLE)
    // ------------------------------------------------------------------------
    function renderInventoryModule(m) {
      const metrics = m || computeErpMetrics();
      const claw = ERP_DB.products.find(p => p.id === "p_claw" || p.sku === "TEH-ACC-CLP-PNK");


      const kpiEl = document.getElementById("inventoryKpiGrid");
      if (kpiEl) {
        kpiEl.innerHTML = `
          <div class="kpi-card">
            <div class="kpi-label"><span>Available Stock to Sell</span><span>📦</span></div>
            <div class="kpi-value mono">${metrics.totalAvailUnits} Units</div>
            <div class="kpi-sub"><span>Across ${ERP_DB.products.length} SKUs</span><span class="badge badge-green">Ready</span></div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label"><span>Reserved &amp; Sold Units</span><span>🔒</span></div>
            <div class="kpi-value mono">${metrics.totalReservedUnits} Res / ${metrics.totalSoldUnits} Sold</div>
            <div class="kpi-sub"><span>Damaged Units: ${metrics.totalDamagedUnits}</span><span class="badge badge-blue">Auto-Synced</span></div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label"><span>Inventory Landed Valuation</span><span>🏷</span></div>
            <div class="kpi-value mono">${formatBdt(metrics.inventoryLandedValue)}</div>
            <div class="kpi-sub"><span>Retail Val: ${formatBdt(metrics.inventoryRetailValue)}</span><span class="badge badge-rose">Landed Cost</span></div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label"><span>Low-Stock Reorder Alerts</span><span>⚠️</span></div>
            <div class="kpi-value mono">${metrics.lowStockCount} SKUs</div>
            <div class="kpi-sub"><span>At or below threshold</span><span class="badge ${metrics.lowStockCount > 0 ? 'badge-danger' : 'badge-green'}">Monitor</span></div>
          </div>
        `;
      }

      const adjSel = document.getElementById("adjProductId");
      if (adjSel) {
        const curVal = adjSel.value;
        adjSel.innerHTML = ERP_DB.products.map(p => `<option value="${p.id}">${p.title} (${(p.variants && p.variants[0]) || 'Standard'} • Avail: ${p.available})</option>`).join("");
        if (curVal) adjSel.value = curVal;
      }

      const filterHealth = document.getElementById("invFilterHealth")?.value || "ALL";
      const valBody = document.getElementById("inventoryValuationBody");
      if (valBody) {
        const list = ERP_DB.products.filter(p => {
          if (filterHealth === "LOW") return Number(p.available) <= Number(p.reorderThreshold || 5);
          if (filterHealth === "RESERVED") return Number(p.reserved || 0) > 0;
          if (filterHealth === "DAMAGED") return Number(p.damaged || 0) > 0;
          return true;
        });

        valBody.innerHTML = list.map(p => {
          const thresh = Number(p.reorderThreshold || 5);
          const isLow = Number(p.available) <= thresh;
          const variants = Array.isArray(p.variants) ? p.variants.join(", ") : "Standard";
          return `
            <tr style="${p.sku === 'TEH-ACC-CLP-PNK' ? 'background:var(--accent-tint);' : ''}">
              <td>
                <div style="font-weight:700;">${p.title}</div>
                <div class="mono" style="font-size:11px;color:var(--accent-rose-deep);">${p.sku}</div>
              </td>
              <td style="font-size:12px;">${variants}</td>
              <td class="mono">
                <div>Buy: ${formatBdt(p.costPrice)}</div>
                <div style="font-size:10.5px;color:var(--text-muted);">Landed: ${formatBdt(p.landedCost || p.costPrice)}</div>
              </td>
              <td class="mono" style="font-weight:800;font-size:13px;">${p.available}</td>
              <td class="mono">${p.reserved || 0}</td>
              <td class="mono">${p.sold || 0}</td>
              <td class="mono">${p.returned || 0} Ret / ${p.damaged || 0} Dmg</td>
              <td>
                <span class="badge ${p.available <= 0 ? 'badge-danger' : (isLow ? 'badge-orange' : 'badge-green')}">
                  ${p.available <= 0 ? 'Out of Stock' : (isLow ? `Low (≤${thresh})` : `Healthy (>${thresh})`)}
                </span>
              </td>
            </tr>
          `;
        }).join("");
      }

      renderAuditTrailLog();
    }


    const LEGACY_SKU_TITLE_MAP = {
      "TEH-ACC-CLP-PNK": "Signature Parisian Pink Claw Clip",
      "THZ-AC-005": "Rose-Gold Mesh Minimalist Watch",
      "THZ-AC-005-28": "Rose-Gold Mesh Minimalist Watch",
      "THZ-FA-005": "Rose-Gold Mesh Minimalist Watch",
      "THZ-SH-003": "Blush Slingback Kitten Heels",
      "THZ-CL-001": "Blush Satin Wrap Blouse",
      "THZ-FA-004-CRM": "Quilted Cream Crossbody Bag",
      "THZ-FA-007": "Champagne Crystal Box Clutch",
      "THZ-AC-008": "Freshwater Pearl & Gold Layered Choker"
    };

    function resolveMovementProductName(mv) {
      if (!mv) return "Tehzib Product";
      // Check if variant was "28mm Petite" on ORD-2027-903 legacy entry
      if (mv.variant === "28mm Petite" && (mv.sku === "THZ-FA-005" || mv.sku === "THZ-AC-005" || mv.sku === "THZ-AC-005-28")) {
        return "Rose-Gold Mesh Minimalist Watch";
      }
      if (mv.productTitle && !/^(THZ-|TEH-)/i.test(mv.productTitle.trim())) {
        return mv.productTitle.replace(" (Awaiting Shipment)", "");
      }
      if (mv.productId) {
        const byId = (ERP_DB.products || []).find(p => p.id === mv.productId);
        if (byId && byId.title) return byId.title.replace(" (Awaiting Shipment)", "");
      }
      if (mv.sku) {
        if (LEGACY_SKU_TITLE_MAP[mv.sku]) return LEGACY_SKU_TITLE_MAP[mv.sku];
        const bySku = (ERP_DB.products || []).find(p => p.sku === mv.sku);
        if (bySku && bySku.title) return bySku.title.replace(" (Awaiting Shipment)", "");
      }
      return mv.productTitle || "Tehzib Product";
    }

    function extractMovementDatePart(timeStr) {
      if (!timeStr) return "";
      const m = String(timeStr).match(/^(\d{4}-\d{2}-\d{2})/);
      return m ? m[1] : "";
    }

    function handleAuditDatePickerChange(val) {
      const quickSel = document.getElementById("auditFilterDateSelect");
      if (quickSel) {
        if (!val) {
          quickSel.value = "ALL";
        } else {
          const hasExact = Array.from(quickSel.options).some(o => o.value === val);
          if (hasExact) {
            quickSel.value = val;
          } else {
            // Also check if month-day matches a 2027 entry when user selects current calendar year
            const md = val.slice(5);
            const match2027 = Array.from(quickSel.options).find(o => o.value.endsWith("-" + md));
            if (match2027) {
              quickSel.value = match2027.value;
            }
          }
        }
      }
      renderAuditTrailLog();
    }

    function handleAuditDateSelectChange(val) {
      const dateInput = document.getElementById("auditFilterDate");
      if (dateInput) {
        dateInput.value = val === "ALL" ? "" : val;
      }
      renderAuditTrailLog();
    }

    function resetAuditTrailFilters() {
      const dateInput = document.getElementById("auditFilterDate");
      const dateSelect = document.getElementById("auditFilterDateSelect");
      const prodSelect = document.getElementById("auditFilterProduct");
      if (dateInput) dateInput.value = "";
      if (dateSelect) dateSelect.value = "ALL";
      if (prodSelect) prodSelect.value = "ALL";
      renderAuditTrailLog();
    }

    function renderAuditTrailLog() {
      const logEl = document.getElementById("inventoryMovementLog");
      if (!logEl) return;

      const allMovements = (ERP_DB.inventoryMovements || []).map(mv => {
        const resolvedName = resolveMovementProductName(mv);
        const datePart = extractMovementDatePart(mv.time);
        return {
          ...mv,
          resolvedName,
          datePart
        };
      });

      // Populate Quick Date Select options dynamically
      const dateSelect = document.getElementById("auditFilterDateSelect");
      const dateInput = document.getElementById("auditFilterDate");
      const distinctDates = Array.from(new Set(allMovements.map(m => m.datePart).filter(Boolean))).sort().reverse();
      if (dateSelect) {
        const prevDateVal = dateSelect.value || "ALL";
        dateSelect.innerHTML = `<option value="ALL">All Dates (${allMovements.length})</option>` +
          distinctDates.map(d => `<option value="${d}">${d}</option>`).join("");
        if (prevDateVal !== "ALL" && distinctDates.includes(prevDateVal)) {
          dateSelect.value = prevDateVal;
        } else if (dateInput && dateInput.value && distinctDates.includes(dateInput.value)) {
          dateSelect.value = dateInput.value;
        } else {
          dateSelect.value = "ALL";
        }
      }

      // Populate Product Filter options dynamically (by Product Name, no product codes)
      const prodSelect = document.getElementById("auditFilterProduct");
      const productNamesInCatalog = (ERP_DB.products || []).map(p => p.title.replace(" (Awaiting Shipment)", ""));
      const productNamesInMovements = allMovements.map(m => m.resolvedName);
      const allProductNames = Array.from(new Set([...productNamesInMovements, ...productNamesInCatalog].filter(Boolean)));
      if (prodSelect) {
        const prevProdVal = prodSelect.value || "ALL";
        prodSelect.innerHTML = `<option value="ALL">All Products (${allProductNames.length})</option>` +
          allProductNames.map(name => `<option value="${name}">${name}</option>`).join("");
        if (prevProdVal !== "ALL" && allProductNames.includes(prevProdVal)) {
          prodSelect.value = prevProdVal;
        } else {
          prodSelect.value = "ALL";
        }
      }

      const activeDateInput = dateInput ? dateInput.value.trim() : "";
      const activeDateSelect = dateSelect ? dateSelect.value : "ALL";
      const activeDate = activeDateInput || (activeDateSelect !== "ALL" ? activeDateSelect : "");
      const activeProd = prodSelect ? prodSelect.value : "ALL";

      const badgeEl = document.getElementById("auditDateMatchBadge");
      if (badgeEl) {
        badgeEl.textContent = activeDate ? `Date: ${activeDate}` : "All Dates";
      }

      const filtered = allMovements.filter(mv => {
        if (activeDate) {
          const exactMatch = mv.datePart === activeDate;
          // Also match month-day if user picked current calendar year vs 2027 timestamp
          const mdMatch = activeDate.length === 10 && mv.datePart.length === 10 && mv.datePart.slice(5) === activeDate.slice(5);
          if (!exactMatch && !mdMatch) return false;
        }
        if (activeProd && activeProd !== "ALL") {
          if (mv.resolvedName !== activeProd) return false;
        }
        return true;
      });

      if (filtered.length === 0) {
        logEl.innerHTML = `
          <div style="padding:18px 14px;border-radius:8px;background:var(--bg-card);border:1px dashed var(--border-color);text-align:center;color:var(--text-muted);font-size:12px;">
            No stock movement records found for the selected date or product filter.
            <div style="margin-top:8px;">
              <button type="button" class="btn btn-secondary btn-sm" onclick="resetAuditTrailFilters()">Show All Audit Records</button>
            </div>
          </div>
        `;
        return;
      }

      logEl.innerHTML = filtered.slice(0, 25).map(mv => `
        <div style="padding:9px 12px;border-radius:8px;background:var(--bg-card);border:1px solid var(--border-color);font-size:12px;">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;">
            <strong style="color:var(--text-main);font-weight:700;font-size:12px;">${mv.resolvedName} <span style="color:var(--accent-rose-deep);">(${mv.variant || 'Standard'})</span> • ${mv.type}</strong>
            <span class="mono" style="color:var(--text-muted);font-size:10.5px;white-space:nowrap;flex-shrink:0;">${mv.time}</span>
          </div>
          <div style="color:var(--text-secondary);margin-top:3px;font-size:11.5px;">${mv.note}</div>
        </div>
      `).join("");
    }

    function populateStockAdjustDefaults() {
      const pid = document.getElementById("adjProductId")?.value;
      const p = ERP_DB.products.find(x => x.id === pid);
      if (p) {
        document.getElementById("adjVariantName").value = (p.variants && p.variants[0]) || "Standard";
        document.getElementById("adjLandedCost").value = p.landedCost || p.costPrice || 210;
      }
    }

    function simulatePinkClawClipSale() {
      const claw = ERP_DB.products.find(p => p.id === "p_claw" || p.sku === "TEH-ACC-CLP-PNK");
      if (!claw) return;
      if (claw.available <= 0) {
        showToast("Pink Claw Clip is Out of Stock (0 Available)! Click Restock 5 first.");
        return;
      }
      claw.available -= 1;
      claw.sold = Number(claw.sold || 0) + 1;
      ERP_DB.inventoryMovements.unshift({
        time: nowTimestamp(),
        productId: claw.id,
        productTitle: claw.title,
        sku: claw.sku,
        variant: "Blush Pink",
        type: `Auto Sale Deduction (-1 → ${claw.available} Avail)`,
        note: `1 ${claw.title} (Blush Pink) sold; Available automatically updated to ${claw.available} across Storefront & Backend.`
      });
      saveErpDatabase();
      renderAllErpModules();
      showToast(`Pink Claw Clip sold! Available stock is now ${claw.available} (Sold: ${claw.sold})`);
    }

    function restockPinkClawClip() {
      const claw = ERP_DB.products.find(p => p.id === "p_claw" || p.sku === "TEH-ACC-CLP-PNK");
      if (!claw) return;
      claw.available = Number(claw.available || 0) + 5;
      claw.isPublished = true;
      claw.statusLabel = "Active";
      ERP_DB.inventoryMovements.unshift({
        time: nowTimestamp(),
        productId: claw.id,
        productTitle: claw.title,
        sku: claw.sku,
        variant: "Blush Pink",
        type: `Stock Received (+5 → ${claw.available} Avail)`,
        note: `Replenished 5 units of ${claw.title} (Blush Pink) from Chawkbazar & Uttara Accessories Hub.`
      });
      saveErpDatabase();
      renderAllErpModules();
      showToast(`Restocked +5 Pink Claw Clips! Available: ${claw.available}`);
    }

    function quickRestockProduct(prodId) {
      const p = ERP_DB.products.find(x => x.id === prodId);
      if (!p) return;
      p.available = Number(p.available || 0) + 10;
      p.isPublished = true;
      p.statusLabel = "Active";
      ERP_DB.inventoryMovements.unshift({
        time: nowTimestamp(),
        productId: p.id,
        productTitle: p.title,
        sku: p.sku,
        variant: (p.variants && p.variants[0]) || "Standard",
        type: `Restock PO (+10 → ${p.available} Avail)`,
        note: `Quick reorder replenishment of 10 units of ${p.title} added to available stock.`
      });
      saveErpDatabase();
      renderAllErpModules();
      showToast(`Restocked +10 units of ${p.title} (Available: ${p.available})`);
    }

    // ------------------------------------------------------------------------
    // 3. ORDER MANAGEMENT, COURIER INTEGRATION & RETURNS
    // ------------------------------------------------------------------------
    function renderOrdersModule(m) {
      const metrics = m || computeErpMetrics();
      const stripEl = document.getElementById("ordersKpiStrip");
      if (stripEl) {
        stripEl.innerHTML = `
          <div class="kpi-card">
            <div class="kpi-label"><span>New &amp; Confirmed</span><span>🆕</span></div>
            <div class="kpi-value mono">${metrics.awaitingActionCount} Orders</div>
            <div class="kpi-sub"><span>Pipeline: ${formatBdt(metrics.placedPipelineValue)}</span><span class="badge badge-orange">Stock Reserved</span></div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label"><span>Dispatched (Courier)</span><span>🚚</span></div>
            <div class="kpi-value mono">${metrics.dispatchedCount} Orders</div>
            <div class="kpi-sub"><span>In-Transit: ${formatBdt(metrics.dispatchedTransitValue)}</span><span class="badge badge-blue">With Courier</span></div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label"><span>Delivered (Revenue Earned)</span><span>✓</span></div>
            <div class="kpi-value mono">${metrics.deliveredCount} Orders</div>
            <div class="kpi-sub"><span>Earned: ${formatBdt(metrics.earnedDeliveredRevenue)}</span><span class="badge badge-green">Recognized</span></div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label"><span>Delivery Success Rate</span><span>🎯</span></div>
            <div class="kpi-value mono">${metrics.deliverySuccessRate}%</div>
            <div class="kpi-sub"><span>Returns/Failed: ${metrics.failedOrReturnedCount}</span><span class="badge badge-green">SLA</span></div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label"><span>Avg Contribution / Order</span><span>💎</span></div>
            <div class="kpi-value mono">${formatBdt(metrics.avgContributionPerOrder)}</div>
            <div class="kpi-sub"><span>After COGS, Box &amp; Courier</span><span class="badge badge-rose">Net Margin</span></div>
          </div>
        `;
      }

      // Populate POS dropdowns
      const custSel = document.getElementById("posCustomerSelect");
      if (custSel && custSel.options.length <= 1) {
        custSel.innerHTML = `<option value="">-- Walk-In / New Customer --</option>` +
          ERP_DB.crmCustomers.map(c => `<option value="${c.id}">${c.name} (${c.phone})</option>`).join("");
      }

      const itemProdSel = document.getElementById("posItemProductSelect");
      if (itemProdSel) {
        const pubProducts = ERP_DB.products.filter(p => p.isPublished);
        itemProdSel.innerHTML = pubProducts.map(p =>
          `<option value="${p.id}">${p.sku} — ${p.title} [Avail: ${p.available}] (${formatBdt(p.price)})</option>`
        ).join("");
      }

      const retOrdSel = document.getElementById("retOrderId");
      if (retOrdSel) {
        retOrdSel.innerHTML = ERP_DB.orders.map(o => `<option value="${o.id}">${o.id} — ${o.customerName} (${o.status} • ${formatBdt(o.totalRevenue)})</option>`).join("");
      }

      renderPosCartSummary();

      const q = (document.getElementById("orderSearchInput")?.value || "").trim().toLowerCase();
      const statusFilter = document.getElementById("orderFilterStatus")?.value || "ALL";
      const chanFilter = document.getElementById("orderFilterChannel")?.value || "ALL";

      const filteredOrders = ERP_DB.orders.filter(o => {
        if (statusFilter !== "ALL" && o.status !== statusFilter) return false;
        if (chanFilter !== "ALL" && !String(o.channel || "").toLowerCase().includes(chanFilter.toLowerCase())) return false;
        if (q) {
          const hay = `${o.id} ${o.customerName} ${o.customerPhone} ${o.trackingNumber || ""} ${o.date}`.toLowerCase();
          if (!hay.includes(q)) return false;
        }
        return true;
      });

      const allStatuses = ["New", "Confirmed", "Packed", "Dispatched", "Delivered", "Delivery Failed", "Cancelled", "Return Requested", "Returned", "Refunded"];
      const payStatuses = ["Pending", "Collected", "Paid", "Failed", "Refunded"];

      const tbody = document.getElementById("ordersMasterTableBody");
      if (tbody) {
        tbody.innerHTML = filteredOrders.map(o => {
          const contrib = (Number(o.totalRevenue) || 0) - (Number(o.totalCogs) || 0) - (Number(o.packagingCost || 35) + Number(o.courierActualCost || 60));
          const itemsSummary = (o.items || []).map(i => `${i.qty}× ${i.title} <span class="mono" style="font-size:10.5px;color:var(--text-muted);">(${i.variant || 'Std'})</span>`).join("<br/>");
          return `
            <tr>
              <td>
                <div class="mono" style="font-weight:700;">${o.id}</div>
                <div style="font-size:10.5px;color:var(--text-muted);">${o.date}</div>
                <span class="badge badge-rose" style="margin-top:3px;">${o.channel}</span>
              </td>
              <td>
                <div style="font-weight:700;">${o.customerName}</div>
                <div class="mono" style="font-size:11px;color:var(--text-secondary);">${o.customerPhone}</div>
                <div style="font-size:10.5px;color:var(--text-muted);max-width:190px;">${o.customerAddress}</div>
              </td>
              <td style="font-size:12px;">${itemsSummary}</td>
              <td>
                <div style="font-weight:600;font-size:12px;">${o.courier || "Steadfast Courier"}</div>
                <div class="mono" style="font-size:11px;color:var(--accent-rose-deep);">TRK: ${o.trackingNumber || "PENDING"}</div>
                <div style="font-size:10.5px;color:var(--text-muted);">Attempts: ${o.deliveryAttempts || 0}</div>
              </td>
              <td class="mono">
                <div style="font-weight:700;">${formatBdt(o.totalRevenue)}</div>
                <div style="font-size:10.5px;color:var(--status-green);">Contrib: ${formatBdt(contrib)}</div>
              </td>
              <td>
                <div style="font-size:11px;margin-bottom:4px;">${o.paymentMethod}</div>
                <select class="form-select" style="padding:4px 7px;font-size:11px;width:auto;" onchange="updateOrderPaymentStatus('${o.id}', this.value)">
                  ${payStatuses.map(ps => `<option value="${ps}" ${o.paymentStatus === ps ? 'selected' : ''}>${ps}</option>`).join("")}
                </select>
              </td>
              <td>
                <select class="form-select" style="padding:4px 7px;font-size:11px;font-weight:700;width:auto;" onchange="updateOrderStatus('${o.id}', this.value)">
                  ${allStatuses.map(st => `<option value="${st}" ${o.status === st ? 'selected' : ''}>${st}</option>`).join("")}
                </select>
                <div style="font-size:10.5px;color:var(--text-muted);margin-top:3px;">
                  ${o.status === "Delivered" ? "✓ Earned Revenue" : "Pipeline (Unearned)"}
                </div>
              </td>
              <td>
                <div style="display:flex;flex-direction:column;gap:4px;">
                  <button type="button" class="btn btn-sm btn-secondary" onclick="openOrderInvoiceModal('${o.id}')">👁 Preview / Print Invoice</button>
                  <button type="button" class="btn btn-sm btn-rose" onclick="bookCourierForOrder('${o.id}')">🚚 Book Courier</button>
                </div>
              </td>
            </tr>
          `;
        }).join("");
      }

      // Returns & Exceptions table
      const retBody = document.getElementById("returnsExceptionsTableBody");
      if (retBody) {
        const exceptionOrders = ERP_DB.orders.filter(o => ["Cancelled", "Delivery Failed", "Return Requested", "Returned", "Refunded"].includes(o.status));
        const combined = [
          ...(ERP_DB.returnsLog || []),
          ...exceptionOrders.map(eo => ({
            id: "EXC-" + eo.id,
            orderId: eo.id,
            customerName: eo.customerName,
            items: (eo.items || []).map(i => `${i.qty}x ${i.title}`).join(", "),
            status: eo.status,
            actionNote: eo.deliveryOutcome || "Stock automatically reconciled",
            refundAmount: eo.paymentStatus === "Refunded" ? eo.totalRevenue : 0
          }))
        ];
        retBody.innerHTML = combined.map(r => `
          <tr>
            <td class="mono" style="font-weight:700;">${r.orderId}</td>
            <td>${r.customerName}</td>
            <td style="font-size:12px;">${r.items}</td>
            <td><span class="badge badge-danger">${r.status}</span></td>
            <td style="font-size:12px;">${r.actionNote}</td>
            <td class="mono">${formatBdt(r.refundAmount)}</td>
          </tr>
        `).join("");
      }
    }

    function advanceOrderWorkflowStep(orderId) {
      const ord = ERP_DB.orders.find(o => o.id === orderId);
      if (!ord) return;
      const flow = ["New", "Confirmed", "Packed", "Dispatched", "Delivered"];
      const idx = flow.indexOf(ord.status);
      if (idx >= 0 && idx < flow.length - 1) {
        updateOrderStatus(orderId, flow[idx + 1]);
      } else {
        showToast(`Order ${orderId} is already at status: ${ord.status}`);
      }
    }

    function updateOrderStatus(orderId, newStatus) {
      const ord = ERP_DB.orders.find(o => o.id === orderId);
      if (!ord) return;
      const prevStatus = ord.status;
      if (prevStatus === newStatus) return;

      const activeReserveStates = ["New", "Confirmed", "Packed", "Dispatched"];
      const releaseStates = ["Cancelled", "Delivery Failed", "Returned", "Refunded"];

      // Automatically transition stock between Reserved, Sold, and Available
      (ord.items || []).forEach(item => {
        const p = ERP_DB.products.find(x => x.id === item.productId || x.sku === item.sku);
        if (!p) return;
        const qty = Number(item.qty) || 1;

        if (activeReserveStates.includes(prevStatus) && newStatus === "Delivered") {
          p.reserved = Math.max(0, Number(p.reserved || 0) - qty);
          p.sold = Number(p.sold || 0) + qty;
          ERP_DB.inventoryMovements.unshift({
            time: nowTimestamp(),
            productId: p.id,
            productTitle: p.title,
            sku: p.sku,
            variant: item.variant || "Standard",
            type: `Order Delivered (-${qty} Reserved → +${qty} Sold)`,
            note: `Order ${ord.id} (${p.title} - ${item.variant || "Standard"}) delivered to ${ord.customerName} — revenue earned.`
          });
        } else if (activeReserveStates.includes(prevStatus) && releaseStates.includes(newStatus)) {
          p.reserved = Math.max(0, Number(p.reserved || 0) - qty);
          p.available = Number(p.available || 0) + qty;
          ERP_DB.inventoryMovements.unshift({
            time: nowTimestamp(),
            productId: p.id,
            productTitle: p.title,
            sku: p.sku,
            variant: item.variant || "Standard",
            type: `${newStatus} (+${qty} Released to Available)`,
            note: `Order ${ord.id} (${p.title} - ${item.variant || "Standard"}) marked ${newStatus} — reserved stock returned to Available.`
          });
        } else if (prevStatus === "Delivered" && releaseStates.includes(newStatus)) {
          p.sold = Math.max(0, Number(p.sold || 0) - qty);
          p.available = Number(p.available || 0) + qty;
          p.returned = Number(p.returned || 0) + qty;
        }
      });

      ord.status = newStatus;
      if (newStatus === "Dispatched" && (!ord.trackingNumber || ord.trackingNumber === "PENDING")) {
        ord.trackingNumber = "SF-BD-" + Math.floor(100000 + Math.random() * 899999);
        ord.dispatchDate = nowTimestamp().slice(0, 10);
        ord.deliveryAttempts = 1;
      }
      if (newStatus === "Delivered") {
        ord.deliveryAttempts = Math.max(1, Number(ord.deliveryAttempts || 1));
        ord.deliveryOutcome = "Successfully delivered to customer";
        if (ord.paymentMethod.includes("COD") && ord.paymentStatus === "Pending") {
          ord.paymentStatus = "Collected";
        }
      }
      if (newStatus === "Refunded") {
        ord.paymentStatus = "Refunded";
      }

      ERP_DB.emsNotifications.unshift({
        id: "EN-" + Date.now(),
        time: "Just now",
        type: "Order Workflow Update",
        msg: `Order ${ord.id} (${ord.customerName}) updated from ${prevStatus} → ${newStatus}.`
      });

      saveErpDatabase();
      renderAllErpModules();
      showToast(`Order ${orderId} updated to ${newStatus} (Stock & Reports Auto-Synced)`);
    }

    function updateOrderPaymentStatus(orderId, newPayStatus) {
      const ord = ERP_DB.orders.find(o => o.id === orderId);
      if (!ord) return;
      ord.paymentStatus = newPayStatus;
      if (newPayStatus === "Paid") ord.codSettled = true;
      saveErpDatabase();
      renderAllErpModules();
      showToast(`Order ${orderId} payment status updated to ${newPayStatus}`);
    }

    function bookCourierForOrder(orderId) {
      const ord = ERP_DB.orders.find(o => o.id === orderId);
      if (!ord) return;
      const couriers = ["Steadfast Courier", "Pathao Courier", "RedX Logistics", "Paperfly"];
      const nextCourier = couriers[(couriers.indexOf(ord.courier) + 1) % couriers.length] || "Steadfast Courier";
      ord.courier = nextCourier;
      ord.trackingNumber = nextCourier.slice(0, 3).toUpperCase() + "-2027-" + Math.floor(10000 + Math.random() * 89999);
      ord.dispatchDate = nowTimestamp().slice(0, 10);
      if (["New", "Confirmed", "Packed"].includes(ord.status)) {
        ord.status = "Dispatched";
      }
      ERP_DB.emsNotifications.unshift({
        id: "EN-" + Date.now(),
        time: "Just now",
        type: "Courier Dispatch",
        msg: `Order ${ord.id} booked with ${ord.courier} (Tracking: ${ord.trackingNumber}).`
      });
      saveErpDatabase();
      renderAllErpModules();
      showToast(`Booked ${ord.courier} • Tracking: ${ord.trackingNumber}`);
    }

    function renderInvoiceModalHtml(ord, isSampleBadge = false) {
      const body = document.getElementById("invoiceModalBody");
      if (!body) return;
      const subEl = document.getElementById("invoiceModalSubtitle");
      if (subEl) {
        subEl.textContent = `Order Invoice (${ord.id}) — A4 Paper Format`;
      }
      const isPaid = ord.paymentStatus === "Paid";
      const dueCollectible = isPaid ? 0 : Number(ord.totalRevenue || 0);
      const logoSrc = state.theme === "dark" ? TEHZIB_LOGOS.dark : TEHZIB_LOGOS.light;

      body.innerHTML = `
        <div id="printableInvoiceSheet" style="border:1px solid var(--border-strong);border-radius:14px;background:var(--bg-card);color:var(--text-main);box-shadow:var(--shadow-sm);">
          <div>
            <div style="display:flex;justify-content:space-between;align-items:flex-start;border-bottom:2px solid var(--border-strong);padding-bottom:16px;margin-bottom:18px;flex-wrap:wrap;gap:12px;">
              <div style="display:flex;align-items:center;gap:14px;">
                <img src="${logoSrc}" alt="Tehzib Logo" style="height:48px;width:auto;object-fit:contain;border-radius:6px;" />
                <div>
                  <div style="font-family:'Cormorant Garamond',serif;font-size:22px;font-weight:700;letter-spacing:0.06em;">TEHZIB LIFESTYLE</div>
                  <div style="font-size:12px;color:var(--text-secondary);">${ERP_DB.cms.footerAddress || "Uttara Sector 12, Dhaka, Bangladesh"}</div>
                  <div style="font-size:11px;color:var(--text-muted);">Hotline: ${ERP_DB.cms.footerPhone || "+880 1711-002027"} • ${ERP_DB.cms.footerEmail || "concierge@tehzib.com"}</div>
                </div>
              </div>
              <div style="text-align:right;">
                <div style="display:inline-flex;gap:6px;align-items:center;">
                  <span class="badge badge-rose">OFFICIAL TAX INVOICE</span>
                </div>
                <div class="mono" style="font-size:16px;font-weight:800;margin-top:6px;color:var(--accent-rose-deep);">INVOICE #${ord.id}</div>
                <div style="font-size:11.5px;color:var(--text-secondary);margin-top:2px;">Date: <span class="mono">${ord.date}</span></div>
              </div>
            </div>

            <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:18px;font-size:12px;">
              <div style="padding:12px 14px;border-radius:10px;background:var(--bg-elevated);border:1px solid var(--border-color);">
                <div style="color:var(--accent-rose-deep);font-size:10.5px;text-transform:uppercase;font-weight:800;letter-spacing:0.06em;margin-bottom:4px;">Billed &amp; Shipped To Customer</div>
                <div style="font-weight:700;font-size:13.5px;">${ord.customerName}</div>
                <div class="mono" style="font-weight:600;margin:2px 0;">Phone: ${ord.customerPhone}</div>
                <div style="color:var(--text-secondary);">${ord.customerAddress}</div>
                <div style="font-size:11px;color:var(--text-muted);margin-top:4px;">Delivery Zone: ${ord.deliveryMethod || "Inside Dhaka Standard (৳ 70)"}</div>
              </div>
              <div style="padding:12px 14px;border-radius:10px;background:var(--bg-elevated);border:1px solid var(--border-color);text-align:right;">
                <div style="color:var(--accent-rose-deep);font-size:10.5px;text-transform:uppercase;font-weight:800;letter-spacing:0.06em;margin-bottom:4px;">Courier &amp; Payment Details</div>
                <div><strong>Courier Partner:</strong> ${ord.courier || "Steadfast Courier"}</div>
                <div class="mono"><strong>Consignment / Tracking:</strong> ${ord.trackingNumber || "SF-BD-202788"}</div>
                <div><strong>Payment Method:</strong> ${ord.paymentMethod || "Cash on Delivery (COD)"}</div>
                <div style="margin-top:4px;">
                  <span class="badge ${isPaid ? 'badge-green' : 'badge-orange'}">
                    ${isPaid ? '✓ PAID IN FULL' : `COD TO COLLECT: ${formatBdt(dueCollectible)}`}
                  </span>
                </div>
              </div>
            </div>

            <div style="margin-bottom:20px;">
              <table class="invoice-items-table">
                <thead>
                  <tr>
                    <th style="width:42px;">#</th>
                    <th>Item Description &amp; SKU</th>
                    <th>Variant (Colour / Size)</th>
                    <th style="width:64px;">Qty</th>
                    <th style="width:120px;">Unit Price</th>
                    <th style="width:130px;text-align:right;">Line Total</th>
                  </tr>
                </thead>
                <tbody>
                  ${(ord.items || []).map((i, idx) => `
                    <tr>
                      <td class="mono">${idx + 1}</td>
                      <td>
                        <div style="font-weight:700;">${i.title}</div>
                        <div class="mono" style="font-size:10.5px;color:var(--text-muted);">SKU: ${i.sku || i.productId}</div>
                      </td>
                      <td>${i.variant || "Standard"}</td>
                      <td class="mono" style="font-weight:700;">${i.qty}</td>
                      <td class="mono">${formatBdt(i.unitPrice)}</td>
                      <td class="mono" style="font-weight:700;text-align:right;">${formatBdt(i.qty * i.unitPrice)}</td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>

          <div style="display:grid;grid-template-columns:1.1fr 0.9fr;gap:16px;align-items:end;padding-top:16px;border-top:1px solid var(--border-color);font-size:12px;">
            <div>
              <div style="display:flex;justify-content:space-between;margin-top:26px;padding:0 8px;font-size:11px;color:var(--text-muted);">
                <div style="border-top:1px solid var(--border-strong);padding-top:4px;width:44%;text-align:center;">Customer Receiver Signature</div>
                <div style="border-top:1px solid var(--border-strong);padding-top:4px;width:44%;text-align:center;">Authorized Tehzib Dispatch</div>
              </div>
            </div>

            <div style="background:var(--bg-elevated);padding:14px 16px;border-radius:10px;border:1px solid var(--border-color);text-align:right;">
              <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
                <span style="color:var(--text-secondary);">Items Subtotal:</span>
                <strong class="mono">${formatBdt(ord.subtotal)}</strong>
              </div>
              <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
                <span style="color:var(--text-secondary);">Delivery Charge:</span>
                <strong class="mono">${formatBdt(ord.deliveryFee || 0)}</strong>
              </div>
              <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
                <span style="color:var(--text-secondary);">Order Discount:</span>
                <strong class="mono">- ${formatBdt(ord.discount || 0)}</strong>
              </div>
              <div style="display:flex;justify-content:space-between;padding-top:8px;border-top:1px solid var(--border-strong);font-size:14.5px;font-weight:800;">
                <span>Invoice Grand Total:</span>
                <span class="mono" style="color:var(--accent-rose-deep);">${formatBdt(ord.totalRevenue)}</span>
              </div>
              <div style="display:flex;justify-content:space-between;margin-top:4px;font-size:12px;font-weight:700;color:${isPaid ? 'var(--status-green)' : 'var(--status-orange)'};">
                <span>${isPaid ? 'Advance / Paid Amount:' : 'Collectible on Delivery (Due):'}</span>
                <span class="mono">${formatBdt(ord.totalRevenue)}</span>
              </div>
            </div>
          </div>
        </div>
      `;
      window.__suspendedErpModalIds = [];
      document.querySelectorAll(".erp-modal-backdrop.open, .modal-backdrop.open").forEach(m => m.classList.remove("open"));
      document.getElementById("invoiceModal").classList.add("open");
    }

    function openOrderInvoiceModal(orderId) {
      const ord = ERP_DB.orders.find(o => o.id === orderId);
      if (!ord) return;
      renderInvoiceModalHtml(ord, false);
    }

    function buildPosDraftOrderForInvoice() {
      const custName = document.getElementById("posCustName")?.value.trim() || "Samira Rahman (Sample Walk-In / POS)";
      const custPhone = document.getElementById("posCustPhone")?.value.trim() || "+880 1712-345678";
      const custAddr = document.getElementById("posCustAddress")?.value.trim() || "House 14, Road 5, Sector 12, Uttara, Dhaka";
      const channel = document.getElementById("posChannel")?.value || "Facebook Page / Group";
      const courier = document.getElementById("posCourierSelect")?.value || "Steadfast Courier";
      const tier = document.getElementById("posPriceTier")?.value || "RETAIL";
      const delivMethod = document.getElementById("posDeliveryMethod")?.value || "Inside Dhaka Standard (৳ 70)";
      const discount = Number(document.getElementById("posDiscountInput")?.value) || 0;
      const payMethod = document.getElementById("posAccountSelect")?.value || "Cash on Delivery (COD)";

      let delivFee = 0;
      if (delivMethod.includes("70")) delivFee = 70;
      else if (delivMethod.includes("130")) delivFee = 130;

      if (posDraftItems.length === 0 && ERP_DB.products.length > 0) {
        const defaultProd = ERP_DB.products.find(p => p.id === "p_claw") || ERP_DB.products[0];
        posDraftItems.push({ productId: defaultProd.id, variant: "Blush Pink", qty: 1 });
      }

      let subtotal = 0;
      let totalCogs = 0;
      const items = posDraftItems.map(item => {
        const p = ERP_DB.products.find(x => x.id === item.productId) || ERP_DB.products[0];
        const unitPrice = tier === "WHOLESALE" ? Number(p.wholesalePrice || p.price) : Number(p.price);
        const unitCost = Number(p.landedCost || p.costPrice || 210);
        subtotal += unitPrice * item.qty;
        totalCogs += unitCost * item.qty;
        return {
          productId: p.id,
          sku: p.sku,
          title: p.title,
          variant: item.variant || "Standard / Pink",
          qty: item.qty,
          unitPrice,
          unitCost
        };
      });

      const totalRevenue = Math.max(0, subtotal - discount + delivFee);
      const isPaid = !payMethod.includes("COD");
      return {
        id: "INV-POS-" + (ERP_DB.orders.length + 905),
        date: nowTimestamp(),
        customerName: custName,
        customerPhone: custPhone,
        customerAddress: custAddr,
        channel,
        courier,
        trackingNumber: "SF-POS-" + Math.floor(100000 + Math.random() * 899999),
        deliveryMethod: delivMethod,
        deliveryFee: delivFee,
        discount,
        paymentMethod: payMethod,
        paymentStatus: isPaid ? "Paid" : "Pending",
        packagingCost: 35,
        courierActualCost: delivFee || 60,
        items,
        subtotal,
        totalRevenue,
        totalCogs,
        status: "Draft Preview"
      };
    }

    function previewPosDraftInvoice() {
      const draftOrd = buildPosDraftOrderForInvoice();
      renderInvoiceModalHtml(draftOrd, false);
      showToast("Step 1: Invoice Preview opened in modal! Click 'Print Invoice' to print.");
    }

    function openSampleInvoicePreviewModal() {
      const sampleOrder = {
        id: "SAMPLE-INV-2027",
        date: "2027-02-28 16:45",
        customerName: "Tasnima Ahmed",
        customerPhone: "+880 1711-334455",
        customerAddress: "House 18, Road 7, Sector 12, Uttara, Dhaka-1230",
        channel: "Showroom POS / Facebook Page",
        courier: "Steadfast Courier",
        trackingNumber: "SF-BD-889204",
        deliveryMethod: "Inside Dhaka Standard (৳ 70)",
        deliveryFee: 70,
        discount: 100,
        paymentMethod: "Cash on Delivery (COD)",
        paymentStatus: "Pending",
        packagingCost: 35,
        courierActualCost: 60,
        items: [
          { productId: "p_claw", sku: "TEH-ACC-CLP-PNK", title: "Signature Parisian Pink Claw Clip", variant: "Blush Pink", qty: 2, unitPrice: 450, unitCost: 210 },
          { productId: "p4", sku: "THZ-FA-004-CRM", title: "Quilted Cream Crossbody Bag", variant: "Alabaster Cream", qty: 1, unitPrice: 2850, unitCost: 1350 }
        ],
        subtotal: 3750,
        totalRevenue: 3720,
        totalCogs: 1770,
        status: "Confirmed"
      };
      renderInvoiceModalHtml(sampleOrder, true);
      showToast("Sample Printable Invoice loaded in modal! Click 'Print Invoice' to print.");
    }

    function printPreviewedInvoice() {
      document.body.classList.add("printing-invoice-modal");
      window.print();
      setTimeout(() => {
        document.body.classList.remove("printing-invoice-modal");
      }, 600);
    }

    function previewAndPrintPosInvoice() {
      previewPosDraftInvoice();
      setTimeout(() => {
        printPreviewedInvoice();
      }, 250);
    }

    function populatePosCustomerFromCrm() {
      const cid = document.getElementById("posCustomerSelect")?.value;
      if (!cid) return;
      const cust = ERP_DB.crmCustomers.find(c => c.id === cid);
      if (cust) {
        document.getElementById("posCustName").value = cust.name;
        document.getElementById("posCustPhone").value = cust.phone;
        document.getElementById("posCustAddress").value = cust.address;
      }
    }

    function renderPosCartSummary() {
      const wrap = document.getElementById("posCartItemsWrap");
      const totalsBox = document.getElementById("posTotalsSummaryBox");
      if (!wrap || !totalsBox) return;

      const tier = document.getElementById("posPriceTier")?.value || "RETAIL";
      const delivMethod = document.getElementById("posDeliveryMethod")?.value || "Inside Dhaka Standard (৳ 70)";
      const discount = Number(document.getElementById("posDiscountInput")?.value) || 0;

      let delivFee = 0;
      if (delivMethod.includes("70")) delivFee = 70;
      else if (delivMethod.includes("130")) delivFee = 130;

      if (posDraftItems.length === 0 && ERP_DB.products.length > 0) {
        const defaultProd = ERP_DB.products.find(p => p.id === "p_claw") || ERP_DB.products[0];
        posDraftItems.push({ productId: defaultProd.id, variant: (defaultProd.variants && defaultProd.variants[0]) || "Blush Pink", qty: 1 });
      }

      let subtotal = 0;
      let totalCogs = 0;

      wrap.innerHTML = posDraftItems.map((item, idx) => {
        const p = ERP_DB.products.find(x => x.id === item.productId) || ERP_DB.products[0];
        const unitPrice = tier === "WHOLESALE" ? Number(p.wholesalePrice || p.price) : Number(p.price);
        const unitCost = Number(p.landedCost || p.costPrice || 200);
        const lineTotal = unitPrice * item.qty;
        subtotal += lineTotal;
        totalCogs += unitCost * item.qty;

        return `
          <div style="display:flex;justify-content:space-between;align-items:center;padding:5px 0;border-bottom:1px dashed var(--border-color);">
            <div>
              <strong>${item.qty}× ${p.title}</strong> <span style="color:var(--text-muted);">(${item.variant})</span>
              <div class="mono" style="font-size:10.5px;color:var(--text-secondary);">${formatBdt(unitPrice)} each • Landed: ${formatBdt(unitCost)}</div>
            </div>
            <div style="display:flex;align-items:center;gap:8px;">
              <span class="mono" style="font-weight:700;">${formatBdt(lineTotal)}</span>
              <button type="button" class="btn btn-sm btn-danger" style="padding:2px 6px;" onclick="removePosDraftItem(${idx})">✕</button>
            </div>
          </div>
        `;
      }).join("");

      const netTotal = Math.max(0, subtotal - discount + delivFee);
      const estProfit = netTotal - totalCogs - 95;

      totalsBox.innerHTML = `
        <div style="display:flex;justify-content:space-between;margin-bottom:3px;">
          <span>Items Subtotal (${tier}):</span>
          <strong class="mono">${formatBdt(subtotal)}</strong>
        </div>
        <div style="display:flex;justify-content:space-between;margin-bottom:3px;">
          <span>Delivery Charge:</span>
          <strong class="mono">${delivMethod.includes("Distance") ? "Variable on Distance" : formatBdt(delivFee)}</strong>
        </div>
        <div style="display:flex;justify-content:space-between;margin-bottom:5px;">
          <span>Discount:</span>
          <strong class="mono">- ${formatBdt(discount)}</strong>
        </div>
        <div style="display:flex;justify-content:space-between;padding-top:6px;border-top:1px solid var(--border-color);font-size:13px;">
          <strong>Order Total:</strong>
          <strong class="mono" style="color:var(--accent-rose-deep);">${formatBdt(netTotal)}</strong>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--status-green);margin-top:3px;">
          <span>Est. Net Contribution (after Landed COGS + Packaging/Courier):</span>
          <strong class="mono">${formatBdt(estProfit)}</strong>
        </div>
      `;
    }

    function removePosDraftItem(idx) {
      posDraftItems.splice(idx, 1);
      renderPosCartSummary();
    }

    // ------------------------------------------------------------------------
    // 4. CUSTOMER MANAGEMENT (CRM), REVIEWS & LOYALTY
    // ------------------------------------------------------------------------
    function renderCrmModule() {
      const custs = ERP_DB.crmCustomers || [];
      const totalPoints = custs.reduce((s, c) => s + (Number(c.points) || 0), 0);
      const totalSpend = custs.reduce((s, c) => s + (Number(c.spend) || 0), 0);
      const repeatCount = custs.filter(c => c.tier === "VIP" || c.tier === "Repeat").length;

      const kpiEl = document.getElementById("crmKpiGrid");
      if (kpiEl) {
        kpiEl.innerHTML = `
          <div class="kpi-card">
            <div class="kpi-label"><span>Total CRM Customers</span><span>👥</span></div>
            <div class="kpi-value mono">${custs.length} Profiles</div>
            <div class="kpi-sub"><span>Access-Controlled DB</span><span class="badge badge-green">Protected</span></div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label"><span>Repeat &amp; VIP Customers</span><span>💎</span></div>
            <div class="kpi-value mono">${repeatCount} Repeat</div>
            <div class="kpi-sub"><span>Retention Focus</span><span class="badge badge-rose">Segments</span></div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label"><span>Total Completed Spend</span><span>🏦</span></div>
            <div class="kpi-value mono">${formatBdt(totalSpend)}</div>
            <div class="kpi-sub"><span>Delivered Orders LTV</span><span class="badge badge-blue">Verified</span></div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label"><span>Active Loyalty Points</span><span>✦</span></div>
            <div class="kpi-value mono">${totalPoints.toLocaleString()} Pts</div>
            <div class="kpi-sub"><span>Synced with Storefront</span><span class="badge badge-green">Live</span></div>
          </div>
        `;
      }

      const segFilter = document.getElementById("crmSegmentFilter")?.value || "ALL";
      const tbody = document.getElementById("crmCustomersTableBody");
      if (tbody) {
        const list = custs.filter(c => segFilter === "ALL" || c.tier === segFilter);
        tbody.innerHTML = list.map(c => {
          const consentTags = [
            c.consent?.sms ? "SMS" : "",
            c.consent?.whatsapp ? "WhatsApp" : "",
            c.consent?.email ? "Email" : ""
          ].filter(Boolean).join(", ") || "Transactional Only";

          return `
            <tr>
              <td>
                <div style="font-weight:700;">${c.name}</div>
                <div class="mono" style="font-size:11px;color:var(--text-secondary);">${c.phone}</div>
                <div style="font-size:10.5px;color:var(--text-muted);">${c.email || ""}</div>
              </td>
              <td style="font-size:12px;max-width:190px;">${c.address}</td>
              <td><span class="badge ${c.tier === 'VIP' ? 'badge-rose' : (c.tier === 'Repeat' ? 'badge-green' : 'badge-blue')}">${c.tier}</span></td>
              <td class="mono">${c.completedOrders || 1} Delivered / ${c.ordersCount || 1} Total</td>
              <td class="mono" style="font-weight:700;">${formatBdt(c.spend)}</td>
              <td class="mono">${c.returnsCount || 0} Ret / ${c.failedCount || 0} Fail</td>
              <td style="font-size:11px;">
                <div>${c.notes || "No service issues"}</div>
                <div style="font-size:10.5px;color:var(--status-green);margin-top:2px;">Opt-in: ${consentTags}</div>
              </td>
              <td>
                <div style="display:flex;gap:5px;">
                  <button type="button" class="btn btn-sm btn-secondary" onclick="loadCustomerIntoCrmForm('${c.id}')">Edit</button>
                  <button type="button" class="btn btn-sm btn-rose" onclick="awardBonusPoints('${c.id}')">+100 Pts</button>
                </div>
              </td>
            </tr>
          `;
        }).join("");
      }

      // Reviews Moderation Table
      const revBody = document.getElementById("crmReviewsTableBody");
      if (revBody) {
        revBody.innerHTML = (ERP_DB.reviews || []).map(r => `
          <tr>
            <td>
              <div style="font-weight:700;">${r.customerName}</div>
              <div class="mono" style="font-size:10.5px;color:var(--text-muted);">${r.date}</div>
            </td>
            <td>
              <div style="font-weight:600;">${r.productTitle}</div>
              <div class="mono" style="font-size:10.5px;color:var(--accent-rose-deep);">${r.sku}</div>
            </td>
            <td style="color:#D4AF37;font-weight:700;">${"★".repeat(r.rating)}</td>
            <td style="font-size:12px;max-width:320px;">"${r.comment}"</td>
            <td><span class="badge ${r.status === 'Approved' ? 'badge-green' : 'badge-orange'}">${r.status}</span></td>
            <td>
              <button type="button" class="btn btn-sm ${r.status === 'Approved' ? 'btn-secondary' : 'btn-success'}" onclick="toggleReviewApproval('${r.id}')">
                ${r.status === 'Approved' ? 'Unpublish' : '✓ Approve Review'}
              </button>
            </td>
          </tr>
        `).join("");
      }

      // Loyalty & Referrals Summary
      const loyEl = document.getElementById("crmLoyaltySummaryBody");
      if (loyEl) {
        loyEl.innerHTML = `
          <div class="table-wrap">
            <table class="erp-table">
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Segment</th>
                  <th>Referral Code</th>
                  <th>Reward Points Balance</th>
                  <th>Redeemable Value</th>
                  <th>Quick Action</th>
                </tr>
              </thead>
              <tbody>
                ${custs.map(c => `
                  <tr>
                    <td><strong>${c.name}</strong> (${c.phone})</td>
                    <td><span class="badge badge-rose">${c.tier}</span></td>
                    <td class="mono" style="font-weight:700;">${c.referralCode || "THZ-REF-10"}</td>
                    <td class="mono" style="font-weight:700;">✦ ${c.points} Pts</td>
                    <td class="mono">${formatBdt(Math.round(c.points * 0.5))}</td>
                    <td><button type="button" class="btn btn-sm btn-rose" onclick="awardBonusPoints('${c.id}')">+ Award Referral Bonus (100 Pts)</button></td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        `;
      }
    }

    function awardBonusPoints(cid) {
      const c = ERP_DB.crmCustomers.find(x => x.id === cid);
      if (!c) return;
      c.points = (Number(c.points) || 0) + 100;
      saveErpDatabase();
      renderAllErpModules();
      showToast(`Awarded +100 Loyalty Points to ${c.name} (Synced to Storefront Account)`);
    }

    function toggleReviewApproval(revId) {
      const r = (ERP_DB.reviews || []).find(x => x.id === revId);
      if (!r) return;
      r.status = r.status === "Approved" ? "Pending Approval" : "Approved";
      saveErpDatabase();
      renderAllErpModules();
      showToast(`Review by ${r.customerName} is now ${r.status}`);
    }

    // ------------------------------------------------------------------------
    // 5. SUPPLIER, PURCHASING (PO), SOURCING ECONOMICS & PREORDERS
    // ------------------------------------------------------------------------
    function renderProcurementModule(m) {
      const metrics = m || computeErpMetrics();
      const kpiEl = document.getElementById("procurementKpiGrid");
      if (kpiEl) {
        kpiEl.innerHTML = `
          <div class="kpi-card">
            <div class="kpi-label"><span>Active Suppliers</span><span>🏭</span></div>
            <div class="kpi-value mono">${ERP_DB.suppliers.length} Partners</div>
            <div class="kpi-sub"><span>Paid &amp; Payable Tracked</span><span class="badge badge-blue">Verified</span></div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label"><span>Open Purchase Orders</span><span>🚢</span></div>
            <div class="kpi-value mono">${metrics.pendingShipmentsCount} Open POs</div>
            <div class="kpi-sub"><span>Draft SKUs: ${metrics.unpublishedCount}</span><span class="badge badge-orange">Awaiting GRN</span></div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label"><span>Supplier Outstanding Payables</span><span>💳</span></div>
            <div class="kpi-value mono">${formatBdt(metrics.totalAccountsPayable)}</div>
            <div class="kpi-sub"><span>Across all POs</span><span class="badge badge-rose">Payable</span></div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label"><span>Active Preorders</span><span>⏳</span></div>
            <div class="kpi-value mono">${(ERP_DB.preorders || []).length} Preorders</div>
            <div class="kpi-sub"><span>Deposits Held</span><span class="badge badge-green">Tracked</span></div>
          </div>
        `;
      }

      const supSelect = document.getElementById("spSupplierId");
      if (supSelect) {
        supSelect.innerHTML = ERP_DB.suppliers.map(s => `<option value="${s.id}">${s.name} (MOQ: ${s.moq || 12})</option>`).join("");
      }

      const catSelect = document.getElementById("spCategory");
      if (catSelect) {
        catSelect.innerHTML = ERP_DB.cms.categories.map(c => `<option value="${c.name}">${c.name}</option>`).join("");
      }

      const shipBody = document.getElementById("shipmentsTableBody");
      if (shipBody) {
        shipBody.innerHTML = ERP_DB.shipments.map(sh => {
          const sup = ERP_DB.suppliers.find(s => s.id === sh.supplierId);
          const outQty = Math.max(0, Number(sh.orderedQty || 0) - Number(sh.receivedQty || 0));
          const landed = Number(sh.landedCost || sh.costPrice || 0);
          return `
            <tr>
              <td>
                <div class="mono" style="font-weight:700;">${sh.id}</div>
                <div style="font-size:10.5px;color:var(--text-muted);">${sh.date || "2027-02-22"}</div>
              </td>
              <td>
                <div style="font-weight:600;">${sup ? sup.name : sh.supplierId}</div>
                <div style="font-size:10.5px;color:var(--text-muted);">Lead: ${sup?.leadDays || 3} days</div>
              </td>
              <td>
                <div style="font-weight:700;">${sh.productTitle}</div>
                <div class="mono" style="font-size:11px;color:var(--accent-rose-deep);">${sh.sku}</div>
              </td>
              <td class="mono">${sh.moq || sup?.moq || 12} pcs</td>
              <td class="mono">
                <strong>${sh.orderedQty}</strong> Ord / <strong style="color:var(--status-green);">${sh.receivedQty}</strong> Rec / <span style="color:var(--status-orange);">${outQty} Outst.</span>
              </td>
              <td class="mono">
                <div>Buy: ${formatBdt(sh.costPrice)}</div>
                <div style="font-size:10.5px;color:var(--text-muted);">Landed: ${formatBdt(landed)}</div>
              </td>
              <td class="mono" style="font-weight:700;">${formatBdt(sh.orderedQty * landed)}</td>
              <td>
                <span class="badge ${sh.status === 'RECEIVED' ? 'badge-green' : 'badge-orange'}">${sh.status}</span>
              </td>
              <td>
                ${sh.status !== "RECEIVED" ? `
                  <button type="button" class="btn btn-sm btn-success" onclick="openReceiveShipmentModal('${sh.id}')">
                    ✓ Receive Stock
                  </button>
                ` : `<span style="font-size:11px;color:var(--text-muted);">Stock Updated ✓</span>`}
              </td>
            </tr>
          `;
        }).join("");
      }

      const supEditSel = document.getElementById("supEditSelect");
      if (supEditSel) {
        const currentVal = supEditSel.value;
        supEditSel.innerHTML = `<option value="">-- + Add New Supplier Partner --</option>` +
          ERP_DB.suppliers.map(s => `<option value="${s.id}">${s.name} (Paid: ${formatBdt(s.paidAmount || 0)} • Due: ${formatBdt(s.payable || 0)})</option>`).join("");
        if (currentVal && ERP_DB.suppliers.some(s => s.id === currentVal)) {
          supEditSel.value = currentVal;
        }
      }

      const supBody = document.getElementById("suppliersTableBody");
      if (supBody) {
        supBody.innerHTML = ERP_DB.suppliers.map(s => `
          <tr>
            <td>
              <div style="font-weight:700;">${s.name}</div>
              <div style="font-size:11px;color:var(--text-secondary);">${s.contact} • <span class="mono">${s.phone}</span></div>
              <div style="font-size:10.5px;color:var(--text-muted);">${s.address} • <span style="color:var(--accent-rose-deep);">${s.terms || "Standard Terms"}</span></div>
            </td>
            <td>
              <span class="badge badge-rose">${s.category}</span>
              <div class="mono" style="font-size:11px;margin-top:3px;">MOQ: ${s.moq || 12} pcs • ${s.quotedRange || "Quoted per SKU"}</div>
            </td>
            <td class="mono">${s.leadDays || 3} Days</td>
            <td style="font-size:11px;max-width:250px;">
              <div>${s.notes || "Good quality"}</div>
              <div style="font-size:10.5px;color:var(--status-orange);margin-top:2px;">Defects: ${s.defectClaims || "None"}</div>
            </td>
            <td class="mono">
              <div style="font-size:11.5px;font-weight:700;color:var(--status-green);">Paid: ${formatBdt(s.paidAmount || 0)}</div>
              <div style="font-size:10px;color:var(--text-muted);">Adv By: <strong>${s.advanceByStaff || "Nadia Sultana"}</strong> (${ERP_DB.accounts[s.advanceAccount]?.name || s.advanceAccount || "bKash"})</div>
              <div style="font-size:11.5px;font-weight:700;color:${s.payable > 0 ? 'var(--danger)' : 'var(--status-green)'};margin-top:3px;">Due: ${formatBdt(s.payable || 0)}</div>
              <div style="font-size:10px;color:var(--text-muted);">Due By: <strong>${s.dueByStaff || "Farhan Islam"}</strong> (${ERP_DB.accounts[s.dueAccount]?.name || s.dueAccount || "City Bank"})</div>
            </td>
            <td>
              <div style="display:flex;gap:5px;flex-wrap:wrap;">
                <button type="button" class="btn btn-sm btn-rose" onclick="loadSupplierForBalanceEntry('${s.id}')">✎ Entry Paid / Due</button>
                <button type="button" class="btn btn-sm btn-secondary" onclick="paySupplierBalance('${s.id}')">💳 Pay Due / Advance</button>
                <button type="button" class="btn btn-sm btn-danger" onclick="logSupplierDefectClaim('${s.id}')">+ Defect Claim</button>
              </div>
            </td>
          </tr>
        `).join("");
      }

      const preBody = document.getElementById("preordersTableBody");
      if (preBody) {
        preBody.innerHTML = (ERP_DB.preorders || []).map(pr => `
          <tr>
            <td>
              <div class="mono" style="font-weight:700;">${pr.id}</div>
              <div style="font-size:12px;font-weight:600;">${pr.productTitle} (${pr.sku})</div>
            </td>
            <td>
              <div style="font-weight:600;">${pr.customerName}</div>
              <div class="mono" style="font-size:11px;">${pr.customerPhone}</div>
            </td>
            <td style="font-size:12px;">
              <div>${pr.supplierName}</div>
              <div style="color:var(--text-muted);">${pr.leadTime}</div>
            </td>
            <td class="mono" style="font-weight:700;">${pr.expectedArrival}</td>
            <td class="mono">
              <div>Total: ${formatBdt(pr.orderValue)}</div>
              <div style="color:var(--status-green);font-size:11px;">Deposit: ${formatBdt(pr.depositHeld)}</div>
            </td>
            <td>
              <span class="badge badge-blue">${pr.status}</span>
              <button type="button" class="btn btn-sm btn-secondary" style="margin-left:6px;" onclick="notifyPreorderCustomer('${pr.id}')">Send Update</button>
            </td>
          </tr>
        `).join("");
      }
    }

    function populateSupplierFormForEdit(supId) {
      const sel = document.getElementById("supEditSelect");
      if (sel && sel.value !== supId) sel.value = supId || "";
      if (!supId) {
        document.getElementById("supName").value = "";
        document.getElementById("supContact").value = "";
        document.getElementById("supPhone").value = "";
        document.getElementById("supMoq").value = 12;
        document.getElementById("supLeadDays").value = 3;
        document.getElementById("supPaidAmount").value = 0;
        document.getElementById("supPayableAmount").value = 0;
        document.getElementById("supAddress").value = "";
        document.getElementById("supNotes").value = "";
        const btn = document.getElementById("supFormSubmitBtn");
        if (btn) btn.textContent = "+ Save Supplier & Paid / Due Balance";
        return;
      }
      const sup = ERP_DB.suppliers.find(s => s.id === supId);
      if (!sup) return;
      document.getElementById("supName").value = sup.name || "";
      document.getElementById("supContact").value = sup.contact || "";
      document.getElementById("supPhone").value = sup.phone || "";
      document.getElementById("supCategory").value = sup.category || "Accessories & Hair Clips";
      document.getElementById("supMoq").value = Number(sup.moq) || 12;
      document.getElementById("supLeadDays").value = Number(sup.leadDays) || 3;
      document.getElementById("supPaidAmount").value = Number(sup.paidAmount) || 0;
      document.getElementById("supPayableAmount").value = Number(sup.payable) || 0;
      if (document.getElementById("supAdvanceAccount") && sup.advanceAccount) document.getElementById("supAdvanceAccount").value = sup.advanceAccount;
      if (document.getElementById("supDueAccount") && sup.dueAccount) document.getElementById("supDueAccount").value = sup.dueAccount;
      if (document.getElementById("supAdvanceStaff") && sup.advanceByStaff) document.getElementById("supAdvanceStaff").value = sup.advanceByStaff;
      if (document.getElementById("supDueStaff") && sup.dueByStaff) document.getElementById("supDueStaff").value = sup.dueByStaff;
      document.getElementById("supBalanceUpdateMode").value = "SET";
      document.getElementById("supAddress").value = sup.address || "";
      document.getElementById("supNotes").value = sup.notes || "";
      const btn = document.getElementById("supFormSubmitBtn");
      if (btn) btn.textContent = `✓ Update "${sup.name}" Paid & Due Balance`;
    }

    function loadSupplierForBalanceEntry(supId) {
      switchProcTab("suppliers");
      populateSupplierFormForEdit(supId);
      const paidInput = document.getElementById("supPaidAmount");
      if (paidInput) {
        paidInput.focus();
        paidInput.select();
      }
      showToast("Loaded supplier into Advance/Paid & Payable/Due Entry form!");
    }

    function resetSupplierBalanceForm() {
      populateSupplierFormForEdit("");
    }

    function paySupplierBalance(supId) {
      const sup = ERP_DB.suppliers.find(s => s.id === supId);
      if (!sup) return;
      const defaultAmt = sup.payable > 0 ? Math.min(10000, sup.payable) : 5000;
      const accOpts = Object.entries(ERP_DB.accounts || {}).map(([k, v]) =>
        `<option value="${k}" ${k === (sup.dueAccount || 'acc_bank') ? 'selected' : ''}>${v.name} (${formatBdt(v.balance)})</option>`
      ).join("");
      const staffOpts = (ERP_DB.staffMembers || []).map(st =>
        `<option value="${st.name}" ${st.name === (sup.dueByStaff || 'Farhan Islam') ? 'selected' : ''}>${st.name} (${st.role.split(' ')[0]})</option>`
      ).join("");

      openModal({
        title: `Supplier Payment — ${sup.name}`,
        message: `Current Paid: ${formatBdt(sup.paidAmount || 0)} • Current Payable Due: ${formatBdt(sup.payable || 0)}. Enter payment details and responsible staff below:`,
        confirmText: "Confirm & Record Payment",
        customHtml: `
          <div style="display:flex;flex-direction:column;gap:10px;">
            <div>
              <label style="font-size:11px;font-weight:700;color:var(--text-muted);display:block;margin-bottom:4px;">Payment Type</label>
              <select id="modalSupPayType" class="info-edit-input">
                <option value="Due Payment" ${sup.payable > 0 ? 'selected' : ''}>Due Payment (Settle Payable Balance)</option>
                <option value="Advance Payment" ${sup.payable <= 0 ? 'selected' : ''}>Advance Payment (New PO Advance)</option>
              </select>
            </div>
            <div>
              <label style="font-size:11px;font-weight:700;color:var(--text-muted);display:block;margin-bottom:4px;">Payment Amount (BDT)</label>
              <input type="number" id="modalSupPayAmt" class="info-edit-input mono" value="${defaultAmt}" min="1" />
            </div>
            <div>
              <label style="font-size:11px;font-weight:700;color:var(--text-muted);display:flex;justify-content:space-between;margin-bottom:4px;">
                <span>Paid Via Account (Bank / bKash / Wallet)</span>
              </label>
              <select id="modalSupPayAcc" class="info-edit-input">${accOpts}</select>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
              <div>
                <label style="font-size:11px;font-weight:700;color:var(--text-muted);display:block;margin-bottom:4px;">Responsible (Paid Advance)</label>
                <select id="modalSupPayAdvStaff" class="info-edit-input">${staffOpts}</select>
              </div>
              <div>
                <label style="font-size:11px;font-weight:700;color:var(--text-muted);display:block;margin-bottom:4px;">Responsible (Paid Due)</label>
                <select id="modalSupPayDueStaff" class="info-edit-input">${staffOpts}</select>
              </div>
            </div>
            <div>
              <label style="font-size:11px;font-weight:700;color:var(--text-muted);display:block;margin-bottom:4px;">Payment Details / Trx Reference</label>
              <input type="text" id="modalSupPayNote" class="info-edit-input" value="Supplier balance settlement from Uttara Hub" />
            </div>
          </div>
        `,
        onConfirm: () => {
          const pType = document.getElementById("modalSupPayType")?.value || "Due Payment";
          const payAmt = Math.max(1, Number(document.getElementById("modalSupPayAmt")?.value) || defaultAmt);
          const accKey = document.getElementById("modalSupPayAcc")?.value || "acc_bank";
          const advStaff = document.getElementById("modalSupPayAdvStaff")?.value || sup.advanceByStaff || "Nadia Sultana";
          const dueStaff = document.getElementById("modalSupPayDueStaff")?.value || sup.dueByStaff || "Farhan Islam";
          const note = document.getElementById("modalSupPayNote")?.value?.trim() || "Supplier payment recorded";

          if (pType === "Due Payment") {
            sup.payable = Math.max(0, Number(sup.payable || 0) - payAmt);
            sup.paidAmount = Number(sup.paidAmount || 0) + payAmt;
            sup.dueByStaff = dueStaff;
            sup.dueAccount = accKey;
          } else {
            sup.paidAmount = Number(sup.paidAmount || 0) + payAmt;
            sup.advanceByStaff = advStaff;
            sup.advanceAccount = accKey;
          }
          if (ERP_DB.accounts[accKey]) {
            ERP_DB.accounts[accKey].balance = Math.max(0, Number(ERP_DB.accounts[accKey].balance || 0) - payAmt);
          }
          if (!Array.isArray(ERP_DB.paymentsLog)) ERP_DB.paymentsLog = [];
          ERP_DB.paymentsLog.unshift({
            id: "PAY-" + (ERP_DB.paymentsLog.length + 510),
            date: nowTimestamp().slice(0, 10),
            supplierId: sup.id,
            supplierName: sup.name,
            poId: "BALANCE-SETTLE",
            paymentType: pType,
            amount: payAmt,
            accountKey: accKey,
            accountName: ERP_DB.accounts[accKey]?.name || accKey,
            advanceByStaff: advStaff,
            dueByStaff: dueStaff,
            details: note
          });
          saveErpDatabase();
          renderAllErpModules();
          showToast(`Recorded ${pType} of ${formatBdt(payAmt)} to ${sup.name} (Adv: ${advStaff} • Due: ${dueStaff})`);
        }
      });
    }

    function logSupplierDefectClaim(supId) {
      const sup = ERP_DB.suppliers.find(s => s.id === supId);
      if (!sup) return;
      sup.defectClaims = `Logged claim on ${nowTimestamp().slice(0, 10)}: 2 defective units flagged for free replacement on next PO`;
      saveErpDatabase();
      renderAllErpModules();
      showToast(`Recorded defect replacement claim against ${sup.name}`);
    }

    function notifyPreorderCustomer(preId) {
      const pr = (ERP_DB.preorders || []).find(x => x.id === preId);
      if (!pr) return;
      pr.status = "Arrival SMS Sent • Ready for Dispatch";
      saveErpDatabase();
      renderAllErpModules();
      showToast(`Sent arrival update to ${pr.customerName} (${pr.customerPhone})`);
    }

    function openReceiveShipmentModal(shipmentId) {
      const sh = ERP_DB.shipments.find(x => x.id === shipmentId);
      if (!sh) return;
      document.getElementById("grnShipmentId").value = sh.id;
      document.getElementById("grnReceivedQty").value = sh.orderedQty;
      document.getElementById("grnDamagedQty").value = 0;
      document.getElementById("grnWarehouseBin").value = sh.warehouse || "Uttara Sec-12 • Rack A4";
      document.getElementById("grnShipmentSummaryBox").innerHTML = `
        <div><strong>PO ID:</strong> <span class="mono">${sh.id}</span></div>
        <div><strong>Product:</strong> ${sh.productTitle} (<span class="mono">${sh.sku}</span>)</div>
        <div><strong>Ordered Quantity:</strong> <span class="mono">${sh.orderedQty} units</span></div>
        <div><strong>Purchase Cost:</strong> <span class="mono">${formatBdt(sh.costPrice)}</span> • <strong>Landed Cost:</strong> <span class="mono">${formatBdt(sh.landedCost || sh.costPrice)}</span></div>
      `;
      window.__suspendedErpModalIds = [];
      document.querySelectorAll(".erp-modal-backdrop.open, .modal-backdrop.open").forEach(m => m.classList.remove("open"));
      document.getElementById("receiveShipmentModal").classList.add("open");
    }

    function closeReceiveShipmentModal() {
      document.getElementById("receiveShipmentModal").classList.remove("open");
    }

    function updateSpMarginPreview() {
      const cost = Number(document.getElementById("spCostPrice")?.value) || 0;
      const landed = Number(document.getElementById("spWholesalePrice")?.value) || 0;
      const ret = Number(document.getElementById("spRetailPrice")?.value) || 0;
      const qty = Number(document.getElementById("spOrderedQty")?.value) || 0;
      const rPct = ret > 0 ? Math.round(((ret - landed) / ret) * 100) : 0;
      const rHint = document.getElementById("spRetailMarginHint");
      if (rHint) rHint.textContent = `Margin vs Landed: +${rPct}% (Buy: ৳${cost})`;

      const totalPoEl = document.getElementById("spTotalPoValue");
      const advEl = document.getElementById("spAdvancePaid");
      const dueEl = document.getElementById("spPayableDue");
      if (totalPoEl) {
        const totalPo = qty * landed;
        totalPoEl.value = totalPo;
        if (advEl && dueEl) {
          const adv = Number(advEl.value) || 0;
          dueEl.value = Math.max(0, totalPo - adv);
        }
      }
    }

    function updateSpPoDueFromAdvance() {
      const totalPo = Number(document.getElementById("spTotalPoValue")?.value) || 0;
      const adv = Number(document.getElementById("spAdvancePaid")?.value) || 0;
      const dueEl = document.getElementById("spPayableDue");
      if (dueEl) {
        dueEl.value = Math.max(0, totalPo - adv);
      }
    }

    // ------------------------------------------------------------------------
    // 6. PAYMENTS, EXPENSES, COD RECONCILIATION & PROFITABILITY
    // ------------------------------------------------------------------------
    function renderFinanceModule(m) {
      const metrics = m || computeErpMetrics();
      const kpiEl = document.getElementById("financeDistinctionKpis");
      if (kpiEl) {
        kpiEl.innerHTML = `
          <div class="kpi-card">
            <div class="kpi-label"><span>1. Earned Sales Revenue</span><span>📈</span></div>
            <div class="kpi-value mono">${formatBdt(metrics.earnedDeliveredRevenue)}</div>
            <div class="kpi-sub"><span>Delivered Orders Only</span><span class="badge badge-green">Earned</span></div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label"><span>2. Actual Cash Collected</span><span>💵</span></div>
            <div class="kpi-value mono">${formatBdt(metrics.cashCollectedFromOrders)}</div>
            <div class="kpi-sub"><span>Bank + MFS + Settled COD</span><span class="badge badge-blue">In Hand</span></div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label"><span>3. Pending Courier COD</span><span>🚚</span></div>
            <div class="kpi-value mono">${formatBdt(metrics.pendingCodReceivable)}</div>
            <div class="kpi-sub"><span>${metrics.pendingCodCount} COD Orders Unsettled</span><span class="badge badge-orange">Receivable</span></div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label"><span>4. Landed COGS + Opex</span><span>🧾</span></div>
            <div class="kpi-value mono">${formatBdt(metrics.deliveredLandedCogs + metrics.operatingExpenses)}</div>
            <div class="kpi-sub"><span>COGS: ${formatBdt(metrics.deliveredLandedCogs)} • Opex: ${formatBdt(metrics.operatingExpenses)}</span><span class="badge badge-danger">Outflow</span></div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label"><span>5. Net Operating Profit</span><span>💎</span></div>
            <div class="kpi-value mono">${formatBdt(metrics.netOperatingProfit)}</div>
            <div class="kpi-sub"><span>Avg Contrib: ${formatBdt(metrics.avgContributionPerOrder)}/ord</span><span class="badge badge-green">Bottom Line</span></div>
          </div>
        `;
      }

      // Courier COD Reconciliation Table
      const codBody = document.getElementById("codReconciliationTableBody");
      if (codBody) {
        codBody.innerHTML = ERP_DB.orders.map(o => {
          const courierCharge = Number(o.courierActualCost || 60);
          const codFee = o.paymentMethod.includes("COD") ? Number(o.codFee || Math.round(o.totalRevenue * 0.01)) : 0;
          const netReceivable = Math.max(0, Number(o.totalRevenue || 0) - courierCharge - codFee);
          return `
            <tr>
              <td>
                <div class="mono" style="font-weight:700;">${o.id}</div>
                <div style="font-size:10.5px;color:var(--text-muted);">${o.date}</div>
              </td>
              <td>${o.customerName}</td>
              <td>${o.courier || "Steadfast Courier"}</td>
              <td>${o.paymentMethod}</td>
              <td class="mono" style="font-weight:700;">${formatBdt(o.totalRevenue)}</td>
              <td class="mono">Courier: ${formatBdt(courierCharge)} + COD Fee: ${formatBdt(codFee)}</td>
              <td class="mono" style="font-weight:700;color:var(--status-green);">${formatBdt(netReceivable)}</td>
              <td>
                <span class="badge ${o.paymentStatus === 'Paid' ? 'badge-green' : (o.paymentStatus === 'Collected' ? 'badge-blue' : 'badge-orange')}">
                  ${o.paymentStatus}
                </span>
              </td>
              <td>
                ${o.paymentStatus !== "Paid" && o.status !== "Cancelled" ? `
                  <button type="button" class="btn btn-sm btn-success" onclick="reconcileSingleOrderCod('${o.id}')">Settle to Bank</button>
                ` : `<span style="font-size:11px;color:var(--text-muted);">Reconciled ✓</span>`}
              </td>
            </tr>
          `;
        }).join("");
      }

      // Order-level contribution table
      const contribBody = document.getElementById("orderContributionTableBody");
      if (contribBody) {
        contribBody.innerHTML = ERP_DB.orders.map(o => {
          const netItemRev = Number(o.subtotal || 0) - Number(o.discount || 0);
          const deliv = Number(o.deliveryFee || 0);
          const cogs = Number(o.totalCogs || 0);
          const packCourier = Number(o.packagingCost || 35) + Number(o.courierActualCost || 60) + Number(o.codFee || 0);
          const grossP = (netItemRev + deliv) - cogs;
          const netContrib = grossP - packCourier;
          return `
            <tr>
              <td class="mono" style="font-weight:700;">${o.id} (${o.customerName})</td>
              <td><span class="badge ${o.status === 'Delivered' ? 'badge-green' : 'badge-orange'}">${o.status}</span></td>
              <td class="mono">${formatBdt(netItemRev)}</td>
              <td class="mono">+ ${formatBdt(deliv)}</td>
              <td class="mono">- ${formatBdt(cogs)}</td>
              <td class="mono">- ${formatBdt(packCourier)}</td>
              <td class="mono" style="font-weight:700;">${formatBdt(grossP)}</td>
              <td class="mono" style="font-weight:800;color:${netContrib >= 0 ? 'var(--status-green)' : 'var(--danger)'};">${formatBdt(netContrib)}</td>
            </tr>
          `;
        }).join("");
      }

      // Expenses Table
      const expBody = document.getElementById("expensesTableBody");
      if (expBody) {
        expBody.innerHTML = (ERP_DB.expenses || []).map(ex => `
          <tr>
            <td>
              <div class="mono" style="font-weight:700;">${ex.id}</div>
              <div style="font-size:10.5px;color:var(--text-muted);">${ex.date}</div>
            </td>
            <td>
              <div style="font-weight:700;">${ex.title}</div>
              <div style="font-size:11px;color:var(--text-muted);margin-top:2px;">${ex.details || "—"}</div>
            </td>
            <td><span class="badge badge-orange">${ex.category}</span></td>
            <td>
              <div style="font-weight:700;font-size:12px;">👤 ${ex.responsibleStaffName || "Nadia Sultana"}</div>
              <div style="font-size:10.5px;color:var(--text-muted);">${ex.responsibleStaffRole || "Operations"}</div>
            </td>
            <td><span class="badge badge-blue">${ERP_DB.accounts[ex.account]?.name || ex.account}</span></td>
            <td class="mono" style="font-weight:700;color:var(--danger);">${formatBdt(ex.amount)}</td>
          </tr>
        `).join("");
      }
    }

    function reconcileSingleOrderCod(orderId) {
      const ord = ERP_DB.orders.find(o => o.id === orderId);
      if (!ord) return;
      ord.paymentStatus = "Paid";
      ord.codSettled = true;
      if (ord.status !== "Delivered") ord.status = "Delivered";
      ERP_DB.accounts.acc_bank.balance += Math.max(0, Number(ord.totalRevenue || 0) - Number(ord.codFee || 0));
      saveErpDatabase();
      renderAllErpModules();
      showToast(`Order ${orderId} COD settled into City Bank Corporate A/C!`);
    }

    function settleAllCollectedCod() {
      let count = 0;
      ERP_DB.orders.forEach(o => {
        if (o.paymentStatus === "Collected" || (o.status === "Delivered" && o.paymentStatus === "Pending")) {
          o.paymentStatus = "Paid";
          o.codSettled = true;
          count++;
        }
      });
      saveErpDatabase();
      renderAllErpModules();
      showToast(count > 0 ? `Reconciled & settled ${count} COD order(s) to Bank!` : "All delivered COD orders are already settled.");
    }

    // ------------------------------------------------------------------------
    // 7. PROMOTIONS, MULTI-CHANNEL SYNC & STOREFRONT CMS
    // ------------------------------------------------------------------------
    function renderCmsModule() {
      // Coupons & Campaigns Table
      const cpnBody = document.getElementById("couponsCampaignsTableBody");
      if (cpnBody) {
        cpnBody.innerHTML = (ERP_DB.coupons || []).map((c, idx) => `
          <tr>
            <td class="mono" style="font-weight:800;color:var(--accent-rose-deep);">${c.code}</td>
            <td class="mono">${c.discountPct}% OFF (Min: ${formatBdt(c.minOrder)})</td>
            <td class="mono" style="font-size:11px;">${c.startDate} → ${c.endDate}</td>
            <td class="mono">${c.usedCount || 0} / ${c.usageLimit}</td>
            <td><span class="badge badge-blue">${c.source}</span></td>
            <td class="mono">
              <strong>${c.attributedOrders || 0} orders</strong> (${formatBdt(c.attributedRevenue || 0)})
            </td>
            <td><span class="badge ${c.active ? 'badge-green' : 'badge-orange'}">${c.active ? 'Active' : 'Disabled'}</span></td>
            <td>
              <button type="button" class="btn btn-sm ${c.active ? 'btn-danger' : 'btn-success'}" onclick="toggleCouponStatus(${idx})">
                ${c.active ? 'Disable' : 'Enable'}
              </button>
            </td>
          </tr>
        `).join("");
      }

      // Multi-Channel Sync Cards
      const mcEl = document.getElementById("multiChannelSyncCards");
      if (mcEl) {
        const channels = [
          { name: "Facebook Page & Shop Catalog", status: "Connected & Synced", skus: ERP_DB.products.filter(p => p.isPublished).length, orders: ERP_DB.orders.filter(o => String(o.channel).includes("Facebook")).length },
          { name: "Instagram Shopping & DM Orders", status: "Connected & Synced", skus: ERP_DB.products.filter(p => p.isPublished).length, orders: ERP_DB.orders.filter(o => String(o.channel).includes("Instagram")).length },
          { name: "WhatsApp Business Concierge Catalog", status: "Connected & Synced", skus: ERP_DB.products.filter(p => p.isPublished).length, orders: ERP_DB.orders.filter(o => String(o.channel).includes("WhatsApp")).length }
        ];
        mcEl.innerHTML = `<div style="display:flex;flex-direction:column;gap:10px;">` + channels.map(ch => `
          <div style="padding:12px 14px;border-radius:10px;background:var(--bg-card);border:1px solid var(--border-color);display:flex;justify-content:space-between;align-items:center;">
            <div>
              <div style="font-weight:700;font-size:12.5px;">${ch.name}</div>
              <div style="font-size:11px;color:var(--text-muted);">${ch.skus} Active SKUs Synced • ${ch.orders} Attributed Orders</div>
            </div>
            <span class="badge badge-green">${ch.status}</span>
          </div>
        `).join("") + `</div>`;
      }

      // Automated Notifications Log
      const notifEl = document.getElementById("emsNotificationsList");
      if (notifEl) {
        notifEl.innerHTML = (ERP_DB.emsNotifications || []).map(n => `
          <div style="padding:10px 12px;border-radius:9px;background:var(--bg-card);border:1px solid var(--border-color);font-size:12px;">
            <div style="display:flex;justify-content:space-between;margin-bottom:3px;">
              <span class="badge badge-rose">${n.type}</span>
              <span class="mono" style="font-size:10.5px;color:var(--text-muted);">${n.time}</span>
            </div>
            <div style="color:var(--text-main);">${n.msg}</div>
          </div>
        `).join("");
      }

      // Hero Sliders list
      const slidersWrap = document.getElementById("cmsSlidersListContainer");
      if (slidersWrap) {
        slidersWrap.innerHTML = ERP_DB.cms.heroSliders.map((s, idx) => `
          <div style="display:flex;align-items:center;justify-content:space-between;gap:14px;padding:12px;border-radius:12px;background:var(--bg-card);border:1px solid var(--border-color);">
            <div style="display:flex;align-items:center;gap:12px;">
              <img src="${s.image}" alt="${s.title}" style="width:86px;height:56px;object-fit:cover;border-radius:8px;border:1px solid var(--border-color);" />
              <div>
                <div style="font-size:10.5px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--accent-rose-deep);">Slide #${idx + 1} • ${s.eyebrow}</div>
                <div style="font-weight:700;font-size:13.5px;">${s.title}</div>
                <div style="font-size:11.5px;color:var(--text-muted);">CTA: "${s.cta}" → ${s.category}</div>
              </div>
            </div>
            <div style="display:flex;gap:6px;">
              <button type="button" class="btn btn-sm btn-secondary" onclick="loadSlideIntoEditor('${s.id}')">Edit</button>
              <button type="button" class="btn btn-sm btn-danger" onclick="deleteHeroSlide('${s.id}')">Delete</button>
            </div>
          </div>
        `).join("");
      }



      const setVal = (id, v) => { const el = document.getElementById(id); if (el) el.value = v || ""; };
      setVal("cmsTopOfferText", ERP_DB.cms.topOfferText);
      setVal("cmsTopPhone", ERP_DB.cms.topPhone);
      setVal("cmsSecTrendTitle", ERP_DB.cms.secTrendTitle);
      setVal("cmsSecNewTitle", ERP_DB.cms.secNewTitle);
      setVal("cmsSecJfyTitle", ERP_DB.cms.secJfyTitle);
      setVal("cmsNewsletterTitle", ERP_DB.cms.newsletterTitle);
      setVal("cmsNewsletterSub", ERP_DB.cms.newsletterSub);
      setVal("cmsFooterBio", ERP_DB.cms.footerBio);
      setVal("cmsFooterAddress", ERP_DB.cms.footerAddress);
      setVal("cmsFooterEmail", ERP_DB.cms.footerEmail);
      setVal("cmsFooterPhone", ERP_DB.cms.footerPhone);
      setVal("cmsFooterCopyright", ERP_DB.cms.footerCopyright);
      setVal("cmsSocialFb", ERP_DB.cms.socials?.fb);
      setVal("cmsSocialInsta", ERP_DB.cms.socials?.insta);
      setVal("cmsSocialTiktok", ERP_DB.cms.socials?.tiktok);
      setVal("cmsSocialThreads", ERP_DB.cms.socials?.threads);

      renderFooterSectionsCmsManager();
    }

    function toggleCouponStatus(idx) {
      const c = ERP_DB.coupons[idx];
      if (!c) return;
      c.active = !c.active;
      saveErpDatabase();
      renderAllErpModules();
      showToast(`Coupon ${c.code} is now ${c.active ? 'Active on Storefront' : 'Disabled'}`);
    }

    function triggerMultiChannelSync() {
      ERP_DB.emsNotifications.unshift({
        id: "EN-" + Date.now(),
        time: "Just now",
        type: "Multi-Channel Sync",
        msg: `Synced ${ERP_DB.products.filter(p => p.isPublished).length} active SKUs and stock balances with Facebook Shop, Instagram & WhatsApp Catalog.`
      });
      saveErpDatabase();
      renderAllErpModules();
      showToast("Synced Catalogue & Stock with Facebook, Instagram & WhatsApp!");
    }

    function loadSlideIntoEditor(slideId) {
      const s = ERP_DB.cms.heroSliders.find(x => x.id === slideId);
      if (!s) return;
      document.getElementById("cmsSlideEditId").value = s.id;
      document.getElementById("cmsSlideEyebrow").value = s.eyebrow;
      document.getElementById("cmsSlideTitle").value = s.title;
      document.getElementById("cmsSlideDesc").value = s.desc;
      document.getElementById("cmsSlideCta").value = s.cta;
      document.getElementById("cmsSlideCategory").value = s.category;
      showToast(`Loaded "${s.title}" into Hero Slider editor`);
    }

    function deleteHeroSlide(slideId) {
      if (ERP_DB.cms.heroSliders.length <= 1) {
        showToast("At least 1 active Hero Slider is required");
        return;
      }
      ERP_DB.cms.heroSliders = ERP_DB.cms.heroSliders.filter(x => x.id !== slideId);
      saveErpDatabase();
      renderAllErpModules();
      showToast("Hero Slider removed");
    }


    // ========================================================================
    // REQ 10 ENHANCEMENTS: TOP STICKY TABLE SCROLLBARS, MULTI-IMAGE & VIDEO,
    // CATEGORY IMAGE UPLOAD, BRAND LOGO CMS & HORIZONTAL CRM EDITOR
    // ========================================================================
    window.__uploadedCategoryImageData = "";
    window.__editProdGalleryList = [];
    window.__uploadedLogoLight = "";
    window.__uploadedLogoDark = "";

    function updateStickyTableTopOffset() {
      let stickyBottom = 0;
      const modeBar = document.getElementById("platformModeBar");
      if (modeBar && modeBar.offsetHeight > 0) {
        const mbH = Math.ceil(modeBar.getBoundingClientRect().height || modeBar.offsetHeight || 48);
        document.documentElement.style.setProperty("--mode-bar-height", mbH + "px");
        const r1 = modeBar.getBoundingClientRect();
        if (r1.bottom > 0 && r1.top <= 4) {
          stickyBottom = Math.max(stickyBottom, Math.round(r1.bottom));
        }
      }
      const erpTopbar = document.querySelector("#erpAppShell .erp-topbar");
      if (erpTopbar && erpTopbar.offsetHeight > 0) {
        const r2 = erpTopbar.getBoundingClientRect();
        if (r2.bottom > 0 && r2.top <= stickyBottom + 6) {
          stickyBottom = Math.max(stickyBottom, Math.round(r2.bottom));
        }
      }
      document.documentElement.style.setProperty("--sticky-table-top", stickyBottom + "px");
    }

    function syncSingleTableFrozenThead(shell) {
      if (!shell) return;
      const wrap = shell.querySelector(".table-wrap");
      const frozenThead = shell.querySelector(".table-frozen-thead");
      if (!wrap || !frozenThead) return;

      const realTable = wrap.querySelector("table.erp-table");
      const origThead = realTable ? realTable.querySelector("thead") : null;
      if (!realTable || !origThead) {
        frozenThead.style.display = "none";
        wrap.style.marginTop = "0px";
        return;
      }

      const theadRect = origThead.getBoundingClientRect();
      const theadH = Math.round(theadRect.height || origThead.offsetHeight || 0);
      const tableW = Math.round(realTable.offsetWidth || realTable.scrollWidth || 0);

      if (theadH <= 0 || tableW <= 0) {
        frozenThead.style.display = "none";
        origThead.style.visibility = "";
        wrap.style.marginTop = "0px";
        return;
      }

      frozenThead.style.display = "block";
      let frozenTable = frozenThead.querySelector("table.erp-frozen-head-table");
      if (!frozenTable) {
        frozenTable = document.createElement("table");
        frozenTable.className = "erp-table erp-frozen-head-table";
        frozenThead.appendChild(frozenTable);
      }

      const origInner = origThead.innerHTML;
      if (frozenTable.__lastTheadMarkup !== origInner) {
        frozenTable.innerHTML = `<thead style="visibility:visible !important;opacity:1 !important;">${origInner}</thead>`;
        frozenTable.__lastTheadMarkup = origInner;
      }
      const clonedTheadEl = frozenTable.querySelector("thead");
      if (clonedTheadEl) {
        clonedTheadEl.style.visibility = "visible";
        clonedTheadEl.style.opacity = "1";
        clonedTheadEl.style.pointerEvents = "auto";
      }

      frozenTable.style.width = tableW + "px";
      frozenTable.style.minWidth = tableW + "px";

      const origThs = origThead.querySelectorAll("th");
      const cloneThs = frozenTable.querySelectorAll("th");
      if (origThs.length === cloneThs.length) {
        origThs.forEach((th, idx) => {
          const w = th.getBoundingClientRect().width;
          if (w > 0) {
            const px = w.toFixed(2) + "px";
            cloneThs[idx].style.width = px;
            cloneThs[idx].style.minWidth = px;
            cloneThs[idx].style.maxWidth = px;
          }
        });
      }

      origThead.style.visibility = "hidden";
      origThead.style.pointerEvents = "none";
      wrap.style.marginTop = (-theadH) + "px";
      frozenThead.scrollLeft = wrap.scrollLeft;
    }

    function updateSingleTableTopScrollbar(shell) {
      if (!shell) return;
      const wrap = shell.querySelector(".table-wrap");
      const topBar = shell.querySelector(".table-top-scroll");
      const track = shell.querySelector(".top-scroll-track");
      const thumb = shell.querySelector(".top-scroll-thumb");
      const frozenThead = shell.querySelector(".table-frozen-thead");
      if (!wrap || !track || !thumb) return;

      syncSingleTableFrozenThead(shell);
      if (frozenThead) {
        frozenThead.scrollLeft = wrap.scrollLeft;
      }

      const scrollW = Math.max(wrap.scrollWidth || 1, 1);
      const clientW = Math.max(wrap.clientWidth || 1, 1);
      const maxScroll = Math.max(0, scrollW - clientW);

      if (maxScroll <= 2) {
        if (topBar) topBar.style.display = "none";
        if (frozenThead) {
          frozenThead.style.borderTop = "1px solid var(--border-strong)";
          frozenThead.style.borderRadius = "10px 10px 0 0";
        }
        thumb.style.width = "100%";
        thumb.style.left = "0px";
        syncSingleTableFrozenThead(shell);
        return;
      }

      if (topBar) topBar.style.display = "flex";
      if (frozenThead) {
        frozenThead.style.borderTop = "";
        frozenThead.style.borderRadius = "";
      }
      syncSingleTableFrozenThead(shell);

      const trackW = Math.max(track.clientWidth || 200, 80);
      const ratio = Math.min(0.82, Math.max(0.16, clientW / scrollW));
      const thumbW = Math.max(48, Math.round(trackW * ratio));
      const maxThumbLeft = Math.max(0, trackW - thumbW);
      const progress = Math.min(1, Math.max(0, wrap.scrollLeft / maxScroll));
      const thumbLeft = Math.round(progress * maxThumbLeft);

      thumb.style.width = thumbW + "px";
      thumb.style.left = thumbLeft + "px";
    }

    function syncAllTopTableScrollbars() {
      updateStickyTableTopOffset();
      const applySync = () => {
        const wraps = document.querySelectorAll("#erpAppShell .table-wrap, .erp-modal-dialog .table-wrap");
        wraps.forEach(wrap => {
          let shell = wrap.parentElement;
          if (!shell || !shell.classList.contains("table-scroll-shell")) {
            shell = document.createElement("div");
            shell.className = "table-scroll-shell";
            wrap.parentNode.insertBefore(shell, wrap);

            const frozenHeader = document.createElement("div");
            frozenHeader.className = "table-frozen-header";

            const topBar = document.createElement("div");
            topBar.className = "table-top-scroll";
            topBar.setAttribute("title", "Drag or click to scroll table left and right");
            topBar.innerHTML = `
              <button type="button" class="top-scroll-arrow" data-scroll-dir="-1" aria-label="Scroll table left" title="Scroll Left">&#9664;</button>
              <div class="top-scroll-track">
                <div class="top-scroll-thumb"><span class="top-scroll-grip"></span></div>
              </div>
              <button type="button" class="top-scroll-arrow" data-scroll-dir="1" aria-label="Scroll table right" title="Scroll Right">&#9654;</button>
            `;

            const frozenThead = document.createElement("div");
            frozenThead.className = "table-frozen-thead";
            frozenThead.setAttribute("aria-hidden", "true");

            frozenHeader.appendChild(topBar);
            frozenHeader.appendChild(frozenThead);
            shell.appendChild(frozenHeader);
            shell.appendChild(wrap);

            const track = topBar.querySelector(".top-scroll-track");
            const thumb = topBar.querySelector(".top-scroll-thumb");
            const arrows = topBar.querySelectorAll(".top-scroll-arrow");

            // Sync thumb and frozen 1st-row header when table-wrap scrolls
            wrap.addEventListener("scroll", () => {
              frozenThead.scrollLeft = wrap.scrollLeft;
              updateSingleTableTopScrollbar(shell);
            }, { passive: true });

            // Observe table size/content changes so frozen 1st row & thumb stay in sync
            if (typeof ResizeObserver !== "undefined") {
              const ro = new ResizeObserver(() => {
                updateSingleTableTopScrollbar(shell);
              });
              ro.observe(wrap);
              const tbl = wrap.querySelector("table.erp-table");
              if (tbl) ro.observe(tbl);
            }

            const tbl = wrap.querySelector("table.erp-table");
            if (tbl && typeof MutationObserver !== "undefined") {
              const mo = new MutationObserver(() => {
                updateSingleTableTopScrollbar(shell);
              });
              mo.observe(tbl, { childList: true, subtree: true });
            }

            // Left / Right arrow buttons (click & press-and-hold)
            arrows.forEach(btn => {
              const dir = Number(btn.getAttribute("data-scroll-dir")) || 1;
              let holdTimer = null;
              const stepScroll = () => {
                wrap.scrollLeft += dir * 180;
                frozenThead.scrollLeft = wrap.scrollLeft;
                updateSingleTableTopScrollbar(shell);
              };
              btn.addEventListener("click", (e) => {
                e.preventDefault();
                stepScroll();
              });
              btn.addEventListener("pointerdown", () => {
                holdTimer = setInterval(() => {
                  wrap.scrollLeft += dir * 60;
                  frozenThead.scrollLeft = wrap.scrollLeft;
                  updateSingleTableTopScrollbar(shell);
                }, 50);
              });
              const clearHold = () => {
                if (holdTimer) {
                  clearInterval(holdTimer);
                  holdTimer = null;
                }
              };
              btn.addEventListener("pointerup", clearHold);
              btn.addEventListener("pointerleave", clearHold);
              btn.addEventListener("pointercancel", clearHold);
            });

            // Wheel scrolling over the frozen header scrolls the table horizontally
            frozenHeader.addEventListener("wheel", (e) => {
              const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
              if (delta !== 0) {
                e.preventDefault();
                wrap.scrollLeft += delta;
                frozenThead.scrollLeft = wrap.scrollLeft;
                updateSingleTableTopScrollbar(shell);
              }
            }, { passive: false });

            // Dragging the thumb or clicking/scrubbing the track
            let isDragging = false;
            let dragStartX = 0;
            let startScrollLeft = 0;

            const startDrag = (clientX, jumpToClick) => {
              const trackRect = track.getBoundingClientRect();
              const thumbRect = thumb.getBoundingClientRect();
              const maxScroll = Math.max(1, wrap.scrollWidth - wrap.clientWidth);
              const maxThumbLeft = Math.max(1, trackRect.width - thumbRect.width);

              if (jumpToClick) {
                const clickOffset = clientX - trackRect.left - thumbRect.width / 2;
                const clampedThumbLeft = Math.min(maxThumbLeft, Math.max(0, clickOffset));
                wrap.scrollLeft = (clampedThumbLeft / maxThumbLeft) * maxScroll;
                frozenThead.scrollLeft = wrap.scrollLeft;
                updateSingleTableTopScrollbar(shell);
              }

              isDragging = true;
              dragStartX = clientX;
              startScrollLeft = wrap.scrollLeft;
              thumb.classList.add("dragging");
            };

            thumb.addEventListener("pointerdown", (e) => {
              e.preventDefault();
              e.stopPropagation();
              if (thumb.setPointerCapture) {
                try { thumb.setPointerCapture(e.pointerId); } catch (_) {}
              }
              startDrag(e.clientX, false);
            });

            track.addEventListener("pointerdown", (e) => {
              if (e.target === thumb || thumb.contains(e.target)) return;
              e.preventDefault();
              if (track.setPointerCapture) {
                try { track.setPointerCapture(e.pointerId); } catch (_) {}
              }
              startDrag(e.clientX, true);
            });

            const onPointerMove = (e) => {
              if (!isDragging) return;
              const trackRect = track.getBoundingClientRect();
              const thumbRect = thumb.getBoundingClientRect();
              const maxScroll = Math.max(1, wrap.scrollWidth - wrap.clientWidth);
              const maxThumbLeft = Math.max(1, trackRect.width - thumbRect.width);
              const deltaX = e.clientX - dragStartX;
              const scrollDelta = (deltaX / maxThumbLeft) * maxScroll;
              wrap.scrollLeft = startScrollLeft + scrollDelta;
              frozenThead.scrollLeft = wrap.scrollLeft;
              updateSingleTableTopScrollbar(shell);
            };

            const onPointerUp = () => {
              if (!isDragging) return;
              isDragging = false;
              thumb.classList.remove("dragging");
            };

            window.addEventListener("pointermove", onPointerMove);
            window.addEventListener("pointerup", onPointerUp);
            window.addEventListener("pointercancel", onPointerUp);
          }

          updateSingleTableTopScrollbar(shell);
        });
      };

      applySync();
      requestAnimationFrame(applySync);
      setTimeout(applySync, 60);
    }

    window.addEventListener("resize", () => {
      syncAllTopTableScrollbars();
    });

    window.addEventListener("scroll", () => {
      updateStickyTableTopOffset();
    }, { passive: true });

    // Close ERP modals on backdrop click or Escape key
    document.querySelectorAll(".erp-modal-backdrop").forEach(backdrop => {
      backdrop.addEventListener("click", (e) => {
        if (e.target === backdrop) {
          backdrop.classList.remove("open");
        }
      });
    });

    function previewCategoryImageSelection() {
      const presetEl = document.getElementById("cmsCatImgPreset");
      const previewImg = document.getElementById("cmsCatImgLivePreview");
      const labelEl = document.getElementById("cmsCatImgPreviewLabel");
      if (!previewImg) return;
      if (window.__uploadedCategoryImageData) {
        previewImg.src = window.__uploadedCategoryImageData;
        if (labelEl) labelEl.textContent = "Custom Uploaded Category Image Ready";
      } else {
        const key = presetEl ? presetEl.value : "cream_bag";
        previewImg.src = IMG[key] || IMG.giftbox;
        if (labelEl) labelEl.textContent = `Preset Image: ${key.replace("_", " ").toUpperCase()}`;
      }
    }

    function editCategoryInForm(idx) {
      const c = ERP_DB.cms.categories[idx];
      if (!c) return;
      const nameEl = document.getElementById("cmsCatName");
      const subsEl = document.getElementById("cmsCatSubs");
      const presetEl = document.getElementById("cmsCatImgPreset");
      if (nameEl) nameEl.value = c.name;
      if (subsEl) subsEl.value = (c.subs || []).join(", ");
      if (presetEl && c.imgKey) presetEl.value = c.imgKey;
      window.__uploadedCategoryImageData = c.customImage || "";
      previewCategoryImageSelection();
      nameEl?.focus();
      showToast(`Loaded "${c.name}" into Category & Image editor`);
    }

    function renderEditProdGalleryPreview() {
      const wrap = document.getElementById("editProdGalleryPreview");
      const badge = document.getElementById("editProdMediaCountBadge");
      if (!wrap) return;
      const list = window.__editProdGalleryList || [];
      const vidCap = document.getElementById("editProdVideoCaption")?.value || "Video Ready";
      if (badge) badge.textContent = `📸 ${list.length} Image${list.length === 1 ? "" : "s"} • 🎬 ${vidCap.slice(0, 22)}`;

      wrap.innerHTML = list.map((src, idx) => `
        <div style="position:relative;width:68px;height:68px;border-radius:10px;border:2px solid ${idx === 0 ? 'var(--accent-rose-deep)' : 'var(--border-color)'};overflow:hidden;background:var(--bg-elevated);cursor:pointer;" onclick="setPrimaryEditGalleryImage(${idx})" title="${idx === 0 ? 'Primary Cover Image' : 'Click to make Primary Cover'}">
          <img src="${src}" alt="Gallery ${idx + 1}" style="width:100%;height:100%;object-fit:cover;" />
          <span style="position:absolute;bottom:2px;left:2px;right:2px;background:rgba(9,7,8,0.75);color:#fff;font-size:9.5px;font-weight:700;text-align:center;border-radius:4px;padding:1px 2px;">
            ${idx === 0 ? '★ Cover' : 'Img #' + (idx + 1)}
          </span>
          <button type="button" onclick="event.stopPropagation();removeEditGalleryImage(${idx});" style="position:absolute;top:2px;right:2px;width:18px;height:18px;border-radius:50%;background:rgba(184,74,88,0.9);color:#fff;font-size:10px;display:flex;align-items:center;justify-content:center;line-height:1;">✕</button>
        </div>
      `).join("");
    }

    function setPrimaryEditGalleryImage(idx) {
      if (!window.__editProdGalleryList || idx <= 0 || idx >= window.__editProdGalleryList.length) return;
      const chosen = window.__editProdGalleryList.splice(idx, 1)[0];
      window.__editProdGalleryList.unshift(chosen);
      renderEditProdGalleryPreview();
      showToast("Updated Primary Cover Image for Product");
    }

    function removeEditGalleryImage(idx) {
      if (!window.__editProdGalleryList || window.__editProdGalleryList.length <= 1) {
        showToast("At least 1 product image is required");
        return;
      }
      window.__editProdGalleryList.splice(idx, 1);
      renderEditProdGalleryPreview();
    }

    function addPresetImageToEditGallery() {
      const sel = document.getElementById("editProdPresetAdd");
      const key = sel ? sel.value : "necklace";
      const src = IMG[key] || IMG.necklace;
      if (!Array.isArray(window.__editProdGalleryList)) window.__editProdGalleryList = [];
      window.__editProdGalleryList.push(src);
      renderEditProdGalleryPreview();
      showToast("Added studio image to Product Gallery");
    }

    function loadCustomerIntoCrmForm(custId) {
      const c = ERP_DB.crmCustomers.find(x => x.id === custId);
      if (!c) return;
      if (document.getElementById("crmEditCustId")) document.getElementById("crmEditCustId").value = c.id;
      document.getElementById("crmName").value = c.name || "";
      document.getElementById("crmPhone").value = c.phone || "";
      document.getElementById("crmEmail").value = c.email || "";
      document.getElementById("crmTier").value = c.tier || "Repeat";
      document.getElementById("crmPoints").value = c.points || 0;
      document.getElementById("crmAddress").value = c.address || "";
      document.getElementById("crmNotes").value = c.notes || "";
      document.getElementById("crmConsentSms").checked = Boolean(c.consent?.sms);
      document.getElementById("crmConsentWa").checked = Boolean(c.consent?.whatsapp);
      document.getElementById("crmConsentEmail").checked = Boolean(c.consent?.email);
      document.getElementById("crmName").focus();
      showToast(`Editing Customer "${c.name}" in top form`);
    }

    function resetDefaultBrandLogos() {
      if (ERP_DB && ERP_DB.cms) {
        delete ERP_DB.cms.customLogoLight;
        delete ERP_DB.cms.customLogoDark;
      }
      TEHZIB_LOGOS.light = IMG.logo_light;
      TEHZIB_LOGOS.dark = IMG.logo_dark;
      applyTheme(state.theme);
      saveErpDatabase();
      showToast("Restored official Tehzib Light & Dark Logos");
    }


    function openStorefrontPreview() {
      const pubProducts = ERP_DB.products.filter(p => p.isPublished);
      const slide = ERP_DB.cms.heroSliders[0] || {
        eyebrow: "TEHZIB 2027",
        title: "Parisian Blush & Velvet Noir",
        desc: "Contemporary fashion & accessories.",
        cta: "Explore Collection",
        image: IMG.hero
      };
      const body = document.getElementById("storefrontPreviewBody");
      body.innerHTML = `
        <div style="background:var(--bg-main);color:var(--text-main);font-size:12px;">
          <div style="background:var(--accent-rose);color:#181214;padding:7px 18px;display:flex;justify-content:space-between;font-size:11px;font-weight:700;">
            <span>${ERP_DB.cms.topOfferText}</span>
            <span class="mono">Hotline: ${ERP_DB.cms.topPhone}</span>
          </div>
          <div style="padding:14px 20px;border-bottom:1px solid var(--border-color);text-align:center;background:var(--bg-elevated);">
            <div style="font-family:'Cormorant Garamond',serif;font-size:1.7rem;font-weight:700;">TEHZIB</div>
            <div style="display:flex;justify-content:center;gap:16px;margin-top:8px;flex-wrap:wrap;">
              ${ERP_DB.cms.categories.filter(c => c.enabled !== false).map(c => `<span style="font-weight:700;font-size:12px;">${c.name} ▾</span>`).join("")}
            </div>
          </div>
          <div style="position:relative;height:210px;overflow:hidden;display:flex;align-items:center;padding:24px;background:#1A1417;color:#F8F4F2;">
            <img src="${slide.image}" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.42;" />
            <div style="position:relative;z-index:2;max-width:520px;">
              <span style="font-size:10.5px;letter-spacing:0.12em;text-transform:uppercase;color:#E4BAB7;font-weight:700;">${slide.eyebrow}</span>
              <h2 style="font-size:1.65rem;color:#FFFFFF;margin:4px 0 8px;">${slide.title}</h2>
              <p style="font-size:12px;color:#E8DFDC;margin-bottom:12px;">${slide.desc}</p>
              <span class="btn btn-sm btn-rose">${slide.cta}</span>
            </div>
          </div>
          <div style="padding:20px;">
            <h3 style="font-size:15px;margin-bottom:10px;">Active Storefront Products (${pubProducts.length} Published SKUs)</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(175px,1fr));gap:12px;">
              ${pubProducts.slice(0, 6).map(p => `
                <div style="border:1px solid var(--border-color);border-radius:10px;padding:10px;background:var(--bg-elevated);">
                  <img src="${p.image}" alt="${p.title}" style="width:100%;height:110px;object-fit:cover;border-radius:7px;margin-bottom:8px;" />
                  <div style="font-size:10.5px;color:var(--text-muted);">${p.category} • ${p.sku}</div>
                  <div style="font-weight:700;font-size:12px;margin:2px 0;">${p.title}</div>
                  <div style="display:flex;justify-content:space-between;align-items:center;margin-top:6px;">
                    <strong class="mono">${formatBdt(p.price)}</strong>
                    <span class="badge badge-green">Avail: ${p.available}</span>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      `;
      window.__suspendedErpModalIds = [];
      document.querySelectorAll(".erp-modal-backdrop.open, .modal-backdrop.open").forEach(m => m.classList.remove("open"));
      document.getElementById("storefrontPreviewModal").classList.add("open");
    }

    // ========================================================================
    // BIND ALL OMS FORMS & EVENT HANDLERS
    // ========================================================================
    function bindErpFormsAndEvents() {
      // Bind theme toggle buttons in Auth Gate and ERP Topbar
      document.getElementById("authThemeToggleBtn")?.addEventListener("click", toggleTheme);
      document.getElementById("erpThemeToggleBtn")?.addEventListener("click", toggleTheme);

      // Category Image File Upload
      document.getElementById("cmsCatImgUpload")?.addEventListener("change", e => {
        const f = e.target.files && e.target.files[0];
        if (!f) return;
        const reader = new FileReader();
        reader.onload = ev => {
          window.__uploadedCategoryImageData = ev.target.result;
          previewCategoryImageSelection();
          showToast("Custom Category Image loaded!");
        };
        reader.readAsDataURL(f);
      });

      // Product Modal Multi-Image Upload
      document.getElementById("editProdMultiImages")?.addEventListener("change", e => {
        const files = Array.from(e.target.files || []);
        if (!files.length) return;
        files.forEach(f => {
          const reader = new FileReader();
          reader.onload = ev => {
            if (!Array.isArray(window.__editProdGalleryList)) window.__editProdGalleryList = [];
            window.__editProdGalleryList.push(ev.target.result);
            renderEditProdGalleryPreview();
          };
          reader.readAsDataURL(f);
        });
        showToast(`Added ${files.length} image(s) to Product Gallery`);
      });

      // Product Modal Video Upload
      document.getElementById("editProdVideoUpload")?.addEventListener("change", e => {
        const f = e.target.files && e.target.files[0];
        if (!f) return;
        const urlEl = document.getElementById("editProdVideoUrl");
        const capEl = document.getElementById("editProdVideoCaption");
        if (urlEl) urlEl.value = `local-video://${f.name}`;
        if (capEl) capEl.value = `Uploaded Video: ${f.name} (${(f.size / 1024 / 1024).toFixed(1)} MB)`;
        renderEditProdGalleryPreview();
        showToast(`Attached Product Video: "${f.name}"`);
      });

      // Brand Logo Upload Form in Promotions & CMS
      document.getElementById("cmsLogoLightUpload")?.addEventListener("change", e => {
        const f = e.target.files && e.target.files[0];
        if (!f) return;
        const r = new FileReader();
        r.onload = ev => { window.__uploadedLogoLight = ev.target.result; showToast("Light theme logo file ready"); };
        r.readAsDataURL(f);
      });
      document.getElementById("cmsLogoDarkUpload")?.addEventListener("change", e => {
        const f = e.target.files && e.target.files[0];
        if (!f) return;
        const r = new FileReader();
        r.onload = ev => { window.__uploadedLogoDark = ev.target.result; showToast("Dark theme logo file ready"); };
        r.readAsDataURL(f);
      });
      document.getElementById("cmsBrandLogoForm")?.addEventListener("submit", e => {
        e.preventDefault();
        if (window.__uploadedLogoLight) {
          ERP_DB.cms.customLogoLight = window.__uploadedLogoLight;
          TEHZIB_LOGOS.light = window.__uploadedLogoLight;
        }
        if (window.__uploadedLogoDark) {
          ERP_DB.cms.customLogoDark = window.__uploadedLogoDark;
          TEHZIB_LOGOS.dark = window.__uploadedLogoDark;
        }
        applyTheme(state.theme);
        saveErpDatabase();
        showToast("Brand Logo updated across Storefront & Backend Admin!");
      });

      const mobBtn = document.getElementById("mobileSidebarToggleBtn");
      if (mobBtn) {
        mobBtn.addEventListener("click", e => {
          e.stopPropagation();
          const sb = document.getElementById("erpSidebar");
          if (sb) sb.classList.toggle("mobile-open");
        });
      }
      document.addEventListener("click", e => {
        const sb = document.getElementById("erpSidebar");
        if (sb && sb.classList.contains("mobile-open")) {
          if (!sb.contains(e.target) && (!mobBtn || !mobBtn.contains(e.target))) {
            sb.classList.remove("mobile-open");
          }
        }
      });



      const spImgInput = document.getElementById("spImageUpload");
      if (spImgInput) {
        spImgInput.addEventListener("change", e => {
          const f = e.target.files && e.target.files[0];
          if (!f) return;
          const reader = new FileReader();
          reader.onload = ev => {
            uploadedSpImageData = ev.target.result;
            showToast("Custom product image loaded");
          };
          reader.readAsDataURL(f);
        });
      }

      const heroImgInput = document.getElementById("cmsSlideFileUpload");
      if (heroImgInput) {
        heroImgInput.addEventListener("change", e => {
          const f = e.target.files && e.target.files[0];
          if (!f) return;
          const reader = new FileReader();
          reader.onload = ev => {
            uploadedHeroImageData = ev.target.result;
            showToast("Custom hero slider banner loaded");
          };
          reader.readAsDataURL(f);
        });
      }

      // Supplier Product Entry Form (Saved as Draft / Unpublished + PO)
      document.getElementById("supplierProductEntryForm")?.addEventListener("submit", e => {
        e.preventDefault();
        const supId = document.getElementById("spSupplierId").value;
        const title = document.getElementById("spTitle").value.trim();
        const sku = document.getElementById("spSku").value.trim();
        const category = document.getElementById("spCategory").value;
        const subcategory = document.getElementById("spSubcategory").value.trim();
        const orderedQty = Number(document.getElementById("spOrderedQty").value) || 20;
        const costPrice = Number(document.getElementById("spCostPrice").value) || 180;
        const landedCost = Number(document.getElementById("spWholesalePrice").value) || 210;
        const price = Number(document.getElementById("spRetailPrice").value) || 450;
        const oldPrice = Number(document.getElementById("spOldPrice").value) || 0;
        const variants = document.getElementById("spVariants").value.split(",").map(s => s.trim()).filter(Boolean);
        const warehouse = document.getElementById("spWarehouse").value.trim();
        const presetKey = document.getElementById("spImagePreset").value;
        const imgData = uploadedSpImageData || IMG[presetKey] || IMG.necklace;

        const newProdId = "p" + (ERP_DB.products.length + 25);
        const newProd = {
          id: newProdId,
          sku,
          title,
          category,
          subcategory,
          supplierId: supId,
          costPrice,
          landedCost,
          wholesalePrice: landedCost,
          price,
          oldPrice,
          available: 0,
          reserved: 0,
          sold: 0,
          returned: 0,
          damaged: 0,
          reorderThreshold: 5,
          isPublished: false,
          statusLabel: "Draft",
          isDeal: document.getElementById("spIsDeal").checked,
          isNew: document.getElementById("spIsNew").checked,
          isJustForYou: document.getElementById("spIsJustForYou").checked,
          variants: variants.length ? variants : ["Standard"],
          image: imgData,
          description: document.getElementById("spDescription").value.trim(),
          specs: document.getElementById("spSpecification").value.trim(),
          seoKeywords: document.getElementById("spSeoKeywords").value.trim(),
          seoDescription: document.getElementById("spSeoDescription").value.trim(),
          geoKeywords: document.getElementById("spGeoKeywords").value.trim()
        };

        const advancePaid = Number(document.getElementById("spAdvancePaid")?.value) || 0;
        const payableDue = Number(document.getElementById("spPayableDue")?.value) || 0;
        const advAccount = document.getElementById("spAdvanceAccount")?.value || "acc_bkash";
        const advStaff = document.getElementById("spAdvanceStaff")?.value || "Nadia Sultana";
        const dueAccount = document.getElementById("spDueAccount")?.value || "acc_bank";
        const dueStaff = document.getElementById("spDueStaff")?.value || "Farhan Islam";
        const supObj = ERP_DB.suppliers.find(s => s.id === supId);
        if (supObj) {
          supObj.paidAmount = (Number(supObj.paidAmount) || 0) + advancePaid;
          supObj.payable = (Number(supObj.payable) || 0) + payableDue;
          supObj.advanceAccount = advAccount;
          supObj.advanceByStaff = advStaff;
          supObj.dueAccount = dueAccount;
          supObj.dueByStaff = dueStaff;
        }
        if (advancePaid > 0) {
          if (ERP_DB.accounts[advAccount]) {
            ERP_DB.accounts[advAccount].balance = Math.max(0, Number(ERP_DB.accounts[advAccount].balance || 0) - advancePaid);
          }
          if (!Array.isArray(ERP_DB.paymentsLog)) ERP_DB.paymentsLog = [];
          ERP_DB.paymentsLog.unshift({
            id: "PAY-" + (ERP_DB.paymentsLog.length + 510),
            date: nowTimestamp().slice(0, 10),
            supplierId: supId,
            supplierName: supObj ? supObj.name : supId,
            poId: "PO-2027-" + (ERP_DB.shipments.length + 105),
            paymentType: "Advance Payment",
            amount: advancePaid,
            accountKey: advAccount,
            accountName: ERP_DB.accounts[advAccount]?.name || advAccount,
            advanceByStaff: advStaff,
            dueByStaff: dueStaff,
            details: `PO Advance for ${orderedQty}x ${title} (${sku}); Due ${formatBdt(payableDue)} assigned to ${dueStaff}`
          });
        }

        ERP_DB.products.unshift(newProd);
        const newPoId = "PO-2027-" + (ERP_DB.shipments.length + 105);
        ERP_DB.shipments.unshift({
          id: newPoId,
          date: nowTimestamp().slice(0, 10),
          supplierId: supId,
          productId: newProdId,
          sku,
          productTitle: title,
          moq: 12,
          orderedQty,
          receivedQty: 0,
          damagedQty: 0,
          costPrice,
          landedCost,
          wholesalePrice: landedCost,
          retailPrice: price,
          advancePaid,
          payableDue,
          balanceRecordedOnPo: true,
          warehouse,
          status: "PENDING_GRN"
        });

        uploadedSpImageData = "";
        saveErpDatabase();
        renderAllErpModules();
        switchProcTab("shipments");
        showToast(`Saved "${title}" (${newPoId}) & updated Supplier Paid (+${formatBdt(advancePaid)}) / Due (+${formatBdt(payableDue)})!`);
      });

      // Confirm GRN Modal Form
      document.getElementById("confirmGrnForm")?.addEventListener("submit", e => {
        e.preventDefault();
        const shId = document.getElementById("grnShipmentId").value;
        const recQty = Number(document.getElementById("grnReceivedQty").value) || 0;
        const dmgQty = Number(document.getElementById("grnDamagedQty").value) || 0;
        const publishNow = document.getElementById("grnPublishImmediately").checked;

        const sh = ERP_DB.shipments.find(x => x.id === shId);
        if (!sh) return;
        sh.receivedQty = recQty;
        sh.damagedQty = dmgQty;
        sh.status = "RECEIVED";

        const prod = ERP_DB.products.find(p => p.id === sh.productId || p.sku === sh.sku);
        if (prod) {
          prod.available = (Number(prod.available) || 0) + recQty;
          prod.damaged = (Number(prod.damaged) || 0) + dmgQty;
          prod.title = prod.title.replace(" (Awaiting Shipment)", "");
          if (publishNow) {
            prod.isPublished = true;
            prod.statusLabel = "Active";
          }
        }

        const sup = ERP_DB.suppliers.find(s => s.id === sh.supplierId);
        const billAmt = recQty * (Number(sh.landedCost || sh.costPrice) || 0);
        if (sup && !sh.balanceRecordedOnPo) {
          sup.payable = (Number(sup.payable) || 0) + billAmt;
        }

        ERP_DB.inventoryMovements.unshift({
          time: nowTimestamp(),
          productId: sh.productId || (prod ? prod.id : ""),
          productTitle: (prod ? prod.title : sh.productTitle || "").replace(" (Awaiting Shipment)", ""),
          sku: sh.sku,
          variant: (prod && prod.variants && prod.variants[0]) || "Standard",
          type: `PO GRN (+${recQty} Avail${dmgQty ? `, +${dmgQty} Damaged` : ""})`,
          note: `Shipment ${sh.id} for ${(prod ? prod.title : sh.productTitle || "").replace(" (Awaiting Shipment)", "")} received (${publishNow ? "Published to Storefront" : "Kept as Draft"})`
        });

        closeReceiveShipmentModal();
        saveErpDatabase();
        renderAllErpModules();
        showToast(`Shipment ${sh.id} received (+${recQty} Avail) ${publishNow ? "& Published to Storefront!" : ""}`);
      });

      // Add / Update Supplier & Advance/Paid + Payable/Due Balance Form
      document.getElementById("addSupplierForm")?.addEventListener("submit", e => {
        e.preventDefault();
        const editSupId = document.getElementById("supEditSelect")?.value || "";
        const paidInputVal = Math.max(0, Number(document.getElementById("supPaidAmount")?.value) || 0);
        const dueInputVal = Math.max(0, Number(document.getElementById("supPayableAmount")?.value) || 0);
        const updateMode = document.getElementById("supBalanceUpdateMode")?.value || "SET";

        const advAccount = document.getElementById("supAdvanceAccount")?.value || "acc_bkash";
        const advStaff = document.getElementById("supAdvanceStaff")?.value || "Nadia Sultana";
        const dueAccount = document.getElementById("supDueAccount")?.value || "acc_bank";
        const dueStaff = document.getElementById("supDueStaff")?.value || "Farhan Islam";
        const payNote = document.getElementById("supPaymentNote")?.value?.trim() || "Supplier balance entry recorded";

        const existingSup = editSupId ? ERP_DB.suppliers.find(s => s.id === editSupId) : null;
        if (existingSup) {
          existingSup.name = document.getElementById("supName").value.trim();
          existingSup.contact = document.getElementById("supContact").value.trim();
          existingSup.phone = document.getElementById("supPhone").value.trim();
          existingSup.category = document.getElementById("supCategory").value;
          existingSup.moq = Number(document.getElementById("supMoq").value) || 12;
          existingSup.leadDays = Number(document.getElementById("supLeadDays").value) || 3;
          existingSup.terms = document.getElementById("supTerms").value;
          existingSup.address = document.getElementById("supAddress").value.trim();
          existingSup.notes = document.getElementById("supNotes").value.trim();
          existingSup.advanceAccount = advAccount;
          existingSup.advanceByStaff = advStaff;
          existingSup.dueAccount = dueAccount;
          existingSup.dueByStaff = dueStaff;
          if (updateMode === "ADD") {
            existingSup.paidAmount = (Number(existingSup.paidAmount) || 0) + paidInputVal;
            existingSup.payable = (Number(existingSup.payable) || 0) + dueInputVal;
          } else {
            existingSup.paidAmount = paidInputVal;
            existingSup.payable = dueInputVal;
          }
          if (paidInputVal > 0) {
            if (!Array.isArray(ERP_DB.paymentsLog)) ERP_DB.paymentsLog = [];
            ERP_DB.paymentsLog.unshift({
              id: "PAY-" + (ERP_DB.paymentsLog.length + 510),
              date: nowTimestamp().slice(0, 10),
              supplierId: existingSup.id,
              supplierName: existingSup.name,
              poId: "SUP-LEDGER",
              paymentType: dueInputVal === 0 ? "Due Payment" : "Advance Payment",
              amount: paidInputVal,
              accountKey: advAccount,
              accountName: ERP_DB.accounts[advAccount]?.name || advAccount,
              advanceByStaff: advStaff,
              dueByStaff: dueStaff,
              details: payNote
            });
          }
          saveErpDatabase();
          renderAllErpModules();
          resetSupplierBalanceForm();
          showToast(`Updated "${existingSup.name}" — Paid: ${formatBdt(existingSup.paidAmount)} (Adv: ${advStaff} • Due: ${dueStaff})`);
        } else {
          const newSup = {
            id: "SUP-0" + (ERP_DB.suppliers.length + 1),
            name: document.getElementById("supName").value.trim(),
            contact: document.getElementById("supContact").value.trim(),
            phone: document.getElementById("supPhone").value.trim(),
            category: document.getElementById("supCategory").value,
            moq: Number(document.getElementById("supMoq").value) || 12,
            leadDays: Number(document.getElementById("supLeadDays").value) || 3,
            terms: document.getElementById("supTerms").value,
            address: document.getElementById("supAddress").value.trim(),
            notes: document.getElementById("supNotes").value.trim(),
            paidAmount: paidInputVal,
            payable: dueInputVal,
            advanceAccount: advAccount,
            advanceByStaff: advStaff,
            dueAccount: dueAccount,
            dueByStaff: dueStaff,
            defectClaims: "0 claims"
          };
          ERP_DB.suppliers.push(newSup);
          if (paidInputVal > 0) {
            if (!Array.isArray(ERP_DB.paymentsLog)) ERP_DB.paymentsLog = [];
            ERP_DB.paymentsLog.unshift({
              id: "PAY-" + (ERP_DB.paymentsLog.length + 510),
              date: nowTimestamp().slice(0, 10),
              supplierId: newSup.id,
              supplierName: newSup.name,
              poId: "NEW-SUPPLIER",
              paymentType: "Advance Payment",
              amount: paidInputVal,
              accountKey: advAccount,
              accountName: ERP_DB.accounts[advAccount]?.name || advAccount,
              advanceByStaff: advStaff,
              dueByStaff: dueStaff,
              details: payNote
            });
          }
          e.target.reset();
          saveErpDatabase();
          renderAllErpModules();
          resetSupplierBalanceForm();
          showToast(`Added Supplier "${newSup.name}" (Adv by ${advStaff} • Due by ${dueStaff})`);
        }
      });

      // Master Product Edit Modal Form
      document.getElementById("masterProductEditForm")?.addEventListener("submit", e => {
        e.preventDefault();
        const id = document.getElementById("editProdId").value;
        const pubVal = document.getElementById("editProdPublished").value;
        const isPub = pubVal === "true";
        const statusLabel = pubVal === "discontinued" ? "Discontinued" : (pubVal === "out_of_stock" ? "Out of Stock" : (isPub ? "Active" : "Draft"));

        const payload = {
          title: document.getElementById("editProdTitle").value.trim(),
          sku: document.getElementById("editProdSku").value.trim(),
          supplierId: document.getElementById("editProdSupplier").value,
          category: document.getElementById("editProdCategory").value,
          subcategory: document.getElementById("editProdSubcategory").value.trim(),
          available: pubVal === "out_of_stock" ? 0 : (Number(document.getElementById("editProdStock").value) || 0),
          costPrice: Number(document.getElementById("editProdCost").value) || 180,
          landedCost: Number(document.getElementById("editProdWholesale").value) || 210,
          wholesalePrice: Number(document.getElementById("editProdWholesale").value) || 210,
          price: Number(document.getElementById("editProdRetail").value) || 450,
          oldPrice: Number(document.getElementById("editProdOldPrice").value) || 0,
          variants: document.getElementById("editProdVariants").value.split(",").map(s => s.trim()).filter(Boolean),
          isPublished: isPub,
          statusLabel,
          description: document.getElementById("editProdDescription").value.trim(),
          specs: document.getElementById("editProdSpecs").value.trim(),
          seoKeywords: document.getElementById("editProdSeoKeywords").value.trim(),
          seoDescription: document.getElementById("editProdSeoDesc").value.trim(),
          geoKeywords: document.getElementById("editProdGeoKeywords").value.trim(),
          isDeal: document.getElementById("editProdDeal").checked,
          isNew: document.getElementById("editProdNew").checked,
          isJustForYou: document.getElementById("editProdJfy").checked
        };

        const galleryImgs = (Array.isArray(window.__editProdGalleryList) && window.__editProdGalleryList.length)
          ? [...window.__editProdGalleryList]
          : [IMG.necklace, IMG.cream_bag, IMG.silk_blouse];
        payload.image = galleryImgs[0];
        payload.gallery = galleryImgs;
        payload.videoUrl = document.getElementById("editProdVideoUrl")?.value.trim() || "https://tehzib.com/media/studio-360-showcase.mp4";
        payload.videoCaption = document.getElementById("editProdVideoCaption")?.value.trim() || "360° Studio Video Ready";

        const existing = ERP_DB.products.find(x => x.id === id);
        if (existing) {
          Object.assign(existing, payload);
        } else {
          ERP_DB.products.unshift({
            id: "p" + (ERP_DB.products.length + 30),
            reserved: 0,
            sold: 0,
            returned: 0,
            damaged: 0,
            reorderThreshold: 5,
            ...payload
          });
        }

        closeProductEditorModal();
        saveErpDatabase();
        renderAllErpModules();
        showToast(`Saved Product "${payload.title}" & synced Storefront!`);
      });

      // Stock Adjustment Form
      document.getElementById("stockAdjustForm")?.addEventListener("submit", e => {
        e.preventDefault();
        const pid = document.getElementById("adjProductId").value;
        const variant = document.getElementById("adjVariantName").value.trim() || "Standard";
        const type = document.getElementById("adjType").value;
        const qty = Number(document.getElementById("adjQty").value) || 1;
        const landed = Number(document.getElementById("adjLandedCost").value) || 0;
        const reason = document.getElementById("adjReason").value.trim();

        const prod = ERP_DB.products.find(p => p.id === pid);
        if (!prod) return;
        if (landed > 0) prod.landedCost = landed;

        let moveLabel = "";
        if (type === "RECEIVE") {
          prod.available = Number(prod.available || 0) + qty;
          moveLabel = `Received (+${qty} → ${prod.available} Avail)`;
        } else if (type === "SOLD") {
          prod.available = Math.max(0, Number(prod.available || 0) - qty);
          prod.sold = Number(prod.sold || 0) + qty;
          moveLabel = `Direct Sale (-${qty} → ${prod.available} Avail)`;
        } else if (type === "RETURN_RESTOCK") {
          prod.available = Number(prod.available || 0) + qty;
          prod.returned = Number(prod.returned || 0) + qty;
          moveLabel = `Return Restocked (+${qty} → ${prod.available} Avail)`;
        } else if (type === "DAMAGE") {
          prod.available = Math.max(0, Number(prod.available || 0) - qty);
          prod.damaged = Number(prod.damaged || 0) + qty;
          moveLabel = `Damaged Write-Off (-${qty} Avail, +${qty} Damaged)`;
        } else if (type === "SET_THRESHOLD") {
          prod.reorderThreshold = qty;
          moveLabel = `Reorder Threshold set to ≤${qty} units`;
        }

        ERP_DB.inventoryMovements.unshift({
          time: nowTimestamp(),
          productId: prod.id,
          productTitle: prod.title,
          sku: prod.sku,
          variant,
          type: moveLabel,
          note: reason
        });

        saveErpDatabase();
        renderAllErpModules();
        showToast(`Stock updated for ${prod.title} (${variant}): ${moveLabel}`);
      });

      // Return / Exception Form
      document.getElementById("returnProcessForm")?.addEventListener("submit", e => {
        e.preventDefault();
        const ordId = document.getElementById("retOrderId").value;
        const outcome = document.getElementById("retOutcomeType").value;
        const refundAmt = Number(document.getElementById("retRefundAmount").value) || 0;
        const note = document.getElementById("retInspectionNote").value.trim();

        const ord = ERP_DB.orders.find(o => o.id === ordId);
        if (!ord) return;

        (ord.items || []).forEach(item => {
          const p = ERP_DB.products.find(x => x.id === item.productId || x.sku === item.sku);
          if (!p) return;
          if (outcome === "Returned_Restock" || outcome === "Delivery_Failed") {
            p.available = Number(p.available || 0) + Number(item.qty || 1);
            p.returned = Number(p.returned || 0) + Number(item.qty || 1);
          } else if (outcome === "Returned_Damaged") {
            p.damaged = Number(p.damaged || 0) + Number(item.qty || 1);
          }
        });

        ord.status = outcome === "Delivery_Failed" ? "Delivery Failed" : (outcome === "Refund_Issued" ? "Refunded" : "Returned");
        if (refundAmt > 0 || outcome === "Refund_Issued") {
          ord.paymentStatus = "Refunded";
        }
        ord.deliveryOutcome = note;

        ERP_DB.returnsLog.unshift({
          id: "RET-" + (ERP_DB.returnsLog.length + 10),
          orderId: ord.id,
          customerName: ord.customerName,
          items: (ord.items || []).map(i => `${i.qty}x ${i.title}`).join(", "),
          status: outcome.replace("_", " "),
          actionNote: note,
          refundAmount: refundAmt
        });

        e.target.reset();
        saveErpDatabase();
        renderAllErpModules();
        showToast(`Processed return/outcome for ${ord.id}`);
      });

      // POS Add Item
      document.getElementById("posAddItemBtn")?.addEventListener("click", () => {
        const pid = document.getElementById("posItemProductSelect").value;
        const variant = document.getElementById("posItemVariant").value.trim() || "Standard";
        const qty = Math.max(1, Number(document.getElementById("posItemQty").value) || 1);
        posDraftItems.push({ productId: pid, variant, qty });
        renderPosCartSummary();
        showToast("Added SKU to Order");
      });

      // Staff / Multi-Channel POS Order Submit
      document.getElementById("staffOrderBuilderForm")?.addEventListener("submit", e => {
        e.preventDefault();
        if (posDraftItems.length === 0) {
          showToast("Please add at least 1 product SKU");
          return;
        }
        const custName = document.getElementById("posCustName").value.trim();
        const custPhone = document.getElementById("posCustPhone").value.trim();
        const custAddr = document.getElementById("posCustAddress").value.trim();
        const channel = document.getElementById("posChannel").value;
        const courier = document.getElementById("posCourierSelect").value;
        const tier = document.getElementById("posPriceTier").value;
        const delivMethod = document.getElementById("posDeliveryMethod").value;
        const discount = Number(document.getElementById("posDiscountInput").value) || 0;
        const payMethod = document.getElementById("posAccountSelect").value;

        let delivFee = 0;
        if (delivMethod.includes("70")) delivFee = 70;
        else if (delivMethod.includes("130")) delivFee = 130;

        let subtotal = 0;
        let totalCogs = 0;
        const orderItems = posDraftItems.map(item => {
          const p = ERP_DB.products.find(x => x.id === item.productId) || ERP_DB.products[0];
          const unitPrice = tier === "WHOLESALE" ? Number(p.wholesalePrice || p.price) : Number(p.price);
          const unitCost = Number(p.landedCost || p.costPrice || 200);
          subtotal += unitPrice * item.qty;
          totalCogs += unitCost * item.qty;

          // Reserve stock immediately
          p.available = Math.max(0, Number(p.available || 0) - item.qty);
          p.reserved = Number(p.reserved || 0) + item.qty;

          ERP_DB.inventoryMovements.unshift({
            time: nowTimestamp(),
            productId: p.id,
            productTitle: p.title,
            sku: p.sku,
            variant: item.variant,
            type: `Order Reserved (-${item.qty} Avail, +${item.qty} Reserved)`,
            note: `${channel} Order for ${custName} (${p.title} - ${item.variant})`
          });

          return {
            productId: p.id,
            sku: p.sku,
            title: p.title,
            variant: item.variant,
            qty: item.qty,
            unitPrice,
            unitCost
          };
        });

        const totalRev = Math.max(0, subtotal - discount + delivFee);
        const newOrdId = "ORD-2027-" + (ERP_DB.orders.length + 905);
        const isPaidUpfront = !payMethod.includes("COD");

        ERP_DB.orders.unshift({
          id: newOrdId,
          date: nowTimestamp(),
          customerName: custName,
          customerPhone: custPhone,
          customerAddress: custAddr,
          channel,
          campaignSource: channel,
          tier,
          courier,
          trackingNumber: "PENDING",
          dispatchDate: "—",
          deliveryAttempts: 0,
          deliveryOutcome: "Confirmed — stock reserved",
          deliveryMethod: delivMethod,
          deliveryFee: delivFee,
          discount,
          paymentMethod: payMethod,
          paymentStatus: isPaidUpfront ? "Paid" : "Pending",
          codSettled: isPaidUpfront,
          packagingCost: 35,
          courierActualCost: delivFee || 60,
          codFee: isPaidUpfront ? 0 : Math.round(totalRev * 0.01),
          items: orderItems,
          subtotal,
          totalRevenue: totalRev,
          totalCogs,
          status: "Confirmed"
        });

        const existingCrm = ERP_DB.crmCustomers.find(c => c.phone === custPhone || c.name.toLowerCase() === custName.toLowerCase());
        if (existingCrm) {
          existingCrm.ordersCount = Number(existingCrm.ordersCount || 1) + 1;
          existingCrm.tier = existingCrm.ordersCount >= 4 ? "VIP" : "Repeat";
        } else {
          ERP_DB.crmCustomers.unshift({
            id: "CUST-" + (ERP_DB.crmCustomers.length + 105),
            name: custName,
            phone: custPhone,
            email: "customer@tehzib.com",
            tier: "New",
            rating: 5.0,
            points: Math.round(totalRev / 20),
            ordersCount: 1,
            completedOrders: 0,
            spend: 0,
            returnsCount: 0,
            failedCount: 0,
            address: custAddr,
            notes: `Created via ${channel}`,
            consent: { sms: true, whatsapp: true, email: false },
            referralCode: custName.split(" ")[0].toUpperCase() + "-THZ"
          });
        }

        posDraftItems = [];
        saveErpDatabase();
        renderAllErpModules();
        openOrderInvoiceModal(newOrdId);
        showToast(`Created Order ${newOrdId} (${formatBdt(totalRev)})! Step 1: Invoice Preview opened — click 'Print Invoice' to print.`);
      });

      // CRM Add / Update Customer Form
      document.getElementById("crmCustomerForm")?.addEventListener("submit", e => {
        e.preventDefault();
        const editId = document.getElementById("crmEditCustId")?.value || "";
        const name = document.getElementById("crmName").value.trim();
        const phone = document.getElementById("crmPhone").value.trim();
        const email = document.getElementById("crmEmail").value.trim();
        const tier = document.getElementById("crmTier").value;
        const points = Number(document.getElementById("crmPoints").value) || 250;
        const address = document.getElementById("crmAddress").value.trim();
        const notes = document.getElementById("crmNotes").value.trim();
        const consent = {
          sms: document.getElementById("crmConsentSms").checked,
          whatsapp: document.getElementById("crmConsentWa").checked,
          email: document.getElementById("crmConsentEmail").checked
        };

        const existing = ERP_DB.crmCustomers.find(c => c.id === editId || c.phone === phone);
        if (existing) {
          Object.assign(existing, { name, phone, email, tier, points, address, notes, consent });
          showToast(`Updated Customer Record for "${name}"`);
        } else {
          const newCust = {
            id: "CUST-" + (ERP_DB.crmCustomers.length + 105),
            name,
            phone,
            email,
            tier,
            rating: 5.0,
            points,
            ordersCount: 1,
            completedOrders: 1,
            spend: 0,
            returnsCount: 0,
            failedCount: 0,
            address,
            notes,
            consent,
            referralCode: name.split(" ")[0].toUpperCase() + "-VIP"
          };
          ERP_DB.crmCustomers.unshift(newCust);
          showToast(`Added Customer "${newCust.name}" to CRM`);
        }
        if (document.getElementById("crmEditCustId")) document.getElementById("crmEditCustId").value = "";
        e.target.reset();
        saveErpDatabase();
        renderAllErpModules();
      });

      // Add Expense Form (with Details & Responsible Staff)
      document.getElementById("addExpenseForm")?.addEventListener("submit", e => {
        e.preventDefault();
        const title = document.getElementById("expTitle").value.trim();
        const details = document.getElementById("expDetails")?.value?.trim() || title;
        const category = document.getElementById("expCategory").value;
        const amount = Number(document.getElementById("expAmount").value) || 0;
        const accKey = document.getElementById("expAccount").value;
        const staffName = document.getElementById("expResponsibleStaff")?.value || "Nadia Sultana";
        const staffObj = (ERP_DB.staffMembers || []).find(s => s.name === staffName) || { id: "STF-100", name: staffName, role: "Operations Staff" };

        ERP_DB.expenses.unshift({
          id: "EXP-" + (ERP_DB.expenses.length + 305),
          date: nowTimestamp().slice(0, 10),
          title,
          details,
          category,
          account: accKey,
          responsibleStaffId: staffObj.id,
          responsibleStaffName: staffObj.name,
          responsibleStaffRole: staffObj.role,
          amount
        });

        if (ERP_DB.accounts[accKey]) {
          ERP_DB.accounts[accKey].balance = Math.max(0, ERP_DB.accounts[accKey].balance - amount);
        }

        e.target.reset();
        saveErpDatabase();
        renderAllErpModules();
        showToast(`Recorded Expense (${formatBdt(amount)}) under ${staffObj.name} — Synced to Working Team Report!`);
      });

      // Create Coupon Form
      document.getElementById("createCouponForm")?.addEventListener("submit", e => {
        e.preventDefault();
        const code = document.getElementById("cpnCode").value.trim().toUpperCase();
        const discountPct = Number(document.getElementById("cpnDiscountPct").value) || 10;
        const minOrder = Number(document.getElementById("cpnMinOrder").value) || 500;
        const usageLimit = Number(document.getElementById("cpnUsageLimit").value) || 100;
        const startDate = document.getElementById("cpnStartDate").value;
        const endDate = document.getElementById("cpnEndDate").value;
        const source = document.getElementById("cpnSource").value;

        ERP_DB.coupons.unshift({
          code,
          discountPct,
          minOrder,
          startDate,
          endDate,
          usageLimit,
          usedCount: 0,
          source,
          attributedOrders: 0,
          attributedRevenue: 0,
          active: true
        });

        e.target.reset();
        saveErpDatabase();
        renderAllErpModules();
        showToast(`Coupon ${code} (${discountPct}% OFF) activated & synced to Storefront Checkout!`);
      });

      // CMS Hero Slider Form
      document.getElementById("cmsHeroSlideForm")?.addEventListener("submit", e => {
        e.preventDefault();
        const editId = document.getElementById("cmsSlideEditId").value;
        const eyebrow = document.getElementById("cmsSlideEyebrow").value.trim();
        const title = document.getElementById("cmsSlideTitle").value.trim();
        const desc = document.getElementById("cmsSlideDesc").value.trim();
        const cta = document.getElementById("cmsSlideCta").value.trim();
        const category = document.getElementById("cmsSlideCategory").value;
        const preset = document.getElementById("cmsSlideImgPreset").value;
        const img = uploadedHeroImageData || IMG[preset] || IMG.hero;

        if (editId) {
          const target = ERP_DB.cms.heroSliders.find(x => x.id === editId);
          if (target) Object.assign(target, { eyebrow, title, desc, cta, category, image: img });
        } else {
          ERP_DB.cms.heroSliders.push({
            id: "hs" + (Date.now() % 10000),
            eyebrow,
            title,
            desc,
            cta,
            category,
            image: img
          });
        }
        document.getElementById("cmsSlideEditId").value = "";
        uploadedHeroImageData = "";
        e.target.reset();
        saveErpDatabase();
        renderAllErpModules();
        showToast("Hero Slider published to Live Storefront!");
      });

      // CMS Category Form (with Category Image support)
      document.getElementById("cmsCategoryForm")?.addEventListener("submit", e => {
        e.preventDefault();
        const name = document.getElementById("cmsCatName").value.trim();
        const subs = document.getElementById("cmsCatSubs").value.split(",").map(s => s.trim()).filter(Boolean);
        const imgKey = document.getElementById("cmsCatImgPreset")?.value || "giftbox";
        const customImg = window.__uploadedCategoryImageData || "";
        const existing = ERP_DB.cms.categories.find(c => c.name.toLowerCase() === name.toLowerCase());
        if (existing) {
          existing.subs = subs;
          existing.imgKey = imgKey;
          if (customImg) existing.customImage = customImg;
        } else {
          ERP_DB.cms.categories.push({
            name,
            imgKey,
            customImage: customImg || "",
            enabled: true,
            subs
          });
        }
        window.__uploadedCategoryImageData = "";
        e.target.reset();
        previewCategoryImageSelection();
        saveErpDatabase();
        renderAllErpModules();
        showToast(`Category "${name}", Category Image & Subcategories saved and synced to Storefront!`);
      });

      // CMS Header & Sections Form
      document.getElementById("cmsHeaderSectionsForm")?.addEventListener("submit", e => {
        e.preventDefault();
        ERP_DB.cms.topOfferText = document.getElementById("cmsTopOfferText").value.trim();
        ERP_DB.cms.topPromoCode = document.getElementById("cmsTopPromoCode")?.value.trim() || "TEHZIB15";
        state.storeSettings.promoCode = ERP_DB.cms.topPromoCode;
        ERP_DB.cms.topPhone = document.getElementById("cmsTopPhone").value.trim();
        ERP_DB.cms.secTrendTitle = document.getElementById("cmsSecTrendTitle").value.trim();
        ERP_DB.cms.secNewTitle = document.getElementById("cmsSecNewTitle").value.trim();
        ERP_DB.cms.secJfyTitle = document.getElementById("cmsSecJfyTitle").value.trim();
        ERP_DB.cms.newsletterTitle = document.getElementById("cmsNewsletterTitle").value.trim();
        ERP_DB.cms.newsletterSub = document.getElementById("cmsNewsletterSub").value.trim();
        saveErpDatabase();
        renderAllErpModules();
        showToast("Storefront Offer Bar & Homepage Titles updated!");
      });

      // CMS Footer Form
      document.getElementById("cmsFooterForm")?.addEventListener("submit", e => {
        e.preventDefault();
        ERP_DB.cms.footerBio = document.getElementById("cmsFooterBio").value.trim();
        ERP_DB.cms.footerAddress = document.getElementById("cmsFooterAddress").value.trim();
        ERP_DB.cms.footerEmail = document.getElementById("cmsFooterEmail").value.trim();
        ERP_DB.cms.footerPhone = document.getElementById("cmsFooterPhone").value.trim();
        ERP_DB.cms.footerCopyright = document.getElementById("cmsFooterCopyright").value.trim();
        ERP_DB.cms.socials = {
          fb: document.getElementById("cmsSocialFb").value.trim(),
          insta: document.getElementById("cmsSocialInsta").value.trim(),
          tiktok: document.getElementById("cmsSocialTiktok").value.trim(),
          threads: document.getElementById("cmsSocialThreads").value.trim()
        };
        saveErpDatabase();
        renderAllErpModules();
        showToast("Storefront Footer updated!");
      });

      // Bind Footer Section Column Form (Create / Rename Footer Column)
      document.getElementById("cmsFooterSectionColForm")?.addEventListener("submit", e => {
        e.preventDefault();
        const editSecId = document.getElementById("cmsFooterSecEditId")?.value || "";
        const secTitle = document.getElementById("cmsFooterSecTitle")?.value?.trim();
        if (!secTitle) return;
        if (!Array.isArray(ERP_DB.cms.footerSections)) ERP_DB.cms.footerSections = [];
        if (editSecId) {
          const sec = ERP_DB.cms.footerSections.find(s => s.id === editSecId);
          if (sec) sec.title = secTitle;
          showToast(`Renamed Footer Section to "${secTitle}"`);
        } else {
          ERP_DB.cms.footerSections.push({
            id: "fsec_" + Date.now(),
            title: secTitle,
            items: []
          });
          showToast(`Created New Footer Section "${secTitle}" on Storefront!`);
        }
        resetFooterSectionColForm();
        saveErpDatabase();
        renderAll();
      });

      // Bind Footer Link & Popup Info Message Form (Insert / Update Footer Item)
      document.getElementById("cmsFooterLinkItemForm")?.addEventListener("submit", e => {
        e.preventDefault();
        const targetSecId = document.getElementById("cmsFooterItemSecSelect")?.value;
        const editSecId = document.getElementById("cmsFooterItemEditSecId")?.value;
        const editItemId = document.getElementById("cmsFooterItemEditItemId")?.value;
        const label = document.getElementById("cmsFooterItemLabel")?.value?.trim();
        const type = document.getElementById("cmsFooterItemType")?.value || "info";
        const modalTitle = document.getElementById("cmsFooterItemModalTitle")?.value?.trim() || label;
        const message = document.getElementById("cmsFooterItemMessage")?.value?.trim() || "";
        const targetCat = document.getElementById("cmsFooterItemTargetCat")?.value || "Clothing";

        if (!targetSecId || !label) return;
        const sec = (ERP_DB.cms.footerSections || []).find(s => s.id === targetSecId);
        if (!sec) return;
        if (!Array.isArray(sec.items)) sec.items = [];

        if (editItemId && editSecId) {
          const oldSec = ERP_DB.cms.footerSections.find(s => s.id === editSecId);
          if (oldSec && oldSec.id !== sec.id) {
            oldSec.items = (oldSec.items || []).filter(i => i.id !== editItemId);
            sec.items.push({ id: editItemId, label, type, modalTitle, message, targetCat });
          } else {
            const item = sec.items.find(i => i.id === editItemId);
            if (item) Object.assign(item, { label, type, modalTitle, message, targetCat });
          }
          showToast(`Updated Footer Link "${label}" & Popup Message!`);
        } else {
          sec.items.push({
            id: "fi_" + Date.now(),
            label,
            type,
            modalTitle,
            message,
            targetCat
          });
          showToast(`Inserted "${label}" into Footer Section "${sec.title}"!`);
        }
        resetFooterLinkItemForm();
        saveErpDatabase();
        renderAll();
      });

      // Bind Working Team Staff Create / Edit Form
      document.getElementById("workingTeamStaffForm")?.addEventListener("submit", e => {
        e.preventDefault();
        const editId = document.getElementById("wtStaffEditId")?.value || "";
        const name = document.getElementById("wtStaffName")?.value?.trim();
        const phone = document.getElementById("wtStaffPhone")?.value?.trim();
        const email = document.getElementById("wtStaffEmail")?.value?.trim();
        const role = document.getElementById("wtStaffRole")?.value || "Operations Staff";
        const dept = document.getElementById("wtStaffDept")?.value?.trim() || "Operations";
        const status = document.getElementById("wtStaffStatus")?.value || "Active";
        const accesses = Array.from(document.querySelectorAll("#wtAccessCheckboxes input[type='checkbox']:checked")).map(cb => cb.value);

        if (!name) return;
        if (!Array.isArray(ERP_DB.staffMembers)) ERP_DB.staffMembers = [];

        if (editId) {
          const st = ERP_DB.staffMembers.find(x => x.id === editId);
          if (st) {
            Object.assign(st, { name, phone, email, role, dept, status, accesses });
            showToast(`Updated Staff "${name}" (${role})`);
          }
        } else {
          const newId = "STF-" + (ERP_DB.staffMembers.length + 106);
          ERP_DB.staffMembers.push({
            id: newId,
            name,
            phone,
            email,
            role,
            dept,
            status,
            accesses: accesses.length ? accesses : ["Dashboard & BI", "Orders & POS"]
          });
          showToast(`Created Staff "${name}" (${newId}) & assigned role/accesses!`);
        }
        resetWorkingTeamStaffForm();
        saveErpDatabase();
        renderAllErpModules();
      });

      // Bind Working Team Record Payment Form
      document.getElementById("wtRecordPaymentForm")?.addEventListener("submit", e => {
        e.preventDefault();
        const supId = document.getElementById("wtPaySupplier")?.value;
        const payType = document.getElementById("wtPayType")?.value || "Advance Payment";
        const amount = Math.max(1, Number(document.getElementById("wtPayAmount")?.value) || 0);
        const accKey = document.getElementById("wtPayAccount")?.value || "acc_bank";
        const advStaff = document.getElementById("wtPayAdvStaff")?.value || "Nadia Sultana";
        const dueStaff = document.getElementById("wtPayDueStaff")?.value || "Farhan Islam";
        const details = document.getElementById("wtPayDetails")?.value?.trim() || "Recorded via Working Team Payment Ledger";

        const sup = (ERP_DB.suppliers || []).find(s => s.id === supId);
        if (sup) {
          if (payType === "Due Payment") {
            sup.payable = Math.max(0, Number(sup.payable || 0) - amount);
            sup.paidAmount = Number(sup.paidAmount || 0) + amount;
            sup.dueByStaff = dueStaff;
            sup.dueAccount = accKey;
          } else {
            sup.paidAmount = Number(sup.paidAmount || 0) + amount;
            sup.advanceByStaff = advStaff;
            sup.advanceAccount = accKey;
          }
        }
        if (ERP_DB.accounts[accKey]) {
          ERP_DB.accounts[accKey].balance = Math.max(0, Number(ERP_DB.accounts[accKey].balance || 0) - amount);
        }
        if (!Array.isArray(ERP_DB.paymentsLog)) ERP_DB.paymentsLog = [];
        ERP_DB.paymentsLog.unshift({
          id: "PAY-" + (ERP_DB.paymentsLog.length + 510),
          date: nowTimestamp().slice(0, 10),
          supplierId: sup ? sup.id : "SUP-GEN",
          supplierName: sup ? sup.name : "General Supplier",
          poId: "WT-VOUCHER",
          paymentType: payType,
          amount,
          accountKey: accKey,
          accountName: ERP_DB.accounts[accKey]?.name || accKey,
          advanceByStaff: advStaff,
          dueByStaff: dueStaff,
          details
        });
        e.target.reset();
        saveErpDatabase();
        renderAllErpModules();
        showToast(`Recorded ${payType} (${formatBdt(amount)}) — Adv: ${advStaff} • Due: ${dueStaff}`);
      });
    }

    // ========================================================================
    // DYNAMIC OPTION CREATOR FOR ALL DROPDOWNS (EXPENSE FIELDS, BANK/BKASH, STAFF, ROLES)
    // ========================================================================
    function populateAllDynamicOptionSelects() {
      if (!ERP_DB) return;

      // 1. Expense Categories
      const expCatSelect = document.getElementById("expCategory");
      if (expCatSelect) {
        const cur = expCatSelect.value;
        expCatSelect.innerHTML = (ERP_DB.expenseCategories || []).map(c => `<option value="${c}">${c}</option>`).join("") +
          `<option value="__ADD_NEW__">➕ + Create New Field of Expense...</option>`;
        if (cur && cur !== "__ADD_NEW__" && (ERP_DB.expenseCategories || []).includes(cur)) expCatSelect.value = cur;
      }

      // 2. Payment Accounts (Bank / bKash / Nagad / Cash) across Expense, Supplier, PO, POS, Working Team
      const accountEntries = Object.entries(ERP_DB.accounts || {});
      const accountIds = ["expAccount", "supAdvanceAccount", "supDueAccount", "spAdvanceAccount", "spDueAccount", "wtPayAccount"];
      accountIds.forEach(selId => {
        const el = document.getElementById(selId);
        if (!el) return;
        const cur = el.value;
        el.innerHTML = accountEntries.map(([k, v]) => `<option value="${k}">${v.name}</option>`).join("") +
          `<option value="__ADD_NEW__">➕ + Create New Bank / bKash / Wallet...</option>`;
        if (cur && cur !== "__ADD_NEW__" && ERP_DB.accounts[cur]) el.value = cur;
      });

      const posAccEl = document.getElementById("posAccountSelect");
      if (posAccEl) {
        const cur = posAccEl.value;
        posAccEl.innerHTML = `<option value="Cash on Delivery (COD)">Cash on Delivery (COD — Pending)</option>` +
          accountEntries.map(([k, v]) => `<option value="${v.name}">${v.name} (Paid)</option>`).join("") +
          `<option value="__ADD_NEW__">➕ + Create New Bank / bKash Option...</option>`;
        if (cur && cur !== "__ADD_NEW__") posAccEl.value = cur;
      }

      // 3. Responsible Staff Dropdowns across Expense, Supplier, PO, Working Team
      const staffList = ERP_DB.staffMembers || [];
      const staffSelectIds = ["expResponsibleStaff", "supAdvanceStaff", "supDueStaff", "spAdvanceStaff", "spDueStaff", "wtPayAdvStaff", "wtPayDueStaff"];
      staffSelectIds.forEach(selId => {
        const el = document.getElementById(selId);
        if (!el) return;
        const cur = el.value;
        el.innerHTML = staffList.map(s => `<option value="${s.name}">${s.name} — ${s.role.split("(")[0].trim()}</option>`).join("") +
          `<option value="__ADD_NEW__">➕ + Create New Staff Member...</option>`;
        if (cur && cur !== "__ADD_NEW__" && staffList.some(s => s.name === cur)) el.value = cur;
      });

      // 4. Staff Roles (in Working Team & Admin Login Gate)
      const roleSelectIds = ["wtStaffRole", "loginRoleSelect"];
      roleSelectIds.forEach(selId => {
        const el = document.getElementById(selId);
        if (!el) return;
        const cur = el.value;
        el.innerHTML = (ERP_DB.staffRoles || []).map(r => `<option value="${r}">${r}</option>`).join("") +
          (selId === "wtStaffRole" ? `<option value="__ADD_NEW__">➕ + Create New Role Option...</option>` : "");
        if (cur && cur !== "__ADD_NEW__" && (ERP_DB.staffRoles || []).includes(cur)) el.value = cur;
      });

      // 5. Supplier Categories & Payment Terms
      const supCatEl = document.getElementById("supCategory");
      if (supCatEl && Array.isArray(ERP_DB.supplierCategories)) {
        const cur = supCatEl.value;
        supCatEl.innerHTML = ERP_DB.supplierCategories.map(c => `<option value="${c}">${c}</option>`).join("") +
          `<option value="__ADD_NEW__">➕ + Create New Category Option...</option>`;
        if (cur && cur !== "__ADD_NEW__" && ERP_DB.supplierCategories.includes(cur)) supCatEl.value = cur;
      }
      const supTermsEl = document.getElementById("supTerms");
      if (supTermsEl && Array.isArray(ERP_DB.paymentTermsList)) {
        const cur = supTermsEl.value;
        supTermsEl.innerHTML = ERP_DB.paymentTermsList.map(t => `<option value="${t}">${t}</option>`).join("") +
          `<option value="__ADD_NEW__">➕ + Create New Payment Term...</option>`;
        if (cur && cur !== "__ADD_NEW__" && ERP_DB.paymentTermsList.includes(cur)) supTermsEl.value = cur;
      }
    }

    function handleDynamicSelectAddNew(selectEl, optionType) {
      if (!selectEl || selectEl.value !== "__ADD_NEW__") return;
      // Reset to first valid option while modal is open
      if (selectEl.options.length > 1) selectEl.selectedIndex = 0;
      openCreateCustomOptionModal(optionType, selectEl.id);
    }

    function openCreateCustomOptionModal(optionType, targetSelectId) {
      const configMap = {
        expenseCategory: {
          title: "Create New Field of Expense",
          desc: "Add a custom expense category/field (e.g., Studio Photography, Influencer PR, Office Rent, Packaging Ribbon):",
          label: "New Expense Category / Field Name",
          placeholder: "e.g., Influencer & Studio Shoot Expense"
        },
        account: {
          title: "Create New Bank / bKash / Payment Account",
          desc: "Add a new bank account, mobile wallet (bKash/Nagad/Rocket/Upay), or cash register for Advance, Due & Expense payments:",
          label: "Account / Wallet Name",
          placeholder: "e.g., BRAC Bank Corporate A/C or Rocket Merchant",
          extraLabel: "Opening Balance (BDT)",
          extraPlaceholder: "50000"
        },
        staff: {
          title: "Create New Responsible Staff Member",
          desc: "Add a new staff member to the Working Team so they can be assigned to Expenses, Advance Payments, and Due Settlements:",
          label: "Staff Full Name",
          placeholder: "e.g., Sabrina Rahman",
          extraLabel: "Assigned Role / Designation",
          extraPlaceholder: "Accounts & Procurement Executive"
        },
        staffRole: {
          title: "Create New Working Team Role",
          desc: "Define a new operational role for your Working Team directory:",
          label: "Role Title",
          placeholder: "e.g., Senior Quality & Packaging Supervisor"
        },
        supplierCategory: {
          title: "Create New Supplier Category",
          desc: "Add a new product/sourcing category for suppliers:",
          label: "Supplier Category Name",
          placeholder: "e.g., Artisanal Jewelry & Watches"
        },
        paymentTerms: {
          title: "Create New Payment Terms Option",
          desc: "Add custom supplier payment terms:",
          label: "Payment Terms Label",
          placeholder: "e.g., 30% Advance • 70% After QC"
        }
      };

      const cfg = configMap[optionType] || configMap.expenseCategory;
      openModal({
        title: cfg.title,
        message: cfg.desc,
        confirmText: "+ Save & Select Option",
        customHtml: `
          <div style="display:flex;flex-direction:column;gap:10px;">
            <div>
              <label style="font-size:11px;font-weight:700;color:var(--text-muted);display:block;margin-bottom:4px;">${cfg.label}</label>
              <input type="text" id="customOptPrimaryInput" class="info-edit-input" placeholder="${cfg.placeholder}" required />
            </div>
            ${cfg.extraLabel ? `
              <div>
                <label style="font-size:11px;font-weight:700;color:var(--text-muted);display:block;margin-bottom:4px;">${cfg.extraLabel}</label>
                <input type="${optionType === 'account' ? 'number' : 'text'}" id="customOptExtraInput" class="info-edit-input" value="${cfg.extraPlaceholder || ''}" placeholder="${cfg.extraPlaceholder || ''}" />
              </div>
            ` : ""}
          </div>
        `,
        onConfirm: () => {
          const val = document.getElementById("customOptPrimaryInput")?.value?.trim();
          const extra = document.getElementById("customOptExtraInput")?.value?.trim();
          if (!val) {
            showToast("Please enter a valid name");
            return;
          }
          let newSelectValue = val;
          if (optionType === "expenseCategory") {
            if (!Array.isArray(ERP_DB.expenseCategories)) ERP_DB.expenseCategories = [];
            if (!ERP_DB.expenseCategories.includes(val)) ERP_DB.expenseCategories.push(val);
          } else if (optionType === "account") {
            const key = "acc_" + val.toLowerCase().replace(/[^a-z0-9]+/g, "_").slice(0, 18) + "_" + (Date.now() % 1000);
            ERP_DB.accounts[key] = { name: val, balance: Math.max(0, Number(extra) || 25000) };
            newSelectValue = targetSelectId === "posAccountSelect" ? val : key;
          } else if (optionType === "staff") {
            if (!Array.isArray(ERP_DB.staffMembers)) ERP_DB.staffMembers = [];
            const roleName = extra || "Operations & Accounts Executive";
            if (!ERP_DB.staffMembers.some(s => s.name.toLowerCase() === val.toLowerCase())) {
              ERP_DB.staffMembers.push({
                id: "STF-" + (ERP_DB.staffMembers.length + 106),
                name: val,
                phone: "+880 1711-000000",
                email: val.toLowerCase().replace(/[^a-z0-9]/g, "") + "@tehzib.com",
                role: roleName,
                dept: "Operations",
                status: "Active",
                accesses: ["Dashboard & BI", "Suppliers & PO", "Expenses & Payments"]
              });
            }
          } else if (optionType === "staffRole") {
            if (!Array.isArray(ERP_DB.staffRoles)) ERP_DB.staffRoles = [];
            if (!ERP_DB.staffRoles.includes(val)) ERP_DB.staffRoles.push(val);
          } else if (optionType === "supplierCategory") {
            if (!Array.isArray(ERP_DB.supplierCategories)) ERP_DB.supplierCategories = [];
            if (!ERP_DB.supplierCategories.includes(val)) ERP_DB.supplierCategories.push(val);
          } else if (optionType === "paymentTerms") {
            if (!Array.isArray(ERP_DB.paymentTermsList)) ERP_DB.paymentTermsList = [];
            if (!ERP_DB.paymentTermsList.includes(val)) ERP_DB.paymentTermsList.push(val);
          }

          saveErpDatabase();
          populateAllDynamicOptionSelects();
          renderAllErpModules();
          const targetEl = document.getElementById(targetSelectId);
          if (targetEl) targetEl.value = newSelectValue;
          showToast(`Created & selected "${val}"!`);
        }
      });
      setTimeout(() => document.getElementById("customOptPrimaryInput")?.focus(), 60);
    }

    // ========================================================================
    // DYNAMIC FOOTER SECTIONS & POPUP INFO / MESSAGES CMS FUNCTIONS
    // ========================================================================
    function renderFooterSectionsCmsManager() {
      const sections = ERP_DB?.cms?.footerSections || [];
      const secSelect = document.getElementById("cmsFooterItemSecSelect");
      if (secSelect) {
        const cur = secSelect.value;
        secSelect.innerHTML = sections.map(s => `<option value="${s.id}">${s.title}</option>`).join("");
        if (cur && sections.some(s => s.id === cur)) secSelect.value = cur;
      }

      const catSelect = document.getElementById("cmsFooterItemTargetCat");
      if (catSelect && ERP_DB?.cms?.categories) {
        catSelect.innerHTML = ERP_DB.cms.categories.map(c => `<option value="${c.name}">${c.name}</option>`).join("");
      }

      const grid = document.getElementById("cmsFooterSectionsManagerGrid");
      if (!grid) return;
      grid.innerHTML = sections.map(sec => `
        <div style="background:var(--bg-card);border:1px solid var(--border-color);border-radius:12px;padding:14px;display:flex;flex-direction:column;justify-content:space-between;gap:12px;">
          <div>
            <div style="display:flex;justify-content:space-between;align-items:center;padding-bottom:8px;border-bottom:1px solid var(--border-color);margin-bottom:10px;">
              <div>
                <div style="font-weight:800;font-size:14px;color:var(--text-main);">${sec.title}</div>
                <div style="font-size:10.5px;color:var(--text-muted);">${(sec.items || []).length} Footer Links</div>
              </div>
              <div style="display:flex;gap:4px;">
                <button type="button" class="btn btn-sm btn-secondary" onclick="editFooterSectionColumn('${sec.id}')">✎ Rename</button>
                <button type="button" class="btn btn-sm btn-danger" onclick="deleteFooterSectionColumn('${sec.id}')">✕ Delete Col</button>
              </div>
            </div>
            <div style="display:flex;flex-direction:column;gap:8px;">
              ${(sec.items || []).map(item => `
                <div style="padding:8px 10px;border-radius:8px;background:var(--bg-elevated);border:1px solid var(--border-color);font-size:11.5px;">
                  <div style="display:flex;justify-content:space-between;align-items:center;gap:6px;">
                    <strong>${item.label}</strong>
                    <span class="badge ${item.type === 'category' ? 'badge-blue' : 'badge-rose'}" style="font-size:9.5px;">
                      ${item.type === 'category' ? 'Category: ' + (item.targetCat || 'Clothing') : 'Info Popup'}
                    </span>
                  </div>
                  <div style="font-size:10.5px;color:var(--text-muted);margin:4px 0;line-height:1.4;">
                    <strong>${item.modalTitle || item.label}:</strong> ${(item.message || "").slice(0, 95)}${(item.message || "").length > 95 ? "..." : ""}
                  </div>
                  <div style="display:flex;gap:6px;margin-top:6px;">
                    <button type="button" class="btn btn-sm btn-secondary" style="padding:2px 8px;font-size:10px;" onclick="editFooterLinkItem('${sec.id}', '${item.id}')">✎ Edit Info / Msg</button>
                    <button type="button" class="btn btn-sm btn-secondary" style="padding:2px 8px;font-size:10px;" onclick="previewFooterInfoPopup('${sec.id}', '${item.id}')">👁 Preview Box</button>
                    <button type="button" class="btn btn-sm btn-danger" style="padding:2px 8px;font-size:10px;" onclick="deleteFooterLinkItem('${sec.id}', '${item.id}')">Delete</button>
                  </div>
                </div>
              `).join("") || `<div style="font-size:11px;color:var(--text-muted);padding:8px 0;">No links yet — add one using the form above.</div>`}
            </div>
          </div>
          <button type="button" class="btn btn-sm btn-rose" style="width:100%;justify-content:center;" onclick="prepareNewFooterItemInSection('${sec.id}')">
            + Add New Link / Info to "${sec.title}"
          </button>
        </div>
      `).join("");
    }

    function toggleFooterItemTypeFields() {
      const t = document.getElementById("cmsFooterItemType")?.value || "info";
      const catGrp = document.getElementById("cmsFooterItemCatGroup");
      if (catGrp) catGrp.style.display = t === "category" ? "block" : "none";
    }

    function editFooterSectionColumn(secId) {
      const sec = (ERP_DB.cms.footerSections || []).find(s => s.id === secId);
      if (!sec) return;
      document.getElementById("cmsFooterSecEditId").value = sec.id;
      document.getElementById("cmsFooterSecTitle").value = sec.title;
      const btn = document.getElementById("cmsFooterSecSubmitBtn");
      if (btn) btn.textContent = `✓ Update "${sec.title}"`;
      document.getElementById("cmsFooterSecTitle")?.focus();
      showToast(`Editing Footer Column "${sec.title}"`);
    }

    function resetFooterSectionColForm() {
      if (document.getElementById("cmsFooterSecEditId")) document.getElementById("cmsFooterSecEditId").value = "";
      if (document.getElementById("cmsFooterSecTitle")) document.getElementById("cmsFooterSecTitle").value = "";
      const btn = document.getElementById("cmsFooterSecSubmitBtn");
      if (btn) btn.textContent = "+ Save Footer Section";
    }

    function deleteFooterSectionColumn(secId) {
      const sec = (ERP_DB.cms.footerSections || []).find(s => s.id === secId);
      if (!sec) return;
      ERP_DB.cms.footerSections = ERP_DB.cms.footerSections.filter(s => s.id !== secId);
      saveErpDatabase();
      renderAll();
      showToast(`Deleted Footer Section "${sec.title}" from Storefront`);
    }

    function prepareNewFooterItemInSection(secId) {
      resetFooterLinkItemForm();
      const sel = document.getElementById("cmsFooterItemSecSelect");
      if (sel) sel.value = secId;
      document.getElementById("cmsFooterItemLabel")?.focus();
      showToast("Ready to insert new link & info message into selected section");
    }

    function editFooterLinkItem(secId, itemId) {
      const sec = (ERP_DB.cms.footerSections || []).find(s => s.id === secId);
      if (!sec) return;
      const item = (sec.items || []).find(i => i.id === itemId);
      if (!item) return;
      document.getElementById("cmsFooterItemEditSecId").value = sec.id;
      document.getElementById("cmsFooterItemEditItemId").value = item.id;
      document.getElementById("cmsFooterItemSecSelect").value = sec.id;
      document.getElementById("cmsFooterItemLabel").value = item.label || "";
      document.getElementById("cmsFooterItemType").value = item.type || "info";
      document.getElementById("cmsFooterItemModalTitle").value = item.modalTitle || item.label || "";
      document.getElementById("cmsFooterItemMessage").value = item.message || "";
      if (document.getElementById("cmsFooterItemTargetCat") && item.targetCat) {
        document.getElementById("cmsFooterItemTargetCat").value = item.targetCat;
      }
      toggleFooterItemTypeFields();
      const btn = document.getElementById("cmsFooterItemSubmitBtn");
      if (btn) btn.textContent = `✓ Update "${item.label}" Info & Message`;
      document.getElementById("cmsFooterItemMessage")?.focus();
      showToast(`Loaded "${item.label}" into Footer Info Editor`);
    }

    function resetFooterLinkItemForm() {
      if (document.getElementById("cmsFooterItemEditSecId")) document.getElementById("cmsFooterItemEditSecId").value = "";
      if (document.getElementById("cmsFooterItemEditItemId")) document.getElementById("cmsFooterItemEditItemId").value = "";
      if (document.getElementById("cmsFooterItemLabel")) document.getElementById("cmsFooterItemLabel").value = "";
      if (document.getElementById("cmsFooterItemModalTitle")) document.getElementById("cmsFooterItemModalTitle").value = "";
      if (document.getElementById("cmsFooterItemMessage")) document.getElementById("cmsFooterItemMessage").value = "";
      if (document.getElementById("cmsFooterItemType")) document.getElementById("cmsFooterItemType").value = "info";
      toggleFooterItemTypeFields();
      const btn = document.getElementById("cmsFooterItemSubmitBtn");
      if (btn) btn.textContent = "+ Save Footer Link & Info Message";
    }

    function deleteFooterLinkItem(secId, itemId) {
      const sec = (ERP_DB.cms.footerSections || []).find(s => s.id === secId);
      if (!sec) return;
      sec.items = (sec.items || []).filter(i => i.id !== itemId);
      saveErpDatabase();
      renderAll();
      showToast("Removed link from Footer section");
    }

    function previewFooterInfoPopup(secId, itemId) {
      const sec = (ERP_DB.cms.footerSections || []).find(s => s.id === secId);
      const item = sec ? (sec.items || []).find(i => i.id === itemId) : null;
      if (!item) return;
      openModal({
        title: item.modalTitle || item.label,
        message: item.message || "Tehzib Lifestyle Bangladesh official information.",
        confirmText: "Close"
      });
    }

    // ========================================================================
    // VIEW 8: WORKING TEAM MODULE (STAFF & ROLES, EXPENSE REPORT, PAYMENT REPORT)
    // ========================================================================
    function switchWtTab(tabKey) {
      document.querySelectorAll("[data-wt-tab]").forEach(b => {
        b.classList.toggle("active", b.getAttribute("data-wt-tab") === tabKey);
      });
      ["staff", "expenses", "payments"].forEach(k => {
        const el = document.getElementById("wtTab-" + k);
        if (el) el.style.display = k === tabKey ? "block" : "none";
      });
      syncAllTopTableScrollbars();
    }

    function renderWorkingTeamModule() {
      const staffList = ERP_DB.staffMembers || [];
      const expenses = ERP_DB.expenses || [];
      const payments = ERP_DB.paymentsLog || [];

      const totalExpAmt = expenses.reduce((s, x) => s + (Number(x.amount) || 0), 0);
      const totalAdvAmt = payments.filter(p => p.paymentType === "Advance Payment").reduce((s, x) => s + (Number(x.amount) || 0), 0);
      const totalDueAmt = payments.filter(p => p.paymentType === "Due Payment").reduce((s, x) => s + (Number(x.amount) || 0), 0);

      const kpiEl = document.getElementById("workingTeamKpiGrid");
      if (kpiEl) {
        kpiEl.innerHTML = `
          <div class="kpi-card">
            <div class="kpi-label"><span>Active Working Team</span><span>👥</span></div>
            <div class="kpi-value mono">${staffList.length} Staff</div>
            <div class="kpi-sub"><span>${(ERP_DB.staffRoles || []).length} Operational Roles</span><span class="badge badge-green">RBAC Active</span></div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label"><span>Team Expenses Logged</span><span>🧾</span></div>
            <div class="kpi-value mono">${formatBdt(totalExpAmt)}</div>
            <div class="kpi-sub"><span>${expenses.length} Vouchers Tracked by Staff</span><span class="badge badge-orange">Expense Report</span></div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label"><span>Advance Paid by Staff</span><span>💳</span></div>
            <div class="kpi-value mono">${formatBdt(totalAdvAmt)}</div>
            <div class="kpi-sub"><span>Tracked by Responsible Person</span><span class="badge badge-blue">Advance Ledger</span></div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label"><span>Due Settled by Staff</span><span>🏦</span></div>
            <div class="kpi-value mono">${formatBdt(totalDueAmt)}</div>
            <div class="kpi-sub"><span>Tracked by Responsible Person</span><span class="badge badge-rose">Due Settlement</span></div>
          </div>
        `;
      }

      // Populate Supplier Select inside Working Team Payment Form
      const wtSupSel = document.getElementById("wtPaySupplier");
      if (wtSupSel && Array.isArray(ERP_DB.suppliers)) {
        const cur = wtSupSel.value;
        wtSupSel.innerHTML = ERP_DB.suppliers.map(s => `<option value="${s.id}">${s.name} (Paid: ${formatBdt(s.paidAmount || 0)} • Due: ${formatBdt(s.payable || 0)})</option>`).join("");
        if (cur && ERP_DB.suppliers.some(s => s.id === cur)) wtSupSel.value = cur;
      }

      // Populate Filter Dropdowns in Working Team Expense & Payment Reports
      const expStaffFilter = document.getElementById("wtExpFilterStaff");
      if (expStaffFilter) {
        const cur = expStaffFilter.value || "ALL";
        expStaffFilter.innerHTML = `<option value="ALL">All Responsible Staff</option>` +
          staffList.map(s => `<option value="${s.name}">${s.name}</option>`).join("");
        expStaffFilter.value = cur;
      }
      const expCatFilter = document.getElementById("wtExpFilterCategory");
      if (expCatFilter) {
        const cur = expCatFilter.value || "ALL";
        expCatFilter.innerHTML = `<option value="ALL">All Expense Fields</option>` +
          (ERP_DB.expenseCategories || []).map(c => `<option value="${c}">${c}</option>`).join("");
        expCatFilter.value = cur;
      }
      const payStaffFilter = document.getElementById("wtPayFilterStaff");
      if (payStaffFilter) {
        const cur = payStaffFilter.value || "ALL";
        payStaffFilter.innerHTML = `<option value="ALL">All Responsible Staff</option>` +
          staffList.map(s => `<option value="${s.name}">${s.name}</option>`).join("");
        payStaffFilter.value = cur;
      }

      // 1. Render Staff Directory Table
      const staffBody = document.getElementById("workingTeamStaffTableBody");
      if (staffBody) {
        staffBody.innerHTML = staffList.map(st => {
          const stExps = expenses.filter(e => e.responsibleStaffName === st.name);
          const stExpTotal = stExps.reduce((sum, e) => sum + (Number(e.amount) || 0), 0);
          const stAdvTotal = payments.filter(p => p.advanceByStaff === st.name && p.paymentType === "Advance Payment").reduce((sum, p) => sum + (Number(p.amount) || 0), 0);
          const stDueTotal = payments.filter(p => p.dueByStaff === st.name && p.paymentType === "Due Payment").reduce((sum, p) => sum + (Number(p.amount) || 0), 0);
          const accessPills = (st.accesses || []).map(a => `<span class="badge badge-blue" style="font-size:9.5px;margin:1px;">${a}</span>`).join(" ");
          return `
            <tr>
              <td>
                <div style="font-weight:700;">${st.name}</div>
                <div class="mono" style="font-size:10.5px;color:var(--accent-rose-deep);">${st.id} • ${st.phone}</div>
                <div class="mono" style="font-size:10px;color:var(--text-muted);">${st.email}</div>
              </td>
              <td>
                <span class="badge badge-rose">${st.role}</span>
                <div style="font-size:10.5px;color:var(--text-muted);margin-top:3px;">Dept: ${st.dept || "Operations"}</div>
              </td>
              <td style="max-width:260px;">${accessPills}</td>
              <td class="mono">
                <div style="font-weight:700;color:var(--danger);">${formatBdt(stExpTotal)}</div>
                <div style="font-size:10px;color:var(--text-muted);">${stExps.length} expense(s)</div>
              </td>
              <td class="mono" style="font-weight:700;color:var(--status-green);">${formatBdt(stAdvTotal)}</td>
              <td class="mono" style="font-weight:700;color:var(--accent-rose-deep);">${formatBdt(stDueTotal)}</td>
              <td>
                <span class="badge ${st.status === 'Active' ? 'badge-green' : 'badge-orange'}">${st.status || 'Active'}</span>
                <div style="display:flex;gap:4px;margin-top:6px;flex-wrap:wrap;">
                  <button type="button" class="btn btn-sm btn-secondary" onclick="editWorkingTeamStaff('${st.id}')">✎ Edit Role/Access</button>
                  <button type="button" class="btn btn-sm btn-rose" onclick="filterTeamReportByStaff('${st.name}')">📊 Reports</button>
                </div>
              </td>
            </tr>
          `;
        }).join("");
      }

      // 2. Render Staff-Wise Expense Summary Cards & Filtered Expense Report Table
      const summaryCardsEl = document.getElementById("wtStaffExpenseSummaryCards");
      if (summaryCardsEl) {
        summaryCardsEl.innerHTML = staffList.map(st => {
          const stExps = expenses.filter(e => e.responsibleStaffName === st.name);
          const total = stExps.reduce((s, e) => s + (Number(e.amount) || 0), 0);
          return `
            <div style="padding:12px 14px;border-radius:10px;background:var(--bg-card);border:1px solid var(--border-color);">
              <div style="display:flex;justify-content:space-between;align-items:center;">
                <strong style="font-size:13px;">👤 ${st.name}</strong>
                <span class="badge badge-orange">${stExps.length} Vouchers</span>
              </div>
              <div style="font-size:10.5px;color:var(--text-muted);margin:2px 0 6px;">${st.role}</div>
              <div class="mono" style="font-size:16px;font-weight:800;color:var(--danger);">${formatBdt(total)}</div>
            </div>
          `;
        }).join("");
      }

      const selExpStaff = document.getElementById("wtExpFilterStaff")?.value || "ALL";
      const selExpCat = document.getElementById("wtExpFilterCategory")?.value || "ALL";
      const filteredExps = expenses.filter(e =>
        (selExpStaff === "ALL" || e.responsibleStaffName === selExpStaff) &&
        (selExpCat === "ALL" || e.category === selExpCat)
      );

      const wtExpBody = document.getElementById("wtExpenseReportTableBody");
      if (wtExpBody) {
        wtExpBody.innerHTML = filteredExps.map(ex => `
          <tr>
            <td>
              <div class="mono" style="font-weight:700;">${ex.id}</div>
              <div style="font-size:10.5px;color:var(--text-muted);">${ex.date}</div>
            </td>
            <td>
              <div style="font-weight:700;">👤 ${ex.responsibleStaffName || "Nadia Sultana"}</div>
              <div style="font-size:10.5px;color:var(--text-muted);">${ex.responsibleStaffRole || "Operations"}</div>
            </td>
            <td style="font-weight:700;">${ex.title}</td>
            <td style="font-size:11.5px;color:var(--text-secondary);max-width:280px;">${ex.details || ex.title}</td>
            <td><span class="badge badge-orange">${ex.category}</span></td>
            <td><span class="badge badge-blue">${ERP_DB.accounts[ex.account]?.name || ex.account}</span></td>
            <td class="mono" style="font-weight:700;color:var(--danger);">${formatBdt(ex.amount)}</td>
          </tr>
        `).join("") || `<tr><td colspan="7" style="text-align:center;padding:18px;color:var(--text-muted);">No matching expense records found for selected filter.</td></tr>`;
      }

      // 3. Render Working Team Payment Report (Advance Paid & Due Paid by Responsible Staff)
      const selPayStaff = document.getElementById("wtPayFilterStaff")?.value || "ALL";
      const selPayType = document.getElementById("wtPayFilterType")?.value || "ALL";
      const filteredPays = payments.filter(p =>
        (selPayStaff === "ALL" || p.advanceByStaff === selPayStaff || p.dueByStaff === selPayStaff) &&
        (selPayType === "ALL" || p.paymentType === selPayType)
      );

      const wtPayBody = document.getElementById("wtPaymentReportTableBody");
      if (wtPayBody) {
        wtPayBody.innerHTML = filteredPays.map(p => `
          <tr>
            <td>
              <div class="mono" style="font-weight:700;">${p.id}</div>
              <div style="font-size:10.5px;color:var(--text-muted);">${p.date} • <span class="mono">${p.poId || "PO"}</span></div>
            </td>
            <td style="font-weight:700;">${p.supplierName}</td>
            <td>
              <span class="badge ${p.paymentType === 'Advance Payment' ? 'badge-green' : 'badge-rose'}">${p.paymentType}</span>
            </td>
            <td>
              <div style="font-weight:700;color:var(--status-green);">👤 ${p.advanceByStaff || "Nadia Sultana"}</div>
              <div style="font-size:10px;color:var(--text-muted);">Paid Advance</div>
            </td>
            <td>
              <div style="font-weight:700;color:var(--accent-rose-deep);">👤 ${p.dueByStaff || "Farhan Islam"}</div>
              <div style="font-size:10px;color:var(--text-muted);">Paid Due</div>
            </td>
            <td><span class="badge badge-blue">${p.accountName || ERP_DB.accounts[p.accountKey]?.name || p.accountKey}</span></td>
            <td style="font-size:11.5px;color:var(--text-secondary);max-width:250px;">${p.details || "—"}</td>
            <td class="mono" style="font-weight:800;">${formatBdt(p.amount)}</td>
          </tr>
        `).join("") || `<tr><td colspan="8" style="text-align:center;padding:18px;color:var(--text-muted);">No matching payment records found for selected filter.</td></tr>`;
      }
      syncAllTopTableScrollbars();
    }

    function editWorkingTeamStaff(staffId) {
      const st = (ERP_DB.staffMembers || []).find(x => x.id === staffId);
      if (!st) return;
      switchWtTab("staff");
      document.getElementById("wtStaffEditId").value = st.id;
      document.getElementById("wtStaffName").value = st.name || "";
      document.getElementById("wtStaffPhone").value = st.phone || "";
      document.getElementById("wtStaffEmail").value = st.email || "";
      document.getElementById("wtStaffRole").value = st.role || "";
      document.getElementById("wtStaffDept").value = st.dept || "";
      document.getElementById("wtStaffStatus").value = st.status || "Active";
      const accSet = new Set(st.accesses || []);
      document.querySelectorAll("#wtAccessCheckboxes input[type='checkbox']").forEach(cb => {
        cb.checked = accSet.has(cb.value);
      });
      const btn = document.getElementById("wtStaffSubmitBtn");
      if (btn) btn.textContent = `✓ Update "${st.name}" Role & Access`;
      document.getElementById("wtStaffName")?.focus();
      showToast(`Loaded "${st.name}" into Staff & Access Editor`);
    }

    function resetWorkingTeamStaffForm() {
      if (document.getElementById("wtStaffEditId")) document.getElementById("wtStaffEditId").value = "";
      if (document.getElementById("wtStaffName")) document.getElementById("wtStaffName").value = "";
      if (document.getElementById("wtStaffPhone")) document.getElementById("wtStaffPhone").value = "";
      if (document.getElementById("wtStaffEmail")) document.getElementById("wtStaffEmail").value = "";
      const btn = document.getElementById("wtStaffSubmitBtn");
      if (btn) btn.textContent = "+ Save Staff & Assign Role / Access";
    }

    function filterTeamReportByStaff(staffName) {
      switchWtTab("expenses");
      const expFilter = document.getElementById("wtExpFilterStaff");
      if (expFilter) expFilter.value = staffName;
      const payFilter = document.getElementById("wtPayFilterStaff");
      if (payFilter) payFilter.value = staffName;
      renderWorkingTeamModule();
      showToast(`Filtered Working Team Expense & Payment Reports for ${staffName}`);
    }

    // ========================================================================
    // UNIFIED FULL-STACK SYNCHRONIZATION BRIDGE (STOREFRONT <-> OMS)
    // ========================================================================
    window.__erpAdminAuthenticated = false;
    window.__pendingErpTargetView = "";

    function seedFullCatalogIntoErpDb() {
      if (window.__TEHZIB_INITIAL_SERVER_STATE__ && Array.isArray(ERP_DB.products) && ERP_DB.products.length >= 18) {
        return;
      }
      const supplierCycle = ["SUP-03", "SUP-03", "SUP-02", "SUP-02", "SUP-01", "SUP-03", "SUP-02", "SUP-01", "SUP-04"];
      const catCodeMap = { "Clothing": "CL", "Shoes": "SH", "Fashion": "FA", "Accessories": "AC", "Mom & Kids": "MK" };

      // 1. Seed the exact Pink Claw Clip example from Request #10 (5 initial, 2 sold = 3 available)
      const existingClaw = ERP_DB.products.find(p => p.id === "p_claw" || p.sku === "TEH-ACC-CLP-PNK");
      const pinkClawProduct = existingClaw || {
        id: "p_claw",
        sku: "TEH-ACC-CLP-PNK",
        title: "Signature Parisian Pink Claw Clip",
        category: "Accessories",
        subcategory: "Hair Clips & Pins",
        supplierId: "SUP-01",
        costPrice: 180,
        landedCost: 210,
        wholesalePrice: 280,
        price: 450,
        oldPrice: 590,
        available: 3,
        reserved: 0,
        sold: 2,
        returned: 0,
        damaged: 0,
        reorderThreshold: 3,
        isPublished: true,
        statusLabel: "Active",
        isDeal: true,
        isNew: true,
        isJustForYou: true,
        specialTab: "Accessories",
        variants: ["Blush Pink", "Ivory Pearl", "Tortoiseshell"],
        image: IMG.necklace,
        description: "Hand-polished cellulose acetate claw clip in Tehzib's signature Parisian Blush Pink with inlaid pearl accents and high-tension spring.",
        specs: "Material: Cellulose Acetate & Reinforced Spring • Length: 11cm • Variant SKU: TEH-ACC-CLP-PNK",
        seoKeywords: "pink claw clip bangladesh, hair accessories dhaka, tehzib claw clip",
        seoDescription: "Shop Tehzib's Signature Parisian Pink Claw Clip with non-slip grip and pearl finish.",
        geoKeywords: "Uttara Sector 12 Dhaka, Gulshan, Banani, Dhanmondi"
      };
      pinkClawProduct.id = "p_claw";
      pinkClawProduct.sku = "TEH-ACC-CLP-PNK";

      // 2. Seed all Storefront products
      const fullPublishedProducts = DEFAULT_PRODUCTS.map((dp, idx) => {
        const existing = ERP_DB.products.find(ep => ep.id === dp.id);
        const catCode = catCodeMap[dp.category] || "THZ";
        const sku = existing?.sku || `THZ-${catCode}-${String(idx + 1).padStart(3, "0")}`;
        const supId = existing?.supplierId || supplierCycle[idx % supplierCycle.length];
        const retail = existing ? Number(existing.price) : Number(dp.price);
        const cost = existing?.costPrice ? Number(existing.costPrice) : Math.round(retail * 0.45);
        const landed = existing?.landedCost ? Number(existing.landedCost) : Math.round(cost * 1.12);
        const wholesale = existing?.wholesalePrice ? Number(existing.wholesalePrice) : Math.round(retail * 0.72);

        return {
          id: dp.id,
          sku,
          title: existing ? existing.title : dp.title,
          category: existing ? existing.category : dp.category,
          subcategory: existing ? existing.subcategory : dp.subcategory,
          supplierId: supId,
          costPrice: cost,
          landedCost: landed,
          wholesalePrice: wholesale,
          price: retail,
          oldPrice: existing !== undefined ? existing.oldPrice : dp.oldPrice,
          available: existing !== undefined ? Number(existing.available) : Number(dp.available),
          reserved: existing !== undefined ? Number(existing.reserved || 0) : (dp.id === "p5" || dp.id === "p3" ? 1 : 0),
          sold: existing !== undefined ? Number(existing.sold) : Number(dp.sold),
          returned: existing !== undefined ? Number(existing.returned || 0) : 0,
          damaged: existing !== undefined ? Number(existing.damaged || 0) : 0,
          reorderThreshold: existing?.reorderThreshold || 5,
          isPublished: existing !== undefined ? Boolean(existing.isPublished) : true,
          statusLabel: existing?.statusLabel || "Active",
          isDeal: existing !== undefined ? Boolean(existing.isDeal) : Boolean(dp.isDeal),
          isNew: existing !== undefined ? Boolean(existing.isNew) : ([0, 1, 4, 5, 8, 12].includes(idx) ? true : Boolean(dp.isNew)),
          isJustForYou: existing !== undefined ? Boolean(existing.isJustForYou) : ([0, 2, 3, 4, 6, 7, 13].includes(idx) ? true : Boolean(dp.isJustForYou)),
          specialTab: dp.specialTab || "Best Sellers",
          variants: existing?.variants || dp.variants || ["Standard"],
          image: existing?.image || dp.image,
          description: existing?.description || dp.description,
          specs: existing?.specs || dp.specs,
          seoKeywords: existing?.seoKeywords || `${dp.title.toLowerCase()}, ${dp.subcategory.toLowerCase()} bangladesh, tehzib`,
          seoDescription: existing?.seoDescription || `Shop ${dp.title} at Tehzib Lifestyle Bangladesh.`,
          geoKeywords: existing?.geoKeywords || "Uttara Sector 12 Dhaka, Gulshan, Banani, Dhanmondi, Bangladesh"
        };
      });

      const draftP18 = ERP_DB.products.find(p => p.id === "p18" || p.sku === "THZ-FA-007") || {
        id: "p18",
        sku: "THZ-FA-007",
        title: "Champagne Crystal Box Clutch (Awaiting Shipment)",
        category: "Fashion",
        subcategory: "Evening Clutches",
        supplierId: "SUP-02",
        costPrice: 1480,
        landedCost: 1600,
        wholesalePrice: 2400,
        price: 3390,
        oldPrice: 3990,
        available: 0,
        reserved: 0,
        sold: 0,
        returned: 0,
        damaged: 0,
        reorderThreshold: 5,
        isPublished: false,
        statusLabel: "Draft",
        isDeal: true,
        isNew: true,
        isJustForYou: true,
        specialTab: "Shoes & Fashion",
        variants: ["Champagne Gold", "Rose Quartz"],
        image: IMG.champagne_bag,
        description: "Hand-set crystal frame evening clutch in brushed champagne satin with detachable serpentine chain.",
        specs: "Frame: Brushed Brass • Exterior: Duchesse Satin • Dimensions: 20cm x 12cm x 5cm",
        seoKeywords: "bridal clutch bangladesh, champagne evening bag dhaka, tehzib clutch",
        seoDescription: "Champagne Crystal Box Clutch with detachable chain for weddings and festive galas.",
        geoKeywords: "Uttara Sector 12 Dhaka, Gulshan 2, Banani Dhaka"
      };
      draftP18.id = "p18";

      const draftP19 = ERP_DB.products.find(p => p.id === "p19" || p.sku === "THZ-AC-008") || {
        id: "p19",
        sku: "THZ-AC-008",
        title: "Freshwater Pearl & Gold Layered Choker (Awaiting Shipment)",
        category: "Accessories",
        subcategory: "Pearl & Gold Jewelry",
        supplierId: "SUP-01",
        costPrice: 790,
        landedCost: 890,
        wholesalePrice: 1350,
        price: 1890,
        oldPrice: 2300,
        available: 0,
        reserved: 0,
        sold: 0,
        returned: 0,
        damaged: 0,
        reorderThreshold: 5,
        isPublished: false,
        statusLabel: "Draft",
        isDeal: false,
        isNew: true,
        isJustForYou: true,
        specialTab: "Accessories",
        variants: ["Adjustable 16-18 inch"],
        image: IMG.necklace,
        description: "Double-strand baroque freshwater pearl choker with 18K gold-vermeil toggle clasp.",
        specs: "Pearls: Cultured Freshwater Pearls • Clasp: 18K Gold Plated Brass",
        seoKeywords: "pearl necklace bangladesh, layered choker dhaka, tehzib jewelry",
        seoDescription: "Hand-strung Freshwater Pearl & Gold Layered Choker by Tehzib.",
        geoKeywords: "Uttara Sector 12 Dhaka, Dhanmondi, Banani, Sylhet"
      };
      draftP19.id = "p19";

      const knownIds = new Set(["p_claw", ...fullPublishedProducts.map(x => x.id), "p18", "p19"]);
      const customAdded = ERP_DB.products.filter(x => !knownIds.has(x.id) && x.sku !== "TEH-ACC-CLP-PNK" && x.sku !== "THZ-FA-007" && x.sku !== "THZ-AC-008");

      ERP_DB.products = [pinkClawProduct, ...customAdded, ...fullPublishedProducts, draftP18, draftP19];
    }

    function syncErpToStorefront() {
      if (!ERP_DB || !ERP_DB.products) return;

      const enabledCatNames = new Set(
        (ERP_DB.cms?.categories || []).filter(c => c.enabled !== false).map(c => c.name)
      );

      const publishedList = ERP_DB.products.filter(p => p.isPublished !== false && (enabledCatNames.size === 0 || enabledCatNames.has(p.category)));
      PRODUCTS = publishedList.map(p => {
        const imgUrl = p.image || IMG.silk_blouse;
        const oldP = p.oldPrice && Number(p.oldPrice) > Number(p.price) ? Number(p.oldPrice) : null;
        const discPct = oldP ? `-${Math.round(((oldP - p.price) / oldP) * 100)}%` : null;
        const avail = Math.max(0, Number(p.available || 0));
        return {
          ...p,
          oldPrice: oldP,
          discount: discPct,
          available: avail,
          sold: Number(p.sold || 0),
          stockStatus: avail <= 0 ? "OUT OF STOCK" : (avail <= Number(p.reorderThreshold || 5) ? "LOW STOCK" : "IN STOCK"),
          rating: p.rating || 4.9,
          reviewsCount: p.reviewsCount || 84,
          specialTab: p.specialTab || (p.category === "Mom & Kids" ? "Mom & Kids" : (p.category === "Accessories" ? "Accessories" : "Best Sellers")),
          variants: Array.isArray(p.variants) && p.variants.length ? p.variants : ["Standard"],
          image: imgUrl,
          gallery: (Array.isArray(p.gallery) && p.gallery.length) ? p.gallery : [imgUrl, IMG.clothing_set, IMG.necklace, IMG.cream_bag]
        };
      });

      if (ERP_DB.cms && Array.isArray(ERP_DB.cms.categories)) {
        const defaultImgMap = { "Clothing": "silk_blouse", "Shoes": "heels", "Fashion": "cream_bag", "Accessories": "necklace", "Mom & Kids": "mom_kids", "Gifts & Seasonal": "giftbox" };
        state.categoriesList = ERP_DB.cms.categories.filter(c => c.enabled !== false).map(c => ({
          name: c.name,
          imgKey: c.customImage || c.imgKey || defaultImgMap[c.name] || "giftbox",
          subcategories: Array.isArray(c.subs) ? c.subs : (c.subcategories || [])
        }));
      }

      if (ERP_DB.cms && Array.isArray(ERP_DB.cms.heroSliders) && ERP_DB.cms.heroSliders.length) {
        state.heroSlides = ERP_DB.cms.heroSliders.map((hs, idx) => ({
          id: hs.id || ("slide-" + (idx + 1)),
          tag: hs.eyebrow || hs.tag || "Tehzib Edit",
          title: hs.title,
          subtitle: hs.desc || hs.subtitle || "",
          ctaText: hs.cta || hs.ctaText || "Shop Collection →",
          targetCat: hs.category || hs.targetCat || "All",
          secondaryText: hs.secondaryText || "",
          secondaryCat: hs.secondaryCat || "",
          bgImgKey: hs.image || hs.bgImgKey || "hero",
          showcaseProductId: hs.showcaseProductId || (PRODUCTS[idx % Math.max(1, PRODUCTS.length)]?.id || "p_claw")
        }));
      }

      if (ERP_DB.cms) {
        state.storeSettings.promoText = ERP_DB.cms.topOfferText || state.storeSettings.promoText;
        state.storeSettings.conciergePhone = ERP_DB.cms.topPhone || state.storeSettings.conciergePhone;
        state.storeSettings.address = ERP_DB.cms.footerAddress || state.storeSettings.address;
        state.storeSettings.copyright = ERP_DB.cms.footerCopyright || state.storeSettings.copyright;

        const trendEl = document.getElementById("feSecHeadingTrend");
        if (trendEl && ERP_DB.cms.secTrendTitle) trendEl.textContent = ERP_DB.cms.secTrendTitle;
        const newEl = document.getElementById("feSecHeadingNew");
        if (newEl && ERP_DB.cms.secNewTitle) newEl.textContent = ERP_DB.cms.secNewTitle;
        const jfyEl = document.getElementById("feSecHeadingJfy");
        if (jfyEl && ERP_DB.cms.secJfyTitle) jfyEl.textContent = ERP_DB.cms.secJfyTitle;
        const nlTitle = document.getElementById("feNewsletterTitle");
        if (nlTitle && ERP_DB.cms.newsletterTitle) nlTitle.textContent = ERP_DB.cms.newsletterTitle;
        const nlSub = document.getElementById("feNewsletterSub");
        if (nlSub && ERP_DB.cms.newsletterSub) nlSub.textContent = ERP_DB.cms.newsletterSub;
        const fBio = document.getElementById("feFooterBio");
        if (fBio && ERP_DB.cms.footerBio) fBio.textContent = ERP_DB.cms.footerBio;
      }

      // Sync Coupons from OMS to Storefront Vouchers
      if (Array.isArray(ERP_DB.coupons)) {
        state.vouchers = ERP_DB.coupons.filter(c => c.active).map(c => ({
          code: c.code,
          discountPct: Number(c.discountPct) || 10,
          desc: `${c.discountPct}% OFF (Min ${formatBdt(c.minOrder)})`
        }));
      }

      if (Array.isArray(ERP_DB.orders)) {
        const statusMap = {
          "New": "To Receive",
          "Confirmed": "To Receive",
          "Packed": "To Receive",
          "Dispatched": "To Receive",
          "Delivered": "To Review",
          "Cancelled": "Returns",
          "Delivery Failed": "Returns",
          "Returned": "Returns",
          "Refunded": "Returns"
        };
        if (state.isLoggedIn && state.currentCustomerId) {
          // Only show orders that belong to the signed-in customer (never other customers' orders)
          const myPhone = parseBdPhone(state.profile.phone)?.core10 || "";
          const myEmail = String(state.profile.email || "").trim().toLowerCase();
          const myOrderIds = new Set((state.orders || []).map(o => String(o.orderId).replace("#", "")));
          const mine = ERP_DB.orders.filter(eo => {
            if (eo.customerId && eo.customerId === state.currentCustomerId) return true;
            if (myOrderIds.has(String(eo.id).replace("#", ""))) return true;
            if (myPhone && parseBdPhone(eo.customerPhone)?.core10 === myPhone) return true;
            if (myEmail && eo.customerEmail && String(eo.customerEmail).toLowerCase() === myEmail) return true;
            return false;
          });
          const fromErp = mine.map(eo => ({
            orderId: eo.id.startsWith("#") ? eo.id : ("#" + eo.id),
            customerName: eo.customerName,
            customerPhone: eo.customerPhone,
            address: eo.customerAddress,
            status: statusMap[eo.status] || "To Receive",
            date: eo.date,
            items: (eo.items || []).map(i => `${i.qty}x ${i.title} (${i.variant || "Std"})`).join(", "),
            lineItems: eo.items || [],
            deliveryMethod: eo.deliveryMethod,
            paymentMethod: eo.paymentMethod || "Cash on Delivery",
            source: eo.channel || "Storefront",
            total: eo.totalRevenue
          }));
          const erpIds = new Set(fromErp.map(o => o.orderId));
          const localOnly = (state.orders || []).filter(o => !erpIds.has(o.orderId));
          state.orders = [...fromErp, ...localOnly];
        } else {
          state.orders = [];
        }
      }

      const syncText = document.getElementById("liveSyncStatusText");
      if (syncText) {
        const pubCount = ERP_DB.products.filter(p => p.isPublished !== false).length;
        const unpubCount = ERP_DB.products.filter(p => p.isPublished === false).length;
        syncText.textContent = `Live Synced: ${pubCount} Active SKUs • ${unpubCount} Drafts • ${ERP_DB.orders.length} Orders`;
      }
    }

    function recordCustomerFrontendOrderInErp(orderData) {
      let totalCogs = 0;
      const erpItems = orderData.lineItems.map(li => {
        const ep = ERP_DB.products.find(x => x.id === li.id);
        const unitCost = ep ? Number(ep.landedCost || ep.costPrice || Math.round(li.price * 0.48)) : Math.round(li.price * 0.48);
        totalCogs += unitCost * li.qty;
        if (ep) {
          // Storefront checkout already decremented ep.available via PRODUCTS reference or we sync here:
          ep.available = Math.max(0, Number(ep.available || 0) - li.qty);
          ep.reserved = Number(ep.reserved || 0) + li.qty;
          ERP_DB.inventoryMovements.unshift({
            time: nowTimestamp(),
            productId: ep.id,
            productTitle: ep.title,
            sku: ep.sku || ep.id,
            variant: li.variant || "Standard",
            type: `Storefront Order Reserved (-${li.qty} Avail, +${li.qty} Reserved)`,
            note: `Order ${orderData.orderId} (${ep.title} - ${li.variant || "Standard"}) placed by ${orderData.customerName}`
          });
        }
        return {
          productId: li.id,
          sku: ep ? ep.sku : li.id,
          title: li.title,
          variant: li.variant || "Standard",
          qty: li.qty,
          unitPrice: li.price,
          unitCost
        };
      });

      const isPaid = !String(orderData.paymentMethod || "").toLowerCase().includes("cash on delivery");

      ERP_DB.orders.unshift({
        id: orderData.orderId,
        date: nowTimestamp(),
        customerId: state.currentCustomerId || "",
        customerEmail: state.profile.email || "",
        customerName: orderData.customerName,
        customerPhone: orderData.customerPhone,
        customerAddress: orderData.customerAddress,
        channel: "Storefront",
        campaignSource: state.appliedVoucherCode || "Direct Storefront",
        tier: "RETAIL",
        courier: "Steadfast Courier",
        trackingNumber: "PENDING",
        dispatchDate: "—",
        deliveryAttempts: 0,
        deliveryOutcome: "New Storefront Order — stock reserved automatically",
        deliveryMethod: orderData.deliveryMethod,
        deliveryFee: orderData.deliveryFee,
        discount: orderData.discount || 0,
        paymentMethod: orderData.paymentMethod,
        paymentStatus: isPaid ? "Paid" : "Pending",
        codSettled: isPaid,
        packagingCost: 35,
        courierActualCost: orderData.deliveryFee || 60,
        codFee: isPaid ? 0 : Math.round(orderData.totalRevenue * 0.01),
        items: erpItems,
        subtotal: orderData.subtotal,
        totalRevenue: orderData.totalRevenue,
        totalCogs,
        status: "New"
      });

      if (state.appliedVoucherCode && Array.isArray(ERP_DB.coupons)) {
        const cpn = ERP_DB.coupons.find(c => c.code === state.appliedVoucherCode);
        if (cpn) {
          cpn.usedCount = Number(cpn.usedCount || 0) + 1;
          cpn.attributedOrders = Number(cpn.attributedOrders || 0) + 1;
          cpn.attributedRevenue = Number(cpn.attributedRevenue || 0) + Number(orderData.totalRevenue || 0);
        }
      }

      const orderPhoneCore = parseBdPhone(orderData.customerPhone)?.core10 || "";
      let cust = ERP_DB.crmCustomers.find(c =>
        (state.currentCustomerId && c.id === state.currentCustomerId) ||
        (orderPhoneCore && parseBdPhone(c.phone)?.core10 === orderPhoneCore)
      );
      const earnedPts = Math.round(orderData.totalRevenue / 20);
      if (cust) {
        cust.ordersCount = Number(cust.ordersCount || 0) + 1;
        cust.points = Number(cust.points || 0) + earnedPts;
      } else {
        ERP_DB.crmCustomers.unshift({
          id: state.currentCustomerId || ("CUST-" + (ERP_DB.crmCustomers.length + 105)),
          name: orderData.customerName,
          phone: orderData.customerPhone,
          email: state.profile.email || "—",
          tier: "New",
          rating: 5.0,
          points: 200 + earnedPts,
          ordersCount: 1,
          completedOrders: 0,
          spend: 0,
          returnsCount: 0,
          failedCount: 0,
          address: orderData.customerAddress,
          notes: "Placed order via Storefront",
          consent: { sms: true, whatsapp: true, email: true },
          referralCode: orderData.customerName.split(" ")[0].toUpperCase() + "-THZ"
        });
      }

      ERP_DB.emsNotifications.unshift({
        id: "EN-" + Date.now(),
        time: "Just now",
        type: "Order Confirmation",
        msg: `Storefront Order ${orderData.orderId} placed by ${orderData.customerName} (${formatBdt(orderData.totalRevenue)}) — stock reserved.`
      });

      saveErpDatabase();
      if (typeof renderAllErpModules === "function") {
        renderAllErpModules();
      }
    }


    function renderAll() {
      syncErpToStorefront();
      renderDynamicStorefrontCMS();
      updateBadges();
      renderHome();
      renderCatalog();
      renderPDP();
      renderCart();
      renderCheckout();
      renderAccountAndWishlist();
      renderNotifications();
      if (window.__erpAdminAuthenticated && typeof renderAllErpModules === "function") {
        renderAllErpModules();
      }
    }

    document.addEventListener("click", (e) => {
      const _delegatedBtn = e.target.closest("button, a");
      if (e.target.closest("#heroPrevSlideBtn")) {
        setHeroSlide(activeHeroSlide - 1);
        restartHeroAutoPlay();
        return;
      }
      if (e.target.closest("#heroNextSlideBtn")) {
        setHeroSlide(activeHeroSlide + 1);
        restartHeroAutoPlay();
        return;
      }

      const wishBtn = e.target.closest("[data-toggle-wish]");
      if (wishBtn) {
        const pid = wishBtn.getAttribute("data-toggle-wish");
        if (!state.isLoggedIn) {
          state.pendingWishProductId = pid;
          state.pendingRedirect = null;
          openAuthModal("login", { alertMessage: "Please sign in or sign up to save items to your Wishlist." });
          return;
        }
        const idx = state.wishlist.indexOf(pid);
        if (idx >= 0) {
          state.wishlist.splice(idx, 1);
          showToast("Removed from Wishlist");
        } else {
          state.wishlist.push(pid);
          showToast("Saved to your Tehzib Wishlist");
        }
        saveDynamicDatabase();
        renderAll();
        return;
      }

      const removeWishBtn = e.target.closest("[data-remove-wish]");
      if (removeWishBtn) {
        const pid = removeWishBtn.getAttribute("data-remove-wish");
        const p = PRODUCTS.find(x => x.id === pid);
        openModal({
          title: "Remove from Wishlist?",
          message: `Are you sure you want to remove "${p ? p.title : "this item"}" from your saved wishlist?`,
          confirmText: "Yes, Remove",
          onConfirm: () => {
            state.wishlist = state.wishlist.filter(id => id !== pid);
            saveDynamicDatabase();
            renderAll();
            showToast("Item removed from Wishlist");
          }
        });
        return;
      }

      const openPdpEl = e.target.closest("[data-open-pdp]");
      if (openPdpEl) {
        state.activeProductId = openPdpEl.getAttribute("data-open-pdp");
        state.pdpGalleryIdx = 0;
        state.pdpQty = 1;
        switchScreen("product");
        return;
      }

      const quickAddBtn = e.target.closest("[data-quick-add]");
      if (quickAddBtn) {
        const pid = quickAddBtn.getAttribute("data-quick-add");
        const p = PRODUCTS.find(x => x.id === pid);
        if (p) {
          const existing = state.cart.find(c => c.id === pid);
          if (existing) existing.qty += 1;
          else state.cart.push({ id: pid, qty: 1, variant: (p.variants && p.variants[0]) || "Standard", selected: true });
          saveDynamicDatabase();
          renderAll();
          showToast(`Added "${p.title}" to Cart`);
        }
        return;
      }

      const openAuthBtn = e.target.closest("[data-open-auth]");
      if (openAuthBtn) {
        const mode = openAuthBtn.getAttribute("data-open-auth") || "login";
        openAuthModal(mode);
        return;
      }

      if (e.target.closest("#dropdownSignOutBtn")) {
        performCustomerLogout();
        closeHeaderDropdowns();
        switchScreen("home");
        showToast("Signed out of Tehzib Privé");
        return;
      }

      const profileVerifyBtn = e.target.closest("[data-profile-verify]");
      if (profileVerifyBtn) {
        openProfileVerifyModal(profileVerifyBtn.getAttribute("data-profile-verify"));
        return;
      }

      const accDropLink = e.target.closest("[data-acc-drop-nav]");
      if (accDropLink) {
        const panel = accDropLink.getAttribute("data-acc-drop-nav");
        closeHeaderDropdowns();
        switchScreen("account", { keepPanel: true });
        switchAccountPanel(panel);
        return;
      }

      const livePdpBtn = e.target.closest("[data-live-search-pdp]");
      if (livePdpBtn) {
        const pid = livePdpBtn.getAttribute("data-live-search-pdp");
        state.activeProductId = pid;
        state.pdpGalleryIdx = 0;
        document.getElementById("liveSearchDropdown")?.classList.remove("open");
        switchScreen("product");
        return;
      }

      if (e.target.closest("#liveSearchViewAllBtn")) {
        const sInput = document.getElementById("globalSearchInput");
        state.searchQuery = sInput ? sInput.value.trim() : state.searchQuery;
        state.catalogCategory = "All";
        state.catalogSubcategory = "All";
        document.getElementById("liveSearchDropdown")?.classList.remove("open");
        switchScreen("catalog");
        return;
      }

      const subcatBtn = e.target.closest("[data-nav-subcat]");
      if (subcatBtn) {
        const parentCat = subcatBtn.getAttribute("data-parent-cat") || "All";
        const subcat = subcatBtn.getAttribute("data-nav-subcat") || "All";
        state.catalogCategory = parentCat;
        state.catalogSubcategory = subcat;
        state.searchQuery = "";
        const sInput = document.getElementById("globalSearchInput");
        if (sInput) sInput.value = "";
        const cBtn = document.getElementById("globalSearchClearBtn");
        if (cBtn) cBtn.style.display = "none";
        switchScreen("catalog");
        return;
      }

      const selectCatEl = e.target.closest("[data-select-cat]");
      if (selectCatEl) {
        const chosenCat = selectCatEl.getAttribute("data-select-cat");
        const inSidebar = Boolean(selectCatEl.closest("#catalogSidebarCategories"));
        state.catalogCategory = chosenCat;
        state.catalogSubcategory = "All";
        if (!inSidebar) {
          state.searchQuery = "";
          const sInput = document.getElementById("globalSearchInput");
          if (sInput) sInput.value = "";
          const cBtn = document.getElementById("globalSearchClearBtn");
          if (cBtn) cBtn.style.display = "none";
        }
        switchScreen("catalog");
        return;
      }

      const viewAllEl = e.target.closest("[data-view-all]");
      if (viewAllEl) {
        state.catalogCategory = viewAllEl.getAttribute("data-view-all");
        state.catalogSubcategory = "All";
        state.searchQuery = "";
        const sInput = document.getElementById("globalSearchInput");
        if (sInput) sInput.value = "";
        const cBtn = document.getElementById("globalSearchClearBtn");
        if (cBtn) cBtn.style.display = "none";
        switchScreen("catalog");
        return;
      }

      if (e.target.closest("[data-go-home]")) {
        switchScreen("home");
        return;
      }

      const subNavBtn = e.target.closest("[data-nav-cat]");
      if (subNavBtn) {
        const cat = subNavBtn.getAttribute("data-nav-cat");
        state.catalogCategory = cat;
        state.catalogSubcategory = "All";
        state.searchQuery = "";
        const sInput = document.getElementById("globalSearchInput");
        if (sInput) sInput.value = "";
        const cBtn = document.getElementById("globalSearchClearBtn");
        if (cBtn) cBtn.style.display = "none";
        switchScreen("catalog");
        return;
      }

      const screenJumpBtn = e.target.closest("[data-screen-jump]");
      if (screenJumpBtn) {
        switchScreen(screenJumpBtn.getAttribute("data-screen-jump"));
        return;
      }

      const dockBtn = e.target.closest("[data-dock-target]");
      if (dockBtn) {
        switchScreen(dockBtn.getAttribute("data-dock-target"));
        return;
      }

      const specialTabBtn = e.target.closest("[data-special-tab]");
      if (specialTabBtn) {
        state.specialTab = specialTabBtn.getAttribute("data-special-tab");
        document.querySelectorAll("#specialOfferTabs .special-tab-btn").forEach(b => {
          b.classList.toggle("active", b.getAttribute("data-special-tab") === state.specialTab);
        });
        renderHome();
        return;
      }

      const thumbEl = e.target.closest("[data-thumb-idx]");
      if (thumbEl) {
        state.pdpGalleryIdx = Number(thumbEl.getAttribute("data-thumb-idx"));
        renderPDP();
        return;
      }

      const varPill = e.target.closest("[data-select-variant]");
      if (varPill) {
        state.pdpVariant = varPill.getAttribute("data-select-variant");
        renderPDP();
        return;
      }

      const pdpTabBtn = e.target.closest("[data-pdp-tab]");
      if (pdpTabBtn) {
        state.pdpTab = pdpTabBtn.getAttribute("data-pdp-tab");
        renderPDP();
        return;
      }

      const cartCheckBtn = e.target.closest("[data-cart-check]");
      if (cartCheckBtn) {
        const cid = cartCheckBtn.getAttribute("data-cart-check");
        const item = state.cart.find(c => c.id === cid);
        if (item) item.selected = !item.selected;
        saveDynamicDatabase();
        renderAll();
        return;
      }

      const cartMinusBtn = e.target.closest("[data-cart-minus]");
      if (cartMinusBtn) {
        const cid = cartMinusBtn.getAttribute("data-cart-minus");
        const item = state.cart.find(c => c.id === cid);
        if (item) {
          if (item.qty <= 1) {
            const p = PRODUCTS.find(x => x.id === cid);
            openModal({
              title: "Remove Item from Cart?",
              message: `Do you want to remove "${p ? p.title : "this item"}" from your shopping cart?`,
              confirmText: "Remove",
              onConfirm: () => {
                state.cart = state.cart.filter(c => c.id !== cid);
                saveDynamicDatabase();
                renderAll();
                showToast("Item removed from cart");
              }
            });
          } else {
            item.qty -= 1;
            saveDynamicDatabase();
            renderAll();
          }
        }
        return;
      }

      const cartPlusBtn = e.target.closest("[data-cart-plus]");
      if (cartPlusBtn) {
        const cid = cartPlusBtn.getAttribute("data-cart-plus");
        const item = state.cart.find(c => c.id === cid);
        if (item) {
          item.qty += 1;
          saveDynamicDatabase();
          renderAll();
        }
        return;
      }

      const cartRemoveBtn = e.target.closest("[data-cart-remove]");
      if (cartRemoveBtn) {
        const cid = cartRemoveBtn.getAttribute("data-cart-remove");
        const p = PRODUCTS.find(x => x.id === cid);
        openModal({
          title: "Delete Item?",
          message: `Are you sure you want to remove "${p ? p.title : "this item"}" from your cart?`,
          confirmText: "Delete",
          onConfirm: () => {
            state.cart = state.cart.filter(c => c.id !== cid);
            saveDynamicDatabase();
            renderAll();
            showToast("Item deleted from cart");
          }
        });
        return;
      }

      const delivCard = e.target.closest("[data-delivery-method]");
      if (delivCard) {
        state.deliveryMethod = delivCard.getAttribute("data-delivery-method");
        state.deliveryFee = Number(delivCard.getAttribute("data-delivery-fee"));
        document.querySelectorAll("#deliveryOptionsGrid .delivery-option-card").forEach(c => {
          c.classList.toggle("selected", c === delivCard);
        });
        renderCheckout();
        return;
      }

      const payChoiceBtn = e.target.closest("[data-pay-choice]");
      if (payChoiceBtn) {
        state.paymentMethod = payChoiceBtn.getAttribute("data-pay-choice");
        document.querySelectorAll("#paymentSelectorDrawer .variant-pill").forEach(b => {
          b.classList.toggle("active", b === payChoiceBtn);
        });
        renderCheckout();
        showToast(`Payment method set to ${state.paymentMethod}`);
        return;
      }

      const accNavBtn = e.target.closest("[data-account-panel]");
      if (accNavBtn) {
        const panel = accNavBtn.getAttribute("data-account-panel");
        const orderFilter = accNavBtn.getAttribute("data-order-filter") || "To Receive";
        switchAccountPanel(panel, orderFilter);
        return;
      }

      const orderQuickBtn = e.target.closest("[data-order-quick]");
      if (orderQuickBtn) {
        switchAccountPanel("orders", orderQuickBtn.getAttribute("data-order-quick"));
        return;
      }

      const notifRow = e.target.closest("[data-notif-id]");
      if (notifRow) {
        const nid = notifRow.getAttribute("data-notif-id");
        const n = state.notifications.find(x => x.id === nid);
        if (n) {
          n.unread = false;
          saveDynamicDatabase();
          renderAll();
          showToast(`Notification read: ${n.title}`);
        }
        return;
      }

      if (!e.target.closest("#notifDropdownWrap") && !e.target.closest("#accountDropdownWrap")) {
        const notifPanel = document.getElementById("notifDropdownPanel");
        const accPanel = document.getElementById("accountDropdownPanel");
        if (notifPanel) notifPanel.classList.remove("open");
        if (accPanel) accPanel.classList.remove("open");
      }
      if (!e.target.closest("#globalSearchForm")) {
        document.getElementById("liveSearchDropdown")?.classList.remove("open");
      }

      const footerCatBtn = e.target.closest("[data-footer-cat]");
      if (footerCatBtn) {
        state.catalogCategory = footerCatBtn.getAttribute("data-footer-cat");
        state.catalogSubcategory = "All";
        state.searchQuery = "";
        const sInput = document.getElementById("globalSearchInput");
        if (sInput) sInput.value = "";
        const cBtn = document.getElementById("globalSearchClearBtn");
        if (cBtn) cBtn.style.display = "none";
        switchScreen("catalog");
        return;
      }

      const heroDotBtn = e.target.closest("[data-hero-dot]");
      if (heroDotBtn) {
        setHeroSlide(Number(heroDotBtn.getAttribute("data-hero-dot")));
        restartHeroAutoPlay();
        return;
      }

      const socialBtn = e.target.closest("[data-social-link]");
      if (socialBtn) {
        const platform = socialBtn.getAttribute("data-social-link");
        showToast(`Following Tehzib Lifestyle on ${platform} (@tehzib.bd)`);
        return;
      }

      const footerInfoBtn = e.target.closest("[data-footer-info]");
      if (footerInfoBtn) {
        const secId = footerInfoBtn.getAttribute("data-footer-sec-id");
        const itemId = footerInfoBtn.getAttribute("data-footer-item-id");
        const topic = footerInfoBtn.getAttribute("data-footer-info");
        let modalHeading = topic;
        let modalBodyMsg = "Tehzib Lifestyle Bangladesh offers authentic studio-curated Clothing, Shoes, Fashion Bags, Jewellery & Mom & Kids collections with 7-day easy exchanges and Dhaka concierge delivery.";

        if (ERP_DB?.cms?.footerSections) {
          for (const sec of ERP_DB.cms.footerSections) {
            if (secId && sec.id !== secId) continue;
            const found = (sec.items || []).find(it => (itemId && it.id === itemId) || it.modalTitle === topic || it.label === topic);
            if (found) {
              modalHeading = found.modalTitle || found.label;
              modalBodyMsg = found.message || modalBodyMsg;
              break;
            }
          }
        }
        openModal({
          title: modalHeading,
          message: modalBodyMsg,
          confirmText: "Close"
        });
        return;
      }
    });

    // ========================================================================
    // CUSTOMER AUTH — Sign In / Sign Up / Gmail SMTP Email OTP Verification
    // ========================================================================
    let signupStep = "fields";
    let pendingSignupData = null;
    let loginMode = "password";

    function escapeHtmlText(str) {
      return String(str ?? "").replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
    }

    async function hashPassword(pw) {
      const raw = "tehzib::" + String(pw || "");
      try {
        if (window.crypto && window.crypto.subtle && window.TextEncoder) {
          const buf = await window.crypto.subtle.digest("SHA-256", new TextEncoder().encode(raw));
          return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("");
        }
      } catch (e) {}
      let h1 = 0x811c9dc5;
      for (let i = 0; i < raw.length; i++) {
        h1 ^= raw.charCodeAt(i);
        h1 = Math.imul(h1, 16777619) >>> 0;
      }
      return "fnv-" + h1.toString(16);
    }

    async function sendEmailOtpServer(email) {
      try {
        const res = await fetch("/api/auth/customer", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action: "send_otp", target: email })
        });
        const json = await res.json();
        if (!res.ok || !json?.ok) {
          return { ok: false, error: json?.error?.message || "Failed to send verification email via Gmail SMTP." };
        }
        return { ok: true, target: json?.data?.target || email };
      } catch (e) {
        return { ok: false, error: "Network error while sending verification email." };
      }
    }

    async function verifyEmailOtpServer(email, code) {
      try {
        const res = await fetch("/api/auth/customer", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action: "verify_otp", target: email, code: String(code || "").trim() })
        });
        const json = await res.json();
        if (!res.ok || !json?.ok) {
          return { ok: false, error: json?.error?.message || "Invalid or expired OTP code." };
        }
        return { ok: true };
      } catch (e) {
        return { ok: false, error: "Network error while verifying OTP code." };
      }
    }

    function setAuthAlert(message, type = "info") {
      const el = document.getElementById("authModalAlertBanner");
      if (!el) return;
      if (!message) {
        el.style.display = "none";
        el.textContent = "";
        el.className = "auth-alert-banner";
        return;
      }
      el.textContent = message;
      el.className = "auth-alert-banner " + type;
      el.style.display = "block";
    }

    function applyLoginMode() {
      const isOtp = loginMode === "otp";
      document.getElementById("loginPasswordGroup").style.display = isOtp ? "none" : "block";
      document.getElementById("loginOtpGroup").style.display = isOtp ? "block" : "none";
      document.getElementById("toggleLoginModeBtn").textContent = isOtp ? "Use Password instead" : "Use Email OTP Code instead";
      document.getElementById("loginOtpCodeInput").value = "";
    }

    function enforceBdPhonePrefix(inputEl) {
      if (!inputEl) return;
      let val = String(inputEl.value || "");
      const rest = val.replace(/^(\+?88)+/, "");
      const next = "+88" + rest;
      if (inputEl.value !== next) {
        inputEl.value = next;
      }
    }

    function bindBdPhoneInputPrefix(inputEl) {
      if (!inputEl || inputEl.__bdPrefixBound) return;
      inputEl.__bdPrefixBound = true;
      if (!inputEl.value || !inputEl.value.startsWith("+88")) {
        enforceBdPhonePrefix(inputEl);
      }
      inputEl.addEventListener("focus", () => {
        enforceBdPhonePrefix(inputEl);
      });
      inputEl.addEventListener("input", () => {
        enforceBdPhonePrefix(inputEl);
      });
      inputEl.addEventListener("keydown", (e) => {
        if ((e.key === "Backspace" || e.key === "Delete") && inputEl.selectionStart <= 3 && inputEl.selectionEnd <= 3) {
          e.preventDefault();
        }
      });
    }

    function resetAuthForms() {
      ["loginIdentifierInput", "loginPasswordInput", "loginOtpCodeInput", "signupNameInput", "signupEmailInput",
        "signupAddressInput", "signupPasswordInput", "signupEmailOtpInput"]
        .forEach(id => {
          const el = document.getElementById(id);
          if (el) el.value = "";
        });
      const signupPhoneEl = document.getElementById("signupPhoneInput");
      if (signupPhoneEl) signupPhoneEl.value = "+88";
      ["loginPasswordInput", "signupPasswordInput"].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.type = "password";
      });
      ["toggleLoginPassVisBtn", "toggleSignupPassVisBtn"].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = "Show";
      });
      signupStep = "fields";
      pendingSignupData = null;
      const fieldsStep = document.getElementById("signupFieldsStep");
      const otpStep = document.getElementById("signupOtpStep");
      if (fieldsStep) fieldsStep.style.display = "block";
      if (otpStep) otpStep.style.display = "none";
      const submitBtn = document.getElementById("signupSubmitBtn");
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = "Create Privé Account (+500 Pts) &rarr;";
      }
      const otpSubmitBtn = document.getElementById("signupVerifyOtpSubmitBtn");
      if (otpSubmitBtn) {
        otpSubmitBtn.disabled = false;
        otpSubmitBtn.innerHTML = "Verify OTP &amp; Complete Sign Up &rarr;";
      }
      loginMode = "password";
      applyLoginMode();
    }

    function openAuthModal(mode = "login", opts = {}) {
      closeHeaderDropdowns();
      document.getElementById("genericModalBackdrop")?.classList.remove("open");
      document.querySelectorAll(".erp-modal-backdrop.open").forEach(el => el.classList.remove("open"));
      const backdrop = document.getElementById("authModalBackdrop");
      const loginForm = document.getElementById("authLoginForm");
      const signupForm = document.getElementById("authSignupForm");
      const loginTab = document.getElementById("authTabLoginBtn");
      const signupTab = document.getElementById("authTabSignupBtn");
      const heading = document.getElementById("authModalHeading");
      const subheading = document.getElementById("authModalSubheading");

      if (!opts.fromTab && !backdrop.classList.contains("open")) {
        resetAuthForms();
      }

      if (mode === "signup") {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
        loginTab.classList.remove("active");
        signupTab.classList.add("active");
        heading.textContent = "Create Tehzib Privé Account";
        if (subheading) subheading.textContent = "Sign up with your Email (verified via Gmail OTP) and Bangladesh mobile number.";
      } else {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
        loginTab.classList.add("active");
        signupTab.classList.remove("active");
        heading.textContent = "Sign In to Tehzib";
        if (subheading) subheading.textContent = "Access your verified profile, orders, wishlist & Privé rewards.";
      }
      setAuthAlert(opts.alertMessage || "", "info");
      backdrop.classList.add("open");
    }

    function closeAuthModal(options = {}) {
      document.getElementById("authModalBackdrop").classList.remove("open");
      if (!options.keepPending && !state.isLoggedIn) {
        state.pendingRedirect = null;
        state.pendingWishProductId = "";
      }
    }

    function finishCustomerAuth(defaultScreen) {
      const redirect = state.pendingRedirect;
      const hadPendingWish = Boolean(state._lastPendingWish || state.pendingWishProductId);
      state._lastPendingWish = "";
      state.pendingRedirect = null;
      closeAuthModal({ keepPending: true });
      resetAuthForms();
      if (redirect && redirect.screen) {
        switchScreen(redirect.screen, redirect.options || {});
      } else if (defaultScreen && !hadPendingWish) {
        switchScreen(defaultScreen);
      } else {
        renderAll();
      }
    }

    document.getElementById("closeAuthModalBtn").addEventListener("click", () => closeAuthModal());
    document.getElementById("authModalBackdrop")?.addEventListener("click", (e) => {
      if (e.target.id === "authModalBackdrop") closeAuthModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (document.getElementById("liveSearchDropdown")?.classList.contains("open")) {
          document.getElementById("liveSearchDropdown").classList.remove("open");
        } else if (document.getElementById("genericModalBackdrop")?.classList.contains("open")) {
          closeModal();
        } else if (document.getElementById("authModalBackdrop")?.classList.contains("open")) {
          closeAuthModal();
        } else {
          document.querySelectorAll(".erp-modal-backdrop.open").forEach(el => el.classList.remove("open"));
        }
      }
    });
    document.getElementById("authTabLoginBtn").addEventListener("click", () => openAuthModal("login", { fromTab: true }));
    document.getElementById("authTabSignupBtn").addEventListener("click", () => openAuthModal("signup", { fromTab: true }));

    function bindPasswordToggle(btnId, inputId) {
      document.getElementById(btnId)?.addEventListener("click", () => {
        const input = document.getElementById(inputId);
        const btn = document.getElementById(btnId);
        if (!input || !btn) return;
        const show = input.type === "password";
        input.type = show ? "text" : "password";
        btn.textContent = show ? "Hide" : "Show";
      });
    }
    bindPasswordToggle("toggleLoginPassVisBtn", "loginPasswordInput");
    bindPasswordToggle("toggleSignupPassVisBtn", "signupPasswordInput");
    bindBdPhoneInputPrefix(document.getElementById("signupPhoneInput"));
    bindBdPhoneInputPrefix(document.getElementById("inputPhone"));

    document.getElementById("toggleLoginModeBtn").addEventListener("click", () => {
      loginMode = loginMode === "password" ? "otp" : "password";
      applyLoginMode();
      setAuthAlert("");
    });

    document.getElementById("loginSendOtpBtn").addEventListener("click", async () => {
      const ident = document.getElementById("loginIdentifierInput").value.trim();
      if (!ident) {
        setAuthAlert("Enter your registered Email Address or Bangladesh mobile number first.", "error");
        return;
      }
      const cust = findCustomerByIdentifier(ident);
      if (!cust) {
        setAuthAlert("No account found with this email or mobile number. Please Sign Up first.", "error");
        return;
      }
      if (!cust.email) {
        setAuthAlert("This account does not have an email address on file for Email OTP login. Please sign in with your password.", "error");
        return;
      }
      const sendBtn = document.getElementById("loginSendOtpBtn");
      sendBtn.disabled = true;
      sendBtn.textContent = "Sending...";
      const res = await sendEmailOtpServer(cust.email);
      sendBtn.disabled = false;
      if (!res.ok) {
        sendBtn.textContent = "Send OTP";
        setAuthAlert(res.error, "error");
        return;
      }
      sendBtn.textContent = "Resend OTP";
      setAuthAlert(`A 6-digit verification code was sent to ${cust.email}. Please check your email inbox.`, "success");
    });

    document.getElementById("authLoginForm").addEventListener("submit", async (e) => {
      e.preventDefault();
      const ident = document.getElementById("loginIdentifierInput").value.trim();
      if (!ident) {
        setAuthAlert("Please enter your Email Address or Bangladesh mobile number.", "error");
        return;
      }
      if (!ident.includes("@") && !parseBdPhone(ident)) {
        setAuthAlert("Enter a valid Email or Bangladesh mobile number (e.g. 017XXXXXXXX or +8801XXXXXXXXX).", "error");
        return;
      }
      if (ident.includes("@") && !isValidEmailAddress(ident)) {
        setAuthAlert("Please enter a valid Email Address.", "error");
        return;
      }
      const cust = findCustomerByIdentifier(ident);
      if (!cust) {
        setAuthAlert("No account found with this email or mobile number. Please Sign Up first.", "error");
        return;
      }
      if (loginMode === "otp") {
        if (!cust.email) {
          setAuthAlert("This account does not have a registered email for OTP sign-in. Please use password.", "error");
          return;
        }
        const verifyRes = await verifyEmailOtpServer(cust.email, document.getElementById("loginOtpCodeInput").value);
        if (!verifyRes.ok) {
          setAuthAlert(verifyRes.error, "error");
          return;
        }
      } else {
        const pw = document.getElementById("loginPasswordInput").value;
        if (!pw) {
          setAuthAlert("Please enter your password.", "error");
          return;
        }
        const hashed = await hashPassword(pw);
        if (hashed !== cust.passwordHash) {
          setAuthAlert("Incorrect password. Please try again.", "error");
          return;
        }
      }
      applyCustomerSession(cust);
      saveDynamicDatabase(`Customer "${cust.name}" signed in`);
      finishCustomerAuth(state.currentView === "home" ? "account" : "");
      showToast(`Welcome back, ${state.profile.name}!`);
    });

    // ---- Sign Up: Submit Signup Info -> Show OTP Input Box -> Verify OTP & Create Profile ----
    document.getElementById("signupBackToFieldsBtn")?.addEventListener("click", () => {
      signupStep = "fields";
      document.getElementById("signupFieldsStep").style.display = "block";
      document.getElementById("signupOtpStep").style.display = "none";
      setAuthAlert("");
    });

    document.getElementById("signupResendOtpBtn")?.addEventListener("click", async () => {
      if (!pendingSignupData?.email) return;
      const resendBtn = document.getElementById("signupResendOtpBtn");
      resendBtn.disabled = true;
      resendBtn.textContent = "Sending...";
      const res = await sendEmailOtpServer(pendingSignupData.email);
      resendBtn.disabled = false;
      resendBtn.textContent = "Resend OTP";
      if (!res.ok) {
        setAuthAlert(res.error, "error");
        return;
      }
      setAuthAlert(`A new 6-digit verification code was sent to ${pendingSignupData.email}.`, "success");
    });

    document.getElementById("authSignupForm").addEventListener("submit", async (e) => {
      e.preventDefault();

      if (signupStep === "fields") {
        const name = document.getElementById("signupNameInput").value.trim().replace(/\s+/g, " ");
        const emailRaw = document.getElementById("signupEmailInput").value.trim().toLowerCase();
        const phoneRaw = document.getElementById("signupPhoneInput").value.trim();
        const address = document.getElementById("signupAddressInput").value.trim();
        const password = document.getElementById("signupPasswordInput").value;

        if (name.length < 2) {
          setAuthAlert("Please enter your full name.", "error");
          return;
        }
        if (!emailRaw || !isValidEmailAddress(emailRaw)) {
          setAuthAlert("Please enter a valid Email Address.", "error");
          return;
        }
        if (findCustomerByIdentifier(emailRaw)) {
          setAuthAlert("An account with this email already exists. Please Sign In instead.", "error");
          return;
        }
        if (!phoneRaw) {
          setAuthAlert("Please enter your Bangladesh mobile number.", "error");
          return;
        }
        const parsedPhone = parseBdPhone(phoneRaw);
        if (!parsedPhone) {
          setAuthAlert("Please enter a valid Bangladesh mobile number (e.g. +880 17XX-XXXXXX).", "error");
          return;
        }
        if (findCustomerByIdentifier(parsedPhone.normalized)) {
          setAuthAlert("An account with this mobile number already exists. Please Sign In instead.", "error");
          return;
        }
        if (!password || password.length < 6) {
          setAuthAlert("Password must be at least 6 characters.", "error");
          return;
        }

        const submitBtn = document.getElementById("signupSubmitBtn");
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending Verification OTP...";
        const otpRes = await sendEmailOtpServer(emailRaw);
        submitBtn.disabled = false;
        submitBtn.innerHTML = "Create Privé Account (+500 Pts) &rarr;";

        if (!otpRes.ok) {
          setAuthAlert(otpRes.error, "error");
          return;
        }

        pendingSignupData = {
          name,
          email: emailRaw,
          phone: parsedPhone.formatted,
          phoneNormalized: parsedPhone.normalized,
          address,
          password
        };
        signupStep = "otp";
        document.getElementById("signupFieldsStep").style.display = "none";
        document.getElementById("signupOtpStep").style.display = "block";
        document.getElementById("signupOtpTargetEmail").textContent = emailRaw;
        const otpInput = document.getElementById("signupEmailOtpInput");
        otpInput.value = "";
        otpInput.focus();
        setAuthAlert(`A 6-digit verification code has been sent to ${emailRaw}. Enter it below to create your customer profile.`, "success");
        return;
      }

      if (signupStep === "otp" && pendingSignupData) {
        const enteredCode = document.getElementById("signupEmailOtpInput").value.trim();
        if (!/^\d{6}$/.test(enteredCode)) {
          setAuthAlert("Please enter the 6-digit OTP code sent to your email.", "error");
          return;
        }
        const verifyBtn = document.getElementById("signupVerifyOtpSubmitBtn");
        verifyBtn.disabled = true;
        verifyBtn.textContent = "Verifying OTP...";
        const verifyRes = await verifyEmailOtpServer(pendingSignupData.email, enteredCode);
        verifyBtn.disabled = false;
        verifyBtn.innerHTML = "Verify OTP &amp; Complete Sign Up &rarr;";

        if (!verifyRes.ok) {
          setAuthAlert(verifyRes.error, "error");
          return;
        }

        const record = {
          id: "CUST-" + Date.now().toString(36).toUpperCase() + Math.floor(Math.random() * 1000),
          name: pendingSignupData.name,
          email: pendingSignupData.email,
          phone: pendingSignupData.phone,
          phoneNormalized: pendingSignupData.phoneNormalized,
          emailVerified: true,
          phoneVerified: false,
          gender: "Not Specified",
          dob: "Not Specified",
          address: pendingSignupData.address,
          passwordHash: await hashPassword(pendingSignupData.password),
          points: 500,
          rating: "5.0 / 5.0",
          createdAt: new Date().toISOString(),
          cart: [],
          wishlist: [],
          orders: [],
          notifications: []
        };
        state.registeredCustomers.unshift(record);
        applyCustomerSession(record);
        saveDynamicDatabase(`New Privé member "${record.name}" registered (+500 Pts)`);
        finishCustomerAuth("account");
        showToast(`Welcome to Tehzib, ${record.name}! Your account is ready (+500 Privé Points).`);
      }
    });

    // ---- Forgot Password (Email OTP reset via Gmail SMTP) ----
    document.getElementById("forgotPassLinkBtn").addEventListener("click", () => {
      const prefill = document.getElementById("loginIdentifierInput").value.trim();
      openModal({
        title: "Reset Your Password",
        message: "Enter your registered Email or Bangladesh mobile number. We will send a 6-digit OTP to your registered email address.",
        confirmText: "Reset Password",
        customHtml: `
          <div style="display:flex; flex-direction:column; gap:8px; text-align:left;">
            <div id="resetPassAlert" class="auth-alert-banner" style="display:none;"></div>
            <div class="auth-verify-input-row">
              <input type="text" id="resetPassIdentInput" class="info-edit-input" placeholder="Registered Email or +880 17XX-XXXXXX" value="${escapeHtmlText(prefill)}" />
              <button type="button" class="verify-send-btn" id="resetPassSendOtpBtn">Send OTP</button>
            </div>
            <input type="text" id="resetPassOtpInput" class="info-edit-input mono" maxlength="6" placeholder="Enter 6-digit Email OTP" />
            <input type="password" id="resetPassNewInput" class="info-edit-input" placeholder="New Password (min 6 characters)" autocomplete="new-password" />
          </div>
        `,
        onConfirm: async () => {
          const alertEl = document.getElementById("resetPassAlert");
          const showErr = (msg) => {
            alertEl.textContent = msg;
            alertEl.className = "auth-alert-banner error";
            alertEl.style.display = "block";
            return false;
          };
          const cust = findCustomerByIdentifier(document.getElementById("resetPassIdentInput").value);
          if (!cust) return showErr("No account found with this email or mobile number.");
          if (!cust.email) return showErr("This account does not have a registered email address.");
          const newPw = document.getElementById("resetPassNewInput").value;
          if (!newPw || newPw.length < 6) {
            return showErr("New password must be at least 6 characters.");
          }
          const verifyRes = await verifyEmailOtpServer(cust.email, document.getElementById("resetPassOtpInput").value);
          if (!verifyRes.ok) return showErr(verifyRes.error);
          cust.passwordHash = await hashPassword(newPw);
          saveDynamicDatabase(`Customer "${cust.name}" reset account password via Email OTP`);
          showToast("Password reset successfully. Please sign in with your new password.");
          openAuthModal("login");
          document.getElementById("loginIdentifierInput").value = cust.email || cust.phone || "";
          return true;
        }
      });
      document.getElementById("resetPassSendOtpBtn").addEventListener("click", async () => {
        const alertEl = document.getElementById("resetPassAlert");
        const cust = findCustomerByIdentifier(document.getElementById("resetPassIdentInput").value);
        if (!cust || !cust.email) {
          alertEl.textContent = "No account with a registered email found for this identifier.";
          alertEl.className = "auth-alert-banner error";
          alertEl.style.display = "block";
          return;
        }
        const sendBtn = document.getElementById("resetPassSendOtpBtn");
        sendBtn.disabled = true;
        sendBtn.textContent = "Sending...";
        const res = await sendEmailOtpServer(cust.email);
        sendBtn.disabled = false;
        sendBtn.textContent = res.ok ? "Resend OTP" : "Send OTP";
        alertEl.textContent = res.ok ? `A 6-digit OTP was sent to ${cust.email}.` : res.error;
        alertEl.className = "auth-alert-banner " + (res.ok ? "success" : "error");
        alertEl.style.display = "block";
      });
    });

    // ---- My Account: add / verify Email via Gmail SMTP ----
    function openProfileVerifyModal(channel) {
      if (!state.isLoggedIn || channel !== "email") return;
      const current = state.profile.email || "";
      openModal({
        title: "Verify Email Address",
        message: "We'll send a 6-digit verification code to your email address via Gmail SMTP.",
        confirmText: "Confirm & Verify",
        customHtml: `
          <div style="display:flex; flex-direction:column; gap:8px; text-align:left;">
            <div id="profileVerifyAlert" class="auth-alert-banner" style="display:none;"></div>
            <div class="auth-verify-input-row">
              <input type="email" id="profileVerifyTargetInput" class="info-edit-input" placeholder="name@example.com" value="${escapeHtmlText(current)}" />
              <button type="button" class="verify-send-btn" id="profileVerifySendBtn">Send OTP</button>
            </div>
            <input type="text" id="profileVerifyOtpInput" class="info-edit-input mono" maxlength="6" placeholder="Enter 6-digit Email OTP" />
          </div>
        `,
        onConfirm: async () => {
          const alertEl = document.getElementById("profileVerifyAlert");
          const showErr = (msg) => {
            alertEl.textContent = msg;
            alertEl.className = "auth-alert-banner error";
            alertEl.style.display = "block";
            return false;
          };
          const raw = document.getElementById("profileVerifyTargetInput").value.trim().toLowerCase();
          if (!isValidEmailAddress(raw)) return showErr("Please enter a valid Email Address.");
          const owner = findCustomerByIdentifier(raw);
          if (owner && owner.id !== state.currentCustomerId) return showErr("This email is already registered to another account.");
          const verifyRes = await verifyEmailOtpServer(raw, document.getElementById("profileVerifyOtpInput").value);
          if (!verifyRes.ok) return showErr(verifyRes.error);
          state.profile.email = raw;
          state.profile.emailVerified = true;
          fetch("/api/auth/customer", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              action: "establish_session",
              customerId: state.profile.id,
              name: state.profile.name,
              email: state.profile.email,
              phone: state.profile.phone,
              emailVerified: state.profile.emailVerified,
              phoneVerified: state.profile.phoneVerified
            })
          }).catch(() => {});
          saveDynamicDatabase(`Customer "${state.profile.name}" verified email address`);
          renderAll();
          showToast("Email Address verified");
          return true;
        }
      });
      document.getElementById("profileVerifySendBtn").addEventListener("click", async () => {
        const alertEl = document.getElementById("profileVerifyAlert");
        const raw = document.getElementById("profileVerifyTargetInput").value.trim().toLowerCase();
        const showMsg = (msg, type) => {
          alertEl.textContent = msg;
          alertEl.className = "auth-alert-banner " + type;
          alertEl.style.display = "block";
        };
        if (!isValidEmailAddress(raw)) return showMsg("Please enter a valid Email Address.", "error");
        const owner = findCustomerByIdentifier(raw);
        if (owner && owner.id !== state.currentCustomerId) return showMsg("This email is already registered to another account.", "error");
        const sendBtn = document.getElementById("profileVerifySendBtn");
        sendBtn.disabled = true;
        sendBtn.textContent = "Sending...";
        const res = await sendEmailOtpServer(raw);
        sendBtn.disabled = false;
        sendBtn.textContent = res.ok ? "Resend OTP" : "Send OTP";
        showMsg(res.ok ? `A 6-digit verification code was sent to ${raw}.` : res.error, res.ok ? "success" : "error");
      });
    }

    // ---- PDP review submission (signed-in customers only) ----
    document.addEventListener("submit", (e) => {
      if (!e.target || e.target.id !== "pdpSubmitReviewForm") return;
      e.preventDefault();
      if (!state.isLoggedIn) {
        openAuthModal("login", { alertMessage: "Please sign in to write a review." });
        return;
      }
      const comment = (document.getElementById("pdpReviewCommentInput")?.value || "").trim();
      const rating = Number(document.getElementById("pdpReviewRatingSelect")?.value || 5);
      if (comment.length < 3) {
        showToast("Please write a short review before submitting");
        return;
      }
      const p = PRODUCTS.find(x => x.id === state.activeProductId);
      const erp = getErpDbSafe();
      if (p && erp) {
        if (!Array.isArray(erp.reviews)) erp.reviews = [];
        erp.reviews.unshift({
          id: "REV-" + Date.now(),
          productId: p.id,
          productTitle: p.title,
          customerId: state.currentCustomerId,
          customer: state.profile.name,
          rating,
          comment,
          date: new Date().toLocaleDateString("en-GB"),
          status: "Approved",
          reply: ""
        });
        saveErpDatabase();
      }
      showToast("Thank you! Your review has been published.");
      renderPDP();
    });

    document.getElementById("headerLogoBtn").addEventListener("click", () => {
      switchScreen("home");
    });

    document.getElementById("navNotificationsBtn").addEventListener("click", (e) => {
      e.stopPropagation();
      const notifPanel = document.getElementById("notifDropdownPanel");
      const accPanel = document.getElementById("accountDropdownPanel");
      if (accPanel) accPanel.classList.remove("open");
      notifPanel.classList.toggle("open");
    });

    document.getElementById("dropdownMarkAllReadBtn").addEventListener("click", (e) => {
      e.stopPropagation();
      state.notifications.forEach(n => { n.unread = false; });
      saveDynamicDatabase();
      renderAll();
      showToast("All notifications marked as read");
    });

    document.getElementById("navAccountBtn").addEventListener("click", (e) => {
      e.stopPropagation();
      const accPanel = document.getElementById("accountDropdownPanel");
      const notifPanel = document.getElementById("notifDropdownPanel");
      if (notifPanel) notifPanel.classList.remove("open");
      accPanel.classList.toggle("open");
    });

    document.getElementById("navWishlistBtn").addEventListener("click", () => switchScreen("wishlist"));
    document.getElementById("navCartBtn").addEventListener("click", () => switchScreen("cart"));
    document.getElementById("mobileDockCartFab").addEventListener("click", () => switchScreen("cart"));

    document.getElementById("mobileHamburgerBtn").addEventListener("click", () => {
      document.getElementById("mobileMenuBackdrop").classList.add("open");
    });
    document.getElementById("closeMobileMenuBtn").addEventListener("click", () => {
      document.getElementById("mobileMenuBackdrop").classList.remove("open");
    });
    document.getElementById("mobileMenuBackdrop").addEventListener("click", (e) => {
      if (e.target.id === "mobileMenuBackdrop") {
        document.getElementById("mobileMenuBackdrop").classList.remove("open");
      }
    });
    document.getElementById("mobileThemeToggleBtn").addEventListener("click", () => {
      applyTheme(state.theme === "light" ? "dark" : "light");
    });
    document.getElementById("mobileOpenAuthBtn").addEventListener("click", () => {
      document.getElementById("mobileMenuBackdrop").classList.remove("open");
      if (state.isLoggedIn) {
        performCustomerLogout();
        switchScreen("home");
        showToast("Signed out of Tehzib Privé");
      } else {
        openAuthModal("login");
      }
    });
    document.getElementById("mobileMenuCartBtn").addEventListener("click", () => switchScreen("cart"));
    document.getElementById("mobileMenuWishBtn").addEventListener("click", () => switchScreen("wishlist"));
    document.getElementById("mobileMenuAccountBtn").addEventListener("click", () => switchScreen("account"));
    document.getElementById("mobileMenuNotifBtn").addEventListener("click", () => {
      const box = document.getElementById("mobileDrawerNotifBox");
      box.style.display = box.style.display === "none" ? "block" : "none";
    });
    document.getElementById("mobileMarkAllReadBtn").addEventListener("click", () => {
      state.notifications.forEach(n => { n.unread = false; });
      saveDynamicDatabase();
      renderAll();
      showToast("All notifications marked as read");
    });

    const globalSearchInputEl = document.getElementById("globalSearchInput");
    const globalSearchClearBtnEl = document.getElementById("globalSearchClearBtn");

    if (globalSearchInputEl) {
      globalSearchInputEl.addEventListener("input", (e) => {
        const val = e.target.value;
        renderLiveSearchDropdown(val);
        if (state.currentView === "catalog" || (!val.trim() && state.searchQuery)) {
          state.searchQuery = val.trim();
          if (state.currentView === "catalog") {
            renderCatalog();
          }
        }
      });

      globalSearchInputEl.addEventListener("focus", (e) => {
        const val = e.target.value;
        if (val && val.trim()) {
          renderLiveSearchDropdown(val);
        }
      });
    }

    if (globalSearchClearBtnEl) {
      globalSearchClearBtnEl.addEventListener("click", () => {
        if (globalSearchInputEl) {
          globalSearchInputEl.value = "";
          globalSearchInputEl.focus();
        }
        globalSearchClearBtnEl.style.display = "none";
        document.getElementById("liveSearchDropdown")?.classList.remove("open");
        if (state.searchQuery) {
          state.searchQuery = "";
          if (state.currentView === "catalog") {
            renderCatalog();
          }
        }
      });
    }

    document.getElementById("globalSearchForm").addEventListener("submit", (e) => {
      e.preventDefault();
      state.searchQuery = (document.getElementById("globalSearchInput").value || "").trim();
      state.catalogCategory = "All";
      state.catalogSubcategory = "All";
      document.getElementById("liveSearchDropdown")?.classList.remove("open");
      switchScreen("catalog");
    });

    let activeHeroSlide = 0;
    let heroAutoTimer = null;

    function setHeroSlide(index) {
      const total = Math.max(1, state.heroSlides.length);
      activeHeroSlide = (index + total) % total;
      document.querySelectorAll("[data-hero-slide]").forEach(slideEl => {
        const idx = Number(slideEl.getAttribute("data-hero-slide"));
        slideEl.classList.toggle("active", idx === activeHeroSlide);
      });
      document.querySelectorAll("[data-hero-dot]").forEach(dotEl => {
        const idx = Number(dotEl.getAttribute("data-hero-dot"));
        dotEl.classList.toggle("active", idx === activeHeroSlide);
      });
    }

    function restartHeroAutoPlay() {
      clearInterval(heroAutoTimer);
      heroAutoTimer = setInterval(() => {
        if (state.appMode === "storefront" && state.currentView === "home") {
          setHeroSlide(activeHeroSlide + 1);
        }
      }, 5500);
    }

    const heroContainerEl = document.getElementById("heroSliderContainer");
    if (heroContainerEl) {
      heroContainerEl.addEventListener("mouseenter", () => clearInterval(heroAutoTimer));
      heroContainerEl.addEventListener("mouseleave", () => restartHeroAutoPlay());
    }
    restartHeroAutoPlay();

    document.getElementById("viewAllCategoriesBtn").addEventListener("click", () => {
      state.catalogCategory = "All";
      switchScreen("catalog");
    });

    document.getElementById("viewAllDealsBtn").addEventListener("click", () => {
      state.catalogCategory = "All";
      switchScreen("catalog");
    });

    document.getElementById("specialExploreAllBtn").addEventListener("click", () => {
      state.catalogCategory = "Accessories";
      switchScreen("catalog");
    });

    document.getElementById("catalogSortSelect").addEventListener("change", (e) => {
      state.catalogSort = e.target.value;
      renderCatalog();
    });

    document.getElementById("catalogBreadcrumbCat").addEventListener("click", () => {
      state.catalogSubcategory = "All";
      renderCatalog();
    });
    document.getElementById("catalogBreadcrumbSubcat").addEventListener("click", () => {
      renderCatalog();
    });

    document.getElementById("pdpBreadcrumbCat").addEventListener("click", () => {
      const p = PRODUCTS.find(x => x.id === state.activeProductId);
      state.catalogCategory = p ? p.category : "All";
      state.catalogSubcategory = "All";
      switchScreen("catalog");
    });

    document.getElementById("pdpBreadcrumbSubcat").addEventListener("click", () => {
      const p = PRODUCTS.find(x => x.id === state.activeProductId);
      state.catalogCategory = p ? p.category : "All";
      state.catalogSubcategory = p && p.subcategory ? p.subcategory : "All";
      switchScreen("catalog");
    });

    document.getElementById("pdpPrevImgBtn").addEventListener("click", () => {
      state.pdpGalleryIdx = (state.pdpGalleryIdx + 3) % 4;
      renderPDP();
    });

    document.getElementById("pdpNextImgBtn").addEventListener("click", () => {
      state.pdpGalleryIdx = (state.pdpGalleryIdx + 1) % 4;
      renderPDP();
    });

    document.getElementById("pdpZoomBtn").addEventListener("click", () => {
      const p = PRODUCTS.find(x => x.id === state.activeProductId) || PRODUCTS[0];
      const imgUrl = document.getElementById("pdpMainImage").src;
      openModal({
        title: p.title,
        message: `${p.category} • ${formatBDT(p.price)}`,
        confirmText: "Close Preview",
        customHtml: `<img src="${imgUrl}" alt="${p.title}" style="width:100%; max-height:320px; object-fit:contain; border-radius:12px;" />`
      });
    });

    document.getElementById("pdpQtyMinusBtn").addEventListener("click", () => {
      if (state.pdpQty > 1) {
        state.pdpQty -= 1;
        renderPDP();
      }
    });

    document.getElementById("pdpQtyPlusBtn").addEventListener("click", () => {
      state.pdpQty += 1;
      renderPDP();
    });

    document.getElementById("pdpAddToCartBtn").addEventListener("click", () => {
      const p = PRODUCTS.find(x => x.id === state.activeProductId) || PRODUCTS[0];
      const existing = state.cart.find(c => c.id === p.id && c.variant === state.pdpVariant);
      if (existing) existing.qty += state.pdpQty;
      else state.cart.push({ id: p.id, qty: state.pdpQty, variant: state.pdpVariant, selected: true });
      saveDynamicDatabase();
      renderAll();
      showToast(`Added ${state.pdpQty}x "${p.title}" (${state.pdpVariant}) to Cart`);
    });

    document.getElementById("pdpWishlistBtn").addEventListener("click", () => {
      const pid = state.activeProductId;
      if (!state.isLoggedIn) {
        state.pendingWishProductId = pid;
        state.pendingRedirect = null;
        openAuthModal("login", { alertMessage: "Please sign in or sign up to save items to your Wishlist." });
        return;
      }
      const idx = state.wishlist.indexOf(pid);
      if (idx >= 0) {
        state.wishlist.splice(idx, 1);
        showToast("Removed from Wishlist");
      } else {
        state.wishlist.push(pid);
        showToast("Saved to Wishlist");
      }
      saveDynamicDatabase();
      renderAll();
    });

    document.getElementById("cartSelectAllToggle").addEventListener("click", () => {
      const allSelected = state.cart.length > 0 && state.cart.every(i => i.selected);
      state.cart.forEach(i => { i.selected = !allSelected; });
      saveDynamicDatabase();
      renderAll();
    });

    document.getElementById("cartBulkDeleteBtn").addEventListener("click", () => {
      const selectedCount = state.cart.filter(i => i.selected).length;
      if (selectedCount === 0) {
        showToast("No items selected to delete");
        return;
      }
      openModal({
        title: "Delete Selected Items?",
        message: `Are you sure you want to remove ${selectedCount} selected item(s) from your shopping cart?`,
        confirmText: "Yes, Delete",
        onConfirm: () => {
          state.cart = state.cart.filter(i => !i.selected);
          saveDynamicDatabase();
          renderAll();
          showToast("Selected items removed from cart");
        }
      });
    });

    function handleVoucherApply(inputId) {
      if (!state.isLoggedIn) {
        openAuthModal("login", { alertMessage: "Please sign in or sign up to apply member privilege vouchers." });
        return;
      }
      const code = document.getElementById(inputId).value.trim().toUpperCase();
      const matched = state.vouchers.find(v => v.code.toUpperCase() === code);
      if (matched) {
        state.voucherApplied = true;
        state.appliedVoucherCode = matched.code;
        state.appliedVoucherPct = matched.discountPct;
        renderAll();
        showToast(`Voucher ${matched.code} applied — ${matched.discountPct}% discount active!`);
      } else {
        const availableCodes = state.vouchers.map(v => v.code).join(", ");
        showToast(`Invalid voucher. Try active codes: ${availableCodes}`);
      }
    }

    document.getElementById("cartVoucherApplyBtn").addEventListener("click", () => handleVoucherApply("cartVoucherInput"));
    document.getElementById("checkoutVoucherApplyBtn").addEventListener("click", () => handleVoucherApply("checkoutVoucherInput"));

    document.getElementById("proceedToCheckoutBtn").addEventListener("click", () => {
      if (state.cart.filter(i => i.selected).length === 0) {
        showToast("Please select at least one item in your cart to checkout");
        return;
      }
      switchScreen("checkout");
    });

    document.getElementById("checkoutBackToCartLink").addEventListener("click", () => switchScreen("cart"));

    function openAddressEditModal() {
      openModal({
        title: "Update Delivery Address",
        message: "Enter your recipient name, Dhaka or Bangladesh delivery address, and Bangladesh mobile number:",
        confirmText: "Save Address",
        customHtml: `
          <div style="display:flex; flex-direction:column; gap:8px; text-align:left;">
            <div id="modalAddrAlert" class="auth-alert-banner error" style="display:none;"></div>
            <input type="text" id="modalAddrName" class="info-edit-input" value="${escapeHtmlText(state.profile.name)}" placeholder="Recipient Full Name" style="display:block;" />
            <input type="text" id="modalAddrLine" class="info-edit-input" value="${escapeHtmlText(state.profile.address)}" placeholder="House, Road, Area, City (e.g. Uttara, Dhaka)" style="display:block;" />
            <input type="tel" id="modalAddrPhone" class="info-edit-input" value="${escapeHtmlText(state.profile.phone || "+88")}" placeholder="Bangladesh Mobile (+880 17XX-XXXXXX)" style="display:block;" />
          </div>
        `,
        onConfirm: () => {
          const alertEl = document.getElementById("modalAddrAlert");
          const n = document.getElementById("modalAddrName").value.trim();
          const a = document.getElementById("modalAddrLine").value.trim();
          const ph = document.getElementById("modalAddrPhone").value.trim();
          if (!n || !a) {
            if (alertEl) {
              alertEl.textContent = "Please enter recipient name and delivery address.";
              alertEl.style.display = "block";
            }
            return false;
          }
          if (ph && ph !== "+88") {
            const parsed = parseBdPhone(ph);
            if (!parsed) {
              if (alertEl) {
                alertEl.textContent = "Please enter a valid Bangladesh mobile number (e.g. +880 17XX-XXXXXX).";
                alertEl.style.display = "block";
              }
              return false;
            }
            if (parsed.normalized !== state.profile.phoneNormalized) {
              state.profile.phoneVerified = false;
            }
            state.profile.phone = parsed.formatted;
            state.profile.phoneNormalized = parsed.normalized;
          }
          state.profile.name = n;
          state.profile.address = a;
          saveDynamicDatabase("Customer updated delivery address");
          renderAll();
          showToast("Delivery address updated");
        }
      });
      bindBdPhoneInputPrefix(document.getElementById("modalAddrPhone"));
    }

    document.getElementById("checkoutChangeAddressBtn").addEventListener("click", openAddressEditModal);
    document.getElementById("accountEditAddressBtn").addEventListener("click", openAddressEditModal);

    document.getElementById("checkoutChangePaymentBtn").addEventListener("click", () => {
      const drawer = document.getElementById("paymentSelectorDrawer");
      drawer.style.display = drawer.style.display === "none" ? "flex" : "none";
    });

    document.getElementById("confirmOrderBtn").addEventListener("click", () => {
      if (!state.isLoggedIn) {
        state.pendingRedirect = { screen: "checkout", options: {} };
        openAuthModal("login", { alertMessage: "Please sign in or create an account to place your order." });
        return;
      }
      const totals = computeCartTotals();
      if (totals.selectedCount === 0) {
        showToast("Your checkout list is empty");
        return;
      }
      if (!state.profile.address || !state.profile.phone) {
        openAddressEditModal();
        showToast("Please enter your delivery address and Bangladesh mobile number to complete your order");
        return;
      }
      const isExpress = state.deliveryMethod === "express";
      const effectiveFee = isExpress ? 0 : state.deliveryFee;
      const grand = totals.afterDiscount + effectiveFee;
      const newOrderId = "#THZ-" + Math.floor(2100 + Math.random() * 7800);

      const lineItems = [];
      const itemNames = state.cart
        .filter(i => i.selected)
        .map(ci => {
          const p = PRODUCTS.find(x => x.id === ci.id);
          if (!p) return "";
          p.available = Math.max(0, Number(p.available || 0) - ci.qty);
          p.sold = Number(p.sold || 0) + ci.qty;
          p.stockStatus = p.available <= 0 ? "OUT OF STOCK" : (p.available <= 8 ? "LOW STOCK" : "IN STOCK");
          lineItems.push({ id: p.id, title: p.title, variant: ci.variant, qty: ci.qty, price: p.price });
          return `${ci.qty}x ${p.title} (${ci.variant})`;
        })
        .filter(Boolean)
        .join(", ");

      state.orders.unshift({
        orderId: newOrderId,
        customerId: state.currentCustomerId,
        customerEmail: state.profile.email,
        customerName: state.profile.name,
        customerPhone: state.profile.phone,
        address: state.profile.address,
        status: "To Receive",
        date: "Just Now • Placed on Storefront",
        items: itemNames,
        lineItems,
        deliveryMethod: state.deliveryMethod,
        paymentMethod: state.paymentMethod,
        source: "Customer Storefront",
        total: grand
      });

      state.cart = state.cart.filter(i => !i.selected);
      state.rewardPoints = Number(state.rewardPoints || 0) + Math.round(grand / 20);

      state.notifications.unshift({
        id: "n-" + Date.now(),
        group: "Today",
        icon: "🛍",
        title: `Order ${newOrderId} Confirmed!`,
        body: `Thank you, ${state.profile.name}! Your Tehzib order (${formatBDT(grand)}) via ${state.paymentMethod} is now in the Admin Fulfillment Pipeline.`,
        time: "NOW",
        isRecent: true,
        unread: true,
        targetView: "account"
      });

      if (typeof recordCustomerFrontendOrderInErp === "function") {
        recordCustomerFrontendOrderInErp({
          orderId: newOrderId.replace("#", ""),
          customerName: state.profile.name,
          customerPhone: state.profile.phone,
          customerAddress: state.profile.address,
          deliveryMethod: state.deliveryMethod === "express" ? "Express Delivery (Distance-Based)" : `Inside Dhaka Standard (${state.deliveryFee} BDT)`,
          deliveryFee: effectiveFee,
          discount: totals.discount,
          paymentMethod: state.paymentMethod,
          lineItems: lineItems,
          subtotal: totals.subtotal,
          totalRevenue: grand
        });
      }
      saveDynamicDatabase(`Customer "${state.profile.name}" placed Order ${newOrderId} (${formatBDT(grand)}) from Storefront`);
      renderAll();

      openModal({
        title: `Order ${newOrderId} Confirmed!`,
        message: `Thank you, ${state.profile.name}! Your order of ${formatBDT(grand)} (${state.paymentMethod}) has been placed for delivery to ${state.profile.address} and synced with the Admin Orders Pipeline.`,
        confirmText: "Track in My Orders",
        onConfirm: () => {
          switchScreen("account", { keepPanel: true });
          switchAccountPanel("orders", "To Receive");
        }
      });
    });

    document.getElementById("sidebarAvatarInitials")?.addEventListener("click", () => {
      if (!state.isLoggedIn) return;
      document.getElementById("profileAvatarFileInput")?.click();
    });
    document.getElementById("uploadProfilePhotoBtn")?.addEventListener("click", () => {
      if (!state.isLoggedIn) return;
      document.getElementById("profileAvatarFileInput")?.click();
    });

    document.getElementById("profileAvatarFileInput")?.addEventListener("change", (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const size = 160;
          canvas.width = size;
          canvas.height = size;
          const ctx = canvas.getContext("2d");
          const minDim = Math.min(img.width, img.height);
          const sx = (img.width - minDim) / 2;
          const sy = (img.height - minDim) / 2;
          ctx.drawImage(img, sx, sy, minDim, minDim, 0, 0, size, size);
          state.profile.avatar = canvas.toDataURL("image/jpeg", 0.85);
          saveDynamicDatabase(`Customer "${state.profile.name}" updated profile photo`);
          renderAll();
          showToast("Profile picture updated!");
        };
        img.src = String(reader.result || "");
      };
      reader.readAsDataURL(file);
      e.target.value = "";
    });

    function ensureProfileControlsUpgraded() {
      const genderEl = document.getElementById("inputGender");
      if (genderEl && genderEl.tagName !== "SELECT") {
        const selectEl = document.createElement("select");
        selectEl.className = "info-edit-input";
        selectEl.id = "inputGender";
        selectEl.style.display = genderEl.style.display || "none";
        selectEl.innerHTML = `
          <option value="">Select Gender</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Not to say">Not to say</option>
        `;
        genderEl.replaceWith(selectEl);
      }
      const dobEl = document.getElementById("inputDob");
      if (dobEl) {
        if (dobEl.type !== "date") {
          dobEl.type = "date";
          dobEl.removeAttribute("placeholder");
        }
        dobEl.max = new Date().toISOString().slice(0, 10);
        if (!dobEl.__pickerBound) {
          dobEl.__pickerBound = true;
          dobEl.addEventListener("click", () => {
            if (typeof dobEl.showPicker === "function") {
              try { dobEl.showPicker(); } catch (e) {}
            }
          });
        }
      }
    }
    ensureProfileControlsUpgraded();

    document.getElementById("toggleEditProfileBtn").addEventListener("click", () => {
      ensureProfileControlsUpgraded();
      const btn = document.getElementById("toggleEditProfileBtn");
      const fields = ["FullName", "Email", "Phone", "Address", "Gender", "Dob"];
      if (!state.isEditingProfile) {
        state.isEditingProfile = true;
        btn.textContent = "✓ Save Changes";
        document.getElementById("inputFullName").value = state.profile.name || "";
        document.getElementById("inputEmail").value = state.profile.email || "";
        document.getElementById("inputPhone").value = state.profile.phone || "+88";
        const addrIn = document.getElementById("inputAddress");
        if (addrIn) addrIn.value = state.profile.address || "";
        document.getElementById("inputGender").value = ["Female", "Male", "Not to say"].includes(state.profile.gender) ? state.profile.gender : "";
        const rawDob = state.profile.dob && state.profile.dob !== "Not Specified" ? String(state.profile.dob).trim() : "";
        let isoDob = "";
        if (/^\d{4}-\d{2}-\d{2}$/.test(rawDob)) {
          isoDob = rawDob;
        } else if (rawDob) {
          const parsedDate = new Date(rawDob);
          if (!Number.isNaN(parsedDate.getTime())) {
            isoDob = parsedDate.toISOString().slice(0, 10);
          }
        }
        document.getElementById("inputDob").value = isoDob;
        fields.forEach(f => {
          const valEl = document.getElementById("val" + f);
          const inEl = document.getElementById("input" + f);
          if (valEl) valEl.style.display = "none";
          if (inEl) inEl.style.display = "block";
        });
      } else {
        const newName = document.getElementById("inputFullName").value.trim();
        const newEmail = document.getElementById("inputEmail").value.trim().toLowerCase();
        const newPhoneRaw = document.getElementById("inputPhone").value.trim();
        const newAddr = (document.getElementById("inputAddress")?.value || "").trim();
        const newGender = document.getElementById("inputGender").value.trim();
        const newDob = document.getElementById("inputDob").value.trim();

        if (newEmail && !isValidEmailAddress(newEmail)) {
          showToast("Please enter a valid Email Address");
          return;
        }
        if (newEmail) {
          const owner = findCustomerByIdentifier(newEmail);
          if (owner && owner.id !== state.currentCustomerId) {
            showToast("That email is already registered to another account");
            return;
          }
        }
        let parsedPh = null;
        if (newPhoneRaw) {
          parsedPh = parseBdPhone(newPhoneRaw);
          if (!parsedPh) {
            showToast("Please enter a valid Bangladesh mobile number (e.g. 017XXXXXXXX)");
            return;
          }
          const owner = findCustomerByIdentifier(parsedPh.normalized);
          if (owner && owner.id !== state.currentCustomerId) {
            showToast("That mobile number is already registered to another account");
            return;
          }
        }
        if (!newEmail && !parsedPh) {
          showToast("At least an Email Address or Bangladesh mobile number is required");
          return;
        }

        if (newEmail !== (state.profile.email || "").toLowerCase()) {
          state.profile.emailVerified = false;
        }
        if ((parsedPh ? parsedPh.normalized : "") !== (state.profile.phoneNormalized || "")) {
          state.profile.phoneVerified = false;
        }

        state.profile.name = newName || state.profile.name;
        state.profile.email = newEmail;
        state.profile.phone = parsedPh ? parsedPh.formatted : "";
        state.profile.phoneNormalized = parsedPh ? parsedPh.normalized : "";
        state.profile.address = newAddr;
        state.profile.gender = newGender || "Not Specified";
        state.profile.dob = newDob || "Not Specified";

        state.isEditingProfile = false;
        btn.textContent = "✎ Edit Profile";
        fields.forEach(f => {
          const valEl = document.getElementById("val" + f);
          const inEl = document.getElementById("input" + f);
          if (valEl) valEl.style.display = "block";
          if (inEl) inEl.style.display = "none";
        });
        saveDynamicDatabase(`Customer "${state.profile.name}" updated account profile details`);
        renderAll();
        showToast("Profile updated and synced with Admin CRM");
      }
    });

    document.getElementById("changePasswordBtn").addEventListener("click", () => {
      openModal({
        title: "Change Account Password",
        message: "Enter your current password and new password below:",
        confirmText: "Update Password",
        customHtml: `
          <div style="display:flex; flex-direction:column; gap:8px; text-align:left;">
            <div id="changePassAlert" class="auth-alert-banner error" style="display:none;"></div>
            <input type="password" id="currentPassModalInput" class="info-edit-input" placeholder="Current Password" style="display:block;" />
            <input type="password" id="newPassModalInput" class="info-edit-input" placeholder="New Password (min 6 characters)" style="display:block;" />
          </div>
        `,
        onConfirm: () => {
          const alertEl = document.getElementById("changePassAlert");
          const curPw = document.getElementById("currentPassModalInput").value;
          const newPw = document.getElementById("newPassModalInput").value;
          if (!newPw || newPw.length < 6) {
            if (alertEl) {
              alertEl.textContent = "New password must be at least 6 characters.";
              alertEl.style.display = "block";
            }
            return false;
          }
          const cust = state.registeredCustomers.find(c => c.id === state.currentCustomerId);
          if (cust) {
            hashPassword(curPw).then(async curHash => {
              if (curHash !== cust.passwordHash) {
                showToast("Current password did not match");
                return;
              }
              cust.passwordHash = await hashPassword(newPw);
              saveDynamicDatabase(`Customer "${state.profile.name}" updated password`);
              showToast("Password securely updated");
            });
          } else {
            showToast("Password securely updated");
          }
        }
      });
    });

    document.getElementById("accountWishlistViewAllBtn").addEventListener("click", () => {
      switchAccountPanel("wishlist");
    });

    document.getElementById("wishlistSortSelect").addEventListener("change", (e) => {
      state.wishlistSort = e.target.value;
      renderAccountAndWishlist();
    });

    document.getElementById("triggerLogoutModalBtn").addEventListener("click", () => {
      openModal({
        title: "Log Out of Tehzib?",
        message: "Are you sure you want to log out of your account?",
        confirmText: "Yes, Log Out",
        onConfirm: () => {
          performCustomerLogout();
          switchScreen("home");
          showToast("You have been safely logged out of your session");
        }
      });
    });

    document.getElementById("markAllReadBtn").addEventListener("click", () => {
      state.notifications.forEach(n => { n.unread = false; });
      saveDynamicDatabase();
      renderAll();
      showToast("All notifications marked as read");
    });

    document.getElementById("newsletterForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("newsletterEmailInput").value.trim();
      if (email) {
        fetch("/api/newsletter", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email })
        }).catch(() => {});
        document.getElementById("newsletterEmailInput").value = "";
        showToast(`Welcome to Tehzib Privé! Voucher ${state.storeSettings.promoCode} sent to ${email}`);
      }
    });

    let remainingSeconds = 4 * 3600 + 23 * 60 + 51;
    setInterval(() => {
      if (remainingSeconds > 0) remainingSeconds -= 1;
      const hrs = String(Math.floor(remainingSeconds / 3600)).padStart(2, "0");
      const mins = String(Math.floor((remainingSeconds % 3600) / 60)).padStart(2, "0");
      const secs = String(remainingSeconds % 60).padStart(2, "0");
      const el = document.getElementById("flashTimerText");
      if (el) el.textContent = `Ends in: ${hrs}:${mins}:${secs}`;
    }, 1000);


    // ========================================================================
    // INITIALIZE UNIFIED FULL-STACK APPLICATION (STOREFRONT + ENTERPRISE ERP)
    // ========================================================================
    loadErpDatabase();
    seedFullCatalogIntoErpDb();
    if (Array.isArray(state.registeredCustomers)) {
      state.registeredCustomers.forEach(c => syncCustomerRecordWithErpCrm(c));
    }
    syncErpToStorefront();

    let initialTheme = "light";
    try {
      initialTheme = localStorage.getItem("tehzib_erp_theme") || "light";
    } catch (e) {}
    applyTheme(initialTheme);
    initAuthGate();
    bindErpFormsAndEvents();
    updateSpMarginPreview();
    renderAll();
    renderAllErpModules();


    // Restore server-authenticated admin session or initial /admin mode
    try {
      const srvAdmin = window.__TEHZIB_INITIAL_SERVER_STATE__?.adminSession;
      if (srvAdmin) {
        unlockErpWorkspace({
          id: srvAdmin.email || srvAdmin.name,
          role: srvAdmin.role,
          avatar: srvAdmin.avatar || "TA"
        });
      } else {
        const savedSession = localStorage.getItem(AUTH_SESSION_KEY);
        if (savedSession) {
          const parsedSess = JSON.parse(savedSession);
          if (parsedSess && parsedSess.id) unlockErpWorkspace(parsedSess);
        }
      }
      if (window.__TEHZIB_INITIAL_MODE__ === "admin" || window.location.pathname.startsWith("/admin")) {
        switchWorkspaceMode("admin");
      }
    } catch (e) {}

    window.__tehzibRuntimeReady = true;

