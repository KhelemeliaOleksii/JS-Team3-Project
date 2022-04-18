import { clickSearchButton, clearErrorField } from './keyword-search';
import { renderHeaderHomeOnClick, renderHeaderLibraryOnClick } from './headerHome';
import { watchedMoviesFirstPage } from './watchedMovies';
import { queueMoviesFirstPage } from './queueMovies';

export function addListenersHeaderHome() {
  const searchForm = document.querySelector('#header__search-form');
  const headerLinkLogo = document.querySelector('#header__link--home');
  const headerHomeButton = document.querySelector('#header__btn--home');
  const headerLibraryButton = document.querySelector('#header__btn--library');

  searchForm.addEventListener('submit', clickSearchButton);
  searchForm.addEventListener('click', clearErrorField);

  //Додати слухачів  на LIBRARY, HOME, LOGO
  headerLinkLogo.addEventListener('click', renderHeaderHomeOnClick);
  headerHomeButton.addEventListener('click', renderHeaderHomeOnClick);
  headerLibraryButton.addEventListener('click', renderHeaderLibraryOnClick);
}

export function addListenersHeaderLibrary() {
  const headerLinkLogo = document.querySelector('#header__link--home');
  const headerHomeButton = document.querySelector('#header__btn--home');
  const headerLibraryButton = document.querySelector('#header__btn--library');
  const headerLibraryWatched = document.querySelector('#header__btn--watched');
  const headerLibraryQueue = document.querySelector('#header__btn--queue');

  //Додати слухачів  на LIBRARY, HOME, LOGO
  headerLinkLogo.addEventListener('click', renderHeaderHomeOnClick);
  headerHomeButton.addEventListener('click', renderHeaderHomeOnClick);
  headerLibraryButton.addEventListener('click', renderHeaderLibraryOnClick);

  // // Add library buttons listener
  headerLibraryQueue.addEventListener('click', queueMoviesFirstPage);
  headerLibraryWatched.addEventListener('click', watchedMoviesFirstPage);
}

// import { getWatchedFilms } from './getWatchedFilms';
// import { getPopularFilms } from './getPopularFilms';

// const homeHeader = document.querySelector('#header__search-form');
// const libraryHeader = document.querySelector('#library');

// const headerBox = document.querySelector('.header-js');
// // const visuallyHiddenHeaderBoxLib = document.querySelector('.library-header-img');

// function renderHomeHeader() {
//   if (homeHeader.classList.contains('visually-hidden')) {
//     homeHeader.classList.remove('visually-hidden');
//     headerBox.classList.remove('library-header-img');
//     headerBox.classList.add('main-header-img');
//     libraryHeader.classList.add('visually-hidden');
//   }
//   getPopularFilms();
//   // return;
// }

// function renderOnClickLibrary() {
//   if (libraryHeader.classList.contains('visually-hidden')) {
//     libraryHeader.classList.remove('visually-hidden');
//     headerBox.classList.remove('main-header-img');
//     headerBox.classList.add('library-header-img');
//     homeHeader.classList.add('visually-hidden');
//   }
//   return;
//   // getWatchedFilms();
// }

// function renderOnClickHome(event) {
//   event.preventDefault();
//   renderHomeHeader();
// }

// document.getElementById('header__link--home').addEventListener('click', renderOnClickHome, false);
// document.getElementById('header__btn--home').addEventListener('click', renderOnClickHome, false);
// document
//   .getElementById('header__btn--library')
//   .addEventListener('click', renderOnClickLibrary, false);
