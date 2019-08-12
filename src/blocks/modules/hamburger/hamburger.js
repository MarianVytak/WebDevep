import $ from "jquery";

"use strict";

// Hamburger
var hamburger = $('.hamburger');
var menu = $('.menu');
var menuLink = $('.menu__list_item_link');
var body = $('body');
var overlay = $('.overlay');

hamburger.on('click', function(e){

    e.preventDefault();

    hamburger.toggleClass('hamburger-active');
    menu.toggleClass('active');
    body.toggleClass('hidden');
    overlay.toggleClass('active');

});

menuLink.on('click', function (e) {

    e.preventDefault();

    hamburger.removeClass('hamburger-active');
    menu.removeClass('active');
    body.removeClass('hidden');
    overlay.removeClass('active');

    var menuLinkScroll = $(this).attr('href'),
        menuLinkScrollBlock = ($(menuLinkScroll).offset().top) - 60;
    $('html, body').animate({
        scrollTop: menuLinkScrollBlock
    }, 2000);

});

body.on('click', '.overlay', function(){
    body.removeClass('active');
    overlay.removeClass('active');
    hamburger.removeClass('hamburger-active');
    menu.removeClass('active');
    body.removeClass('hidden');
});