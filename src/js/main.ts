import "virtual:svg-icons-register";
import "../scss/style.scss";
import fileUpload from "./fileUpload";
import categorySlider from "./categorySlider";
import solutionsSlider from "./solutionsSlider";
import modals from "./modals";

document.addEventListener("DOMContentLoaded", () => {
  fileUpload();
  categorySlider();
  solutionsSlider();
  modals();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
