import {CHARACTER_LIMIT} from './../constants.js'
import {getRandomArrayItem, getShortDescription} from './../utils/common.js';

export const createFilmCardComponent = (amount) => {
  const {poster, title, rating, release, duration, genres, description, comments, isWatchList, isWatched, isFavorite} = amount;
  const genre = getRandomArrayItem(genres);
  const releaseYear = release.getFullYear();
  const commentsAmount = comments.length;
  const shortDescription = getShortDescription(description, CHARACTER_LIMIT);
  const watchListActiveClass = isWatchList ? `film-card__controls-item--active` : ``;
  const watchedActiveClass = isWatched ? `film-card__controls-item--active` : ``;
  const favoriteActiveClass = isFavorite ? `film-card__controls-item--active` : ``;

  return (
    `<article class="film-card">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${releaseYear}</span>
        <span class="film-card__duration">${duration}</span>
        <span class="film-card__genre">${genre.name}</span>
      </p>
      <img src="./images/posters/${poster}" alt="${title}" class="film-card__poster">
      <p class="film-card__description">${shortDescription}</p>
      <a class="film-card__comments">${commentsAmount} comments</a>
      <form class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${watchListActiveClass}">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${watchedActiveClass}">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite ${favoriteActiveClass}">Mark as favorite</button>
      </form>
    </article>`
  );
};
