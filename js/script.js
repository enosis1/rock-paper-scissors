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
  if (humanChoice === computerChoice) {
    console.log("Tie! No points given.");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    console.log(`Human wins! ${humanChoice} beats ${computerChoice}!`);
    humanScore += 1;
    console.log(getScores());
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "scissors" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "rock")
  ) {
    console.log(`Computer wins! ${computerChoice} beats ${humanChoice}!`);
    computerScore += 1;
    console.log(getScores());
  }
}

function getScores() {
  return `Human Score: ${humanScore}. Computer Score: ${computerScore}.`;
}

// Write the logic to play the entire game out of 5 rounds
//
function playGame() {
  for (let rounds = 0; rounds < 5; rounds++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  if (humanScore === computerScore) {
    console.log(`Tie Game! Both players have ${humanScore}.`);
  } else if (humanScore > computerScore) {
    console.log(`Human wins! Final score: ${getScores()}`);
  } else {
    console.log(`Computer wins! Final score: ${getScores()}`);
  }
}

playGame();
