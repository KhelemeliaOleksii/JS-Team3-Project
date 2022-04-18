import { fetchPopularFilms } from './API/apiFetchPopularFilms';
import { markupGalleryWithPagination } from './markupGallery';
import { genres } from './genres';
import { formattingData } from './formattingData';

// Як  користуватися пагінацією
// 1) Імпортуємо функцію
import { renderPagination } from './paginationRenderer'

getPopularFilms();

export async function getPopularFilms(renderPage) {
    try {
        // Получаем ответ от axios
        const { results } = await fetchPopularFilms(renderPage);

        const formattedData = formattingData(results, genres);
        markupGalleryWithPagination(formattedData);


        // 2) Створюємо об'єкт налаштувань
        //  - page -  сторінка, яку ви будете відрисовувать у своїй бібліотеці
        //  - totalCountItem - загальна кількість елементів бібліотеки, яка вам приходить у запиті
        //  - itemPerPage - кількість елементів на 1 сторінці
        //  - ancestorID - ID DOM елемента, в якому відрисовуємо пагінацію. 
        //      Якщо у вас немає ID на бібліотеці, створіть його
        //  - insertPlace - місце, куди вставлятиметься пагінація у вибраному DOM елементі
        //      Додавання елементу відбувається за допомогою методу insertAdjusmentElement
        //      Варіанти: <> "beforeEnd"  <> "afterEnd"  <> "beforeStart"  <> "afterStart"
        const settings =
        {
            page: renderPage,
            totalCountItem: 500,
            itemPerPage: 20,
            ancestorID: "film-list__section",
            insertPlace: "beforeEnd",
        }

        // 3) відрисовуємо пагінацію
        renderPagination(settings);

        // 4) додаємо слухача
        const paginationWrapper = document.querySelector('#pagination-button__list-container');
        paginationWrapper.addEventListener('click', paginationListener);

    } catch (error) {
        console.log('Error on markup', error);
    }
}
// 5) функція-слухач для пагінації
function paginationListener(event) {
    event.preventDefault();
    const { target } = event;

    if (!target.classList.contains('pagination-button--active')) {
        return;
    }

    const nextPage = target.getAttribute('data-pageNumber');
    getPopularFilms(nextPage);

} 