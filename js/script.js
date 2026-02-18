// Write the logic to get the computer's choice (Between Rock, Paper and Scissors)
// - Get strings "rock", "paper" or "scissors" randomly for the computer
// - Return the value
//
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
// - Get choice of "rock", "paper", or "scissors" from user
// - If choice does not equal those values
//    - Return message saying invalid choice
// - Otherwise return the human choice
//
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
// - Set human score to 0
// - Set computer score to 0
//
let humanScore = 0;
let computerScore = 0;

// Write the logic to play a single round
// - Declare function to get a winner from a single round from human and computer choice
// - If the humanChoice and computerChoice are the same
//    - Don't increment either players scores
//    - Log a message describing a tie
//  - Else if the humanChoice beats the computerChoice
//    - Increment the humanChoice by one
//    - Log a message saying that the player has won
//  - Otherwise the computerChoice beats the humanChoice
//    - Increment the computerChoice by one
//    - Log a message saying that the computer has won
//
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("Tie! No points given.");
    return;
  }

  if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log(`Human wins! ${humanChoice} beats ${computerChoice}!`);
    humanScore += 1;
    console.log(getScores());
    return;
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    console.log(`Computer wins! ${computerChoice} beats ${humanChoice}!`);
    computerScore += 1;
    console.log(getScores());
    return;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log(`Human wins! ${humanChoice} beats ${computerChoice}!`);
    humanScore += 1;
    console.log(getScores());
    return;
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    console.log(`Computer wins! ${computerChoice} beats ${humanChoice}!`);
    computerScore += 1;
    console.log(getScores());
    return;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log(`Human wins! ${humanChoice} beats ${computerChoice}!`);
    humanScore += 1;
    console.log(getScores());
    return;
  } else {
    console.log(`Computer wins! ${computerChoice} beats ${humanChoice}!`);
    computerScore += 1;
    console.log(getScores());
    return;
  }
}

function getScores() {
  return `Human Score: ${humanScore}. Computer Score: ${computerScore}.`;
}
// Write the logic to play the entire game out of 5 rounds
