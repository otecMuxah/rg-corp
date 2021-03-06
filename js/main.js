$(document).ready(function () {
    var fired = 0,
        whiteHeader = 0;

    const
        tabletScreenWidth = 800,
        $hamburger = $('.hamburger'),
        $headNav = $('.header-nav'),
        $header = $('.header'),
        $closePopup = $('.button_close'),
        $openPopup = $('.support-price_button'),
        $popup = $('.support-price_popup-wrapper'),
        $mainBannerMore = $('.main-banner_more'),
        $mainBanner = $('.main-banner'),
        $window = $(window),
        $headNavDrop = $('.header-nav_item'),
        $headNavDropdown = $('.header-nav_link__dropdown'),
        $toTopButton = $('.back-to-top'),
        $parntersCarousel = $('.partners_list'),
        $testimonialsCarousel = $('.testimonials_list'),
        $mainBannerCarousel = $('.main-banner_outer'),
        $priceCarousel = $('.support-price_carousel'),
        $counter = $('.facts_list'),
        $singleTestimonial = $('.testimonials_list_single'),
        $breadcrumbs = $('.breadcrumbs');

    if ($parntersCarousel.length > 0) {
        $parntersCarousel.slick({
            accessibility: true,
            initialSlide: 1,
            slidesToShow: 7,
            slidesToScroll: 1,
            autoplay: true,
            infinite: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1140,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 3000,
                        speed: 1000,
                        infinite: true
                    }
                },
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 3000,
                        speed: 1000,
                        infinite: true
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 3000,
                        speed: 1000,
                        infinite: true
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 3000,
                        speed: 1000,
                        infinite: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 3000,
                        speed: 1000,
                        infinite: true
                    }
                },
                {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 3000,
                        speed: 1000,
                        infinite: true
                    }
                }
            ]
        });
    }


    if ($testimonialsCarousel.length > 0) {
        $testimonialsCarousel.slick({
            accessibility: true,
            initialSlide: 2,
            centerMode: true,
            centerPadding: '0',
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            responsive: [
                {
                    breakpoint: 1140,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        speed: 1000,
                        infinite: true
                    }
                },
                {
                    breakpoint: 850,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        speed: 1000,
                        infinite: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        speed: 1000,
                        infinite: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        speed: 1000,
                        infinite: true
                    }
                }
            ]
        });
    }

    if ($singleTestimonial.length > 0) {
        $singleTestimonial.slick({
            accessibility: false,
            slidesToShow: 1,
            slidesToScroll: 0,
            autoplay: false,
            infinite: false,
            centerMode: true,
            arrows: false
        });
    }


    if ($mainBannerCarousel.length > 0) {
        $mainBannerCarousel.slick({
            accessibility: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            infinite: true,
            dots: false,
            prevArrow: false,
            nextArrow: false,
            autoplaySpeed: 5000,
        });
    }
    if ($priceCarousel.length > 0) {
        $priceCarousel.slick({
            slidesToShow: 4,
            infinite: false,
            responsive: [
                {
                    breakpoint: 1140,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 300,
                        speed: 1000,
                        infinite: true
                    }
                },
                {
                    breakpoint: 850,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 300,
                        speed: 1000,
                        infinite: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 300,
                        speed: 1000,
                        infinite: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 300,
                        speed: 1000,
                        infinite: true
                    }
                }
            ]
        });
    }

    $(document).mouseup(function (e) {
        var container = $(".header-nav_item__dropdown");
        if (container.has(e.target).length === 0) {
            container.removeClass('header-nav_item__active header-nav_item__show-dropdown');
        }
    });

    $openPopup.on('click', function () {
        $('.support-price').addClass('support-price__showPopup')
    });

    $closePopup.on('click', function () {
        $('.support-price').removeClass('support-price__showPopup')
    });

    $headNavDrop.on('touchstart mouseenter', function () {
        $(this).closest('.header-nav_item').addClass('header-nav_item__active');
    });

    $headNavDrop.on('touchmove  mouseleave', function () {
        $(this).closest('.header-nav_item').removeClass('header-nav_item__active');
    });

    $headNavDropdown.on('click', function (e) {
        e.preventDefault();
        $('.header-nav_item').removeClass('header-nav_item__show-dropdown');
        $(this).closest('.header-nav_item').toggleClass('header-nav_item__show-dropdown');
    });

    $hamburger.on('click', function () {
        $(this).toggleClass('is-active');
        $('.header-nav').toggleClass('header-nav_visible');
    });

    $('.support-price_column:not(.support-price_column__names)').on('click', function () {
        $('.support-price_column').removeClass('support-price_column__active');
        $(this).addClass('support-price_column__active');
    });

    $('.blog-page_filter-icon, .blog-page_close-filter').on('click', function () {
        $('.blog-page_filter').toggleClass('blog-page_filter__active');
    });

    $mainBannerMore.on('click', function () {
        $('.partners').velocity("scroll", {
            offset: -60
        });
    });

    $toTopButton.on('click', function () {
        if ($('.firstBlock').length > 0) {
            $('body').velocity('scroll', {
                duration: 'slow'
            });
            setTimeout(function () {
                $('.block').removeClass('active');
                $('.firstBlock').addClass('active');
            }, 1100);
        } else {
            $('body').velocity('scroll', {
                duration: 'slow',
                easing: "spring"
            });
        }
    });

    // $.fn.isOnScreen = function () {
    //     var element = this[0];
    //     var bounds = element.getBoundingClientRect();
    //     return bounds.top < window.innerHeight && bounds.bottom > 0;
    // };

    function showElement() {
        var $count = $('.count');
        if (fired === 0 && $count.isOnScreen()) {
            fired = 1;
            $count.each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 800,
                    easing: 'swing',
                    step: function (now) {
                        if (now > 1000) {
                            var greater = true;
                            now = now / 1000;
                        }
                        var amount = Math.ceil(now);
                        if (greater) {
                            amount += 'K';
                        }
                        $(this).text(amount);
                    }
                });
            });
        }
    }

    if ($counter.length > 0) {
        $.fn.isOnScreen = function () {
            var element = this[0];
            var bounds = element.getBoundingClientRect();
            return bounds.top < window.innerHeight && bounds.bottom > 0;
        };

    }

    $window.resize($.throttle(250, function () {
        var viewportWidth = $(window).width();
        if (viewportWidth > tabletScreenWidth) {
            $hamburger.removeClass('is-active');
            $headNav.removeClass('header-nav_visible');
        }
    }));

    var callbackScroll = function () {
        if ($window.scrollTop() > $mainBanner.height()) {
            whiteHeader = 1;
            $header.addClass('header__fixed');
            $breadcrumbs.addClass('breadcrumbs__fixed');
            $('.js-header-button').removeClass('button__white button__white--inverted');
            $('.js-header-button').addClass('button__inverted');
            $mainBannerMore.addClass('hidden');
            $toTopButton.removeClass('hidden');
        } else {
            whiteHeader = 0;
            $header.removeClass('header__fixed');
            $breadcrumbs.removeClass('breadcrumbs__fixed');
            if ($('.js-header-button').hasClass('button__inverted') && window.location.pathname !== '/') {
                $('.js-header-button').removeClass('button__inverted');
                $('.header .button').addClass('button__white button__white--inverted');
            }
            $mainBannerMore.removeClass('hidden');
            $toTopButton.addClass('hidden');
        }
        if (fired == 0 && $counter.length > 0) {
            if ($counter.length > 0) {
                showElement()
            }
        }
    };
    $('.button_close').on('click', function (event) {
        event.preventDefault();
        $(event.currentTarget).parents('.support-price_popup-wrapper').find('.js-input').each(function (ind, el) {
            $(el).val('');
        });
        $(event.currentTarget).parents('.support-price_popup-wrapper').find('.js-error').each(function (ind, el) {
            $(el).text('');
        });
        $(event.currentTarget).parents('.support-price_popup-wrapper').removeClass('support-price__showPopup');
        $('#support-send-form').off('click');
    });
    if (window.location.pathname !== '/') {
        // $('.js-header-button').addClass('button__white button__white--inverted');
        $('.hamburger').addClass('hamburger__white');
    }
    var breadcrumbs = $('.breadcrumbs_item');
    if (breadcrumbs.length > 2) {
        breadcrumbs.slice(1, 2).find('a').on('click', function (event) {
            event.preventDefault();
            if ($('#page_our_solutions').length > 0) {
                window.location.href = '/#our_solutions';
            } else if ($('#page_openedx_services').length > 0) {
                window.location.href = '/#our_services';
            } else {
                window.location.href = $(event.currentTarget).attr('href');
            }
        });
    }
    ;
    $('.js-request-demo, .popup-list_close').on('click', function (event) {
        event.preventDefault();
        $('.js-request-demo-popup').toggleClass('support-price__showPopup');
    });
    var subMenuActiveParent = $('.js-submenu-active');
    if (subMenuActiveParent.length) {
        $(subMenuActiveParent).parents('li').addClass('header-nav_item__current')
    }

    window.addEventListener('scroll', $.throttle(500, callbackScroll));




// Update sliders on resize.
// We all do it: i.imgur.com/YkbaV.gif
    $(window).resize(function () {
        $('.ba-slider').each(function () {
            var cur = $(this);
            var width = cur.width() + 'px';
            cur.find('.resize img').css('width', width);
        });
    });

    function drags(dragElement, resizeElement, container) {

        // Initialize the dragging event on mousedown.
        dragElement.on('mousedown touchstart', function (e) {

            dragElement.addClass('draggable');
            resizeElement.addClass('resizable');

            // Check if it's a mouse or touch event and pass along the correct value
            var startX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;

            // Get the initial position
            var dragWidth = dragElement.outerWidth(),
                posX = dragElement.offset().left + dragWidth - startX,
                containerOffset = container.offset().left,
                containerWidth = container.outerWidth();

            // Set limits
            minLeft = containerOffset + 10;
            maxLeft = containerOffset + containerWidth - dragWidth - 10;

            // Calculate the dragging distance on mousemove.
            dragElement.parents().on("mousemove touchmove", function (e) {

                // Check if it's a mouse or touch event and pass along the correct value
                var moveX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;

                leftValue = moveX + posX - dragWidth;

                // Prevent going off limits
                if (leftValue < minLeft) {
                    leftValue = minLeft;
                } else if (leftValue > maxLeft) {
                    leftValue = maxLeft;
                }

                // Translate the handle's left value to masked divs width.
                widthValue = (leftValue + dragWidth / 2 - containerOffset) * 100 / containerWidth + '%';

                // Set the new values for the slider and the handle.
                // Bind mouseup events to stop dragging.
                $('.draggable').css('left', widthValue).on('mouseup touchend touchcancel', function () {
                    $(this).removeClass('draggable');
                    resizeElement.removeClass('resizable');
                });
                $('.resizable').css('width', widthValue);
            }).on('mouseup touchend touchcancel', function () {
                dragElement.removeClass('draggable');
                resizeElement.removeClass('resizable');
            });
            e.preventDefault();
        }).on('mouseup touchend touchcancel', function (e) {
            dragElement.removeClass('draggable');
            resizeElement.removeClass('resizable');
        });
    }

     $('.ba-slider').each(function () {
        var cur = $(this);
        // Adjust the slider
        var width = cur.width() + 'px';
        cur.find('.resize img').css('width', width);
        // Bind dragging events
        drags(cur.find('.handle'), cur.find('.resize'), cur);
    });

    // new slider
    $('.container').carousel({

      // the number of images to display
      num: 3,

      // max width of the active image
      maxWidth: 250,

      // min width of the active image
      maxHeight: 150,

      // enable auto play
      autoPlay: true,

      // autoplay interval
      showTime: 1000,

      // animation speed
      animationTime: 300,

      // 0.0 - 1.0
      scale: 0.8,

      // the distance between images
      distance: 150

    });
});
