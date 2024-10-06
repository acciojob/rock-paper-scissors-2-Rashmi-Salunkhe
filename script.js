//your code here
// Global variables
let turnsLeft, userPoints = 0, computerPoints = 0;
let choices = ["ROCK", "PAPER", "SCISSORS"];
window.computerChoose = Math.floor(Math.random() * 3);  // Computer choice for each round

// Start the game when Play button is clicked
document.getElementById('play-btn').addEventListener('click', function() {
    turnsLeft = parseInt(document.getElementById('turns').value);
    if (isNaN(turnsLeft) || turnsLeft <= 0) {
        alert("Please enter a valid number of rounds.");
        return;
    }
    document.getElementById('rounds-left').textContent = turnsLeft;
    resetGame();
});

// User selects Rock, Paper, or Scissors
document.getElementById('rock').addEventListener('click', () => playRound(0));
document.getElementById('paper').addEventListener('click', () => playRound(1));
document.getElementById('scissors').addEventListener('click', () => playRound(2));

// Function to play a single round
function playRound(userChoice) {
    if (turnsLeft <= 0) {
        alert("Game over! Please start a new game.");
        return;
    }

    const computerChoice = Math.floor(Math.random() * 3);
    window.computerChoose = computerChoice;
    document.getElementById('computer-choice').textContent = choices[computerChoice];

    // Determine the result of the round
    let roundResult;
    if (userChoice === computerChoice) {
        roundResult = "TIE";
    } else if ((userChoice === 0 && computerChoice === 2) || 
               (userChoice === 1 && computerChoice === 0) || 
               (userChoice === 2 && computerChoice === 1)) {
        roundResult = "WON";
        userPoints++;
    } else {
        roundResult = "LOSE";
        computerPoints++;
    }

    // Update round result and points
    document.getElementById('round-result').textContent = roundResult;
    document.getElementById('user-points').textContent = userPoints;
    document.getElementById('computer-points').textContent = computerPoints;

    // Decrement rounds left
    turnsLeft--;
    document.getElementById('rounds-left').textContent = turnsLeft;

    // Check if the game is over
    if (turnsLeft === 0) {
        showGameResult();
    }
}

// Function to show the final game result
function showGameResult() {
    let finalResult;
    if (userPoints > computerPoints) {
        finalResult = "WON";
    } else if (userPoints < computerPoints) {
        finalResult = "LOSE";
    } else {
        finalResult = "TIE";
    }
    document.getElementById('game-result').textContent = finalResult;
}

// Function to reset the game variables
function resetGame() {
    userPoints = 0;
    computerPoints = 0;
    document.getElementById('user-points').textContent = userPoints;
    document.getElementById('computer-points').textContent = computerPoints;
    document.getElementById('round-result').textContent = "";
    document.getElementById('computer-choice').textContent = "";
    document.getElementById('game-result').textContent = "";
}
