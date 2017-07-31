document.addEventListener("DOMContentLoaded", function(){
    "use strict";
    var result = 0;
    var scrolledHeight = 0;
    var blocks = $('.block');
    blocks[0].className += ' active';

    //calculate total height of all blocks
    var totalHeight = function() {
        var blocks = $('.block');
        result = 0;
        // console.log(blocks);
        for (var i=0; i<blocks.length; i++) {
            result+=blocks[i].offsetHeight;
            blocks[i].style.zIndex = blocks.length - i;
        }
        $('.wrapper').css('height',result);
    };

    totalHeight();


    window.onresize = function () {
        totalHeight();
    };
    window.onscroll = function() {
        var active = $('.active');
        // console.log(scrolledHeight);
        var scrolled = (window.pageYOffset || document.documentElement.scrollTop) - scrolledHeight;
        // console.log("Scrolled = "+scrolled);
        var translate = 'translate(0,-'+scrolled+'px)';
        var rect = active[0].getBoundingClientRect();

        if (rect.bottom <= 0 ) {
            var nextSibl = active.next('.block');
            // console.log("Plus = "+$('.active')[0].offsetHeight);
            scrolledHeight += $('.active')[0].offsetHeight;
            $('.active')[0].style.transform = 'translate(0,0)';
            blocks.removeClass('active');
            // active.style.transform = 'translate(0,-100%)';
            nextSibl.addClass('active');

            rect = $('.active')[0].getBoundingClientRect();
        }
        if (scrolled < 0 && $('.block1.active').length !== 1) {
            var prevSibling = active.prev('.block');
            $('.active')[0].style.transform = 'translate(0,0)';
            blocks.removeClass('active');
            prevSibling.addClass('active');
            // console.log("Minus = "+prevSibling[0].offsetHeight);
            scrolledHeight -= prevSibling[0].offsetHeight;
            rect = $('.active')[0].getBoundingClientRect();
        }
        active[0].style.transform = translate;
        // console.log(rect);
        // active.style.transform = translate;
    };
});