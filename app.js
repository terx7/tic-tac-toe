let gameBoard = [
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']
];

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


let gameState = ["", "", "", "", "", "", "", "", ""]

currentPlayer = "X"

const cellDivs = document.querySelectorAll('.cell')
const scoreDiv = document.querySelectorAll('.score')
const statusDisplay = document.querySelector('.game-status')
const winningMessage = () => `Player ${currentPlayer} has won!`;

function handlePlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";

}

function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }
    if (roundWon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }


    handlePlayerChange()
}



cellDivs.forEach(el => {
    el.addEventListener('click', event => {
        const selectedCell = event.target
        const selectedRow = selectedCell.dataset.row
        const selectedCol = selectedCell.dataset.col

        if (gameBoard[selectedRow][selectedCol] == "-") {
            selectedCell.innerText = currentPlayer
            let cellValue = parseInt(selectedCell.dataset.value)
            console.log(cellValue)
            gameBoard[selectedRow][selectedCol] = currentPlayer
            console.log(gameBoard)

            gameState[cellValue] = currentPlayer;
            console.log(gameState)


            handleResultValidation()
        }
        if (currentPlayer == "O") {

            getEmptyCell()
            console.log(getEmptyCell())
            currentPlayer = "X"
        }

    })
})

function getEmptyCell() {
    let x
    let y
    do {
        x = Math.floor(Math.random() * 3)
        y = Math.floor(Math.random() * 3)
    } while (gameBoard[x][y] != "-")
    return [x, y]
}
