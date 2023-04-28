$(document).ready(function() {
    //mobile_menu
    $('.btn_menu').on('click', function() {
      $('.m_menu_bg').fadeIn();
      $('.m_menu').stop().animate({right: 0}, 400);
    });
    $('.m_close').on('click', function() {
      $('.m_menu_bg').fadeOut();
      $('.m_menu').stop().animate({right: '-100%'}, 400);
    });
});
$(function() {
    //header
    var btn = $('header .gnb li:nth-child(n+2) a, header .util a')

    $('#main_visual').delay(600).animate({top: -830}, 1400);
    $('.wrap').delay(1200).animate({opacity: 1}, 1400);
    $('.brand_p').delay(1200).animate({bottom: -550}, 1000);
    $('.brand_t').delay(1200).animate({bottom: -350}, 1000);
    $('.brand_m').delay(1200).animate({bottom: -300}, 1000);
    btn.delay(800).animate({color: 'rgba(0,0,0,0.6)'}, 1000);
    btn.on('mouseover focusin', function() {
      $(this).animate({color: '#000'},10)
    });
    btn.on('mouseleave', function() {
      $(this).animate({color: 'rgba(0,0,0,0.6)'},10)
    });
    $('.ico_index').delay(800).animate({opacity: 0}, 1600);
    $('.ico_brand').delay(800).animate({opacity: 1}, 1600);
    $('.ico_index').delay(800).animate({opacity: 0}, 1600);
    $('.ico_brand').delay(800).animate({opacity: 1}, 1600);
});