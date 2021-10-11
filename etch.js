//Variables
const gridContainer = document.querySelector('.container');
const clearButton = document.querySelector('.clearButton');

//slider functionality 
const slider = document.getElementById('range');
const sliderOut = document.getElementById('sliderValue');

//adds slider value text to page
sliderOut.innerHTML = slider.value + 'x' + slider.value;

let gridWidth = slider.value;
let colorChoice = document.getElementById('colorSelect');

createGrid(gridWidth);

//WIP



//COMPLETED

//creates new grid from slider input
function createGrid(cells) {
    clearOld();
    gridContainer.style.setProperty('--grid-rows', cells);
    gridContainer.style.setProperty('--grid-cols', cells);
    for (i = 0; i < (cells * cells); i++) {
        let gridCell = document.createElement('div');
        gridContainer.appendChild(gridCell).className = "gridCell";
    }
    transitionCell();
}

//clear grid and creates new after slider
slider.onchange = function() {
    gridWidth = slider.value;
    createGrid(gridWidth);
}

//EVENTS
//updates text values under slider
slider.oninput = function() {
    sliderOut.innerHTML = this.value + 'x' + this.value;
}

//on click of Clear Button clears all cells
clearButton.addEventListener('click', function() {
    clearGrid()
});


//FUNCTIONS
//clear all colored cells
function clearGrid() {
    document.querySelectorAll('.gridCell').forEach((gridCell) => {
        gridCell.style.backgroundColor = 'white';
    });
}

//listens for hover over cell and changes color taken from input
function transitionCell() {
    document.querySelectorAll('.gridCell').forEach((gridCell) => {
        gridCell.addEventListener('mouseover', () => {
            gridCell.style.backgroundColor = colorChoice.value;
        })
    });
}

//clears old grid from DOM
function clearOld(){
    gridContainer.textContent = '';
}
