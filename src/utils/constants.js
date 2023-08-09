/* -------------------------------------------------------------------------- */
/*                                    Arrays                                   */
/* -------------------------------------------------------------------------- */

// export const initialCards = [
//   {
//     name: "Seattle, WA",
//     link: "https://images.unsplash.com/photo-1502175353174-a7a70e73b362?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1426&q=80",
//   },
//   {
//     name: "Denver, CO",
//     link: "https://www.55places.com/wp-content/uploads/2022/11/downtown-denver-colorado.jpg",
//   },
//   {
//     name: "Orlando, FL",
//     link: "https://worldstrides.com/wp-content/uploads/2016/06/iStock_58068854_LARGE.jpg",
//   },
//   {
//     name: "Las Vegas, NV",
//     link: "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//   },
//   {
//     name: "Santa Monica, CA",
//     link: "https://images.unsplash.com/photo-1498196645145-687fd3bfe912?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//   },

//   {
//     name: "Juneau, AK",
//     link: "https://www.markkelley.com/wp-content/uploads/2019/11/orthern_Lights_Mendenhall_Glacier_Juneau_calendar_20171108_Mendenhall_Glacier_Northern_Lights_061-Edit-7-Edit-5-Edit-2-940x658.jpg",
//   },
// ];

/* -------------------------------------------------------------------------- */
/*                                  Constants                                 */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                                   Elements                                  */
/* -------------------------------------------------------------------------- */

// Configuration for form validation
export const formValidatorConfig = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

// Profile edit button and modal elements
export const profileEditButton = document.querySelector("#profile-edit-button");
export const profileEditModal = document.querySelector("#profile-edit-modal");
export const profileTitleInput = document.querySelector("#profile-title-input");
export const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
export const profileEditForm = profileEditModal.querySelector(".modal__form");

// Add card button and modal elements
export const addCardModal = document.querySelector("#add-form-modal");
export const addNewCardButton = document.querySelector("#profile-add-button");
export const profileAddCardForm = addCardModal.querySelector(".modal__form");

// Cards container element
export const cardsWrap = document.querySelector(".cards__list");
export const avatarEditButton = document.querySelector(".profile__edit__photo");
export const avatarSubmitForm = document.querySelector("#profile-avatar-form");
