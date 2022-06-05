import Notiflix from 'notiflix';
import ApiService from './api';



const refs = {
    form: document.querySelector('.search-form'),   
    more: document.querySelector('.load-more'),
};


const apiService = new ApiService();

//ховаємо непотрібну кнопку
refs.more.classList.add('visually-hidden');

refs.form.addEventListener('submit', onSubmitForm);
refs.more.addEventListener('click', onLoadMoreClick);



function onSubmitForm(event) {
    event.preventDefault();
    // перевірка чи є данні
    
   
    refs.more.classList.remove('visually-hidden');
// відправляємо запит на сервер і малюємо сторінку
        refs.form.reset();
        //очищаємо контент сторінки і знову ховаємо кнопку
    
}

function onLoadMoreClick(event) {
    console.log('відправляємо запит на сервер  за наступною сторінкою');
    //і домальовуємо інтерфейс
}