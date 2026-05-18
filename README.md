# Site Theme Deployment Architecture

Single-page application (SPA) architecture for Varsity Market storefront themes. Each theme is a single `interface` file (no extension) that renders as a full multi-page e-commerce website powered by hash-based routing.

---

## How Themes Work

A theme is one HTML file deployed to `/themes/{theme-name}/interface`. When a customer visits a store, the system loads that file through `skel/interface.php`, which:

1. Reads the `interface` file from the active theme directory
2. Extracts `e(__CONSTANT__)` placeholders and generates a `config.php` with `define()` calls
3. Replaces placeholders with PHP echo statements in a cached `encode.php`
4. Serves the processed file to the browser

The theme file must be **completely self-contained** — all HTML, CSS, JavaScript, templates, and mock data live in a single file.

### Available Constants

| Constant | Source | Example |
|---|---|---|
| `__SITE_TITLE__` | Store name from admin | `"OASIS Studios"` |
| `__SYSTEM_CURRENCY__` | Currency sign from settings | `"R"`, `"$"`, `"\u20AC"` |
| `__SYSTEM_API__` | API endpoint path | `"api.php"` |
| `__SYSTEM_JS_API__` | JS API client path | `"vm.api.js"` |
| `__SYSTEM_JS_THEME__` | Theme engine path | `"vm.theme.js"` |
| `__SYSTEM_JS_CONNECT__` | Connect script path | `"vm.connect.js"` |
| `__SITE_LOGO__` | Store logo URL | `"https://..."` |
| `__SHOP_INTRO__` | Hero headline text | `"Premium Goods"` |
| `__SHOP_PARAGRAPH__` | Hero subtext | `"Quality delivered."` |
| `__SHOP_DESCRIPTION__` | Store meta description | `"..."` |
| `__DESIGN_COLOR_PRIMARY__` | Brand accent color | `"#7c3aed"` |
| `__DESIGN_COLOR_BACKGROUND__` | Background color | `"#ffffff"` |
| `__DESIGN_COLOR_TEXT__` | Text color | `"#111111"` |
| `__DESIGN_COLOR_SURFACE__` | Card/surface color | `"#f9fafb"` |

Custom constants can be added via `autofill.json` in the theme directory.

---

## Store API Reference

Base URL: `api.php` (relative to the deployed site)

### GET Endpoints

| Endpoint | Params | Returns |
|---|---|---|
| `?state=products` | — | `[{id, name, price, image, description, stock, category_id}]` |
| `?state=product` | `id` | `{id, name, price, image, description, stock, category_id}` |
| `?state=categories` | — | `[{id, name}]` |
| `?state=products_by_category` | `category_id` | `[{id, name, price, image, ...}]` |
| `?state=search` | `q` | `[{id, name, price, image, ...}]` |
| `?state=discounts` | — | `[{id, code, percentage, active}]` |
| `?state=site` | — | `{name, currency, domain}` |
| `?state=orders` | `email` | `[{id, customer_name, total_amount, items, status, created_at}]` |

### POST Endpoints

| Endpoint | Body | Returns |
|---|---|---|
| `?state=order` | `{name, email, total, items}` | `{success, message}` |

### Authentication

API keys passed via `X-API-Key` header, `Authorization: Bearer {key}`, or `?api_key={key}` query parameter. The local `api.php` within the deployed site does not require authentication.

---

## Page Architecture (Minimum 12 Pages)

Every theme must implement these views as `<section>` elements with `id="view-{name}"` and class `view-section`. The router shows/hides sections based on the URL hash.

```
#home           -> Home / Landing Page
#shop           -> All Products (catalog grid)
#product?id=x   -> Product Detail Page
#collections    -> Collections / Categories
#sale           -> Sale / Discounted Items
#cart           -> Shopping Cart
#checkout       -> Multi-step Checkout
#search         -> Search Results
#about          -> About Us / Our Story
#contact        -> Contact Us
#faq            -> FAQ / Help Center
#track          -> Order Tracking
#terms          -> Terms & Conditions
#orders         -> Order History Lookup
```

### URL Structure

```
https://store.example.com/#home
https://store.example.com/#shop
https://store.example.com/#product?id=42
https://store.example.com/#collections
https://store.example.com/#sale
https://store.example.com/#cart
https://store.example.com/#checkout
https://store.example.com/#search?q=sneakers
https://store.example.com/#about
https://store.example.com/#contact
https://store.example.com/#faq
https://store.example.com/#track
https://store.example.com/#terms
https://store.example.com/#orders?email=user@mail.com
```

---

## Page Specifications

### 1. Home (`#home`)

The landing page. First impression — must be visually striking and conversion-focused.

**Required Sections:**
- **Announcement bar** — top strip with promo text (e.g. "Free shipping on orders over R500")
- **Hero banner** — large image or gradient with headline `e(__SHOP_INTRO__)`, subtext `e(__SHOP_PARAGRAPH__)`, and CTA button linking to `#shop`
- **Featured products** — 4-8 product cards from `?state=products` (first page) or mock data
- **Collection highlights** — 2-3 category cards from `?state=categories` linking to `#collections`
- **Social proof / trust badges** — shipping, returns, secure payment icons
- **Newsletter signup** — email input (stores locally or posts to contact endpoint)

**Data Source:** `?state=products` (limited to 8), `?state=categories`, `?state=site`

### 2. Shop / All Products (`#shop`)

Full product catalog with filtering, sorting, and pagination.

**Required Elements:**
- **Page title** with product count (e.g. "All Products (24)")
- **Category sidebar/filter** — populated from `?state=categories`, clickable to filter via `?state=products_by_category`
- **Sort dropdown** — Featured, Price Low-High, Price High-Low, Newest
- **Product grid** — responsive (1 col mobile, 2 col tablet, 3-4 col desktop)
- **Product cards** — image, name, price (formatted with currency), category label
- **Empty state** — "No products found" message when catalog is empty

**Data Source:** `?state=products`, `?state=categories`, `?state=products_by_category`

### 3. Product Detail (`#product?id=x`)

Single product page for purchase decisions.

**Required Elements:**
- **Breadcrumb** — Home > Shop > {Product Name}
- **Product image gallery** — main image with zoom capability
- **Product info** — name, price (with currency `e(__SYSTEM_CURRENCY__)`), description
- **Stock indicator** — "In Stock" / "Low Stock" / "Out of Stock" based on `stock` field
- **Quantity selector** — +/- controls, minimum 1, maximum = stock
- **Add to Cart button** — calls `cart.addItem()`, shows toast confirmation
- **Related products** — 4 products from the same category via `?state=products_by_category`
- **Back to shop link**

**Data Source:** `?state=product&id={id}`, `?state=products_by_category&category_id={category_id}`

### 4. Collections (`#collections`)

Browse by category.

**Required Elements:**
- **Category grid** — each card shows category name and product count
- **Category image** — use first product image from that category or a placeholder
- Clicking a category navigates to `#shop` with filter applied, or a `#collection?id=x` sub-view

**Data Source:** `?state=categories`, `?state=products_by_category`

### 5. Sale (`#sale`)

Discounted products and active promotions.

**Required Elements:**
- **Active discount codes** — from `?state=discounts`, displayed as badges or banner cards
- **Discount percentage display** — e.g. "UP TO 30% OFF"
- **Sale product grid** — products associated with active sales (or full catalog with discount badges)
- **Discount code copy button** — click-to-copy the code with visual feedback

**Data Source:** `?state=discounts`, `?state=products`

### 6. Cart (`#cart`)

Shopping cart review before checkout.

**Required Elements:**
- **Cart item list** — product image, name, unit price, quantity controls (+/-), line total, remove button
- **Cart summary** — subtotal, estimated shipping, discount applied, total
- **Discount code input** — text field to apply a promo code from `?state=discounts`
- **Empty cart state** — illustration + "Your cart is empty" + CTA to shop
- **Checkout button** — navigates to `#checkout`
- **Continue shopping link** — navigates to `#shop`

**Data Source:** localStorage cart, `?state=discounts` (for code validation)

### 7. Checkout (`#checkout`)

Multi-step checkout flow.

**Step 1 — Information:**
- Email address
- Full name
- Shipping address (street, city, province/state, postal code)

**Step 2 — Shipping:**
- Shipping method selection (populated from delivery rates if available)
- Delivery estimate display

**Step 3 — Payment:**
- Payment method selection (COD indicator, card form placeholder)
- Order review summary

**Step 4 — Confirmation:**
- Order success message
- Order number display
- "Continue Shopping" button
- Cart cleared on success

**Required Elements:**
- **Step indicator** — breadcrumb showing Information > Shipping > Payment
- **Order summary sidebar** — item list, subtotal, shipping, total
- **Back/Continue navigation** per step
- **Form validation** — required fields highlighted on submit
- **Place Order** button on final step — calls `POST ?state=order`

**Data Source:** localStorage cart, `POST ?state=order`

### 8. Search (`#search?q=x`)

Search results page.

**Required Elements:**
- **Search input** — pre-filled with query, supports live typing with debounce (300ms)
- **Result count** — "X results for '{query}'"
- **Product grid** — same card layout as shop
- **No results state** — "No products match '{query}'" with suggestion to browse shop
- **Search overlay** (optional) — modal/overlay triggered from header search icon

**Data Source:** `?state=search&q={query}`

### 9. About Us (`#about`)

Store brand story.

**Required Elements:**
- **Hero section** — brand headline and mission statement
- **Story section** — text + image grid about the brand
- **Values / features** — 3-4 value props (quality, sustainability, etc.)
- **Team or founder section** (optional)

**Data Source:** Static content, `e(__SHOP_DESCRIPTION__)` for store description

### 10. Contact (`#contact`)

Customer support and inquiries.

**Required Elements:**
- **Contact form** — name, email, order ID (optional), message, submit button
- **Contact info** — email address, physical address, phone
- **Business hours** (optional)
- **Form submit handler** — shows success toast, resets form

**Data Source:** Static content, form submission stored locally or POSTed

### 11. FAQ (`#faq`)

Common questions.

**Required Elements:**
- **Accordion list** — minimum 6 questions with expand/collapse
- **Categories**: Shipping, Returns, Payments, Orders, General
- **Search filter** (optional) — filter FAQ items by keyword

**Suggested Questions:**
1. What is your shipping policy?
2. How do I return or exchange an item?
3. What payment methods do you accept?
4. How do I track my order?
5. Do you ship internationally?
6. How do I apply a discount code?
7. What is your refund policy?
8. How do I contact customer support?

### 12. Order Tracking (`#track`)

Order status lookup.

**Required Elements:**
- **Order ID input** — text field for order reference
- **Track button** — simulates or queries order status
- **Status display** — order found/not found, status steps (Confirmed > Processing > Shipped > Delivered)
- **Timeline visualization** — step dots or progress bar

**Data Source:** `?state=orders&email={email}` or simulated tracking

### 13. Terms & Conditions (`#terms`)

Legal pages.

**Required Elements:**
- Terms of Service text
- Privacy Policy section
- Refund/Return Policy section
- Clean typography, readable layout

### 14. Order History (`#orders?email=x`)

Customer order lookup.

**Required Elements:**
- **Email input** — to look up past orders
- **Order list** — table or cards showing order ID, date, total, status
- **Order detail expand** — item breakdown per order
- **Empty state** — "No orders found for this email"

**Data Source:** `?state=orders&email={email}`

---

## Mock Data Specification

Every theme **must** include a fallback mock dataset that renders when the API is unreachable. This ensures the theme displays correctly in preview mode, during development, and when deployed without API connectivity.

### Mock Data Structure

```javascript
const MOCK = {
    site: {
        name: "THEME_NAME Store",
        currency: "$",
        domain: window.location.hostname
    },
    categories: [
        { id: 1, name: "Apparel" },
        { id: 2, name: "Accessories" },
        { id: 3, name: "Footwear" },
        { id: 4, name: "Home & Living" }
    ],
    products: [
        {
            id: 1,
            name: "Essential Cotton Tee",
            price: 45.00,
            image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600",
            description: "Premium heavyweight cotton with a relaxed fit.",
            stock: 24,
            category_id: 1
        },
        {
            id: 2,
            name: "Classic Denim Jacket",
            price: 185.00,
            image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600",
            description: "Rigid selvedge denim with a structured silhouette.",
            stock: 8,
            category_id: 1
        },
        {
            id: 3,
            name: "Leather Crossbody Bag",
            price: 120.00,
            image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600",
            description: "Full-grain vegetable-tanned leather with brass hardware.",
            stock: 15,
            category_id: 2
        },
        {
            id: 4,
            name: "Minimalist Canvas Sneakers",
            price: 95.00,
            image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600",
            description: "Vulcanized rubber sole with organic cotton upper.",
            stock: 32,
            category_id: 3
        },
        {
            id: 5,
            name: "Wool Blend Overcoat",
            price: 320.00,
            image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600",
            description: "Italian wool-cashmere blend with a tailored drop shoulder.",
            stock: 5,
            category_id: 1
        },
        {
            id: 6,
            name: "Stoneware Ceramic Vase",
            price: 68.00,
            image: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600",
            description: "Hand-thrown stoneware with a matte glaze finish.",
            stock: 18,
            category_id: 4
        },
        {
            id: 7,
            name: "Titanium Frame Sunglasses",
            price: 210.00,
            image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600",
            description: "Ultra-lightweight Japanese titanium with polarized lenses.",
            stock: 12,
            category_id: 2
        },
        {
            id: 8,
            name: "Linen Relaxed Trousers",
            price: 110.00,
            image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600",
            description: "Belgian linen with an elastic waistband and tapered leg.",
            stock: 20,
            category_id: 1
        }
    ],
    discounts: [
        { id: 1, code: "WELCOME10", percentage: 10, active: 1 },
        { id: 2, code: "SUMMER20", percentage: 20, active: 1 }
    ]
};
```

### API Wrapper with Fallback

Every theme must use this pattern to fetch data with mock fallback:

```javascript
async function fetchStore(state, params = {}) {
    const url = new URL("api.php", window.location.href);
    url.searchParams.set("state", state);
    for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);

    try {
        const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
        if (!res.ok) throw new Error(res.status);
        return await res.json();
    } catch (e) {
        console.warn(`API offline, using mock data for: ${state}`);
        return getMockData(state, params);
    }
}

function getMockData(state, params) {
    switch (state) {
        case "site":       return MOCK.site;
        case "products":   return MOCK.products;
        case "product":    return MOCK.products.find(p => p.id == params.id) || null;
        case "categories": return MOCK.categories;
        case "products_by_category":
            return MOCK.products.filter(p => p.category_id == params.category_id);
        case "search":
            const q = (params.q || "").toLowerCase();
            return MOCK.products.filter(p =>
                p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
            );
        case "discounts": return MOCK.discounts;
        case "orders":    return [];
        default:          return [];
    }
}
```

---

## Currency Formatting

All prices must be formatted using the store's configured currency symbol. The currency is loaded from:

1. `e(__SYSTEM_CURRENCY__)` — PHP constant injected at build time
2. `?state=site` API response — `{currency: "R"}`
3. Fallback: `"$"`

### Currency Formatter

```javascript
function formatPrice(amount, currency = null) {
    const sym = currency || window.StoreConfig?.currency || "$";
    return `${sym}${parseFloat(amount).toFixed(2)}`;
}
```

Usage in templates: `formatPrice(product.price)` outputs `R185.00` or `$185.00`.

---

## SPA Router

The router manages view switching via URL hash. All navigation uses `#page` or `#page?key=value` format.

```javascript
const router = {
    init() {
        window.addEventListener("hashchange", () => this.resolve());
        window.addEventListener("load", () => this.resolve());
    },

    navigate(view, params = {}) {
        let hash = `#${view}`;
        const qs = new URLSearchParams(params).toString();
        if (qs) hash += `?${qs}`;
        window.location.hash = hash;
    },

    resolve() {
        const raw = window.location.hash.slice(1) || "home";
        const [view, qs] = raw.split("?");
        const params = Object.fromEntries(new URLSearchParams(qs || ""));

        // Hide all views, show target
        document.querySelectorAll(".view-section").forEach(s => s.classList.remove("active"));
        const target = document.getElementById(`view-${view}`);
        if (target) {
            target.classList.add("active");
        } else {
            document.getElementById("view-home")?.classList.add("active");
        }

        // Trigger page-specific rendering
        this.onRoute(view, params);
        window.scrollTo({ top: 0, behavior: "instant" });
    },

    onRoute(view, params) {
        // Override per theme — load data and render dynamic content
    }
};
```

### SEO Considerations

Since this is a hash-based SPA, traditional crawling is limited. Apply these techniques:

1. **`<title>` tag** — update `document.title` on every route change to reflect the current page
2. **`<meta name="description">`** — update dynamically per page
3. **Open Graph tags** — set default OG image, title, description in the `<head>` using `e()` constants
4. **Semantic HTML** — use proper `<header>`, `<main>`, `<footer>`, `<nav>`, `<article>`, `<section>` tags
5. **Structured data** — inject `<script type="application/ld+json">` for Product and Organization schemas
6. **Accessible navigation** — use `<a href="#shop">` links (not just onclick) so hash URLs are crawlable
7. **Sitemap hint** — include a `<noscript>` fallback that lists all page links as plain HTML

```html
<head>
    <title>e(__SITE_TITLE__)</title>
    <meta name="description" content="e(__SHOP_DESCRIPTION__)">
    <meta property="og:title" content="e(__SITE_TITLE__)">
    <meta property="og:description" content="e(__SHOP_DESCRIPTION__)">
    <meta property="og:image" content="e(__SITE_LOGO__)">
    <link rel="icon" href="e(__SITE_LOGO__)">
</head>
```

---

## Cart System

Uses localStorage for persistence. Cart state is shared across all views.

```javascript
const cart = {
    items: JSON.parse(localStorage.getItem("vm_cart") || "[]"),

    save() {
        localStorage.setItem("vm_cart", JSON.stringify(this.items));
        this.updateBadge();
        window.dispatchEvent(new CustomEvent("cart-updated"));
    },

    add(product, qty = 1) {
        const existing = this.items.find(i => i.id === product.id);
        if (existing) existing.qty += qty;
        else this.items.push({ ...product, qty });
        this.save();
    },

    update(productId, qty) {
        const item = this.items.find(i => i.id === productId);
        if (!item) return;
        item.qty = Math.max(0, qty);
        if (item.qty === 0) this.remove(productId);
        else this.save();
    },

    remove(productId) {
        this.items = this.items.filter(i => i.id !== productId);
        this.save();
    },

    clear() { this.items = []; this.save(); },

    subtotal() { return this.items.reduce((s, i) => s + i.price * i.qty, 0); },

    count() { return this.items.reduce((s, i) => s + i.qty, 0); },

    applyDiscount(code, discounts) {
        const d = discounts.find(d => d.code === code && d.active);
        if (!d) return null;
        return { code: d.code, percentage: d.percentage, amount: this.subtotal() * (d.percentage / 100) };
    },

    updateBadge() {
        document.querySelectorAll("[data-cart-count]").forEach(el => {
            const c = this.count();
            el.textContent = c;
            el.style.display = c > 0 ? "" : "none";
        });
    }
};
```

---

## Theme File Structure

Every theme directory contains:

```
themes/{theme-name}/
    interface          # The single-page HTML file (required)
    poster.png         # Theme preview thumbnail 800x600 (required)
    autofill.json      # Default constant values (optional)
    .version_hash      # Auto-generated version tracking (system)
```

### Template Skeleton

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>e(__SITE_TITLE__)</title>
    <meta name="description" content="e(__SHOP_DESCRIPTION__)">
    <meta property="og:title" content="e(__SITE_TITLE__)">
    <meta property="og:description" content="e(__SHOP_DESCRIPTION__)">
    <meta property="og:image" content="e(__SITE_LOGO__)">
    <link rel="icon" href="e(__SITE_LOGO__)">

    <!-- Tailwind CSS (CDN) -->
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <!-- Icons (Lucide, Bootstrap Icons, or Heroicons) -->

    <style>
        /* Theme-specific styles */
        body { font-family: 'Inter', sans-serif; }
        .view-section { display: none; }
        .view-section.active { display: block; }
    </style>
</head>
<body>

    <!-- ====== ANNOUNCEMENT BAR ====== -->
    <div id="announcement-bar">...</div>

    <!-- ====== HEADER / NAVIGATION ====== -->
    <header>
        <nav>
            <a href="#home">e(__SITE_TITLE__)</a>
            <a href="#shop">Shop</a>
            <a href="#collections">Collections</a>
            <a href="#sale">Sale</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <button id="search-toggle">Search</button>
            <a href="#cart">Cart (<span data-cart-count>0</span>)</a>
        </nav>
    </header>

    <!-- ====== MAIN CONTENT ====== -->
    <main>
        <section id="view-home" class="view-section active"><!-- Home --></section>
        <section id="view-shop" class="view-section"><!-- Shop --></section>
        <section id="view-product" class="view-section"><!-- Product Detail --></section>
        <section id="view-collections" class="view-section"><!-- Collections --></section>
        <section id="view-sale" class="view-section"><!-- Sale --></section>
        <section id="view-cart" class="view-section"><!-- Cart --></section>
        <section id="view-checkout" class="view-section"><!-- Checkout --></section>
        <section id="view-search" class="view-section"><!-- Search Results --></section>
        <section id="view-about" class="view-section"><!-- About Us --></section>
        <section id="view-contact" class="view-section"><!-- Contact --></section>
        <section id="view-faq" class="view-section"><!-- FAQ --></section>
        <section id="view-track" class="view-section"><!-- Order Tracking --></section>
        <section id="view-terms" class="view-section"><!-- Terms --></section>
        <section id="view-orders" class="view-section"><!-- Order History --></section>
    </main>

    <!-- ====== CART DRAWER (slide-out) ====== -->
    <div id="cart-drawer">...</div>

    <!-- ====== SEARCH OVERLAY ====== -->
    <div id="search-overlay">...</div>

    <!-- ====== TOAST NOTIFICATIONS ====== -->
    <div id="toast">...</div>

    <!-- ====== FOOTER ====== -->
    <footer>
        <div><!-- Shop links --></div>
        <div><!-- Company links --></div>
        <div><!-- Support links --></div>
        <div><!-- Newsletter signup --></div>
        <p>&copy; 2026 e(__SITE_TITLE__). All rights reserved.</p>
    </footer>

    <script>
        // === MOCK DATA ===
        const MOCK = { /* ... full mock dataset ... */ };

        // === API WRAPPER ===
        async function fetchStore(state, params) { /* ... with mock fallback ... */ }
        function getMockData(state, params) { /* ... */ }

        // === CURRENCY ===
        function formatPrice(amount) { /* ... */ }

        // === CART ===
        const cart = { /* ... localStorage cart system ... */ };

        // === ROUTER ===
        const router = { /* ... hash-based SPA router ... */ };

        // === PAGE RENDERERS ===
        // Each view has a render function called by router.onRoute()

        // === INIT ===
        window.addEventListener("DOMContentLoaded", () => {
            router.init();
            cart.updateBadge();
        });
    </script>

</body>
</html>
```

---

## Global UI Components

These components must be present in every theme, persistent across all views:

### 1. Header Navigation
- Logo linking to `#home`
- Nav links: Shop, Collections, Sale, About, Contact
- Search icon (toggles search overlay)
- Cart icon with item count badge
- Mobile hamburger menu

### 2. Cart Drawer
- Slide-out panel from right side
- Shows cart items with quantity controls
- Subtotal display
- "Checkout" button navigating to `#checkout`
- Overlay backdrop that closes drawer on click

### 3. Search Overlay
- Full-screen or large modal overlay
- Auto-focus text input
- Live search results with debounce (300ms)
- Product result cards linking to `#product?id=x`
- Close button / ESC key handler

### 4. Toast Notifications
- Fixed position (bottom-right or bottom-center)
- Auto-dismiss after 3 seconds
- Types: success (green), error (red), info (neutral)
- Used for: add to cart, order placed, form submitted, errors

### 5. Footer
- 4-column grid: Shop, Company, Support, Newsletter
- Link to all pages: Shop, About, Contact, FAQ, Terms, Track Order
- Copyright with `e(__SITE_TITLE__)`
- Social media icons (optional)

---

## Design Guidelines

Themes should follow Shopify-level quality standards:

### Typography
- Use Google Fonts: `Inter`, `Plus Jakarta Sans`, `DM Sans` for body; `Playfair Display`, `Fraunces` for headings
- Body text: 14-16px, line-height 1.6
- Headings: clear hierarchy (h1 > h2 > h3)

### Spacing
- Section padding: `py-16` to `py-24`
- Grid gaps: `gap-4` to `gap-8`
- Content max-width: `max-w-7xl` (1280px)

### Colors
- Use `e(__DESIGN_COLOR_*)` constants for brand colors
- Maintain sufficient contrast (WCAG AA minimum)
- Neutral palette for surfaces and text

### Responsive Breakpoints
- Mobile: 0-640px (1 column grid, stacked layout)
- Tablet: 641-1024px (2 column grid)
- Desktop: 1025px+ (3-4 column grid, sidebar layouts)

### Interactions
- Hover states on all clickable elements
- Smooth transitions (200-300ms)
- Loading skeletons for async content
- Focus states for accessibility

---

## Deployment Checklist

Before publishing a theme:

- [ ] All 14 view sections implemented and navigable
- [ ] Mock data renders correctly when API is offline
- [ ] API data loads and replaces mock data when online
- [ ] Cart add/remove/update works across all views
- [ ] Checkout flow completes and places order via API
- [ ] Currency displays correctly using store configuration
- [ ] All `e(__CONSTANT__)` placeholders are used where applicable
- [ ] Mobile responsive at all breakpoints
- [ ] Search returns results and handles empty state
- [ ] Discount codes can be applied in cart
- [ ] `poster.png` preview image is included (800x600)
- [ ] `autofill.json` has sensible defaults for all custom constants
- [ ] Page title updates on every route change
- [ ] No console errors in production
- [ ] Toast notifications work for all user actions
