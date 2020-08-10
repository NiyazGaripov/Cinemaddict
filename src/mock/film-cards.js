import {generateComments} from './comments.js';
import {getRandomIntegerNumber, getRandomArrayItem} from './../utils/common.js';

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
