class Section {
  constructor({ items, renderer }, containerSelector) {
    this.items = items;
    this.renderer = renderer;
    this.container = document.querySelector(containerSelector);
  }
  renderItems() {
    this.clearContainer();
    this.items.forEach((item) => {
      const markup = this.renderer(item);
      this.addItem(markup);
    });
  }
  addItem(element) {
    this.container.appendChild(element);
  }
  clearContainer() {
    this.container.innerHTML = "";
  }
}
