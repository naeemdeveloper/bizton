(function ($) {
    "use strict";
   
    $(document).on('ready', function () {

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
        items: 1,
        navText: [
            "<i class='far fa-long-arrow-left'></i>",
            "<i class='far fa-long-arrow-right'></i>"
        ],
    });

    // testimonial slider
    $('.testimonial-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 1
            },
            991: {
                items: 2
            }
        }
    });

    // partner slider
    $('.partner-slider').owlCarousel({
        loop: true,
        margin: 50,
        nav: false,
        navText: [
            "<i class='icofont-long-arrow-left'></i>",
            "<i class='icofont-long-arrow-right'></i>"
        ],
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });

    // header search
    if ($('.search-box-outer').length) {
        $('.search-box-outer').on('click', function () {
            $('body').addClass('search-active');
        });
        $('.close-search').on('click', function () {
            $('body').removeClass('search-active');
        });
    }

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
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass("fixed-top");
        } else {
            $('.navbar').removeClass("fixed-top");
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