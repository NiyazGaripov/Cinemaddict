import {AbstractComponent} from './abstract-component';

const createFilmStatisticsComponent = (films) => {
  const filmsAmount = films.length;

  return (
    `<section class="footer__statistics">
      <p>${filmsAmount} movies inside</p>
    </section>`
  );
};

export class FilmStatistics extends AbstractComponent {
  constructor(films) {
    super();
    this._films = films;
  }

  getTemplate() {
    return createFilmStatisticsComponent(this._films);
  }
}
