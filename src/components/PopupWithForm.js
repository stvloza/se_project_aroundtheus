import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector("#modal-card-form");
    this._handleFormSubmit = handleFormSubmit;
  }
  close() {
    this._popupForm.reset();
    super.close();
  }
}

//index.js

const newCardPopup = new PopupWithForm("#cards-edit-modal", () => {});
newCardPopup.open();

newCardPopup.close();
