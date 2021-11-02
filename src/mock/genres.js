import {getRandomArrayItem} from '../utils/common';
import {GENRES} from '../constants';

const generateGenre = () => {
  return {
    name: getRandomArrayItem(GENRES),
  };
};

export const generateGenres = (amount) => {
  return new Array(amount)
    .fill(``)
    .map(generateGenre);
};
