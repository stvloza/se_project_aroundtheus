export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }
  open(modal) {
    document.addEventListener("keydown", closeByEscapeKeyHandler);
    modal.addEventListener("mousedown", closeByMouseDown);
    modal.classList.add("modal_opened");
  }

  close(modal) {
    document.removeEventListener("keydown", closeByEscapeKeyHandler);
    modal.removeEventListener("mousedown", closeByMouseDown);
    modal.classList.remove("modal_opened");
  }

  _handleEscClose(e) {
    if (e.key === "Escape") {
      closePopup(document.querySelector(".modal_opened"));
    }
  }

  setEventListeners() {
    this._inputEls = [...this._formEl.querySelectorAll(this._inputSelector)];
    this._submitButton = this._formEl.querySelector(this._submitButtonSelector);

    this.toggleButtonState();
    this._inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", (e) => {
        this._checkInputValidity(inputEl);
        this.toggleButtonState();
      });
    });
  }
}
