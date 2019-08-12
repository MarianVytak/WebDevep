import $ from "jquery";

"use strict";

var expandBtn = $('.expand__btn');

expandBtn.on('click', function (e) {

    e.preventDefault();

    var expand = $(this).attr('href');
    var expandBtnText = $(expand).children('.expand__btn').children('.expand__btn_text').text();
    var expandContent = $(expand).children('.expand__content');
    expandContent.scrollTop(expandContent.get(0).scrollHeight);
    var scrollHeight = expandContent.scrollTop() + expandContent.height();
    expandContent.scrollTop(0);

     $(expand).toggleClass('active');

    if (expandBtnText === 'Развернуть') {
        $(this).children('.expand__btn_text').text('Свернуть');
        setTimeout(function(){
            expandContent.css({
                maxHeight: scrollHeight,
                transition: '.5s linear'
            });
        });
    } else if (expandBtnText === 'Свернуть') {
        $(this).children('.expand__btn_text').text('Развернуть');
        setTimeout(function(){
            expandContent.css({
                maxHeight: 100,
                transition: '.5s linear'
            });
        });
    }

    // On swipe event
    $('.portfolio__slider').on('afterChange', function () {
        $(expand).children('.expand__btn').children('.expand__btn_text').text('Развернуть');
        $(expand).removeClass('active');
        setTimeout(function(){
            expandContent.css({
                maxHeight: 100,
                transition: 'none'
            });
        });
    });
    $('.reviews__slider').on('afterChange', function () {
        $(expand).children('.expand__btn').children('.expand__btn_text').text('Развернуть');
        $(expand).removeClass('active');
        setTimeout(function(){
            expandContent.css({
                maxHeight: 100,
                transition: 'none'
            });
        });
    });

});