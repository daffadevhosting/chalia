$(document).ready(function() {
    "use strict";

    // ===========Featured Owl Carousel============
    var objowlcarousel = $(".owl-carousel-featured");
    if (objowlcarousel.length > 0) {
        objowlcarousel.owlCarousel({
            responsive: {
                0: {
                    items: 2,
                },
                600: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: 5,
                },
                1200: {
                    items: 5,
                },
            },
            lazyLoad: true,
            pagination: false,
            loop: true,
			dots: false,
            autoPlay: true,
            navigation: false,
            stopOnHover: true,
            nav: false,
            navigationText: ["<i class='mdi mdi-chevron-left'></i>", "<i class='mdi mdi-chevron-right'></i>"]
        });
    }

    // ===========Category Owl Carousel============
    var objowlcarousel = $(".owl-carousel-category");
    if (objowlcarousel.length > 0) {
        objowlcarousel.owlCarousel({
            responsive: {
                0: {
                    items: 3,
                },
                600: {
                    items: 5,
                    nav: false
                },
                1000: {
                    items: 8,
                },
                1200: {
                    items: 8,
                },
            },
            items: 8,
            lazyLoad: true,
            pagination: false,
            loop: true,
			dots: false,
            autoPlay: 2000,
            navigation: false,
            stopOnHover: true,
            nav: true,
            navigationText: ["<i class='mdi mdi-chevron-left'></i>", "<i class='mdi mdi-chevron-right'></i>"]
        });
    }

    // ===========Right Sidebar============
    $('[data-toggle="offcanvas"]').on('click', function() {
        $('body').toggleClass('toggled');
    });

    // ===========Slider============
    var mainslider = $(".owl-carousel-slider");
    if (mainslider.length > 0) {
        mainslider.owlCarousel({
            items: 1,
            dots: false,
            lazyLoad: true,
            pagination: true,
            autoPlay: 4000,
            loop: true,
            singleItem: true,
            navigation: false,
            stopOnHover: true,
            nav: true,
            navigationText: ["<i class='mdi mdi-chevron-left'></i>", "<i class='mdi mdi-chevron-right'></i>"]
        });
    }

    // ===========Select2============
    $('select').select2();

    // ===========Tooltip============
    $('[data-toggle="tooltip"]').tooltip()

    // ===========Single Items Slider============   
    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    sync1.owlCarousel({
        singleItem: true,
        items: 1,
        slideSpeed: 1000,
        pagination: false,
        navigation: false,
        autoPlay: 2500,
		dots: false,
        nav: true,
        navigationText: ["<i class='mdi mdi-chevron-left'></i>", "<i class='mdi mdi-chevron-right'></i>"],
        afterAction: syncPosition,
        responsiveRefreshRate: 200,
    });
    sync2.owlCarousel({
        items: 5,
        navigation: false,
        dots: false,
        pagination: false,
        nav: true,
        navigationText: ["<i class='mdi mdi-chevron-left'></i>", "<i class='mdi mdi-chevron-right'></i>"],
        responsiveRefreshRate: 100,
        afterInit: function(el) {
            el.find(".owl-item").eq(0).addClass("synced");
        }
    });

    function syncPosition(el) {
        var current = this.currentItem;
        $("#sync2")
            .find(".owl-item")
            .removeClass("synced")
            .eq(current)
            .addClass("synced")
        if ($("#sync2").data("owlCarousel") !== undefined) {
            center(current)
        }
    }
    $("#sync2").on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).data("owlItem");
        sync1.trigger("owl.goTo", number);
    });

    function center(number) {
        var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
        var num = number;
        var found = false;
        for (var i in sync2visible) {
            if (num === sync2visible[i]) {
                var found = true;
            }
        }
        if (found === false) {
            if (num > sync2visible[sync2visible.length - 1]) {
                sync2.trigger("owl.goTo", num - sync2visible.length + 2)
            } else {
                if (num - 1 === -1) {
                    num = 0;
                }
                sync2.trigger("owl.goTo", num);
            }
        } else if (num === sync2visible[sync2visible.length - 1]) {
            sync2.trigger("owl.goTo", sync2visible[1])
        } else if (num === sync2visible[0]) {
            sync2.trigger("owl.goTo", num - 1)
        }
    }
    
    $("body").on("contextmenu",function(e){
        return false;
    });
    $(document).keydown(function(e){
         if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)){
           return false;
         }
         if(e.which === 123){
             return false;
         }
         if(e.metaKey){
             return false;
         }
         //document.onkeydown = function(e) {
         // "I" key
         if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
             return false;
         }
         // "J" key
         if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
             return false;
         }
         // "S" key + macOS
         if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
             return false;
         }
         if (e.keyCode == 224 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
             return false;
         }
         // "U" key
         if (e.ctrlKey && e.keyCode == 85) {
            return false;
         }
         // "F12" key
         if (event.keyCode == 123) {
            return false;
         }
    });
	
$(".like-btn").click(function(){$(this).toggleClass("clicked"),event.preventDefault()}),$(".fav_btn span").click(function(){var a=$(this).attr("id");$(this).hasClass("clicked")?localStorage.setItem(a,"true"):localStorage.removeItem(a,"true")}),$(".fav_btn span").each(function(){var a=$(this).attr("id");"true"==localStorage.getItem(a)?$(this).addClass("clicked"):$(this).removeClass("clicked")})

});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-187631685-1', 'auto');
ga('send', 'pageview');
