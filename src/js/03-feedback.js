import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";

const email = document.querySelector('input');
const message = document.querySelector('textarea');
const form = document.querySelector('form');

const params = {};

form.addEventListener('input', throttle(saveToLocalStorage, 500));
form.addEventListener('submit', clearData);

function saveToLocalStorage (event) {
    const key = event.target.name;
    params[key] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(params));
}

function getStorageData () {
    const data = localStorage.getItem(STORAGE_KEY);
    const parseData = JSON.parse(data);  
    if (parseData) {
        parseData.email ? email.value = parseData.email : email.value ='';
        parseData.message ? message.value = parseData.message : message.value = '';
    }
    
}
getStorageData();

function clearData (event) {
    event.preventDefault();
    console.log(params);
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
}



