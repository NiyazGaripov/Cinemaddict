import {AbstractComponent} from './abstract-component';

const createFilmsSectionComponent = () => {
  return (
    `<section class="films"></section>`
  );
};

export class FilmsSection extends AbstractComponent {
  getTemplate() {
    return createFilmsSectionComponent();
  }
}
