$(function() {
    $('.subMenu a').eq(0).on('click', function() {
        $('.subMenu a').removeClass('on')
        $(this).addClass('on')
        $('.tab02').fadeOut(0)
        $('.tab01').fadeIn(0)
    })
    $('.subMenu a').eq(1).on('click', function() {
        $('.subMenu a').removeClass('on')
        $(this).addClass('on')
        $('#container ul li').fadeOut(0)
        $('.tab02').fadeIn(0)
    })
})