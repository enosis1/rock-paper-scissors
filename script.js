console.log('Hello World');

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
		return ("You win! Rock beats Scissors!");
	} else if (playerSelection === 'scissors' && computerChoice === 'paper') {
		return ("You win! Scissors beats paper!");
	} else if (playerSelection === 'paper' && computerChoice === 'rock') {
		return ("You win! Rock beats paper!")
	} else if (computerChoice === 'rock' && playerSelection === 'scissors') {
		return ("You lose! Rock beats Scissors!");
	} else if (computerChoice === 'scissors' && playerSelection === 'paper') {
		return ("You lose! Scissors beats paper!");
	} else if (computerChoice === 'paper' && playerSelection === 'rock') {
		return ("You lose! Rock beats paper!")
	}
}