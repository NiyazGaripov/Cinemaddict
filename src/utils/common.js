export const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

export const getRandomArrayItem = (array) => {
  const randomItem = getRandomIntegerNumber(0, array.length);

  return array[randomItem];
};

export const getRandomDate = () => {
  const MIN_COEFFICIENT = 0;
  const MAX_COEFFICIENT = 30000;
  const targetDate = new Date();
  const diffValue = getRandomIntegerNumber(MIN_COEFFICIENT, MAX_COEFFICIENT);

  targetDate.setDate(targetDate.getDate() - diffValue);

  return targetDate;
};

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
