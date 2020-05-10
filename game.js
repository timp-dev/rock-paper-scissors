function randomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function randomPlay() {
	let options = ["rock", "paper", "scissors"];
	return options[randomInt(3)];
}

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();
	
	if (playerSelection === computerSelection) {
		return "Tie! " + playerSelection;
	}

	let win = false;

	switch (playerSelection) {
		case "rock":
		if (computerSelection === "scissors") win = true;
		break;

		case "paper":
		if (computerSelection === "rock") win = true;
		break;

		case "scissors":
		if (computerSelection === "paper") win = true;
		break;

		default:
		return "Invalid input"
	}

	let result = "lose!";
	if (win) result = "win!";

	return "You " + result + " You: " + playerSelection +
		" Computer: " + computerSelection;
}

console.log(playRound(randomPlay(), randomPlay()));
