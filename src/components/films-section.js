import {AbstractComponent} from './../components/abstract-component.js';

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
