// write real time

let input = document.querySelector('#input'); 
let writer = document.querySelector('#writer');

function miroir () {
    let result = input.value;
    writer.innerHTML = result;
};
input.addEventListener('input', miroir);

// cursor change

input.style.cursor = 'crosshair';

// count 

function test () {
    let count = input.value.length;
    console.log(count)
};
input.addEventListener('keyup', test);

// function barProgress () {
//     let width =
// }