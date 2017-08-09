document.addEventListener("DOMContentLoaded", function(){
    "use strict";

    const   blocks = $('.block'),
            firstBlock = $('.firstBlock'),
            wrapper = $('.wrapper');

    if (blocks.length > 0) {
        var result = 0,
            scrolledHeight = 0;
        var sections = {};

        //calculate total height of all blocks
        var totalHeight = function() {
            result = 0;
            for (var i=0; i<blocks.length; i++) {
                result+=blocks[i].clientHeight;
                blocks[i].style.zIndex = blocks.length - i;

            }
            wrapper.css('height',result);
        };
        totalHeight();

        // function that allow event to happen in specific period of time
        function debounce(func, wait, immediate) {
            var timeout;
            return function () {
                var context = this, args = arguments;
                var later = function () {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        }


        var debouncedScroll = debounce(function() {
            var scrolled = (window.pageYOffset || document.documentElement.scrollTop) - scrolledHeight,
                translate = 'translate3d(0,-'+scrolled+'px,0)',
                active = $('.active'),
                rect = active[0].getBoundingClientRect(),
                prevSibling = active.prev('.block');

            if (!window.pageYOffset && !document.documentElement.scrollTop) {
                scrolledHeight = 0;
                scrolled = 0;
                blocks.removeClass('active');
                firstBlock.addClass('active').css('transform', 'translate3d(0,0,0');
            }
            // next block
            if (rect.bottom < 0 ) {
                var nextSibl = active.next('.block');
                scrolledHeight += $('.active')[0].offsetHeight;
                if (nextSibl.hasClass('block')) {
                    blocks.removeClass('active');
                    nextSibl.addClass('active');
                }
            }
            // prev block
            if (scrolled < 0 && $('.firstBlock.active').length > 0) {
                blocks.removeClass('active');
                firstBlock.addClass('active');
            } else if (scrolled < 0) {
                $('.active')[0].style.transform = 'translate3d(0,0,0)';
                if (prevSibling.hasClass('block')) {
                    blocks.removeClass('active');
                    prevSibling.addClass('active');
                    scrolledHeight -= prevSibling[0].offsetHeight;
                }
            }

            active[0].style.transform = translate;
        },1); // 1 is number in ms how often function can be executed

        blocks[0].className += ' active';
        window.onresize = function () {
            totalHeight();
        };
        window.onscroll = debouncedScroll;
        totalHeight();
    }
});
