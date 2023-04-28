$(function() {
    //nav
    $('.navCate > li').on('mouseover', function() {
        $(this).find('div').fadeIn(0)
    })
    $('.navCate > li').on('mouseleave', function() {
        $(this).find('div').fadeOut(0)
    })

    //header
    var $win = $(window)
    $win.on('scroll', function() {
        //윈도우 스크롤양을 확인
        var scrollTop = $win.scrollTop()

        //scrollTop값을 정수화
        var scroll = Math.floor(scrollTop);
        if (scroll >= 100) {
            $('.popupEvent').addClass('shrink')
            $('header').addClass('shrink')
            $('header .inner').addClass('shrink')
            $('header .topHeader').addClass('shrink')
            $('.quickMenu').addClass('shrink')
        }else {
            $('.popupEvent').removeClass('shrink')
            $('header').removeClass('shrink')
            $('header .inner').removeClass('shrink')
            $('header .topHeader').removeClass('shrink')
            $('.quickMenu').removeClass('shrink')
        }
    });
    
    //intro
    $('#mainVisual p').addClass('shrink')
    $('#mainVisual h2').delay(1000).addClass('shrink')

    //tabMenu
    $('.sortingMenu a').on('click', function() {
        $('.sortingMenu a').removeClass('on')
        $(this).addClass('on')
    })
})