import {renderComponent} from './utils/render.js';
import {Profile} from './components/profile.js';
import {FilmsSection} from './components/films-section.js';
import {FooterStatistics} from './components/footer-statistics.js';
import {generateFilmsCards} from './mock/film-cards.js';
import {PageController} from './controllers/page';
import {Films} from './models/films';
import {FilterController} from './controllers/filter';
import {Statistic} from './components/films-statistics';
import {MenuNavigation} from './components/menu-navigation';

const FILM_CARDS_AMOUNT = 20;

const pageHeader = document.querySelector(`.header`);
const pageMain = document.querySelector(`.main`);
const pageFooter = document.querySelector(`.footer`);
const filmCards = generateFilmsCards(FILM_CARDS_AMOUNT);

const filmsModel = new Films();
filmsModel.setFilms(filmCards);

renderComponent(pageHeader, new Profile(filmsModel.getFilteredFilms()));

const menuNavigation = new MenuNavigation();
renderComponent(pageMain, menuNavigation);

const filterController = new FilterController(menuNavigation.getElement(), filmsModel);
filterController.render();

const filmSectionComponent = new FilmsSection();
renderComponent(pageMain, filmSectionComponent);

const pageController = new PageController(filmSectionComponent, filmsModel);
pageController.render();

const statisticComponent = new Statistic({films: filmsModel});
renderComponent(pageMain, statisticComponent);

statisticComponent.hide();

menuNavigation.setStatsClickHandler((evt) => {
  evt.preventDefault();

  pageController.hide();
  statisticComponent.show();
});

filterController.setFilterClickHandler(() => {
  statisticComponent.hide();

  pageController.show();
  statisticComponent.hide();
});

renderComponent(pageFooter, new FooterStatistics(filmCards));
