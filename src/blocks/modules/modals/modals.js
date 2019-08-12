import $ from 'jquery';

"use strict";

// Open modals fancybox

$('#modal-call-btn').on('click', function(e) {
    e.preventDefault();
    $.fancybox.open({
        src  : '.modal-call',
        type : 'inline'
    });

});

$('#modal-intro-btn').on('click', function(e) {
    e.preventDefault();
    $.fancybox.open({
        src  : '.modal-intro',
        type : 'inline'
    });

});

$('#modal-tariff-btn').on('click', function(e) {
    e.preventDefault();
    $.fancybox.open({
        src  : '.modal-tariff',
        type : 'inline'
    });

});

$('#modal-faq-btn').on('click', function(e) {
    e.preventDefault();
    $.fancybox.open({
        src  : '.modal-faq',
        type : 'inline'
    });

});

$('.tariffs__item_btn .btn').on('click', function(e) {
    e.preventDefault();
    $.fancybox.open({
        src  : '.modal-ordering',
        type : 'inline'
    });

});
