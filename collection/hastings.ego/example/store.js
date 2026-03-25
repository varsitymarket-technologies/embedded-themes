/**
 * Varsity Market - SPA Core Logic
 * Author: Hardy Hastings
 * Architecture: 100% Vanilla JS + Template Driven
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // --- STATE ---
    const appRoot = document.getElementById('app-root');
    const cartCountEl = document.getElementById('cart-count');
    let products = [];
    let cart = JSON.parse(localStorage.getItem('vm_cart')) || [];

    // --- CORE UTILS ---
    const getTpl = (id) => {
        const tpl = document.getElementById(`tpl-${id}`);
        if (!tpl) {
            console.error(`Template tpl-${id} is missing!`);
            return document.createElement('div'); // Failsafe
        }
        return tpl.content.cloneNode(true);
    };

    const formatPrice = (price) => `${StoreConfig.currency}${parseFloat(price).toFixed(2)}`;

    const updateNav = (viewId) => {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.toggle('active', link.dataset.view === viewId);
        });
        cartCountEl.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
    };

    // --- ROUTER ---
    const navigateTo = (viewId, param = null) => {
        appRoot.innerHTML = ''; // Clear current view
        const view = getTpl(viewId);

        // Route Handlers
        switch (viewId) {
            case 'shop': renderShop(view); break;
            case 'product': renderProduct(view, param); break;
            case 'cart': renderCart(view); break;
            case 'account': setupAccount(view); break;
            case 'contact': setupContact(view); break;
            case 'billing': setupBilling(view); break;
            case 'confirmation': setupConfirmation(view); break;
        }

        appRoot.appendChild(view);
        updateNav(viewId);
        window.scrollTo(0, 0);
    };

    // --- VIEW CONTROLLERS ---

    const renderShop = (view) => {
        const grid = view.querySelector('.js-grid');
        products.forEach(p => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `<img src="${p.image}" alt="${p.name}"><div class="product-card-info"><h3>${p.name}</h3><p>${formatPrice(p.price)}</p></div>`;
            card.onclick = () => navigateTo('product', p.id);
            grid.appendChild(card);
        });
    };

    const renderProduct = (view, id) => {
        const p = products.find(prod => prod.id == id);
        if (!p) return navigateTo('shop');

        view.querySelector('.js-img').src = p.image;
        view.querySelector('.js-name').textContent = p.name;
        view.querySelector('.js-price').textContent = formatPrice(p.price);
        view.querySelector('.js-desc').textContent = p.description || 'Premium quality.';
        
        view.querySelector('.js-back').onclick = () => navigateTo('shop');
        view.querySelector('.js-add').onclick = () => {
            const existing = cart.find(item => item.id == p.id);
            if (existing) existing.qty++;
            else cart.push({ id: p.id, qty: 1 });
            
            localStorage.setItem('vm_cart', JSON.stringify(cart));
            updateNav('product');
            alert('Added to Bag!');
        };
    };

    const renderCart = (view) => {
        const list = view.querySelector('.js-cart-list');
        let total = 0;

        if (cart.length === 0) {
            list.innerHTML = "<p>Your bag is empty.</p>";
        } else {
            cart.forEach((item, index) => {
                const p = products.find(prod => prod.id == item.id);
                if (!p) return;
                total += p.price * item.qty;

                const row = document.createElement('div');
                row.style = "display:flex; justify-content:space-between; padding:10px 0; border-bottom:1px solid #333;";
                row.innerHTML = `
                    <div><strong>${p.name}</strong> (x${item.qty})</div>
                    <div>
                        ${formatPrice(p.price * item.qty)}
                        <button class="btn" style="padding:2px 8px; margin-left:10px;" data-remove="${index}">X</button>
                    </div>
                `;
                list.appendChild(row);
            });
        }

        view.querySelector('.js-total').textContent = formatPrice(total);
        
        // Remove item delegation
        list.addEventListener('click', (e) => {
            if (e.target.dataset.remove) {
                cart.splice(e.target.dataset.remove, 1);
                localStorage.setItem('vm_cart', JSON.stringify(cart));
                navigateTo('cart'); // Re-render
            }
        });

        view.querySelector('.js-checkout').onclick = () => {
            if (cart.length === 0) return alert('Bag is empty!');
            // Basic Auth Check Simulation
            if (!document.cookie.includes('vm_logged_in=true')) {
                alert('Please login to continue.');
                navigateTo('account');
            } else {
                navigateTo('billing');
            }
        };
    };

    const setupAccount = (view) => {
        view.querySelector('.js-login-form').onsubmit = (e) => {
            e.preventDefault();
            document.cookie = "vm_logged_in=true; path=/; max-age=86400"; // 1 day cookie
            alert('Authentication successful.');
            navigateTo('shop');
        };
    };

    const setupContact = (view) => {
        view.querySelector('.js-contact-form').onsubmit = (e) => {
            e.preventDefault();
            alert('Message sent successfully.');
            e.target.reset();
        };
    };

    const setupBilling = (view) => {
        view.querySelector('.js-billing-form').onsubmit = (e) => {
            e.preventDefault();
            // Clear cart on successful order
            cart = [];
            localStorage.removeItem('vm_cart');
            navigateTo('confirmation');
        };
    };

    const setupConfirmation = (view) => {
        view.querySelector('.js-home-btn').onclick = () => navigateTo('shop');
    };

    // --- INIT & GLOBAL LISTENERS ---
    
    // Global click listener for navigation
    document.body.addEventListener('click', (e) => {
        const link = e.target.closest('[data-view]');
        if (link) {
            e.preventDefault();
            navigateTo(link.dataset.view);
        }
    });

    const initApp = async () => {
        updateNav('shop');
        
        // Mock fetch for safety until API is connected
        try {
            const res = await fetch(`${StoreConfig.apiLink}?state=products`);
            if (!res.ok) throw new Error("API not ready");
            products = await res.json();
        } catch (err) {
            console.warn("Using mock data. Connect API to remove this.", err);
            products = [
                { id: 1, name: 'Core Hoodie', price: 65.00, image: 'bg.jpg', description: 'Heavyweight cotton.' },
                { id: 2, name: 'Utility Backpack', price: 85.00, image: 'bg.jpg', description: 'Water-resistant.' }
            ];
        }
        
        navigateTo('shop');
    };

    // Start the engine
    initApp();
});
