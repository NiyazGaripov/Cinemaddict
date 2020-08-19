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

export const createNavigationComponent = () => {
  return (
    `<nav class="main-navigation">
      <div class="main-navigation__items">
        <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
        <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>
        <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
        <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
      </div>
      <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>`
  );
};
