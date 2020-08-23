import {SORT_ITEM_NAMES} from './../constants.js';

export const generateSortList = () => {
  return SORT_ITEM_NAMES.map((it) => {
    return {
      title: it,
    };
  });
};
