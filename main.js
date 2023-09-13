// Rock paper scissors choices array to choose from
const choices = ['rock', 'paper', 'scissors']

// Function to get user input
function getPlayerChoice() {
    // .toLowerCase() so any answer would be lowercase
    return playerChoice = prompt('Choose: Rock, Paper, Scissors', '').toLowerCase();
}

// Function for computer to get random choice from choices
function getComputerChoice() {
    // choices.length to get length of array
    // use Math.random()*choices.length to get random numbers between 0-arrayLength
    // use Math.floor to round off to nearest lower integer
    return choices[Math.floor(Math.random()*choices.length)];
}

// Counter for scores
let playerScore = 0;
let computerScore = 0;

// Function to determine the winner
function playRound(playerSelection, computerSelection){

    // Rock paper scissors algorithm + update counter when winning
    if (playerSelection === computerSelection){
        console.log('Draw');
    } else if (playerSelection == 'rock' && computerSelection == 'paper'){
        console.log('You Lose! Paper beats Rock');
        computerScore++
    } else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        console.log('You Win! Rock beats Scissors');
        playerScore++
    } else if (playerSelection == 'paper' && computerSelection == 'rock'){
        console.log('You Win! Paper beats Rock');
        playerScore++
    } else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        console.log('You Lose! Scissors beats Paper');
        computerScore++
    } else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        console.log('You Win! Scissors beats Paper');
        playerScore++
    } else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        console.log('You Lose! Rock beats Scissors');
        computerScore++
    }
}

// Function to play the game
function game(){

    // for loop to play the game 5 times
    // i = 0 means loop starts at 0
    for (let i = 0; i < 5; i++){
        // actual game algorithm
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log('Player = ' + playerScore + ' : ' + 'Computer = ' + computerScore);
    }

    // Determine winner
    if (playerScore == computerScore){
        alert("It's a Draw!");
    } else if (playerScore > computerScore){
        alert("You Win!")
    } else {
        alert("You Lose!")
    }

    // Reset scores for next game
    playerScore = 0;
    computerScore = 0;
}
