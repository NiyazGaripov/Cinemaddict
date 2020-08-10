import {getRandomArrayItem} from './../utils/common.js';

const TEXT_COMMENTS = [
  `Interesting setting and a good cast`,
  `Booooooooooring`,
  `Very very old. Meh`,
  `Almost two hours? Seriously?`
];

const EMOJIS = [
  `smile`,
  `sleeping`,
  `puke`,
  `angry`,
];

const COMMENT_AUTHORS = [
  `Tim Macoveev`,
  `John Doe`,
  `Tim Doe`,
  `John Macoveev`,
];

const COMMENT_DATES = [
  `2019/12/31 23:59`,
  `2020/01/01 00:01`,
  `2020/02/05 10:01`,
  `2020/03/21 15:30`,
];

const POSTERS = [
  `the-dance-of-life`,
  `sagebrush-trail`,
  `the-man-with-the-golden-arm`,
  `santa-claus-conquers-the-martians`,
  `popeye-meets-sinbad`,
  `the-great-flamarion`,
  `made-for-each-other`,
];

const FILM_TITLES = [
  `The Dance of Life`,
  `Sagebrush Trail`,
  `The Man with the Golden Arm`,
  `Santa Claus Conquers the Martians`,
  `Popeye the Sailor Meets Sindbad the Sailor`,
  `The Great Flamarion`,
  `Made for Each Other`,
];

const GENRE = [
  `Musical`,
  `Western`,
  `Drama`,
  `Comedy`,
  `Cartoon`,
  `Mystery`,
];

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
