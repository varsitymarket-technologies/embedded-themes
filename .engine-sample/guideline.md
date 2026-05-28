# Guideline for Recreating the `.engine-sample/interface` Template as Shopify HTML (Liquid) Templates

---

## Goal
Create a comprehensive **guideline.md** that documents how to transform the existing `/.engine-sample/interface` HTML/CSS/JS template into a set of **Shopify‑compatible HTML (Liquid) templates**. The guide covers:
- Overall project structure
- Mapping of existing components to Shopify sections/snippets
- CSS variables and design tokens
- JavaScript integration (keeping the dynamic behavior)
- SEO best practices
- Asset handling (images, fonts, icons)
- Deployment steps for a Shopify theme

---

## 1. Overview of the Existing Template

### 1.1 File Layout (excerpt)
```
/.engine-sample/interface
├─ index.html               # main entry point
├─ <style> block            # CSS variables, global styles
├─ <header>                 # navigation bar
├─ <section id="view-home">          # hero, value bar, featured products, collections, CTA, newsletter
├─ <section id="view-shop">          # shop page with filters & product grid
├─ <section id="view-product">       # product detail page
├─ <section id="view-cart">          # cart drawer
├─ <section id="view-checkout">      # checkout steps
├─ <section id="view-contact">       # contact form
├─ <section id="view-faq">           # FAQ list
├─ <section id="view-dashboard">     # user dashboard (orders, address, wishlist, settings)
├─ <footer>                 # site footer
└─ <script>                 # mock API, cart, auth, wishlist, address logic
```

### 1.2 Key Design Tokens (CSS Variables)
```css
:root {
  --void:    #080808;   /* background dark */
  --pit:     #111111;   /* secondary dark */
  --shaft:   #1a1a1a;   /* card background */
  --steel:   #252525;   /* borders */
  --wire:    #333333;   /* subtle lines */
  --ash:     #888888;   /* muted text */
  --bone:    #cccccc;   /* light text */
  --white:   #f0f0f0;   /* pure white */
  --blood:   #c0000a;   /* primary accent */
  --crimson: #e8000f;   /* hover accent */
  --ember:   #ff4444;   /* error accent */
  --glow:    rgba(192,0,10,0.15); /* glow effect */
}
```
These should be exposed as **Shopify theme settings** (via `settings_schema.json`) so merchants can customize colours.

---

## 2. Mapping to Shopify Theme Architecture

Shopify themes consist of:
- **Layout files** (`theme.liquid`, `checkout.liquid`)
- **Templates** (`index.liquid`, `product.liquid`, `collection.liquid`, `page.contact.liquid`, etc.)
- **Sections** (reusable components that can be added/removed via the theme editor)
- **Snippets** (small reusable pieces)
- **Assets** (CSS, JS, images, fonts)
- **Config** (`settings_schema.json`, `settings_data.json`)

### 2.1 Layout (`layout/theme.liquid`)
```liquid
<!doctype html>
<html lang="en">
<head>
  {{ content_for_header }}
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>{{ page_title }} – {{ shop.name }}</title>
  {{ 'theme.css' | asset_url | stylesheet_tag }}
  {{ 'theme.js' | asset_url | script_tag }}
</head>
<body class="{{ template }}">
  {% section 'header' %}
  {{ content_for_layout }}
  {% section 'footer' %}
</body>
</html>
```
The `header` and `footer` sections will house the navigation and footer markup.

### 2.2 Templates & Sections Mapping
| Existing Page | Shopify Template | Sections to Create |
|---|---|---|
| Home (`view‑home`) | `templates/index.liquid` | `hero`, `value-bar`, `featured-products`, `collections-overview`, `cta-banner`, `newsletter` |
| Shop (`view‑shop`) | `templates/collection.liquid` | `collection-filters`, `product-grid` |
| Product Detail (`view‑product`) | `templates/product.liquid` | `product-media`, `product-info`, `add-to-cart` |
| Cart (`view‑cart`) | `templates/cart.liquid` | `cart-items`, `cart-summary` |
| Checkout (`view‑checkout`) | `templates/checkout.liquid` (Shopify handles most) | Custom `checkout-steps` if you need a pre‑checkout page |
| Contact (`view‑contact`) | `templates/page.contact.liquid` | `contact-form` |
| FAQ (`view‑faq`) | `templates/page.faq.liquid` | `faq-list` |
| Dashboard (`view‑dashboard`) | **Not native** – could be built as a private app or separate site. Document as optional. |

---

## 3. Section & Snippet Details

### 3.1 Header (`sections/header.liquid`)
- Use the existing `<nav>` markup.
- Replace static URLs with Shopify helpers (`{{ routes.root_url }}`, `{{ routes.collections_url }}`).
- Add a **mobile navigation** toggle using the same HTML but with Shopify‑compatible IDs.
- Export navigation colours as theme settings (see §4).

### 3.2 Footer (`sections/footer.liquid`)
- Convert the `<footer>` block into a section.
- Use **link lists** (`linklists.footer`) for dynamic navigation.
- Add social icons via SVG snippets.
- Include the copyright text with `{{ 'now' | date: "%Y" }}`.

### 3.3 Hero (`sections/hero.liquid`)
- Keep the `.hero-wrap` HTML.
- Replace placeholder text (`e(__SHOP_INTRO__)`) with **Shopify metafields** or `{{ shop.description }}`.
- Make the background image a **section setting** (`image_picker`).
- Example setting usage:
  ```liquid
  <div class="hero-right-img" style="background-image:url({{ section.settings.hero_image | img_url: 'master' }});"></div>
  ```

### 3.4 Product Card (`snippets/product-card.liquid`)
```liquid
<div class="product-card" data-product-id="{{ product.id }}">
  {% if product.featured_image %}
    <img src="{{ product.featured_image | img_url: '600x' }}" alt="{{ product.title }}" class="product-card-img" loading="lazy" />
  {% else %}
    <div class="product-card-img-placeholder">No Image</div>
  {% endif %}
  <div class="product-card-body">
    <p class="product-card-cat">{{ product.type }}</p>
    <h3 class="product-card-name">{{ product.title }}</h3>
    <p class="product-card-price">{{ product.price | money }}</p>
    <button class="product-card-add" onclick="quickAddToCart({{ product.id }}, event)">Quick Add</button>
  </div>
</div>
```
- Uses Shopify's `product` object.
- Wishlist functionality can stay client‑side via `localStorage`.

### 3.5 Cart Drawer (`sections/cart-drawer.liquid`)
- Keep the same markup but replace custom cart calls with **Shopify Ajax API** (`/cart/add.js`, `/cart/change.js`).
- Update `cart.updateBadge()` to read from `Shopify.cart` via `/cart.js`.

### 3.6 Checkout Steps (`sections/checkout-steps.liquid`)
- Shopify already provides a checkout UI; if a custom pre‑checkout page is required, use `templates/checkout.liquid` and embed the same steps.

---

## 4. CSS & Assets

### 4.1 Convert Inline `<style>` to `assets/theme.css`
- Move the entire `<style>` block into `assets/theme.css`.
- Replace CSS variables with **Shopify theme settings** using the Liquid syntax, e.g.:
  ```css
  :root {
    --blood: {{ settings.color_primary }};
    --void: {{ settings.color_background }};
    /* … */
  }
  ```
- Keep the rest of the CSS unchanged; it already uses the dark‑mode palette.

### 4.2 Fonts
- The template loads Google Fonts (`Bebas Neue`, `Barlow`, `IBM Plex Mono`). Add them to `theme.liquid` head via a `<link>` tag or create a `fonts.css` asset and include it.

### 4.3 Icons & SVGs
- Store SVG icons in `assets/` and reference with `{{ 'icon-search.svg' | asset_url }}`.
- For social icons, create snippets like `snippets/icon-facebook.liquid`.

---

## 5. JavaScript Integration

### 5.1 Asset `theme.js`
- Copy the existing `<script>` content (mock API, cart, auth, wishlist, address) into `assets/theme.js`.
- Replace any direct DOM queries with **Shopify‑specific selectors** where possible.
- Keep the **mock data** only for local development; in production the Ajax API will replace it.

### 5.2 Shopify Ajax Cart Example
```js
function addToCart(productId, qty = 1) {
  fetch('/cart/add.js', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: productId, quantity: qty })
  })
  .then(r => r.json())
  .then(data => {
    // Update UI – badge, cart drawer, etc.
    updateCartBadge();
    showToast(`${data.title} added`, 'success');
  })
  .catch(console.error);
}
```
- Update the existing `cart` object to call these endpoints instead of the mock implementation.

---

## 6. SEO & Accessibility
- Add **meta tags** (`title`, `description`, `og:*`) using Shopify's built‑in variables (`{{ page_title }}`, `{{ shop.meta_description }}`).
- Ensure all images have `alt` attributes (`{{ product.title }}`).
- Use proper heading hierarchy (`<h1>` per page). 
- Add `aria-label`s to navigation buttons and form fields for screen readers.

---

## 7. Theme Settings (`config/settings_schema.json`)
Create a settings schema that mirrors the CSS variables and component toggles:
```json
[
  {
    "name": "Colors",
    "settings": [
      { "type": "color", "id": "color_primary",   "label": "Primary (Blood)",   "default": "#c0000a" },
      { "type": "color", "id": "color_background","label": "Background (Void)", "default": "#080808" },
      { "type": "color", "id": "color_secondary", "label": "Secondary (Pit)",   "default": "#111111" },
      { "type": "color", "id": "color_accent",    "label": "Accent (Crimson)", "default": "#e8000f" }
    ]
  },
  {
    "name": "Header",
    "settings": [
      { "type": "image_picker", "id": "logo", "label": "Logo" },
      { "type": "url", "id": "logo_link", "label": "Logo Link", "default": "/" }
    ]
  },
  {
    "name": "Footer",
    "settings": [
      { "type": "text", "id": "footer_copyright", "label": "Copyright Text", "default": "© {{ 'now' | date: '%Y' }} {{ shop.name }}. All rights reserved." }
    ]
  }
]
```
- Map each CSS variable to a setting and reference it in `theme.css` as shown in §4.1.

---

## 8. Deployment Steps
1. **Create a new Shopify theme** via the admin (`Online Store > Themes > Add theme > Upload zip`).
2. **Package** the following directories:
   - `layout/`
   - `templates/`
   - `sections/`
   - `snippets/`
   - `assets/`
   - `config/`
3. **Upload** the zip file.
4. In the **Theme Editor**, customize colours, logo, and hero image using the settings created.
5. **Test** all pages (home, collection, product, cart, checkout) on a development store.
6. **Publish** when everything looks good.

---

## 9. Optional: Shopify App Integration (Advanced)
If you need server‑side features (e.g., real order tracking, a full user dashboard), consider building a **Shopify app** that exposes custom endpoints and uses the Storefront API. The current `dashboard` section can be re‑implemented as a **private app page** or a separate hosted app.

---

## 10. Checklist for the Guideline Document
- [ ] Project file‑tree diagram
- [ ] Mapping table (existing → Shopify)
- [ ] Section and snippet code snippets
- [ ] CSS variable → theme‑setting conversion examples
- [ ] JavaScript Ajax‑cart examples
- [ ] SEO meta‑tag examples
- [ ] Settings schema JSON example
- [ ] Deployment instructions
- [ ] Optional app‑integration notes

---

*This guideline is ready to be used as a reference for turning the `.engine-sample/interface` template into a fully functional Shopify theme.*
