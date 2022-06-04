import Notiflix from 'notiflix';
import axios from "axios";

const refs = {
    searchQuery: document.querySelector('input[name="searchQuery"]'),
    submit:document.querySelector('button[type="submit"]'),
};

console.log(refs.searchQuery);
console.log(refs.submit);

refs.searchQuery.addEventListener('input', onInputChange);
refs.submit.addEventListener('submit', onSubmitForm);


function onInputChange(event) {
    //
}

function onSubmitForm(event) {
    event.preventDefault();
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