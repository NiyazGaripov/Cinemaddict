import {renderComponent} from './../utils/render.js';
import {FilmCard} from './../components/film-card.js';
import {FilmInfo} from './../components/film-details.js';
import {ESC_KEYCODE} from './../constants.js';

export class FilmController {
  constructor(container) {
    this.container = container;
    this._filmCardComponent = null;
    this._filmInfoComponent = null;
  }

  render(film) {

  }
}
