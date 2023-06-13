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

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", closeByEscape);
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", closeByEscape);
}

function renderCard(cardEl, container) {
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

const addCardSubmitButton = document.getElementById("addCardSubmitButton");
const cardTitleInput = document.getElementById("card-title-input");
const cardUrlInput = document.getElementById("card-description-input");

cardEditForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = e.target.title.value;
  const link = e.target.link.value;
  const cardView = getCardView({ name, link });
  renderCard(cardView, cardsListEl);
  closeModal(cardsEditModal);
  cardEditForm.reset();
  toggleButtonState(
    [cardTitleInput, cardUrlInput],
    addCardSubmitButton,
    config
  );
});

cardsEditBtn.addEventListener("click", () => {
  openModal(cardsEditModal);
});

cardExitBtn.addEventListener("click", () => {
  closeModal(cardsEditModal);
});

profileExitBtn.addEventListener("click", () => closeModal(profileEditModal));

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

//

profileEditModal.addEventListener("mousedown", (e) => {
  console.log(e.target);
  if (e.target.classList.contains("modal_opened")) {
    closeModal(profileEditModal);
  }
});

cardsEditModal.addEventListener("mousedown", (e) => {
  console.log(e.target);
  if (e.target.classList.contains("modal_opened")) {
    closeModal(cardsEditModal);
  }
});

previewImageModalWindow.addEventListener("mousedown", (e) => {
  console.log(e.target);
  if (e.target.classList.contains("modal_opened")) {
    closeModal(previewImageModalWindow);
  }
});

const closeByEscape = (evt) => {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".modal_opened");
    closeModal(openedPopup);
  }
};
