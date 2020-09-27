import {createElement} from './../utils/common.js';

const createNoDataComponent = () => {
  return (
    `<h2 class="films-list__title">There are no movies in our database</h2>`
  );
};

export class NoData {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createNoDataComponent();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
