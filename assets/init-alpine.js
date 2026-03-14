<html lang="en" class="theme-dark">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Varsity Market Technologies</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet">
    <link rel="icon" type="image/png" href="assets/img/favicon.png">
    <link rel="stylesheet" href="assets/css/tailwind.output.css">
    <link rel="stylesheet" href="assets/css/style.css">

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YVH6L2RLM1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-YVH6L2RLM1');
</script>


    <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer=""></script>

    <script src="./assets/js/init-alpine.js"></script>
    <script src="java/inbox_notification.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.css">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.0/chart.min.js"></script>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Tilt+Neon&display=swap" rel="stylesheet">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet">

    <style>
        .theme-font-style {
            font-family: "Tilt Neon", sans-serif !important;
            font-optical-sizing: auto !important;
            font-weight: 400;
            font-style: normal;
            font-variation-settings:
                "XROT" 0,
                "YROT" 0;
        }

        .navbar-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 3rem 1rem;
        }

        .navbar-container img {
            width: 8vh;
            height: auto;
        }

        .navbar-container .quick_links {
            font-size: 1.1rem;
            width: 100%;
            text-align: center;
        }

        .navbar-container .quick_links a {
            margin: 10px;
        }

        .footer {
            margin: 3rem 0rem;
        }

        .footer .signature {
            font-size: 10px;
            font-weight: 700;
            text-align: center;
        }

        .footer .signature .credits {
            font-size: 12px;
            font-weight: 700;
            text-align: center;
            font-weight: 400;
            font-style: normal;
            color: #6934b7;
        }

        .poster {
            display: flex;
            border-radius: 1rem;
            margin: 2rem 0rem 1rem 0rem;
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            width:100%; 
        }

        .poster .contents {
            border-radius: 1rem;
            background: linear-gradient(220deg, #00000000, #6934b7);
            min-height: 75vh;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 2rem;
        }

        ._drop-shadow {
            filter: drop-shadow(4px 4px 13px black);
        }

        /* 
	Weight axis: 100 – 700
	Width axis: 85 – 100
*/
        /* @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Text:wght@100..900&display=swap */

        @font-face {
            font-family: 'Heading Now';
            src: url('https://fonts.vdhazel.com/headingnow/Heading-Now-Variable-Regular-trial.woff2') format('woff2');
            font-weight: normal;
            font-style: normal;
        }

        * {
            box-sizing: border-box;
        }

        .animation_containeer {
            font-family: "Heading Now", sans-serif;
            font-optical-sizing: auto;
            font-style: normal;

            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            min-height: 100vh;
            color: #fff;
        }


        .animated-text {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 3rem;
            font-size: 10vw;
            line-height: 10vw;
        }

        .letter {
            display: inline-block;
            --wght: 100;
            --wdth: 85;
            --opacity: 0.25;
            --letter-spacing: 0;
            --font-size: 10vw;
            font-variation-settings: "wght" var(--wght), "wdth" var(--wdth);
            opacity: var(--opacity);
            letter-spacing: var(--letter-spacing);
            font-size: var(--font-size);
            transition:
                font-variation-settings 1s ease-in-out,
                opacity 1s ease-in-out,
                letter-spacing 2s ease-in-out,
                font-size 1s ease-in-out;
        }


        @import "compass/css3";

        @import url(https://fonts.googleapis.com/css?family=Finger+Paint);

        .smoke_container {
            overflow: hidden;
            font-family: "Tilt Neon", sans-serif !important;
            font-size: 10vh;
            text-align: center;
            color: transparent;
            backface-visibility: hidden;
            padding: 4rem 0;
        }

        .smoke_container span {
            display: inline-block;
            text-shadow: 0 0 0 whitesmoke;
            animation: smoky 5s 3s both;
        }

        .smoke_container span:nth-child(even) {
            animation-name: smoky-mirror;
        }

        @keyframes smoky {
            60% {
                text-shadow: 0 0 40px whitesmoke;
            }

            to {
                transform:
                    translate3d(15rem, -8rem, 0) rotate(-40deg) skewX(70deg) scale(1.5);
                text-shadow: 0 0 20px whitesmoke;
                opacity: 0;
            }
        }

        @keyframes smoky-mirror {
            60% {
                text-shadow: 0 0 40px whitesmoke;
            }

            to {
                transform:
                    translate3d(18rem, -8rem, 0) rotate(-40deg) skewX(-70deg) scale(2);
                text-shadow: 0 0 20px whitesmoke;
                opacity: 0;
            }
        }

        @for $item from 1 through 21 {
            span:nth-of-type(#{$item}) {
                animation-delay: #{(3 + ($item/10))}s;
            }
        }

        * {
            margin: 0;
        }

        .capture_container {
            padding: 8rem 0 0 0;
        }

        .gradient-text:after {
            content: "";
            background-image: url("assets/img/Noise_Texture.png");
            height: 300%;
            width: 300%;
            position: fixed;
            pointer-events: none;
            opacity: 0.05;
            animation: animateGrain 8s steps(10) infinite;
        }

        @keyframes animateGrain {

            0%,
            100% {
                transform: translate(0, 0)
            }

            10% {
                transform: translate(-5%, -10%)
            }

            20% {
                transform: translate(-15%, -20%)
            }

            30% {
                transform: translate(-5%, -10%)
            }

            40% {
                transform: translate(-15%, -20%)
            }

            50% {
                transform: translate(-5%, -10%)
            }

            60% {
                transform: translate(-15%, -20%)
            }

            70% {
                transform: translate(-5%, -10%)
            }

            80% {
                transform: translate(-15%, -20%)
            }

            90% {
                transform: translate(-5%, -10%)
            }

            100% {
                transform: translate(-10%, -20%)
            }

        }

        :root {
            --text-color: white;
            --background-color: #6c2bd9;
        }

        .text-box {
            cursor: pointer;
            position: relative;
            width: 400px;
            height: 400px;
            opacity: 0.9;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0px 0px 2px 1px color-mix(in srgb, var(--text-color) 30%, transparent);
            border-radius: 20px;
        }

        .gradient-text {
            margin: 0;
            position: relative;
            width: 100%;
            height: 100vh;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 3rem;
        }

        .top-1,
        .top-2,
        .top-3 {
            opacity: 0;
            position: absolute;
            -webkit-text-stroke: 2px transparent;
            color: #121317;
            ;
            background: linear-gradient(180deg, var(--text-color) 0%, rgba(153, 153, 153, 0) 80%);
            background-size: 100%;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-background-clip: text;
            -moz-background-clip: text;
            text-shadow: 0px 1px 14px var(--background-color);
        }



        .bottom-1,
        .bottom-2,
        .bottom-3 {
            opacity: 0;
            position: absolute;
            -webkit-text-stroke: 2px transparent;
            color: #6c2bd978;
            ;
            background: linear-gradient(360deg, var(--text-color) 10%, rgba(153, 153, 153, 0) 80%);
            background-size: 100%;
            background-clip: text;
            -webkit-background-clip: text;
            -moz-background-clip: text;
            text-shadow: 0px 1px 4px var(--background-color);
        }

        .main-text {
            position: absolute;
            z-index: 10;
            padding: 40px;
            cursor: pointer;
            scale: 1.2;
            color: var(--text-color);
            text-shadow: 2px 2px 4px var(--background-color);
            ;
        }




        .inputSection {
            position: absolute;
            bottom: 2vh;
            width: 480px;
            height: 80px;
            border-radius: 16px;
            padding: 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: #ffffff5f;
            border: 2px solid rgba(0, 0, 0, 0.561);
            box-shadow: inset 0px 12px 16px 0px color-mix(in srgb, var(--text-color) 30%, transparent);
        }

        input[type=text] {
            width: 60%;
            height: 40%;
            padding: 12px 20px;
            margin: 8px 0;
            border: none;
            border-radius: 8px;
            background: linear-gradient(#444, #555, #666);
            box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.35),
                inset 0 5px 5px rgba(0, 0, 0, 0.5),
                inset 0 15px 25px rgba(0, 0, 0, 0.35);
            color: #333;
            font-size: large;
            font-weight: 400;
        }

        input[type=text]:focus {
            color: #aaa;
            background: linear-gradient(#333, #444, #555);
            border: none;
            outline: none;
            /* Remove default focus outline */
        }

        input[type="color"] {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            width: 50px;
            height: 50px;
            border: none;
            border-radius: 50%;
            overflow: hidden;
        }

        input[type="color"]::-webkit-color-swatch {
            cursor: pointer;
            border-radius: 50%;
            scale: 0.95;
            border: none;
            box-shadow: 0px 2px 12px #000;
        }

        .fieldLabel {
            display: flex;
            height: 100%;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
        }

        label {
            color: #222;
            text-shadow: 0px -0.5px 0.5px #ffffff4f;
            font-size: medium;
            font-weight: 600;
        }

        .typewriter {
            overflow: hidden;
            /* Ensures the content is not revealed until the animation */
            border-right: .15em solid #684da3;
            /* The typwriter cursor */
            margin: 0 auto;
            /* Gives that scrolling effect as the typing happens */
            animation: typing 3.5s steps(40, end), blink-caret .75s step-end infinite;
        }

        /* The typing effect */
        @keyframes typing {
            from {
                width: 0
            }

            to {
                width: 100%
            }
        }

        /* The typewriter cursor effect */
        @keyframes blink-caret {

            from,
            to {
                border-color: transparent
            }

            50% {
                border-color: orange;
            }
        }

        @media (max-width: 1024px) {

            .quick_links {
                display: none;
            }
        }
    </style>

</head>

<body style="background-color: #020202;" class="theme-font-style text-gray-700 dark:text-gray-200">
    <div class="flex bg-gray-50 dark:bg-gray-900" :class="{ 'overflow-hidden': isSideMenuOpen }">
        <div style="width:100%; ">
            <main class="h-full overflow-y-auto" style="width:100%;">
                <!-- Remove everything INSIDE this div to a really blank page -->
                <div style="display:block; padding:20px 1vw;" class="container mx-auto grid">

                    <div id="top" style="width:100%; overflow:hidden; ">
                        <div class="navbar-container">
                            <img src="assets/img/favicon.png">

                            <div class="quick_links">
                                <a href="#top"><i class="fa-solid fa-house"></i> Home</a>
                                <a href="#intro-hero-v4"><i class="fa-solid fa-shop"></i> Join The Club</a>
                                <a href="#intro-hero-v2"><i class="fa-solid fa-bag-shopping"></i> Safe Shopping</a>
                                <a href="#intro-hero-v3"><i class="fa-solid fa-plug"></i> Supporting The Hustle</a>
                                <a href="../index.php" target="_blank"><i class="fa-solid fa-phone"></i> Support</a>
                            </div>
                            <div>
                                <h2 onclick="openmenu()" style="padding-top:20px; ">
                                    <img style="height: 2rem; width: auto;" src="assets/img/icons/menu-active.png">
                                </h2>
                            </div>
                        </div>

                        <style>
                            .menu-overlay {
                                height: 100%;
                                width: 0;
                                position: fixed;
                                z-index: 100;
                                top: 0;
                                left: 0;
                                background-color: rgb(0, 0, 0);
                                background-color: rgba(0, 0, 0, 0.9);
                                overflow-x: hidden;
                                transition: 0.5s;
                                max-width: 60vh;
                                opacity: 1;
                                pointer-events: all;
                            }

                            .menu-overlay a {
                                padding: 8px;
                                text-decoration: none;
                                font-size: 2vh;
                                color: #818181;
                                display: block;
                                transition: 0.3s;
                            }

                            .overlay-content {
                                position: relative;
                                top: 5%;
                                width: 100%;
                                text-align: center;
                                margin-top: 30px;
                            }

                            .thththththt {
                                font-size: 2rem;
                            }

                            .closebtn {
                                font-size: 3rem !important;
                                display: flex !important;
                                margin: 10px !important;
                                padding: 0;
                                height: auto;
                                /* position: absolute; */
                                /* top: 2rem; */
                                /* left: 3rem; */
                                flex-direction: row-reverse !important;
                            }

                            .sesedesedwsedwdd {
                                text-align: start;
                                margin: 0.6rem 0 0 3rem;
                            }

                            .sesedesedwsedwdd i {
                                font-size: 1.1rem !important;
                            }
                        </style>

                        <div>

                            <div id="myNav" class="menu-overlay" style="/* width: 100%;*/">
                                <a class="closebtn" onclick="close_menu();">×</a>
                                <div class="overlay-content">
                                    <img onclick="reload_page('#')" src="assets/img/favicon.png" style="width:20vh; height:auto; margin:auto; ">
                                    <a></a>
                                    <a onclick="reload_page('https://varsitymarket.shop/')" class="sesedesedwsedwdd"><i class="fa-solid fa-house"></i> Home Page</a>
                                    <a onclick="reload_page('https://beta-v1.varsitymarket.shop/')" class="sesedesedwsedwdd"><i class="fa-solid fa-shop"></i> Vendor Portal</a>
                                    <a onclick="reload_page('https://marketplace.varsitymarket.shop/')" class="sesedesedwsedwdd"><i class="fa-solid fa-bag-shopping"></i> Access Marketplace</a>
                                    <a onclick="reload_page('https://help.varsitymarket.shop/')" class="sesedesedwsedwdd"><i class="fa-solid fa-phone"></i> Customer Support</a>
                                    <a class="sesedesedwsedwdd" onclick="reload_page('https://beta-v1.varsitymarket.shop/')"><i class="fa-solid fa-play"></i> Run Demo</a>
                                    <a class="sesedesedwsedwdd" onclick="reload_page('https://community.varsitymarket.shop/')"><i class="fa-solid fa-chalkboard-user"></i> Community Portal</a>
                                    <a class="sesedesedwsedwdd" onclick="reload_page('https://demo-console.varsitymarket.shop/')"></a>
                                    <a class="sesedesedwsedwdd" onclick="reload_page('https://za.varsitymarket.shop/recent-updates/')"><i class="fa-solid fa-gift"></i> Whats New ?</a>
                                    <a class="sesedesedwsedwdd" onclick="reload_page('https://za.varsitymarket.shop/legal/')"><i class="fa-solid fa-scale-balanced"></i> Legal Policies</a>
                                    <a style="margin:1rem"></a>
                                    <br>

                                    <div>

                                    </div>

                                    <a>Follow Us On Our Socials</a>
                                    <i class="thththththt fa-brands fa-x-twitter"></i>
                                    <i class="thththththt fa-brands fa-discord"></i>
                                    <i class="thththththt fa-brands fa-instagram"></i>
                                    </a>
                                    <a style="margin:0.4rem"></a>
                                    <br>
                                    <p style="font-size:9px; padding: 0rem 0px 8rem 0px">Powered by VARSITYMARKET <span style="font-size: 8px; font-weight: 800;">technologies<span></p>

                                </div>
                            </div>

                        </div>

                        <script>
                            function reload_page(link) {
                                window.location.href = link;
                            }
                        </script>

                        <style>
                            .signature_hero_make_do {
                                position: absolute;
                                top: 55%;
                                width: -webkit-fill-available;
                                font-size: 36px;
                                letter-spacing: 3px;
                                color: #ffffff14;
                                font-family: Oswald, sans-serif;
                                text-align: center;
                            }

                            .signature_hero_make_do span {
                                font-family: sans-serif;
                                letter-spacing: 0;
                                font-weight: 300;
                                font-size: 16px;
                                line-height: 24px;
                            }
                        </style>


                        <div>
                            <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>
                            <!--  Content  -->
                            <article>
                                <h1 class="signature_hero_make_do">VARSITY MARKET. <br /> <span>technologies</span></h1>
                            </article>
                        </div>

                        <script>
                            // ES6 Class
                            class TypeWritter {
                                constructor(txtElement, words, wait = 3000) {
                                    this.txtElement = txtElement;
                                    this.words = words;
                                    this.txt = '';
                                    this.wordIndex = 0;
                                    this.wait = parseInt(wait, 10);
                                    this.type();
                                    this.isDeleting = false;
                                }

                                // Type Method
                                type() {
                                    // Current index of word
                                    const current = this.wordIndex % this.words.length;
                                    // Get full text of current word
                                    const fullTxt = this.words[current];
                                    // Check if deleting
                                    if (this.isDeleting) {
                                        // Remove char
                                        this.txt = fullTxt.substring(0, this.txt.length - 1);
                                    } else {
                                        // Add char
                                        this.txt = fullTxt.substring(0, this.txt.length + 1);
                                    }

                                    //Insert txt into element
                                    this.txtElement.innerHTML = `<span class="txt">${
                            this.txt
                            }<span class="blinking-cursor">|</span></span>`;

                                    // Initial type Speed
                                    let typeSpeed = 150;

                                    if (this.isDeleting) {
                                        typeSpeed /= 2;
                                    }

                                    // If word is complete
                                    if (!this.isDeleting && this.txt === fullTxt) {
                                        // Make pause at end
                                        typeSpeed = this.wait;
                                        // Set delete to true
                                        this.isDeleting = true;
                                    } else if (this.isDeleting && this.txt === '') {
                                        this.isDeleting = false;
                                        // Move to next word
                                        this.wordIndex++;
                                        // Pause before start typing
                                        typeSpeed = 500;
                                    }

                                    setTimeout(() => this.type(), typeSpeed);
                                }
                            }

                            // Init on DOM  Load
                            document.addEventListener('DOMContentLoaded', init);

                            // Init App
                            function init() {
                                const txtElement = document.querySelector('.txt-type');
                                const words = JSON.parse(txtElement.getAttribute('data-words'));
                                const wait = txtElement.getAttribute('data-wait');
                                // Init TypeWritter
                                new TypeWritter(txtElement, words, wait);
                            }
                        </script>
                        <style>
                            /* Cursor */
                            .txt-type .txt {
                                /* border-right: solid 2px #777; */
                                padding-right: 3px;
                            }

                            .blinking-cursor {
                                color: #2e3d48;
                                -webkit-animation: 1s blink step-end infinite;
                                -moz-animation: 1s blink step-end infinite;
                                -ms-animation: 1s blink step-end infinite;
                                -o-animation: 1s blink step-end infinite;
                                animation: 1s blink step-end infinite;
                            }

                            @keyframes blink {

                                from,
                                to {
                                    color: #2e3d48;
                                }

                                50% {
                                    color: transparent;
                                }
                            }
                        </style>


                        <div class="poster" style="background-image: url(assets/img/cover-art.jpg); width:100%; ">
                            <div class="contents" style="height:95vh">

                                <h2 style="padding-top:20px; ">
                                    <span style=" font-size: 15px;">Introducing Varsity Market<br>
                                        <h1 style="font-size: 3.5rem; font-weight: 800;">Crafted For <span class="txt-type" data-wait="3000" data-words='["Brands ?","Small Businesses ?","Buyers ?","Sellers ?", "College Students ?","Basically Anyone","Hustlers","Part-Time Use","Big Dogs", "Aiding you"]'></span></h1>
                                        <span>
                                            Welcome After long sweat, tears, and high sleep deprivation, the team is ready to introduce Varsity market, your local digital market.
                                            <br>
                                            Varsity Market introduces safe and smart shopping for all your local collective brands. Our Marketplace will introduce a controlled commerce platform, where you can shop safely.
                                            <br>We also introducing our Vendor Console, this is our in house commerce system.
                                        </span>
                                </h2>
                            </div>
                        </div>


                        <div class="animation_containeer">
                            <div class="animated-text" id="animatedText4"></div>
                        </div>

                        <div class="smoke_container" style="display: none;">
                            <span>B</span>
                            <span>R</span>
                            <span>A</span>
                            <span>N</span>
                            <span>D</span>
                            <span>I</span>
                            <span>N</span>
                            <span>G</span>
                            <span>&nbsp;</span>
                            <span>P</span>
                            <span>R</span>
                            <span>O</span>
                            <span>B</span>
                            <span>L</span>
                            <span>E</span>
                            <span>M</span>
                            <span>S</span>
                        </div>

                        <div id="intro-hero-v2" class="poster _drop-shadow" style="background-image: url(https://images.unsplash.com/photo-1535227983020-c5ddb69077bf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);">
                            <div class="contents _drop-shadow" style="padding: 4rem 2rem; justify-content: flex-end !important;">
                                <h2 style="padding-top:20px; " class="card-title code_descr text-gray-700 dark:text-gray-200">
                                    <span style=" font-size: 10px; max-width:5rem; ">Report Suspicious Activities<br>
                                        <span style="font-size: 3rem; font-weight:900; "> Safe Shopping</span><br>
                                    </span>

                                    <div style="width: 100%; max-width: 55vw;">
                                        <span>
                                            At Varsity Market, we are committed to providing an exceptional customer shopping experience. If you feel like you have experienced a scam, report that vendor/order and we will rectify the issue. Our support team is here to assist you every step of the way and resolve any issues or answer any questions you may have.
                                        </span>
                                    </div>
                                </h2>
                            </div>
                        </div>

                        <div class="poster" style="background-image: url(https://images.unsplash.com/photo-1524282745852-a463fa495a7f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);">
                            <div class="contents">
                                <h2 style="padding-top:20px; text-align:center;">
                                    <span style=" font-size: 10px; ">Access our Marketplace <br>
                                        <span style="font-size: 5rem; font-weight: bolder;">Safe & Controlled </span> <br>
                                    </span>
                                    <div class="container-flyout">
                                        <p aria-label="CodePen" style="font-size: 12vmax;">
                                            <span data-text="S">S</span>
                                            <span data-text="H">H</span>
                                            <span data-text="O">O</span>
                                            <span data-text="P">P</span>
                                            <span data-text="P">P</span>
                                            <span data-text="I">I</span>
                                            <span data-text="N">N</span>
                                            <span data-text="G">G</span>
                                        </p>
                                    </div>
                                </h2>
                            </div>
                        </div>


                        <div class="poster _drop-shadow" style="background-image: url(assets/img/fire.jpg);">
                            <div class="contents _drop-shadow" style="padding: 4rem 2rem; justify-content: flex-end !important;">
                                <h2 style="padding-top:20px; " class="card-title code_descr text-gray-700 dark:text-gray-200">
                                    <span style=" font-size: 10px; max-width:5rem; ">Shop with restrictions and regulations in place<br>
                                        <span style="font-size: 3rem; font-weight:900; "> Controlled Enviroment</span><br>
                                    </span>

                                    <div style="width: 100%; max-width: 55vw;">
                                        <span>
                                            At Varsity Market, we provide a controlled and interactive shopping envioroment. What we mean by controlled is, that all the vendors or brands selling through this platform will not only have to follow the set regulations.
                                            <br>
                                            With our Controlled enviroment, you are provided with an interactive system to control all commerce activities under your account.
                                        </span>
                                    </div>
                                </h2>
                            </div>
                        </div>

                        <div id="intro-hero-v3" class="animation_containeer">
                            <div class="animated-text" id="animatedText"></div>
                        </div>

                        <script>
                            function animate_1() {
                                const text = "SUPPORTING HUSTLE";
                                const container = document.getElementById("animatedText");

                                // Create spans for each letter
                                text.split("").forEach(char => {
                                    const span = document.createElement("span");
                                    span.className = "letter";
                                    span.innerHTML = char === " " ? "&nbsp;" : char; // Use &nbsp; for spaces
                                    container.appendChild(span);
                                });

                                const letters = document.querySelectorAll(".letter");
                                const totalLetters = letters.length;
                                const delayIncrement = 100; // Delay in milliseconds

                                function easeInOutQuart(t) {
                                    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
                                }

                                function animateLetters(forward = true) {
                                    letters.forEach((letter, index) => {
                                        // const delay = Math.max(index, totalLetters - index) * delayIncrement;

                                        const normalizedIndex = Math.max(index, totalLetters - 1 - index) / (totalLetters - 1);
                                        const easedDelay = easeInOutQuart(normalizedIndex);
                                        const delay = easedDelay * (totalLetters - 1) * delayIncrement;

                                        setTimeout(() => {
                                            letter.style.setProperty("--wght", forward ? 700 : 100);
                                            letter.style.setProperty("--wdth", forward ? 400 : 150);
                                            letter.style.setProperty("--opacity", forward ? 1 : 0.25);
                                            letter.style.setProperty("--letter-spacing", forward ? '0.05em' : '0em');
                                            // letter.style.setProperty("--font-size", forward ? '12vw' : '10vw');
                                        }, delay);
                                    });

                                    setTimeout(() => animateLetters(!forward), 4000);
                                }

                                animateLetters();
                            };

                            function animate_4() {
                                const text = "BEHIND THE HUSTLE";
                                const container = document.getElementById("animatedText4");

                                // Create spans for each letter
                                text.split("").forEach(char => {
                                    const span = document.createElement("span");
                                    span.className = "letter";
                                    span.innerHTML = char === " " ? "&nbsp;" : char; // Use &nbsp; for spaces
                                    container.appendChild(span);
                                });

                                const letters = document.querySelectorAll(".letter");
                                const totalLetters = letters.length;
                                const delayIncrement = 100; // Delay in milliseconds

                                function easeInOutQuart(t) {
                                    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
                                }

                                function animateLetters(forward = true) {
                                    letters.forEach((letter, index) => {
                                        // const delay = Math.max(index, totalLetters - index) * delayIncrement;

                                        const normalizedIndex = Math.max(index, totalLetters - 1 - index) / (totalLetters - 1);
                                        const easedDelay = easeInOutQuart(normalizedIndex);
                                        const delay = easedDelay * (totalLetters - 1) * delayIncrement;

                                        setTimeout(() => {
                                            letter.style.setProperty("--wght", forward ? 700 : 100);
                                            letter.style.setProperty("--wdth", forward ? 400 : 150);
                                            letter.style.setProperty("--opacity", forward ? 1 : 0.25);
                                            letter.style.setProperty("--letter-spacing", forward ? '0.05em' : '0em');
                                            // letter.style.setProperty("--font-size", forward ? '12vw' : '10vw');
                                        }, delay);
                                    });

                                    setTimeout(() => animateLetters(!forward), 4000);
                                }

                                animateLetters();
                            };

                            animate_4();
                            animate_1();
                        </script>

                        <div class="poster _drop-shadow" style="background-image: url(https://images.unsplash.com/photo-1538330627166-33d1908c210d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);">
                            <div class="contents _drop-shadow" style="padding: 4rem 2rem; justify-content: flex-end !important;">
                                <h2 style="padding-top:20px; " class="card-title code_descr text-gray-700 dark:text-gray-200">
                                    <span style=" font-size: 10px; max-width:5rem; ">Crafted for your ideas<br>
                                        <span style="font-size: 3rem; font-weight:900; ">Supporting The Hustle</span><br>
                                    </span>

                                    <div style="width: 100%; max-width: 55vw;">
                                        <span>
                                            Empower your entrepreneurial dreams with our Vendor console, the ultimate toolkit for young, small-scale business owners. We provide a streamlined platform to manage your finances, track inventory, connect with customers, and gain valuable insights to grow your venture. From invoicing to marketing and sales support, Vendor console simplifies the complexities of running a business, allowing you to focus on what you do best: building your brand and achieving your goals. Start your journey to success today with Vendor Console and unlock the potential of your small business.
                                        </span>
                                    </div>
                                </h2>
                            </div>
                        </div>

                        <div class="poster" style="background-image: url(https://images.unsplash.com/photo-1524282745852-a463fa495a7f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);">
                            <div class="contents">
                                <h2 style="padding-top:20px; text-align:center;">

                                    <span style=" font-size: 10px; filter: drop-shadow(2px 4px 6px black);">Vendor Trading Console<br>
                                        <span style="font-size: 3rem;">Crafted For Your</span> <br>
                                    </span>
                                    <div class="container-flyout">
                                        <p aria-label="CodePen" style="font-size: 12vmax;">
                                            <span data-text="B">B</span>
                                            <span data-text="U">U</span>
                                            <span data-text="S">S</span>
                                            <span data-text="I">I</span>
                                            <span data-text="N">N</span>
                                            <span data-text="E">E</span>
                                            <span data-text="S">S</span>
                                            <span data-text="S">S</span>
                                        </p>
                                    </div>
                                </h2>
                            </div>
                        </div>

                        <div class="poster _drop-shadow" style="background-image: url(https://images.unsplash.com/photo-1615204319045-40470afb8f01?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);">
                            <div class="contents _drop-shadow" style="padding: 4rem 2rem; justify-content: flex-end !important;">
                                <h2 style="padding-top:20px; " class="card-title code_descr text-gray-700 dark:text-gray-200">
                                    <span style=" font-size: 10px; max-width:5rem; ">Exceptional Customer Support<br>
                                        <span style="font-size: 3rem; font-weight:900; "> Supporting Your Hustle</span><br>
                                    </span>

                                    <div style="width: 100%; max-width: 55vw;">
                                        <span class="typewriter">
                                            At Varsity Market, we are committed to providing exceptional customer support to ensure your satisfaction with our products and services. Our support team is here to assist you every step of the way and resolve any issues or answer any questions you may have.
                                        </span>
                                    </div>
                                </h2>
                            </div>
                        </div>

                        <div id="intro-hero-v4" class="animation_containeer">
                            <div class="animated-text" id="animatedText2"></div>
                        </div>

                        <script>
                            function animate_2() {
                                const text = "Join The Club";
                                const container = document.getElementById("animatedText2");

                                // Create spans for each letter
                                text.split("").forEach(char => {
                                    const span = document.createElement("span");
                                    span.className = "letter";
                                    span.innerHTML = char === " " ? "&nbsp;" : char; // Use &nbsp; for spaces
                                    container.appendChild(span);
                                });

                                const letters = document.querySelectorAll(".letter");
                                const totalLetters = letters.length;
                                const delayIncrement = 100; // Delay in milliseconds

                                function easeInOutQuart(t) {
                                    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
                                }

                                function animateLetters(forward = true) {
                                    letters.forEach((letter, index) => {
                                        // const delay = Math.max(index, totalLetters - index) * delayIncrement;

                                        const normalizedIndex = Math.max(index, totalLetters - 1 - index) / (totalLetters - 1);
                                        const easedDelay = easeInOutQuart(normalizedIndex);
                                        const delay = easedDelay * (totalLetters - 1) * delayIncrement;

                                        setTimeout(() => {
                                            letter.style.setProperty("--wght", forward ? 700 : 100);
                                            letter.style.setProperty("--wdth", forward ? 400 : 150);
                                            letter.style.setProperty("--opacity", forward ? 1 : 0.25);
                                            letter.style.setProperty("--letter-spacing", forward ? '0.05em' : '0em');
                                            // letter.style.setProperty("--font-size", forward ? '12vw' : '10vw');
                                        }, delay);
                                    });

                                    setTimeout(() => animateLetters(!forward), 4000);
                                }

                                animateLetters();
                            };

                            animate_2();
                        </script>


                        <div class="poster" style="background-image: url(https://images.unsplash.com/photo-1496282061992-d6a3994128a2?q=80&w=925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);">
                            <div class="contents">
                                <h2 style="padding-top:20px; text-align:center;">

                                    <span style=" font-size: 10px; filter: drop-shadow(2px 4px 6px black);">Beta Vendor Testers<br>
                                        <span style="font-size: 3rem;">Join Us Today</span> <br>
                                    </span>
                                    <div class="container-flyout">
                                        <p aria-label="CodePen" style="font-size: 12vmax;">
                                            <span data-text="I">I</span>
                                            <span data-text="N">N</span>
                                            <span data-text="V">V</span>
                                            <span data-text="I">I</span>
                                            <span data-text="T">T</span>
                                            <span data-text="E">E</span>
                                            <span data-text="S">S</span>
                                        </p>
                                    </div>
                                </h2>
                            </div>
                        </div>

                        <div class="capture_container" style="height:1px; display:none; ">
                            <canvas id="canvas" style="overflow: hidden; width:95vw !important; border-radius:1rem; "></canvas>
                            <div id="buffer" style="display:none;">
                            </div>

                            <script>
                                var camera = {
                                    focus: 400,
                                    self: {
                                        x: 0,
                                        y: 0,
                                        z: 0
                                    },
                                    rotate: {
                                        x: 0,
                                        y: 0,
                                        z: 0
                                    },
                                    up: {
                                        x: 0,
                                        y: 1,
                                        z: 0
                                    },
                                    zoom: 1,
                                    display: {
                                        x: window.innerWidth / 2,
                                        y: window.innerHeight / 2,
                                        z: 0
                                    }
                                };
                                var affine = {
                                    world: {
                                        size: function(p, size) {
                                            return {
                                                x: p.x * size.x,
                                                y: p.y * size.y,
                                                z: p.z * size.z
                                            }
                                        },
                                        rotate: {
                                            x: function(p, rotate) {
                                                return {
                                                    x: p.x,
                                                    y: p.y * Math.cos(dtr(rotate.x)) - p.z * Math.sin(dtr(rotate.x)),
                                                    z: p.y * Math.sin(dtr(rotate.x)) + p.z * Math.cos(dtr(rotate.x))
                                                }
                                            },
                                            y: function(p, rotate) {
                                                return {
                                                    x: p.x * Math.cos(dtr(rotate.y)) + p.z * Math.sin(dtr(rotate.y)),
                                                    y: p.y,
                                                    z: -p.x * Math.sin(dtr(rotate.y)) + p.z * Math.cos(dtr(rotate.y))
                                                }
                                            },
                                            z: function(p, rotate) {
                                                return {
                                                    x: p.x * Math.cos(dtr(rotate.z)) - p.y * Math.sin(dtr(rotate.z)),
                                                    y: p.x * Math.sin(dtr(rotate.z)) + p.y * Math.cos(dtr(rotate.z)),
                                                    z: p.z
                                                }
                                            }
                                        },
                                        position: function(p, position) {
                                            return {
                                                x: p.x + position.x,
                                                y: p.y + position.y,
                                                z: p.z + position.z
                                            }
                                        },
                                    },
                                    view: {
                                        point: function(p) {
                                            return {
                                                x: p.x - camera.self.x,
                                                y: p.y - camera.self.y,
                                                z: p.z - camera.self.z
                                            }
                                        },
                                        x: function(p) {
                                            return {
                                                x: p.x,
                                                y: p.y * Math.cos(dtr(camera.rotate.x)) - p.z * Math.sin(dtr(camera.rotate.x)),
                                                z: p.y * Math.sin(dtr(camera.rotate.x)) + p.z * Math.cos(dtr(camera.rotate.x))
                                            }
                                        },
                                        y: function(p) {
                                            return {
                                                x: p.x * Math.cos(dtr(camera.rotate.y)) + p.z * Math.sin(dtr(camera.rotate.y)),
                                                y: p.y,
                                                z: p.x * -Math.sin(dtr(camera.rotate.y)) + p.z * Math.cos(dtr(camera.rotate.y))
                                            }
                                        },
                                        viewReset: function(p) {
                                            return {
                                                x: p.x - camera.self.x,
                                                y: p.y - camera.self.y,
                                                z: p.z - camera.self.z
                                            }
                                        },
                                        righthandedReversal: function(p) {
                                            return {
                                                x: p.x,
                                                y: -p.y,
                                                z: p.z,
                                            }
                                        }
                                    },
                                    perspective: function(p) {
                                        return {
                                            x: p.x * ((camera.focus - camera.self.z) / ((camera.focus - camera.self.z) - p.z)) * camera.zoom,
                                            y: p.y * ((camera.focus - camera.self.z) / ((camera.focus - camera.self.z) - p.z)) * camera.zoom,
                                            z: p.z * ((camera.focus - camera.self.z) / ((camera.focus - camera.self.z) - p.z)) * camera.zoom,
                                            p: ((camera.focus - camera.self.z) / ((camera.focus - camera.self.z) - p.z)) * camera.zoom,
                                        }
                                    },
                                    display: function(p, display) {
                                        return {
                                            x: p.x + display.x,
                                            y: p.y + display.y,
                                            z: p.z + display.z,
                                            p: p.p,
                                        }
                                    },
                                    process: function(model, size, rotate, position, display) {
                                        var ret = affine.world.size(model, size);
                                        ret = affine.world.rotate.x(ret, rotate);
                                        ret = affine.world.rotate.y(ret, rotate);
                                        ret = affine.world.rotate.z(ret, rotate);
                                        ret = affine.world.position(ret, position);
                                        ret = affine.view.point(ret);
                                        ret = affine.view.x(ret);
                                        ret = affine.view.y(ret);
                                        ret = affine.view.viewReset(ret);
                                        ret = affine.view.righthandedReversal(ret);
                                        ret = affine.perspective(ret);
                                        ret = affine.display(ret, display);
                                        return ret;
                                    }
                                };



                                var vertex3d = function(param) {
                                    this.affineIn = new Object;
                                    this.affineOut = new Object;
                                    if (param.vertex !== undefined) {
                                        this.affineIn.vertex = param.vertex;
                                    } else {
                                        this.affineIn.vertex = {
                                            x: 0,
                                            y: 0,
                                            z: 0
                                        };
                                    };
                                    if (param.size !== undefined) {
                                        this.affineIn.size = param.size;
                                    } else {
                                        this.affineIn.size = {
                                            x: 1,
                                            y: 1,
                                            z: 1
                                        };
                                    };
                                    if (param.rotate !== undefined) {
                                        this.affineIn.rotate = param.rotate;
                                    } else {
                                        this.affineIn.rotate = {
                                            x: 0,
                                            y: 0,
                                            z: 0
                                        };
                                    };
                                    if (param.position !== undefined) {
                                        this.affineIn.position = param.position;
                                    } else {
                                        this.affineIn.position = {
                                            x: 0,
                                            y: 0,
                                            z: 0
                                        };
                                    };
                                };
                                vertex3d.prototype = {
                                    vertexUpdate: function() {
                                        this.affineOut = affine.process(
                                            this.affineIn.vertex,
                                            this.affineIn.size,
                                            this.affineIn.rotate,
                                            this.affineIn.position,
                                            camera.display
                                        );
                                    }
                                };

                                var dtr = function(v) {
                                    return v * Math.PI / 180;
                                };
                                //cordinate system transformation.
                                //polar to rectangle.
                                var polarToRectangle = function(dX, dY, radius) {
                                    var x = Math.sin(dtr(dX)) * Math.cos(dtr(dY)) * radius;
                                    var y = Math.sin(dtr(dX)) * Math.sin(dtr(dY)) * radius;
                                    var z = Math.cos(dtr(dX)) * radius;
                                    return {
                                        x: y,
                                        y: z,
                                        z: x
                                    };
                                };
                                //rectangle to polar.
                                var rectangleToPolar = function(x, y, z) {
                                    if (x == 0) var xD = 0.001;
                                    else var xD = x;
                                    if (y == 0) var yD = 0.001;
                                    else var yD = y;
                                    if (z == 0) var zD = 0.001;
                                    else var zD = z;
                                    var radius = Math.sqrt(xD * xD + yD * yD + zD * zD);
                                    var theta = Math.atan(zD / Math.sqrt(xD * xD + yD * yD));
                                    var phi = Math.atan(yD / xD);
                                    return {
                                        x: theta * (180 / Math.PI),
                                        y: phi * (180 / Math.PI),
                                        r: radius
                                    };
                                };
                                var closeValue = function(minTime, maxTime) {
                                    this.flag = 0;
                                    this.progress = 0;
                                    this.startTime = 0;
                                    this.durationTime = 0;
                                    this.fromValue = 0;
                                    this.toValue = 0;
                                    this.minValue = 0;
                                    this.maxValue = 1;
                                    this.minDuration = minTime;
                                    this.maxDuration = maxTime;
                                };
                                closeValue.prototype = {
                                    init: function() {
                                        this.durationTime = this.minDuration + (this.maxDuration - this.minDuration) * Math.random();
                                        this.startTime = Date.now();
                                        this.progress = Math.min(1, ((Date.now() - this.startTime) / this.durationTime))
                                        this.fromValue = this.toValue;
                                        this.toValue = this.minValue + this.maxValue * Math.random();
                                        this.flag = 1;
                                        return this.fromValue + (this.toValue - this.fromValue) * this.progress;
                                    },
                                    update: function() {
                                        this.progress = Math.min(1, ((Date.now() - this.startTime) / this.durationTime));
                                        if (this.progress == 1) this.flag = 0;
                                        return this.fromValue + (this.toValue - this.fromValue) * this.progress;
                                    },
                                    execution: function() {
                                        if (this.flag == 0) {
                                            return this.init()
                                        } else if (this.flag == 1) {
                                            return this.update()
                                        };
                                    }
                                };

                                var strokeColor = "rgba(255,255,255,0.1)";
                                var backgroundColor = "rgba(0,0,0,1)";
                                var vibrateFlag = false;

                                var canvas = document.getElementById("canvas");
                                var canvasWidth = window.innerWidth;
                                var canvasHeight = window.innerHeight;
                                canvas.width = canvasWidth;
                                canvas.height = canvasHeight;
                                var ctx = canvas.getContext("2d");
                                ctx.strokeStyle = strokeColor;

                                window.onresize = function() {
                                    canvas.width = window.innerWidth;
                                    canvas.height = window.innerHeight;
                                    camera.display.x = window.innerWidth / 2;
                                    camera.display.y = window.innerHeight / 2;
                                };


                                /* class */
                                var sphere = function(arg) {
                                    this.flag = true;
                                    this.type = "_";
                                    this.particleNum = arg.particleNum;
                                    this.center = {
                                        x: 0,
                                        y: 0,
                                        z: 0
                                    };
                                    this.targetCenter = arg.center;
                                    this.radius = 0;
                                    this.targetRadius = arg.radius;

                                    this.degree = new Array();
                                    this.freeDegreeSpeed = new Array();
                                    for (var j = 0; j < this.particleNum; j++) {
                                        this.degree[j] = {
                                            theta: 0,
                                            phi: 0
                                        };
                                        this.freeDegreeSpeed[j] = {
                                            theta: 1 * Math.random() - 0.5,
                                            phi: 1 * Math.random() - 0.5
                                        };
                                    };
                                    this.charsMap = new Object();
                                    for (var i in chars) {
                                        var buffer = document.getElementById(i).getContext("2d").getImageData(0, 0, 100, 100).data;
                                        this.charsMap[i] = new Array();
                                        var self = this;
                                        for (var j = 0; j < this.particleNum; j++) {
                                            var redo = function() {
                                                var theta = Math.floor(Math.random() * 100);
                                                var phi = Math.floor(Math.random() * 100);
                                                if (buffer[(theta * 400 + (phi * 4))] == 0) {
                                                    self.charsMap[i].push({
                                                        theta: theta - 50 + 360 * Math.round(Math.random() * 2) - 1,
                                                        phi: phi - 50 + 360 * Math.round(Math.random() * 2) - 1
                                                    });
                                                } else {
                                                    redo();
                                                };
                                            };
                                            redo();
                                        };
                                    };
                                    this.charsMap["@"] = new Array();
                                    for (var i = 0; i < this.particleNum; i++) {
                                        this.charsMap["@"][i] = {
                                            theta: 360 * Math.random(),
                                            phi: 360 * Math.random()
                                        };
                                    };
                                    this.charsMap["_"] = new Array();
                                    for (var i = 0; i < this.particleNum; i++) {
                                        this.charsMap["_"][i] = {
                                            theta: 0,
                                            phi: 0
                                        };
                                    };

                                    this.veticies = new Array();
                                    for (var i = 0; i < this.particleNum; i++) {
                                        this.veticies[i] = new vertex3d({});
                                    };
                                };
                                sphere.prototype = {
                                    update: function() {
                                        for (var i = 0; i < this.charsMap[this.type].length; i++) {
                                            if (this.degree[i].theta >= 30 && this.degree[i].phi >= 30) {
                                                this.flag = true;
                                                break;
                                            } else {
                                                this.flag = false;
                                            };
                                        };
                                        this.radius = this.radius + (this.targetRadius - this.radius) / 8;
                                        this.center.x = this.center.x + (this.targetCenter.x - this.center.x) / 8;
                                        this.center.y = this.center.y + (this.targetCenter.y - this.center.y) / 8;
                                        this.center.z = this.center.z + (this.targetCenter.z - this.center.z) / 8;
                                        for (var i = 0; i < this.charsMap[this.type].length; i++) {
                                            if (this.type === "@") {
                                                this.charsMap[this.type][i].theta += this.freeDegreeSpeed[i].theta;
                                                this.charsMap[this.type][i].phi += this.freeDegreeSpeed[i].phi;
                                            };
                                            this.degree[i].theta = this.degree[i].theta + (this.charsMap[this.type][i].theta - this.degree[i].theta) / (4 + 20 * Math.random());
                                            this.degree[i].phi = this.degree[i].phi + (this.charsMap[this.type][i].phi - this.degree[i].phi) / (4 + 20 * Math.random());
                                            if (vibrateFlag == true) {
                                                var getPosition = polarToRectangle(this.degree[i].theta + 90, this.degree[i].phi, this.radius + Math.random() * 10);
                                            } else {
                                                var getPosition = polarToRectangle(this.degree[i].theta + 90, this.degree[i].phi, this.radius);
                                            };
                                            this.veticies[i].affineIn.vertex = {
                                                x: getPosition.x,
                                                y: getPosition.y,
                                                z: getPosition.z
                                            };
                                            this.center.x
                                            this.veticies[i].affineIn.position = {
                                                x: this.center.x,
                                                y: this.center.y,
                                                z: this.center.z
                                            };
                                            this.veticies[i].vertexUpdate();
                                        };
                                    },
                                    draw: function() {
                                        if (this.flag == true) {
                                            ctx.beginPath();
                                            for (var i = 0; i < this.veticies.length; i++) {
                                                for (var j = i; j < this.veticies.length; j++) {

                                                    var distance =
                                                        (this.veticies[i].affineOut.x - this.veticies[j].affineOut.x) * (this.veticies[i].affineOut.x - this.veticies[j].affineOut.x) +
                                                        (this.veticies[i].affineOut.y - this.veticies[j].affineOut.y) * (this.veticies[i].affineOut.y - this.veticies[j].affineOut.y);

                                                    if (distance <= this.radius * 3) {
                                                        ctx.moveTo(
                                                            this.veticies[i].affineOut.x,
                                                            this.veticies[i].affineOut.y
                                                        );
                                                        ctx.lineTo(
                                                            this.veticies[j].affineOut.x,
                                                            this.veticies[j].affineOut.y
                                                        );
                                                    };
                                                };
                                            };
                                            ctx.closePath();
                                            ctx.stroke();
                                        };
                                    }
                                };
                                /* class */
                                var sphereNum = 20;
                                var s = new Array();
                                /*-----------------------------------------------------*/
                                var setup = function() {
                                    for (var i = 0; i < sphereNum; i++) {
                                        s[i] = new sphere({
                                            radius: 100,
                                            particleNum: 250,
                                            center: {
                                                x: 70 * i - (sphereNum - 1) * 70 / 2,
                                                y: 0,
                                                z: 0
                                            }
                                        });
                                    };
                                };
                                /*-----------------------------------------------------*/
                                var update = function() {
                                    for (var i = 0; i < sphereNum; i++) {
                                        s[i].update();
                                    };
                                };
                                /*-----------------------------------------------------*/
                                var draw = function() {
                                    for (var i = 0; i < sphereNum; i++) {
                                        s[i].draw();
                                    };
                                };


                                var chars = {
                                    A: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAoVJREFUeNrsnO2RgkAQRGXrEsAQMAQJgVwMwRgMwVg0BA1BQpAQOErrPsrjdgfKnR3gzW/h5NE99M7iZW3brihZORAAC1jAAhawgAUCYAELWMACFrBAACxgAQtYwAIWCIAFLGABa0DtdrtMXGVZJvyqWfJ9w81mU9e1/PP3+z3P8yUqq2maQaS6ul6vC7Xh+XweeshyYQ2VFcqKfshMGnz3gBtx1O12K4piWcoabahU4pokrBGdbrmwUvV4o7C2221VVdjwJ456YOWPsta2nE0PdrLqxGXNiR82YQVXf8uC5fdRMEYlgZUslK7X665teUYLz8+YGj+k6VldUPKQyr/KWjR1Bj343do96SFJNE2mLEnD8nculAWsgc8yISz9Z6KzJqvfjKylLWdNVvIGD6xX6/nFBayiV2X/ncqT1yYPq36Ufwltdt3jTMnK+CLRHKwX3wFrACxTK0TtqUNw7+vv9wkeorYzpqqsoAp6g1UQhJq4nCkP9pouCEtt/KAKK3hVvanKH7U0e7wtG/aKyFCPb7XqOSmOVKfTSeESnB1ZaWZd6zaM2obnBmsGytILpeNexZKXws6YkrIU7rzCM3E+sBSiKcqy17PKslTgFftaNGA1TeN/a+EZ0/f7vecMh8Mh+Icul0twbWQ9wXfxOvg1qqryn0RyLcfjcfIJXmLA4GhBIpnYTteAJWm9wHqnsiSz0Ng7Y9Fh+V/Fks9hhJ07qricBQ+uBDv1win7tGFJgrVkTbcIWBJlCS0WVF/sHB8dluRWC2FJxDXip7FWYAnvs3C0InRiPHFl/CNqc1MHYAGLAhawgAUsYAGLAhawgAUsYAGLAhawgAUsYAGLAtZb6lOAAQB0jf7CahauSAAAAABJRU5ErkJggg==",
                                    B: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAoJJREFUeNrs3O1xolAUxvFNhgZswRa0BCmBFrAEKAFK0BKkBC0BS9AStAT2ybLjMPvFo0tOuJf/+ZAxMzAJv7n38tyX5KPrul+UrT4hAAsssMACCywIwAILLLDAAgsCsMACCyywwIIALLDACqgSnx+TpunpdHrjxsVisVqt+q/L5XKz2ejzj2l1LqWHHOsXzrJst9t1P1HhYfWlVnY8Hp2xQh2zrterunZZlgzw1qrrervdgmWt/Z8Cy1rqjPf7HSxTScqncUUSSn2wkuk8cJ88+8/n8/mlnqWXo2553B4/lh5V0WnYuZqmUZORguV2B6zpdkM1tDzP27Y1EjiM8QGMWUVRsOrwQve0XPbeRD02LE0DaVkj1+hz9SCxfNJ5JFjG6PDduQGsuLDUB+u6fnpZlmUOy83JZI3UoJQGlOAtY5bi67zmhtJJ07RnevU96PAq/KpA1+CHs6Lb7cYavElKc2+3zbGAsdRaL5eLw0sweCwZHQ4H5w3XULH0Eliv1w6T50i6Yb91aElhYP2tsizdtg5jWHVQcPVpX5Es0ah9qVfOCEtR4BH/lAkUoIqisK/8eTSu6ST4IdajlM6N8z7FiLkneBFUVWVpX29MKiMcs+SVZZlxrYIB3rq+TsuaUIEFFlhgWdcYwBoZ67s3+sPYN2yaBqznIXO/36dparx+Rif/+q2w4bcvJXJjyo8ESzT/s0zMKZrx549gfR2ldNjpiQFL47rPudPPCKSGB8LBeiLF9v3zEb2qqrZtPTelk+CYFNPzPNe7z/8UcxJEI3r8TbnClOdJkH/qg39EPbucBRZYYIFFgQUWWGCBBRYFFlhggQUWWBRYYIEFFlgzqd8CDAAuDkL9BnlXDAAAAABJRU5ErkJggg==",
                                    C: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAn9JREFUeNrsnO2RgkAMhs8bG6AFLEFLoAVaoAVb0BKwBCgBSvBK8ErQErgczDg3fjA5YcOyPu/PG5fbPCZLCImLpmk+kE6fIAAWsIAFLGABCwTAAhawgAUsYIEAWMACFrCABSwQAMuJll7t5rvVzR/X63UURcD6VVmWdV1/ter5WJIkQi1pNdlem4l0Pp93u90LLhPHsSyU5fZ7ngZWnucDI0uWF0URPqwsy8YKC7lUyLBGJGXPyxSWBI6LY1eOsNBgyZHsLgM4nU4GJtglpYfD4XK5OLr4fr83MGFh1kWzWq3uE84R5dRzTZNSSTiVpMTgNE0lmeoSevFHfXI7+t1jGliSo2s+Jjl6VVV/HUTs32w2ykelQDJ45TPKw3NabnaatfIvArkbdmH1mrVC0JMv3uhuqImRZ94noCU836WeNTxj8KREYwGrv/aiPPiplOJZ1OCRdzX4njCcspo8L1hZK8KQMwtYCFjAAhawgAUsBCxgAQtYwBpbdV0vFFK+ncSz8CxgAcut3PUqBQjLoumDMJwfLE/eJ88D1vD3ycMbAOYUhhpePae4vhcuBFgaM8qyfMhL2bkbtXJrhk0zm7J7734C4Hg8KhGkaeraiqU/ntU5kUScmN0B+lcDrsX7fbOhAU2n5JAz0WBOzC7PctqssN1uLXq4AhhHsXErU88Sk+T7d3HloiiMWgONR+jk8B53/3meBztvKPEyYupoSWqysd/h8SjEJQV7ixlpUVVVr2VGssrYoa6yG6F7Vqi6/lRBzzNNN2Qhug6MTaKJYd08SN9XF+JWnuzQI1jUs4AFLAQsYAELWMACFgIWsIAFLGABCwELWMACFrDeVT8CDACBApVLFWwP8gAAAABJRU5ErkJggg==",
                                    D: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAdVJREFUeNrs3GGNg0AQhuG2qQEsnIWzABKwABKwABJAAkgAC1g4CSCBm0COH702Gch1bmHf70dDmpLSJ7PLkOz2Ok3ThehygwAssMACCyywIAALLLDAAgssCMACCyywwAILArDAAutAudt8TRRFXddtPetjznrwOScIgpNj7cvXnIc34zgOwzBJkn+4oMkk8vP+9rKl0MqynGxzVKy1yoZhMMM69gTfNI3MhuM4cjdUpe/7NE3B2lBfO261/vZZVVWBtaG4DGYut7DCn+w412AkutWUtm27HkulSL3I+JIpXNnB+tWU/j5R2ih5xFFWpe99ljwJ5nmu+aR3c9arktE8PCtH6/nvhsqRCJZDAQsssMACCywCFlhggQUWWAQssMACCyywCFhg+Yz1prVwVJb3WDbLr6gsKgusV2mahsrSpigKzccM1kPcHB99URQpl8csG1feGrdW/gnNeixGm5ZcGVTW3bVScrlxPUnrsGwYA0uVLMu4G2oHYBzHYKkGYF3X9FkqqbZtzfa2HhhL5ilLqYvj236fRnRkhhIpgy70eFiis+wjl1cBspnLn+bKH1F712eBBRZYYBGwwAILLLDAImCBBRZYYIFFwAILLLDA8iTfAgwAhov2vlCJPZsAAAAASUVORK5CYII=",
                                    E: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQBJREFUeNrs3MENwiAUgGExLsAsrNA3U1foTrBTR6gmJp56kINVy/efPTRf+ghI0rRt20XvdUUACxYsWLBgIYAFCxYsWLAQwIIFCxYsWAhgwYIFa7+ISB+otebNMoawYAkWLFiwYA3S7QefaZqmrt/nnMfFqrUaQ2sWLMGCBQsWLDv479b1n/pj+15KGRcrIrrORoft+I0hLFiwYMESLFiwHHd2Wpal67gzNNY8z8bQmgVLsGDBggULlmCd8bjTdbvzOk4ecCH29/eGz9Z1NYbWLFiwBAsWLFiwRij5ELU3CxYsWLBgIYAFCxYsWLAQwIIFCxYsWAhgwYIF65zdBRgAB2kfVa0J2mAAAAAASUVORK5CYII=",
                                    F: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAPJJREFUeNrs3MENgyAAQNHSuICzsAI7sQLM4gquwEyUATjooba1758xwRchGBND7/2hYz0RwIIFCxYsWAhgwYIFCxYsBLBgwYIFCxYCWLBgwZpXaw3vad93T5ZlCAuWYMGCBQvWP7R84ZxijOu6nrrk7Pj7YJVSUkqWoT0LlmDBggULlhP8B9u2rbV2fHzO+aKZ9QsbR/OfvgXL0J4FCxYsWIIFC5bXnUnjoB9jhHWoIeWDhT0LlmDBggULFizBggULFixYggULFixYsDQt+BG1JwsWLFiwYCGABQsWLFiwEMCCBQsWLFgIYMGCBeuevQQYAD9w7XiTuE79AAAAAElFTkSuQmCC",
                                    G: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAm9JREFUeNrs3NGRgjAQgGG9uQZsgRawBCzBFmjBFmxBWrAEKEFK0BK0BG5PZhxGJ7qibEL498nzToZ8kmQJm5s3TTMjdPEDAVhggQUWWGBBABZYYIEFFlgQgAUWWGCBBRYEYA0Sv0GdTVVVd+8sFos0TcH6j9PptN/v67oWpsvl4vqzJEnSa6zXa3nt7XQbT1GWZZZlPU5YPiWf9XLOHrDO57NcIB9+x0Imx4kc63A4fKsfyXAmR4sW63g8Sgu/OIYYe5li9RukXnqZ9Uc7rN1uN9Acled5bFiDTvnSwQ2aYJTBSzIlKdVwxy+KIp6k9DE1d0WbebavJVkVZeWXsd1uI0lKlZOgjGu9RzqDnmiBJbP7J+O0MoM1SOstxqwnN313SbmrY2o+Ln02hiUaZTNcKOGsOgS0nuVzOSGaxT+urPduaMBiDZ41eO8hOVQI88M4sIZY26EbggUWWMyGPkLuvd+9MTZ4dh0olkitVqt3Z0xNhkE3ZMwCCyywCLDAAosMXhlJknSfMBdFMejT/9FjbTab249VVYWARTcECyywwALLY+hr4UaPpXyi5xIJIWmww1IWK7gqIpWVkhZhVBSti8cyybIsldZZlg3dirnN//xbLpf6krYeBbgzkzV4o9sdab8Sq77GpGfDz7eBTQhLJsQ8z8HSRncVYaRXqB3W3RJVj5Ah3PPlabw5s3dr261yEh5TBw/bfnv0x+4mzGlhtammvqpRFLr7clzVH9Fi3cikV7rU5GqS3/raaO8zg38ejwVGcvmEU/5+iyCwyLPAAosACyywwAILLAIssMACCyywCLDAAgsssKYdfwIMALX7wq9Z+viIAAAAAElFTkSuQmCC",
                                    H: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAOZJREFUeNrs3MEJwyAYgNEYOlp3cgZ3chZXMeKltFTwUiPlfdefhOShhxCSUGs9NNeJABYsWLBgwUIACxYsWLBgIYAFCxYsWLAQwIIFC9ZnYaKU0ujwNpo5g5VlG8KCJViwYMGCBUuwYMGCBQuWYMGCtVGPfS6llJJzHo12uMKw5tudBW8TWr++F9sQFixYsGAJFixYHndePXtfR7kH6w0rxjia7oBlG8KCBQsWLMGCBQsWLFiCBQsWLFiwBAsWrNsLfkRtZcGCBQsWLASwYMGCBQsWAliwYMGCBQsBLFiwYP1nlwADAIgVIg41FpPaAAAAAElFTkSuQmCC",
                                    I: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAKtJREFUeNrs3LERACAIBEGx/5LoDS0BAhNnLyba+ZioqqVeGwEsWLBgwYKFABYsWLBgwUIACxYsWLBgIYAFCxasWZkZje4ZLMuCBUuwYMGCBQuWYMGCBQsWLMGCBQsWLFiCBQsWLFiwBAsWLFiwYAkWLFiwYMESLFiwYMGCJViwYMGCBUuwHhQeUVsWLFiwYMFCAAsWLFiwYCGABQsWLFiwEMCCBQvWnx0BBgCIewtNidNjyQAAAABJRU5ErkJggg==",
                                    J: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAXdJREFUeNrs3NFtglAUgGHpBq6gI7gCjuAKzgIrOAsj4Ag6go5we6JpY5pqtJh7xX7/kz6I+nm4QGKoUkoT3dcHAliwYMGCBQsBLFiwYMGChQAWLFiwYMFCAAsWLFhD67quuqO2bWGZLFiwBAsWLFiwYAkWLFiwYMESLFiwYMGCJViwYMGCBUuwYMGCBQuWYI0Iq23bG/8OXS6XsEwWLMGC9dV0OoV1b7PZ7D2xMk/BuLFuT8F2uz0ej5dPX/AHqLLd82+/38/n89ua6/U6HoTaZrO5tLtW7hsWpow9d4lZLBYpb1kX+LquX3ZrLzdZfd8/8ZPvdrvMkzXJ/H6r1eopUrG6pezlxopxGH4Ii7XvcDi8P9Z5ZxziFa+NLaQSTYq8a3zbvx0ZC0oVw4piP2qa5qERi3WqyN73Xb6T0l87n392p66NUn0qjgzFL5gKY/04xY8Kn0mNBcuFNCxYggULFixYsAQLFixYsGAJFixYsGD91z4FGAAFxpwXRUjPAQAAAABJRU5ErkJggg==",
                                    K: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAkVJREFUeNrs3NFtwkAQhGEcpQG3ACW4hVACLdCCa6AFWqAFWnAJUAKU4GzgBREJDw+s5+x/n08o+jS37J1Nqr7vF5RWXxCABRZYYIEFFgRggQUWWGCBBQFYYIEFFlhgQQAWWGCB9Vzr9boaqljz4hNWq1Ul1PV6nXuyDofD+XweXLbdbuu6njvWfr9XlrVtO/eeFZk6Ho9KrJbL5dyxdrudQ6wKwIqGrezBhFgVgGXSraaDlRMrd6yQUiaGzWbDBP83Xg2u+bnV3LG6rlMmhpxu5Y6ldKvMWPliRatSsDJj5Yvl1q2ssZSpPTlWplixAQdvWpqmSY6VL5YyiOb/YXZYMS7E0PB6TczrYKmtPb9bOWIpE8NYsbLDMpytHuvbKla23coRyzlWi7KeG9Z1nXYbUzzWR58JTg1rId8ygwXW+18Cyo0gWOOHqzws8b0HsN44P4I18k4sEiu24SjhKvXNP7Dc27wjlngAHCFcfUrpDxfitHy5XJQXPWJNn1t2yWrbNryUSyvxQexkk3WPVaw/nU7K+vjY+SbrHqv7FlN845yY2eaNsALo8SJUbPOZO9EL6+k7UXmpfaZY//uXEi7xDd3pD6Xi10LawGWNFclSBq60Nu9+3BHbvPjDgoljiY9UYycmPPtxx4pt2DSN0uYTOlcBtw5iuBK+EwvAEttWd6u5Y4nn6oRwlXH5pw9c/OxXPfp8us0Xc63ssBMr/hH1BJMFFlhgUWCBBRZYYIFFgQUWWGCBBRYFFlhggQUWWFTUrwADAHFImBJfDWY7AAAAAElFTkSuQmCC",
                                    L: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAMdJREFUeNrs3LENgCAQQFExLsAsLMcINxQrMBPaGxNKgu/XV5CXg5I0xjg014kAFixYsGDBQgALFixYsGAhgAULFixYsBDAggUL1mettTTRMwbLZsESLFiwYMGCJViwYMGCBUuwYMGCBQuWYMGCBQsWLMGCBQsWLFiCBQsWLFiwBAsWrAW71jxWrTXnPDlcSomI/2L13l1DbxYswYIFCxYsWHqXfERts2DBggULFgJYsGDBggULASxYsGDBgoUAFixYsPbsFmAAfSARhDW4TnEAAAAASUVORK5CYII=",
                                    M: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAj9JREFUeNrs3P+NgkAQhmEx14At2IIt0Jw90QItXAuW4G3OxBDgPmc53Rl23/0bSXgy8+3wI3b3+/3Asq0jBGCBBRZYYIEFAVhggQUWWGBBABZYYIEFFlgQgAUWWO1iXa/XLn+lX1lOPgzD506+m8oax/GNh1XehmBlrO/fBdbbissI2gTWSwj3sgqElXa6f2rShhmaDWHdbjddO2BZiytCYMXCEpUFVkajCcfT6VQtVt/3G8pHOIoT7h7rcrmIjP/LSziKE+4eK3XN+XzOKi69D9aMpS9vNZuClFU4rFUXgZUCq+RGGQtrteMEh+jo+rGWNHqyr78NU8bbO1F3WeVYj0azZ7wOrCYmeJE1s9gKMo56Yr2lDQunuxuWLopnNaWWTAEfJLA8b6QtxSV68HknUPmcZZ/jxdDwrE1RevVgWe4Q49zoOGNZntWINnTB+grYhg8m/VSvicqadpYuLlFWqYVLPiB1w5rmsd4QLeneShu+zHhRO+XHUX+s3KeAqz8s+ab6GBPLvpO2grUtfVz2wRBYG67cK913ieWV7rvEaqsNp3PphvGyLazZc4Ksi3cMrEOED0Oyrn92cOHPAf2xsgJ7dnBzWFlt6BhYUSrLmPH6o5ImsOyx5ZvuUbCMzeXbg2CFx1puYWBZh1Jjciep5T5Q8j3YIc7Xyi+rZvWA5uYsI5bv0FBDZYEVdMgKhKU/B4wglVbHH1Hvr7LAAgssFlhggQUWWGCxwAILLLDAAosFFlhggQUWWCzL+hFgAK1CEDiUER9hAAAAAElFTkSuQmCC",
                                    N: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcpJREFUeNrs3OFxgjAYxvHSDVghjAAjsAIrsBwrZAVWYIRkBBqt57UejVFP+7z4f7+2x+nP5wnQYKt1XT+YsvmEACywwAILLLAgAAsssMACCywIwAILLLDAAgsCsMACC6zLqcpmmqZHjvBeyfLeKyeres0ma+HHXtd1COHuIzz7vWglK8aYaSILvKUmmsFq2xasy1mWZZ7nzeUMrI2RXbbAMo71VxPBshQuM1jOObBKmwiWsSaCtQus5ThgWQ2XGSxud65MOiGem8jZ0FgTwdoR1s8mgmUpXCpYmZPdN5bC2fCwI/KCufoyxnHM/DSEUHKQZ78LlWT1fW+giSLJSr+TKdowDArJEsJKIvkmUsPTeO/1myh06ZBPlsLmqxBWWrMyXilZ/371oHVRmm9ijBGs0iZSwxuaCNZpznfL+SaC9Ws9Ilk7aaLin2hkm6iIRbJua6LCc342sGTDJXQjDdad45wTbKLuhoVguMDaBZZgE6X3DdXCJXcjrYwl9K2wzVfSdV35Y97v9a0w8XCpJyvVs2kaklV6TlR4jM0GllQTwdJbs/Yx/F8HsMACCyywGLDAAgsssMBiwAILLLDAAosBCyywwLI0XwIMAAfXAsIjiXmrAAAAAElFTkSuQmCC",
                                    O: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAltJREFUeNrs3NFxgkAQgGHMpAEt4SxBS7AFW6AFW7AFLQFL0BK0BCwBSiCbMJNxCJ4b5fbI5d+HPDg4A5+3y4a5ZdI0TUbo4g0CsMACCyywwIIALLDAAgsssCAACyywwAILLAjAChLvYzuh0+nU+WSxWEynU7A+43q9Hg6Hy+UiTHVd3ztstVqJ2nq9lr/RzrWJF8fjUQh+e8LOud1uF+WE42CVZfkEU4dMrNPHOp/PQ9Ug4yWW2afesGXE0iv7o2vqNszy0RTrxTrlqV9VVSWFJfkS7p6+3W6TwgraH0l2G1zCxGbLkfScy+VSefB359n2q55O9TaKopAvptCUSpooF0inWuvvCXmeJ5KGytLeW3qU3YYsxkTScDababJJbmq962g+n0tKarIkhUc0GinP0wXlzUFZ3VJ4nuWpTUosuY38F6xALStPSsECCyywCLDAAgsssMAiwAILLLDAAosACyywwAILLAKsNLE0uxn8EXq2ICms0PMERliay/DsVPg5o5JyGjrnHh5T1/U9L82OD4OtEiNaWRL7/b73Q81eIs3v8WqMbVagMwSg3yZpMD1gtPMvU2/+axOqzSkp+b1rrTfKsgy+uMy2dud5HjTNDS7BrnUIuu866C8RYWUFHUdJcHZHykqIJrsoijRH6Aaf4NlsNikPZw7oZTBVEX/sVxLn9Xy0mQSLjyVRVZVc7XNksqCk/Nmfs11Tei/a9xS0ryrwd1JtSAsS6zUP8bEe/i/tvmIMpzcuLJ6UggUWARZYYIEFFlgEWGCBBRZYYBFggQUWWGD9y/gQYABO+P229yPVkwAAAABJRU5ErkJggg==",
                                    P: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAdpJREFUeNrs3OGtgjAUhmEkLsAKrCAjlBFgBBzBFXAEWIERYARYgRFgBO4JJl5yfx3NtZbyfj8MJlbkEdrTYjwtyxIQXUIIwAILLLDAAgsCsMACCyywwIIALLDAAgsssCAACyywdpSznd10XZem6RsNoyi6XC6yIY+ybYx5PP1OFitp2/a/PrCQFUUhb7hYz/6wnpGzrO97m1g77rPk0k6SpK5rOnhtrterNS8fRkPxGoYBLG3yPAdLm3EcLVyM/hSlFrDOTh1wvGZ7vkiUbaXbkhdvm3telJZl+afhNE1SgiqPpaqqQ9dZUq8LQZZlmhfP80yfFSixpEwFS4vFaPh7PYKlzTdXZvyrs8AC6618eqTzB0tfx4MVNE3jwiAQ7uK0ut/vLpQXTmPJ9KWu6yRJlPMYY8yBVh2E5tmRD8Pw0lzvedPsKFgvrcnYnxL5U2eBpY1ZA5YqZVlSZ6lSVZWdaXbogZR+3fm4WHEct21rTcq50kEZueiKNZb36zrWdoyT7cdPtD57v2svWDKo3W43Z785Fv/AAgsssMAiYIEFFlhggUXAAgsssMACi4AF1mdy4o+oObPAAgsssMCCACywwAILLLAgAAsssMACCywIwAILLLD8zI8AAwDN//7sunXNSAAAAABJRU5ErkJggg==",
                                    Q: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAApFJREFUeNrs29FtwkAMgGGougCMEEaAEVghK4QRWCErwAjJCDBCGCGMQEZIjZAQghCZ9s6XXH8/VBVqpeTr+c5J7WnbthNCF18QgAUWWGCBBRYEYIEFFlhggQUBWGCBBRZYYEEAlpf4HtoFHY/Hp0+Wy+VsNgPrGufzuSzL0+kkTE3TvPux9Xotammaytdg19qGi8PhIASfXnCSJLvdLsgFh8Gq6/oXTE9kYh0/VlVVrvYg4yU2sU89t9uIpddkpGvqMczy0RTrj/tUz/51uVyiwpJ88Xem53keFZbX+kiy2+AWpjYtR1JzrlYr5Q/fK89bvdpTqT5GURTyizEUpZImygXytFvrz4QsyyJJQ+XW3rn1KKsNWYyRpOF8PtdkkxxqnetosVhISmqyJIZXNBqpnrcLysNBubvF8D6rZ29SYskx8l+wPJWsvCkFCyywwCLAAgsssMACiwALLLDAAgssAiywwAILLLAIsOLE0nQz9EeSJGD9MyxNs0JPp8LrjErMaaj5mzdN885L0/Fh0CoxoJUlsd/vOz/U9BL5zsFrDG1W4GkIQN8maTA9YNT5N1E3/90S6pZTsuV3rrXOqOva++Iya+3OsszfXQiuwS3YlQ5e+669N3Ubryx/4ygGfcoBZndkW2HQKeQEj9mUU5jhTOdekoaxTYU9RlEUbvPRxivYQLncW57nDskMvEJO399X2Xa7dXJQ+p51sqvgNdH5LH1zlFJ+s9lovDxOgbbjCeUcnr+HxDFhaZ6ZvM7/jgyrx0vOCt8vHsaHJUfe69sxkaqqKtrSwaGXfC8PUtEWpQ4fM9M0NXvcGVbp8FFIkVGWpfKIdBIjxuI/0mCBBRYBFlhggQUWWARYYIE16PgRYAAFWSm6+dJU5QAAAABJRU5ErkJggg==",
                                    R: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAiVJREFUeNrsm9FtwkAQRHGUBmghLdACLeASqIESoARTgl0ClGBKMCXgEpxJLEGElGQduI3v/ObDXz6Ze7rdm90VWdd1M2TTCwiABSxgAQtYwAIBsIAFLGABC1ggABawgAUsYAELBMACFrAi0qvPZ7Ise2T526cWi4Wey+VSz/+h1bnoub9ZvIqi6NwVJaxeOmh1XQPLqvl87nnEMp/x/YM562fpfOmUcRualOd527bAMul8Pu/3e4/4SCAMe2/RNA0ny3q4jsdjIqbUeLVd8/Qfdn46neS/pmJKtdWvSy6Xi2yBff93yxP3Wd/tdr1eG9NW6F1EkLO2260xbZHgP3JZ8GSU0m0ILJp/wEIxwbLcdA6NhzhgyZ0Dy3qsgGXVZrOxvLZarSYNS+V0nudVVf36pkoiedfgjaYE+lnCVNe1w3wsBetQFIXTJDH26U5ZlozCZpY81TSN59ww1jBUad1P812/GnUYChZhODgegTXsQmR8P+BaVLIP7UtHOgq7Onjj2rZtZfSNo40UYInU4XC4K6FV7liq6J7XpB28LjvhM/oDh4n02H2WYjN0cCVVGzr0XtKBpTB0aL+k03WwdEGZSA8QsMaldMIQWDcDAawnK7SJTwqWsTACFmEILHLWJHwpYchtCCxgPbPcUc7a7XYBf8f4/2HRy1jx6LXoR2EkeGAhYAELWMACFrAQsIAFLGABC1gIWMACFrCABSwELGB5612AAQCjKaY5iMyusQAAAABJRU5ErkJggg==",
                                    S: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVJREFUeNrsnOFtwkAMhUnVBViBFWAEGAFGYAVWgBFgBBiBjAAjwAgwAn1KKoQCSXw5Yl8uzz+qClVV7qvte+d3TfJ4PAYMWfwQAWERFmERFmERFhEQFmERFmERFmERAWERFmERFmERFhEQVivxG9TT3O/38/n8+slwOByPx4T1H9fr9XA4gFGapoD18WfAazqdzudzY3APu7hcLsvl0ulpR6PRdru1emAzWOv1uvEfGFl2u916AQvrxGo9CwK97HQ6xQ/Ln5QVL21Yq9Xqiw0X/V6zHlVhIRG+vkGBfpywsPe3saFjV40NFpbUkvqB/tBZgp4ohfIUtm0sHl/xfZqF5DdDfEUlSiU1+N6whRSOx2NUZQjxXbvmj1ubRGpA4iosQW/qgDNgrS7Pq68QkpQsHL/jH9GUZZAEVtkJvHfzrI/p5pq2XYIlKZOKja+23+nA0mvwkocpO+vV9nj8gMISErWr3UmSSKQDRMB73SExq7uS0kA1KOmQ81I7voQrHYSTGSTRZDIRyv1o3R15maDiFlkote0AyxDqXCICCp1IR5qHOKJxtSeeumG/3/cOFjq3a3K9tjzzxq89VvYxdcyrsnuGBTYKfV/H0grzFJBIMROr1cZk9eeF0Odlad832xwNeVnCQkATNN4fq8/eEcLK9YSPRYZy7hGsZ4oJT9qGxRgKrLzrN1NhaskVECyfqtQR98HBatb4dSoxUMMCyYVkcZrq9Nrdya9fCbWYxOXvDKzZbJbURVl9hXNbuQO+oeT+W1S+oWf/IqxW5veEVe/gN1b/EcKq3ex6B6vMK9S5TtQxWLvdzunzBg5uN2BJOjRqbbPZvJOSwNIpQ6WLISixxWIhdAmhFZwu4A6y+5WeQ0RRBGtHOwmxqC6GgFRL/zEwyO7BK7XVTtjR1a09zrGyjx1dlrCanr728O+7JRO/FfYtXn0xWT3tQsgLk+sOZjP43MtxRQZMhhdp9G4rV+jV/D0FFWfAcRb52woMH9UeVmGGVxjjBfUSjLBgBR58Fw1hERZhERZhMQiLsAiLsAiLsBiERViERViERVgMwiKsduJPgAEA+XyVu8uZ3pEAAAAASUVORK5CYII=",
                                    T: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAANxJREFUeNrs3M0NgyAYgOHSuACzsALDwUzs0lWo6dHEnwvakOe9mvDhE/Bo6L2/dK03AliwYMGCBQsBLFiwYMGChQAWLFiwYMFCAAsWLFjbaq1hcOsIJ8s1hAVLsGDBggVr+pZ7xsQYc857Tz+/ThdJKa3rHIwY/hr9DyqlXNlqa+3ZfbqGvlmwYMGCJViwYMGCBUuwYMGCBQuWYMGCBQsWLMGCBQsWLFiCBQsWLFiwBAsWLFiwYCn4EbWTBQsWLFiwEMCCBQsWLFgIYMGCBQsWLASwYMGCNWdfAQYAm9kWXxDs58sAAAAASUVORK5CYII=",
                                    U: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAZFJREFUeNrs3FFxwkAQBuDSqQEsBAmxABKwgAWQQCSABLAQCWABCSAhvYGh09LSuSnNBobvfwQus/dlL7PwQK9pmhfJyysCWLBgwYIFCwEsWLBgwYKFABYsWLBgwUIACxYsWJfpZWQ0Gl1bXlVVzhV0lmMIC5bAggULFixYAgsWLFiwYAksWLBgwYIlsGDBggULlsCCBQsWLFgCCxYsWLBgSThWURS3LK/rGtaX7Ha7a29tt9u278fjYf3YQcvl8nA4PBFWWZY5H5vNZhcuqafSizlrh8Nh27t4i8HK3EmiGQwG4/H41Cap19brdU5b5d+Pm9JEpdXNJNyALcSNDpPJ5EEv3kFntddc/X5/v98H1B+Ktdls2sBarVYx9YdipSwWi/+Vmk6nYcVHY5280sF5OKlusE7n8cbnV+IOO30dY3202B/G7rRkPp/HPNEv0uv8j6jTIFqf8/tYWx6TRtauSu0e63PSsP79O3NxzD2Ud19Yfs+CBUtgwYIFCxYsgQULFixYsAQWLFiwYD1l3gUYAIbGVuEGoBIxAAAAAElFTkSuQmCC",
                                    V: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAqxJREFUeNrsnNFxgzAQRK1MGsAlxCW4BTfnnlyCXQIuAUogipPxZDIZ3SLQnmT2PjNYSI/du0MQwjRNOwUWb0IgWIIlWIIlWIIlBIIlWIIlWIIlWEIgWIIlWIIlWIIlBIIlWIIlWD9xv98DEOfzGRktHoaMFk/aJKyPR5iHXS4XZDTksK7rkDNWasPj8YgIENSpeczpdGo4Z4GwxnFcBRZyurZhxbjdbqtYtW1YoC9MWKBV27YheLVNGyI+LSorEizkaq9iw1eAhdTyVWxYGtZuKh993yMzGYYhMQgywvV6LboQkrJir7hEXGA7+go2BA2SgGWalOFBGiwkxyeyElIKizYN1SkrAasSZQXOC7hRGvv9Hqk2//49/tYUV6wPSGZsQFlg9v1XXOMjVqkhbcBa4kTEg4SERYWV3ZoisMrtYfnAyi6IlZTC17EhoRSSbneegVz/jBudOCxn/tSnOxlOdN9K9rFhXo5HYHGyOxtWRtqqKGHxlWWqYK6ywKdt7cFCVDA3Z9FkVSOsP8oyd7I2Des3ryq2kh1hzeoequobdi5v0eBpyyyFTFI+sMwVPhmZsJge9IGFdw9I38CceeB/qiAiOBwO5h3i1+RCSB/W9z2T17uLsrquS2+8xI7B3Pks+ipWLTYEc7zpQXJ2d4NlrjPqrqre3c2GyDoRG/JhBZdv0ZhPxr7zWrp1cJj55BQLdRF/zp+z23vwy2Hx5+wGa2HV3xashYXfBVZw/NiY2aAn2tFhGDakrCXicpFVq7D4vbs/rOwcv0VlZa95i7DynmJxXsWqDlaeRrwSVpOwyHtYUlaDTWlea+o4Yf9/KJ8lLkdZVQFr1vp9YQV9iLolZQmWYAmWEAiWYAmWYAmWYAmBYAmWYAmWYAmWEAiWYAmWYAmWYAkBHp8CDABKCtGI2oWS6AAAAABJRU5ErkJggg==",
                                    W: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAv9JREFUeNrsnNtxAjEMRUMmDdACLdACVEsLtEAL2wIlEE8ysx/GenklP5brT7A90pl7JXs34fB6vb4wdOMbCAALsAALsAALsIAAsAALsAALsAALCAALsAALsAALsIAAsAALsD4O1v1+PygGs4Nm+e12o5Zfr1dxeQpyCFiXy0Uz7fl8Fj9/PB6a5cuyVHxlDbKFDU+nkziHgkJB1E8TYWnCGwuWFaIj67FgaUQepCwN6+0e9IR1PB57KSs6vD42pCqLUlnUDhqI89mQgqWXjKbrTWDDNM7nc8UqU/7FyW1aoTMsMabisdAEq2jYKWH1UlYbD7ZWVjFbfXWnYIn3GJdWOAQs04GgTln7seFGZTU7kfo/ohF5vedmfRiQ7SCy9pKVPyzHyJRKnBiWqKzMR4ysKO9kyhKrmJcHOygry43SRV35C22F/W1I6SJlSPHKlCUW+IltmPmOUlbKkFKEtWaNa0OrgyhdMLBMNcu34fjDMpUtJlVqn0xKc8MyNUQqVX4T/dHM0YN9lKWszZo8m90Ku8FaGTG1mSelv05Ob0PHri/uMLoNRV7imXtdTsFS1iz3u1cILD7KFRaVs1hoVv/yh6w5YG28rKxJitfD7S1idGWtgqKUpVGE5imYbyvsA8sl239N8cXL3YY/XWy4/I3qAq9kPYcNNQ1R8zSdUZa4Q8RjyChYYqyMNFbQDPG0fD+weGWlisOkqinMjY+jnZVFwcoWUtDTcp6XeyvsBotJNVtI5dzslf0QNqRqVkaHEQjz97iT2ZAPl3FQRpmBzmwS9EYuEFaDd4ifDiuTUt0mER6MheXy7q+uqUW0wt0qK8iGh9BfZuP/BaU43uNx2WR0ZVXUDhdFxDWWWFjWuIvzuxCfAJZLYQ5qheGwrA2xOL8L8QmUFeflHcJyOZrNakOX0E0EQ+9Y4bBM0W9X1gfBKtZm0w5xHmwBSy8WCsp23HNcd3Y28LsOgAVYgAVYgIUBWIAFWIAFWICFAViABViABViAhQFYgAVYgDXT+BVgAL9pjPIm/25KAAAAAElFTkSuQmCC",
                                    X: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAw1JREFUeNrsnOFxwjAMhUs3YAVWyAqswAqswAowAowAI5ARyAgwAoyQ6o67tlcgfonxk+M+/ezFufhDkp8su5O2bT9kmH0KgWAJlmAJlmAJlhAIlmAJlmAJlmAJgWAJlmAJlmAJlhAIlmAJlmD9WNM0E8B2u91b3rPZbBJOpk1vVVUFP2OxWHS/ZLVaIdO5Xq/pJsKAtd1ukXmez+eOl8xms+Ablstl0okwYJlNp9PgVNfr9avhp9MJwW2PlQDLQASnatH6ari5TMzwkcGyEIuJRMQxLdgLgWVmKTw4YcvijwP3+31woNEkTIGns5BQOhwOj3+s6/otLx+HdOi1oh2PxwEx2L2Sjs+z7lHW17lMrN5ut+4h8/kc+RlG5lmmGINu8if7IJnOkhrn+6mwQBHwPXmDG3zYfIr28exCulckPs33PqmdH4Z3sxQDlnj4k2WGIaibTGEiOjZ1MegPC9EQVrsgFdKjzigQFgICAUr+bB9YyDKXQzGYBSxQQ3TLMWZq95EOv7dGI4cjZdDopUOv7WbfYjAXz4rRk7xiMB/PAncUckjtzgm+V8/GqxjMKAyHRSK1GMwqDMFNGPfUnoVn9fUUe9gnteusw/jCsG8O4gv3XFZDsJ8INq4LhzVgaXOUDp6wkP5FVqLUM8Ejba5XA/9dgo8RAeQ9UmfPMu+4XC6DhyONn3I8K2Z/xkvK+3hWXddN08T75r/wLKQeRBr9ZIHqAAsRogYCOYlK1hAOsBAhajIdUWFkgcqGBQrRe3whWJkagg0Laa9+N+UNBLIfXywsRIj+1gR9ny9HOiBC9E/nBonEtFdQvKTDgDOl4NLJ0RA8WEgCerq6IaKMs8nFg4WcTHuqmxDBxdEQGd2w6Dj4n8kNC1KCR3JwR8MViUTGPgRHiEYm6UxuhX1yFEPkEaKqqpCVNPk+BMGz3nKfBJH+qQVqcljIWha889vCJyuTaojksIZdborZBUs3l0mrf0Stsw6CJViCJViCJRMswRIswRIswZIJlmAJlmAJlmDJBEuwBEuwirQvAQYAv7Sbyd6gtrAAAAAASUVORK5CYII=",
                                    Y: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAlVJREFUeNrsmn+NwkAQheEcgASQABKwgAWQgAUsYAEkgASQABJAQm8SLk1DSPd1e/ur+ebf42a7X+a9nel2XFXViNDiBwTAAhawgAUsYIEAWMACFrCABSwQAAtYwAIWsIAFAmABC1jA+ovX6zWdTseuWC6XSrbtdutMZcvZoqH2UwWOzWajPMb9fnemmkwmzjy2XLi9BId1vV4VWPv9vj3P4XBQ8thyBcOyWCwWzk3OZrP2JOv12pnEFgq6kRiw+heFiVTJYAsVD6u/3ZhInf9uS4TeRaTWQbH50+nk8adOS+R+GnbS0fF49D4ilPO0jMoy/16tVs6fXS4Xv7Iy+7clBlJZus0/n08Pv/takqUavL7tjxPNKPRvOwqToe7BH0r8KswE1h5ZhrrN11ZtkvRT7hAqy/SiNOK1o4sdg6Lu8ipL9KB6alEO0KDDYEqDf4dyxhsCRbOhh8GUMuzUzefStTdiHP87+MfjMZ/Pne72/mX7MCieAKV6lv6+xRm73S7yY6eBdT6f+8OKMAxmAUu0+fZhMP4zJ7vd6enN/yLkAgy+efHj3dyKw8BA7g3tLPMursgdQ+LTsKfNRxsGczF4b5sPejOYqcF7CyqZBtPK8P0SptM7g8jDYF6VZaQ6NQEpyyph61DH7XYTPwxJMAxm0jo0laXc7ycvq1Em32eJSlTeBQ4fVikBLGABC1jAAhYBLGABC1jAAhYBLGABC1jAAhYBLGABK3mkv2SlsoAFLBAAC1jAAhawgAUCYAELWMACFrBAACxgAQtYwAIWCIAVJH4FGABxraQlqLjfogAAAABJRU5ErkJggg==",
                                    Z: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAe5JREFUeNrs3NFtwkAQhGFAaYAWoARacAtugRbcApQALVAC1wIl4BLsEpxVnvIQRUMkbsfxv8+GXD6G9bGHWE/TtKK02kAAFlhggQUWWBCABRZYYIEFFgRggQUWWGCBBQFYYIEF1s9VSlm/oc7nM8nibQgWWBRYYIEFFlgLqY+af2y73TZNI148juPj8RCfttI/MLnW8XhU1r/b7aotyRTr+XyKL/blclk6lmGsTLGGYTCMVZTj3fB6vYp9vW3bqiszjJV4dzudTpXXtjGMVWwalFiJfe3fJss5VnbJEmMVlRArt487YmsPqXq7ds+3YewDxDXHljVlhUZYscMUY5W1whWxmh+WGKvYhSYu0qLBl1L6vre9CXo1eHHIFZflrjMf636/i69rXLl0rLnEKr9nla8SW/vSDyxut5s45Etu7ekN3nN2bNqzPGfHjlizi1Vmgxe/rpcwO3brWfqRRMqQzytZ+pGExU0wMVnms2OvZJnPjo2Spccqccjnkiw9Vl3X2R3/Mjs23ZTOYnb8S62nir/Mtt/vlYloNLXD4fDSM8d989WH/KHqffNPnx1HUxPnNt8fsrhDVvMCCyywwAILLAossN5TVT/ukCywKLDAAgsssMCiwAILLLDAAosCCyywwAILLAossOrVpwADALAUjuHbFyikAAAAAElFTkSuQmCC",
                                    "!": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAT9JREFUeNrs3MGRgkAUBFDHMgFSIAVSIGuIiRRY7xY4lrs1PezrMwfrVfP5oFj2fb9JXe4IYMGCBQsWLASwYMGCBQsWAliwYMGCBQsBLFiwYH2WdV1LRZ6HwdIsWLAEFixYsGDBEliwYMG6YkrIr5VLKW+P2bZtGAbNutUotJUKwpqm6csDNCuoVj01a55nWEHF6QZrHEcz69ewEqpXct4KO1+1Ej5n0AZ/cqKFTLQgrBORhIHVTbPeTjTNgmVmNV8s/t3qcLI9NH84k9isIxGnYe3YSriFTsQKmU0dY2lW9IpwlEfazHrtUU6ziv+iudpSCgvWpZMy4GteCHiO/7aXy56+vl+Wpe2V0WkICxYsWLAEFixYsGC5kf7TdPEMUrNgwYIFC5bAggULFixYAgsWLFiwYAksWLBg9ZQfAQYAy984l3UoS88AAAAASUVORK5CYII=",
                                    "?": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAldJREFUeNrsm+FtwkAMhaFigTBCGaErlBFYgRVYAUZIRoAR6AhkhDACjJBaiURRFBo3EJ97+d5PBNLl09l+9y5My7KcIJ3eQAAsYAELWMACFgiABSxgAQtYwAIBsIAFLGABC1ggANYgmrlazfV6zfP8/pP3SsD6UZZlX5UEVusXPip9VkqSJNhCy3C6XC7b7fZPDy9fXq/XRVEEWXAwWKfTqXd9CTKhPBZYaZo+XxNSkrI3I4f1ElK3XmbJa2Jffa/tuavVKlpYshdePqP2+32EsKQrDzHQZVBECGs4iyTVbbD+maXzfOQ5GzNOVLt55U9Eh8NhiAIPZkrFTHYuRgZlw7UqEQjfqMqwswZbH/h4PPppW0aw5IDSe6gpjb7BUxhFNOfzWeMwH+2aceVZjeDFOZR/HP5pBqLFKDTLs6S714agR/062pWlbylNf8NzDKSp5/fgpQAXi4WmDMWRGSSornuW0sGL3TXKmt0WoD7MMUuZ/cJSDjjLfNkprM1mo0xKR3Fh8Yvk3KO0IzbJjF9Y8vzKbm1jF/zC0mcyI7oKe7Kpi1cIsjxHsPRN3fi60B0sTeBVN/VQd/d2eVandrudsqmHTHKc7CwNgiBN3d1BWg6A8/m8M4RRlmrkB2lNYqVs/2NPSm92AViqndUvZR3pznJylwEsfxcWT15nhHzp9k6uM3hv4k8DwAIWDb7lLyhurVZ4WEJquVxqDvyUIT0LWAhYwAIWsIAFLAQsYA0jwj92FrCABSxgIWABC1jAAhawELCABSxgAQtYCFjAAhawgBWpvgUYAFJsN1opTo5xAAAAAElFTkSuQmCC",
                                    "0": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAlVJREFUeNrs2+1twjAQgGFSdQFWgBGyAiuwAoyQFWCEMAKMgEcII6QjwAjpiYgKkVAdwZyNee9H1c/IeeKPc+rLmqYZEbr4ggAssMACCyywIAALLLDAAgssCMACCyywwAILArDAAuuN4juGRhwOB+fczznk89PpdP3T2WzWfpxMJvP5PGRDm3BxPB5Xq5UQPNTgxWJR13WQBgfDEqbxeDz4GRdFIdbpY8lNSu94fkzkeW7sFQDL47wjE1nKWDL6/M65ZVmaNT6zPBgii910OvV7TZn4ZDAmmGet12vv15Q8Y7PZJIi12+1ecVnJ0VLLs7bbraY9Mv1XVdX+yX6/lyUvnrsYRTW1S4LazTM06ZiwGtyC3TDUDJZu/iVSkn9qNkxJzVk3O757eabym911NikszcPv3Sd+IpYmerGe2UL6DbukNMsyzaLm/W95+cebUrDAAosACyywwAILLAIssMACCyywCLDAAgsssMAiwALrNmz+a/0GWINPlLwxlubh9x4esTlOFBfW4MMwGqzUepam7KT3KK3mfO2jNS0pYDnnlsvl9WwlX2rOXtn0LLsjR/pD8DK7tTffrRC79xjqura4B8vyirYYznsURWHTftPU4UXVgl7KpqLrWa/oXGbdKkChk/Jcu37RsKyiC1BCV1WVFy+5yF8tRsqVrNIdnhyPslwaS4Us+5Uoy3JAfiRDz7LGMFi94b39oLvEP78mPTE/R8AC/PBYNy8YujtBAYqkbiAuLF7+gQUWARZYYIEFFlgEWGCBBRZYYBFggQUWWGB9ZPwKMAAb8Bq6GXjuvQAAAABJRU5ErkJggg==",
                                    "1": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAShJREFUeNrs3EENgzAUBuCxTAkW8IIFLCChWMACEsACFrCAhK7JDsuWMbjRkO8/kcCh+dLX93qhiDHe5FjuCGDBggULFiwEsGDBggULFgJYsGDBggULASxYsGBdM48M17Sua13XP1+FEKqqgvXOMAzTNG05KsOPdF3nzDoqtSwLrP30fd+2rW54aE81TaMb7m+onKvvfKxEM89z6nqp953b43LESjSv8yjRpGdD6c6ouTU9ue64G8ISWLBgGR2+U5ZlCOH/mJpG+ay1YjYZx3F3tembE1eoDJ1ZsGDBgiWwYMGCBQuWwIIFCxYsWAILFixYsGAJLFiwYMGCJbBgwYIF66Ip/IjazoIFCxYsWAhgwYIFCxYsBLBgwYIFCxYCWLBgwbpmngIMAPZUToFkzb9zAAAAAElFTkSuQmCC",
                                    "2": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAApZJREFUeNrs2+FtwkAMBWBSdQEYgYzAClkBRmAFVmCFMAKMACPACDACGSF9UiSEaKOY9LAd5/kHQlRCydecz3c+srquJwxZfJGAWMQiFrGIRSwSEItYxCIWsYhFAmIRi1jEIhaxSEAsYhFrQPHt4SKqqjqdTrfbDa94f7lcnv9aFMV0Ol0sFniDV8sLrU3jeDyu12v51c7n87Isra7WDOt+vy+Xy37/YJDt9/uxYJ3PZ4ysf46JzWYTHyuJVBMYwpGxrtdrKqkmNMejNhZmtLQTFOiR/nQuXrXOOhwOKA6Slx273S5g6ZD8sXo8XNGGIfK6MGcjrzXZbbvdChMc6rVQWLjzHrMbFCRY+PJQWJ1jsC1VS0p81LehEvzLiu93NGvAPz+XpPlQuw6d99O2SMbipvPLsQiPgyWpGNqwJDsNobA+On65+fdePtLZ5xoAlmSIpV1vBh+GOlhK28qY0TqL0rZZDytKJ8PQeFs5Sd2vttzJPP92B6k9z/POBN+U/mPPWavVSjIV9t7LjzMM5V2fZpcicncnlZTmNvxkuEldeU/ZI1ZZlj67Fe6w3pIaRd8wiVRRFCNq378EBpRcCvW6ZqryhfVWj9pKygUW7nwQUvZYuHP5GthWyh5LXnyaSxljyac/D1KWWPLjNE6kLLGEqcqPlBmWcPXnSsoGSzgAlRfJTrEke3WQQqXqbZGvjSU8FWN4ftsRluSUh86RGO9YksfKYap6hGrDQnL4EzW9Tse0R+i1wqqqms1mknKhH5YwGw6gIy1sLLs6M2PZN/Ss4A4r+Qn4yDkry7JPd4uDPFkBHqsJf/ZLLGIRi7MhnywGsYhFLGIRi1gMYhGLWMQiFrEYxCIWsYhFLGIxiEUsYjmIHwEGAH5cZJ2I3VOhAAAAAElFTkSuQmCC",
                                    "3": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwZJREFUeNrsm/1xwjAMxVuOBWCErsAKMEJWYAVWICOEEWAEGAFGgBFgBPqK2x7HRyxC8uw4T39wbY7kzO8kWXpyPs/n84fMZj0hECzBEizBEizBEgLBEizBEizBEiwhECzBEizBEizBEgLBEizBapH1Y1jE4XDYbDa73c798X99MBiMRqOvi2VZhs/ACz0HteVyOR6PjUsFrKIoAq42GKztdmvHdIMMiDsEaz6fvxkQs9msE7Cm02ktCYTP66OlpJyR45EKC+m53t0J+StNWMfjEaVA7bs5c3/kFaWLxeJ0OtX+2Ou6rGn7pJ3PGg6HXlgoQZG2nQOiQM3zHJ+WUjGponS9XntXAkYI1QqRi4cnFYZoZSylwA0a/IuL3hubiO7YG2nE4P1FS5VvCdXUYD3k8pCgJBrpWYJVTbFq7kZaqJJgWersyjUnTRSMPQy9sJyOKlg/1dlqtSr/TpZlXZGVy6VUSzLa7/e0JfVj8yZkdDgUog+Nt6Xop04xYnCi+0bHWPGT19mLJDe92t+BlKU5V1H6E30g1YSUWG79dmFC/whS1WZonfMsN7KmyQwxJvgKngL/ulEKu5LgK1ie55PJhCb7tV51wB5K5hUFLHdUphovuFjX2x30Ohb1ndzxxNsbOmSWYop26CFqWMaJP22IzxuyVjbLdNYoUaS/G1qqMM4Qn9TueFtld3z02V7plQCT2g29R/3gPiXnTi3epwr+1+kiWUkssMiNS7thWU6OCFabnI4Ey9L6PXOueIbSEcF6VitZ6gbSJkBrXLy/B0Dv9TzjVIJz+I8HyzI6RjRd8zJOJfCd1IasqBu9AYW0hU7Q9TfI68YtkjfBZ0oIDU2PUzuA66zed1H+HZY3GSPrU/Xu8chWzIMhbFj4bTVu8ym/6PSSWOz1Kf4rmmFk5TeFTdyLJ/CXHVKDL4ri1f0x7GvS4TV4FF+bi5X0gOM/C/sOQVwDi/v2EHTiEf9aMN2RniVYgiUTLMESLMESLMGSCZZgCZZgCZZgyQRLsARLsAQrdfsWYAB0oA7n6FfNZgAAAABJRU5ErkJggg==",
                                    "4": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAdxJREFUeNrs3N1tgzAUhuESdQFWgBFYAUZgBRiBrMAKrMAIsAIrMAKMQH3VRmpqfqTa5+D3XOQKkPXkMzomJtG2bR/UsXpAABZYYIEFFlgQgAUWWGCBBRYEYIEFFlhggQUBWGCBBdY961PmsJ7P5zRNu4cNw+ByVJHAH1nHcSyK4siRjgcvcRq2bcs962isTIGlO1bisCTHShyW5FjJwur7XnKsZLUOaZrO83zqlEBbh67rzkqFm6wLsQo0WSpiJSVZ12IVYrK0xMp/stZ1NbEyn9dODytZJlaXpTzU5q+WZYnj+K+BlWUpbfAPmbFKkqSqKpY7P3cry0qwaRrWhopj5Q3L9ArqYuUNy0ipi5UfLBMrMwfVxcoPlmUCSo6VByy9sfKApTdWrrFUx8o1Vl3XemPlFMv+M5f8WDldi+Z5bonV7+OPbPq450L6DrFy9uWcjVW4yZqm6Q6xcrOZzfIsNI5jk6y3lEc2s72eaC6VZZn6aehmf56Z6Xd+UqquwAILLLDAAoty0ZSadtGy3LG0srt96etl/70jlfmGxXd3vvueBW9YcM8CCywKLLDAAgus0Crij6hJFlhggQUWWBCABRZYYIEFFgRggQUWWGCBBQFYYIEF1j3rS4ABAJHuUWRFJlXUAAAAAElFTkSuQmCC",
                                    "5": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAntJREFUeNrsm9GVgjAQRWXPNmALWoItYAm2gCXQApaAJWAJUgKWgCVoCewc/FiPizi6MIRw36cH0Fwnk5eZEFRVNUM6fYEAWMACFrCABSwQAAtYwAIWsIAFAmABC1jAAhawQAAsYAELWH7q2/LLzufzdrvt9pmr1SpJEj9h5XnONCRnIWCNA9b1egXWGwkeWExDNKzPalcYhp+Z0inCOh6PTMNfnU4nchbWYQwJi9UQWFiHXh38uZZbU7UyVHvOul1TlmUcx4vFovGyzWaTpmk1kFyBlSTJ5XIRTJo/WFCKKZsurCiK3vXi9iHmCqzPZMwrsHzRKQiCbh84n8+LoniW4EZsHfpoVciWoPN2kc8+S/4Dsy2nD6Z0v99PFJakobCWfnE8HA6+mVJNuUrc1v0tkryFnWYUcqXBEOwi62VmEXf+YEoluLIsG2r1cHoaCqzGbZBmPtpUyuw20i9PcDyDIhBfRqXNgmgH65a2P7jRzHP6YB00Od4mZ5lud3rdJxkMhEopsIAFLGA1ab1eB63a7XbA0sr9frVDsJ65cA1Em7M0I8hZmq2Msjjhf2RpYPkWWS/HI9OtsWWtqe3Z7B8dgtXIRT5xJ7JM+4aazHJfLM2yTHOLhJWHTdYoipQ1mTAM9TMrjmMPYfV0arQsSw9hiTo/NiTR6mf7flafuloulx3WBSWsbEzWAD5LMlGapl09TbkCjHI1fDfTt8vzI0f3+s+7upM4zPagoijezfcy6W5nBAf5wcM3LCTli03Pa7UYdJGQbWzEmsmt7s7fE8oSSpavMo0JFsU/YAELAQtYwAIWsICFgAUsYAELWMBCwAIWsIAFrEnqR4ABAFakRVY8Sd/OAAAAAElFTkSuQmCC",
                                    "6": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAtlJREFUeNrsm+FxwjAMhZteF4ARYISswApZgRXMCKwQjxBGgBFgBDpCGIG+I3dcLw2tkiayIz/94E8L53wnK09Pdna/398YsngnAsIiLMIiLMIiLCIgLMIiLMIiLMIiAsIiLMIiLMIiLCIgLMIirBnFRwyLOBwOl0d8PuL7nzabTfO5WCzwuVqtQi70Hi7qut7v96AgX22e52VZhlpwMFjn83lwmuCLVVWlAgvZ8f894ZyzDws5NVYNwS62DAt1atwiDfRqi9eWDt771vvun7Hb7dQWnymfolkul7fbbdzfRHLhLWlNlCKtRifVyDSDCv50OkmU1PF4fL4KGlH6e0DNGhSlfy4GAvV6vba+JXkhWCvwkrQqiuInmu12G0ly6cGSPE9nnZYU7ylKYeyuQ+eOC9w8B3EdJNvwFaxITgnPILNSNP/GFe5BQk/BZ1kmUQDMLNrKE+9ZNDEtl3n1iE4tZk3BCxcDBf9ni4N/0HRmAvhZQjMvWucvOlh9A50QYfUIzclFXNJhQDRGRa95WrrSAS209z5FUTq4SUJyMbOkosyanyVPk7Isj4+QD/clloY1UQo0dV23JrISXjoaIq7MwjO30OR57pyLxdKIKrOec50B4/7kdNarxURi79CiSRKWwoDHDiwFqWUHloIjyALPAk9YCcGa9LyZNT9r0uexdvJPcixtsKOgMxyLK7M6ucQDS6+RlpiZRVEMOwre2YHP+xy85LG/TwNBSnLsDzlr8NKAcIbaXABrboIJXTCDsCYaK+jswQDXUSTbqu9L1uCQ9WmkrNfrEe0UZKvaoRrtdgdlaJT7c03gp1SPH833vqH+ldZgN1mrqhrcAOGLCd1k7SWjWpicc63ZotkC31nyvfeXywVtzavCj8KEtx66ZUh8HYMhsFMqBNey0oFGx1GYHyyaf4RFWAzCIizCIizCIiwGYREWYREWYREWg7AIi7AIi7CSjC8BBgDxhIHqgtCJ4AAAAABJRU5ErkJggg==",
                                    "7": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAh5JREFUeNrs21uRwkAQhWGg1gBIAAmxgAUsYAEkoAELWEBCIiErgZGQbS5VvHUGiu05Q/39nIXZr/o0MyFMh2GYUHk1gwAssMACCyywIAALLLDAAgssCMACCyywwAILArDAAgus76yfmLfpum6/3//TizdNczgcvgcrpXQ+n4khM4sCCyywwAKLTemnaz6fr9fr9/7291bOBcvlMua/mOo/+bdarXysvu9jvNRjaPt+X8oOOmGdNRm0yw+vpftyuYQtRrqzrKf8E+VutzOvuAUpt9V2u/UXH9lW1+EuK2UQvpRRBi9JN4bH49G/wDIYvSbZtvKHkQ3++FWJdtbpdEop+RmMX5XoptTfiN53DJwNH23lb0SLtJUo1uho32w2ZVamNtrbtvUX3DRNqbXNaKtaB7x9Ai4WC/+asHsM6jNrtK0sg6Wk6sMqmEEtrK7r/B3DfeMOVlZbWQAthmA99qLKGRTCGj0M3qc7WNfKecaGzqomgypYVWRQBSsng2U3DULHHTvi+J1V6gaWXGfZXnQ0gwptJYE1OtpFBpYEVs7AEsEqPLNy7slMbnco6aysDIoMrPJYNt1ryWB5rJyBFfrohyzW6CN9dNZrGQTr2Vk5lxHDmo6E1cRQp61KYqVbVTSwSmJlTnc664XpXvArVa0YgvXhksKq4OcodBZYYFFggQUWWGCBRYEFFlhggQUWBRZYYIEFFlgUWO/UnwADAKM+9iPbiqjtAAAAAElFTkSuQmCC",
                                    "8": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwRJREFUeNrsm+FxgkAQhTGTBmwhLWAJtGALWoIt2IKWoCVACVqClqAlkDc4kxhEboHL3rG8/eHEhGPIN7t7u2+PWVmWCU1mH0RAWIRFWIRFWIRFBIRFWIRFWIRFWERAWIRFWIRFWIRFBIRFWIQ1IvuM4SGu12tRFOfzGT/g836///zpq7I0TfGZZRk+Qz5oGdR2ux0QyJ8WF2NJqKcNBut0OnXC9GxwNCyfCix4x3w+HxgT+i6WBCHlK4co80r0o89vzs3z3CwspBu/sLA/2oTlMQCDBKNqUXo8HiWXIfdnlQmrqv1+b63Out1ukufZbrfPq/BVsgo3NxWGyMSSmvN14XK5jCTN64Uh+hjnNavVSvjLHje31kg31vS9C33jsN6V9ZHw+ojcrahnUfzzoWoR1m9f0huWc7Pz3kUFhiX5fxqhAOKzdjoJWA91uEfj4uxmULUOV8eik5UljXRNApXU/WoqzUz53Z3FYuFMQPCUhw8WlTkvPhwONgcWl8vFY8ggtHVa6GCyMgLNCy+QUh5bhBlYwB0G1uuIPk2fCjwKg0nkhEjmOoFhCVW9d/12TSM0CwvhI9HzIozERJ+Ux2obt7K8G/bOUy3+ZROWpHrELonL8sqQmCRFBq43CMspPLy6CaLMyQvBaA2WZHDfWGRKOko0BqamO84uDx7UmPuR5pzOJRzfjkaiccJq2SWdG6iOyhqRrNziPkNU1lHCGqJ2Bj5Kqg/rX4fGzhjnKGzCozDC+lOahx0dmfKslrwjqdGsjcJ6b//OnXSKsBp5gRQn0tKuRXJkVKkQ01QdJMFS09eFB5x1JEDVIet6vZa4Sach62OflQyuR+ZZ3l+vaHRGO7Kyl1FFLVuZ1eD9ju8T2+/uCJV4oW02G/tDVi8v8SiTCjmRhn/1jkcsVJvoxHLWAfmr6xjxMbjXPxISoM561+WgcG8vqVBJpZV530w7WXhYNTW11jMDkNJ50dHBovhHWIRFIyzCIizCIizCohEWYREWYREWYdEIi7AIi7AIa5L2LcAAzvxzglhLcPIAAAAASUVORK5CYII=",
                                    "9": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAuZJREFUeNrsm/2RgjAQxQ/nGrAFLYEWsARa0BK0BFvQErQEKEFKkBKwBO6N3nmMoKwaNx+8/YNxFDLhZ3b3ZZNEdV1/0WQ2IgLCIizCIizCIiwiICzCIizCIizCIgLCIizCIizCIiwiICzCIiyP7NuFTpxOpzzPi7PhM67NX5MkGY/HcRynaTqZTGx2tLZqWZYBgby3QLbZbGz11hqsqqqewnQz1o7H41BgHQ4HeNY7DoHH0Uj4sN4nZYuXBViIO6YCLpoKGdZ6vTaboNCgWucjzV00kAXT6RRXg23CGRHsjfi1W6J0u92aJXX5A9BsgAp+v99LRspVSSF+QyUYadYzUQphJekPZOoLCUFHdumNLExoJNmtPZTm87mRxn1yw7Ise+/p1PQSoS9p3CdYN9PjeyOrM4r1JjtJ4z7BkuTBe+GpN2yFNrIk7/OyXBoiLFZKWVZ2zxRifDiwjE+k6IYDgKUj0D2D5QgU+7Akq1idcccdzeEWrM6M5s5wcwtWZ3VQr1zlnRvOZrPrUIIDLhYLhwKZ5grYR1+kXTX0uPgXx7HlnQp+SQdJzZOw/mHprFmFAAuklsslYUkNsCSrW4T1a7vd7tk9WYOTDu1ND73xCzdctjJIXkRh6VB1r0NbgkKd52drCvfLpkh46zUhRFEk+dc/3WGbsJ7opRuwWPwjLMJ6nAoIyy15oXdooCiK1Wr1+B4IhfZru1Mp1YN1OUbRe0/7SwksnVnByClP6SwrS1ZPlebnqlujBUDbT0mqYDo7/1RhSZwFqr35iKQEBpoB7oMX1mfgU8nZhM6FZgOE9aEyvNqhJ+2qg3FBhAEY7HGULMvMwtI862ShnmVw2ULz4I4dWFVVGXHGm7wZ8knWN1cu1DKgE7BgyGIvuCRGpcLis3Nl5WZxufizB8oTiS9NU4uLQ86VlcuzWZknB1KDZ6WUsAiLRliERViERViERSMswiIswiIswqIRFmERFmERVtD2I8AAVk+r365MC5oAAAAASUVORK5CYII="
                                };
                                var charsLength = 0;
                                var charCounter = 0;
                                var bufferImages = {};
                                var bufferCanvases = {};
                                for (var i in chars) {
                                    charsLength++;
                                    bufferImages[i] = new Image();
                                    bufferImages[i].src = chars[i];
                                    bufferImages[i].onload = function() {
                                        charCounter++;
                                        if (charCounter === charsLength) {
                                            bufferDraw();
                                        };
                                    };
                                };
                                var bufferDraw = function() {
                                    for (var i in chars) {
                                        var canvas = document.createElement("canvas");
                                        canvas.id = i;
                                        document.getElementById("buffer").appendChild(canvas);
                                        document.getElementById(i).getContext("2d").drawImage(
                                            bufferImages[i],
                                            0,
                                            0,
                                            100,
                                            100
                                        );
                                    };
                                    start();
                                };

                                var textChanger = function(text, sphereRadius, sphereSpace, unitTime) {
                                    var changeIncrement = 0;
                                    var charNum = text.length;
                                    var center = new Array();
                                    for (var i = 0; i < charNum; i++) {
                                        center[i] = {
                                            x: sphereSpace * i - sphereSpace * (charNum - 1) / 2,
                                            y: 0,
                                            z: 0
                                        };
                                    };
                                    var changer = function() {
                                        setTimeout(function() {
                                            s[changeIncrement].type = text[changeIncrement];
                                            s[changeIncrement].targetCenter = center[changeIncrement];
                                            s[changeIncrement].targetRadius = sphereRadius;
                                            changeIncrement++;
                                            if (changeIncrement < charNum) {
                                                changer();
                                            };
                                        }, unitTime);
                                    };
                                    for (var i = charNum; i < s.length; i++) {
                                        s[i].type = "_";
                                    };
                                    changer();
                                };

                                var fullSet = function() {
                                    var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ__?!1234567890";
                                    var col = 10;
                                    var colUnit = 80;
                                    var rowUnit = 120;
                                    for (var i = 0; i < alpha.length; i++) {
                                        s[i].targetCenter = {
                                            x: (i % 10) * colUnit - (col - 1) * colUnit / 2,
                                            y: Math.floor(i / 10) * -rowUnit + 180,
                                            z: 0
                                        };
                                        s[i].type = alpha[i];
                                    };
                                };
                                var textSet = [{
                                        text: "WEBSPHERE",
                                        sphereRadius: 140,
                                        sphereSpace: 80,
                                        unitTime: 100,
                                        time: 1000
                                    },
                                    {
                                        text: "THIS_IS",
                                        sphereRadius: 120,
                                        sphereSpace: 70,
                                        unitTime: 120,
                                        time: 4000
                                    },
                                    {
                                        text: "EXPERIMENTAL",
                                        sphereRadius: 120,
                                        sphereSpace: 70,
                                        unitTime: 50,
                                        time: 2000
                                    },
                                    {
                                        text: "TYPEFACE",
                                        sphereRadius: 120,
                                        sphereSpace: 70,
                                        unitTime: 100,
                                        time: 4000
                                    },
                                    {
                                        text: "BASED_ON",
                                        sphereRadius: 100,
                                        sphereSpace: 60,
                                        unitTime: 100,
                                        time: 3000
                                    },
                                    {
                                        text: "HELVETICA",
                                        sphereRadius: 140,
                                        sphereSpace: 80,
                                        unitTime: 100,
                                        time: 2000
                                    },
                                    {
                                        text: "@@@@@@@@",
                                        sphereRadius: 60 + Math.random() * 60,
                                        sphereSpace: 200,
                                        unitTime: 100,
                                        time: 4000
                                    },
                                    {
                                        text: "MOVABLE",
                                        sphereRadius: 120,
                                        sphereSpace: 70,
                                        unitTime: 100,
                                        time: 2000
                                    },
                                    {
                                        text: "AND",
                                        sphereRadius: 100,
                                        sphereSpace: 60,
                                        unitTime: 150,
                                        time: 3500
                                    },
                                    {
                                        text: "PROGRAMABLE",
                                        sphereRadius: 120,
                                        sphereSpace: 70,
                                        unitTime: 50,
                                        time: 2000
                                    },
                                    {
                                        text: "!!!!!!!",
                                        sphereRadius: 100,
                                        sphereSpace: 60,
                                        unitTime: 100,
                                        time: 3500
                                    },
                                    {
                                        text: "HACK_ME!",
                                        sphereRadius: 140,
                                        sphereSpace: 80,
                                        unitTime: 100,
                                        time: 2500
                                    },
                                    {
                                        text: "@@@@@@@@",
                                        sphereRadius: 60 + Math.random() * 60,
                                        sphereSpace: 200,
                                        unitTime: 100,
                                        time: 4000
                                    }
                                ];

                                var textSetChangerIncrement = 0;
                                var textSetChanger = function() {
                                    setTimeout(function() {
                                        textChanger(
                                            textSet[textSetChangerIncrement].text,
                                            textSet[textSetChangerIncrement].sphereRadius,
                                            textSet[textSetChangerIncrement].sphereSpace,
                                            textSet[textSetChangerIncrement].unitTime
                                        );
                                        textSetChangerIncrement++;
                                        if (textSetChangerIncrement == textSet.length) {
                                            textSetChangerIncrement = 0;
                                        };
                                        textSetChanger();
                                    }, textSet[textSetChangerIncrement].time);
                                };
                                var vibrateCV = new closeValue(200, 500);
                                var invertCV = new closeValue(1000, 1200);

                                var start = function() {
                                    setup();
                                    setInterval(function() {
                                        if (vibrateCV.execution() > 0.8) {
                                            vibrateFlag = true;
                                        } else {
                                            vibrateFlag = false;
                                        };
                                        if (invertCV.execution() > 0.7) {
                                            strokeColor = "rgba(0,0,0,0.1)";
                                            backgroundColor = "rgba(255,255,255,1)";
                                        } else {
                                            strokeColor = "rgba(255,255,255,0.1)";
                                            backgroundColor = "rgba(0,0,0,1)";
                                        };
                                        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
                                        ctx.fillStyle = backgroundColor;
                                        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
                                        ctx.strokeStyle = strokeColor;
                                        update();
                                        draw();
                                    }, 1000 / 60);
                                    textSetChanger();
                                };
                                document.body.onmousemove = function(e) {
                                    camera.rotate.x = e.pageY / window.innerHeight * 180 - 90;
                                    camera.rotate.y = e.pageX / window.innerWidth * 180 - 90;
                                    document.onmousedown = function() {
                                        camera.zoom = Math.random() * 1 + 1
                                    };
                                    document.onmouseup = function() {
                                        camera.zoom = 1
                                    };
                                };
                            </script>
                        </div>

                        <div class="poster" style="margin: 0px; display:none; ">
                            <div class="contents" style="height:95vh">
                                <h2 style="padding-top:20px; ">
                                    <span style=" font-size: 25px;">Beta Vendor Testers<br>
                                        <span style="font-size: 4rem; font-weight:800; ">Join Today</span> <br>
                                        Join VarsityMarket today and unlock a world of enhanced benefits and opportunities. <br>
                                        With expanded access to a wider network of buyers and sellers, increased visibility for your listings, advanced filtering options, priority customer support, and exclusive promotions and discounts,<br>

                                        upgrading will elevate your experience and maximize your selling potential within your university or college community. Don't miss out on this chance to take your VarsityMarket experience to the next level.<br>
                                        Join now and enjoy the advantages that come with being a valued vendor.
                                </h2>
                            </div>
                        </div>
                        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"></script>
                        <script>
                            document.addEventListener("DOMContentLoaded", () => {
                                const mainText = document.querySelector(".main-text");
                                const textBox = document.querySelector(".text-box");
                                const loopCheck = document.querySelector("#isLooping");
                                const layers = {
                                    topText1: document.querySelector(".top-1"),
                                    topText2: document.querySelector(".top-2"),
                                    topText3: document.querySelector(".top-3"),
                                    bottomText1: document.querySelector(".bottom-1"),
                                    bottomText2: document.querySelector(".bottom-2"),
                                    bottomText3: document.querySelector(".bottom-3"),
                                };

                                const animateLoop = (pause = false) => {
                                    const animations = [
                                        gsap.to(mainText, {
                                            duration: 1,
                                            scale: 1,
                                            repeat: -1,
                                            yoyo: true,
                                            ease: "power1.inOut",
                                            repeatDelay: 2
                                        }),
                                        gsap.to(layers.topText1, {
                                            duration: 2,
                                            opacity: 1,
                                            y: -20,
                                            repeat: -1,
                                            yoyo: true,
                                            repeatDelay: 1
                                        }),
                                        gsap.to(layers.topText2, {
                                            duration: 2,
                                            opacity: 1,
                                            y: -40,
                                            repeat: -1,
                                            yoyo: true,
                                            repeatDelay: 1
                                        }),
                                        gsap.to(layers.topText3, {
                                            duration: 2,
                                            opacity: 1,
                                            y: -60,
                                            repeat: -1,
                                            yoyo: true,
                                            repeatDelay: 1
                                        }),
                                        gsap.to(layers.bottomText1, {
                                            duration: 2,
                                            opacity: 1,
                                            y: 20,
                                            repeat: -1,
                                            yoyo: true,
                                            repeatDelay: 1
                                        }),
                                        gsap.to(layers.bottomText2, {
                                            duration: 2,
                                            opacity: 1,
                                            y: 40,
                                            repeat: -1,
                                            yoyo: true,
                                            repeatDelay: 1
                                        }),
                                        gsap.to(layers.bottomText3, {
                                            duration: 2,
                                            opacity: 1,
                                            y: 60,
                                            repeat: -1,
                                            yoyo: true,
                                            repeatDelay: 1
                                        }),
                                    ]

                                }

                                animateLoop()



                                //Text Input
                                const textInput = document.getElementById("text-input");
                                textInput.addEventListener("input", (event) => {
                                    const newText = event.target.value;
                                    Object.values(layers).forEach(element => element.textContent = newText);
                                    mainText.textContent = newText;
                                })

                                //Color Picker
                                const colorPickerText = document.getElementById("color-picker-text");
                                const colorPickerBg = document.getElementById("color-picker-bg");
                                colorPickerText.addEventListener("input", (event) => {
                                    const selectedColor = event.target.value;
                                    document.documentElement.style.setProperty('--text-color', selectedColor);
                                });
                                colorPickerBg.addEventListener("input", (event) => {
                                    const selectedColor = event.target.value;
                                    document.documentElement.style.setProperty('--background-color', selectedColor);
                                });
                            });
                        </script>

                        <div class="poster" style="background-image: url(https://images.unsplash.com/photo-1538582744018-3ff9e130b241?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);">
                            <div class="contents">
                                <h2 style="padding-top:20px; ">
                                    <span style=" font-size: 10px; filter: drop-shadow(2px 4px 6px black);">Beta Vendor Testers<br>
                                        <span style="font-size: 3rem;">Join Today</span> <br>
                                        Join VarsityMarket today and unlock a world of enhanced benefits and opportunities. <br>
                                        With expanded access to a wider network of buyers and sellers, increased visibility for your listings, advanced filtering options, priority customer support, and exclusive promotions and discounts,<br>

                                        upgrading will elevate your experience and maximize your selling potential within your university or college community. Don't miss out on this chance to take your VarsityMarket experience to the next level.<br>
                                        Join now and enjoy the advantages that come with being a valued vendor.
                                </h2>
                            </div>
                        </div>


                        <style>
                            .container-flyout p {
                                color: #6c2bd9;
                                font-family: Avenir Next, Helvetica Neue, Helvetica, Tahoma, sans-serif;
                                font-size: 12vmax;
                                font-weight: 700;
                            }

                            .container-flyout p span {
                                display: inline-block;
                                position: relative;
                                transform-style: preserve-3d;
                                perspective: 500;
                                -webkit-font-smoothing: antialiased;
                                color: #292908;
                            }

                            .container-flyout p span::before,
                            .container-flyout p span::after {
                                display: none;
                                position: absolute;
                                top: 0;
                                left: -1px;
                                transform-origin: left top;
                                transition: all ease-out 0.3s;
                                content: attr(data-text);
                            }

                            .container-flyout p span::before {
                                z-index: 1;
                                color: rgba(0, 0, 0, 0.2);
                                transform: scale(1.1, 1) skew(0deg, 20deg);
                            }

                            .container-flyout p span::after {
                                z-index: 2;
                                color: transparent;
                                text-shadow: -1px 0 1px #684da3, 1px 0 1px rgba(0, 0, 0, 0.8);
                                transform: rotateY(-40deg);
                            }

                            .container-flyout p span:hover::before {
                                transform: scale(1.1, 1) skew(0deg, 5deg);
                            }

                            .container-flyout p span:hover::after {
                                transform: rotateY(-10deg);
                            }

                            container-flyout p span+span {
                                margin-left: 0.3em;
                            }

                            @media (min-width: 20em) {
                                .container-flyout p {
                                    font-size: 2em;
                                }

                                .container-flyout p span::before,
                                .container-flyout p span::after {
                                    display: block;
                                }
                            }

                            @media (min-width: 30em) {
                                .container-flyout p {
                                    font-size: 3em;
                                }
                            }

                            @media (min-width: 40em) {
                                p {
                                    font-size: 5em;
                                }
                            }

                            @media (min-width: 60em) {
                                p {
                                    font-size: 8em;
                                }
                            }

                            .container-flyout {
                                display: flex;
                                align-items: center;
                                justify-content: center;
                            }
                        </style>


                        <div class="poster" style="background-image: url(https://cdn.varsitymarket.shop/img/timeline/cover-2024-11-arc.jpg);">
                            <div class="contents" style="height:95vh; background: linear-gradient(1deg, #121317, #ffffff00 344vh);">

                                <h2 style="padding-top:20px; ">
                                    <span style=" font-size: 15px;">Inviting Beta Testers<br>
                                        <h1 style="font-size: 3.5rem; font-weight: 800;">Crafted For Ambition</h1>
                                        <span>
                                            Join VarsityMarket today and unlock a world of enhanced benefits and opportunities. <br>
                                            With expanded access to a wider network of buyers and sellers, increased visibility for your listings, advanced filtering options, priority customer support, and exclusive promotions and discounts,<br>

                                            upgrading will elevate your experience and maximize your selling potential within your university or college community. Don't miss out on this chance to take your VarsityMarket experience to the next level.<br>
                                            Join now and enjoy the advantages that come with being a valued vendor.
                                        </span>
                                </h2>
                            </div>
                        </div>

                        <div class="footer">
                            <p class="signature" style="padding:10px; font-size:8px; ">This is property of Varsitymarket Technologies</p>
                            <p class="signature">Powered By <span class="credits">VARSITYMARKET</sapn>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</body>

<script>
    function openmenu() {
        let x = document.getElementById('myNav');
        x.style.width = 100 + '%';
    }

    function close_menu() {
        let x = document.getElementById('myNav');
        x.style.width = 0 + '%';
    }
</script>

</html> 