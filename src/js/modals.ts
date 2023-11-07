export default function modals() {
  document.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    if (target.matches(".js-modal-open") || target.closest(".js-modal-open")) {
      const button = (
        target.matches(".js-modal-open")
          ? target
          : target.closest(".js-modal-open")
      ) as HTMLAnchorElement;
      event.preventDefault();
      const hash = button.hash;
      const modal = document.querySelector<HTMLElement>(hash);
      if (modal) {
        document.body.classList.remove("menu-open");
        document.body.classList.add("modal-open");
        modal.classList.add("active");
      }
    }
  });
  document.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    if (
      target.matches(".js-modal-close") ||
      target.closest(".js-modal-close")
    ) {
      event.preventDefault();
      const modals = Array.from(
        document.querySelectorAll<HTMLElement>(".js-modal")
      );
      modals.forEach((modal) => modal.classList.remove("active"));
      document.body.classList.remove("modal-open");
    }
  });

  document.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    if (target.matches(".js-modal")) {
      const modals = Array.from(
        document.querySelectorAll<HTMLElement>(".js-modal")
      );
      modals.forEach((modal) => modal.classList.remove("active"));
      document.body.classList.remove("modal-open");
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      const modals = Array.from(
        document.querySelectorAll<HTMLElement>(".js-modal")
      );
      modals.forEach((modal) => modal.classList.remove("active"));
      document.body.classList.remove("modal-open");
    }
  });
}
