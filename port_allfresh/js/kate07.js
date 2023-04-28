$(function() {
    
    //nav
    $('.navCate > li').on('mouseover', function() {
        $(this).find('div').fadeIn(0)
    })
    $('.navCate > li').on('mouseleave', function() {
        $(this).find('div').fadeOut(0)
    })

    $('#mainVisual img').addClass('shrink')
    $('#mainVisual h2').addClass('shrink')
    $('#mainVisual h3').addClass('shrink')
    $('#mainVisual .desc').addClass('shrink')
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
            $('#mainVisual .inner').addClass('shrink')
        }else {
            $('.popupEvent').removeClass('shrink')
            $('header').removeClass('shrink')
            $('header .inner').removeClass('shrink')
            $('header .topHeader').removeClass('shrink')
            $('.quickMenu').removeClass('shrink')
            $('#mainVisual .inner').removeClass('shrink')
        }
        if (scroll >= 700) {
            $('.cont01 img').addClass('shrink')
        }else {
            $('.cont01 img').removeClass('shrink')
        }
        if (scroll >= 800) {
            $('.cont01 h3').addClass('shrink')
        }else {
            $('.cont01 h3').removeClass('shrink')
        }
        if (scroll >= 900) {
            $('.cont01 .title').addClass('shrink')
        }else {
            $('.cont01 .title').removeClass('shrink')
        }
        if (scroll >= 1000) {
            $('#mainVisual').fadeOut(0)
            $('.cont01 .desc').addClass('shrink')
        }else {
            $('#mainVisual').fadeIn(0)
            $('.cont01 .desc').removeClass('shrink')
        }
        if (scroll >= 1200) {
            $('.cont02 .fl h3').addClass('shrink')
        }else {
            $('.cont02 .fl h3').removeClass('shrink')
        }
        if (scroll >= 1300) {
            $('.cont02 .fl .desc').addClass('shrink')
            $('.cont02 .fr').addClass('shrink')
        }else {
            $('.cont02 .fl .desc').removeClass('shrink')
            $('.cont02 .fr').removeClass('shrink')
        }
        if (scroll >= 1400) {
            $('.cont02 .fl figure').addClass('shrink')
        }else {
            $('.cont02 .fl figure').removeClass('shrink')
        }
        if (scroll >= 1900) {
            $('.cont03 h3').addClass('shrink')
        }else {
            $('.cont03 h3').removeClass('shrink')
        }
        if (scroll >= 2000) {
            $('.cont03 .desc').addClass('shrink')
        }else {
            $('.cont03 .desc').removeClass('shrink')
        }
        if (scroll >= 2100) {
            $('.cont03 .slideNav').addClass('shrink')
            $('.cont03 .swiper').addClass('shrink')
        }else {
            $('.cont03 .slideNav').removeClass('shrink')
            $('.cont03 .swiper').removeClass('shrink')
        }
        if (scroll >= 2900) {
            $('.cont04 h3').addClass('shrink')
        }else {
            $('.cont04 h3').removeClass('shrink')
        }
        if (scroll >= 3000) {
            $('.cont04 .desc').addClass('shrink')
            $('.cont04 figure').addClass('shrink')
        }else {
            $('.cont04 .desc').removeClass('shrink')
            $('.cont04 figure').removeClass('shrink')
        }
        if (scroll >= 3100) {
            $('.cont04 .btnNext').addClass('shrink')
        }else {
            $('.cont04 .btnNext').removeClass('shrink')
        }
    });

    //1차 방정식...
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
      
        var y =  -1/900 * scrollTop + 1;
        $('#mainVisual').eq(0).css('opacity', y);
        var s =  1/4000 * scrollTop + 1;
        $('#mainVisual').eq(0).css('transform', 'scale(' + s + ')');
    });

    //swiper
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 80,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        speed: 800,
        on: {
            slideChangeTransitionStart: function () {
                // Get the current slide index
                var slideIndex = this.realIndex;
                console.log(slideIndex);
                $('.cont03 .slideNav a').removeClass('on')
                $('.cont03 .slideNav a').eq(slideIndex).addClass('on')
                $('.swiper-slide').removeClass('on')
                $('.swiper-slide').eq(slideIndex).addClass('on')
                if ($('.swiper-slide').hasClass('on') == true) {
                    $('.swiper-slide .textGroup').fadeOut()
                    $('.swiper-slide.on .textGroup').delay(800).fadeIn()
                }
            },
        },
    });
    $('.swiper-slide.on .textGroup').fadeIn()
    $('.cont03 .slideNav a').on('click', function() {
        var slideIndex = $(this).index();
        swiper.slideTo(slideIndex);
    })
})
