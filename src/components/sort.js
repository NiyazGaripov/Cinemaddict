import {AbstractComponent} from './abstract-component';
import {SORT_ITEM_NAMES, SortType} from './../constants';

const createSortItemComponent = (type, isActive) => {
  const activeClass = isActive ? `sort__button--active` : ``;

  return (
    `<li>
      <a href="#" data-sort-type="${type}" class="sort__button ${activeClass}">Sort by ${type}</a>
    </li>`
  );
};

const createSortComponent = () => {
  const createSortList = SORT_ITEM_NAMES.map((it, i) => createSortItemComponent(it, i === 0)).join(`\n`);

  return (
    `<ul class="sort">
        ${createSortList}
    </ul>`
  );
};

export class Sort extends AbstractComponent {
  constructor() {
    super();
    this._currentSortType = SortType.DEFAULT;
  }

  getTemplate() {
    return createSortComponent();
  }

  getSortType() {
    return this._currentSortType;
  }

  setSortTypeChangeHandler(callback) {
    this.getElement().addEventListener(`click`, (evt) => {
      evt.preventDefault();

      if (evt.target.tagName !== `A`) {
        return;
      }

      const sortType = evt.target.dataset.sortType;

      if (this._currentSortType === sortType) {
        return;
      }

      this._currentSortType = sortType;

      callback(this._currentSortType);
    });
  }
}
