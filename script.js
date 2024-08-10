let player1 = "x";
let player2 = "o";
let currentPlayer = player1;
let gameFinish = false;

let playerOneScore = 0;
let playerTwoScore = 0;
const board = document.querySelector("#board");
const squares = document.querySelectorAll(".square");



function checkWin() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]
    ];

    for (let i=0; i < winningCombos.length; i++) {
        const [a, b, c] = winningCombos[i];
        if (squares[a].innerHTML == currentPlayer && 
            squares[b].innerHTML == currentPlayer &&
            squares[c].innerHTML == currentPlayer) 
            {
            return true;
        }
}
return false;

}

function isDraw() {
    return Array.from(squares).every(square => square.innerHTML !== '');
  }

function resetBoard() {
    for(let i=0; i<squares.length; i++) {
        squares[i].innerHTML="";
    }
    gameFinish = false;
}


const startBtn = document.querySelector("#startBtn");
startBtn.addEventListener("click", function() {
    board.setAttribute("style","visibility:visible");
})

const restartBtn = document.querySelector("#restartBtn");
restartBtn.addEventListener("click", resetBoard)

squares.forEach(square => {
    square.addEventListener("click", () => {
        if(!gameFinish && square.innerHTML==="" ) {
            square.innerHTML = currentPlayer;

            if(checkWin()) {
                alert(currentPlayer + " wins");
                gameFinish = true;
                resetBoard();
            } else if (isDraw()) {
                alert("It's a draw!");
                resetBoard();
            } else {
                currentPlayer = (currentPlayer === player1) ? player2 : player1;  
            }




        }



    })
})
