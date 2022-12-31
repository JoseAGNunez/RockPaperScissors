function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        return "Rock";
    } else if (randomNum === 1) {
        return "Paper";
    } else {
        return "Scissors";
    };
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return "Tie Game.";
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER") {
        return "You Lose! Paper beats rock.";
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS") {
        return "You Win! Rock beats scissors.";
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() == "ROCK") {
        return "You Win! Paper beats rock.";
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSORS") {
        return "You Lose! Scissors beats paper.";
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "ROCK") {
        return "You Lose! Rock beats scissors.";
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER") {
        return "You Win! Scissors beats paper.";
    } else if (playerSelection.toUpperCase() != "ROCK" || "PAPER" || "SCISSORS") {
        return "Error, please enter one of: Rock, Paper, or Scissors.";
    };
}

function game() {
    let wins = 0;
    let loses = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter one of: Rock, Paper, or Scissors.");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.slice(0,5) == "Error") {
            i = i - 1;
        } else if (result.slice(0,8) === "You Win!") {
            wins = wins + 1;
        } else if (result.slice(0,9) === "You Lose!") {
            loses = loses + 1;
        };

    }

    if (wins > loses) {
        return `Congratulations, you won! Final Score: ${wins} to ${loses}.`
    } else if (wins === loses) {
        return `Tie Game. Fnial Score: ${wins} to ${loses}.`
    } else if (loses > wins) {
        return `Sorry, you lost. Final Score: ${wins} to ${loses}.`
    };
}