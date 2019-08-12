import $ from "jquery";
import "../../../../../node_modules/slick-carousel/slick/slick.min.js";


"use strict";

// Reviews slider
$('.reviews__slider').slick({
    arrows: true,
    prevArrow: $('.reviews__arrow_prev'),
    nextArrow: $('.reviews__arrow_next'),
    dots: true,
    appendDots: $('.reviews__dots'),
    adaptiveHeight: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1024,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});