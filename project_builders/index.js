import './index.css';

console.log('hello world');

const title = document.createElement('h1');
title.textContent = 'I love JavaScript!';
title.classList.add('title');

const img = document.createElement('img');
img.src = './assets/js.png';
img.classList.add('image');

document.body.append(title);
document.body.append(img);
