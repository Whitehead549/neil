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
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
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


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });
    
    document.addEventListener('DOMContentLoaded', (event) => {
        const playButton = document.querySelector('#playButton');
        const video = document.querySelector('#myVideo');
        
        if (playButton && video) {
            playButton.addEventListener('click', () => {
                if (video.paused) {
                    video.play();
                    playButton.textContent = 'Pause Video';
                } else {
                    video.pause();
                    playButton.textContent = 'Play Video';
                }
            });

            // IntersectionObserver to play/pause video when in/out of view
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (video.paused) {
                            video.play();
                            playButton.textContent = 'Pause Video';
                        }
                    } else {
                        if (!video.paused) {
                            video.pause();
                            playButton.textContent = 'Play Video';
                        }
                    }
                });
            }, { threshold: 0.5 }); // Trigger when 50% of the video is in view

            observer.observe(video);
        } else {
            console.error('Play button or video element not found');
        }
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

