const gridContainer = document.querySelector('.container');
const clearButton = document.querySelector('.clearButton');

//slider functionality 
const slider = document.getElementById('range');
const sliderOut = document.getElementById('sliderValue');

//adds slider value text to page
sliderOut.innerHTML = slider.value + 'x' + slider.value;

let gridWidth = slider.value;
let colorChoice = document.getElementById('colorSelect');
createGrid();





//clear grid after slider release
slider.onchange = function() {
    gridWidth = slider.value;
    gridContainer.innerHTML = "";
    createGrid();
}

//create a group of square divs
function createGrid() {
    for (let i = 0; i < gridWidth * gridWidth; i++) {
        const gridCell = document.createElement('div');
        gridCell.classList.add('gridCell');
        gridContainer.appendChild(gridCell);
        resizeCells();
        transitionCell();
    }
}

//updates text values under slider
slider.oninput = function() {
    sliderOut.innerHTML = this.value + 'x' + this.value;
}

//on click of Clear Button clears all cells
clearButton.addEventListener('click', function() {
    clearGrid()
});


//function to resize cells to fit in container
function resizeCells() {
    document.querySelectorAll('.gridCell').forEach((gridCell) => {
        newCellSize = ((512 / (gridWidth * 2)) - 1) + 'px';
        gridCell.style.padding=newCellSize;
        })
    }


// need to resize cells based on size of container and input from slider
//padding cell size = (container width / slider input * 2) - 1 





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
