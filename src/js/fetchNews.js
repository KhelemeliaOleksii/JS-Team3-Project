import axios from "axios";
const BASE_URL = 'https://newsdata.io';
const API_KEY = 'pub_6434779cb2ad2e394f72bbc3e1c3695b3c76';

export async function fetchNews() { 
    const { data: response } = await axios.get(`${BASE_URL}/api/1/news?apikey=${API_KEY}&q=films&language=en`)
    return await response;
}