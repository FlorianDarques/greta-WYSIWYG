// write real time

let zonetext = document.querySelector('#input'); 
let writer = document.querySelector('#writer');
let barProgress = document.querySelector('#bar');
let btn = document.querySelector('#toggle');
let circle = document.querySelector('.circle');


zonetext.style.resize = 'none'; // impossible de resize de textarea 
// mirror screen 

function mirror () {
    let result = zonetext.value; // variable qui récupère la value de ma zoneText
    writer.innerHTML = result;
    let currentLength = writer.innerText.length;
    // console.log(currentLength);
    let currentLength2 = currentLength/2;
    barProgress.style.width = currentLength2 + '%'; 
    barProgress.textContent = currentLength2 + '%';
    if (currentLength2<=50) {
        barProgress.style.backgroundColor = 'green';
    } else {
        if (50<currentLength2<=85) {
            barProgress.style.backgroundColor = 'orange';
        }
        if ( currentLength2 > 85) {
            barProgress.style.backgroundColor = 'red';
        };
    };
    
};
zonetext.addEventListener('input', mirror);

// count limiter 200

function numberChar () {
    let count = writer.innerText.length;
    console.log(count);
    if (count === 200) {
        zonetext.maxLength = 0;
        alert("Bravo ! j'applaudis de la main gauche");
    }
    else if (count < 200) {
        zonetext.setAttribute("maxlength","");
    }
};
zonetext.addEventListener('input', numberChar);

// dark mode 

function darkMode() {
    let swap = document.body;
    swap.classList.toggle('darkmode');
    zonetext.classList.toggle('darkmode');
};
btn.addEventListener('click', darkMode);

// animation

zonetext.addEventListener('mouseover', mouseOver);
zonetext.addEventListener('mouseout', mouseOut);

function mouseOver() {
    circle.style.backgroundColor = "purple"
};
function mouseOut() {
    circle.style.backgroundColor = "lightgreen"
};

// button clear

function clearall () {
    document.querySelector('#input').value=""; //remplace chaque occurence de la value du textarea par un "" donc un élément vide
    document.querySelector('#writer').innerText=""; //remplace chaque occurence de l'innerText de la div miroir par un "" donc un élément vide
};

// button tag

function bold(){
    console.log("bold");
    document.querySelector('#input').value += "<strong></strong>";
};

function italic(){
    console.log("i");
    document.querySelector('#input').value += "<i></i>";
};

function superscript(){
    console.log("superscript");
    document.querySelector('#input').value += "<sup></sup>";
};

function br(){
    console.log("br");
    document.querySelector('#input').value += "</br>";
};