function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        return "Rock";
    } else if (randomNum === 1) {
        return "Paper";
    } else {
        return "Scizzors";
    };
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return "Tie Game.";
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER") {
        return "You Lose! Paper beats rock.";
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCIZZORS") {
        return "You Win! Rock beats scizzors.";
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() == "ROCK") {
        return "You win! Paper beats rock.";
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCIZZORS") {
        return "You Lose! Scizzors beats paper.";
    } else if (playerSelection.toUpperCase() === "SCIZZORS" && computerSelection.toUpperCase() === "ROCK") {
        return "You Lose! Rock beats scizzors.";
    } else if (playerSelection.toUpperCase() === "SCIZZORS" && computerSelection.toUpperCase() === "PAPER") {
        return "You win! Scizzors beats paper.";
    };
}