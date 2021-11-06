import {FilterType} from '../constants';

export const getFilmsByFilter = (films, filterType) => {
  switch (filterType) {
    case FilterType.WATCHLIST:
      return getWatchListFilms(films);
    case FilterType.HISTORY:
      return getWatchedFilms(films);
    case FilterType.FAVORITES:
      return getFavoritesFilms(films);
  }

  return films;
};

const getWatchListFilms = (films) => {
  return films.filter((film) => film.isWatchList);
};

const getWatchedFilms = (films) => {
  return films.filter((film) => film.isWatched);
};

const getFavoritesFilms = (films) => {
  return films.filter((film) => film.isFavorite);
};
