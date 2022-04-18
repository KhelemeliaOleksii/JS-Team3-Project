
export  function fetchOneFilm(id) {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=70c5c640dcd47438a9460ce1b8e1a5b1&language=en-US`).then(response => {
        return response.json()
    })};

export function fetchVideo(id) {
       return fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=70c5c640dcd47438a9460ce1b8e1a5b1&language=en-US`).then(response => {
           
    return response.json()
   
   })}
   