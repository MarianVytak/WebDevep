import $ from "jquery";

"use strict";

$(window).on('load', function () {

    var offsetServices = $('.services').offset().top;
    var offsetTeam = $('.services').offset().top;

    $(window).scroll(function () {
        if ($(this).scrollTop() < offsetServices - 20 || $(this).scrollTop() > offsetTeam - 20) {
            $('.navigation__list_item').removeClass('active');
        }
    });

    $('.navigation__list').scrollspy({
        offset: 0,
        animate: true
    });

});