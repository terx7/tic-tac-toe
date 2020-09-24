let gameBoard = [
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']
];


winningSums = [7, 56, 73, 83, 146, 273, 292, 448]

const cellDivs = document.querySelectorAll('.cell')


cellDivs.forEach(el => {
    el.addEventListener('click', event => {
        const selectedCell = event.currentTarget
        const selectedRow = selectedCell.dataset.row
        const selectedCol = selectedCell.dataset.col
        selectedCell.innerText = 'X'

        if (gameBoard[selectedRow][selectedCol] == "-") {
            selectedCell.innerText = 'X'

            gameBoard[selectedRow][selectedCol] = "X"
            console.log(gameBoard)
        }
    })
});
