document.addEventListener("DOMContentLoaded", function () {
    const $carousel = $('.carousel3d');
    const $bgCarousel = $('.background-carousel');

    $carousel.slick({
        accessibility: true,
        initialSlide: 1,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        infinite: false,
        autoplaySpeed: 3000,
        centerMode: true,
        asNavFor: '.background-carousel'
    });

    $bgCarousel.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        infinite: false,
        asNavFor: '.carousel3d'
    });

    $carousel.on('init', (slick) => {
        const $slickActive = $('.carousel3d .slick-center');

        $slickActive.css({'transform': 'scale(1)', 'transition': '0.2s', 'z-index': '10'});
        $slickActive.prevAll().css('transform', 'scale(0.4)');
        $slickActive.nextAll().css('transform', 'scale(0.4)');
        $slickActive.prev().css('transform', 'scale(0.7)');
        $slickActive.next().css('transform', 'scale(0.7)');
    });

    $carousel.on('afterChange', function (event, slick, currentSlide, nextSlide) {
        const $slickActive = $('.carousel3d .slick-center');

        $slickActive.css({'transform': 'scale(2)', 'transition': '0.2s', 'z-index': '10'});
        $slickActive.prevAll().css({'transform': 'scale(0.8)', 'transition': '0.2s', 'z-index': '8'});
        $slickActive.nextAll().css({'transform': 'scale(0.8)', 'transition': '0.2s', 'z-index': '8'});
        $slickActive.prev().css({'transform': 'scale(1) translateX(-30%)', 'transition': '0.2s', 'z-index': '9'});
        $slickActive.next().css({'transform': 'scale(1) translateX(30%)', 'transition': '0.2s', 'z-index': '9'});
    });

    $carousel.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        const $slickActive = $('.carousel3d .slick-center');

        $slickActive.css({'transform': 'scale(2)', 'transition': '0.2s', 'z-index': '10'});
        $slickActive.prevAll().css({'transform': 'scale(0.8)', 'transition': '0.2s', 'z-index': '8'});
        $slickActive.nextAll().css({'transform': 'scale(0.8)', 'transition': '0.2s', 'z-index': '8'});
        $slickActive.prev().css({'transform': 'scale(1) translateX(-30%)', 'transition': '0.2s', 'z-index': '9'});
        $slickActive.next().css({'transform': 'scale(1) translateX(30%)', 'transition': '0.2s', 'z-index': '9'});
    });


});