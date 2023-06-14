import { openModal } from "../utils/utils.js";

import {
  previewImageModalWindow,
  previewImageElement,
  previewImageTitle,
} from "../pages/index.js";

class Card {
  constructor(cardData, cardSelector) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    return document
      .querySelector(`${this._cardSelector}`)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  _handleCardImage = (evt) => {
    previewImageElement.src = this._link;
    previewImageElement.alt = this._name;
    previewImageTitle.textContent = this._name;
    openModal(previewImageModalWindow);
  };

  _handleLikeIcon() {
    this._cardEl
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  _handleDeleteCard() {
    this._cardEl.remove();
    this._cardEl = null;
  }

  _setEventListeners() {
    this._cardEl
      .querySelector(".card__like-button")
      .addEventListener("click", () => this._handleLikeIcon());
    this._cardEl
      .querySelector(".card__delete-button")
      .addEventListener("click", () => this._handleDeleteCard());
    this._cardEl
      .querySelector(".card__image")
      .addEventListener("click", () => this._handleCardImage());
  }

  getView() {
    this._cardEl = this._getTemplate();
    this._setEventListeners();
    this._cardEl.querySelector(".card__image").src = this._link;
    this._cardEl.querySelector(".card__image").alt = this._name;
    this._cardEl.querySelector(".card__title").textContent = this._name;

    return this._cardEl;
  }
}

export default Card;
