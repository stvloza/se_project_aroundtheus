/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import "../pages/index.css";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import {
  initialCards,
  formValidatorConfig,
  profileEditButton,
  profileTitleInput,
  profileDescriptionInput,
  profileEditForm,
  addNewCardButton,
  profileAddCardForm,
  cardsWrap,
} from "../utils/constants.js";

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

// User information
export const userInfo = new UserInfo(
  document.querySelector(".profile__title"),
  document.querySelector(".profile__description")
);

// Popup for image preview
export const previewImagePopup = new PopupWithImage("#preview-modal");

// Popup for profile edit form
export const editPopupForm = new PopupWithForm(
  "#profile-edit-modal",
  handleEditProfileSubmit
);

// Popup for add card form
export const addCardPopupForm = new PopupWithForm(
  "#add-form-modal",
  handleAddCardFormSubmit
);

// Event handler for card image click (opens preview popup)
function handleCardImageClick({ name, link }) {
  previewImagePopup.open(name, link);
}

// Event listener for add new card button click
addNewCardButton.addEventListener("click", () => {
  addFormValidator.toggleButtonState();
  addCardPopupForm.open();
});

// Event listener for profile edit button click
profileEditButton.addEventListener("click", () => {
  const { profileName, description } = userInfo.getUserInfo();
  profileTitleInput.value = profileName;
  profileDescriptionInput.value = description;
  editFormValidator.toggleButtonState();
  editPopupForm.open();
});

// Function to render a card
function renderCard(cardData) {
  const card = new Card(cardData, "#card-template", handleCardImageClick);
  section.addItem(card.getCardElement());
}

// Section for managing cards
const section = new Section(
  {
    items: initialCards,
    renderer: renderCard,
  },
  cardsWrap
);

// Render initial cards
section.renderItems();

/* -------------------------------------------------------------------------- */
/*                                  Handlers                                  */
/* -------------------------------------------------------------------------- */

// Event handler for profile edit form submission
function handleEditProfileSubmit(formData) {
  const { nameInfo, jobInfo } = formData;
  userInfo.setUserInfo(nameInfo, jobInfo);
  editPopupForm.close();
}

// Event handler for add card form submission
function handleAddCardFormSubmit(inputValues) {
  const { name, link } = inputValues;
  renderCard({ name, link });
  addCardPopupForm.close();
}

/* -------------------------------------------------------------------------- */
/*                                Form Validation                             */
/* -------------------------------------------------------------------------- */

// Form validation for add card form
const addFormValidator = new FormValidator(
  formValidatorConfig,
  profileAddCardForm
);
addFormValidator.enableValidation();

// Form validation for profile edit form
const editFormValidator = new FormValidator(
  formValidatorConfig,
  profileEditForm
);
editFormValidator.enableValidation();
