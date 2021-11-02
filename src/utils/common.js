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
