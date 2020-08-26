import {POSTERS, FILM_TITLES, DURATIONS, GENRES, DESCRIPTION_FILMS, AGES, DIRECTORS, WRITERS, ACTORS, COUNTRIES} from './../constants.js';
import {getRandomIntegerNumber, getRandomArrayItem, getRandomDate} from './../utils/common.js';
import {generateComments} from './comments.js';

const MIN_RATING = 0;
const MAX_RATING = 9;
const MIN_COMMENTS_AMOUNT = 0;
const MAX_COMMENTS_AMOUNT = 5;

const generateFilmCard = () => {
  const poster = getRandomArrayItem(POSTERS);
  const title = getRandomArrayItem(FILM_TITLES);
  const rating = `${getRandomIntegerNumber(MIN_RATING, MAX_RATING)}.${getRandomIntegerNumber(MIN_RATING, MAX_RATING)}`;
  const release = getRandomDate();
  const duration = getRandomArrayItem(DURATIONS);
  const genre = getRandomArrayItem(GENRES);
  const description = getRandomArrayItem(DESCRIPTION_FILMS);
  const age = getRandomArrayItem(AGES);
  const director = getRandomArrayItem(DIRECTORS);
  const writers = WRITERS.join(`, `);
  const actors = ACTORS.join(`, `);
  const country = getRandomArrayItem(COUNTRIES);
  const commentsAmount = getRandomIntegerNumber(MIN_COMMENTS_AMOUNT, MAX_COMMENTS_AMOUNT);
  const comments = generateComments(commentsAmount);
  const isWatchList = Math.random() > 0.5;
  const isWatched = Math.random() > 0.5;
  const isFavorite = Math.random() > 0.5;

  return {
    poster,
    title,
    rating,
    release,
    duration,
    genre,
    description,
    age,
    director,
    writers,
    actors,
    country,
    comments,
    isWatchList,
    isWatched,
    isFavorite,
  };
};

export const generateFilmsCards = (amount) => {
  return new Array(amount)
    .fill(``)
    .map(generateFilmCard);
};
