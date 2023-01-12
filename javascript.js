let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        return 'Rock';
    } else if (randomNum === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    };
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        document.getElementById('roundResult').textContent = 'Round Result: Tie Game.';
        document.getElementById('currentScore').textContent = `Current Score | You: ${playerScore} Computer: ${computerScore}`;
        checkWinner();
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        computerScore++
        document.getElementById('roundResult').textContent = 'Round Result: You Lose! Paper beats rock.';
        document.getElementById('currentScore').textContent = `Current Score | You: ${playerScore} Computer: ${computerScore}`;
        checkWinner();
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        playerScore++
        document.getElementById('roundResult').textContent = 'Round Result: You Win! Rock beats scissors.';
        document.getElementById('currentScore').textContent = `Current Score | You: ${playerScore} Computer: ${computerScore}`;
        checkWinner();
    } else if (playerSelection === 'Paper' && computerSelection == 'Rock') {
        playerScore++
        document.getElementById('roundResult').textContent = 'Round Result: You Win! Paper beats rock.';
        document.getElementById('currentScore').textContent = `Current Score | You: ${playerScore} Computer: ${computerScore}`;
        checkWinner();
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        computerScore++
        document.getElementById('roundResult').textContent = 'Round Result: You Lose! Scissors beats paper.';
        document.getElementById('currentScore').textContent = `Current Score | You: ${playerScore} Computer: ${computerScore}`;
        checkWinner();
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        computerScore++
        document.getElementById('roundResult').textContent = 'Round Result: You lose! Rock beats scissors.';
        document.getElementById('currentScore').textContent = `Current Score | You: ${playerScore} Computer: ${computerScore}`;
        checkWinner();
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        playerScore++
        document.getElementById('roundResult').textContent = 'Round Result: You Win! Scissors beats paper.';
        document.getElementById('currentScore').textContent = `Current Score | You: ${playerScore} Computer: ${computerScore}`;
        checkWinner();
    };
};

// Document body
let body = document.body;


// rock button
let rockBtn = document.getElementById('rockBtn');
rockBtn.addEventListener('click', function(e) {
    let playerSelection = 'Rock';
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

// paper button
let paperBtn = document.getElementById('paperBtn');
paperBtn.addEventListener('click', function(e) {
    let playerSelection = 'Paper';
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

// scissors button
let scissorsBtn = document.getElementById('scissorsBtn');
scissorsBtn.addEventListener('click', function(e) {
    let playerSelection = 'Scissors';
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

// current score
let currentScore = document.createElement('h3');
currentScore.className = 'currentScore';
currentScore.id = 'currentScore';
body.appendChild(currentScore);
document.getElementById('currentScore').textContent = `Current Score | You: ${playerScore} Computer: ${computerScore}`;

// round results
let roundResult = document.createElement('p');
roundResult.className = 'roundResult';
roundResult.id = 'roundResult';
body.appendChild(roundResult);

function checkWinner() {
    if (playerScore === 5) {
        setTimeout(function () { alert(`Congratulations, you won! Final Score: ${playerScore} to ${computerScore}`); }, 1.5);
        setTimeout(function () {
            playerScore = 0;
            computerScore = 0;
            document.getElementById('roundResult').textContent = '';
            document.getElementById('currentScore').textContent = `Current Score | You: ${playerScore} Computer: ${computerScore}`;
        }, 1.5);
    } else if (computerScore === 5) {
        setTimeout(function () { alert(`Sorry, you lost! Final Score: ${playerScore} to ${computerScore}`); }, 1.5);
        setTimeout(function () {
            playerScore = 0;
            computerScore = 0;
            document.getElementById('roundResult').textContent = '';
            document.getElementById('currentScore').textContent = `Current Score | You: ${playerScore} Computer: ${computerScore}`;
        }, 1.5);
    };
};