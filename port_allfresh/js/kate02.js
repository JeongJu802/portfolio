$(function() {
    $('.subMenu a').eq(0).on('click', function() {
        $('.subMenu a').removeClass('on')
        $(this).addClass('on')
        $('#container ul li').fadeIn(0)
    })
    $('.subMenu a').eq(1).on('click', function() {
        $('.subMenu a').removeClass('on')
        $(this).addClass('on')
        $('#container ul li').fadeOut(0)
        $('.tab01').fadeIn(0)
    })
    $('.subMenu a').eq(2).on('click', function() {
        $('.subMenu a').removeClass('on')
        $(this).addClass('on')
        $('#container ul li').fadeOut(0)
        $('.tab02').fadeIn(0)
    })
    $('.subMenu a').eq(3).on('click', function() {
        $('.subMenu a').removeClass('on')
        $(this).addClass('on')
        $('#container ul li').fadeOut(0)
        $('.tab03').fadeIn(0)
    })
    $('.subMenu a').eq(4).on('click', function() {
        $('.subMenu a').removeClass('on')
        $(this).addClass('on')
        $('#container ul li').fadeOut(0)
        $('.tab04').fadeIn(0)
    })
    $('.subMenu a').eq(5).on('click', function() {
        $('.subMenu a').removeClass('on')
        $(this).addClass('on')
        $('#container ul li').fadeOut(0)
        $('.tab05').fadeIn(0)
    })
})