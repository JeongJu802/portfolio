$(function() {
    var swiper = new Swiper(".main_slide", {
        pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
        autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });
});