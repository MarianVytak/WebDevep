import $ from "jquery";

"use strict";

// Tabs
$(document).ready(function() {

    var tab = $('.tabs-link');
    var tabLink = '.tabs-link';
    var tabContent = '.tabs-content';

    tab.on('click', function (e) {
        e.preventDefault();

        var thisTab = $(this).attr('href');
        var thisContent = $(this).attr('data-target');

        $(thisContent + ' ' + tabLink).removeClass('active');
        $(thisContent + ' ' + tabContent).removeClass('active');
        $(this).addClass('active');
        $(thisContent + ' ' + thisTab).addClass('active');

        $('.tariffs__list').slick('reinit');

    });

});