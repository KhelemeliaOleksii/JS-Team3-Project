import {getSlicedArrayOfMovies, settingsForPagination} from './sliceLocalMovies'
import { markupGalleryWithPagination } from './markupGallery';
import { renderPagination } from './paginationRenderer'

export function queueMoviesFirstPage() {
    getQueueMovies(1)
}

export function getQueueMovies(renderPage) { 
    const watchedButtonRef = document.querySelector('#header__btn--watched')
    const queueButtonRef = document.querySelector('#header__btn--queue')

    watchedButtonRef.classList.add("transparent-btn")
    queueButtonRef.classList.remove("transparent-btn")

    const arrayOfLocalMovies = getSlicedArrayOfMovies(renderPage, 'queue')

    markupGalleryWithPagination(arrayOfLocalMovies);

    const settings = settingsForPagination(renderPage, 'queue')
    renderPagination(settings);

    const paginationWrapper = document.querySelector('#pagination-button__list-container');
    paginationWrapper.addEventListener('click', paginationListener);
}

function paginationListener(event) {
    event.preventDefault();
    const { target } = event;

    if (!target.classList.contains('pagination-button--active')) {
        return;
    }

    const nextPage = target.getAttribute('data-pageNumber');
    getQueueMovies(nextPage);
} 