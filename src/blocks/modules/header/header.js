import $ from "jquery";

"use strict";

// Header scroll events.
$(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    // Activate menu
    if (wScroll > 20) {
        $('.header').addClass('active');
    }
    else {
        $('.header').removeClass('active');
    }

});
$(window).scroll();

import "./navigation/navigation";