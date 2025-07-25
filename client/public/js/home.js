(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
          $('.nav-bar').addClass('scrolled');
          $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
          $('.nav-bar').removeClass('scrolled');
          $('.sticky-top').removeClass('shadow-sm').css('top', '0px');
        }
      });
    
    // Hero Header carousel
    $(".header-carousel").owlCarousel({
        items: 1,
        dots: false,
        nav : true
    });


    // attractions carousel
    $(".attractions-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fa fa-angle-right"></i>',
            '<i class="fa fa-angle-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            },
            1400:{
                items:4
            }
        }
    });


    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fa fa-angle-right"></i>',
            '<i class="fa fa-angle-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    const carouselTrack = document.getElementById('carousel-track');

    carouselTrack.addEventListener('animationend', () => {
      carouselTrack.style.animation = 'none';
      setTimeout(() => {
        carouselTrack.style.animation = 'slide 20s linear infinite';
      }, 0);
    });

    const carouselTracks = document.querySelectorAll('.carousel__track');
const firstTrack = carouselTracks[0];
const lastTrack = carouselTracks[carouselTracks.length - 1];

// Clone the first track and append it to the end
const firstTrackClone = firstTrack.cloneNode(true);
carouselTracks[carouselTracks.length - 1].parentNode.appendChild(firstTrackClone);

// Clone the last track and prepend it to the beginning
const lastTrackClone = lastTrack.cloneNode(true);
carouselTracks[0].parentNode.insertBefore(lastTrackClone, carouselTracks[0]);
})(jQuery);



