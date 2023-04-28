$(function() {
    alert('이 페이지는 해상도 1920x1080에 맞춰 제작되었음을 알려드립니다.')
    //intro 동작
    $('#intro .inner').delay(400).fadeIn(1300);
    $('#intro .pl').animate({
        top: '50%'
    },1300);
    $('.dimIntro').animate({
        top: '-350px'
    },1300);
    $('.dimIntro img').delay(400).fadeIn(1300);
    $('.dimSide').animate({
        top: '50%'
    },1300);
    $('.dimSide img').delay(400).fadeIn(1300);
    $('.menu li').removeClass('on')
    $('.menu li').eq(0).addClass('on')

    //design popup
    $('#design li a').on('click', function() {
        $('.popup').fadeIn(100)
        var liIndex = $(this).parent().index(),
            aIndex = $(this).index();
        if(liIndex == 0 && aIndex == 0) {
            $('.popupCont figure img').attr('src', 'img/design_popup01.jpg')
        }else if(liIndex == 0 && aIndex == 1) {
            $('.popupCont figure img').attr('src', 'img/design_popup02.jpg')
        }else if(liIndex == 1 && aIndex == 0) {
            $('.popupCont figure img').attr('src', 'img/design_popup03.jpg')
        }else if(liIndex == 1 && aIndex == 1) {
            $('.popupCont figure img').attr('src', 'img/design_popup04.jpg')
        }else if(liIndex == 1 && aIndex == 2) {
            $('.popupCont figure img').attr('src', 'img/design_popup05.jpg')
        }else if(liIndex == 2 && aIndex == 0) {
            $('.popupCont figure img').attr('src', 'img/design_popup06.png')
        }else if(liIndex == 2 && aIndex == 1) {
            $('.popupCont figure img').attr('src', 'img/design_popup07.jpg')
        }
    })
    $('.popupClose, .dimPopup').on('click', function() {
        $('.popup').fadeOut(0)
    })

    //menu 동작
    $('.btnMenu').on('click', function() {
        $('.btnMenu').fadeOut()
        $('.menu').fadeIn()
        $('.menuGroup').animate({
            right: 0
        })
    })
    $('.menuClose, .dimMenu').on('click', function() {
        $('.btnMenu').fadeIn()
        $('.menu').fadeOut()
        $('.menuGroup').animate({
            right: -350
        })
    })
    $('.index0').on('click', function() {
        $('.btnMenu').fadeIn()
        $('.menu').fadeOut()
        $('.menuGroup').animate({
            right: -350
        })
        $('.menu li').removeClass('on')
        $(this).addClass('on')
        var menuIndex = $(this).index();
        swiper.slideTo(menuIndex);
    })
    $('.index3').on('click', function() {
        $('.btnMenu').fadeIn()
        $('.menu').fadeOut()
        $('.menuGroup').animate({
            right: -350
        })
        var menuIndex = $(this).index();
        swiper.slideTo(menuIndex + 3);
    })

    //nav 동작
    $('nav li').on('click', function() {
        var portIndex = $(this).index();
        swiper.slideTo(portIndex + 2);
    })

    //swiper
    var swiper = new Swiper(".mySwiper", {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        speed: 1300,
        on: {
            slideChangeTransitionStart: function () {
                // Get the current slide index
                var slideIndex = this.realIndex;
                console.log(slideIndex);
                if(slideIndex == 0) { //intro
                    $('#intro .inner').delay(400).fadeIn(800);
                    $('#about .inner').fadeOut();
                    $('.logo').animate({
                        color: "#333"
                    })
                    $('.btnMenu a').eq(0).delay(400).fadeOut();
                    $('.btnMenu a').eq(1).delay(400).fadeIn();
                    $('.dimCenter').animate({
                        left: -300,
                        width: 520,
                        height: 520
                    },1000)
                    $('.dimCenter img').animate({
                        width: 520,
                        height: 520
                    },1000)
                    $('.dimCenter h2').fadeIn();
                    $('.dimSide').animate({
                        left: -300,
                        width: 900,
                        height: 900
                    },1000)
                    $('.dimSide img').animate({
                        width: 900,
                        height: 900
                    },1000)
                    $('.dimIntro').animate({
                        top: '-350px'
                    },1300);
                    $('.dimIntro img').fadeIn(1300);
                    $('nav').fadeOut(600);
                    $('nav ul').animate({
                        left: -170
                    },1300);
                    $('.menu li').removeClass('on')
                    $('.menu li').eq(0).addClass('on')
                }else if(slideIndex == 1) { //about
                    $('#intro .inner').fadeOut();
                    $('#about .inner').delay(400).fadeIn(800);
                    $('#record .inner').fadeOut();
                    $('.logo').animate({
                        color: "#333"
                    })
                    $('.btnMenu a').eq(0).delay(400).fadeOut();
                    $('.btnMenu a').eq(1).delay(400).fadeIn();
                    $('.dimCenter').animate({
                        left: -300,
                        width: 520,
                        height: 520
                    },1000)
                    $('.dimCenter img').animate({
                        width: 520,
                        height: 520
                    },1000)
                    $('.dimCenter h2').fadeIn();
                    $('.dimSide').animate({
                        left: -300,
                        width: 900,
                        height: 900
                    },1000)
                    $('.dimSide img').animate({
                        width: 900,
                        height: 900
                    },1000)
                    $('.dimIntro').animate({
                        top: '-350px'
                    },1300);
                    $('.dimIntro img').fadeIn(1300);
                    $('nav').fadeOut(600);
                    $('nav ul').animate({
                        left: -170
                    },1300);
                    $('.menu li').removeClass('on')
                    $('.menu li').eq(1).addClass('on')
                }else if(slideIndex == 2) { //record
                    $('#about .inner').fadeOut();
                    $('#record .inner').delay(400).fadeIn(800);
                    $('#tenbyten .inner').fadeOut();
                    $('.logo').animate({
                        color: "#333"
                    })
                    $('.btnMenu a').eq(0).delay(400).fadeOut();
                    $('.btnMenu a').eq(1).delay(400).fadeIn();
                    $('.dimCenter').animate({
                        left: -120,
                        width: 520,
                        height: 520
                    },1000)
                    $('.dimCenter img').animate({
                        width: 520,
                        height: 520
                    },1000)
                    $('.dimCenter h2').fadeIn();
                    $('.dimSide').animate({
                        left: -120,
                        width: 6500,
                        height: 6500
                    },1000)
                    $('.dimSide img').animate({
                        width: 6500,
                        height: 6500
                    },1000)
                    $('.dimIntro').animate({
                        top: '-1150px'
                    },800);
                    $('.dimIntro img').fadeOut(800);
                    $('nav').fadeIn(1300);
                    $('nav ul').animate({
                        left: 170
                    },1000);
                    $('nav li').removeClass('on')
                    $('nav li').eq(0).addClass('on')
                    $('.menu li').removeClass('on')
                    $('.menu li').eq(2).addClass('on')
                }else if(slideIndex == 3) { //tenbyten
                    $('#record .inner').fadeOut();
                    $('#tenbyten .inner').delay(400).fadeIn(800);
                    $('#beautylab .inner').fadeOut();
                    $('.logo').animate({
                        color: "#333"
                    })
                    $('.btnMenu a').eq(0).delay(400).fadeOut();
                    $('.btnMenu a').eq(1).delay(400).fadeIn();
                    $('.dimCenter').animate({
                        left: -120,
                        width: 520,
                        height: 520
                    },1000)
                    $('.dimCenter img').animate({
                        width: 520,
                        height: 520
                    },1000)
                    $('.dimCenter h2').fadeIn();
                    $('.dimSide').animate({
                        left: -120,
                        width: 6500,
                        height: 6500
                    },1000)
                    $('.dimSide img').animate({
                        width: 6500,
                        height: 6500
                    },1000)
                    $('.dimIntro').animate({
                        top: '-1150px'
                    },800);
                    $('.dimIntro img').fadeOut(800);
                    $('nav').fadeIn(1300);
                    $('nav ul').animate({
                        left: 170
                    },1000);
                    $('nav li').removeClass('on')
                    $('nav li').eq(1).addClass('on')
                    $('.menu li').removeClass('on')
                    $('.menu li').eq(2).addClass('on')
                }else if(slideIndex == 4) { //beautylab
                    $('#tenbyten .inner').fadeOut();
                    $('#beautylab .inner').delay(400).fadeIn(800);
                    $('#cuss .inner').fadeOut();
                    $('.logo').animate({
                        color: "#333"
                    })
                    $('.btnMenu a').eq(0).delay(400).fadeOut();
                    $('.btnMenu a').eq(1).delay(400).fadeIn();
                    $('.dimCenter').animate({
                        left: -120,
                        width: 520,
                        height: 520
                    },1000)
                    $('.dimCenter img').animate({
                        width: 520,
                        height: 520
                    },1000)
                    $('.dimCenter h2').fadeIn();
                    $('.dimSide').animate({
                        left: -120,
                        width: 6500,
                        height: 6500
                    },1000)
                    $('.dimSide img').animate({
                        width: 6500,
                        height: 6500
                    },1000)
                    $('.dimIntro').animate({
                        top: '-1150px'
                    },800);
                    $('.dimIntro img').fadeOut(800);
                    $('nav').fadeIn(1300);
                    $('nav ul').animate({
                        left: 170
                    },1000);
                    $('nav li').removeClass('on')
                    $('nav li').eq(2).addClass('on')
                    $('.menu li').removeClass('on')
                    $('.menu li').eq(2).addClass('on')
                }else if(slideIndex == 5) { //cuss
                    $('#beautylab .inner').fadeOut();
                    $('#cuss .inner').delay(400).fadeIn(800);
                    $('#design .inner').fadeOut();
                    $('.logo').animate({
                        color: "#333"
                    })
                    $('.btnMenu a').eq(0).delay(400).fadeOut();
                    $('.btnMenu a').eq(1).delay(400).fadeIn();
                    $('.dimCenter').animate({
                        left: -120,
                        width: 520,
                        height: 520
                    },1000)
                    $('.dimCenter img').animate({
                        width: 520,
                        height: 520
                    },1000)
                    $('.dimCenter h2').fadeIn();
                    $('.dimSide').animate({
                        left: -120,
                        width: 6500,
                        height: 6500
                    },1000)
                    $('.dimSide img').animate({
                        width: 6500,
                        height: 6500
                    },1000)
                    $('.dimIntro').animate({
                        top: '-1150px'
                    },800);
                    $('.dimIntro img').fadeOut(800);
                    $('nav').fadeIn(1300);
                    $('nav ul').animate({
                        left: 170
                    },1000);
                    $('nav li').removeClass('on')
                    $('nav li').eq(3).addClass('on')
                    $('.menu li').removeClass('on')
                    $('.menu li').eq(2).addClass('on')
                }else if(slideIndex == 6) { //design
                    $('#cuss .inner').fadeOut();
                    $('#design .inner').delay(400).fadeIn(800);
                    $('#contact .inner').fadeOut();
                    $('.logo').animate({
                        color: "#333"
                    })
                    $('.btnMenu a').eq(0).fadeIn();
                    $('.btnMenu a').eq(1).fadeOut();
                    $('.dimCenter').animate({
                        left: '25%',
                        width: 520,
                        height: 520
                    },1200)
                    $('.dimCenter img').animate({
                        width: 520,
                        height: 520
                    },1200)
                    $('.dimCenter h2').fadeIn();
                    $('.dimSide').animate({
                        left: '25%',
                        width: 6500,
                        height: 6500
                    },1200)
                    $('.dimSide img').animate({
                        width: 6500,
                        height: 6500
                    },1200)
                    $('.dimIntro').animate({
                        top: '-1150px'
                    },800);
                    $('.dimIntro img').fadeOut(800);
                    $('nav').fadeOut(600);
                    $('nav ul').animate({
                        left: -170
                    },1300);
                    $('.menu li').removeClass('on')
                    $('.menu li').eq(3).addClass('on')
                }else if(slideIndex == 7) { //contact
                    $('#design .inner').fadeOut();
                    $('#contact .inner').delay(400).fadeIn(800);
                    $('.btnMenu a').eq(0).fadeOut();
                    $('.logo').animate({
                        color: "#fff"
                    })
                    $('.btnMenu a').eq(1).fadeIn();
                    $('.dimCenter').animate({
                        left: '50%',
                        width: 260,
                        height: 260
                    },1200)
                    $('.dimCenter img').animate({
                        width: 260,
                        height: 260
                    },1200)
                    $('.dimCenter h2').fadeOut();
                    $('.dimSide').animate({
                        left: '50%',
                        width: 2800,
                        height: 2800
                    },1200)
                    $('.dimSide img').animate({
                        width: 2800,
                        height: 2800
                    },1200)
                    $('.dimIntro').animate({
                        top: '-1150px'
                    },800);
                    $('.dimIntro img').fadeOut(800);
                    $('nav').fadeOut(600);
                    $('nav ul').animate({
                        left: -170
                    },1300);
                    $('.menu li').removeClass('on')
                    $('.menu li').eq(4).addClass('on')
                };
            },
        },
    });
});