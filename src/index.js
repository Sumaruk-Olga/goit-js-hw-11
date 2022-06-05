import Notiflix from 'notiflix';
import ApiService from './api';
import { renderCard } from './renderCards';


const refs = {
    form: document.querySelector('.search-form'),   
    more: document.querySelector('.load-more'),
    gallery: document.querySelector('.gallery'),
};

const apiService = new ApiService();

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
            apiService.incrementPage();
            renderCards(data);
           

    } catch (error) {
        console.log(error);
    }

    refs.form.reset();
    
}

async function onLoadMoreClick(event) {
    try {
        const data = await apiService.fetchData();
        apiService.incrementPage();
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
        const seenPages = apiService.getPage() - 1;
        console.log(seenPages);
        let imagesFind;


        if (seenPages === 1) {
            imagesFind = data.total;
            Notiflix.Notify.success(`Hooray! We found totalHits ${imagesFind} images.`);
                refs.more.classList.remove('visually-hidden');
        } else {
            imagesFind = data.total - (40 * seenPages);
            if (imagesFind <= 40) {
                Notiflix.Notify.info(`We're sorry, but you've reached the end of search results.`);
                
                refs.more.classList.add('visually-hidden');                
            } else {
                Notiflix.Notify.success(`Hooray! We found totalHits ${imagesFind} images.`);
                refs.more.classList.remove('visually-hidden');
            }
            
        }
           
            const allCards = data.hits.map((el) => renderCard(el)).join("");
            refs.gallery.insertAdjacentHTML("beforeend", allCards);
            
        
    }
}