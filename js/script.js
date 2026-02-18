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

console.log(getComputerChoice());
// Write the logic to get the human's choice (Between Rock, Paper and Scissors)
// Declare the players score
// Write the logic to play a single round
// Write the logic to play the entire game out of 5 rounds
