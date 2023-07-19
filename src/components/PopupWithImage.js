import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super({ popupSelector }); // Calls the constructor of the parent class (Popup) and passes the popupSelector
    this._previewImageElement = document.querySelector(".modal__preview-image"); // The preview image element within the popup
    this._previewImageDescription = document.querySelector(
      ".modal__preview-description"
    ); // The description element within the popup
  }

  // Overrides the open method of the parent class (Popup) to include additional functionality
  open(name, link) {
    this._previewImageElement.alt = name; // Sets the alt attribute of the preview image element
    this._previewImageDescription.textContent = name; // Sets the text content of the description element
    this._previewImageElement.src = link; // Sets the src attribute of the preview image element
    super.open(); // Calls the open method of the parent class to open the popup
  }
}

export default PopupWithImage;
