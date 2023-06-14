class FormValidator {
  constructor(config, formEl) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._form = formEl;
  }
}

/* _showInputError = (inputEl, errorMessageEl) => {
  errorMessageEl = this._form.querySelector(`#${inputEl.id}-error`);
  inputEl.classList.add(this._inputErrorClass);
  errorMessageEl.textContent = errorMessageEl;
  errorMessageEl.classList.add(this._errorClass);
}; */

/* _toggleButtonState(inputELs, submitButton, inactiveButtonClass);
if (hasInvalidInput(inputELs)) {
  submitButton.classList.add(inactiveButtonClass);
  submitButton.disabled = true;
}
submitButton.classList.remove(inactiveButtonClass);
submitButton.disabled = false; */

/* _hasInvalidInput();

_checkInputValidity(); 

_setEventListeners();
this._inputELs = [this._form.querySelectorAll(this._inputSelector)];
this._submitButton = this._form.querySelector(this._submitButtonSelector);
inputELs.forEach((inputEl) => {
  inputEl.addEventListener("input", (e) => {
    checkInputValidity(this._form, inputEl, options);
    toggleButtonState(inputELs, submitButton, options);
  });
});

enableValidation();
this._form.addEventListener("submit", (e) => {
  e.preventDefault();
});
setEventListeners(formEl, options);

const editFormValidator = new FormValidator();
editFormValidator.enableValidation(); */

export default FormValidator;
