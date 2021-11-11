import './index.css';
import JS_IMAGE from './assets/images/js.png'

console.log('hello world');

const title = document.createElement('h1');
title.textContent = 'I love JavaScript!';
title.classList.add('title');

const img = document.createElement('img');
img.src = JS_IMAGE;
img.classList.add('image');

document.body.insertAdjacentElement('beforeend', title);
document.body.insertAdjacentElement('beforeend', img);

let arr = [1, 2, 3];

arr = arr.map(number => number * 2);

console.log('arr', arr);

let newArr = [...arr, 8, 10, 12];

console.log('newArr', newArr);

const user = {
    age: 30,
    name: 'Vasya'
}

const {name, age} = user;

console.log('name', name);
console.log('age', age);
