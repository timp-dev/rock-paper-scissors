function randomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function randomPlay() {
	let options = ["rock", "paper", "scissors"];
	return options[randomInt(3)];
}

// 1 = player win
// 2 = computer win
// 3 = tie
function checkWin(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();

	if (playerSelection === computerSelection) {
		return 3; // tie
	}

	let win = 2;

	switch (playerSelection) {
		case "rock":
		if (computerSelection === "scissors") win = 1;
		break;

		case "paper":
		if (computerSelection === "rock") win = 1;
		break;

		case "scissors":
		if (computerSelection === "paper") win = 1;
		break;

		default:
		return 2; // invalid input means lose
	}

	return win;
}

function playRound(playerSelection, computerSelection) {
	let result = "lose!";
	if (win) result = "win!";

	return "You " + result + "\nYou: " + playerSelection +
		"\nComputer: " + computerSelection;
}

function playGame(rounds) {
	let wins = 0;
	let loses = 0;
	let ties = 0;

	for (ii = 0; ii < rounds; ii++) {
		console.log("Round " + (ii + 1) + "...");

		playerInput = prompt("Rock, paper, or scissors?");
		computerInput = randomPlay();

		let result = checkWin(playerInput, computerInput);
		let message = "what?"
		
		switch (result) {
			// win
			case 1:
			message = "win!";
			wins += 1;
			break;

			// lose
			case 2:
			message = "lost!";
			loses += 1;
			break;

			// tie
			case 3:
			message = "tied!";
			ties += 1;
			break;
		}

		console.log("You " + message + "\nYou: " + playerInput +
			"\nComputer: " + computerInput);
	}

	if (wins > loses) {
		console.log("You win! | " + wins + " to " + loses);
	} else if (loses > wins) {
		console.log("You lost the game :'( | " + wins + " to " + loses);
	} else {
		console.log("You somehow tied. Wow.");
	}
}

playGame(5);
