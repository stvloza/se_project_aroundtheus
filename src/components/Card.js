class Card {
  // The constructor function is called when a new instance of the class is created.
  // It initializes the properties of the card instance.
  constructor(
    data,
    templateSelector,
    handleCardImageClick,
    handleDeleteClick,
    previewImageModal,
    previewDescriptionModal
  ) {
    this._name = data.name; // The name of the card
    this._link = data.link; // The image link for the card
    this._templateSelector = templateSelector; // The selector for the card's HTML template
    this._handleCardImageClick = handleCardImageClick; // Function to handle card image click event
    this._previewImageModal = previewImageModal; // Reference to the image preview modal
    this._previewDescriptionModal = previewDescriptionModal; // Reference to the description preview modal
    this._handleDeleteClick = handleDeleteClick;
  }

  // Retrieves the card template from the DOM and clones it
  _getTemplate() {
    this._cardElement = document
      .querySelector(`${this._templateSelector}`)
      .content.querySelector(".card")
      .cloneNode(true);
    return this._cardElement;
  }

  // _getTemplate() {
  //   this._cardElement = document
  //     .querySelector(this._cardTemplateSelector)
  //     .content.querySelector(".card")
  //     .cloneNode(true);
  //   return this._cardElement;
  // }

  // Event handler for the delete button click event
  _handleDeleteButton() {
    this._cardElement.remove(); // Remove the card element from the DOM
    this._cardElement = null; // Set the card element to null
  }

  // Event handler for the like button click event
  _handleLikeButton() {
    // Toggle the 'card__like-button_active' class on the like button
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  // Sets up event listeners on the card element
  _setEventListeners() {
    // Event listener for the card image click event
    this._cardElement
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handleCardImageClick({ name: this._name, link: this._link });
      });

    // Event listener for the delete button click event
    this._cardElement
      .querySelector(".card__delete-button")
      .addEventListener("click", () => this._handleDeleteClick());

    // Event listener for the like button click event
    this._cardElement
      .querySelector(".card__like-button")
      .addEventListener("click", () => this._handleLikeButton());

    // this._deleteButton.addEventListener("click", () =>
    //   this._handleDeleteClick()
    // );
  }

  // Creates and returns the card element
  getCardElement() {
    this._cardElement = this._getTemplate(); // Clone the card template
    this._setEventListeners(); // Set up event listeners on the card element
    this._cardElement.querySelector(".card__title").textContent = this._name; // Set the title of the card
    this._cardElement.querySelector(".card__image").src = this._link; // Set the image source of the card
    this._cardElement.querySelector(".card__image").alt = this._name; // Set the alt text of the card image
    this._deleteButton = this._cardElement.querySelector(
      ".card__delete-button"
    );

    return this._cardElement; // Return the card element
  }
}

export default Card;
