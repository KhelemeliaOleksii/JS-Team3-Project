import { fetchPopularFilms } from './apiFetchPopularFilms';
import { markupGalleryWithPagination } from './markupGallery';
import { genres } from './genres';
import { formattingData } from './formattingData';
import { renderPagination } from './paginationRenderer';
import { onTopButtonClick } from './scrollOnTop';

getPopularFilms(1);

export async function getPopularFilms(renderPage) {
  try {
    // Получаем ответ от axios
    const { results } = await fetchPopularFilms(renderPage);

    const settingsDown = {
      page: renderPage,
      totalCountItem: 10000,
      itemPerPage: 20,
      ancestorID: 'film-list__section',
      insertPlace: 'beforeEnd',
    };

    const formattedData = formattingData(results, genres);
    markupGalleryWithPagination(formattedData);
    renderPagination(settingsDown);

    const paginationWrapper = document.querySelector('#pagination-button__list-container');
    paginationWrapper.addEventListener('click', paginationListener);
  } catch (error) {
    console.log('Error on markup', error);
  }
}
// 5) функція-слухач для пагінації
function paginationListener(event) {
  event.preventDefault();
  onTopButtonClick();

  const { target } = event;

  if (!target.classList.contains('pagination-button--active')) {
    return;
  }

  const nextPage = target.getAttribute('data-pageNumber');
  getPopularFilms(nextPage);
}
