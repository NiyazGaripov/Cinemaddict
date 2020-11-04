import {AbstractComponent} from "./abstract-component";

const createNoDataComponent = () => {
  return (
    `<h2 class="films-list__title">There are no movies in our database</h2>`
  );
};

export class NoData extends AbstractComponent {
  getTemplate() {
    return createNoDataComponent();
  }
}
