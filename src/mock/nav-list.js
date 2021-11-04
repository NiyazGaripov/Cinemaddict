import {FILTER_NAMES} from '../constants';

export const generateNavigationList = () => {
  const FIRST_ELEMENT = 0;
  const COEFFICIENT = 10;

  return FILTER_NAMES.map((it) => {
    return {
      path: it.split(` `)[FIRST_ELEMENT].toLowerCase(),
      title: it,
      amount: Math.floor(Math.random() * COEFFICIENT),
    };
  });
};
