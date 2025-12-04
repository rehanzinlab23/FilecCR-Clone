const modal = document.querySelector(".modal-wrap") as HTMLElement;
const modalTriggers = document.querySelectorAll<HTMLElement>(".menu-modal");
const modalClose = document.querySelector(".modal-close") as HTMLElement;
modalTriggers.forEach((trigger: HTMLElement): void => {
  trigger.addEventListener("click", (e: MouseEvent) => {
    e.preventDefault();
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  });
});

modalClose.addEventListener("click", (): void => {
  modal.style.display = "none";
});
