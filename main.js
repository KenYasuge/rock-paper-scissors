// Rock paper scissors choices array to choose from
const choices = ['rock', 'paper', 'scissors']

// Counter for scores
let playerScore = 0;
let computerScore = 0;

// get score selectors
const playerScoreText = document.querySelector('.player-score');
const compScoreText = document.querySelector('.comp-score');

// get player choice image & comp choice image
const playerImg = document.querySelector('.player-choice');
const compImg = document.querySelector('.comp-choice');

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

    // show computer selection image
    if (computerSelection == 'rock'){
        compImg.src = 'images/rock.png'
    } else if (computerSelection == 'paper'){
        compImg.src = 'images/paper.png'
    } else if (computerSelection == 'scissors'){
        compImg.src = 'images/scissors.png'
    }

    // show scores on the board
    playerScoreText.textContent = playerScore;
    compScoreText.textContent = computerScore;

}

// on click, player choice = rock
const rockBtn = document.querySelector('.rock');
rockBtn.addEventListener('click', function(){
    // show image of choice
    playerImg.src = 'images/rock.png';

    // play game
    playRound('rock',getComputerChoice())
});
// on click, player choice = paper
const paperBtn = document.querySelector('.paper');
paperBtn.addEventListener('click', function(){
    playerImg.src = 'images/paper.png';
    playRound('paper',getComputerChoice())
});
// on click, player choice = scissors
const scissorsBtn = document.querySelector('.scissors');
scissorsBtn.addEventListener('click', function(){
    playerImg.src = 'images/scissors.png';
    playRound('scissors',getComputerChoice())
});

// reset button
const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', () => {
    // Reset scores for next game
    playerScore = 0;
    computerScore = 0;
    playerScoreText.textContent = playerScore;
    compScoreText.textContent = computerScore;
    playerImg.src = '';
    compImg.src = '';
});