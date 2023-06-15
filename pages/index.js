import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import { openModal, closeModal } from "../utils/utils.js";

/* -------------------------------------------------------------------------- */
/*                                   Arrays                                   */
/* -------------------------------------------------------------------------- */

const initialCards = [
  {
    name: "Seattle, WA",
    link: "https://images.unsplash.com/photo-1502175353174-a7a70e73b362?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1426&q=80",
  },
  {
    name: "Denver, CO",
    link: "https://www.55places.com/wp-content/uploads/2022/11/downtown-denver-colorado.jpg",
  },
  {
    name: "Orlando, FL",
    link: "https://worldstrides.com/wp-content/uploads/2016/06/iStock_58068854_LARGE.jpg",
  },

  {
    name: "Las Vegas, NV",
    link: "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },

  {
    name: "Santa Monica, CA",
    link: "https://images.unsplash.com/photo-1498196645145-687fd3bfe912?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    name: "Juneau, AK",
    link: "https://www.markkelley.com/wp-content/uploads/2019/11/orthern_Lights_Mendenhall_Glacier_Juneau_calendar_20171108_Mendenhall_Glacier_Northern_Lights_061-Edit-7-Edit-5-Edit-2-940x658.jpg",
  },
];

const FormValidatorConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".form__button-submit",
  inactiveButtonClass: "popup__button-disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

/* -------------------------------------------------------------------------- */
/*                                 Elements                                */
/* -------------------------------------------------------------------------- */

export const previewImageModalWindow = document.querySelector("#preview-modal");
export const previewImageElement = document.querySelector(
  ".modal__preview-image"
);
export const previewImageTitle = document.querySelector(".modal__label");

const profileEditBtn = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
//const addCardSubmitButton = document.getElementById("addCardSubmitButton");
const cardTitleInput = document.getElementById("card-title-input");
const cardUrlInput = document.getElementById("card-description-input");
const profileEditForm = profileEditModal.querySelector("#modal-form");
//const profileExitBtn = profileEditModal.querySelector("#form-exit-button");
const cardsListEl = document.querySelector(".cards__list");
const cardsEditModal = document.querySelector("#cards-edit-modal");
const cardsEditBtn = document.querySelector("#add-button");
//const cardExitBtn = cardsEditModal.querySelector("#card-exit-button");
const cardEditForm = cardsEditModal.querySelector("#modal-card-form");
//const previewImageExitBtn = document.querySelector("#preview-exit-button");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

/* -------------------------------------------------------------------------- */
/*                                 Functions                                */
/* -------------------------------------------------------------------------- */

const renderCard = (cardData) => {
  const card = new Card(cardData, "#card-template");
  const cardEl = card.getView();
  cardsListEl.prepend(cardEl);
};

/* -------------------------------------------------------------------------- */
/*                               Event Handlers                               */
/* -------------------------------------------------------------------------- */

const handleProfileEditSubmit = (evt) => {
  evt.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal(profileEditModal);
  profileEditForm.reset();
};

const handleAddCardFormSubmit = (evt) => {
  evt.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, link }, cardsListEl);

  closeModal(cardsEditModal);
  cardEditForm.reset();
};

/* -------------------------------------------------------------------------- */
/*                               Event Listeners                              */
/* -------------------------------------------------------------------------- */

profileEditBtn.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openModal(profileEditModal);
});

profileEditForm.addEventListener("submit", handleProfileEditSubmit);
cardEditForm.addEventListener("submit", handleAddCardFormSubmit);

cardsEditBtn.addEventListener("click", () => {
  openModal(cardsEditModal);
});

initialCards.forEach((cardData) => {
  renderCard(cardData);
});

const addFormValidator = new FormValidator(FormValidatorConfig, cardEditForm);

addFormValidator.enableValidation();

const editFormValidator = new FormValidator(
  FormValidatorConfig,
  profileEditForm
);

editFormValidator.enableValidation();
