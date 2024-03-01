let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
let totalRounds = 5;

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let roundsplayedElement = document.getElementById('roundsPlayed');

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        // If it's a tie, simply return
        result = "It's a tie!";
    } else {
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText", "yellowText");
    
    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
        case "It's a tie!":
            resultDisplay.classList.add("yellowText");
            break;
    }

    roundsPlayed++;
    roundsplayedElement.textContent = `Round ${roundsPlayed}`;

    if (roundsPlayed === totalRounds || playerScore >= 5 || computerScore >= 5) {
        endGame();
    }
}

function endGame() {
    let endMessage = '';
    if (playerScore > computerScore) {
        endMessage = "Congrats! You won!!";
    } else if (playerScore < computerScore) {
        endMessage = 'Oof! You Lose!';
    } else {
        endMessage = "It's a tie game! Try again!";
    }

    roundsplayedElement.textContent = `Total Rounds Played: ${roundsPlayed}`;
    resultDisplay.textContent = endMessage;
    resultDisplay.classList.add("yellowText");
}

let Username = prompt('Enter a Username:');
let story = `${Username}`;
let madLibOutputDiv = document.getElementById('madLibOutput');
madLibOutputDiv.innerHTML = `<p>${story}</p>`;
