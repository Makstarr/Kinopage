$(document).ready(function () {

    $('.tabs-item').click(function (e) { 
        e.preventDefault();
        $('.tada').removeClass('tada')
        if ($(this).hasClass('bookmark')) {
            $(this).toggleClass('tada')
        } else { 
            $('.visible').removeClass('visible');
            $($(this).attr('href')).toggleClass('visible');
            $(this).toggleClass('tabs-item-active');
            $('.tabs-item-active').removeClass('tabs-item-active')}

    });
    $('.subscribe-button').click(function (e) { 
        e.preventDefault();
    });
});