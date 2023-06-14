const previewImageModalWindow = document.querySelector("#preview-modal");
const previewImageElement = document.querySelector(".modal__preview-image");
const previewImageTitle = document.querySelector(".modal__label");
const ESC_KEYCODE = 27;

const closeModal = (modal) => {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", closeByEscape);
};

const handleEscUp = (evt) => {
  evt.preventDefault();
  isEscEvent(evt, closeModalWindow);
};

const isEscEvent = (evt, action) => {
  const activatePopup = document.querySelector(".modal_opened");
  if (evt.which === ESC_KEYCODE) {
    action(activatePopup);
  }
};

export default class Card {
  constructor(cardData, cardSelector) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._cardSelector = cardSelector;
  }

  _setEventListeners() {
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", this._handleLikeIcon.bind(this));
    this._element
      .querySelector(".card__delete-button")
      .addEventListener("click", this._handleDeleteCard);

    this._element
      .querySelector(".card__image")
      .addEventListener("click", this._handlePreviewPicture);
  }

  _handleLikeIcon() {
    this._element
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  _handleDeleteCard() {
    this._cardEl.remove();
    this._cardEl = null;
  }

  _handlePreviewPicture() {
    previewImageElement.src = cardData.link;
    previewImageElement.alt = cardData.title;
    previewImageTitle.textContent = cardData.name;
    openModal(previewImageModalWindow);
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  getView() {
    this._element = this._getTemplate();
    this._element.querySelector(".card__image").style.backgroundImage =
      "url(${this._link})";
    this._element.querySelector(".card__title").textContent = this._name;

    this._setEventListeners();
  }
}
