import $ from 'jquery';
import "../../../../node_modules/Scrollspy/scrollspy.min";

"use strict";

$(window).on('load', function () {

    $('.sidemenu').scrollspy({
        offset: 0,
        animate: true
    });

    var sideMenuLink = $('.sidemenu__item_link');
    sideMenuLink.unbind('click', function (e) {
        e.preventDefault();
        var sideMenuLinkScroll = $(this).attr('href'),
            sideMenuLinkScrollBlock = ($(sideMenuLinkScroll).offset().top);
        $('html, body').animate({
            scrollTop: sideMenuLinkScrollBlock
        }, 2000);
    });

});
