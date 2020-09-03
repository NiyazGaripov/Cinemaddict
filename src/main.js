import {FILM_SECTIONS} from './constants.js';
import {renderComponent} from './utils/render.js';
import {createProfileComponent} from './components/profile.js';
import {createNavigationComponent} from './components/navigation.js';
import {createSortComponent} from './components/sort.js';
import {createFilmsListComponent} from './components/film-list.js';
import {createFilmStatisticsComponent} from './components/film-statistics.js';
import {createFilmDetailsComponent} from './components/film-details.js';
import {generateNavigationList} from './mock/nav-list.js';
import {generateSortList} from './mock/sort-list.js';

const pageHeader = document.querySelector(`.header`);
const pageMain = document.querySelector(`.main`);
const pageFooter = document.querySelector(`.footer`);
const navList = generateNavigationList();
const sortList = generateSortList();

renderComponent(pageHeader, createProfileComponent());
renderComponent(pageMain, createNavigationComponent(navList));
renderComponent(pageMain, createSortComponent(sortList));
renderComponent(pageMain, createFilmsListComponent());
renderComponent(pageFooter, createFilmStatisticsComponent());
renderComponent(document.body, createFilmDetailsComponent());
