const modal = document.querySelector(".modal-wrap");
const modalTriggers = document.querySelectorAll(".menu-modal");
const modalClose = document.querySelector(".modal-close");
modalTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    });
});
modalClose.addEventListener("click", () => {
    modal.style.display = "none";
});
export {};
//# sourceMappingURL=script.js.map