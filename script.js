var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8];
console.log('answer', _.without(array, 3));

const css = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body = document.getElementById('gradient');
const randomBtn = document.getElementById('random-btn')

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    // Array.from({length: 6}).forEach(() clearInterval=> {
    //     color += letters[Math.floor(Math.random() * 16)]
    // })
    return color;
}

function setGradient() {
    body.style.background =
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";
    css.textContent = body.style.background;
}

function setRandomGradient() {
    const randomColor1 = getRandomColor();
    const randomColor2 = getRandomColor();

    color1.value = randomColor1;
    color2.value = randomColor2;

    setGradient();
}

// Set random gradient on page load
window.onload = setRandomGradient;

color1.addEventListener('input', setGradient)
color2.addEventListener('input', setGradient)
randomBtn.addEventListener('click', setRandomGradient)
