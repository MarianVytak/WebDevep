import $ from "jquery";
import "../../../../../node_modules/slick-carousel/slick/slick.min.js";
import "../../../../js/import/libs/waypoints.js";
import "../../../../../node_modules/jquery.counterup/jquery.counterup.min.js";

"use strict";

// Achievement slider
$('.achievement').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


// Achievement counter
$(document).ready(function () {

    if ($(window).width() >= 1200) {
        $('.slick-active .counter').counterUp({
            time: 1000,
            beginAt: 0
        });
    }

    // On swipe event
    // $('.achievement').on('afterChange', function(){
    //     $('.slick-active .counter').counterUp({
    //         time: 1000,
    //         beginAt: 0
    //     });
    // });

});