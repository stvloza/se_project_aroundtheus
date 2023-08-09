import Popup from "../components/Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector }); // Calls the constructor of the parent class (Popup) and passes the popupSelector
    this._handleFormSubmit = handleFormSubmit; // The function to handle form submission
    this._popupForm = this._popupElement.querySelector(".modal__form"); // The form element within the popup
    this._inputs = this._popupForm.querySelectorAll(".modal__input");
    this._submitButton = this._popupForm.querySelector(".modal__button");
    this._submitButtonText = this._submitButton.textContent;
  }
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
    this._popupForm.reset(); // Resets the form inputs within the popup
    this._popupElement.removeEventListener("submit", this._submitForm); // Remove the submit handler
    super.close(); // Calls the close method of the parent class to close the popup
  }

  // Retrieves the values of the form inputs and returns them as an object
  _getInputValues() {
    const inputsObject = {};
    const inputList = this._popupForm.querySelectorAll(".modal__input");
    console.log(inputList);
    inputList.forEach((input) => {
      if (input.value !== "") {
        inputsObject[input.name] = input.value;
      }
    });
    return inputsObject;
  }

  // Submits the form by calling the handleFormSubmit function with the input values
  _submitForm = () => {
    const inputValues = this._getInputValues();
    console.log(inputValues);
    this._handleFormSubmit(inputValues);
  };

  // Sets up event listeners for the popup
  _setEventListeners() {
    super._setEventListeners(); // Sets up event listeners inherited from the parent class (Popup)
    this._popupElement.addEventListener("submit", this._submitForm);
  } // Listens for form submission to trigger the _submitForm method
}

export default PopupWithForm;
