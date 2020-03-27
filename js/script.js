$(document).ready(function () {

    $('.tabs-item').click(function (e) { 
        e.preventDefault();
        this
        $('.tabs-item-active').removeClass('tabs-item-active');
        $(this).toggleClass('tabs-item-active'); 
        $('.bounce').removeClass('bounce')
        if ($(this).hasClass('bookmark')) {
            $(this).toggleClass('tada')
        } else { $('.visible').removeClass('visible')
        $($(this).attr('href')).toggleClass('visible')}

    });
    $('.subscribe-button').click(function (e) { 
        e.preventDefault();
    });
});