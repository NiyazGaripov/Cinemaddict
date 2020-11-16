import {AbstractComponent} from "./abstract-component";
import {generateSortList} from "../mock/sort-list";

const createSortItemComponent = (item, isActive) => {
  const {title} = item;
  const activeClass = isActive ? `sort__button--active` : ``;

  return (
    `<li>
      <a href="#" class="sort__button ${activeClass}">Sort by ${title}</a>
    </li>`
  );
};

const createSortComponent = () => {
  const sortList = generateSortList();
  const createSortList = sortList.map((it, i) => createSortItemComponent(it, i === 0)).join(`\n`);

  return (
    `<ul class="sort">
        ${createSortList}
    </ul>`
  );
};

export class Sort extends AbstractComponent {
  getTemplate() {
    return createSortComponent();
  }
}
