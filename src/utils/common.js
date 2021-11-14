import {UserRank} from '../constants';

const MAX_VALUE = 10;

export const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

export const getRandomArrayItem = (array) => {
  const randomItem = getRandomIntegerNumber(0, array.length);

  return array[randomItem];
};

export const setValueFormat = (value) => {
  return value < MAX_VALUE ? `0${value}` : String(value);
};

export const setActiveClass = (container, element, activeClass) => {
  const activeElement = container.querySelector(`.${activeClass}`);

  if (!element.classList.contains(`${activeClass}`)) {
    activeElement.classList.remove(activeClass);
    element.classList.add(activeClass);
  }
};

export const getUserRank = (amount) => {
  let userRank;

  if (amount === 0) {
    return null;
  } else if (amount >= 1 && amount <= 10) {
    userRank = UserRank.NOVICE;
  } else if (amount >= 11 && amount <= 20) {
    userRank = UserRank.FAN;
  } else if (amount >= 21) {
    userRank = UserRank.MOVIE_BUFF;
  }

  return userRank;
};
