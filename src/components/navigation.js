import {createElement} from './../utils/common.js';

const createNavigationItemComponent = (item, isActive, hasCount) => {
  const {path, title, amount} = item;
  const activeClass = isActive ? `main-navigation__item--active` : ``;

  return (
    `<a href="#${path}" class="main-navigation__item ${activeClass}">
      ${title}
      ${hasCount ? `<span class="main-navigation__item-count">${amount}</span>` : ``}
    </a>`
  );
};

const createNavigationComponent = (list) => {
  const createNavigationList = list.map((it, i) => createNavigationItemComponent(it, i === 0, i !== 0)).join(`\n`);

  return (
    `<nav class="main-navigation">
      <div class="main-navigation__items">
        ${createNavigationList}
      </div>
      <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>`
  );
};

export class Navigation {
  constructor(list) {
    this._list = list;
    this._element = null;
  }

  getTemplate() {
    return createNavigationComponent(this._list);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
