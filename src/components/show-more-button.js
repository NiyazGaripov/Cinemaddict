import {AbstractComponent} from "./abstract-component";

const createShowMoreButtonComponent = () => {
  return (
    `<button class="films-list__show-more">Show more</button>`
  );
};

export class ShowMoreButton extends AbstractComponent {
  getTemplate() {
    return createShowMoreButtonComponent();
  }

  setClickHandler(callback) {
    this.getElement().addEventListener(`click`, callback);
  }
}
