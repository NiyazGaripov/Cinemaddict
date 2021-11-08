import {AbstractComponent} from './abstract-component';

const createFooterStatisticsComponent = (films) => {
  const filmsAmount = films.length;

  return (
    `<section class="footer__statistics">
      <p>${filmsAmount} movies inside</p>
    </section>`
  );
};

export class FooterStatistics extends AbstractComponent {
  constructor(films) {
    super();
    this._films = films;
  }

  getTemplate() {
    return createFooterStatisticsComponent(this._films);
  }
}
