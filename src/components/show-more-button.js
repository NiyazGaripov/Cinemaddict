import {createElement} from './../utils/common.js';

const createShowMoreButtonComponent = () => {
  return (
    `<button class="films-list__show-more">Show more</button>`
  );
};

export class ShowMoreButton {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createShowMoreButtonComponent();
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
