class FormValidator {
  // Constructor function that initializes the FormValidator instance
  constructor(config, _formEl) {
    // Configuration options
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;

    // The form element
    this._formEl = _formEl;
  }

  // Displays the input error message and applies error styles to the input element
  _showInputError(inputEl) {
    const errorMessageEl = this._formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.add(this._inputErrorClass);
    errorMessageEl.textContent = inputEl.validationMessage;
    errorMessageEl.classList.add(this._errorClass);
  }

  // Hides the input error message and removes error styles from the input element
  _hideInputError(inputEl) {
    const errorMessageEl = this._formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.remove(this._inputErrorClass);
    errorMessageEl.textContent = "";
    errorMessageEl.classList.remove(this._errorClass);
  }

  // Checks the validity of an input element and shows/hides error messages accordingly
  _checkInputValidity(inputEl) {
    if (!inputEl.validity.valid) {
      return this._showInputError(inputEl);
    }
    this._hideInputError(inputEl);
  }

  // Checks if the form has any invalid inputs
  _hasInvalidInput() {
    return !this._inputEls.every((inputEl) => inputEl.validity.valid);
  }

  // Toggles the state of the submit button based on form validity
  toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._submitButton.classList.add(this._inactiveButtonClass);
      this._submitButton.disabled = true;
      return;
    }

    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.disabled = false;
  }

  // Sets up event listeners for input elements
  _setEventListeners() {
    this._inputEls = [...this._formEl.querySelectorAll(this._inputSelector)];
    this._submitButton = this._formEl.querySelector(this._submitButtonSelector);

    this._inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", (e) => {
        this._checkInputValidity(inputEl);
        this.toggleButtonState();
      });
    });
  }

  // Enables form validation by setting up necessary event listeners
  enableValidation() {
    // Prevents form submission and handles validation manually
    this._formEl.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    // Sets up event listeners for input elements
    this._setEventListeners(this._formEl);
  }
}

export default FormValidator;
