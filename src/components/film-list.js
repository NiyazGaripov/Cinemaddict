import {generateFilmsCards} from './../mock/film-cards.js';
import {createFilmCardsComponent} from './film-cards.js';
import {createShowMoreButtonComponent} from './show-more-button.js';

const FILM_CARDS_AMOUNT = 20;
const FILM_RATED_CARDS_AMOUNT = 15;
const FILM_COMMENTED_CARDS_AMOUNT = 10;
const filmCards = generateFilmsCards(FILM_CARDS_AMOUNT);
const filmCardsTopRated = generateFilmsCards(FILM_RATED_CARDS_AMOUNT);
const filmCardsMostCommented = generateFilmsCards(FILM_COMMENTED_CARDS_AMOUNT);

export const createFilmsListComponent = () => {
  const filmCardsComponent = createFilmCardsComponent(filmCards);
  const showMoreButtonComponent = createShowMoreButtonComponent();
  const filmTopRatedCardsComponent = createFilmCardsComponent(filmCardsTopRated);
  const filmMostCommentedCardsComponent = createFilmCardsComponent(filmCardsMostCommented);

  return (
    `<section class="films">
      <section class="films-list">
        <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
        <div class="films-list__container">
          ${filmCardsComponent}
        </div>
          ${showMoreButtonComponent}
      </section>
      <section class="films-list--extra">
        <h2 class="films-list__title">Top rated</h2>
        <div class="films-list__container">
          ${filmTopRatedCardsComponent}
        </div>
      </section>
      <section class="films-list--extra">
        <h2 class="films-list__title">Most commented</h2>
        <div class="films-list__container">
          ${filmMostCommentedCardsComponent}
        </div>
      </section>
    </section>`
  );
};
