const closeByEscape = (evt) => {
  if (evt.key === "Escape") {
    closeModal(document.querySelector(".modal_opened"));
  }
};

const closeByMouseDown = (evt) => {
  if (
    evt.target.classList.contains("modal") ||
    evt.target.classList.contains("form__button-exit")
  ) {
    closeModal(evt.target.closest(".modal"));
  }
};

const openModal = (modal) => {
  document.addEventListener("keydown", closeByEscape);
  modal.addEventListener("mousedown", closeByMouseDown);
  modal.classList.add("modal_opened");
};

const closeModal = (modal) => {
  document.removeEventListener("keydown", closeByEscape);
  modal.removeEventListener("mousedown", closeByMouseDown);
  modal.classList.remove("modal_opened");
};

export { closeByEscape, openModal, closeModal };
