import dayjs from 'dayjs';
import durationPlugin from 'dayjs/plugin/duration';
import {getRandomIntegerNumber} from "./common";

const MIN_COEFFICIENT = 0;
const MAX_COEFFICIENT = 30000;
dayjs.extend(durationPlugin);

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

export const formatCommentDate = (date) => {
  return dayjs(date).format(`YYYY/MM/DD HH:mm`);
};

export const getFilmDuration = (duration) => {
  const filmDuration = dayjs.duration(duration, `minutes`);
  let hours = filmDuration.hours();
  let minutes = filmDuration.minutes();

  hours = hours > 0 ? `${hours}h` : ``;
  minutes = minutes > 0 ? `${minutes}m` : ``;

  if (hours && minutes) {
    hours += ` `;
  }

  return hours + minutes;
};
