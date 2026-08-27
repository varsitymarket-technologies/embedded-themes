<body class="antialiased min-h-screen flex flex-col justify-between selection:bg-white selection:text-black uppercase">
    # $app()->card(navbar);
    # $app()->page(e);

    <div id="cart-drawer-overlay" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 pointer-events-none opacity-0 transition-opacity duration-300" onclick="app.ui.toggleCartDrawer()">
        <div class="absolute right-0 top-0 h-full w-full max-w-[450px] bg-[#030303] border-l border-[#1A1A1A] flex flex-col justify-between pointer-events-auto transform translate-x-full transition-transform duration-300 ease-out" onclick="event.stopPropagation()">
            <div class="p-6 border-b border-[#1A1A1A] flex items-center justify-between">
                <h3 class="font-bold tracking-widest text-lg">CART</h3>
                <button onclick="app.ui.toggleCartDrawer()" class="text-[#666] hover:text-white font-mono text-[20px]">X</button>
            </div>
            <div id="cart-drawer-items" class="flex-grow overflow-y-auto p-6 space-y-6"></div>
            <div class="p-6 border-t border-[#1A1A1A] bg-[#0A0A0A]">
                <div class="flex justify-between items-end mb-6 font-mono tracking-widest">
                    <span class="text-[10px] text-[#666]">TOTAL </span>
                    <span id="cart-drawer-subtotal" class="text-lg text-white">$0.00</span>
                </div>
                <button onclick="app.checkout.initiateCheckout()" class="w-full py-4 btn-invert font-mono text-[11px] tracking-widest border border-transparent">
                    Proceed To Checkout
                </button>
            </div>
        </div>
    </div>

    <div id="search-overlay" class="fixed inset-0 bg-[#030303] z-50 hidden flex-col p-6 sm:p-12 border-4 border-[#1A1A1A]">
        <div class="flex justify-between items-center border-b border-[#1A1A1A] pb-6 mb-8">
            <span class="font-mono text-[10px] tracking-widest text-[#666]">SEARCH</span>
            <button onclick="app.ui.toggleSearchOverlay()" class="text-[#666] hover:text-white font-mono text-[20px]">X</button>
        </div>
        <div class="w-full max-w-4xl mx-auto flex-grow flex flex-col">
            <input type="text" id="live-search-input" oninput="app.store.handleSearch(this.value)" placeholder="Search For Product" class="w-full bg-transparent py-4 text-4xl sm:text-6xl font-bold tracking-tighter border-b border-[#333] focus:outline-none focus:border-white text-white placeholder-[#222] uppercase">
            <div id="search-results-output" class="mt-8 space-y-px bg-[#1A1A1A] border border-[#1A1A1A] max-h-[60vh] overflow-y-auto empty:border-none"></div>
        </div>
    </div>

    <div id="toast-notif" class="fixed top-20 right-6 bg-white text-black font-mono text-[10px] tracking-widest py-3 px-4 shadow-2xl z-50 opacity-0 translate-x-10 transition-all duration-300 pointer-events-none uppercase border border-black">
        <span id="toast-notif-message">LOG UPDATED</span>
    </div>


    <div class="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-[12px] font-mono text-[#333] tracking-widest bg-[#0a0a0a]">
        <a href="<!-- #!/engine/node/ page('home') -->" class="font-bold text-2xl tracking-[0.2em] text-white absolute left-1/2 transform -translate-x-1/2" style="align-items: center; display: flex; flex-direction: column;">
            <img src="https://framerusercontent.com/images/S8eWDEbw3ERIv1ILwZqCUuBMc.png" style="max-width:1.5rem;">
            <div>E R O S</div>
        </a>
    </div>

    <div id="mobile-nav-overlay" class="fixed inset-0 z-50 hidden bg-black/80 backdrop-blur-sm" onclick="app.ui.toggleMobileNav(false)">
        <div class="absolute left-0 top-0 h-full w-[82vw] max-w-sm bg-[#030303] border-r border-[#1A1A1A] p-6 flex flex-col gap-8" onclick="event.stopPropagation()">
            <div class="flex items-center justify-between border-b border-[#1A1A1A] pb-4">
                <span class="font-mono text-[10px] tracking-[0.35em] text-[#666]">NAVIGATION</span>
                <button class="text-[#666] hover:text-white" onclick="app.ui.toggleMobileNav(false)" aria-label="Close menu">
                    <i data-lucide="x" class="w-5 h-5"></i>
                </button>
            </div>
            <nav class="flex flex-col gap-4 text-[13px] font-mono tracking-widest">
                <a href="<!-- #!/engine/node/ page('home') -->" class="py-3 border-b border-[#1A1A1A] text-white" onclick="app.ui.toggleMobileNav(false)">HOME</a>
                <a href="<!-- #!/engine/node/ page('shop') -->" class="py-3 border-b border-[#1A1A1A] text-white" onclick="app.ui.toggleMobileNav(false)">SHOP</a>
                <a href="<!-- #!/engine/node/ page('collection') -->" class="py-3 border-b border-[#1A1A1A] text-white" onclick="app.ui.toggleMobileNav(false)">COLLECTION</a>
                <a href="<!-- #!/engine/node/ page('about') -->" class="py-3 border-b border-[#1A1A1A] text-white" onclick="app.ui.toggleMobileNav(false)">ABOUT US</a>
                <a href="<!-- #!/engine/node/ page('contact') -->" class="py-3 border-b border-[#1A1A1A] text-white" onclick="app.ui.toggleMobileNav(false)">CONTACT US</a>
            </nav>
            <div class="mt-auto border-t border-[#1A1A1A] pt-6">
                <button class="w-full flex items-center justify-between py-4 px-4 border border-[#1A1A1A] text-white" onclick="app.ui.toggleCartDrawer(); app.ui.toggleMobileNav(false)">
                    <span class="font-mono text-[10px] tracking-widest">OPEN CART</span>
                    <span class="font-mono text-[10px]" id="mobile-cart-count">0</span>
                </button>
            </div>
        </div>
    </div>



    <footer class="border-t border-[#0a0a0a]  bg-[#0a0a0a] pt-16 sm:pt-20 pb-10">

        <div class="max-w-[1400px] mx-auto px-4 sm:px-6">

            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mb-16 text-[10px] font-mono text-[#666] tracking-widest">
                <div class="space-y-4">
                    <h4 class="text-white mb-6 border-b border-[#333] pb-2">STORE</h4>
                    <a href="<!-- #!/engine/node/ page('shop') -->" class="block hover:text-white transition-colors">ALL PRODUCTS</a>
                    <a href="<!-- #!/engine/node/ page('collection') -->" class="block hover:text-white transition-colors">SHOP BY CATEGORY</a>
                    <a href="<!-- #!/engine/node/ page('search') -->" class="block hover:text-white transition-colors">SEARCH</a>
                    <a href="<!-- #!/engine/node/ page('checkout') -->" class="block hover:text-white transition-colors">CHECKOUT</a>
                </div>
                <div class="space-y-4">
                    <h4 class="text-white mb-6 border-b border-[#333] pb-2">CUSTOMER CARE</h4>
                    <a href="<!-- #!/engine/node/ page('contact') -->" class="block hover:text-white transition-colors">CONTACT US</a>
                    <a href="<!-- #!/engine/node/ page('faq') -->" class="block hover:text-white transition-colors">FAQ</a>
                    <a href="<!-- #!/engine/node/ page('orders') -->" class="block hover:text-white transition-colors">TRACK ORDER</a>
                    <a href="<!-- #!/engine/node/ page('cart') -->" class="block hover:text-white transition-colors">YOUR CART</a>
                </div>
                <div class="space-y-4">
                    <h4 class="text-white mb-6 border-b border-[#333] pb-2">ABOUT THE STORE</h4>
                    <a href="<!-- #!/engine/node/ page('about') -->" class="block hover:text-white transition-colors">MANIFESTO</a>
                    <a href="<!-- #!/engine/node/ page('privacy-policy') -->" class="block hover:text-white transition-colors">PRIVACY POLICY</a>
                    <a href="<!-- #!/engine/node/ page('terms-of-use') -->" class="block hover:text-white transition-colors">TERMS OF USE</a>
                    <a href="<!-- #!/engine/node/ page('login') -->" class="block hover:text-white transition-colors">ACCOUNT LOGIN</a>
                </div>
                <div class="space-y-4">
                    <h4 class="text-white mb-6 border-b border-[#333] pb-2">NEWSLETTER</h4>
                    <p class="lowercase leading-relaxed text-[#888]">transmit your node address for launches, restocks, and order updates.</p>
                    <form onsubmit="event.preventDefault(); app.ui.triggerToast('NODE RECORDED');" class="flex">
                        <input type="email" placeholder="EMAIL ADDRESS" required class="flex-grow bg-transparent border border-[#333] border-r-0 px-4 py-3 text-white focus:outline-none focus:border-white font-mono text-[10px]">
                        <button type="submit" class="btn-invert px-6 font-mono text-[10px] border border-transparent">JOIN</button>
                    </form>
                </div>
            </div>


            <div class="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-[#1A1A1A] pt-8 text-[12px] font-mono text-[#333] tracking-widest">
                <div>EROS &copy; 2026 - ALL RIGHTS RESERVED.</div>
                <div class="flex flex-wrap gap-4">
                    <a href="https://varsitymarket.co.za/" class="hover:text-white transition-colors">Powered BY Varsity Market Technologies</a>
                </div>
            </div>
        </div>
    </footer>

    <script>
        /**
         * Brutalist Streetwear Dataset
         */
        const INVENTORY_DB = [{
                id: 'v-001',
                name: 'OVERSIZED TACTICAL BOMBER',
                price: 450.00,
                category: 'OUTERWEAR',
                images: ['https://images.unsplash.com/photo-1550614000-4b95d4ebf04f?q=80&w=800&auto=format&fit=crop'],
                desc: 'Constructed from high-density ballistic nylon. Features extreme drop shoulders, elongated sleeves, and hidden compartmentalized utility pockets. Water-repellent finish. Heavily insulated.'
            },
            {
                id: 'v-002',
                name: 'ARTICULATED CARGO TROUSER',
                price: 280.00,
                category: 'BOTTOMS',
                images: ['https://images.unsplash.com/photo-1542272201-b1ca555f8505?q=80&w=800&auto=format&fit=crop'],
                desc: 'Wide-leg structural denim treated with a matte black resin coating. Articulated knee darts allow for aggressive movement. Features asymmetric strapping and oxidized metal hardware.'
            },
            {
                id: 'v-003',
                name: 'HEAVYWEIGHT LOOPBACK HOODIE',
                price: 195.00,
                category: 'JERSEY',
                images: ['https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop'],
                desc: '480gsm custom-milled raw cotton. Boxy, cropped body with an exaggerated hood structure. Seams are inverted and overlocked. Pre-washed for severe brutalist fade.'
            },
            {
                id: 'v-004',
                name: 'MONOLITH COMBAT BOOT',
                price: 520.00,
                category: 'FOOTWEAR',
                images: ['https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop'],
                desc: 'Calf leather upper bonded to an exaggerated, aggressive rubber lug sole. Front zip closure for rapid deployment. Unforgiving silhouette.'
            }
        ];

        const app = {
            state: {
                cart: [],
                activeFilter: 'all',
                currentSort: 'featured',
                activeCheckoutStep: 1
            },
            init: function() {
                this.router.init();
                this.cart.loadAndSync();
                lucide.createIcons();
            }
        };

        app.router = {
            init: function() {
                window.addEventListener('popstate', () => this.evalRoute(window.location.hash));
                if (window.location.hash) {
                    this.evalRoute(window.location.hash);
                }
            },
            navigate: function(view, params = null) {
                let hash = `#${view}`;
                if (params) hash += `?${new URLSearchParams(params).toString()}`;
                history.pushState(null, null, hash);
                this.evalRoute(hash);
            },
            evalRoute: function(hashString) {
                const parts = hashString.split('?');
                const view = parts[0] || '#home';
                const queryParams = parts[1] ? Object.fromEntries(new URLSearchParams(parts[1])) : {};
                document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
                const targetView = document.getElementById(`view-${view.replace('#', '')}`);
                if (targetView) targetView.classList.add('active');
                if (view === '#product' && queryParams.id) {
                    app.store.renderProductDetail(queryParams.id);
                } else if (view === '#checkout') {
                    app.checkout.renderCurrentStep();
                }
                window.scrollTo({
                    top: 0,
                    behavior: 'auto'
                });
            }
        };

        app.store = {
            renderCatalog: function(itemsToRender = INVENTORY_DB) {
                const grid = document.getElementById('shop-items-grid');
                if (!grid || grid.children.length) return;
                grid.innerHTML = itemsToRender.map(item => `
                    <div class="group bg-[#030303] cursor-pointer hover:bg-[#0A0A0A] transition-colors relative flex flex-col h-full" onclick="app.router.navigate('product', {id: '${item.id}'})">
                        <div class="absolute top-4 left-4 z-10 font-mono text-[12px] bg-black border border-[#333] px-2 py-1 text-[#666]">
                            ${item.id}
                        </div>
                        <div class="aspect-[3/4] w-full overflow-hidden bg-[#0A0A0A]">
                            <img src="${item.images[0]}" alt="${item.name}" class="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500">
                        </div>
                        <div class="p-4 border-t border-[#1A1A1A] flex flex-col flex-grow justify-between gap-4">
                            <div>
                                <h3 class="font-bold text-sm tracking-tight leading-snug">${item.name}</h3>
                                <p class="font-mono text-[12px] text-[#666] tracking-widest mt-1">${item.category}</p>
                            </div>
                            <div class="font-mono text-[11px] text-white">
                                $${item.price.toFixed(2)}
                            </div>
                        </div>
                    </div>`).join('');
                document.getElementById('catalog-count-string').innerText = `[ ${itemsToRender.length} ARTIFACTS LOCATED ]`;
            },
            filterCatalog: function(cat) {
                app.state.activeFilter = cat;
                const grid = document.getElementById('shop-items-grid');
                if (!grid || grid.children.length) return;
                this.renderCatalog(cat === 'all' ? INVENTORY_DB : INVENTORY_DB.filter(i => i.category === cat));
            },
            sortCatalog: function(criteria) {
                const grid = document.getElementById('shop-items-grid');
                if (!grid || grid.children.length) return;
                let sorted = [...INVENTORY_DB];
                if (criteria === 'price-low') sorted.sort((a, b) => a.price - b.price);
                if (criteria === 'price-high') sorted.sort((a, b) => b.price - a.price);
                this.renderCatalog(sorted);
            },
            renderProductDetail: function(id) {
                const item = INVENTORY_DB.find(p => p.id === id);
                if (!item) return;
                document.getElementById('product-detail-target').innerHTML = `
                    <div class="w-full lg:w-1/2 aspect-[3/4] lg:aspect-auto bg-[#0A0A0A] border-b lg:border-b-0 lg:border-r border-[#1A1A1A] relative">
                        <div class="absolute top-4 left-4 z-10 font-mono text-[10px] text-[#666] tracking-widest uppercase">
                            ASSET - ${item.id}
                        </div>
                        <img src="${item.images[0]}" alt="${item.name}" class="w-full h-full object-cover grayscale opacity-80">
                    </div>
                    <div class="w-full lg:w-1/2 p-8 sm:p-12 xl:p-16 flex flex-col bg-[#030303]">
                        <div class="mb-12">
                            <h1 class="text-3xl sm:text-4xl font-bold tracking-tighter uppercase mb-4 leading-none">${item.name}</h1>
                            <p class="font-mono text-xl text-white tracking-widest">$${item.price.toFixed(2)}</p>
                        </div>
                        <div class="font-mono text-[11px] text-[#888] leading-relaxed lowercase mb-12 flex-grow">
                            ${item.desc}
                        </div>
                        <div class="space-y-6">
                            <div class="grid grid-cols-2 gap-4 border-t border-b border-[#1A1A1A] py-4">
                                <div>
                                    <span class="font-mono text-[12px] text-[#666] block mb-1">DESIGNATION</span>
                                    <span class="font-mono text-[10px] text-white tracking-widest">${item.category}</span>
                                </div>
                                <div>
                                    <span class="font-mono text-[12px] text-[#666] block mb-1">AVAILABILITY</span>
                                    <span class="font-mono text-[10px] text-white tracking-widest">IN STOCK</span>
                                </div>
                            </div>
                            <button onclick="app.cart.addItem('${item.id}')" class="w-full py-5 btn-invert font-mono text-[11px] tracking-widest border border-transparent flex justify-center items-center gap-3">
                                <span>APPEND TO MANIFEST</span>
                                <i data-lucide="plus" class="w-4 h-4"></i>
                            </button>
                        </div>
                    </div>`;
                lucide.createIcons();
            },
            handleSearch: function(term) {
                const out = document.getElementById('search-results-output');
                if (!term) {
                    out.innerHTML = '';
                    return;
                }
                out.innerHTML = INVENTORY_DB.filter(i => i.name.toLowerCase().includes(term.toLowerCase())).map(i => `
                    <div onclick="app.ui.toggleSearchOverlay(); app.router.navigate('product', {id: '${i.id}'})" class="p-6 bg-[#030303] hover:bg-[#0A0A0A] flex items-center justify-between cursor-pointer transition-colors border-b border-[#1A1A1A] last:border-0 group">
                        <div class="flex items-center space-x-6">
                            <img src="${i.images[0]}" class="w-16 h-16 object-cover grayscale opacity-50 group-hover:opacity-100 transition-opacity">
                            <div>
                                <span class="block font-bold text-sm tracking-tight text-white">${i.name}</span>
                                <span class="block font-mono text-[12px] text-[#666] tracking-widest mt-1">${i.id}</span>
                            </div>
                        </div>
                        <span class="font-mono text-[11px] text-white">$${i.price}</span>
                    </div>`).join('');
            }
        };

        app.cart = {
            loadAndSync: function() {
                const stored = localStorage.getItem('Eros_cart');
                if (stored) app.state.cart = JSON.parse(stored);
                this.updateUI();
            },
            addItem: function(id) {
                const prod = INVENTORY_DB.find(p => p.id === id);
                const exist = app.state.cart.find(item => item.product.id === id);
                if (exist) exist.qty += 1;
                else app.state.cart.push({
                    product: prod,
                    qty: 1
                });
                this.sync();
                app.ui.triggerToast(`[ ${prod.id} ADDED ]`);
                app.ui.toggleCartDrawer(true);
            },
            updateQty: function(id, val) {
                const item = app.state.cart.find(i => i.product.id === id);
                if (!item) return;
                item.qty += val;
                if (item.qty <= 0) app.state.cart = app.state.cart.filter(i => i.product.id !== id);
                this.sync();
            },
            sync: function() {
                localStorage.setItem('Eros_cart', JSON.stringify(app.state.cart));
                this.updateUI();
            },
            updateUI: function() {
                const drawerContainer = document.getElementById('cart-drawer-items');
                const badge = document.getElementById('global-cart-count');
                const mobileBadge = document.getElementById('mobile-cart-count');
                const subtotalText = document.getElementById('cart-drawer-subtotal');
                const totalItems = app.state.cart.reduce((sum, i) => sum + i.qty, 0);
                const subtotal = app.state.cart.reduce((sum, i) => sum + (i.product.price * i.qty), 0);
                if (totalItems > 0) {
                    badge.classList.remove('opacity-0');
                    badge.innerText = `[${totalItems}]`;
                    if (mobileBadge) mobileBadge.innerText = `${totalItems}`;
                } else {
                    badge.classList.add('opacity-0');
                    if (mobileBadge) mobileBadge.innerText = `0`;
                }
                subtotalText.innerText = `$${subtotal.toFixed(2)}`;
                if (app.state.cart.length === 0) {
                    drawerContainer.innerHTML = `<div class="text-center font-mono text-[10px] text-[#666] py-16 tracking-widest">[ MANIFEST EMPTY ]</div>`;
                } else {
                    drawerContainer.innerHTML = app.state.cart.map(item => `
                        <div class="flex space-x-4 border border-[#1A1A1A] p-4 bg-[#0A0A0A]">
                            <img src="${item.product.images[0]}" class="w-16 h-20 object-cover grayscale opacity-70">
                            <div class="flex flex-col justify-between flex-grow">
                                <div>
                                    <h4 class="font-bold text-xs tracking-tight text-white mb-1 leading-tight">${item.product.name}</h4>
                                    <p class="font-mono text-[12px] text-[#666] tracking-widest">${item.product.id}</p>
                                </div>
                                <div class="flex justify-between items-center mt-3">
                                    <div class="flex items-center space-x-3 border border-[#333] px-2 py-1 font-mono text-[10px]">
                                        <button onclick="app.cart.updateQty('${item.product.id}', -1)" class="text-[#666] hover:text-white">&minus;</button>
                                        <span class="text-white w-4 text-center">${item.qty}</span>
                                        <button onclick="app.cart.updateQty('${item.product.id}', 1)" class="text-[#666] hover:text-white">&plus;</button>
                                    </div>
                                    <span class="font-mono text-[11px] text-white">$${(item.product.price * item.qty).toFixed(2)}</span>
                                </div>
                            </div>
                        </div>`).join('');
                }
            }
        };

        app.checkout = {
            initiateCheckout: function() {
                if (!app.state.cart.length) return;
                app.ui.toggleCartDrawer(false);
                app.router.navigate('checkout');
            },
            renderCurrentStep: function() {
                const container = document.getElementById('checkout-step-container');
                const sub = app.state.cart.reduce((sum, i) => sum + (i.product.price * i.qty), 0);
                document.getElementById('chk-total').innerText = `$${sub.toFixed(2)}`;
                document.getElementById('checkout-summary-items').innerHTML = app.state.cart.map(i => `
                    <div class="flex justify-between items-center py-2 border-b border-[#1A1A1A] last:border-0">
                        <div class="flex flex-col">
                            <span class="text-white">${i.product.name}</span>
                            <span class="text-[#666] text-[12px] mt-1">QTY: ${i.qty} - ID: ${i.product.id}</span>
                        </div>
                        <span class="text-white">$${(i.product.price * i.qty).toFixed(2)}</span>
                    </div>`).join('');
                document.getElementById('step-nav-1').className = app.state.activeCheckoutStep === 1 ? "text-white" : "text-[#666]";
                document.getElementById('step-nav-2').className = app.state.activeCheckoutStep === 2 ? "text-white" : "text-[#666]";
                if (app.state.activeCheckoutStep === 1) {
                    container.innerHTML = `
                        <input type="email" required placeholder="COMMUNICATIONS NODE (EMAIL)" class="w-full py-4 px-4 font-mono text-[10px] shopify-input">
                        <input type="text" required placeholder="DELIVERY DESIGNATION (ADDRESS)" class="w-full py-4 px-4 font-mono text-[10px] shopify-input"/>
                    `;
                } else if (app.state.activeCheckoutStep === 2) {
                    container.innerHTML = `
                        <input type="text" required placeholder="VAULT KEY (CARD NUMBER)" class="w-full py-4 px-4 font-mono text-[10px] shopify-input mb-6">
                        <div class="grid grid-cols-2 gap-6">
                            <input type="text" required placeholder="EXP [MM/YY]" class="w-full py-4 px-4 font-mono text-[10px] shopify-input">
                            <input type="text" required placeholder="SEC [CVC]" class="w-full py-4 px-4 font-mono text-[10px] shopify-input">
                        </div>
                    `;
                }
            },
            handleStepSubmit: function(e) {
                e.preventDefault();
                if (app.state.activeCheckoutStep < 2) {
                    app.state.activeCheckoutStep += 1;
                    this.renderCurrentStep();
                } else {
                    app.state.cart = [];
                    app.cart.sync();
                    app.state.activeCheckoutStep = 1;
                    app.ui.triggerToast("[ AUTHORIZED - LOG RECORDED ]");
                    app.router.navigate('home');
                }
            }
        };

        app.ui = {
            toggleCartDrawer: function(forceOpen = null) {
                const overlay = document.getElementById('cart-drawer-overlay');
                const inner = overlay.firstElementChild;
                if (forceOpen === true) {
                    overlay.classList.remove('opacity-0', 'pointer-events-none');
                    inner.classList.remove('translate-x-full');
                    return;
                }
                if (forceOpen === false) {
                    overlay.classList.add('opacity-0', 'pointer-events-none');
                    inner.classList.add('translate-x-full');
                    return;
                }
                overlay.classList.toggle('opacity-0');
                overlay.classList.toggle('pointer-events-none');
                inner.classList.toggle('translate-x-full');
            },
            toggleSearchOverlay: function() {
                const s = document.getElementById('search-overlay');
                s.classList.toggle('hidden');
                s.classList.toggle('flex');
                if (!s.classList.contains('hidden')) {
                    setTimeout(() => document.getElementById('live-search-input').focus(), 100);
                }
            },
            toggleMobileNav: function(forceOpen = null) {
                const nav = document.getElementById('mobile-nav-overlay');
                if (!nav) return;
                if (forceOpen === true) {
                    nav.classList.remove('hidden');
                    return;
                }
                if (forceOpen === false) {
                    nav.classList.add('hidden');
                    return;
                }
                nav.classList.toggle('hidden');
            },
            triggerToast: function(msg) {
                const t = document.getElementById('toast-notif');
                document.getElementById('toast-notif-message').innerText = msg;
                t.classList.remove('opacity-0', 'translate-x-10', 'pointer-events-none');
                setTimeout(() => {
                    t.classList.add('opacity-0', 'translate-x-10', 'pointer-events-none');
                }, 3000);
            }
        };

        window.addEventListener('DOMContentLoaded', () => app.init());
    </script>
</body>