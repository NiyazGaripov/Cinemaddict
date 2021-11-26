import {POSTERS, FILM_TITLES, DESCRIPTION_FILMS, AGES, DIRECTORS, WRITERS, ACTORS, COUNTRIES} from '../constants';
import {getRandomIntegerNumber, getRandomArrayItem} from '../utils/common';
import {generateDescription} from '../utils/text';
import {generateComments} from './comments.js';
import {generateGenres} from './genres.js';
import {getRandomDate} from '../utils/date';

const MIN_RATING = 0;
const MAX_RATING = 9;
const MIN_COMMENTS_AMOUNT = 0;
const MAX_COMMENTS_AMOUNT = 5;
const MIN_SENTENCES_AMOUNT = 1;
const MAX_SENTENCES_AMOUNT = 5;
const MIN_GENRES_AMOUNT = 1;
const MAX_GENRES_AMOUNT = 3;
const MIN_FILM_DURATION = 15;
const MAX_FILM_DURATION = 360;

const generateFilmCard = () => {
  const poster = getRandomArrayItem(POSTERS);
  const title = getRandomArrayItem(FILM_TITLES);
  const rating = `${getRandomIntegerNumber(MIN_RATING, MAX_RATING)}.${getRandomIntegerNumber(MIN_RATING, MAX_RATING)}`;
  const release = getRandomDate();
  const duration = getRandomIntegerNumber(MIN_FILM_DURATION, MAX_FILM_DURATION);
  const genresAmount = getRandomIntegerNumber(MIN_GENRES_AMOUNT, MAX_GENRES_AMOUNT);
  const genres = generateGenres(genresAmount);
  const description = generateDescription(DESCRIPTION_FILMS, MIN_SENTENCES_AMOUNT, MAX_SENTENCES_AMOUNT);
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
  const watchedDate = getRandomDate();

  return {
    id: String(new Date() + Math.random()),
    poster,
    title,
    rating,
    release,
    duration,
    genres,
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
    watchedDate,
  };
};

export const generateFilmsCards = (amount) => {
  return new Array(amount)
    .fill(``)
    .map(generateFilmCard);
};
