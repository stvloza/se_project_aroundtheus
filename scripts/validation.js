const showInputError = (formEl, inputEl, { inputErrorClass, errorClass }) => {
  const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
  inputEl.classList.add(inputErrorClass);
  errorMessageEl.textContent = inputEl.validationMessage;
  errorMessageEl.classList.add(errorClass);
};

const hideInputError = (formEl, inputEl, { inputErrorClass, errorClass }) => {
  const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
  inputEl.classList.remove(inputErrorClass);
  errorMessageEl.textContent = "";
  errorMessageEl.classList.remove(errorClass);
};

const checkInputValidity = (formEl, inputEl, options) => {
  if (!inputEl.validity.valid) {
    return showInputError(formEl, inputEl, options);
  }
  hideInputError(formEl, inputEl, options);
};

const hasInvalidInput = (inputList) => {
  return !inputList.every((inputEl) => inputEl.validity.valid);
};

//disableButton
// enableButton

const toggleButtonState = (inputELs, submitButton, { inactiveButtonClass }) => {
  if (hasInvalidInput(inputELs)) {
    submitButton.classList.add(inactiveButtonClass);
    submitButton.disabled = true;
    return;
  }
  submitButton.classList.remove(inactiveButtonClass);
  submitButton.disabled = false;
};

const setEventListeners = (formEl, options) => {
  const { inputSelector } = options;
  const inputELs = [...formEl.querySelectorAll(inputSelector)];
  const submitButton = formEl.querySelector(".form__button-submit");
  inputELs.forEach((inputEl) => {
    inputEl.addEventListener("input", (e) => {
      checkInputValidity(formEl, inputEl, options);
      toggleButtonState(inputELs, submitButton, options);
    });
  });
};

const enableValidation = (options) => {
  const { formSelector } = options;
  const formELs = [...document.querySelectorAll(formSelector)];
  formELs.forEach((formEl) => {
    formEl.addEventListener("submit", (e) => {
      e.preventdefault();
    });
    setEventListeners(formEl, options);
  });
};

const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button-disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

enableValidation(config);

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
