document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    var blocks = $('.block'),
        wrapper = $('.wrapper'),
        blocksObj = {},
        result = 0,
        scrolledHeight = 0,
        activeBlock = 0;
    // function that allow event to happen in specific period of time
    function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this,
                args = arguments;
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
    if (blocks.length > 0) {
       
        //function to calculate total height of all blocks
        var totalHeight = function () {
            result = 0;
            for (var i = 0; i < blocks.length; i++) {
                result += blocks[i].offsetHeight;
                blocks[i].style.zIndex = blocks.length - i;
                $(blocks[i]).addClass('block' + i);
                blocksObj[i] = result;
            }
            wrapper.css('height', result+200);
        };
         //calculate total height of all blocks
        totalHeight();
        //debounced scroll function
        var scrollEffect = debounce(function () {
            var scrolled = window.pageYOffset || document.documentElement.scrollTop, // pixels scrolled from top of document
                scrolledBlock = Math.abs(scrolled - scrolledHeight), 
                translate = 'translate3d(0,-' + scrolledBlock + 'px,0)',
                active = $('.active'),
                viewportHeight = window.innerHeight,
                currentBlockHeight = blocksObj[activeBlock] - (blocksObj[activeBlock - 1] || 0);
            var nextBlock = $('.active').next('.block');
            //Condition to switch to next block
            if (scrolled >= blocksObj[activeBlock]) {
                scrolledHeight = blocksObj[activeBlock];
                translate = 'translate3d(0,-' + currentBlockHeight + 'px,0)';
                active[0].style.transform = 'translate3d(0,-' + currentBlockHeight + 'px,0)';
                activeBlock++;
                blocks.removeClass('active');
                $('.block' + activeBlock).addClass('active');
                
            } else if (scrolled <= scrolledHeight && activeBlock && scrolled < blocksObj[activeBlock - 1]) { //Condition to switch to prev block
                translate = 'translate3d(0,0,0)';
                active[0].style.transform = 'translate3d(0,0,0)';
                scrolledHeight = blocksObj[activeBlock - 2];
                if (activeBlock > 0) {
                    activeBlock--;
                }
                if (activeBlock === 0) {
                    scrolledHeight = 0;
                }
                blocks.removeClass('active');
                $('.block' + activeBlock).addClass('active');
            }
            //opacity implementation
            if (nextBlock.hasClass('js-opacity') && (currentBlockHeight - scrolledBlock) < viewportHeight) {
                var percentScrolled = (currentBlockHeight - scrolledBlock)/viewportHeight;
                $('.js-opacity-layer').css('opacity', percentScrolled);
                if (percentScrolled <= 0) {

                }
            }
            //sliding implementation
            if (nextBlock.hasClass('js-sliding') && (currentBlockHeight - scrolledBlock) < viewportHeight) {
                var percentScrolled = (currentBlockHeight - scrolledBlock)/viewportHeight;
                nextBlock.find('.solutions-banner_image-wrapper').css('transform','translate3d(-' + percentScrolled*100 + '%,0,0)');
                nextBlock.find('.monitor-block_text-wrapper').css('transform','translate3d(' + percentScrolled*100 + '%,0,0)');
            }
            
            active[0].style.transform = translate;
        }, 10); // 1 is number in ms how often function can be executed

        blocks[0].className += ' active';

        window.onresize = function () {
            totalHeight();
        };

        window.onscroll = scrollEffect;
        totalHeight();
    }
});
