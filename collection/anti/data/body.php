<body class="antialiased">

    # $app()->card(navbar);

    <!-- OTHER VIEWS: Categories, Product, Account, Dashboard, Orders, etc. (unchanged but fully functional) -->
    <div id="view-categories" class="view pt-32 pb-32 px-6 max-w-7xl mx-auto hidden">
        <h1 class="text-6xl md:text-7xl font-black text-white mb-4">ARCHIVE</h1>
        <p class="text-zinc-400 text-lg mb-12">Shop by category — each collection tells a story.</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="categories-grid">
            <div onclick="navigate(&#39;collection&#39;); setTimeout(()=&gt;filterCollection(&#39;Hoodies&#39;),50)"
                class="border border-white/10 rounded-3xl overflow-hidden group cursor-pointer">
                <div class="h-64 overflow-hidden"><img src="./index_files/photo-1556905055-8f358a7a47b2"
                        class="w-full h-full object-cover grayscale group-hover:scale-105 transition"></div>
                <div class="p-6 text-center">
                    <h2 class="text-3xl font-bold">HOODIES</h2>
                    <p class="text-zinc-400 mt-2">Explore Hoodies</p>
                </div>
            </div>
            <div onclick="navigate(&#39;collection&#39;); setTimeout(()=&gt;filterCollection(&#39;Tees&#39;),50)"
                class="border border-white/10 rounded-3xl overflow-hidden group cursor-pointer">
                <div class="h-64 overflow-hidden"><img src="./index_files/photo-1556905055-8f358a7a47b2"
                        class="w-full h-full object-cover grayscale group-hover:scale-105 transition"></div>
                <div class="p-6 text-center">
                    <h2 class="text-3xl font-bold">TEES</h2>
                    <p class="text-zinc-400 mt-2">Explore Tees</p>
                </div>
            </div>
            <div onclick="navigate(&#39;collection&#39;); setTimeout(()=&gt;filterCollection(&#39;Pants&#39;),50)"
                class="border border-white/10 rounded-3xl overflow-hidden group cursor-pointer">
                <div class="h-64 overflow-hidden"><img src="./index_files/photo-1556905055-8f358a7a47b2"
                        class="w-full h-full object-cover grayscale group-hover:scale-105 transition"></div>
                <div class="p-6 text-center">
                    <h2 class="text-3xl font-bold">PANTS</h2>
                    <p class="text-zinc-400 mt-2">Explore Pants</p>
                </div>
            </div>
            <div onclick="navigate(&#39;collection&#39;); setTimeout(()=&gt;filterCollection(&#39;Accessories&#39;),50)"
                class="border border-white/10 rounded-3xl overflow-hidden group cursor-pointer">
                <div class="h-64 overflow-hidden"><img src="./index_files/photo-1556905055-8f358a7a47b2"
                        class="w-full h-full object-cover grayscale group-hover:scale-105 transition"></div>
                <div class="p-6 text-center">
                    <h2 class="text-3xl font-bold">ACCESSORIES</h2>
                    <p class="text-zinc-400 mt-2">Explore Accessories</p>
                </div>
            </div>
            <div onclick="navigate(&#39;collection&#39;); setTimeout(()=&gt;filterCollection(&#39;Outerwear&#39;),50)"
                class="border border-white/10 rounded-3xl overflow-hidden group cursor-pointer">
                <div class="h-64 overflow-hidden"><img src="./index_files/photo-1556905055-8f358a7a47b2"
                        class="w-full h-full object-cover grayscale group-hover:scale-105 transition"></div>
                <div class="p-6 text-center">
                    <h2 class="text-3xl font-bold">OUTERWEAR</h2>
                    <p class="text-zinc-400 mt-2">Explore Outerwear</p>
                </div>
            </div>
            <div onclick="navigate(&#39;collection&#39;); setTimeout(()=&gt;filterCollection(&#39;Footwear&#39;),50)"
                class="border border-white/10 rounded-3xl overflow-hidden group cursor-pointer">
                <div class="h-64 overflow-hidden"><img src="./index_files/photo-1556905055-8f358a7a47b2"
                        class="w-full h-full object-cover grayscale group-hover:scale-105 transition"></div>
                <div class="p-6 text-center">
                    <h2 class="text-3xl font-bold">FOOTWEAR</h2>
                    <p class="text-zinc-400 mt-2">Explore Footwear</p>
                </div>
            </div>
        </div>
    </div>
    <div id="view-product" class="view hidden pt-32 pb-32 px-6 max-w-7xl mx-auto"></div>
    <div id="view-account" class="view pt-40 pb-40 px-6 max-w-md mx-auto text-center hidden">
        <h1 class="text-5xl font-black text-white">ENTER</h1>
        <p class="text-zinc-400 mt-2 mb-10">Sign in or create account to place orders</p>
        <div class="bg-black/60 border border-white/10 p-8 rounded-3xl"><input type="email" id="login-email"
                placeholder="Email"
                class="w-full bg-black border border-white/20 p-4 rounded-xl text-white outline-none focus:border-white mb-4"><input
                type="text" id="login-name" placeholder="Full name (optional)"
                class="w-full bg-black border border-white/20 p-4 rounded-xl text-white outline-none focus:border-white mb-6"><button
                onclick="login()" class="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200">ACCESS
                / REGISTER</button>
            <p class="text-xs text-zinc-500 mt-4">One-click access — orders &amp; dashboard saved</p>
        </div>
    </div>
    <div id="view-dashboard" class="view hidden pt-32 pb-32 px-6 max-w-7xl mx-auto"></div>
    <div id="view-orders" class="view hidden pt-32 pb-32 px-6 max-w-5xl mx-auto">
        <div class="flex items-center gap-4 mb-10"><button onclick="navigate(&#39;dashboard&#39;)"
                class="border border-white/30 p-3 rounded-full">←</button>
            <h1 class="text-5xl font-black">ORDER HISTORY</h1>
        </div>
        <div id="orders-list" class="space-y-4"></div>
    </div>
    <div id="view-order-detail" class="view hidden pt-32 pb-32 px-6 max-w-5xl mx-auto"></div>
    <div id="view-search" class="view pt-32 pb-32 px-6 max-w-7xl mx-auto hidden">
        <div class="max-w-3xl mx-auto mb-12"><input type="text" id="search-input" onkeyup="handleSearch()"
                placeholder="Search hoodies, tees..."
                class="w-full bg-black border border-white/20 py-5 px-6 rounded-2xl text-white text-xl"></div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="search-results"></div>
    </div>
    <div id="view-about" class="view hidden pt-32 pb-32 px-6 max-w-4xl mx-auto text-center">
        <h1 class="text-6xl font-black mb-6">MONOCHROME REBELLION</h1>
        <div class="border border-white/10 rounded-3xl overflow-hidden mb-8"><img
                src="./index_files/photo-1509631179647-0177331693ae" class="w-full h-80 object-cover grayscale"></div>
        <p class="text-zinc-300 text-lg leading-relaxed">ANTI was born in the shadows — a response to overproduction,
            weak identity. Each garment is crafted for the outsider, the purist. Our fabrics are heavyweight, cuts are
            intentional. Wear the silence.</p>
    </div>
    <div id="view-stories" class="view pt-32 pb-32 px-6 max-w-7xl mx-auto hidden">
        <h1 class="text-5xl md:text-7xl font-black mb-6">STORIES</h1>
        <p class="text-xl text-zinc-400 mb-16">Our Shared Experience with our users and the public</p>
        <div class="grid md:grid-cols-2 gap-12">
            <div class="border border-white/10 rounded-3xl overflow-hidden group cursor-pointer"
                onclick="alert(&#39;Full story coming — The making of ANTI&#39;)"><img
                    src="./index_files/photo-1556905055-8f358a7a47b2(1)"
                    class="h-72 w-full object-cover grayscale group-hover:scale-105 transition">
                <div class="p-6">
                    <p class="text-xs uppercase tracking-wider text-zinc-500">ORIGINS · JUN 10</p>
                    <h2 class="text-2xl font-bold mt-2">Levidoc Agency Collab</h2>
                    <p class="text-zinc-400 mt-2">This website has been made into a theme allowing fans to simulate how
                        it will feel owning our brand</p>
                </div>
            </div>
            <div class="border border-white/10 rounded-3xl overflow-hidden group cursor-pointer"
                onclick="alert(&#39;Full story — Crafting raw denim&#39;)"><img
                    src="./index_files/photo-1523381210434-271e8be1f52b"
                    class="h-72 w-full object-cover grayscale group-hover:scale-105 transition">
                <div class="p-6">
                    <p class="text-xs uppercase tracking-wider text-zinc-500">CRAFT · MAY 22</p>
                    <h2 class="text-2xl font-bold mt-2">FOUNDERS NOTE</h2>
                    <p class="text-zinc-400 mt-2">Creating ANTI Has been a journey of struggling and trying to see where
                        the aesthetic fits in Mzansi's market</p>
                </div>
            </div>
        </div>
    </div>
    

    <div id="view-support" class="view pt-32 pb-32 px-6 max-w-4xl mx-auto hidden">
        <h1 class="text-5xl font-black mb-6">SUPPORT CENTER</h1>
        <p class="text-zinc-400 mb-10">24/7 assistance for all your orders.</p>
        <div class="grid md:grid-cols-2 gap-8">
            <div class="border border-white/10 p-8 rounded-3xl">
                <h2 class="text-2xl font-bold mb-4">Live Chat</h2>
                <p class="text-zinc-400 mb-6">Chat with our team. We are ready to help</p><button
                    onclick="alert(&#39;Live chat opening...&#39;)" class="w-full bg-white/10 py-3 rounded-full">START
                    CHAT</button>
            </div>
            <div class="border border-white/10 p-8 rounded-3xl">
                <h2 class="text-2xl font-bold mb-4">Email Support</h2>
                <p class="text-zinc-400 mb-6">noreply@anti.top</p><button
                    onclick="location.href=&#39;mailto:support@anti.world&#39;"
                    class="w-full bg-white/10 py-3 rounded-full">SEND EMAIL</button>
            </div>
        </div>
        <div class="mt-12 border border-white/10 p-8 rounded-3xl">
            <h3 class="text-xl font-bold mb-3">Frequently asked</h3>
            <div class="space-y-4 text-zinc-400">
                <p><strong class="text-white">Cancel order?</strong> — Contact within 2 hours of placing.</p>
                <p><strong class="text-white">Track my package?</strong> — Tracking link sent via email.</p>
                <p><strong class="text-white">Damaged item?</strong> — We replace immediately with proof.</p>
            </div>
        </div>
    </div>
    <div id="view-policies" class="view pt-32 pb-32 px-6 max-w-4xl mx-auto hidden">
        <h1 class="text-5xl font-black mb-12">LEGAL DARKNESS</h1>
        <div class="space-y-8">
            <div class="border border-white/10 p-8 rounded-3xl">
                <h2 class="text-2xl font-bold mb-4">Terms of Service</h2>
                <p class="text-zinc-400">By accessing ANTI, you agree to our terms. All products subject to
                    availability. We reserve right to refuse service.</p>
            </div>
            <div class="border border-white/10 p-8 rounded-3xl">
                <h2 class="text-2xl font-bold mb-4">Privacy Policy</h2>
                <p class="text-zinc-400">We collect only essential data for order fulfillment. No third-party selling.
                    Ever.</p>
            </div>
            <div class="border border-white/10 p-8 rounded-3xl">
                <h2 class="text-2xl font-bold mb-4">Shipping Policy</h2>
                <p class="text-zinc-400">Orders processed within 24h. Tracking provided. Customs fees may apply.</p>
            </div>
            <div class="border border-white/10 p-8 rounded-3xl">
                <h2 class="text-2xl font-bold mb-4">Return &amp; Refund Policy</h2>
                <p class="text-zinc-400">14-day window, unworn, original packaging. Refunds processed within 7 business
                    days.</p>
            </div>
            <div class="border border-white/10 p-8 rounded-3xl">
                <h2 class="text-2xl font-bold mb-4">Warranty</h2>
                <p class="text-zinc-400">1-year manufacturing warranty against defects.</p>
            </div>
        </div>
    </div>

    <!-- CART DRAWER -->
    <div id="drawer-overlay" onclick="toggleCart()"
        class="fixed inset-0 bg-black/70 z-[60] opacity-0 pointer-events-none transition"></div>
    <div id="cart-drawer"
        class="cart-drawer fixed top-0 right-0 h-full w-full md:w-[450px] bg-black border-l border-white/10 z-[70] flex flex-col shadow-2xl">
        <div class="p-6 border-b border-white/10 flex justify-between items-center">
            <h2 class="text-xl font-bold">BAG</h2><button onclick="toggleCart()"
                class="text-white/60 text-2xl">✕</button>
        </div>
        <div id="cart-items" class="flex-grow overflow-y-auto p-6 space-y-6">
            <div class="text-center text-zinc-500 py-20">YOUR BAG IS EMPTY</div>
        </div>
        <div class="p-6 border-t border-white/10 space-y-4">
            <div class="flex gap-2"><input type="text" id="discount-code" placeholder="DISCOUNT CODE"
                    class="bg-black border border-white/20 p-3 rounded-xl flex-1 text-sm uppercase"><button
                    onclick="applyDiscount()"
                    class="bg-white/10 px-4 rounded-xl text-sm font-bold hover:bg-white hover:text-black">APPLY</button>
            </div>
            <div class="space-y-2 text-sm">
                <div class="flex justify-between"><span>Subtotal</span><span id="subtotal">R 0.00</span></div>
                <div id="discount-row" class="hidden flex justify-between text-green-400"><span>Discount</span><span
                        id="discount-amount"></span></div>
            </div>
            <div class="text-lg font-bold flex justify-between"><span>Total</span><span id="cart-drawer-total">R
                    0.00</span></div>
            <button onclick="openCheckout()" class="w-full bg-white text-black font-bold py-4 rounded-full">CHECKOUT
                →</button>
        </div>
    </div>

    <!-- CHECKOUT MODAL (only if logged in) -->
    <div id="checkout-modal"
        class="modal-overlay fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80">
        <div class="bg-black border border-white/20 w-full max-w-2xl rounded-2xl p-8 max-h-[90vh] overflow-auto">
            <div class="flex justify-between mb-6">
                <h2 class="text-3xl font-black">FINALIZE</h2><button onclick="closeCheckout()">✕</button>
            </div>
            <form onsubmit="handleCheckout(event)" class="space-y-6">
                <div class="grid md:grid-cols-2 gap-4"><input type="email" placeholder="EMAIL" required=""
                        class="bg-black border border-white/20 p-4 rounded-xl"><input type="text"
                        placeholder="FULL NAME" required="" class="bg-black border border-white/20 p-4 rounded-xl">
                </div>
                <input type="text" placeholder="ADDRESS" required=""
                    class="w-full bg-black border border-white/20 p-4 rounded-xl">
                <div class="bg-black/50 border border-white/10 p-4 rounded-xl">
                    <div class="flex gap-4"><input type="text" placeholder="4242 4242 4242 4242"
                            class="bg-transparent outline-none flex-1"><input type="text" placeholder="MM/YY"
                            class="w-20"><input type="text" placeholder="CVV" class="w-16"></div>
                </div>
                <div class="flex justify-between text-xl font-bold"><span>GRAND TOTAL</span><span id="final-total">R
                        0.00</span></div>
                <button type="submit" class="w-full bg-white text-black py-5 rounded-full font-bold">PLACE
                    ORDER</button>
            </form>
        </div>
    </div>

    <script>
        // ██████████████████████████████████████████████████████████████
        // FULL STORE LOGIC — Varsity Market API Integration (Store #36)
        // ██████████████████████████████████████████████████████████████

        // ---------- STORE CONFIGURATION ----------
        const CONFIG = {
            CURRENCY: 'R',
            STORE_ID: 36,
            STORE_NAME: 'ANTI CLOTHING',
            TIMEZONE: 'Africa/Johannesburg'
        };

        // ---------- VARSITY MARKET API CONFIG ----------
        const VM_API_BASE = 'https://demo-embedded.varsitymarket.co.za/store-access/36/';
        const VM_API_KEY = 'vm_live_b75f7873cf9b2328ddc5f14577318953fcdf4bfcfb76a87e';

        async function vmGet(params) {
            const url = new URL(VM_API_BASE);

            // Append params dynamically to the URL
            Object.entries(params || {}).forEach(([k, v]) => {
                if (v !== undefined && v !== null && v !== '') url.searchParams.set(k, v);
            });

            // Add the api_key to the query params as your code intended
            url.searchParams.set('api_key', VM_API_KEY);

            try {
                // Use the dynamically constructed URL object
                const res = await fetch(url.toString(), {
                    method: 'GET',
                    headers: {
                        'X-API-Key': VM_API_KEY
                    }
                });

                if (!res.ok) {
                    console.error('VM API GET failed', params, res.status);
                    return null;
                }

                return await res.json();
            } catch (err) {
                console.error('VM API GET error', params, err);
                return null;
            }
        }

        async function vmPost(state, body) {
            const url = new URL(VM_API_BASE);
            url.searchParams.set('state', state);
            url.searchParams.set('api_key', VM_API_KEY);

            try {
                const res = await fetch(url.toString(), {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-API-Key': VM_API_KEY,
                        'Authorization': `Bearer ${VM_API_KEY}`
                    },
                    body: JSON.stringify(body || {})
                });

                if (!res.ok) {
                    console.error('VM API POST failed', state, res.status);
                    return null;
                }

                return await res.json();
            } catch (err) {
                console.error('VM API POST error', state, err);
                return null;
            }
        }

        function vmList(res, ...keys) {
            if (!res) return [];
            if (Array.isArray(res)) return res;
            for (const k of keys) {
                if (Array.isArray(res[k])) return res[k];
            }
            if (res.data && Array.isArray(res.data)) return res.data;
            return [];
        }

        // ---------- NORMALIZERS ----------
        function normalizeId(v) {
            if (v === undefined || v === null) return v;
            if (typeof v === 'string' && /^\d+$/.test(v)) return parseInt(v, 10);
            return v;
        }
        // Returns a value safe to embed unquoted inside an inline onclick="fn(...)" attribute.
        function idAttr(id) {
            return (typeof id === 'string') ? JSON.stringify(id) : id;
        }

        function pickImage(p) {
            let img = p.image || p.image_url || p.thumbnail || p.thumbnail_url || p.photo;
            if (!img && Array.isArray(p.images) && p.images.length) {
                const first = p.images[0];
                img = (typeof first === 'string') ? first : (first?.src || first?.url || first?.image_url);
            }
            return img || 'https://placehold.co/600x800/111/333?text=ANTI';
        }

        function pickPrice(p) {
            let price = p.price ?? p.price_amount ?? p.amount ?? p.unit_price;
            if (price === undefined && Array.isArray(p.variants) && p.variants[0]) price = p.variants[0].price;
            return parseFloat(price) || 0;
        }

        function pickCategory(p) {
            let cat = p.category || p.category_name || p.product_type;
            if (!cat && Array.isArray(p.categories) && p.categories.length) cat = p.categories[0]?.name || p.categories[0];
            return cat || 'General';
        }

        function normalizeProduct(p) {
            return {
                id: normalizeId(p.id ?? p.product_id ?? p._id),
                name: p.name || p.title || p.product_name || 'UNTITLED',
                price: pickPrice(p),
                category: pickCategory(p),
                image: pickImage(p),
                desc: p.description || p.desc || p.body_html || p.summary || ''
            };
        }

        function normalizeCategory(c) {
            if (typeof c === 'string') return c;
            return c.name || c.title || c.category_name || String(c);
        }

        function normalizeCartItem(i) {
            return {
                id: normalizeId(i.product_id ?? i.id),
                name: i.name || i.title || i.product_name || '',
                price: pickPrice(i),
                quantity: i.quantity ?? i.qty ?? 1,
                image: pickImage(i)
            };
        }

        function normalizeOrder(o, fallbackEmail) {
            return {
                id: normalizeId(o.id ?? o.order_id ?? o.number ?? Date.now()),
                date: o.date || o.created_at || o.created || new Date().toLocaleDateString(),
                items: (o.items || o.line_items || o.products || []).map(normalizeCartItem),
                total: parseFloat(o.total ?? o.total_price ?? o.amount ?? 0),
                status: o.status || o.fulfillment_status || o.order_status || 'Confirmed',
                email: o.email || o.customer_email || fallbackEmail || '',
                name: o.name || o.customer_name || '',
                address: o.address || o.shipping_address || ''
            };
        }

        // ---------- FALLBACK PRODUCT DATA (used only if the live API is unreachable) ----------
        const FALLBACK_PRODUCTS = [{
                id: 1,
                name: "OBSCURA HOODIE",
                price: 1899,
                category: "Hoodies",
                image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600",
                desc: "Heavyweight cotton, oversized hood, raw edge details."
            },
            {
                id: 2,
                name: "VOID OVERSIZED TEE",
                price: 799,
                category: "Tees",
                image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600",
                desc: "Pigment-dyed black, dropped shoulders."
            },
            {
                id: 3,
                name: "SHADOW CARGO PANTS",
                price: 1499,
                category: "Pants",
                image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600",
                desc: "Tapered fit, heavy twill, multiple pockets."
            },
            {
                id: 4,
                name: "SILVER CHAIN",
                price: 499,
                category: "Accessories",
                image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600",
                desc: "Stainless steel, noir finish, signature pendant."
            },
            {
                id: 5,
                name: "DECONSTRUCTED DENIM JACKET",
                price: 2499,
                category: "Outerwear",
                image: "https://images.unsplash.com/photo-1542272604-6c5b3c421f10?w=600",
                desc: "Asymmetric zip, raw hem, washed black denim."
            },
            {
                id: 6,
                name: "MESH PANEL CAP",
                price: 399,
                category: "Accessories",
                image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600",
                desc: "Vent mesh, leather strap."
            },
            {
                id: 7,
                name: "BLACKOUT SNEAKERS",
                price: 2299,
                category: "Footwear",
                image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
                desc: "Matte leather, vulcanized sole."
            },
            {
                id: 8,
                name: "ACID WASH HOODIE",
                price: 1799,
                category: "Hoodies",
                image: "https://images.unsplash.com/photo-1578768074951-9632bdf9f1ee?w=600",
                desc: "Mottled gray/black, distressed print."
            },
            {
                id: 9,
                name: "NOIR SCRIPT TEE",
                price: 699,
                category: "Tees",
                image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600",
                desc: "Minimal gothic typography."
            },
            {
                id: 10,
                name: "COVERT BELT BAG",
                price: 899,
                category: "Accessories",
                image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600",
                desc: "Ballistic nylon, YKK hardware."
            }
        ];

        // ---------- STATE ----------
        let PRODUCTS = [];
        let CATEGORIES = [];
        let DISCOUNTS = [];
        let userSession = JSON.parse(localStorage.getItem('anti_session')) || null;
        let userOrders = JSON.parse(localStorage.getItem('anti_orders')) || [];
        let cart = {
            items: [],
            subtotal: 0,
            item_count: 0
        };
        let cartId = localStorage.getItem('anti_cart_id') || null;
        let currentDiscount = null;
        let activePDP = null,
            pdpQty = 1;

        function getProductImg(p) {
            return p.image || 'https://placehold.co/600x800/111/333?text=ANTI';
        }

        function updateCartDot() {
            document.getElementById('cart-dot').innerText = cart.item_count || '0';
        }

        // ---------- DATA LOADING ----------
        async function loadProducts() {
            const res = await vmGet({
                state: 'products'
            });
            const list = vmList(res, 'products', 'items');
            PRODUCTS = list.length ? list.map(normalizeProduct) : FALLBACK_PRODUCTS;
            renderCatalog();
        }
        async function loadCategories() {
            const res = await vmGet({
                state: 'categories'
            });
            const list = vmList(res, 'categories', 'items');
            CATEGORIES = list.length ? list.map(normalizeCategory) : [...new Set(PRODUCTS.map(p => p.category))];
        }
        async function loadDiscounts() {
            const res = await vmGet({
                state: 'discounts'
            });
            DISCOUNTS = vmList(res, 'discounts', 'items');
        }
        async function loadOrderHistory(email) {
            if (!email) return;
            const res = await vmGet({
                state: 'orders',
                email
            });
            const list = vmList(res, 'orders', 'items');
            if (list.length) {
                userOrders = list.map(o => normalizeOrder(o, email));
                localStorage.setItem('anti_orders', JSON.stringify(userOrders));
            }
        }

        // ---------- CART (synced with Varsity Market API) ----------
        async function ensureCart() {
            if (cartId) return cartId;
            const res = await vmPost('cart_create', {});
            cartId = res?.cart_id || res?.id || res?.cart?.id || null;
            if (cartId) localStorage.setItem('anti_cart_id', cartId);
            return cartId;
        }
        async function refreshCart() {
            if (!cartId) {
                renderCart();
                updateCartDot();
                return;
            }
            const res = await vmGet({
                state: 'cart',
                cart_id: cartId
            });
            const items = vmList(res, 'items', 'line_items') || (res?.cart?.items) || [];
            cart.items = items.map(normalizeCartItem);
            cart.subtotal = res?.subtotal ?? res?.cart?.subtotal ?? cart.items.reduce((s, i) => s + i.price * i.quantity, 0);
            cart.item_count = cart.items.reduce((s, i) => s + i.quantity, 0);
            renderCart();
            updateCartDot();
        }
        async function addToCart(p, q) {
            await ensureCart();
            if (!cartId) {
                let ex = cart.items.find(i => i.id === p.id);
                if (ex) ex.quantity += q;
                else cart.items.push({
                    id: p.id,
                    name: p.name,
                    price: p.price,
                    image: p.image,
                    quantity: q
                });
                cart.subtotal = cart.items.reduce((s, i) => s + i.price * i.quantity, 0);
                cart.item_count = cart.items.reduce((s, i) => s + i.quantity, 0);
                renderCart();
                updateCartDot();
                return;
            }
            await vmPost('cart_add', {
                cart_id: cartId,
                product_id: p.id,
                quantity: q
            });
            await refreshCart();
        }
        window.updateQuantity = async (id, d) => {
            let idx = cart.items.findIndex(i => i.id === id);
            if (idx === -1) return;
            let nq = cart.items[idx].quantity + d;
            if (!cartId) {
                if (nq <= 0) cart.items.splice(idx, 1);
                else cart.items[idx].quantity = nq;
                cart.subtotal = cart.items.reduce((s, i) => s + i.price * i.quantity, 0);
                cart.item_count = cart.items.reduce((s, i) => s + i.quantity, 0);
                renderCart();
                updateCartDot();
                return;
            }
            if (nq <= 0) await vmPost('cart_remove', {
                cart_id: cartId,
                product_id: id
            });
            else await vmPost('cart_update', {
                cart_id: cartId,
                product_id: id,
                quantity: nq
            });
            await refreshCart();
        };

        // ---------- RENDERING ----------
        function renderCatalog() {
            const container = document.getElementById('catalog-container');
            if (container) container.innerHTML = PRODUCTS.map(p => `<div onclick="openPDP(${idAttr(p.id)})" class="group cursor-pointer border border-white/10 rounded-2xl overflow-hidden bg-black/40 hover:border-white/40 transition"><div class="img-zoom h-80 overflow-hidden"><img src="${getProductImg(p)}" class="w-full h-full object-cover grayscale-[0.3] group-hover:scale-105 transition"></div><div class="p-5"><div class="flex justify-between"><h3 class="font-bold text-lg">${p.name}</h3><span>${CONFIG.CURRENCY} ${p.price}</span></div><p class="text-xs text-zinc-500 uppercase">${p.category}</p></div></div>`).join('');
            const featured = document.getElementById('featured-grid');
            if (featured) featured.innerHTML = PRODUCTS.slice(0, 4).map(p => `<div onclick="openPDP(${idAttr(p.id)})" class="group cursor-pointer border border-white/10 rounded-2xl overflow-hidden bg-black/40 hover:border-white/40 transition"><div class="img-zoom h-64 overflow-hidden"><img src="${getProductImg(p)}" class="w-full h-full object-cover grayscale-[0.3] group-hover:scale-105 transition"></div><div class="p-4"><div class="flex justify-between"><h3 class="font-bold">${p.name}</h3><span>${CONFIG.CURRENCY} ${p.price}</span></div></div></div>`).join('');
        }

        function renderCategoriesGrid() {
            const cats = CATEGORIES.length ? CATEGORIES : [...new Set(PRODUCTS.map(p => p.category))];
            document.getElementById('categories-grid').innerHTML = cats.map(cat => `<div onclick="navigate('collection'); setTimeout(()=>filterCollection(${JSON.stringify(cat)}),50)" class="border border-white/10 rounded-3xl overflow-hidden group cursor-pointer"><div class="h-64 overflow-hidden"><img src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600" class="w-full h-full object-cover grayscale group-hover:scale-105 transition"></div><div class="p-6 text-center"><h2 class="text-3xl font-bold">${String(cat).toUpperCase()}</h2><p class="text-zinc-400 mt-2">Explore ${cat}</p></div></div>`).join('');
        }

        function filterCollection(cat) {
            const grid = document.getElementById('collection-grid');
            if (!grid) return;
            let filtered = cat === 'all' ? PRODUCTS : PRODUCTS.filter(p => String(p.category).toLowerCase() === String(cat).toLowerCase());
            grid.innerHTML = filtered.map(p => `<div onclick="openPDP(${idAttr(p.id)})" class="cursor-pointer group"><div class="img-zoom h-96 rounded-2xl overflow-hidden border border-white/10"><img src="${getProductImg(p)}" class="w-full h-full object-cover grayscale group-hover:scale-105 transition"></div><div class="mt-4 flex justify-between"><span class="font-bold">${p.name}</span><span>${CONFIG.CURRENCY} ${p.price}</span></div></div>`).join('');
        }

        window.openPDP = (id) => {
            activePDP = PRODUCTS.find(p => p.id === id);
            if (!activePDP) return;
            pdpQty = 1;
            document.getElementById('view-product').innerHTML = `<div class="flex items-center gap-4 mb-6"><button onclick="navigate('shop')" class="text-sm text-zinc-400 hover:text-white">← BACK</button><span>/${activePDP.category}</span></div><div class="grid md:grid-cols-2 gap-12"><div class="rounded-3xl overflow-hidden border border-white/10"><img src="${getProductImg(activePDP)}" class="w-full object-cover"></div><div><h1 class="text-5xl font-black">${activePDP.name}</h1><p class="text-3xl mt-4">${CONFIG.CURRENCY} ${activePDP.price}</p><p class="text-zinc-400 mt-6">${activePDP.desc}</p><div class="mt-8"><div class="flex items-center gap-4 mb-6"><button onclick="changePdpQty(-1)" class="border border-white/30 w-10 h-10 rounded-full">−</button><span id="pdp-qty" class="text-xl w-12 text-center">1</span><button onclick="changePdpQty(1)" class="border border-white/30 w-10 h-10 rounded-full">+</button></div><button onclick="addPdpToCart()" class="w-full bg-white text-black py-5 rounded-full font-bold">ADD TO BAG →</button></div></div></div>`;
            showView('product');
            document.getElementById('pdp-qty').innerText = pdpQty;
        };
        window.changePdpQty = (d) => {
            pdpQty = Math.max(1, pdpQty + d);
            if (document.getElementById('pdp-qty')) document.getElementById('pdp-qty').innerText = pdpQty;
        };
        window.addPdpToCart = async () => {
            if (activePDP) {
                await addToCart(activePDP, pdpQty);
                toggleCart();
            }
        };

        function renderCart() {
            let c = document.getElementById('cart-items');
            if (!c) return;
            if (cart.items.length === 0) {
                c.innerHTML = '<div class="text-center text-zinc-500 py-20">YOUR BAG IS EMPTY</div>';
                document.getElementById('subtotal').innerText = `${CONFIG.CURRENCY} 0.00`;
                document.getElementById('cart-drawer-total').innerText = `${CONFIG.CURRENCY} 0.00`;
                document.getElementById('discount-row').classList.add('hidden');
                return;
            }
            c.innerHTML = cart.items.map(i => `<div class="flex gap-4"><div class="w-20 h-20 bg-white/5 rounded-lg overflow-hidden"><img src="${getProductImg(i)}" class="w-full h-full object-cover"></div><div class="flex-1"><div class="font-bold">${i.name}</div><div>${CONFIG.CURRENCY} ${i.price}</div><div class="flex gap-3 mt-2"><button onclick="updateQuantity(${idAttr(i.id)},-1)" class="border px-2 rounded">-</button><span>${i.quantity}</span><button onclick="updateQuantity(${idAttr(i.id)},1)" class="border px-2 rounded">+</button></div></div><div class="font-bold">${CONFIG.CURRENCY} ${(i.price * i.quantity).toFixed(2)}</div></div>`).join('');
            let sub = cart.subtotal;
            document.getElementById('subtotal').innerText = `${CONFIG.CURRENCY} ${sub.toFixed(2)}`;
            let total = sub;
            if (currentDiscount) {
                let off = currentDiscount.percent ? sub * currentDiscount.percent / 100 : (currentDiscount.amount || 0);
                total = Math.max(0, sub - off);
                document.getElementById('discount-row').classList.remove('hidden');
                document.getElementById('discount-amount').innerText = `-${CONFIG.CURRENCY} ${off.toFixed(2)}`;
            } else {
                document.getElementById('discount-row').classList.add('hidden');
            }
            document.getElementById('cart-drawer-total').innerText = `${CONFIG.CURRENCY} ${total.toFixed(2)}`;
        }

        window.applyDiscount = async () => {
            let code = document.getElementById('discount-code').value.toUpperCase().trim();
            if (!code) return;
            if (!DISCOUNTS.length) await loadDiscounts();
            let match = DISCOUNTS.find(d => String(d.code || d.coupon || d.name || '').toUpperCase() === code);
            if (match) {
                let percent = match.percent ?? match.percentage ?? (match.type === 'percentage' ? match.value : null);
                let amount = match.amount ?? (match.type === 'fixed' ? match.value : null);
                currentDiscount = {
                    percent: percent ? parseFloat(percent) : 0,
                    amount: amount ? parseFloat(amount) : 0
                };
            } else {
                alert("Invalid discount code");
                return;
            }
            renderCart();
        };

        // ---------- CHECKOUT ----------
        window.openCheckout = () => {
            if (!userSession) {
                alert("Please create an account to place an order.");
                navigate('account');
                return;
            }
            if (cart.items.length === 0) return alert("Your bag is empty.");
            document.getElementById('final-total').innerText = document.getElementById('cart-drawer-total').innerText;
            document.getElementById('checkout-modal').classList.add('open');
            toggleCart();
        };
        window.closeCheckout = () => document.getElementById('checkout-modal').classList.remove('open');

        window.handleCheckout = async (e) => {
            e.preventDefault();
            if (!userSession) {
                alert("You must be logged in.");
                navigate('account');
                return;
            }
            let email = e.target.querySelector('input[type="email"]').value;
            let textInputs = e.target.querySelectorAll('input[type="text"]');
            let name = textInputs[0]?.value || userSession.name;
            let address = textInputs[1]?.value || '';
            let totalVal = parseFloat(document.getElementById('cart-drawer-total').innerText.replace(CONFIG.CURRENCY, '').trim()) || 0;

            await ensureCart();
            let result = await vmPost('checkout_create', {
                cart_id: cartId,
                email,
                name,
                address,
                total: totalVal
            });
            let checkoutId = result?.checkout_id || result?.id || cartId;
            let completion = await vmPost('checkout_complete', {
                checkout_id: checkoutId,
                cart_id: cartId,
                email,
                name,
                address
            });
            if (!completion || completion.error) {
                completion = await vmPost('order', {
                    cart_id: cartId,
                    email,
                    name,
                    address,
                    items: cart.items,
                    total: totalVal
                });
            }

            let orderId = completion?.order_id || completion?.id || completion?.order?.id || Date.now();
            let newOrder = {
                id: orderId,
                date: new Date().toLocaleDateString(),
                items: [...cart.items],
                total: totalVal,
                status: completion?.status || "Confirmed",
                email,
                name,
                address
            };
            userOrders.unshift(newOrder);
            localStorage.setItem('anti_orders', JSON.stringify(userOrders));

            cart = {
                items: [],
                subtotal: 0,
                item_count: 0
            };
            currentDiscount = null;
            localStorage.removeItem('anti_cart_id');
            cartId = null;
            renderCart();
            updateCartDot();

            closeCheckout();
            alert(`ORDER #${orderId} PLACED. THANK YOU.`);
            if (userSession && userSession.email === email) navigate('dashboard');
            else navigate('shop');
        };

        // ---------- CART DRAWER / MENU ----------
        window.toggleCart = () => {
            document.getElementById('cart-drawer').classList.toggle('open');
            document.getElementById('drawer-overlay').classList.toggle('opacity-0');
            document.getElementById('drawer-overlay').classList.toggle('pointer-events-none');
        };
        window.openMenu = () => document.getElementById('myNav').style.width = '100%';
        window.closeMenu = () => document.getElementById('myNav').style.width = '0%';

        // ---------- AUTH ----------
        window.login = async () => {
            let email = document.getElementById('login-email').value;
            let name = document.getElementById('login-name').value;
            if (!email.includes('@')) {
                alert("valid email required");
                return;
            }
            userSession = {
                email,
                name: name || email.split('@')[0]
            };
            localStorage.setItem('anti_session', JSON.stringify(userSession));
            await loadOrderHistory(email);
            navigate('dashboard');
        };
        window.logout = () => {
            userSession = null;
            localStorage.removeItem('anti_session');
            navigate('shop');
        };
        window.handleAccountClick = () => {
            if (userSession) navigate('dashboard');
            else navigate('account');
        };

        // ---------- DASHBOARD / ORDERS ----------
        function renderDashboard() {
            let d = document.getElementById('view-dashboard');
            let myOrders = userOrders.filter(o => o.email === userSession?.email);
            let totalSpent = myOrders.reduce((s, o) => s + o.total, 0);
            let lastAddress = myOrders.length ? myOrders[0].address : "No saved address yet";
            d.innerHTML = `<div class="flex flex-wrap justify-between border-b border-white/10 pb-8 mb-10"><div><h1 class="text-6xl font-black">WELCOME BACK</h1><p class="text-zinc-400">${userSession?.name} (${userSession?.email})</p></div><button onclick="logout()" class="border border-white/20 px-6 py-2 rounded-full">SIGN OUT</button></div><div class="grid md:grid-cols-3 gap-6 mb-16"><div class="border border-white/10 p-8 rounded-2xl"><div class="text-xs uppercase">TOTAL ORDERS</div><div class="text-5xl font-bold">${myOrders.length}</div></div><div class="border border-white/10 p-8 rounded-2xl"><div class="text-xs uppercase">LIFETIME SPENT</div><div class="text-5xl font-bold">${CONFIG.CURRENCY} ${totalSpent.toFixed(2)}</div></div><div class="border border-white/10 p-8 rounded-2xl"><div class="text-xs uppercase">STATUS</div><div class="text-2xl font-bold">BLACKLIST ELITE</div></div></div><div class="grid md:grid-cols-2 gap-8 mb-12"><div class="border border-white/10 p-6 rounded-2xl"><h3 class="text-xl font-bold mb-3">ACCOUNT DETAILS</h3><p><strong>Email:</strong> ${userSession?.email}</p><p><strong>Member since:</strong> ${new Date().toLocaleDateString()}</p></div><div class="border border-white/10 p-6 rounded-2xl"><h3 class="text-xl font-bold mb-3">DEFAULT ADDRESS</h3><p class="text-zinc-400">${lastAddress}</p><button onclick="alert('You can update address during checkout')" class="text-xs underline mt-2">Update</button></div></div><h2 class="text-3xl font-bold mb-6">RECENT ORDERS</h2><div id="dash-recent" class="space-y-4"></div><div class="mt-10"><button onclick="navigate('orders')" class="border border-white/20 px-6 py-3 rounded-full">VIEW ALL ORDERS →</button></div>`;
            let recentDiv = document.getElementById('dash-recent');
            if (myOrders.length === 0) recentDiv.innerHTML = '<p class="text-zinc-500">No orders yet. Start shopping.</p>';
            else recentDiv.innerHTML = myOrders.slice(0, 3).map(o => `<div onclick="viewOrderDetail(${idAttr(o.id)})" class="border border-white/10 p-6 rounded-2xl cursor-pointer flex justify-between"><div><span class="font-bold">#${o.id}</span><p class="text-sm">${o.date}</p></div><div>${CONFIG.CURRENCY} ${o.total.toFixed(2)}</div></div>`).join('');
        }

        function renderOrders() {
            let oDiv = document.getElementById('orders-list');
            let myOrders = userOrders.filter(o => o.email === userSession?.email);
            if (myOrders.length === 0) {
                oDiv.innerHTML = '<div class="text-center py-32">No history</div>';
                return;
            }
            oDiv.innerHTML = myOrders.map(o => `<div onclick="viewOrderDetail(${idAttr(o.id)})" class="border border-white/10 p-6 rounded-2xl cursor-pointer flex justify-between"><div><div class="text-xl font-bold">ORDER #${o.id}</div><div class="text-sm text-zinc-500">${o.date}</div></div><div>${CONFIG.CURRENCY} ${o.total.toFixed(2)}</div></div>`).join('');
        }
        window.viewOrderDetail = (id) => {
            let order = userOrders.find(o => o.id === id);
            if (!order) return;
            document.getElementById('view-order-detail').innerHTML = `<div class="flex items-center gap-4 mb-8"><button onclick="navigate('orders')" class="border border-white/30 p-3 rounded-full">←</button><div><h1 class="text-5xl font-black">ORDER #${order.id}</h1><p class="text-zinc-400">${order.date}</p></div></div><div class="grid md:grid-cols-3 gap-10"><div class="md:col-span-2 space-y-4">${order.items.map(i => `<div class="flex gap-4 border-b border-white/10 pb-4"><img src="${getProductImg(i)}" class="w-16 h-16 object-cover rounded"><div><div class="font-bold">${i.name}</div><div>QTY ${i.quantity}</div><div>${CONFIG.CURRENCY} ${(i.price * i.quantity).toFixed(2)}</div></div></div>`).join('')}</div><div class="border border-white/10 p-6 rounded-2xl"><div class="text-xl font-bold">TOTAL: ${CONFIG.CURRENCY} ${order.total.toFixed(2)}</div><div class="text-green-400 mt-2">${order.status}</div><button onclick="reorderFromOrder(${idAttr(order.id)})" class="mt-6 w-full bg-white text-black py-3 rounded-full">REORDER ALL</button></div></div>`;
            showView('order-detail');
        };
        window.reorderFromOrder = async (id) => {
            let order = userOrders.find(o => o.id === id);
            if (!order) return;
            for (const i of order.items) await addToCart({
                id: i.id,
                name: i.name,
                price: i.price,
                image: i.image
            }, i.quantity);
            toggleCart();
            navigate('shop');
        };

        // ---------- SEARCH ----------
        window.handleSearch = async () => {
            let q = document.getElementById('search-input')?.value.trim();
            let resultsEl = document.getElementById('search-results');
            if (!q) {
                resultsEl.innerHTML = '';
                return;
            }
            const res = await vmGet({
                state: 'search',
                q
            });
            let list = vmList(res, 'products', 'results', 'items');
            let products = list.length ? list.map(normalizeProduct) : PRODUCTS.filter(p => p.name.toLowerCase().includes(q.toLowerCase()) || p.category.toLowerCase().includes(q.toLowerCase()));
            resultsEl.innerHTML = products.map(p => `<div onclick="openPDP(${idAttr(p.id)})" class="border border-white/10 p-4 rounded-2xl cursor-pointer"><img src="${getProductImg(p)}" class="h-48 w-full object-cover rounded mb-2"><div class="font-bold">${p.name}</div><div>${CONFIG.CURRENCY} ${p.price}</div></div>`).join('') || '<p class="col-span-full text-center">no results</p>';
        };

        // ---------- ROUTING ----------
        window.navigate = (v) => {
            window.location.hash = v;
        };

        function showView(v) {
            document.querySelectorAll('.view').forEach(el => el.classList.add('hidden'));
            let t = document.getElementById(`view-${v}`);
            if (t) t.classList.remove('hidden');
            else document.getElementById('view-404').classList.remove('hidden');
            if (v === 'dashboard') renderDashboard();
            if (v === 'orders') renderOrders();
            if (v === 'categories') renderCategoriesGrid();
            if (v === 'collection') {
                if (!document.getElementById('collection-grid')) {
                    let colDiv = document.createElement('div');
                    colDiv.id = 'collection-grid';
                    colDiv.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';
                    document.getElementById('view-collection').appendChild(colDiv);
                }
                filterCollection('all');
            }
            window.scrollTo(0, 0);
        }
        window.addEventListener('hashchange', () => {
            let h = location.hash.slice(1) || 'shop';
            if (h.startsWith('product/')) {
                let pid = parseInt(h.split('/')[1]);
                if (pid) openPDP(pid);
                else showView('shop');
            } else showView(h);
        });

        // ---------- INIT ----------
        (async function init() {
            await loadProducts();
            loadCategories();
            if (userSession) loadOrderHistory(userSession.email);
            await ensureCart();
            await refreshCart();
            if (!location.hash || location.hash === '#') navigate('shop');
            else window.dispatchEvent(new Event('hashchange'));
        })();
    </script>

    <!-- COLLECTION VIEW (hidden) -->
    <div id="view-collection" class="view hidden pt-32 pb-32 px-6 max-w-7xl mx-auto">
        <h1 class="text-5xl font-black mb-6">CATEGORY</h1>
        <div id="collection-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div><button
            onclick="navigate(&#39;categories&#39;)" class="mt-10 text-sm underline">← All categories</button>
    </div>

    <section>
        # $app()->page(e);
    </section>

    <footer class="border-t border-white/10 py-16 px-6 text-center text-xs text-zinc-500">
        <div class="max-w-7xl mx-auto flex flex-wrap justify-between gap-6"><span>© ANTI CLOTHING</span>
            <div class="flex gap-6 flex-wrap"><a onclick="navigate(&#39;policies&#39;)"
                    class="hover:text-white cursor-pointer">POLICIES</a><a onclick="navigate(&#39;stories&#39;)"
                    class="hover:text-white cursor-pointer">STORIES</a><a onclick="navigate(&#39;contact&#39;)"
                    class="hover:text-white cursor-pointer">CONTACT</a><a onclick="navigate(&#39;faq&#39;)"
                    class="hover:text-white cursor-pointer">FAQ</a><a onclick="navigate(&#39;support&#39;)"
                    class="hover:text-white cursor-pointer">SUPPORT</a></div>
            <p style="line-height: 1.7; color: rgb(85, 85, 85);">Powered By Varsity Market </p>
        </div>
    </footer>


    <div id="vb-drop-container"></div>
    <div id="vb-drop-container"></div>
    <div id="vb-drop-container"></div>
    <script type="module" src="./index_files/v4513226cdae34746b4dedf0b4dfa099e1781791509496"
        integrity="sha512-ZE9pZaUXND66v380QUtch/5sE9tPFh2zg45pR2PB0CVkCtOREv2AJKkSidISWkysEuQ0EH8faUU5du78bx87UQ=="
        data-cf-beacon="{&quot;version&quot;:&quot;2024.11.0&quot;,&quot;token&quot;:&quot;a80af8314af645cc8929757029c81fc1&quot;,&quot;r&quot;:1}"
        crossorigin="anonymous"></script>

</body>