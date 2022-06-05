import Notiflix from 'notiflix';
import ApiService from './api';
import { renderCard } from './renderCards';


const refs = {
    form: document.querySelector('.search-form'),   
    more: document.querySelector('.load-more'),
    gallery: document.querySelector('.gallery'),
};

const apiService = new ApiService();


//ховаємо непотрібну кнопку
refs.more.classList.add('visually-hidden');

refs.form.addEventListener('submit', onSubmitForm);
refs.more.addEventListener('click', onLoadMoreClick);



async function onSubmitForm(event) {
    event.preventDefault();
 
    // console.log(event.currentTarget.elements.searchQuery.value);
    apiService.inputValue = event.currentTarget.elements.searchQuery.value;
    apiService.resetPage();

    refs.gallery.innerHTML = "";

    if (!apiService.inputValue) {
        Notiflix.Notify.failure('Please fill in all fields!');
        return;
    }
        try {
            const data = await apiService.fetchData();
            renderCards(data);
           

    } catch (error) {
        console.log(error);
    }

    refs.form.reset();
    
}

async function onLoadMoreClick(event) {
    try {
        const data = await apiService.fetchData();
    renderCards(data);
  
    } catch (error) {
        console.log(error);
    }
    
}

function renderCards(data) {
    if (data.hits.length === 0) {  
        refs.more.classList.add('visually-hidden');
        Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
    } else {        

        const seenPages = apiService.getPage();
        console.log(seenPages);
        let imagesFind;
        if (seenPages === 1) {            
          imagesFind = data.total; 
        } else {
         imagesFind = data.total- (40*seenPages) ;
        }
        
        Notiflix.Notify.success(`Hooray! We found totalHits ${imagesFind} images.`);
        const allCards = data.hits.map((el) => renderCard(el)).join("");
        refs.gallery.insertAdjacentHTML("beforeend", allCards);
        refs.more.classList.remove('visually-hidden');
    }
}