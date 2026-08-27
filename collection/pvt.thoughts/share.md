# Sharing and Recreating This Theme

This file explains how another developer can create a theme like `pvt.thoughts` in this codebase.

The goal is to keep the theme:

- PHP-first
- API-driven for catalog and content
- Page-based instead of component-heavy
- Easy to extend by adding files under `data/pages`
- Compatible with the engine’s `theme.structure.kit` and `theme.template.kit` pattern

## 1. Theme Layout

A theme in this system usually lives in a folder like:

```text
collection/<theme-name>/
```

The important files are:

- `index.html`
- `guide.md`
- `share.md`
- `data/head.php`
- `data/body.php`
- `data/navbar.card`
- `data/theme.structure.kit`
- `data/theme.template.kit`
- `data/pages/*.page`

## 2. What Each File Does

### `index.html`

This is the visual prototype or full static preview of the theme.

Use it to:

- design the homepage layout
- test spacing and typography
- preview product cards, hero sections, and checkout panels

### `data/head.php`

This contains the theme’s styles, metadata, and shell-level assets.

Use it for:

- CSS variables
- typography
- button styles
- cards and layout helpers
- theme-specific utility classes

### `data/body.php`

This defines the structural wrapper for the app.

Typical responsibilities:

- render the navbar
- wrap the main content
- render the footer
- load any shared scripts

### `data/navbar.card`

This is the reusable navbar fragment.

It should link to:

- home
- shop
- collection
- cart
- checkout
- account
- orders
- search

### `data/theme.structure.kit`

This file contains the PHP rendering helpers.

In `pvt.thoughts`, this is where functions like these belong:

- `app()->create_shop_ui($products)`
- `app()->create_related_products_ui($products)`
- `app()->create_product_ui($product)`
- `app()->create_category_ui($categories)`
- `app()->card($name)`

Use this file when the page needs to:

- transform API data into HTML
- render repeated card lists
- keep rendering logic centralized

### `data/theme.template.kit`

This file contains the string templates used by `theme.structure.kit`.

It should define placeholder tokens like:

- `(#item_id)`
- `(#item_name)`
- `(#item_desc)`
- `(#item_image)`
- `(#item_price)`
- `(#item_category)`

The rule is simple:

1. `theme.template.kit` defines the HTML skeleton.
2. `theme.structure.kit` replaces placeholders with API data.

## 3. Page Creation Rules

Each page under `data/pages` should be a self-contained HTML snippet, or a PHP page fragment when data is needed.

Use a page file when the page is:

- a product listing
- a product detail page
- checkout
- account dashboard
- order history
- search results
- policy or support content

For data-driven pages, use the engine directive style:

```html
<!-- #!/engine/node/
app()->create_shop_ui(api()->async_products());
-->
```

or:

```html
<!-- #!/engine/node/
app()->create_product_ui($product);
-->
```

## 4. When To Use PHP

Use PHP inside a page when you need:

- session state
- cookie state
- request handling
- filtering a list of products
- precomputing totals

Typical examples:

- checkout totals
- customer profile data
- order history
- product search filtering

### Session usage

For checkout and account features, store state in `$_SESSION`.

Recommended structure:

```php
$_SESSION['store'] = [
    'customer' => [],
    'cart' => [],
    'orders' => [],
    'last_order' => null,
    'checkout_status' => 'idle',
];
```

### Cookie usage

Use cookies for lightweight persistence, such as:

- customer email
- last order number
- theme preference

Keep cookies small and non-sensitive.

## 5. Checkout Pattern

The checkout page should do three things:

1. Read cart data from session
2. Show shipping and payment fields
3. Store the submitted order back into session

Good checkout pages should:

- calculate totals on the server
- not rely only on browser local storage
- show a clear order summary
- preserve customer details after submission

If you later connect a real gateway, keep the same page structure and replace only the payment execution layer.

## 6. Account Dashboard Pattern

The account dashboard should surface:

- customer name
- email
- saved address
- order count
- last order
- checkout status

This page should be read-only unless you explicitly add editable profile forms.

Good companion pages:

- `orders.page`
- `track-order.page`
- `wishlist.page`

## 7. Orders Pattern

The orders page should read from session or the API and render a simple list:

- order number
- date
- payment method
- total
- status

If the theme later gains a database-backed order system, this page can switch from session data to persistent order records without changing the public layout much.

## 8. Reusable Template Rules

Keep repeated UI inside the kit files, not duplicated in every page.

Examples:

- product card template
- related product card template
- category card template
- product detail template

This keeps the theme easy to maintain and lets other developers add pages without rewriting rendering logic.

## 9. Naming Conventions

Use short, lowercase, hyphenated file names:

- `shop.page`
- `product.page`
- `checkout.page`
- `account.page`
- `privacy-policy.page`
- `shipping-policy.page`

Use the same naming pattern in links:

- `?page=shop`
- `?page=product`
- `?page=checkout`
- `?page=account`

## 10. A Simple Build Recipe

To build a new theme like this:

1. Create the theme folder under `collection/`.
2. Add `index.html` as the design prototype.
3. Add `data/head.php`, `data/body.php`, and `data/navbar.card`.
4. Add `data/theme.structure.kit` and `data/theme.template.kit`.
5. Create page fragments under `data/pages/`.
6. Use the API for catalog, categories, and product detail data.
7. Use session and cookies for checkout and account state.
8. Keep the rendering logic centralized in the kit files.

## 11. Practical Advice

- Keep pages visually consistent with a shared card system.
- Avoid hardcoding product data into the page markup.
- Use `api()->async_products()` and `api()->async_single_products()` for store content.
- Keep checkout server-side even if the cart is initially assembled in the browser.
- Prefer one source of truth for state.

## 12. What Other Developers Should Copy

If another developer wants to create a theme from this one, they should copy the pattern, not just the HTML.

The pattern is:

- structure the app around pages
- render repeated data through the kit layer
- keep session-backed purchase state in PHP
- use cookies only for lightweight persistence
- keep the theme extensible by adding more page files

That is the safest way to produce more themes that behave like `pvt.thoughts` without coupling everything to a single page file.
