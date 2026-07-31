document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const menuToggleBtn = document.getElementById('menuToggleBtn');
  const navMenu = document.getElementById('navMenu');

  menuToggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Cart Drawer Interactivity
  const cartOpenBtn = document.getElementById('cartOpenBtn');
  const cartCloseBtn = document.getElementById('cartCloseBtn');
  const cartOverlay = document.getElementById('cartOverlay');
  const cartDrawer = document.getElementById('cartDrawer');
  const addCartBtns = document.querySelectorAll('.add-to-cart-btn');
  const cartItemsList = document.getElementById('cartItemsList');
  const emptyCartMsg = document.getElementById('emptyCartMsg');
  const cartCount = document.getElementById('cartCount');
  const cartSubtotal = document.getElementById('cartSubtotal');

  let cart = [];

  function toggleCart(open) {
    if (open) {
      cartDrawer.classList.add('active');
      cartOverlay.classList.add('active');
    } else {
      cartDrawer.classList.remove('active');
      cartOverlay.classList.remove('active');
    }
  }

  cartOpenBtn.addEventListener('click', () => toggleCart(true));
  cartCloseBtn.addEventListener('click', () => toggleCart(false));
  cartOverlay.addEventListener('click', () => toggleCart(false));

  function updateCartUI() {
    // Calculate totals
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    cartCount.textContent = totalItems;
    cartSubtotal.textContent = `$${totalPrice.toFixed(2)} USD`;

    // Render Items
    if (cart.length === 0) {
      emptyCartMsg.style.display = 'block';
      cartItemsList.innerHTML = '';
      cartItemsList.appendChild(emptyCartMsg);
    } else {
      emptyCartMsg.style.display = 'none';
      cartItemsList.innerHTML = '';

      cart.forEach((item, index) => {
        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        itemEl.innerHTML = `
          <div>
            <strong>${item.name}</strong>
            <div>$${item.price} x ${item.quantity}</div>
          </div>
          <button type="button" onclick="removeItem(${index})" style="color: #ef4444;">Remove</button>
        `;
        cartItemsList.appendChild(itemEl);
      });
    }
  }

  window.removeItem = (index) => {
    cart.splice(index, 1);
    updateCartUI();
  };

  addCartBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const name = btn.getAttribute('data-name');
      const price = parseFloat(btn.getAttribute('data-price'));

      const existingItem = cart.find((i) => i.name === name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ name, price, quantity: 1 });
      }

      updateCartUI();
      toggleCart(true);
    });
  });

  // Testimonial Slider Functionality
  const track = document.getElementById('testimonialTrack');
  const slides = Array.from(track.children);
  const prevBtn = document.getElementById('sliderPrevBtn');
  const nextBtn = document.getElementById('sliderNextBtn');
  const dotsContainer = document.getElementById('sliderDots');

  let currentIndex = 0;

  // Build pagination dots
  slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = `dot ${i === 0 ? 'active' : ''}`;
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });

  const dots = Array.from(dotsContainer.children);

  function goToSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    currentIndex = index;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
  nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

  // Autoplay Testimonial Slider
  setInterval(() => {
    goToSlide(currentIndex + 1);
  }, 5000);
});