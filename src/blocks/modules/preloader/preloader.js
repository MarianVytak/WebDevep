import $ from "jquery";

"use strict";

$(window).on('load', function () {
    var preloader = $('.preloader'),
        loader = preloader.find('.loader');
    loader.fadeOut();
    preloader.delay(350).fadeOut('slow');
});