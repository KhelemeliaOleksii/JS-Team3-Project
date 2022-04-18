import { headerHomeHTMLContent } from './headerHomeHTML';
import { headerLibraryHTMLContent } from './headerLibraryHTML';
import { addListenersHeaderHome, addListenersHeaderLibrary } from './addListnersHeaderHome';
import { getPopularFilms } from './getPopularFilms';
// import { getQueueFilms } from './getQueueFilms';

export function renderHeaderHome() {
  const header = document.querySelector('#header');
  header.classList.add('main-header-img');
  header.innerHTML = headerHomeHTMLContent;
}

// Render header on button click

export function renderHeaderHomeOnClick(event) {
  event.preventDefault();
  const header = document.querySelector('#header');
  if (header.classList.contains('library-header-img')) {
    header.classList.remove('library-header-img');
    header.classList.add('main-header-img');
    header.innerHTML = headerHomeHTMLContent;
  }
  addListenersHeaderHome();
  getPopularFilms();
}

export function renderHeaderLibraryOnClick(event) {
  event.preventDefault();
  const header = document.querySelector('#header');
  if (header.classList.contains('main-header-img')) {
    header.classList.remove('main-header-img');
    header.classList.add('library-header-img');
    header.innerHTML = headerLibraryHTMLContent;
  }
  addListenersHeaderLibrary();
  // getQueueFilms();
}
