const board = Array(9).fill(null);
let currentPlayer = "X";
let gameOver = false;

function makeMove(index) {
  if (!gameOver && board[index] === null) {
    board[index] = currentPlayer;
    document.getElementsByClassName("cel")[index].innerText = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function checkWinner() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      gameOver = true;
      document.getElementsByClassName("cel")[a].style.backgroundColor = "lightgreen";
      document.getElementsByClassName("cel")[b].style.backgroundColor = "lightgreen";
      document.getElementsByClassName("cel")[c].style.backgroundColor = "lightgreen";
      setTimeout(resetGame, 500);
      break;
    }
  }

  if (!gameOver && board.every(cel => cel !== null)) {
    gameOver = true;
    setTimeout(resetGame, 500);
  }
}

function resetGame() {
  board.fill(null);
  currentPlayer = "X";
  gameOver = false;
  const cels = document.getElementsByClassName("cel");
  for (let cel of cels) {
    cel.innerText = "";
    cel.style.backgroundColor = "white";
  }
}
