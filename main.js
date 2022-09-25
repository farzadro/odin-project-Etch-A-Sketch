// First set value for each button and other parameter that we need.

const container = document.querySelector('.container');
const greyBtn = document.querySelector('.grey');
const blackBtn = document.querySelector('.black');
const randomBtn = document.querySelector('.random');
const eraserBtn = document.querySelector('.eraser');
let getSize = document.getElementById('item');
let errorMassage = document.querySelector('.massage');


//Set function to generate a grid of divs and take every created divs a class of "box"

function createDivs(size) {
  numGrid = size * size
  let squares = container.querySelectorAll('.box');
  squares.forEach(div => div.remove());
  for (var i = 0; i < numGrid; i++) {
    let div = document.createElement('div');
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    div.className = 'box'
    container.appendChild(div);
    div.style.border = '1px solid brown';
    div.style.borderRadius = '10px';
    div.style.margin = '1px'

  }
}
createDivs(16);

//Set buttons addEventListener

greyBtn.addEventListener('click', greyColor);
blackBtn.addEventListener('click', blackColor);
randomBtn.addEventListener('click', randomColor);
eraserBtn.addEventListener('click', erasColor);

//Set every button function with 'mouseover'

function greyColor() {
  let squares = container.querySelectorAll('.box');
  squares.forEach(box => box.addEventListener('mouseover', function(e) {
    box.style.background = 'grey'
  }));

}

function blackColor() {
  let squares = container.querySelectorAll('.box')
  squares.forEach(box => box.addEventListener('mouseover', function(e) {
    box.style.background = 'black'
  }))
}

function randomColor() {
  let squares = container.querySelectorAll('.box')
  squares.forEach(box => box.addEventListener('mouseover', function(e) {
    let R = Math.floor(Math.random() * 255);
    let G = Math.floor(Math.random() * 255);
    let B = Math.floor(Math.random() * 255);
    box.style.background = `rgb(${R}, ${G}, ${B})`

  }));

}

function erasColor() {
  let squares = container.querySelectorAll('.box')
  squares.forEach(box => box.addEventListener('mouseover', function(e) {
    box.style.background = '#FAF7F2'
  }))
}


//Set inputSize function which can evaluate correct user input size

function inputSize(input) {
    let errorMassage = document.querySelector('.massage')

    if (input < 2 || input > 30) {
      createDivs(16);
      errorMassage.textContent = "WRONG NUMBER!!!"
        } else {
      createDivs(input);
      errorMassage.textContent = 'Enjoy the PaintPad'

    }


}
