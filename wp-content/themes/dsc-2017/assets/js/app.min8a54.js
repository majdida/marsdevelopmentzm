function smoothScroll(e){if(e.length)return jQuery("html, body").animate({scrollTop:e.offset().top-160},1e3),!1}!function(o){o(document).ready(function(){var e;o(document).bind("contextmenu",function(e){return!1}),o("img").bind("dragstart",function(e){e.preventDefault()}),window.sr=ScrollReveal({distance:"60px",duration:1e3,opacity:.35,scale:1}),sr.reveal(".content-1col-bg .component-bg"),sr.reveal(".content-1col-bg .component-bg .content-wrapper"),sr.reveal(".content-2col-image .image-col"),sr.reveal(".news-grid .flex-col",{distance:"30px",duration:750,opacity:0},250),sr.reveal(".cta"),sr.reveal(".cta .cta-border"),sr.reveal(".cta .subheading"),sr.reveal(".cta .cta-border p",{duration:1500}),sr.reveal(".hero-image-bg",{distance:"-20px",duration:1500,opacity:0}),sr.reveal(".hero-image-caption h1",{delay:1500,distance:"20px",duration:1e3,opacity:0}),sr.reveal(".hero-image-caption .hero-image-text",{delay:2e3,distance:"-20px",duration:1e3,opacity:0}),sr.reveal("body.home #menu-main-menu > li",{delay:2500,distance:"-10px",duration:600,opacity:0},350),sr.reveal(".logo-grid"),sr.reveal(".logo-grid .logo-item",{delay:400,distance:"20px",duration:800,opacity:0},400),sr.reveal(".logo-grid .btn",{distance:"-20px",delay:800,opacity:0}),sr.reveal(".testimonial-grid .testimonial-wrapper",{distance:"70px",duration:900,opacity:0},400),o('a[href*="#"]:not([href="#"])').click(function(){var e;if(!o(this).hasClass("no-scroll")&&(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname))return smoothScroll(e=(e=o(this.hash)).length?e:o("[name="+this.hash.slice(1)+"]"))}),window.location.hash&&(e=window.location.hash,smoothScroll(o(e)))})}(jQuery),function(o){"use strict";o(document).ready(function(){var e=o(".news-filter");e.select2({minimumResultsForSearch:1/0}),e.on("select2:select",function(e){window.location=o(this).val()})})}(jQuery),function(e){"use strict";e(document).ready(function(){e(".magnific-video").magnificPopup({mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1,type:"iframe",iframe:{patterns:{youtube:{index:"youtube.com/",id:"v=",src:"https://www.youtube.com/embed/%id%?rel=0&autoplay=1"},youtubeshare:{index:"youtu.be/",id:"/",src:"https://www.youtube.com/embed/%id%?rel=0&autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"}}}})})}(jQuery),function(o){"use strict";o(document).ready(function(){var e=o(".gallery-filter");e.select2({minimumResultsForSearch:1/0}),e.on("select2:select",function(e){window.location=o(this).val()})}),o(".single-gallery-image").magnificPopup({delegate:"a",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-img-mobile",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.'}});var i=o.magnificPopup.instance;o("a.dsc-gallery-image").click(function(e){setTimeout(function(){o(".mfp-container").swipe({swipeLeft:function(e,o,n,t,a){console.log("swipe right"),i.next()},swipeRight:function(e,o,n,t,a){console.log("swipe left"),i.prev()}})},100)})}(jQuery),function(o){"use strict";o(document).ready(function(){var e={timeout:400,over:function(){"none"===o(".navbar-toggle").css("display")&&(o(this).siblings().children(".dropdown-menu").hide(),o(this).find(".dropdown-menu").first().slideDown(300))},out:function(){"none"===o(".navbar-toggle").css("display")&&o(this).find(".dropdown-menu").first().slideUp(300)}};o("#menu-main-menu .dropdown").hoverIntent(e),o("#menu-main-menu a.dropdown-toggle").click(function(e){"#"===o(this).attr("href")&&e.preventDefault()}),o("#menu-main-menu .dropdown").on("show.bs.dropdown",function(){if("none"===o(".navbar-toggle").css("display"))return"#"!=(url=o(this).attr("href"))&&(window.location.href=url),!1}),o(".header #navbar-collapse").on("show.bs.collapse",function(){o(".header").removeClass("mobile-menu-closed"),o(".header").addClass("mobile-menu-open"),o("body").removeClass("mobile-menu-closed"),o("body").addClass("mobile-menu-open")}),o(".header #navbar-collapse").on("hide.bs.collapse",function(){o(".header").removeClass("mobile-menu-open"),o(".header").addClass("mobile-menu-closed"),o("body").removeClass("mobile-menu-open"),o("body").addClass("mobile-menu-closed")})}),o(window).scroll(function(){50<=o(this).scrollTop()?o("#return-to-top").fadeIn(200):o("#return-to-top").fadeOut(200)}),o("#return-to-top").click(function(){o("body,html").animate({scrollTop:0},500)})}(jQuery),function(e){"use strict";e(document).ready(function(){e(".sky-carousel").owlCarousel({loop:!0,responsiveClass:!0,items:1,autoplay:!0,autoplayTimeout:5e3,smartSpeed:1e3,nav:!0,dots:!0})})}(jQuery),function(e){"use strict";e(document).ready(function(){e(".dsc-image-carousel").owlCarousel({animateOut:"fadeOut",loop:!0,responsiveClass:!0,items:1,autoplay:!1,autoplayTimeout:5e3,smartSpeed:1e3,nav:!0,navText:['<span class="simple-icon-arrow-left"></span>','<span class="simple-icon-arrow-right"></span>'],dots:!0})})}(jQuery),function(e){"use strict";e(document).ready(function(){e(".testimonials-slider").owlCarousel({loop:!0,responsiveClass:!0,items:1,autoplay:!0,autoplayTimeout:5e3,smartSpeed:1e3,nav:!1,dots:!1})})}(jQuery);