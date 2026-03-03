// Write the logic to get the computer's choice (Between Rock, Paper and Scissors)
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

// Write the logic to get the human's choice (Between Rock, Paper and Scissors)
function getHumanChoice() {
  let choice = prompt("Rock, Paper or Scissors?", "Rock").toLowerCase();

  while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
    choice = prompt(
      "Invalid Response: Type 'Rock', 'Paper', or 'Scissors'",
      "Rock",
    ).toLowerCase();
  }

  return choice;
}

// Declare the players score
let humanScore = 0;
let computerScore = 0;

// Write the logic to play a single round
function playRound(humanChoice, computerChoice) {
  message.textContent = "";
  score.textContent = "";
  if (humanChoice === computerChoice) {
    message.textContent = `You both chose ${humanChoice}. Tie.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    message.textContent = `Human wins! ${humanChoice} beats ${computerChoice}!`;
    humanScore += 1;
    score.textContent = ` ${getScores()}`;
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "scissors" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "rock")
  ) {
    message.textContent = `Computer wins! ${computerChoice} beats ${humanChoice}!`;
    computerScore += 1;
    score.textContent += ` ${getScores()}`;
  }
}

function getScores() {
  return `Human Score: ${humanScore}. Computer Score: ${computerScore}.`;
}

function playGame(e) {
  const humanSelection = e.target.textContent.toLowerCase();
  const computerSelection = getComputerChoice();

  console.log(humanSelection);
  playRound(humanSelection, computerSelection);

  if (humanScore === computerScore) {
    console.log(`Tie Game! Both players have ${humanScore}.`);
  } else if (humanScore > computerScore) {
    console.log(`Human wins! Final score: ${getScores()}`);
  } else {
    console.log(`Computer wins! Final score: ${getScores()}`);
  }
}

// Remove the 5 rounds
// Add an event listener to buttons that call the playRound function
// For each button, add an event listener
// When a button is clicked, get that value
// Set the value of the button to the humanChoice
const btns = document.querySelector(".buttons");
btns.addEventListener("click", playGame);

// Add a div to display results
// Update the div textContent from the log messages to be displayed in the div
const message = document.querySelector(".message");
const score = document.querySelector(".score");
