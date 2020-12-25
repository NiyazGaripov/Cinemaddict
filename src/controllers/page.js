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
    this._showedFilmControllers = [];
    this._topRatedFilmControllers = [];
    this._mostCommentedFilmControllers = [];
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

  render(films) {
    this._films = films;
    const container = this._container.getElement();
    const parent = container.parentElement;

    parent.insertBefore(this._sortComponent.getElement(), container);

    if (this._films.length === 0) {
      renderComponent(container, this._noData);
    }

    const filmsForShowing = this._films.slice(BEGIN_INDEX, this._showingFilmCards);
    const allFilms = renderFilmsList(container, this._filmsListComponent, filmsForShowing);
    this._showedFilmControllers = this._showedFilmControllers.concat(allFilms);

    this._renderShowMoreButton();

    const isTopRatedFilms = this._films.every((it) => it.rating > 0);

    if (isTopRatedFilms) {
      const ratedFilms = sortFilms(this._films, SortType.RATING, BEGIN_INDEX, FILM_RATED_CARDS_AMOUNT);
      this._topRatedFilmControllers = renderFilmsList(container, this._filmsListTopRatedComponent, ratedFilms);
    }

    renderFilmsList(container, this._filmsListMostCommentedComponent, this._films.slice().sort((a, b) => b.comments.length - a.comments.length).slice(BEGIN_INDEX, FILM_COMMENTED_CARDS_AMOUNT));
  }

  _sortTypeChangeHandler(sortType) {
    this._showingFilmCards = FILM_CARDS_AMOUNT_ON_START;
    const filmsListContainer = this._filmsListComponent.getListContainer();

    const sortedFilms = sortFilms(this._films, sortType, BEGIN_INDEX, this._showingFilmCards);

    filmsListContainer.innerHTML = ``;

    renderFilmCards(sortedFilms, filmsListContainer);
    this._renderShowMoreButton();
  }

  _renderShowMoreButton() {
    removeComponent(this._showMoreButton);

    if (this._showingFilmCards >= this._films.length) {
      return;
    }

    renderComponent(this._filmsListComponent.getElement(), this._showMoreButton);

    this._showMoreButton.setClickHandler(() => {
      const prevFilmCards = this._showingFilmCards;
      const filmsListContainer = this._filmsListComponent.getListContainer();
      this._showingFilmCards += FILM_CARDS_AMOUNT_LOAD_MORE;

      const sortedFilms = sortFilms(this._films, this._sortComponent.getSortType(), prevFilmCards, this._showingFilmCards);

      renderFilmCards(sortedFilms, filmsListContainer);

      if (this._showingFilmCards >= this._films.length) {
        removeComponent(this._showMoreButton);
      }
    });
  }
}
