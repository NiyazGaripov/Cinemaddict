import {getRandomArrayItem, getRandomIntegerNumber} from './common';

export const generateDescription = (desc, minAmount, maxAmount) => {
  const sentencesAmount = getRandomIntegerNumber(minAmount, maxAmount);

  return new Array(sentencesAmount)
    .fill(``)
    .map(() => `${getRandomArrayItem(desc)}`)
    .join(` `);
};

export const getShortDescription = (desc, limit) => {
  if (desc.length >= limit) {
    return desc.slice(0, limit).trim() + `…`;
  }

  return desc;
};
