import $ from "jquery";


"use strict";

// RoadMap toggle comment in mobile.
(function () {

    if ($(window).width() < 768) {

        var commentLink = $('.roadmap__item');

        $(commentLink).on('click', function () {
            $(this).children('.roadmap__comment').slideToggle();
            console.log(this);
        });

    }

})();


// The block "roadmap__comment" follows the cursor.
$(document).ready(function() {
    if ($(window).width() >= 1200) {

        $('.roadmap__item').mousemove(function(event) {

            var pos = $(this).offset();
            var pageX = event.pageX;
            var pageY = event.pageY;
            var x = pageX - pos.left + 1;
            var y = pageY - pos.top - 10;

            $(this).children('.roadmap__comment').css({
                'display' : 'block',
                'left' : x + 'px',
                'top' : y + 'px'});

            if (  pageX >= ($(window).width() - 300) ) {
                $(this).children('.roadmap__comment').addClass('left');
            } else {
                $(this).children('.roadmap__comment').removeClass('left');
            }

        });

        $('.roadmap__item').mouseout(function() {
            $(this).children('.roadmap__comment').hide();
        });

    }
});
