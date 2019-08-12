import $ from "jquery";
import "../../../../node_modules/slick-carousel/slick/slick.min.js";


"use strict";

// Portfolio slider
$('.portfolio__slider').slick({
    arrows: true,
    dots: false,
    infinite: true,
    fade: true,
    speed: 500,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                arrows: true,
                prevArrow: $('.portfolio__arrow_prev'),
                nextArrow: $('.portfolio__arrow_next'),
                dots: true,
                appendDots: $('.portfolio__dots'),
            }
        }
    ]
});