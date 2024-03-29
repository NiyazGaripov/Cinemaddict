import {TEXT_COMMENTS, EMOJIS, COMMENT_AUTHORS} from '../constants';
import {getRandomArrayItem} from '../utils/common';
import {getRandomDate} from '../utils/date';

const generateComment = () => {
  return {
    id: String(new Date() + Math.random()),
    text: getRandomArrayItem(TEXT_COMMENTS),
    emoji: getRandomArrayItem(EMOJIS),
    author: getRandomArrayItem(COMMENT_AUTHORS),
    date: getRandomDate(),
  };
};

export const generateComments = (amount) => {
  return new Array(amount)
    .fill(``)
    .map(generateComment);
};
