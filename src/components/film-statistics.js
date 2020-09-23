import {createElement} from './../utils/common.js';

const createFilmStatisticsComponent = () => {
  return (
    `<section class="footer__statistics">
      <p>130 291 movies inside</p>
    </section>`
  );
};

export class FilmStatistics {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFilmStatisticsComponent();
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
