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

const generateFilmCard = () => {
  return {
    poster: `./images/posters/the-dance-of-life.jpg`,
    name: `The Dance of Life`,
    rating: `8.3`,
    releaseYear: `1929`,
    duration: `1h 55m`,
    genre: `Musical`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    comments,
  };
};

export const generateFilmsCards = (amount) => {
  return new Array(amount)
    .fill(``)
    .map(generateFilmCard);
};
