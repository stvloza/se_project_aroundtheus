import Popup from "./Popup.js";

// Class for a confirmation popup that extends the base Popup class
export default class PopupWithConfirm extends Popup {
  constructor(popupSelector) {
    // Call the base class constructor
    super({ popupSelector });

    // Store references to popup form elements
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._submitButton = this._popupForm.querySelector(
      ".form__button_type_delete"
    );
    this._submitButtonText = this._submitButton.textContent;
  }

  // Set the action to be executed when the submit button is clicked
  setSubmitAction(action) {
    this._handleFormSubmit = action;
  }

  // Control the loading state of the submit button
  setLoading(isLoading, loadingText = "Removing...") {
    if (isLoading) {
      this._submitButton.textContent = loadingText;
      this._submitButton.disabled = true;
    } else {
      this._submitButton.textContent = this._submitButtonText;
      this._submitButton.disabled = false;
    }
  }

  // Add event listeners for form submission
  _setEventListeners() {
    super._setEventListeners();

    // Define the form submission handler
    this._formSubmitHandler = (e) => {
      e.preventDefault();
      this._handleFormSubmit(e);
    };

    // Attach the handler to the form's submit event
    this._popupForm.addEventListener("submit", this._formSubmitHandler);
  }

  // Remove form submission event listeners
  _removeEventListeners() {
    super._removeEventListeners();
    this._popupForm.removeEventListener("submit", this._formSubmitHandler);
  }
}
