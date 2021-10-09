const gridContainer = document.querySelector('.container');




createGrid();

//listens for hover over cell and changes class
document.querySelectorAll('.gridCell').forEach((gridCell) => {
    gridCell.addEventListener('mouseover', () => {
        gridCell.classList.add('transitioned');
    })
});

//create a group of square divs
function createGrid() {
    for(let i = 0; i < 256; i++) {
        const gridCell = document.createElement('div');
        gridCell.classList.add('gridCell');
        gridContainer.appendChild(gridCell);
    }
}