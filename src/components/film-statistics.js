import {AbstractComponent} from "./abstract-component";

const createFilmStatisticsComponent = () => {
  return (
    `<section class="footer__statistics">
      <p>130 291 movies inside</p>
    </section>`
  );
};

export class FilmStatistics extends AbstractComponent {
  getTemplate() {
    return createFilmStatisticsComponent();
  }
}
