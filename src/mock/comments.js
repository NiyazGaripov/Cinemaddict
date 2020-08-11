import {TEXT_COMMENTS, EMOJIS, COMMENT_AUTHORS, COMMENT_DATES} from './../constants.js';
import {getRandomArrayItem} from './../utils/common.js';

const generateComment = () => {
  return {
    text: getRandomArrayItem(TEXT_COMMENTS),
    emoji: getRandomArrayItem(EMOJIS),
    author: getRandomArrayItem(COMMENT_AUTHORS),
    date: getRandomArrayItem(COMMENT_DATES),
  };
};

export const generateComments = (amount) => {
  return new Array(amount)
    .fill(``)
    .map(generateComment);
};
