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
// Write the logic to play the entire game out of 5 rounds
