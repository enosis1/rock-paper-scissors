function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  message.textContent = "";
  score.textContent = "";
  if (humanChoice === computerChoice) {
    message.textContent = `You both chose ${humanChoice}. Tie.`;
    score.textContent = `${getScores()}`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    message.textContent = `Human wins! ${humanChoice} beats ${computerChoice}!`;
    humanScore++;
    score.textContent = ` ${getScores()}`;
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "scissors" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "rock")
  ) {
    message.textContent = `Computer wins! ${computerChoice} beats ${humanChoice}!`;
    computerScore++;
    score.textContent += ` ${getScores()}`;
  }
}

function getScores() {
  return `Human: ${humanScore}. Computer: ${computerScore}.`;
}

function getWinner() {
  if (humanScore > computerScore) {
    return `Final score: ${getScores()} You win!`;
  } else {
    return `Final score: ${getScores()} You lose.`;
  }
}

function playGame(e) {
  const humanSelection = e.target.textContent.toLowerCase();
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  if (humanScore >= 5 || computerScore >= 5) {
    message.textContent = getWinner();
    score.textContent = "";
    console.log(score);
  }
}

const btns = document.querySelector(".buttons");
btns.addEventListener("click", playGame);

const message = document.querySelector(".message");
const score = document.querySelector(".score");
