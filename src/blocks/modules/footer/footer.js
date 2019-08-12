import $ from 'jquery';

"use strict";

$('.logo').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 2000);
});