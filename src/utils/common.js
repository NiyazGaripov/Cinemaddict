import dayjs from 'dayjs';

const MIN_COEFFICIENT = 0;
const MAX_COEFFICIENT = 30000;
const MAX_VALUE = 10;

export const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

export const getRandomArrayItem = (array) => {
  const randomItem = getRandomIntegerNumber(0, array.length);

  return array[randomItem];
};

export const getRandomDate = () => {
  const targetDate = new Date();
  const diffValue = getRandomIntegerNumber(MIN_COEFFICIENT, MAX_COEFFICIENT);

  targetDate.setDate(targetDate.getDate() - diffValue);

  return targetDate;
};

export const setValueFormat = (value) => {
  return value < MAX_VALUE ? `0${value}` : String(value);
};

export const getFullYear = (date) => {
  return dayjs(date).format(`YYYY`);
};
