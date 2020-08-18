import {PROFILE} from './../constants.js';
import {getRandomArrayItem} from './../utils/common.js';

export const createProfileComponent = () => {
  return (
    `<section class="header__profile profile">
      <p class="profile__rating">Movie Buff</p>
      <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>`
  );
};
