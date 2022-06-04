import Notiflix from 'notiflix';
import axios from "axios";
const debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;
const KEY_TO_LOCALSTORAGE = "form-data";

const refs = {
    form: document.querySelector('.search-form'),
    searchQuery: document.querySelector('input[name="searchQuery"]'),//потрібні для того, щоб при перезавантаженні сторінки з локального сховища записати в них данні
    more:document.querySelector('.more'),
};

initPage();

refs.form.addEventListener('input', debounce(onInputChange, DEBOUNCE_DELAY));
refs.form.addEventListener('submit', onSubmitForm);


function initPage() {
    //ховаємо непотрібну поки кнопку
    //elem.classList.add(cls) - додає клас cls до списку класів елемента.
    refs.more.classList.add('visually-hidden');
    // якщо є данні в локальному сховищі, щи їх ставимо в поле вводу, якщо ні, то пуста строка
    const savedData = localStorage.getItem(KEY_TO_LOCALSTORAGE);
    let parsedSavedData;
    console.log('savedData', savedData);
    if (savedData) {
        parsedSavedData = JSON.parse(savedData);        
   
        refs.searchQuery.value = parsedSavedData.searchQuery || "";
        
    } else {
        parsedSavedData = {};
    }
    console.log('parsedSavedData', parsedSavedData);
}

function onInputChange(event) {
// якщо є данні в локальному сховищі, щи їх ставимо в поле вводу, якщо ні, то пуста строка

    const savedData = localStorage.getItem(KEY_TO_LOCALSTORAGE);
    let parsedSavedData;
    if (savedData) {
        parsedSavedData = JSON.parse(savedData);        
    } else {
        parsedSavedData = {};
    }
    //введенні данні записуємо в сховище
    parsedSavedData.searchQuery = event.target.value;
    refs.searchQuery = parsedSavedData.searchQuery || "";       
    localStorage.setItem(KEY_TO_LOCALSTORAGE, JSON.stringify(parsedSavedData));
}



function onSubmitForm(event) {
    event.preventDefault();
    // перевірка чи є данні
    if (refs.searchQuery.value === "") {
        Notiflix.Notify.failure('Please fill in all fields!');
        return;
    };
    ///данні з локального сховища ставимо в поле вводу
    const savedData = localStorage.getItem(KEY_TO_LOCALSTORAGE);
    const parsedSavedData = JSON.parse(savedData);
    console.log('parsedSavedData', parsedSavedData);

    //і відправляємо запит на сервер
    console.log('відправляємо запит на сервер  за першою сторінкою');
    //після приходу відповіді малюємо інтерфейс


    //показуємо кнопку і обробляємо запит ще, якщо треба
    refs.more.classList.remove('visually-hidden');
    refs.more.addEventListener('click', onClickSearch);


    function onClickSearch(event) {
        console.log('відправляємо запит на сервер  за наступною сторінкою');
        //і домальовуємо інтерфейс
}

    localStorage.removeItem(KEY_TO_LOCALSTORAGE);
    refs.form.reset();
    //очищаємо контент сторінки і знову ховаємо кнопку


}