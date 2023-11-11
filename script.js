function numberWithZero(num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}

$(".slider-main_component").each(function (index) {
  let totalSlides = numberWithZero($(this).find(".swiper-slide.is-slider-thumbs").length);
  $(".swiper-number-total").text(totalSlides);
  const bgSwiper = new Swiper($(this).find(".swiper.is-slider-bg")[0], {
    slidesPerView: 1,
    speed: 400,
    effect: "fade",
    allowTouchMove: false
  });

  const thumbsSwiper = new Swiper($(this).find(".swiper.is-slider-thumbs")[0], {
    slidesPerView: 1,
    speed: 600,
    loop: true,
    loopedSlides: 8,
    slideToClickedSlide: true
  });

  const textSwiper = new Swiper($(this).find(".swiper.is-slider-titles")[0], {
    slidesPerView: "auto",
    speed: 600,
    loop: true,
    loopedSlides: 8,
    slideToClickedSlide: true,
    mousewheel: true,
    keyboard: true,
    centeredSlides: true,
    slideActiveClass: "is-active",
    slideDuplicateActiveClass: "is-active",
    thumbs: {
      swiper: bgSwiper
    },
    navigation: {
      nextEl: $(this).find(".swiper-next")[0],
      prevEl: $(this).find(".swiper-prev")[0]
    }
  });

  textSwiper.controller.control = thumbsSwiper;
  thumbsSwiper.controller.control = textSwiper;

  textSwiper.on("slideChange", function (e) {
    let slideNumber = numberWithZero(e.realIndex + 1);
    $(".swiper-number-current").text(slideNumber);
  });
});
