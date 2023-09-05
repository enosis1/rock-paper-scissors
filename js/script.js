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

// Write a function that plays a single round of rock paper scissors
//    function playSingleRound(playerSelection, computerSelection)
function playSingleRound(playerSelection, computerSelection) {
  // Returns user input and lower cases it
  let playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "Tie game!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return `Player has won this round! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return `Player has won this round! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return `Player has won this round! ${playerSelection} beats ${computerSelection}`;
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    return `Computer has won this round! ${computerSelection} beats ${playerSelection}`;
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    return `Computer has won this round! ${computerSelection} beats ${playerSelection}`;
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    return `Computer has won this round! ${computerSelection} beats ${playerSelection}`;
  }
}
//    Return a string that declares the winner of the round
//    Make the playerSelection case-insensative ('rock' 'ROck' 'ROCK')

// Create a score tracker
// Display score after each game (best of 5)
// function game()
// to play a 5 round game of RPS.
// Within the game() function, get input from the user for playerSelection using prompt
