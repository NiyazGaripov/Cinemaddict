import {AbstractComponent} from './abstract-component';
import {setActiveClass} from '../utils/common';

const BEGIN_INDEX = 1;

const getFilterTitleByHref = (href) => {
  const index = href.indexOf(`#`) + BEGIN_INDEX;
  return href.slice(index);
};

const createFilterItemComponent = (filter) => {
  const {path, title, amount, isActive} = filter;
  const activeClass = isActive ? `main-navigation__item--active` : ``;
  const filmsAmount = amount !== null;

  return (
    `<a href="#${path}" class="main-navigation__item ${activeClass}">
      ${title}
      ${filmsAmount ? `<span class="main-navigation__item-count">${amount}</span>` : ``}
    </a>`
  );
};

const createFilterComponent = (filters) => {
  const createFilterList = filters.map((filter) => createFilterItemComponent(filter)).join(`\n`);

  return (
    `<nav class="main-navigation">
      <div class="main-navigation__items">
        ${createFilterList}
      </div>
      <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>`
  );
};

export class Filter extends AbstractComponent {
  constructor(filters) {
    super();
    this._filters = filters;
  }

  getTemplate() {
    return createFilterComponent(this._filters);
  }

  setFilterChangeHandler(handler) {
    const filterList = Array.from(this.getElement().querySelectorAll(`.main-navigation__item`));

    filterList.forEach((item) => {
      item.addEventListener(`click`, (evt) => {
        evt.preventDefault();

        const filterTitle = getFilterTitleByHref(evt.target.href);
        const container = this.getElement();
        const activeClass = `main-navigation__item--active`;

        setActiveClass(container, evt.target, activeClass);

        handler(filterTitle);
      });
    });
  }
}
