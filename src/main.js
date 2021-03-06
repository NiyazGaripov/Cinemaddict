import {renderComponent} from './utils/render.js';
import {Profile} from './components/profile.js';
import {Navigation} from './components/navigation.js';
import {FilmsSection} from './components/films-section.js';
import {FilmStatistics} from './components/film-statistics.js';
import {generateNavigationList} from './mock/nav-list.js';
import {generateFilmsCards} from './mock/film-cards.js';
import {PageController} from './controllers/page';

const FILM_CARDS_AMOUNT = 20;

const pageHeader = document.querySelector(`.header`);
const pageMain = document.querySelector(`.main`);
const pageFooter = document.querySelector(`.footer`);
const navList = generateNavigationList();
const filmCards = generateFilmsCards(FILM_CARDS_AMOUNT);

renderComponent(pageHeader, new Profile());
renderComponent(pageMain, new Navigation(navList));

const filmSectionComponent = new FilmsSection();
renderComponent(pageMain, filmSectionComponent);

const pageController = new PageController(filmSectionComponent);
pageController.render(filmCards);

renderComponent(pageFooter, new FilmStatistics());
