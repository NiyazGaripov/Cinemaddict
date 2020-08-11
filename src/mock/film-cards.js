import {POSTERS, FILM_TITLES, DURATION, GENRE, DESCRIPTION_FILMS} from './../constants.js';
import {getRandomIntegerNumber, getRandomArrayItem} from './../utils/common.js';
import {generateComments} from './comments.js';

const DATE = new Date();
const MIN_RATING = 0;
const MAX_RATING = 9;
const MIN_RELEASE_YEAR = 1920;
const MAX_RELEASE_YEAR = DATE.getFullYear();
const MIN_COMMENTS_AMOUNT = 0;
const MAX_COMMENTS_AMOUNT = 5;
const commentsAmount = getRandomIntegerNumber(MIN_COMMENTS_AMOUNT, MAX_COMMENTS_AMOUNT);
const comments = generateComments(commentsAmount);
const poster = getRandomArrayItem(POSTERS);
const title = getRandomArrayItem(FILM_TITLES);
const rating = `${getRandomIntegerNumber(MIN_RATING, MAX_RATING)}.${getRandomIntegerNumber(MIN_RATING, MAX_RATING)}`;
const releaseYear = getRandomIntegerNumber(MIN_RELEASE_YEAR, MAX_RELEASE_YEAR);
const duration = getRandomArrayItem(DURATION);
const genre = getRandomArrayItem(GENRE);
const description = getRandomArrayItem(DESCRIPTION_FILMS);

const generateFilmCard = () => {
  return {
    poster,
    title,
    rating,
    releaseYear,
    duration,
    genre,
    description,
    comments,
  };
};

export const generateFilmsCards = (amount) => {
  return new Array(amount)
    .fill(``)
    .map(generateFilmCard);
};
