class Section {
  constructor({ items, renderer }, containerElement) {
    this._items = items; // The array of items to render
    this._renderer = renderer; // The rendering function to be applied to each item
    this._containerElement = containerElement; // The container element where the items will be rendered
  }

  // Renders all items in the section using the provided renderer function
  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  // //renderItems() {
  //   this._renderedItems.forEach((item) => {
  //     this._renderer(item);
  //   });
  // }

  // Adds an item to the end of the section
  addItem(cardElement) {
    this._containerElement.prepend(cardElement); // Appends the card element to the container
  }

  // Adds an item to the beginning of the section
  prependItem(cardElement) {
    this._containerElement.prepend(cardElement); // Prepends the card element to the container
  }
}

export default Section;
