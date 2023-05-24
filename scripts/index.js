/* -------------------------------------------------------------------------- */
/*                                   Arrays                                   */
/* -------------------------------------------------------------------------- */

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },

  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },

  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

/* -------------------------------------------------------------------------- */
/*                                 Elements                                */
/* -------------------------------------------------------------------------- */

const profileEditBtn = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileEditForm = profileEditModal.querySelector("#modal-form");
const profileExitBtn = profileEditModal.querySelector("#form-exit-button");
const cardsListEl = document.querySelector(".cards__list");
const cardsEditModal = document.querySelector("#cards-edit-modal");
const cardsEditBtn = document.querySelector("#add-button");
const cardExitBtn = cardsEditModal.querySelector("#card-exit-button");
const cardEditForm = cardsEditModal.querySelector("#modal-card-form");
const previewImageModalWindow = document.querySelector("#preview-modal");
const previewImageElement = document.querySelector(".modal__preview-image");
const previewImageTitle = document.querySelector(".modal__label");
const previewImageExitBtn = document.querySelector("#preview-exit-button");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

/* -------------------------------------------------------------------------- */
/*                                 Functions                                  */
/* -------------------------------------------------------------------------- */

function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

function openModal(modal) {
  modal.classList.add("modal_opened");
}

function renderCard(cardEl, container) {
  // append it to list
  container.prepend(cardEl);
}

function getCardView(cardData) {
  const cardEl = cardTemplate.cloneNode(true);

  const imageEl = cardEl.querySelector(".card__image");

  const titleEl = cardEl.querySelector(".card__title");

  imageEl.src = cardData.link;

  imageEl.alt = cardData.title;

  titleEl.textContent = cardData.name;

  const cardLikeBtn = cardEl.querySelector(".card__like-button");
  cardLikeBtn.addEventListener("click", () => {
    cardLikeBtn.classList.toggle("card__like-button_active");
  });
  const cardDeleteBtn = cardEl.querySelector(".card__delete-button");
  cardDeleteBtn.addEventListener("click", () => {
    cardEl.remove();
  });
  imageEl.addEventListener("click", function () {
    previewImageElement.src = cardData.link;
    previewImageElement.alt = cardData.title;
    previewImageTitle.textContent = cardData.name;
    openModal(previewImageModalWindow);
  });
  return cardEl;
}

previewImageExitBtn.addEventListener("click", () => {
  closeModal(previewImageModalWindow);
});

initialCards.forEach(function (cardData) {
  const cardView = getCardView(cardData);
  renderCard(cardView, cardsListEl);
});

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal(profileEditModal);
}

/* -------------------------------------------------------------------------- */
/*                               Event Listeners                              */
/* -------------------------------------------------------------------------- */

profileEditBtn.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;

  openModal(profileEditModal);
});

cardEditForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = e.target.title.value;
  const link = e.target.link.value;
  const cardView = getCardView({ name, link });
  renderCard(cardView, cardsListEl);
  closeModal(cardsEditModal);
  cardEditForm.reset();
});

cardsEditBtn.addEventListener("click", () => {
  openModal(cardsEditModal);
});

cardExitBtn.addEventListener("click", () => {
  closeModal(cardsEditModal);
});

profileExitBtn.addEventListener("click", () => closeModal(profileEditModal));

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

console.log();

/* -------------------------------------------------------------------------- */
/*                                     End                                    */
/* -------------------------------------------------------------------------- */
