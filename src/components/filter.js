import {AbstractComponent} from './abstract-component';

const BEGIN_SLICE = 1;

const getFilterTitleByHref = (href) => {
  return href.slice(BEGIN_SLICE);
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

  setFilterClickHandler(handler) {
    const filterList = Array.from(this.getElement().querySelectorAll(`.main-navigation__item`));

    filterList.forEach((item) => {
      item.addEventListener(`click`, (evt) => {
        evt.preventDefault();

        const filterTitle = getFilterTitleByHref(evt.target.href);

        handler(filterTitle);
      });
    });
  }
}
