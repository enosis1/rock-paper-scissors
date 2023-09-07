const btnsContainer = document.querySelector(".buttons");
const btns = document.querySelectorAll("button");
const container = document.querySelector(".container");
const result = document.createElement("p");

const victoryMessage = document.createElement("p");
result.classList.toggle("result");
container.insertBefore(result, btnsContainer);
container.insertBefore(victoryMessage, btnsContainer);

btns.forEach((button) => {
  button.addEventListener("click", (e) => {
    playSingleRound(e.target.textContent, getComputerChoice());
  });
});

function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3);

  if (randomChoice === 1) {
    return "paper";
  } else if (randomChoice === 2) {
    return "rock";
  } else {
    return "scissors";
  }
}
let playerScore = 0;
let computerScore = 0;

// Write a function that plays a single round of rock paper scissors
function playSingleRound(playerSelection, computerSelection) {
  // Track score;

  if (playerScore === 5) {
    result.textContent = `Final score: Player: ${playerScore} Computer: ${computerScore}`;
    victoryMessage.textContent = "Player wins!";
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    result.textContent = `Final score: Player: ${playerScore} Computer: ${computerScore}`;
    victoryMessage.textContent = "Computer wins!";
    playerScore = 0;
    computerScore = 0;
  } else {
    // Returns user input and lower cases it
    playerSelection = playerSelection.toLowerCase();
    victoryMessage.textContent = "";

    // Return a string that declares the winner of the round
    if (playerSelection === computerSelection) {
      return (result.textContent = `Tie game! You both chose ${playerSelection}!`);
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      playerScore++;
      return (result.textContent = `Player has won this round! ${playerSelection} beats ${computerSelection}.`);
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      playerScore++;
      return (result.textContent = `Player has won this round! ${playerSelection} beats ${computerSelection}.`);
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      playerScore++;
      return (result.textContent = `Player has won this round! ${playerSelection} beats ${computerSelection}.`);
    } else if (computerSelection === "paper" && playerSelection === "rock") {
      computerScore++;
      return (result.textContent = `Computer has won this round! ${computerSelection} beats ${playerSelection}.`);
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
      computerScore++;
      return (result.textContent = `Computer has won this round! ${computerSelection} beats ${playerSelection}.`);
    } else if (
      computerSelection === "scissors" &&
      playerSelection === "paper"
    ) {
      computerScore++;
      return (result.textContent = `Computer has won this round! ${computerSelection} beats ${playerSelection}.`);
    }
  }
}
