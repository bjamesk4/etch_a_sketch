const gridContainer = document.querySelector('.container');
const clearButton = document.querySelector('.clearButton');




createGrid();

//listens for hover over cell and changes class
document.querySelectorAll('.gridCell').forEach((gridCell) => {
    gridCell.addEventListener('mouseover', () => {
        gridCell.classList.add('transitioned');
    })
});

//on click of Clear Button clears all cells
clearButton.addEventListener('click', function() {
    clearGrid()
});

//slider functionality 
const slider = document.getElementById('range');
const sliderOut = document.getElementById('sliderValue');
sliderOut.innerHTML = slider.value + 'x' + slider.value;

//updates text values on slider change
slider.oninput = function() {
    sliderOut.innerHTML = this.value + 'x' + this.value;
}

//clear grid after slider release
slider.onchange = function() {
    clearGrid();
}

//create a group of square divs
function createGrid() {
    for (let i = 0; i < 256; i++) {
        const gridCell = document.createElement('div');
        gridCell.classList.add('gridCell');
        gridContainer.appendChild(gridCell);
    }
}

//clear all colored cells
function clearGrid() {
    document.querySelectorAll('.gridCell').forEach((gridCell) => {
            gridCell.classList.remove('transitioned');
    });
}