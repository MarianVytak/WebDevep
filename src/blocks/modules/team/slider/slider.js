import $ from "jquery";
import "../../../../../node_modules/slick-carousel/slick/slick.min.js";


"use strict";

// Team slider
$('.team__list').slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                autoplay: false,
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1024,
            settings: {
                autoplay: false,
                arrows: false,
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});