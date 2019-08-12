import $ from "jquery";

"use strict";

//var accordionLink = $('.accordion__title');
var accordionItem = $('.accordion__item');

accordionItem.on('click', function () {
    if (!$(this).hasClass('active')) {
        accordionItem.removeClass('active');
        accordionItem.children('.accordion__content').slideUp();
    }
    $(this).toggleClass('active');
    $(this).children('.accordion__content').slideToggle();
});