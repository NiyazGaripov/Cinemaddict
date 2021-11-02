import dayjs from 'dayjs';
import {getRandomIntegerNumber} from "./common";

const MIN_COEFFICIENT = 0;
const MAX_COEFFICIENT = 30000;

export const getRandomDate = () => {
  const targetDate = new Date();
  const diffValue = getRandomIntegerNumber(MIN_COEFFICIENT, MAX_COEFFICIENT);

  targetDate.setDate(targetDate.getDate() - diffValue);

  return targetDate;
};

export const getFullYear = (date) => {
  return dayjs(date).format(`YYYY`);
};

export const formatReleaseDate = (date) => {
  return dayjs(date).format(`DD MMMM YYYY`);
};
