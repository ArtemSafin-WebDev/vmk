import Swiper from "swiper";
import "swiper/scss";

export default function solutionsSlider() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".js-solutions-slider")
  );

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;

    new Swiper(container, {
      speed: 600,
      slidesPerView: "auto",
    });
  });
}
