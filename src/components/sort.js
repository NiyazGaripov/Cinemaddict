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

      const sortType = evt.target.dataset.sortType;
      const sortContainer = evt.target.closest(`.sort`);
      const activeClass = `sort__button--active`;
      const activeElement = sortContainer.querySelector(`.${activeClass}`);

      if (evt.target.tagName !== `A`) {
        return;
      }

      activeElement.classList.remove(activeClass);
      evt.target.classList.add(activeClass);

      if (this._currentSortType === sortType) {
        return;
      }

      this._currentSortType = sortType;

      callback(this._currentSortType);
    });
  }
}
