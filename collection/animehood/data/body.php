<body class="bg-white">
    # $app()->card(navbar);
    # $app()->page(e);
    <footer class="bg-white border-t border-gray-100 pt-16 pb-8">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div class="lg:col-span-2">
            <a href="<!-- #!/engine/node/ page('home') -->" class="font-['Pacifico'] text-2xl text-primary inline-block mb-4"><img src="/img/animehood.PNG" style="max-width:9rem" ></a>
            <p class="text-gray-600 mb-6 max-w-md">We offer premium quality clothing and accessories for men and women. Our mission is to provide sustainable fashion that lasts.</p>
            <div class="flex space-x-4">
              <a href="#" class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"><i class="ri-facebook-fill"></i></a>
              <a href="#" class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"><i class="ri-instagram-line"></i></a>
              <a href="#" class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"><i class="ri-twitter-x-line"></i></a>
              <a href="#" class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"><i class="ri-pinterest-line"></i></a>
            </div>
          </div>
          <div>
            <h3 class="text-gray-900 font-semibold mb-4">Shop</h3>
            <ul class="space-y-3">
              <li><a href="<!-- #!/engine/node/ page('shop') -->" class="text-gray-600 hover:text-primary transition-colors">Women</a></li>
              <li><a href="<!-- #!/engine/node/ page('shop') -->" class="text-gray-600 hover:text-primary transition-colors">Men</a></li>
              <li><a href="<!-- #!/engine/node/ page('collection') -->" class="text-gray-600 hover:text-primary transition-colors">Accessories</a></li>
              <li><a href="<!-- #!/engine/node/ page('shop') -->" class="text-gray-600 hover:text-primary transition-colors">Footwear</a></li>
              <li><a href="<!-- #!/engine/node/ page('shop') -->" class="text-gray-600 hover:text-primary transition-colors">New Arrivals</a></li>
              <li><a href="<!-- #!/engine/node/ page('shop') -->" class="text-gray-600 hover:text-primary transition-colors">Sale</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-gray-900 font-semibold mb-4">Help</h3>
            <ul class="space-y-3">
              <li><a href="<!-- #!/engine/node/ page('contact') -->" class="text-gray-600 hover:text-primary transition-colors">Customer Service</a></li>
              <li><a href="<!-- #!/engine/node/ page('account') -->" class="text-gray-600 hover:text-primary transition-colors">My Account</a></li>
              <li><a href="#" class="text-gray-600 hover:text-primary transition-colors">Find a Store</a></li>
              <li><a href="<!-- #!/engine/node/ page('faq') -->" class="text-gray-600 hover:text-primary transition-colors">Shipping & Returns</a></li>
              <li><a href="<!-- #!/engine/node/ page('faq') -->" class="text-gray-600 hover:text-primary transition-colors">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-gray-900 font-semibold mb-4">About</h3>
            <ul class="space-y-3">
              <li><a href="<!-- #!/engine/node/ page('about') -->" class="text-gray-600 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" class="text-gray-600 hover:text-primary transition-colors">Sustainability</a></li>
              <li><a href="#" class="text-gray-600 hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" class="text-gray-600 hover:text-primary transition-colors">Press</a></li>
              <li><a href="<!-- #!/engine/node/ page('contact') -->" class="text-gray-600 hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div class="mt-12 pt-8 border-t border-gray-100">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <p class="text-gray-500 text-sm mb-4 md:mb-0">&copy; 2025 AnimeHood. All rights reserved.</p>
            <div class="flex flex-wrap justify-center gap-4">
              <a href="<!-- #!/engine/node/ page('privacy-policy') -->" class="text-gray-500 text-sm hover:text-gray-700">Privacy Policy</a>
              <a href="<!-- #!/engine/node/ page('terms-of-use') -->" class="text-gray-500 text-sm hover:text-gray-700">Terms of Service</a>
              <a href="#" class="text-gray-500 text-sm hover:text-gray-700">Cookies Settings</a>
            </div>
            <div class="flex items-center space-x-3 mt-4 md:mt-0">
              <i class="ri-visa-fill text-2xl text-gray-600"></i>
              <i class="ri-mastercard-fill text-2xl text-gray-600"></i>
              <i class="ri-paypal-fill text-2xl text-gray-600"></i>
              <i class="ri-apple-fill text-2xl text-gray-600"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <script id="headerInteractions">
      document.addEventListener("DOMContentLoaded", function () {
        const searchToggle = document.getElementById("searchToggle");
        const searchDropdown = document.getElementById("searchDropdown");
        if (searchToggle && searchDropdown) {
          searchToggle.addEventListener("click", function () {
            searchDropdown.classList.toggle("hidden");
          });
          document.addEventListener("click", function (event) {
            if (!searchToggle.contains(event.target) && !searchDropdown.contains(event.target)) {
              searchDropdown.classList.add("hidden");
            }
          });
        }

        const cartToggle = document.getElementById("cartToggle");
        const cartDropdown = document.getElementById("cartDropdown");
        if (cartToggle && cartDropdown) {
          cartToggle.addEventListener("click", function () {
            cartDropdown.classList.toggle("hidden");
          });
          document.addEventListener("click", function (event) {
            if (!cartToggle.contains(event.target) && !cartDropdown.contains(event.target)) {
              cartDropdown.classList.add("hidden");
            }
          });
        }

        const mobileMenuToggle = document.getElementById("mobileMenuToggle");
        const mobileMenu = document.getElementById("mobileMenu");
        if (mobileMenuToggle && mobileMenu) {
          mobileMenuToggle.addEventListener("click", function () {
            mobileMenu.classList.toggle("hidden");
          });
        }

        const mobileShopToggle = document.getElementById("mobileShopToggle");
        const mobileShopMenu = document.getElementById("mobileShopMenu");
        if (mobileShopToggle && mobileShopMenu) {
          mobileShopToggle.addEventListener("click", function () {
            mobileShopMenu.classList.toggle("hidden");
          });
        }
      });
    </script>
</body>
<!-- #!/engine/node/ analytics() -->
</html>
