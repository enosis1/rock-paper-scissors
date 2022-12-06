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
};

function singleRound(playerSelection, computerChoice) {
	computerChoice = getComputerChoice();
	if (playerSelection === computerChoice) {
		return (`Tie game! You both chose ${playerSelection}.`);
	} else if (playerSelection === 'rock' && computerChoice === 'scissors') {
		playerScore++
		return ("You win! Rock beats Scissors!");
	} else if (playerSelection === 'scissors' && computerChoice === 'paper') {
		playerScore++
		return ("You win! Scissors beats paper!");
	} else if (playerSelection === 'paper' && computerChoice === 'rock') {
		playerScore++
		return ("You win! Paper beats rock!")
	} else if (computerChoice === 'rock' && playerSelection === 'scissors') {
		computerScore++
		return ("You lose! Rock beats Scissors!");
	} else if (computerChoice === 'scissors' && playerSelection === 'paper') {
		computerScore++
		return ("You lose! Scissors beats paper!");
	} else if (computerChoice === 'paper' && playerSelection === 'rock') {
		computerScore++
		return ("You lose! Paper beats rock!")
	}

};

const btnRock = document.querySelector('.button-rock');
const btnPaper = document.querySelector('.button-paper');
const btnScissors = document.querySelector('.button-scissors');
const results = document.querySelector(".text-results");
const score = document.querySelector('.text-score');

btnRock.addEventListener('click', () => {
	results.textContent = singleRound('rock');
	score.textContent = trackScore();
});

btnPaper.addEventListener('click', () => {
	results.textContent = singleRound('paper');
	score.textContent = trackScore();
});

btnScissors.addEventListener('click', () => {
	results.textContent = singleRound('scissors');
	score.textContent = trackScore();
});

function trackScore() {
	let finalScore = '';	
	
	if (playerScore >= 5) {
		finalScore = "You win!"
		return finalScore;
	} else if (computerScore >= 5) {
		finalScore = "You lose! Computer wins!"
		return finalScore;
	}
	return `Player Score: ${playerScore}. Computer Score: ${computerScore}.`;
};

