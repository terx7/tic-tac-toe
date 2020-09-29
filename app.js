let gameBoard = [
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']
];


winningSums = [7, 56, 73, 84, 146, 273, 292, 448]
let score = 0

const cellDivs = document.querySelectorAll('.cell')
const scoreDiv = document.querySelectorAll('.score')


cellDivs.forEach(el => {
    el.addEventListener('click', event => {
        const selectedCell = event.currentTarget
        const selectedRow = selectedCell.dataset.row
        const selectedCol = selectedCell.dataset.col


        if (gameBoard[selectedRow][selectedCol] == "-") {
            selectedCell.innerText = 'X'
            let cellValue = parseInt(selectedCell.dataset.value)

            score += cellValue
            console.log(score)
            gameBoard[selectedRow][selectedCol] = "X"
            console.log(gameBoard)



        }
        if (winningSums.includes(score)) {
            console.log("You win")
        }
    })
});
