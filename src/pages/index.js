/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */
import PopupWithConfirm from "../components/PopupWithConfirm.js";
import Api from "../components/Api.js";
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
  avatarEditButton,
} from "../utils/constants.js";

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */
const BACKEND_URL = "https://around-api.en.tripleten-services.com/v1";
//API

const api = new Api({
  baseUrl: BACKEND_URL,
  headers: {
    authorization: "bf54a6ce-ba6a-4742-a5e8-9bdd0fb7708a",
    "Content-Type": "application/json",
  },
});

let cardSection;
let userId;

// User information
const userInfo = new UserInfo(
  document.querySelector(".profile__title"),
  document.querySelector(".profile__description"),
  document.querySelector(".profile__image")
);

// User Info
Promise.all([api.getUserInfo()])
  .then(([userData]) => {
    userInfo.setUserInfo(userData.name, userData.about);
    userInfo.setUserAvatar(userData.avatar);
    // userId = userData._id;
  })
  .catch(console.error);

const cardDeletePopup = new PopupWithConfirm("#modal-card-delete");
const avatarEditPopup = new PopupWithForm(
  "#modal-avatar-edit",
  handleAvatarFormSubmit
);

function handleAvatarFormSubmit({ url }) {
  avatarEditPopup.setLoading(true);
  api
    .setUserAvatar(url)
    .then((userData) => {
      userInfo.setUserAvatar(userData.avatar);
      avatarEditPopup.close();
    })
    .catch(console.error)
    .finally(() => {
      avatarEditPopup.setLoading(false);
    });
}
//setUser info

// Promise.all(api.setUserInfo(profileTitleInput, profileDescriptionInput));

//Get Cards
Promise.all([api.getInitialCards()])
  .then(([initialCards]) => {
    console.log(initialCards);
    cardSection = new Section(
      {
        items: initialCards,
        renderer: (cardData) => {
          const cardElement = renderCard(cardData);
          cardSection.addItem(cardElement);
        },
      },
      cardsWrap
    );
    cardSection.renderItems();
  })
  .catch(console.error);
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

avatarEditButton.addEventListener("click", () => {
  avatarEditPopup.open();
});

//to render a card
function renderCard(cardData) {
  const cardElement = new Card(
    cardData,
    "#card-template",
    handleCardImageClick,
    function handleDeleteClick() {
      cardDeletePopup.setSubmitAction(() => {
        cardDeletePopup.setLoading(true);
        api
          .removeCard(cardData._id)
          .then((res) => {
            console.log("here");
            cardElement.removeCardElement(res._id);
            cardDeletePopup.close();
          })
          .catch(console.error)
          .finally(() => {
            cardDeletePopup.setLoading(false);
          });
      });
      cardDeletePopup.setEventListeners();
      cardDeletePopup.open();
    },
    function handleLikeButtonClick() {
      api
        .changeLikeStatus(cardData._id, cardElement.isLiked)
        .then((res) => cardElement.updateLikes(res.isLiked))
        .catch(console.error);
    }
  );
  // section.addItem(card.getCardElement());
  return cardElement.getCardElement();
}

//for managing cards
// const section = new Section(
//   {
//     // items: initialCards,
//     renderer: renderCard,
//   },
//   cardsWrap
// );

// //Render initial cards
// section.renderItems();

/* -------------------------------------------------------------------------- */
/*                                  Handlers                                  */
/* -------------------------------------------------------------------------- */

// Event handler for profile edit form submission
function handleEditProfileSubmit(formData) {
  const { nameInfo, jobInfo } = formData;
  editPopupForm.setLoading(true);
  api
    .setUserInfo(nameInfo, jobInfo)
    .then(() => {
      console.log("here");
      userInfo.setUserInfo(nameInfo, jobInfo);
      editPopupForm.close();
    })
    .catch(console.error)
    .finally(() => {
      editPopupForm.setLoading(false);
    });
}

// Event handler for add card form submission
function handleAddCardFormSubmit(inputValues) {
  const { name, link } = inputValues;
  addCardPopupForm.setLoading(true);
  api
    .addCard({ name, link })
    .then((cardData) => {
      const cardElement = renderCard(cardData);
      cardSection.prependItem(cardElement);
      addCardPopupForm.close();
    })
    .catch(console.error)
    .finally(() => {
      addCardPopupForm.setLoading(false);
    });
  renderCard({ name, link });
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
