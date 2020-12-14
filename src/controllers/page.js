import {SortType, FilmSection} from './../constants';
import {removeComponent, renderComponent} from '../utils/render';
import {NoData} from '../components/no-data';
import {Sort} from './../components/sort.js';
import {ShowMoreButton} from '../components/show-more-button';
import {FilmController} from './../controllers/film.js';
import {FilmList} from './../components/film-list.js';

const FILM_CARDS_AMOUNT_ON_START = 5;
const FILM_CARDS_AMOUNT_LOAD_MORE = 5;
const FILM_RATED_CARDS_AMOUNT = 2;
const FILM_COMMENTED_CARDS_AMOUNT = 2;
const BEGIN_INDEX = 0;

const renderFilmCards = (filmCards, container) => {
  return filmCards.map((filmCard) => {
    const filmController = new FilmController(container);

    filmController.render(filmCard);

    return filmController;
  });
};

const renderFilmsList = (container, component, films) => {
  renderComponent(container, component);

  const listContainer = component.getListContainer();
  listContainer.innerHTML = ``;

  return renderFilmCards(films, listContainer);
};

const sortFilms = (films, sortType, from, to) => {
  let sortedFilms = [];
  const showingFilms = films.slice();

  switch (sortType) {
    case SortType.RATING:
      sortedFilms = showingFilms.sort((a, b) => b.rating - a.rating);
      break;
    case SortType.DATE:
      sortedFilms = showingFilms.sort((a, b) => b.release - a.release);
      break;
    case SortType.DEFAULT:
      sortedFilms = showingFilms;
      break;
  }

  return sortedFilms.slice(from, to);
};

export class PageController {
  constructor(container) {
    this._container = container;
    this._films = [];
    this._showingFilmCards = FILM_CARDS_AMOUNT_ON_START;
    this._filmsListComponent = new FilmList(FilmSection.all);
    this._filmsListTopRatedComponent = new FilmList(FilmSection.rating);
    this._filmsListMostCommentedComponent = new FilmList(FilmSection.comment);
    this._noData = new NoData();
    this._sortComponent = new Sort();
    this._showMoreButton = new ShowMoreButton();

    this._sortTypeChangeHandler = this._sortTypeChangeHandler.bind(this);
    this._sortComponent.setSortTypeChangeHandler(this._sortTypeChangeHandler);
  }

  renderFilms(films) {
    const container = this._container.getElement();
    const filmsListSection = container.querySelector(`.films-list`);
    const filmsListContainer = container.querySelector(`.films-list .films-list__container`);
    const hasFilms = films.length > 0;
    const parent = container.parentElement;

    parent.insertBefore(this._sortComponent.getElement(), container);

    if (!hasFilms) {
      renderComponent(filmsListSection, this._noData);
    }

    let showingFilmCards = FILM_CARDS_AMOUNT_ON_START;

    renderFilmCards(films.slice(BEGIN_INDEX, showingFilmCards), filmsListContainer);
    renderShowMoreButton();
  }

  renderFilmsExtra(films, className) {
    const filmsListContainer = this._container.getElement().querySelector(className);
    renderFilmCards(films, filmsListContainer);
  }

  _renderShowMoreButton() {
    removeComponent(this._showMoreButton);

    if (showingFilmCards >= films.length) {
      return;
    }

    renderComponent(filmsListSection, this._showMoreButton);

    this._showMoreButton.setClickHandler(() => {
      const prevFilmCards = showingFilmCards;
      showingFilmCards += FILM_CARDS_AMOUNT_LOAD_MORE;

      const sortedFilms = sortFilms(films, this._sortComponent.getSortType(), prevFilmCards, showingFilmCards);

      renderFilmCards(sortedFilms, filmsListContainer);

      if (showingFilmCards >= films.length) {
        removeComponent(this._showMoreButton);
      }
    });
  }

  _sortTypeChangeHandler(sortType) {
    showingFilmCards = FILM_CARDS_AMOUNT_ON_START;

    const sortedFilms = sortFilms(films, sortType, BEGIN_INDEX, showingFilmCards);

    filmsListContainer.innerHTML = ``;

    renderFilmCards(sortedFilms, filmsListContainer);
    renderShowMoreButton();
  }
}
