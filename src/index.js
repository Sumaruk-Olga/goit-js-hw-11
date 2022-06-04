import Notiflix from 'notiflix';
import axios from "axios";
const debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;

const refs = {
    form:document.querySelector('.search-form'),
    // searchQuery: document.querySelector('input[name="searchQuery"]'),
    // submit:document.querySelector('button[type="submit"]'),
};

console.log(refs.form);
// console.log(refs.submit);

refs.form.addEventListener('input', debounce(onInputChange, DEBOUNCE_DELAY));
refs.form.addEventListener('submit', onSubmitForm);


function onInputChange(event) {
    console.log(event.target.value);
}

function onSubmitForm(event) {
    event.preventDefault();
    console.log('hi');
    refs.form.reset();
}

// Example
// Performing a GET request

// const axios = require('axios');

// // Make a request for a user with a given ID
// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });

// // Optionally the request above could also be done as
// axios.get('/user', {
//     params: {
//       ID: 12345
//     }
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });  

// // Want to use async/await? Add the `async` keyword to your outer function/method.
// async function getUser() {
//   try {
//     const response = await axios.get('/user?ID=12345');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }