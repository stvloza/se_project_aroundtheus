import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor({ popupSelector }) {
    super({ popupSelector });
    this._imageElement = this._popupElement.querySelector(
      ".modal__preview-image"
    );
    this._captionElement = this._popupElement.querySelector(".modal__label");
  }

  open(modal, imageSrc, caption) {
    super.open(modal);
    this._imageElement.src = imageSrc;
    this._captionElement.textContent = caption;
  }
}
