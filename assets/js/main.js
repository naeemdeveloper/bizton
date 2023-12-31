(function ($) {
    "use strict";
   
    $(document).on('ready', function () {

        // mobile menu
        $('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "991.98",
            onePage: false
        });

        // data background 
        $("[data-background]").each(function () {
            $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
        });

    });

    // hero slider
    $('.hero-slider').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: -1,
        autoplay: true,
        autoplayHoverPause:true,
        autoplayTimeout: 5000,
        autoHeight:true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        items: 1,
        navText: [
            "<i class='fal fa-angle-left'></i>",
            "<i class='fal fa-angle-right'></i>"
        ],
        responsive: {
            0: {
                nav: false,
            },
            576: {
                nav: true,
            },
        }
    });

    // testimonial slider
    $('.testimonial-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayTimeout:3000,
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 2
            }
        }
    });

    // counter up
    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });

    // progress bar
    var progressBar = $('.progress');
    if(progressBar.length) {
        progressBar.each(function () {
            var Self = $(this);
            Self.appear(function () {
            var progressValue = Self.data('value');
            Self.find('.progress-bar').animate({
                width:progressValue+'%'           
            }, 1000);
            });
        })
    }

    // magnific popup init
    $(".popup-gallery").magnificPopup({
        delegate: '.popup-img',
        type: 'image',
        gallery: {
            enabled: true
        },
    });

    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // copyright date
    var date = new Date().getFullYear();
    $('#date').html(date);

    $(window).on('scroll', function () {

        // scroll to top
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 500) {
            $("#scroll-top").fadeIn('slow');
        } else {
            $("#scroll-top").fadeOut('slow');
        }

        // navbar fix
        const headerHeight = $(".header-top").outerHeight();
        if ($(this).scrollTop() > headerHeight) {
            $('.menu-area').addClass("fixed-top");
        } else {
            $('.menu-area').removeClass("fixed-top");
        }

    });  
    
    $(window).on('load', function () {

        // preloader
        $(".preloader").fadeOut("slow");

        // wow init
        new WOW().init();

        // scroll top
        $("#scroll-top").click(function () {
            $("html, body").animate({ scrollTop: 0 }, 1500);
            return false;
        });

    });	

})(jQuery);