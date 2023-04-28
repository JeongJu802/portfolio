$(function() {
    //mainSwiper
    var mainswiper = new Swiper(".mainSwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        effect: "fade",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        on: {
            slideChangeTransitionStart: function () {
                // Get the current slide index
                var slideIndex = this.realIndex;
                console.log(slideIndex);
                $('.mainSwiper .swiper_pagination div').removeClass('on')
                $('.mainSwiper .swiper_pagination div').eq(slideIndex).addClass('on')
            },
        },
      });
    //mainSwiper_pagination
    $('.mainSwiper .swiper_pagination div').on('click', function() {
        var slideIndex = $(this).index();
        mainswiper.slideTo(slideIndex);
    })

    //contSwiper
    var contswiper = new Swiper(".contSwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        speed: 500,
        on: {
            slideChangeTransitionStart: function () {
                // Get the current slide index
                var slideIndex = this.realIndex;
                console.log(slideIndex);
                $('.contSwiper .swiper_pagination div').removeClass('on')
                $('.contSwiper .swiper_pagination div').eq(slideIndex).addClass('on')
            },
        },
      });
    //contSwiper_pagination
    $('.contSwiper .swiper_pagination div').on('click', function() {
        var slideIndex = $(this).index();
        contswiper.slideTo(slideIndex);
    })

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
        console.log(scrollTop);

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
        if (scroll >= 400) {
            $('.row01 .col02 .textArea').addClass('shrink')
            $('.row01 .col01 img').addClass('shrink')
        }else {
            $('.row01 .col02 .textArea').removeClass('shrink')
            $('.row01 .col01 img').removeClass('shrink')
        }
        if (scroll >= 500) {
            $('.row01 .col02 .textArea h2').addClass('shrink')
        }else {
            $('.row01 .col02 .textArea h2').removeClass('shrink')
        }
        if (scroll >= 600) {
            $('.row01 .col02 .textArea .desc').addClass('shrink')
        }else {
            $('.row01 .col02 .textArea .desc').removeClass('shrink')
        }
        if (scroll >= 700) {
            $('.row01 .col02 .textArea .btnNext').addClass('shrink')
            $('.row01 .col01 h2').addClass('shrink')
        }else {
            $('.row01 .col02 .textArea .btnNext').removeClass('shrink')
            $('.row01 .col01 h2').removeClass('shrink')
        }
        if (scroll >= 800) {
            $('.row01 .col01 .desc').addClass('shrink')
        }else {
            $('.row01 .col01 .desc').removeClass('shrink')
        }
        if (scroll >= 1200) {
            $('.row02 td').addClass('shrink')
        }else {
            $('.row02 td').removeClass('shrink')
        }
        if (scroll >= 1800) {
            $('.row03 h2').addClass('shrink')
        }else {
            $('.row03 h2').removeClass('shrink')
        }
        if (scroll >= 1900) {
            $('.row03 .desc').addClass('shrink')
        }else {
            $('.row03 .desc').removeClass('shrink')
        }
        if (scroll >= 2000) {
            $('.row03 .btnNext').addClass('shrink')
        }else {
            $('.row03 .btnNext').removeClass('shrink')
        }
        if (scroll >= 2300) {
            $('#about .topArea h2').addClass('shrink')
        }else {
            $('#about .topArea h2').removeClass('shrink')
        }
        if (scroll >= 2400) {
            $('#about .topArea .desc').addClass('shrink')
        }else {
            $('#about .topArea .desc').removeClass('shrink')
        }
        if (scroll >= 2900) {
            $('#about .botArea h2').addClass('shrink')
        }else {
            $('#about .botArea h2').removeClass('shrink')
        }
        if (scroll >= 3000) {
            $('#about .botArea .desc').addClass('shrink')
        }else {
            $('#about .botArea .desc').removeClass('shrink')
        }
    })
    
    //mainVisual
    $('#mainVisual').on('mouseover', function() {
        $('#mainVisual .swiper-button').addClass('on')
    })
    $('#mainVisual').on('mouseleave', function() {
        $('#mainVisual .swiper-button').removeClass('on')
    })
    //container
    $('.row01 .col01').on('mouseover', function() {
        $('.row01 .col01 .swiper-button').addClass('on')
    })
    $('.row01 .col01').on('mouseleave', function() {
        $('.row01 .col01 .swiper-button').removeClass('on')
    })
})