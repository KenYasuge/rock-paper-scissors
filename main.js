// Rock paper scissors choices array to choose from
const choices = ['rock', 'paper', 'scissors']

// Counter for scores
let playerScore = 0;
let computerScore = 0;

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

    // show scores on the board
    playerScoreText.textContent = 'Player: ' + playerScore;
    compScoreText.textContent = 'Computer: ' + computerScore;

}

// Function to play the game
function game(){

    // actual game algorithm
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log('Player = ' + playerScore + ' : ' + 'Computer = ' + computerScore);

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

// on click, player choice = rock
const rockBtn = document.querySelector('.rock');
rockBtn.addEventListener('click', function(){
    playRound('rock',getComputerChoice())
})
// on click, player choice = paper
const paperBtn = document.querySelector('.paper');
paperBtn.addEventListener('click', function(){
    playRound('paper',getComputerChoice())
})
// on click, player choice = scissors
const scissorsBtn = document.querySelector('.scissors');
scissorsBtn.addEventListener('click', function(){
    playRound('scissors',getComputerChoice())
})

const playerScoreText = document.querySelector('.player-score')
const compScoreText = document.querySelector('.comp-score')