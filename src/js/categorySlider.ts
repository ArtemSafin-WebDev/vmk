import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/scss";

export default function categorySlider() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".js-category-slider")
  );

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;

    new Swiper(container, {
      speed: 600,
      slidesPerView: "auto",
      modules: [Navigation],
      longSwipesRatio: 0.2,
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".js-category-slider-prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".js-category-slider-next"
        ),
      },
    });
  });
}
