import {FILTER_NAMES, FilterType} from '../constants';
import {renderComponent, RenderPosition, replaceComponent} from '../utils/render';
import {getFilmsByFilter} from '../utils/filter';
import {Filter} from '../components/filter';

export class FilterController {
  constructor(container, filmsModel) {
    this._container = container;
    this._filmsModel = filmsModel;

    this._activeFilterType = FilterType.ALL;
    this._filterComponent = null;

    this._onDataChange = this._onDataChange.bind(this);
    this._onFilterChange = this._onFilterChange.bind(this);

    this._filmsModel.setDataChangeHandler(this._onDataChange);
  }

  render() {
    const container = this._container;
    const allFilms = this._filmsModel.getFilms();

    const filters = Object.values(FilterType).map((filterType, index) => {
      return {
        path: filterType,
        title: FILTER_NAMES[index],
        amount: filterType !== FilterType.ALL ? getFilmsByFilter(allFilms, filterType).length : null,
        isActive: filterType === this._activeFilterType,
      };
    });

    const oldComponent = this._filterComponent;

    this._filterComponent = new Filter(filters);
    this._filterComponent.setFilterChangeHandler(this._onFilterChange);

    if (oldComponent) {
      replaceComponent(this._filterComponent, oldComponent);
    } else {
      renderComponent(container, this._filterComponent, RenderPosition.AFTERBEGIN);
    }
  }

  _onFilterChange(filterType) {
    this._filmsModel.setFilter(filterType);
    this._activeFilterType = filterType;
  }

  _onDataChange() {
    this.render();
  }
}
