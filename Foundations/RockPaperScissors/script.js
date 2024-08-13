console.log("You will be playing rock, paper, scissors against the computer");

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1; //get a number from 1 to 3 and round it down so that it's an integer
    //add 1 because the function returns a number less than 1, so it's never 3
    switch (computerChoice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";

        default:
            return "Not working as intended";
    }
}

function getWinnerMessage(userScore, computerScore) {
    return userScore > computerScore
        ? "User wins! Humans are superior!"
        : "Computer wins! Lucky loser!";
}

//functions to play the game... what happens when the round is a draw
//a win, or a lose, and an intutiive switch making for all the 9 combinations of values
function roundDraw(userChoice, computerChoice) {
    return `${userChoice} vs ${computerChoice} is a draw!`;
}

function userWins(userChoice, computerChoice) {
    userScore++;
    return `You win! ${userChoice} beats ${computerChoice}`;
}

function computerWins(userChoice, computerChoice) {
    computerScore++;
    return `The computer wins! ${computerChoice} beats ${userChoice}`;
}

function playRound(userChoice, computerChoice) {
    if (userChoice == computerChoice) {
        return roundDraw(userChoice, computerChoice);
    }
    switch (userChoice) {
        case "rock":
            if (computerChoice == "scissors")
                return userWins(userChoice, computerChoice);
            //if it reaches here it's paper
            return computerWins(userChoice, computerChoice);
        case "paper":
            if (computerChoice == "rock")
                return userWins(userChoice, computerChoice);
            //if it reaches here it's scissors
            return computerWins(userChoice, computerChoice);
        case "scissors":
            if (computerChoice == "paper")
                return userWins(userChoice, computerChoice);
            //if it reaches here it's rock
            return computerWins(userChoice, computerChoice);
    }
}

let userScore = 0;
let computerScore = 0;
let userChoice, computerChoice;

const roundMessageP = document.createElement("p");
const userScoreP = document.createElement("p");
const computerScoreP = document.createElement("p");

resultsContainer.appendChild(roundMessageP);
resultsContainer.appendChild(userScoreP);
resultsContainer.appendChild(computerScoreP);

userScoreP.textContent = `Player score: ${userScore}`;
computerScoreP.textContent = `Player score: ${computerScore}`;

const optionButtons = document.querySelectorAll(".gameOption");

optionButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (userScore == 5 || computerScore == 5) return; //don't do anything if game finished

        computerChoice = getComputerChoice(); //get a random computer choice
        userChoice = button.textContent.toLowerCase(); //text content of chosen player button choice
        let roundMessage = playRound(userChoice, computerChoice);

        roundMessageP.textContent = roundMessage;
        userScoreP.textContent = `Player score: ${userScore}`;
        computerScoreP.textContent = `Player score: ${computerScore}`;

        let winnerMessage;
        if (userScore == 5 || computerScore == 5) {
            winnerMessage = getWinnerMessage(userScore, computerScore);
            roundMessageP.textContent = winnerMessage; //display the winner

            //stop the game
            resultsContainer.removeChild(userScoreP);
            resultsContainer.removeChild(computerScoreP);
        }
    });
});

const restartGame = document.querySelector("#restartButton");
restartGame.addEventListener("click", () => {
    userScore = 0;
    computerScore = 0;
    //add the round scores paragraphs again
    userScoreP.textContent = `Player score: ${userScore}`;
    computerScoreP.textContent = `Player score: ${computerScore}`;

    resultsContainer.appendChild(userScoreP);
    resultsContainer.appendChild(computerScoreP);
});
