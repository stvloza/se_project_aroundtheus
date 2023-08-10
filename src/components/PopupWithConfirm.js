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

  // close() {
  //   super.close();
  //   this._popupForm.removeEventListener("submit", this._handleFormSubmit);
  // }

  // _setEventListeners() {
  //   super._setEventListeners();
  //   this._popupForm.addEventListener("submit", (e) => {
  //     e.preventDefault();
  //     this._handleFormSubmit(e);
  //   });
  // }

  _setEventListeners() {
    super._setEventListeners();

    // Store a reference to the event handler function for later removal
    this._formSubmitHandler = (e) => {
      e.preventDefault();
      this._handleFormSubmit(e);
    };

    this._popupForm.addEventListener("submit", this._formSubmitHandler);
  }

  // Method to remove the event listener
  _removeEventListeners() {
    super._removeEventListeners();

    this._popupForm.removeEventListener("submit", this._formSubmitHandler);
  }
}
