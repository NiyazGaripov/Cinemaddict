import {FILM_SECTIONS} from './constants.js';
import {renderComponent} from './utils/render.js';
import {Profile} from './components/profile.js';
import {Navigation} from './components/navigation.js';
import {Sort} from './components/sort.js';
import {FilmCard} from './components/film-card.js';
import {FilmList} from './components/film-list.js';
import {ShowMoreButton} from './components/show-more-button.js';
import {FilmStatistics} from './components/film-statistics.js';
import {FilmInfo} from './components/film-details.js';
import {generateNavigationList} from './mock/nav-list.js';
import {generateSortList} from './mock/sort-list.js';
import {generateFilmsCards} from './mock/film-cards.js';

const FILM_CARDS_AMOUNT = 20;
const FILM_RATED_CARDS_AMOUNT = 2;
const FILM_COMMENTED_CARDS_AMOUNT = 2;
const BEGIN_INDEX = 0;
const FILM_CARDS_AMOUNT_ON_START = 5;
const FILM_CARDS_AMOUNT_LOAD_MORE = 5;

const renderFilmCard = (filmsListContainer, filmCard) => {
  const filmCardComponent = new FilmCard(filmCard);

  renderComponent(filmsListContainer, filmCardComponent.getElement());
};

const renderFilmList = (filmListComponent, filmCards) => {
  const filmsListSection = filmListComponent.getElement().querySelector(`.films-list`);
  const filmsListContainer = filmListComponent.getElement().querySelector(`.films-list .films-list__container`);
  let showingFilmCards = FILM_CARDS_AMOUNT_ON_START;

  filmCards
    .slice(BEGIN_INDEX, showingFilmCards)
    .forEach((card) => {
      renderFilmCard(filmsListContainer, card);
    });

  const showMoreButtonComponent = new ShowMoreButton();

  renderComponent(filmsListSection, showMoreButtonComponent.getElement());

  showMoreButtonComponent.getElement().addEventListener(`click`, () => {
    const prevFilmCards = showingFilmCards;
    showingFilmCards += FILM_CARDS_AMOUNT_LOAD_MORE;

    filmCards
      .slice(prevFilmCards, showingFilmCards)
      .forEach((card) => {
        renderFilmCard(filmsListContainer, card);
      });

    if (showingFilmCards >= filmCards.length) {
      showMoreButtonComponent.getElement().remove();
      showMoreButtonComponent.removeElement();
    }
  });
};

const renderFilmListTopRated = (filmListComponent, filmCards) => {
  const filmsListContainer = filmListComponent.getElement().querySelector(`.films-list--extra .films-list__container`);

  filmCards
    .forEach((card) => {
      renderFilmCard(filmsListContainer, card);
    });
};

const renderFilmListMostCommented = (filmListComponent, filmCards) => {
  const filmsListContainer = filmListComponent.getElement().querySelector(`.films-list--extra:last-child .films-list__container`);

  filmCards
    .forEach((card) => {
      renderFilmCard(filmsListContainer, card);
    });
};

const pageHeader = document.querySelector(`.header`);
const pageMain = document.querySelector(`.main`);
const pageFooter = document.querySelector(`.footer`);
const navList = generateNavigationList();
const sortList = generateSortList();

const filmCards = generateFilmsCards(FILM_CARDS_AMOUNT);
const filmCardsTopRated = filmCards.slice().sort((a, b) => b.rating - a.rating).slice(BEGIN_INDEX, FILM_RATED_CARDS_AMOUNT);
const filmCardsMostCommented = filmCards.slice().sort((a, b) => b.comments.length - a.comments.length).slice(BEGIN_INDEX, FILM_COMMENTED_CARDS_AMOUNT);

renderComponent(pageHeader, new Profile().getElement());
renderComponent(pageMain, new Navigation(navList).getElement());
renderComponent(pageMain, new Sort(sortList).getElement());

const filmListComponent = new FilmList(FILM_SECTIONS);
renderComponent(pageMain, filmListComponent.getElement());
renderFilmList(filmListComponent, filmCards);
renderFilmListTopRated(filmListComponent, filmCardsTopRated);
renderFilmListMostCommented(filmListComponent, filmCardsMostCommented);

renderComponent(pageFooter, new FilmStatistics().getElement());
