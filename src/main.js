import {renderComponent} from './utils/render.js';
import {Profile} from './components/profile.js';
import {FilmsSection} from './components/films-section.js';
import {FooterStatistics} from './components/footer-statistics.js';
import {generateFilmsCards} from './mock/film-cards.js';
import {PageController} from './controllers/page';
import {Films} from './models/films';
import {FilterController} from './controllers/filter';
import {Statistic} from './components/films-statistics';

const FILM_CARDS_AMOUNT = 20;

const pageHeader = document.querySelector(`.header`);
const pageMain = document.querySelector(`.main`);
const pageFooter = document.querySelector(`.footer`);
const filmCards = generateFilmsCards(FILM_CARDS_AMOUNT);

renderComponent(pageHeader, new Profile());

const filmsModel = new Films();
filmsModel.setFilms(filmCards);

const filterController = new FilterController(pageMain, filmsModel);
filterController.render();

const filmSectionComponent = new FilmsSection();
renderComponent(pageMain, filmSectionComponent);

const page = new PageController(filmSectionComponent, filmsModel);
page.render();

const statisticComponent = new Statistic();
renderComponent(pageMain, statisticComponent);

renderComponent(pageFooter, new FooterStatistics(filmCards));
