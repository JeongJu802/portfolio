$(document).ready(function() {
    //best
    var swiper = new Swiper(".bestSwiper", {
      pagination: {
        el: ".best_view",
      },
    });
    //hot_mobile
    var swiper = new Swiper(".hotSwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: ".hot_view",
        clickable: true,
      },
    });
    //main_visual
    $('#main_visual').animate({top: 0}, 1200);
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