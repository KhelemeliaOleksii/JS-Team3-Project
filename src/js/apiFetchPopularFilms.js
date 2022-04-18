import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = '70c5c640dcd47438a9460ce1b8e1a5b1';

export async function fetchPopularFilms(page) {
  const response = await axios.get(
    `${BASE_URL}/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`,
  );
  return response.data;
}
