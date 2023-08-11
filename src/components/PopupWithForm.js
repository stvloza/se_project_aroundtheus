// Import the base Popup class from its file path
import Popup from "../components/Popup.js";

// Class for a popup with a form that extends the base Popup class
class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    // Call the constructor of the parent class (Popup) and pass the popupSelector
    super({ popupSelector });

    // Store the function to handle form submission
    this._handleFormSubmit = handleFormSubmit;

    // Store references to popup form elements
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._inputs = this._popupForm.querySelectorAll(".modal__input");
    this._submitButton = this._popupForm.querySelector(".modal__button");
    this._submitButtonText = this._submitButton.textContent;
  }

  // Control the loading state of the submit button
  setLoading(isLoading, loadingText = "Saving...") {
    if (isLoading) {
      this._submitButton.textContent = loadingText;
      this._submitButton.disabled = true;
    } else {
      this._submitButton.textContent = this._submitButtonText;
      this._submitButton.disabled = false;
    }
  }

  // Overrides the close method of the parent class (Popup) to include additional functionality
  close() {
    // Reset the form inputs within the popup
    this._popupForm.reset();

    // Remove the submit handler from the popup element
    this._popupElement.removeEventListener("submit", this._submitForm);

    // Call the close method of the parent class to close the popup
    super.close();
  }

  // Retrieves the values of the form inputs and returns them as an object
  _getInputValues() {
    const inputsObject = {};
    this._inputs.forEach((input) => {
      if (input.value !== "") {
        inputsObject[input.name] = input.value;
      }
    });
    return inputsObject;
  }

  // Submits the form by calling the handleFormSubmit function with the input values
  _submitForm = () => {
    const inputValues = this._getInputValues();
    this._handleFormSubmit(inputValues);
  };

  // Sets up event listeners for the popup
  _setEventListeners() {
    // Sets up event listeners inherited from the parent class (Popup)
    super._setEventListeners();

    // Listen for form submission to trigger the _submitForm method
    this._popupElement.addEventListener("submit", this._submitForm);
  }
}

// Export the PopupWithForm class
export default PopupWithForm;
