$(document).ready(function () {

    $('.tabs-item').click(function (e) { 
        e.preventDefault();
        this
        $(this).toggleClass('tabs-item-active'); 
        $('.tada').removeClass('tada')
        if ($(this).hasClass('bookmark')) {
            $(this).toggleClass('tada')
        } else { $('.visible').removeClass('visible')
        $($(this).attr('href')).toggleClass('visible')
        $('.tabs-item-active').removeClass('tabs-item-active');}

    });
    $('.subscribe-button').click(function (e) { 
        e.preventDefault();
    });
});