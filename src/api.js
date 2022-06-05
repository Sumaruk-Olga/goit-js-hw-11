import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';

class ApiService {

    constructor() {
  this.inputValue = ''; 
}
#API_KEY = '27860642-3e8ada7d92a4932044b8f46a6';    
#page = 1;

    async fetchData() {
        
    const queryParams = new URLSearchParams({
      key: this.#API_KEY,
      q: this.inputValue,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: this.#page,
      per_page: 40,
    });
      const response = await axios.get(`?${queryParams}`);
      this.incrementPage();
    return response.data;
  }

    getPage() {
    return    this.#page;
  }

  incrementPage() {
    this.#page += 1;
  }

  resetPage() {
    this.#page = 1;
  }
}

export default ApiService;