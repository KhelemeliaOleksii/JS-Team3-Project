import axios from "axios";
const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = '1a27ac166727ac0de96a34161208f474';

export default class NewApiFilmsByKeywords {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }
    async fetchFilmsByKeywords() {
        const { data: response } = await axios.get(`${BASE_URL}/3/search/movie?api_key=${API_KEY}&language=en-US&query=${this.searchQuery}&per_page=20&page=${this.page}`);
        return await response;
    }
    get query() {
        return this.searchQuery;
    }
    set query(newQuery) {
        this.searchQuery = newQuery;
    }
    get pageNum() { 
        return this.page;
    }
    set pageNum(newPage) { 
        this.page = newPage;
    }

}