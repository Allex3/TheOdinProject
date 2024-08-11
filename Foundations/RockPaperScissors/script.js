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

function getHumanChoice() {
    let userChoice = prompt("Choose what you play: rock, paper or scissors.");
    userChoice = userChoice.toLowerCase();
    if (
        userChoice !== "rock" &&
        userChoice !== "paper" &&
        userChoice !== "scissors"
    ) {
        console.log("You entered an invalid value. Input what you play again.");
        getHumanChoice();
    }
    return userChoice;
}

function showWinner(userScore, computerScore) 
{
    console.log(userScore > computerScore ? "User wins! Humans are superior!" : "Computer wins! Lucky loser!");
}


function playGame() {
    let userScore = 0;
    let computerScore = 0;
    let userChoice, computerChoice;

    for (let i=1; i<=5; i++) { //main loop for the rounds
        userChoice = getHumanChoice();
        computerChoice = getComputerChoice();

        playRound(userChoice, computerChoice);

        console.log(`User score: ${userScore}`);
        console.log(`Computer score: ${computerScore}`);
    }

    showWinner(userScore, computerScore); //calculates the winner and shows it
    

    //functions to play the game... what happens when the round is a draw
    //a win, or a lose, and an intutiive switch making for all the 9 combinations of values
    function roundDraw(userChoice, computerChoice) {
        console.log(`${userChoice} vs ${computerChoice} is a draw!`);
    }
    
    function userWins(userChoice, computerChoice) {
        console.log(`You win! ${userChoice} beats ${computerChoice}`);
        userScore++;
    }
    
    function computerWins(userChoice, computerChoice) {
        console.log(`The computer wins! ${computerChoice} beats ${userChoice}`);
        computerScore++;
    }

    function playRound(userChoice, computerChoice) {
        if (userChoice == computerChoice) {
            roundDraw(userChoice, computerChoice);
            return;
        }
        switch (userChoice) {
            case "rock":
                if (computerChoice == "scissors") {
                    userWins(userChoice, computerChoice);
                    return;
                }
                if (computerChoice == "rock") {
                    roundDraw();
                    return;
                }
                //if it reaches here it's paper
                computerWins(userChoice, computerChoice);
                return;
            case "paper":
                if (computerChoice == "rock") {
                    userWins(userChoice, computerChoice);
                    return;
                }
                if (computerChoice == "paper") {
                    roundDraw();
                    return;
                }
                //if it reaches here it's scissors
                computerWins(userChoice, computerChoice);
                return;
            case "scissors":
                if (computerChoice == "paper") {
                    userWins(userChoice, computerChoice);
                    return;
                }
                if (computerChoice == "scissors") {
                    roundDraw();
                    return;
                }
                //if it reaches here it's rock
                computerWins(userChoice, computerChoice);
                return;
        }
    }
} 

playGame();
