import {AbstractComponent} from './abstract-component';

const createMenuNavigationComponent = () => {
  return (
    `<nav class="main-navigation">
      <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>`
  );
};

export class MenuNavigation extends AbstractComponent {
  getTemplate() {
    return createMenuNavigationComponent();
  }

  setStatsClickHandler(callback) {
    this.getElement()
      .querySelector(`.main-navigation__additional`)
      .addEventListener(`click`, callback);
  }
}
