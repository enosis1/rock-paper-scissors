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