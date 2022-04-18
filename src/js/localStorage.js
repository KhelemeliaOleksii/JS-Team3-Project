// Переменная для создания пустого массива, для обьектов с фильмами, при первой загрузки страници
export const arrForLocalStorage = [];
// Две переменные для ключей в local storage
export const LOCALSTORAGE_KEY_FOR_WATCHED = 'films-for-watched';
export const LOCALSTORAGE_KEY_FOR_QUEUE = 'films-for-queue';

// Функция добавляет в local storage пустой массив при первом запуске страници, если его там нет.
// Подключается в index.html
export function addToLocalStorageWhenStart() {
  try {
    if (localStorage.getItem(LOCALSTORAGE_KEY_FOR_WATCHED) === null) {
      const jsonArrWatchedFilms = JSON.stringify(arrForLocalStorage);
      localStorage.setItem(LOCALSTORAGE_KEY_FOR_WATCHED, jsonArrWatchedFilms);
    }
    if (localStorage.getItem(LOCALSTORAGE_KEY_FOR_QUEUE) === null) {
      const jsonArrQueueFilms = JSON.stringify(arrForLocalStorage);
      localStorage.setItem(LOCALSTORAGE_KEY_FOR_QUEUE, jsonArrQueueFilms);
    }
  } catch (error) {
    console.log(error);
  }
}
// Функция добавляет обьект с фильмом в local storage, при нажатии на кнопку "Wached". Принимает
// "objFilm"-это обьект с фильмом. Функция делает проверку:-есть ли уже фильм в коллекции;
// -добавляет обьект в local storage только с полной информацией про фильм
export function addToLocalStorageWatchedFilm(objFilm) {
  try {
    let arrFromLS = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY_FOR_WATCHED));
    if (arrFromLS[0]) {      
      const needObj = arrFromLS.find(obj => obj.id === objFilm.id);
      if (needObj) {
        console.log('Sorry, film is already in collection');
      } else {
        if (objFilm.production_companies) {
          arrFromLS.push(objFilm);
          localStorage.setItem(LOCALSTORAGE_KEY_FOR_WATCHED, JSON.stringify(arrFromLS));
        } else {
          console.log('Sorry, the object does not consist full information');
        }
      }
    } else {
      arrFromLS.push(objFilm);
      localStorage.setItem(LOCALSTORAGE_KEY_FOR_WATCHED, JSON.stringify(arrFromLS));
    }
  } catch (error) {
    console.log(error);
  }
}
// Функция добавляет обьект с фильмом в local storage, при нажатии на кнопку "Queue". Принимает
// "objFilm"-это обьект с фильмом. Функция делает проверку:-есть ли уже фильм в коллекции;
// -добавляет обьект в local storage только с полной информацией про фильм.
export function addToLocalStorageQueueFilm(objFilm) {
  try {
    let arrFromLS = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY_FOR_QUEUE));
    if (arrFromLS[0]) {
      const needObj = arrFromLS.find(obj => obj.id === objFilm.id);
      if (needObj) {
        console.log('Sorry, film is already in collection');
      } else {
        if (objFilm.production_companies) {
          arrFromLS.push(objFilm);
          localStorage.setItem(LOCALSTORAGE_KEY_FOR_QUEUE, JSON.stringify(arrFromLS));
        } else {
          console.log('Sorry, the object does not consist full information');
        }
      }
    } else {
      arrFromLS.push(objFilm);
      localStorage.setItem(LOCALSTORAGE_KEY_FOR_QUEUE, JSON.stringify(arrFromLS));
    }
  } catch (error) {
    console.log(error);
  }
}
// Функция возвращает массив обьектов с фильмами которые добавлены в "Watched" (из local storage)
export function getWatchedFilmFromLocalStorage() {
  try {
    const watchedFilmsArray = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY_FOR_WATCHED));
    return watchedFilmsArray;
  } catch (error) {
    console.log(error);
  }
}
// Функция возвращает массив обьектов с фильмами которые добавлены в "Queue" (из local storage)
export function getQueueFilmFromLocalStorage() {
  try {
    const queueFilmsArray = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY_FOR_QUEUE));
    return queueFilmsArray;
  } catch (error) {
    console.log(error);
  }
}
// Функция удаляет обьект с фильмом в local storage, при нажатии на кнопку "Убрать из Watched". Принимает
// обьект с фильмом, вынимает с него id, ищет фильм по id
export function removeWatchedFilmFromLocalStorage({ id }) {
  try {
    const watchedFilmsArray = getWatchedFilmFromLocalStorage();
    for (let i = 0; i <= watchedFilmsArray.length; i += 1) {
      if (watchedFilmsArray[i].id === id) {
        watchedFilmsArray.splice(i, 1);
        localStorage.setItem(LOCALSTORAGE_KEY_FOR_WATCHED, JSON.stringify(watchedFilmsArray));
      }
    }
  } catch (error) {
    console.log(error);
  }
}
// Функция удаляет обьект с фильмом в local storage, при нажатии на кнопку "Убрать из Queue". Принимает
// обьект с фильмом, вынимает с него id, ищет фильм по id
export function removeQueueFilmFromLocalStorage({ id }) {
  try {
    const queueFilmsArray = getQueueFilmFromLocalStorage();
    for (let i = 0; i <= queueFilmsArray.length; i += 1) {
      if (queueFilmsArray[i].id === id) {
        queueFilmsArray.splice(i, 1);
        localStorage.setItem(LOCALSTORAGE_KEY_FOR_QUEUE, JSON.stringify(queueFilmsArray));
      }
    }
  } catch (error) {
    console.log(error);
  }
}
export function chekFilmByIdWatched(data) {
  const watchedFilmsArray = getWatchedFilmFromLocalStorage();
  if (watchedFilmsArray.length === 0) {
    return false
  }
   return watchedFilmsArray.find((i) =>i.id === Number(data)) 
  }  
export function chekFilmByIdQueue(data) {
  const queueFilmsArray = getQueueFilmFromLocalStorage()
  if (queueFilmsArray.length === 0) {
    return false
  }
  return queueFilmsArray.find((i) =>i.id === Number(data))
}

addToLocalStorageWhenStart();



