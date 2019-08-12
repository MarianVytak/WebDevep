import $ from "jquery";
import "../../../../node_modules/slick-carousel/slick/slick.min.js";


"use strict";

const customerSlider = $('.customers__list');

// Customers slider
customerSlider.slick({
    arrows: false,
    dots: false,
    infinite: true,
    speed: 8000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        // {
        //     breakpoint: 9999,
        //     settings: "unslick"
        // },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                autoplay: false,
                dots: true,
                speed: 500,
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                autoplay: false,
                dots: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
