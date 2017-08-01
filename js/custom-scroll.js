document.addEventListener("DOMContentLoaded", function(){
    "use strict";
    var result = 0;
    var scrolledHeight = 0;
    var blocks = $('.block');
    blocks[0].className += ' active';
    var block1 = $('.block1');

    //calculate total height of all blocks
    var totalHeight = function() {
        result = 0;
        for (var i=0; i<blocks.length; i++) {
            result+=blocks[i].offsetHeight;
            blocks[i].style.zIndex = blocks.length - i;
        }
        $('.wrapper').css('height',result);
    };

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

    window.onresize = function () {
        totalHeight();
    };
    window.onscroll = function() {
        var active = $('.active');
        console.log(window.pageYOffset);
        console.log(document.documentElement.scrollTop);
        var scrolled = (window.pageYOffset || document.documentElement.scrollTop) - scrolledHeight;
        var translate = 'translate3d(0,-'+scrolled+'px,0)';
        var rect = active[0].getBoundingClientRect();
        if (!window.pageYOffset && !document.documentElement.scrollTop) {
            scrolledHeight = 0;
            scrolled = 0;
            console.log("nulled");
            blocks.removeClass('active');
            block1.addClass('active');
        }
        if (rect.bottom < 0 ) {
            var nextSibl = active.next('.block');
            scrolledHeight += $('.active')[0].offsetHeight;
            // blocks.css('transform', 'translate(0,0)');
            if (nextSibl.hasClass('block')) {
                blocks.removeClass('active');
                nextSibl.addClass('active');
            }

        }
        if (scrolled < 0) {
            console.log(scrolled);
            var prevSibling = active.prev('.block');
            $('.active')[0].style.transform = 'translate(0,0)';
            //blocks.css('transform', 'translate(0,0)');
            if (prevSibling.hasClass('block')) {
                blocks.removeClass('active');
                prevSibling.addClass('active');
                scrolledHeight -= prevSibling[0].offsetHeight;
            }


        } else if (scrolled < 0 && $('.block1.active').length > 0) {
            blocks.removeClass('active');
            block1.addClass('active');
        }

        active[0].style.transform = translate;
    };


    totalHeight();
    block1.style.transform = 'translate3d(0,0,0)';

});