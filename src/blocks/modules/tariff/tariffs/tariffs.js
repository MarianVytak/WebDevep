import $ from "jquery";
import "../../../../../node_modules/slick-carousel/slick/slick.min.js";


"use strict";

// Tariff slider
$('.tariffs__list').slick({
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: true,
                dots: true,
                adaptiveHeight: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});