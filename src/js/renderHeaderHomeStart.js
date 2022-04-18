// import { headerPreview } from './headerPreview'
import { headerPreviewHTMLContent } from './headerPreviewHTML'
import { renderHeaderHome, renderHeaderLibrary} from './headerHome';
import { addListenersHeaderHome } from './addListnersHeaderHome'
//import './keyword-search';

// час прев'ю
const TIME_PREVIEW = 2000;

//Спочатку запускаємо нашу прев'юху
const header = document.querySelector('#header');

const preview = new Promise((resolve) => {
    header.insertAdjacentHTML('afterbegin', headerPreviewHTMLContent);
    setTimeout(
        () => {
           // header.innerHTML = "";
            resolve('Ok');
        }
        , TIME_PREVIEW
    )
})
preview.finally(() => {
    // відмальовуємо header для HOME
    renderHeaderHome();
    // додаємо слухачів 
    addListenersHeaderHome();
});




//А потім відрисовуємо HOME
//header.insertAdjacentHTML('afterbegin', headerHomeHTMLContent);


