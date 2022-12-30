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
        return "You Win! Paper beats rock.";
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCIZZORS") {
        return "You Lose! Scizzors beats paper.";
    } else if (playerSelection.toUpperCase() === "SCIZZORS" && computerSelection.toUpperCase() === "ROCK") {
        return "You Lose! Rock beats scizzors.";
    } else if (playerSelection.toUpperCase() === "SCIZZORS" && computerSelection.toUpperCase() === "PAPER") {
        return "You Win! Scizzors beats paper.";
    } else if (playerSelection.toUpperCase() != "ROCK" || "PAPER" || "SCIZZORS") {
        return "Error, please enter one of: Rock, Paper, or Scizzors.";
    };
}

function game() {
    let wins = 0;
    let loses = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter one of: Rock, Paper, Scizzors.");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.slice(0,8) === "You Win!") {
            wins = wins + 1;
        } else if (result.slice(0,9) === "You Lose!") {
            loses = loses + 1;
        };
        console.log(wins);
        console.log(loses);
    }

    if (wins > loses) {
        return "Congratulations you won!";
    } else if (wins === loses) {
        return "Tie Game";
    } else if (loses > wins) {
        return "Sorry, you lost."
    };
}