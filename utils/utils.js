function closeByEscapeKeyHandler(e) {
  if (e.key === "Escape") {
    closePopup(document.querySelector(".modal_opened"));
  }
}
function closeByMouseDown(e) {
  if (
    e.target.classList.contains("form__button-exit") ||
    e.target.classList.contains("modal")
  ) {
    closePopup(e.target.closest(".modal"));
  }
}

function openModal(modal) {
  document.addEventListener("keydown", closeByEscapeKeyHandler);
  modal.addEventListener("mousedown", closeByMouseDown);
  modal.classList.add("modal_opened");
}

function closePopup(modal) {
  document.removeEventListener("keydown", closeByEscapeKeyHandler);
  modal.removeEventListener("mousedown", closeByMouseDown);
  modal.classList.remove("modal_opened");
}

export { closeByEscapeKeyHandler, openModal, closePopup };
