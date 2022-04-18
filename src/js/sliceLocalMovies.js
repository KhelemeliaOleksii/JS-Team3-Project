import { getQueueFilmFromLocalStorage, getWatchedFilmFromLocalStorage } from './localStorage'

export function getSlicedArrayOfMovies(renderPage, typeOfMovie) {
    let getLocalMovies = []
    const moviePerPage = 20

    if(typeOfMovie === 'queue') {
        getLocalMovies = getQueueFilmFromLocalStorage()
    } else if(typeOfMovie === 'watched') {
        getLocalMovies = getWatchedFilmFromLocalStorage()
    }

    const startSlice = (renderPage - 1) * moviePerPage
    const endSlice = startSlice + moviePerPage

    const slicedArray = getLocalMovies.slice(startSlice, endSlice)
    slicedArray.map(movie => {
        movie.genres = movie.genres.map(genre => genre.name)

        if(movie.genres.length >= 3) {
            movie.genres.splice(3);
            movie.genres[2] = 'Other'
        } else if(movie.genres.length === 0) {
            movie.genres[0] = 'Genre unknown'
        }

        if (movie.release_date) {
            movie.release_date = movie.release_date.slice(0, 4);
          } else if (movie.first_air_date) {
            movie.release_date = movie.first_air_date.slice(0, 4);
          }
    })

    return slicedArray
}

export function settingsForPagination(renderPage, typeOfMovie) {
    let getLocalMovies = []

    if(typeOfMovie === 'queue') {
        getLocalMovies = getQueueFilmFromLocalStorage()
    } else if(typeOfMovie === 'watched') {
        getLocalMovies = getWatchedFilmFromLocalStorage()
    }

    const countOfArray = getLocalMovies.length
    const moviePerPage = 20

    return {
            page: renderPage,
            totalCountItem: countOfArray,
            itemPerPage: moviePerPage,
            ancestorID: "film-list__section",
            insertPlace: "beforeEnd",
        }
}