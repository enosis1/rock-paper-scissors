// Test that scritp.js is linked with index.html
// console.log('Hello World!')
// It worked and the file is linked to index.html

// How does rock paper scissors work?
// Two players go back and forth and have three selections to choose from:
// Rock, Paper, Scissors
// Rock beats Scissors, Paper beats Rock, Scissors beats Paper

// Problem:
// Create a rock paper scissors game within the console
//    function getComputerChoice()
//    That randomly returns either 'Rock' 'Paper' or 'Scissors'
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

// Create a score tracker
// Display score after each game (best of 5)
// function game()
function game(rounds) {
  // I need to keep score of the winners
  let playerScore = 0;
  let computerScore = 0;

  // Loop through rounds
  for (let i = 1; i <= rounds; i++) {
    // Within the game() function, get input from the user for playerSelection using prompt
    let playerSelection = prompt("Rock, Paper, or scissors?", "rock");
    playSingleRound(playerSelection, getComputerChoice());
  }

  // Write a function that plays a single round of rock paper scissors
  function playSingleRound(playerSelection, computerSelection) {
    // Returns user input and lower cases it
    // Make the playerSelection case-insensative ('rock' 'ROck' 'ROCK')
    playerSelection = playerSelection.toLowerCase();

    // Return a string that declares the winner of the round
    if (playerSelection === computerSelection) {
      return console.log("Tie game!");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      playerScore++;
      return console.log(
        `Player has won this round! ${playerSelection} beats ${computerSelection} Current Player Score: ${playerScore}`
      );
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      playerScore++;
      return console.log(
        `Player has won this round! ${playerSelection} beats ${computerSelection} Current Player Score: ${playerScore}`
      );
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      playerScore++;
      return console.log(
        `Player has won this round! ${playerSelection} beats ${computerSelection} Current Player Score: ${playerScore}`
      );
    } else if (computerSelection === "paper" && playerSelection === "rock") {
      computerScore++;
      return console.log(
        `Computer has won this round! ${computerSelection} beats ${playerSelection} Current Computer Score: ${computerScore}`
      );
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
      computerScore++;
      return console.log(
        `Computer has won this round! ${computerSelection} beats ${playerSelection} Current Computer Score: ${computerScore}`
      );
    } else if (
      computerSelection === "scissors" &&
      playerSelection === "paper"
    ) {
      computerScore++;
      return console.log(
        `Computer has won this round! ${computerSelection} beats ${playerSelection} Current Computer Score: ${computerScore}`
      );
    }
  }
}
