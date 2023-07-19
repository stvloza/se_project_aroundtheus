class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector); // The popup element to manipulate
    this._closeByEscape = this._closeByEscape.bind(this); // Binds the closeByEscape method to the class instance
    this._closeByMouseDown = this._closeByMouseDown.bind(this); // Binds the closeByMouseDown method to the class instance
  }

  // Opens the popup
  open() {
    this._popupElement.classList.add("modal_opened"); // Adds the "modal_opened" class to show the popup
    this._setEventListeners(); // Sets up event listeners to handle closing the popup
  }

  // Closes the popup
  close() {
    this._popupElement.classList.remove("modal_opened"); // Removes the "modal_opened" class to hide the popup
    this._popupElement.removeEventListener("click", this._closeByMouseDown); // Removes the event listener for closing by mouse down
    document.removeEventListener("keydown", this._closeByEscape); // Removes the event listener for closing by Escape key
  }

  // Closes the popup when the Escape key is pressed
  _closeByEscape = (e) => {
    if (e.key === "Escape") {
      this.close(); // Calls the close method to close the popup
    }
  };

  // Closes the popup when clicked outside the popup or on the close button
  _closeByMouseDown = (e) => {
    if (
      e.target.classList.contains("modal") ||
      e.target.classList.contains("modal__close")
    ) {
      this.close(); // Calls the close method to close the popup
    }
  };

  // Sets up event listeners for closing the popup
  _setEventListeners() {
    document.addEventListener("keydown", this._closeByEscape); // Listens for the Escape keydown event to close the popup
    this._popupElement.addEventListener("click", this._closeByMouseDown); // Listens for mouse down events to close the popup
  }
}

export default Popup;
