import {PROFILES} from '../constants';
import {getRandomArrayItem} from '../utils/common';
import {AbstractComponent} from './abstract-component';

const createProfileComponent = () => {
  const userRank = getRandomArrayItem(PROFILES);

  return (
    `<section class="header__profile profile">
      <p class="profile__rating">${userRank}</p>
      <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>`
  );
};

export class Profile extends AbstractComponent {
  getTemplate() {
    return createProfileComponent();
  }
}
