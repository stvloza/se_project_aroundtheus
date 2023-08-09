import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._submitButton = this._popupForm.querySelector(
      ".form__button_type_delete"
    );
    this._submitButtonText = this._submitButton.textContent;
  }

  setSubmitAction(action) {
    this._handleFormSubmit = action;
  }

  setLoading(isLoading, loadingText = "Removing...") {
    if (isLoading) {
      this._submitButton.textContent = loadingText;
      this._submitButton.disabled = true;
    } else {
      this._submitButton.textContent = this._submitButtonText;
      this._submitButton.disabled = false;
    }
  }

  close() {
    this._handleFormSubmit.reset();
    super.close();
    this._popupForm.removeEventListener("submit", (e) => {
      e.preventDefault();
      this._handleFormSubmit(e);
    });
  }

  _setEventListeners() {
    super._setEventListeners();
    this._popupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleFormSubmit(e);
    });
  }
}
