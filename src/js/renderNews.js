import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/modules/navigation/navigation.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import { fetchNews } from './fetchNews.js';
import newsCardTemplate from '../templates/newsCard.hbs';
Swiper.use([Navigation, Pagination]);

renderNews();
const newsSectionWrapper = document.querySelector('.news__section');
export async function renderNews() {
        try {
            const news = await fetchNews();
          renderNewsCard(news.results);  
          const swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            loop: true,
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            keyboard: {
              enabled: true,
              onlyInViewport: true,
            },
            width: 280,
            spaceBetween: 50,
          });
        }
        catch (error) {
          onFetchError();
        }
}
    
function renderNewsCard(data) {
    const listElement = document.querySelector('.news__container');
  listElement.innerHTML = newsCardTemplate(data);
  
    
}
function onFetchError() {  
    console.log('Error fetch news');
  newsSectionWrapper.style.display = 'none';
}

