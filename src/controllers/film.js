import {removeComponent, renderComponent, replaceComponent} from '../utils/render';
import {FilmCard} from '../components/film-card';
import {FilmInfo} from '../components/film-details';
import {ESC_KEYCODE} from '../constants';

const body = document.body;
const Mode = {
  DEFAULT: `default`,
  MODAL: `modal`,
};

export class FilmController {
  constructor(container, onDataChange, onViewChange) {
    this._container = container;
    this._mode = Mode.DEFAULT;
    this._film = null;
    this._filmCardComponent = null;
    this._filmInfoComponent = null;
    this._escKeyDownHandler = this._escKeyDownHandler.bind(this);
    this._onDataChange = onDataChange;
    this._onViewChange = onViewChange;
  }

  render(film) {
    const oldFilmCardComponent = this._filmCardComponent;
    const oldFilmInfoComponent = this._filmInfoComponent;
    this._film = film;
    this._filmCardComponent = new FilmCard(film);
    this._filmInfoComponent = new FilmInfo(film);

    this._filmCardComponent.setClickHandler(() => {
      this._showFilmDetails();
    });

    this._filmInfoComponent.setCloseButtonClickHandler(() => {
      this._hideFilmDetails();
    });

    this._filmCardComponent.setWatchListButtonClickHandler((evt) => {
      evt.preventDefault();
      this._addFilmToWatchList();
    });

    this._filmInfoComponent.setWatchListInputChangeHandler(() => {
      this._addFilmToWatchList();
    });

    this._filmCardComponent.setWatchedButtonClickHandler((evt) => {
      evt.preventDefault();
      this._addFilmToWatched();
    });

    this._filmInfoComponent.setWatchedInputChangeHandler(() => {
      this._addFilmToWatched();
    });

    this._filmCardComponent.setFavoriteButtonClickHandler((evt) => {
      evt.preventDefault();
      this._addFilmToFavorite();
    });

    this._filmInfoComponent.setFavoriteInputChangeHandler(() => {
      this._addFilmToFavorite();
    });

    if (oldFilmCardComponent && oldFilmInfoComponent) {
      replaceComponent(this._filmCardComponent, oldFilmCardComponent);
      replaceComponent(this._filmInfoComponent, oldFilmInfoComponent);
    } else {
      renderComponent(this._container, this._filmCardComponent);
    }
  }

  _showFilmDetails() {
    this._onViewChange();
    body.classList.add(`hide-overflow`);
    body.appendChild(this._filmInfoComponent.getElement());
    document.addEventListener(`keydown`, this._escKeyDownHandler);
  }

  _hideFilmDetails() {
    body.classList.remove(`hide-overflow`);
    body.removeChild(this._filmInfoComponent.getElement());
    document.removeEventListener(`keydown`, this._escKeyDownHandler);
  }

  _escKeyDownHandler(evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      this._hideFilmDetails();
      document.removeEventListener(`keydown`, this._escKeyDownHandler);
    }
  }

  _addFilmToWatchList() {
    this._onDataChange(this._film, Object.assign({}, this._film, {
      isWatchList: !this._film.isWatchList,
    }));
  }

  _addFilmToWatched() {
    this._onDataChange(this._film, Object.assign({}, this._film, {
      isWatched: !this._film.isWatched,
    }));
  }

  _addFilmToFavorite() {
    this._onDataChange(this._film, Object.assign({}, this._film, {
      isFavorite: !this._film.isFavorite,
    }));
  }

  setDefaultView() {
    if (this._mode !== Mode.DEFAULT) {
      this._hideFilmDetails();
    }
  }

  destroy() {
    removeComponent(this._filmCardComponent);
    removeComponent(this._filmInfoComponent);
    document.removeEventListener(`keydown`, this._escKeyDownHandler);
  }
}
