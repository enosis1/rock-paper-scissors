console.log('Hello World');
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
	let computerChoice;
	let randomInt = Math.floor((Math.random() * 3) + 1);

	if (randomInt === 1) {
		computerChoice = 'Rock';
	} else if (randomInt === 2) {
		computerChoice = 'Paper';
	} else {
		computerChoice = 'Scissors';
	}
	return computerChoice.toLowerCase();
}

function singleRound(playerSelection, computerChoice) {
	computerChoice = getComputerChoice();
	playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();

	if (playerSelection === computerChoice) {
		return ("Tie game!");
	} else if (playerSelection === 'rock' && computerChoice === 'scissors') {
		playerScore++
		return ("You win! Rock beats Scissors!");
	} else if (playerSelection === 'scissors' && computerChoice === 'paper') {
		playerScore++
		return ("You win! Scissors beats paper!");
	} else if (playerSelection === 'paper' && computerChoice === 'rock') {
		playerScore++
		return ("You win! Rock beats paper!")
	} else if (computerChoice === 'rock' && playerSelection === 'scissors') {
		computerScore++
		return ("You lose! Rock beats Scissors!");
	} else if (computerChoice === 'scissors' && playerSelection === 'paper') {
		computerScore++
		return ("You lose! Scissors beats paper!");
	} else if (computerChoice === 'paper' && playerSelection === 'rock') {
		computerScore++
		return ("You lose! Rock beats paper!")
	}
	
}

function game() {
	for (i = 0; i < 5; i++) {
		console.log(singleRound());
		console.log(`Player Score: ${playerScore}.`);
		console.log(`Computer Score: ${computerScore}.`);
	}

	if (playerScore === computerScore) {
		console.log("Final Score: Tie.")
	} else if (playerScore > computerScore) {
		console.log("You win!")
	} else {
		console.log("Computer wins!")
	}
}