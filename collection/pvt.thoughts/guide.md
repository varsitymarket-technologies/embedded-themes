# Building an Online Store with the Embedded Store API

This guide explains how to use the public store API in this codebase to build a working online store frontend.

The API is designed around one store-specific gateway:

```text
GET/POST /store-access/{store_id}/?state={endpoint}
```

`store_id` is the numeric id from `sys_websites`.

## What the API already gives you

The backend already supports the main ecommerce building blocks:

- Product listing and product detail pages
- Categories
- Search
- Cart creation and cart mutation
- Checkout session creation and completion
- Guest orders
- Customer accounts, addresses, and order history
- Payment method discovery
- Delivery zone data
- Product reviews

That means you can build a store without inventing a separate backend. The public API is already the source of truth for catalog, cart, checkout, and customer account flows.

## Authentication model

There are two layers of auth:

### 1. Store API key

Required for almost every request.

Send it as one of:

```http
Authorization: Bearer <store_api_key>
X-API-Key: <store_api_key>
```

or as `?api_key=<store_api_key>`.

The key is validated against the store's private database.

Use this key in your storefront app, server-side rendering layer, or backend-for-frontend.

### 2. Customer token

Used for customer-specific endpoints such as:

- `customer_me`
- `customer_my_orders`
- address management
- password changes

Send it as:

```http
X-Customer-Token: <customer_token>
```

This token is issued after login or registration and has a sliding expiry.

## Recommended store architecture

For a real store, the simplest pattern is:

1. Use the API key from a backend or secure client runtime.
2. Load products and categories for the catalog.
3. Build your cart state around `cart_create`, `cart_add`, `cart_update`, and `cart_remove`.
4. Create a checkout session with `checkout_create`.
5. Send the shopper to the returned checkout URL.
6. Finalize the order with `checkout_complete`.
7. If you support accounts, use the customer auth endpoints for profile, orders, and addresses.

If you want a storefront with stronger security, keep the API key off the browser and proxy requests through your own server.

## Core endpoints

### Catalog

#### `GET products`

Returns a paginated product catalog.

Useful fields added by the backend:

- `review_count`
- `rating_average`

Typical use:

- homepage product grid
- category listings
- featured product sections

#### `GET product`

Returns a single product by id.

Useful for:

- product detail pages
- product purchase pages
- product review summaries

#### `GET categories`

Returns all categories.

Useful for:

- category navigation
- product filters
- collection pages

#### `GET products_by_category`

Returns products for one category with pagination.

#### `GET search`

Returns matching products using name or description search.

#### `GET reviews`

Returns reviews, optionally filtered by:

- `product_id`
- `status`
- `page`
- `limit`

By default this returns approved reviews.

Useful for:

- public product review sections
- admin moderation views
- review widgets

### Store info

#### `GET site`

Returns the store name, store id, and currency.

Use this for:

- initializing the storefront shell
- setting the browser title
- rendering currency labels

#### `GET payment_methods`

Returns the enabled payment methods for the store.

Use this to decide which payment buttons or checkout options to show.

#### `GET delivery_zones`

Returns delivery zone configuration.

Use this to calculate shipping options.

#### `GET delivery_geography`

Returns delivery zone cache/geography metadata.

## Cart and checkout flow

This is the normal happy path for an online store.

### 1. Create a cart

```http
POST /store-access/{store_id}/?state=cart_create
```

Response includes a `cart_id`.

### 2. Add items

```http
POST /store-access/{store_id}/?state=cart_add
```

Body:

```json
{
  "cart_id": "abc123",
  "product_id": 14,
  "quantity": 2
}
```

### 3. Update or remove items

Use:

- `cart_update`
- `cart_remove`

### 4. Fetch the current cart

```http
GET /store-access/{store_id}/?state=cart&cart_id=abc123
```

### 5. Create checkout

```http
POST /store-access/{store_id}/?state=checkout_create
```

Body:

```json
{
  "cart_id": "abc123",
  "return_url": "https://example.com/order/thank-you"
}
```

The API returns a server-rendered checkout URL.

### 6. Complete checkout

```http
POST /store-access/{store_id}/?state=checkout_complete
```

Body:

```json
{
  "session_id": "checkout_session_id",
  "customer_name": "Jane Doe",
  "customer_email": "jane@example.com",
  "customer_phone": "555-0100",
  "customer_address": "123 Main St"
}
```

This creates the order in the public `orders` table and returns a redirect URL if one was supplied earlier.

## Customer account flow

If you want user accounts, the API already supports:

- register
- login
- logout
- profile lookup
- orders
- addresses
- password change

### Register or login

Use the returned `token` as `X-Customer-Token`.

### Then fetch account data

Examples:

- `customer_me`
- `customer_my_orders`
- `customer_addresses`

### Manage addresses

Use:

- `customer_address_create`
- `customer_address_update`
- `customer_address_delete`
- `customer_address_set_default`

## Reviews flow

There are now two ways to work with product reviews.

### Public submission

Use:

```http
POST /store-access/{store_id}/?state=review
```

Body:

```json
{
  "product_id": 14,
  "customer_name": "Jane Doe",
  "customer_email": "jane@example.com",
  "rating": 5,
  "title": "Excellent product",
  "body": "Arrived quickly and works well."
}
```

New reviews are stored as `pending` so they can be moderated in `vm-admin`.

### Public display

For product pages, load approved reviews with:

```http
GET /store-access/{store_id}/?state=reviews&product_id=14
```

### Admin moderation

The admin has a dedicated reviews page for approving, hiding, editing, and deleting reviews.

## Practical storefront patterns

### Product listing page

Fetch:

- `products`
- `categories`

Render:

- product cards
- category filters
- price, image, stock, and review summary

### Product detail page

Fetch:

- `product?id={id}`
- `reviews?product_id={id}`

Render:

- image gallery
- price and stock
- star rating summary
- approved customer reviews

### Cart drawer

Use the cart endpoints so the cart survives page reloads and checkout flow handoff.

### Checkout page

Create a checkout session first, then send the shopper to the returned checkout URL.

That lets the backend calculate totals from cart contents instead of trusting the browser.

## Example integration

```js
const base = `https://your-domain.com/store-access/${storeId}`;
const headers = {
  "X-API-Key": storeApiKey,
  "Content-Type": "application/json",
};

const products = await fetch(`${base}/?state=products&page=1&limit=24`, {
  headers,
}).then((r) => r.json());

const categories = await fetch(`${base}/?state=categories`, {
  headers,
}).then((r) => r.json());

const cart = await fetch(`${base}/?state=cart_create`, {
  method: "POST",
  headers,
}).then((r) => r.json());

await fetch(`${base}/?state=cart_add`, {
  method: "POST",
  headers,
  body: JSON.stringify({
    cart_id: cart.data.cart_id,
    product_id: 14,
    quantity: 1,
  }),
});
```

## Data model notes

The API uses the store's public SQLite database.

Important tables include:

- `products`
- `categories`
- `orders`
- `delivery`
- `product_reviews`

The review table is created automatically if it does not exist.

## Status codes to expect

- `200` success
- `400` bad input
- `401` missing/invalid auth
- `403` revoked or disallowed key
- `404` not found
- `429` account lockout
- `500` internal failure

## Best way to build on top of it

If you are creating a storefront from scratch, the safest approach is:

1. Treat the API as the source of truth for catalog and checkout data.
2. Keep the API key on the server if possible.
3. Cache product and category responses for performance.
4. Use the cart and checkout endpoints instead of calculating totals in the browser.
5. Only show approved reviews to shoppers.
6. Use the admin panel for moderation, not the public storefront.

## Suggested next steps

- Add a thin SDK wrapper for the endpoints you call most often.
- Build a sample product detail page that renders reviews.
- Add a storefront reference implementation in React, PHP, or plain JS.
- Document the API payloads in `docs/api.md` as well.
