import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const elements = Array.from(document.querySelectorAll(".js-gallery-slider"));

elements.forEach((element) => {
  const mainContainer = element.querySelector(".gallery-slider__main .swiper");
  const thumbsContainer = element.querySelector(
    ".gallery-slider__thumbs .swiper"
  );

  if (!mainContainer || !thumbsContainer) return;

  const thumbsInstance = new Swiper(thumbsContainer, {
    slidesPerView: "auto",
    speed: 600,
    // spaceBetween: 8,
    // centerInsufficientSlides: true,
  });

  const mainInstance = new Swiper(mainContainer, {
    slidesPerView: 1,
    speed: 600,
    longSwipesRatio: 0.2,

    thumbs: {
      swiper: thumbsInstance,
    },
    navigation: {
      prevEl: element.querySelector(".js-gallery-slider-prev"),
      nextEl: element.querySelector(".js-gallery-slider-next"),
    },
  });
});
