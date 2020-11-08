import {FilmCard} from '../components/film-card';
import {onEscKeyDown} from '../utils/common';
import {FilmInfo} from '../components/film-details';
import {removeComponent, renderComponent} from '../utils/render';
import {NoData} from '../components/no-data';
import {ShowMoreButton} from '../components/show-more-button';
import {generateNavigationList} from '../mock/nav-list';
import {generateSortList} from '../mock/sort-list';
import {generateFilmsCards} from '../mock/film-cards';
import {Profile} from '../components/profile';
import {Navigation} from '../components/navigation';
import {Sort} from '../components/sort';
import {FilmList} from '../components/film-list';
import {FILM_SECTIONS} from '../constants';
import {FilmStatistics} from '../components/film-statistics';

const FILM_CARDS_AMOUNT_ON_START = 5;
const FILM_CARDS_AMOUNT_LOAD_MORE = 5;
const BEGIN_INDEX = 0;

const renderFilmCard = (filmsListContainer, filmCard) => {
  const body = document.body;
  const filmCardComponent = new FilmCard(filmCard);

  const showFilmDetails = () => {
    body.classList.add(`hide-overflow`);
    body.appendChild(filmInfoComponent.getElement());
    document.addEventListener(`keydown`, onDocumentEscKeyDown);
  };

  const hideFilmDetails = () => {
    body.classList.remove(`hide-overflow`);
    body.removeChild(filmInfoComponent.getElement());
    document.removeEventListener(`keydown`, onDocumentEscKeyDown);
  };

  const onDocumentEscKeyDown = (evt) => {
    onEscKeyDown(evt, hideFilmDetails);
    document.removeEventListener(`keydown`, onDocumentEscKeyDown);
  };

  filmCardComponent.setClickHandler(showFilmDetails);

  const filmInfoComponent = new FilmInfo(filmCard);

  filmInfoComponent.setClickHandler(hideFilmDetails);
  renderComponent(filmsListContainer, filmCardComponent);
};

const renderFilmList = (filmListComponent, filmCards) => {
  const filmsListSection = filmListComponent.getElement().querySelector(`.films-list`);
  const filmsListContainer = filmListComponent.getElement().querySelector(`.films-list .films-list__container`);
  const hasFilms = filmCards.length > 0;

  if (!hasFilms) {
    renderComponent(filmsListSection, new NoData());
  }

  let showingFilmCards = FILM_CARDS_AMOUNT_ON_START;

  const renderCards = (cards, container, begin, end) => {
    cards
      .slice(begin, end)
      .forEach((card) => {
        renderFilmCard(container, card);
      });
  };

  renderCards(filmCards, filmsListContainer, BEGIN_INDEX, showingFilmCards);

  const showMoreButtonComponent = new ShowMoreButton();

  renderComponent(filmsListSection, showMoreButtonComponent);

  showMoreButtonComponent.setClickHandler(() => {
    const prevFilmCards = showingFilmCards;
    showingFilmCards += FILM_CARDS_AMOUNT_LOAD_MORE;

    renderCards(filmCards, filmsListContainer, prevFilmCards, showingFilmCards);

    if (showingFilmCards >= filmCards.length) {
      removeComponent(showMoreButtonComponent);
    }
  });
};

const renderFilmListExtra = (filmListComponent, filmCards, domElement) => {
  const filmsListContainer = filmListComponent.getElement().querySelector(domElement);

  filmCards
    .forEach((card) => {
      renderFilmCard(filmsListContainer, card);
    });
};

export class PageController {
  constructor(container) {
    this._container = container;
  }

  renderFilms(films) {
    renderFilmList(this._container, films);
  }

  renderFilmsExtra(films, className) {
    renderFilmListExtra(this._container, films, className);
  }
}
