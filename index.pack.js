const startBtn = document.querySelector(".btn--primary");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const startAgainBtn = document.querySelector(".btn--secondary");
const playerScoreElement = document.getElementById("score-player");
const computerScoreElement = document.getElementById("score-computer");
const computerEmoji = document.querySelector(".computer--emoji");
const textElement = document.querySelector(".text");

let playerScore = 0;
let computerScore = 0;

const bgcolor = {
  green: "#a6caa6",
  red: "#d66969",
  yellow: "#DECD92",
  grey: "#8e8e8e",
};
const rpsOptions = [
  {
    name: "rock",
    emoji: "✊",
  },
  {
    name: "paper",
    emoji: "✋",
  },
  {
    name: "scissors",
    emoji: "✌",
  },
  {
    name: "robot",
    emoji: "🤖",
  },
];

startBtn.addEventListener("click", () => {
  const introElement = document.querySelector(".intro");
  introElement.classList.add("hide");

  const gameElement = document.querySelector(".game");
  gameElement.classList.remove("hide");
});

rockBtn.addEventListener("click", rockPaperScissors);
paperBtn.addEventListener("click", rockPaperScissors);
scissorsBtn.addEventListener("click", rockPaperScissors);
startAgainBtn.addEventListener("click", startAgain);

function rockPaperScissors(e) {
  const playersChoice = e.target.id;

  const randomNumber = Math.floor(Math.random() * 3);
  const computersChoice = rpsOptions[randomNumber].name;
  computerEmoji.innerHTML = `${rpsOptions[randomNumber].emoji}`;

  if (playersChoice === "rock" && computersChoice === "scissors") {
    playerWin();
  } else if (computersChoice === "rock" && playersChoice === "scissors") {
    computerWin();
  } else if (playersChoice === "scissors" && computersChoice === "paper") {
    playerWin();
  } else if (computersChoice === "scissors" && playersChoice === "paper") {
    computerWin();
  } else if (playersChoice === "paper" && computersChoice === "rock") {
    playerWin();
  } else if (computersChoice === "paper" && playersChoice === "rock") {
    computerWin();
  } else {
    draw();
  }
}

function playerWin() {
  playerScore++;
  playerScoreElement.innerHTML = `${playerScore}`;
  document.body.style.backgroundColor = bgcolor.green;
  startAgainBtn.style.backgroundColor = bgcolor.green;

  if (playerScore === 3) {
    textElement.innerHTML = "You have won!";
    disablePointerEvents();
    startAgainBtn.classList.remove("hide");
  } else {
    textElement.innerHTML = "Point for you!";
  }
}

function computerWin() {
  computerScore++;
  computerScoreElement.innerHTML = `${computerScore}`;
  document.body.style.backgroundColor = bgcolor.red;
  startAgainBtn.style.backgroundColor = bgcolor.red;

  if (computerScore === 3) {
    textElement.innerHTML = "Computer has won!";
    disablePointerEvents();
    startAgainBtn.classList.remove("hide");
  } else {
    textElement.innerHTML = "Point for computer!";
  }
}

function draw() {
  textElement.innerHTML = "Draw!";
  document.body.style.backgroundColor = bgcolor.yellow;
  startAgainBtn.classList.add("hide");
}

function startAgain() {
  document.body.style.backgroundColor = bgcolor.grey;
  resetScore();
  playerScoreElement.innerHTML = `${playerScore}`;
  computerScoreElement.innerHTML = `${computerScore}`;
  textElement.innerHTML = "Rock Paper Scissors?";
  startAgainBtn.classList.add("hide");
  enablePointerEvents();
}

function disablePointerEvents() {
  rockBtn.style.pointerEvents = "none";
  paperBtn.style.pointerEvents = "none";
  scissorsBtn.style.pointerEvents = "none";
}

function enablePointerEvents() {
  rockBtn.style.pointerEvents = "auto";
  paperBtn.style.pointerEvents = "auto";
  scissorsBtn.style.pointerEvents = "auto";
}

function resetScore() {
  playerScore = 0;
  computerScore = 0;
}
