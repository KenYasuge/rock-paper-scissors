// Rock paper scissors choices array to choose from
const choices = ['rock', 'paper', 'scissors']

// Counter for scores
let playerScore = 0;
let computerScore = 0;

// Get score selectors
const playerScoreText = document.querySelector('.player-score');
const compScoreText = document.querySelector('.comp-score');

// Get player choice image & comp choice image
const playerImg = document.querySelector('.player-choice');
const compImg = document.querySelector('.comp-choice');

// Get announcements
const annText = document.querySelector('.announcement-text');
const roundText = document.querySelector('.round-details-text');

// Get modal
const modal = document.querySelector('.modal');
const modalBox = document.querySelector('.modal-content');

// Get text for winner in modal
const modalText = document.querySelector('.winner-text');

// Function for computer to get random choice from choices
function getComputerChoice() {
    // choices.length to get length of array
    // use Math.random()*choices.length to get random numbers between 0-arrayLength
    // use Math.floor to round off to nearest lower integer
    return choices[Math.floor(Math.random()*choices.length)];
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

// Reset buttons
const resetBtn = document.querySelector('.reset');
const resetBtn2 = document.querySelector('.reset2');
resetBtn.addEventListener('click', resetGame);
resetBtn2.addEventListener('click', resetGame);

// Reset function
function resetGame (){
    // Reset scores for next game
    playerScore = 0;
    computerScore = 0;
    playerScoreText.textContent = playerScore;
    compScoreText.textContent = computerScore;
    playerImg.src = '';
    compImg.src = '';
    annText.textContent = '';
    annText.style.cssText = 'background-color: #FFFFFF;'
    roundText.textContent = '';
    modal.style.display = 'none';
}

// Function to determine the winner
function playRound(playerSelection, computerSelection){
    // Rock paper scissors algorithm + update counter when winning
    if (playerSelection === computerSelection){
        console.log('Draw');
        annText.textContent = ('Draw');
        annText.style.cssText = "background-color: #ADC4CE; color: black;";
        roundText.textContent = ("It's a draw");
    } else if (playerSelection == 'rock' && computerSelection == 'paper'){
        console.log('You Lose! Paper beats Rock');
        annText.textContent = ('You Lose');
        annText.style.cssText = "background-color: #EF665B; color: white;";
        roundText.textContent = ('Paper beats Rock');
        computerScore++
    } else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        console.log('You Win! Rock beats Scissors');
        annText.textContent = ('You Win');
        annText.style.cssText = "background-color: #9ED2BE; color: white;";
        roundText.textContent = ('Rock beats Scissors');
        playerScore++
    } else if (playerSelection == 'paper' && computerSelection == 'rock'){
        console.log('You Win! Paper beats Rock');
        annText.textContent = ('You Win');
        annText.style.cssText = "background-color: #9ED2BE; color: white;";
        roundText.textContent = ('Paper beats Rock');
        playerScore++
    } else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        console.log('You Lose! Scissors beats Paper');
        annText.textContent = ('You Lose');
        annText.style.cssText = "background-color: #EF665B; color: white;";
        roundText.textContent = ('Scissors beats Paper');
        computerScore++
    } else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        console.log('You Win! Scissors beats Paper');
        annText.textContent = ('You Win');
        annText.style.cssText = "background-color: #9ED2BE; color: white;";
        roundText.textContent = ('Scissors beats Paper');
        playerScore++
    } else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        console.log('You Lose! Rock beats Scissors');
        annText.textContent = ('You Lose');
        annText.style.cssText = "background-color: #EF665B; color: white;";
        roundText.textContent = ('Rock beats Scissors');
        computerScore++
    }

    // Show computer selection image
    if (computerSelection == 'rock'){
        compImg.src = 'images/rock.png'
    } else if (computerSelection == 'paper'){
        compImg.src = 'images/paper.png'
    } else if (computerSelection == 'scissors'){
        compImg.src = 'images/scissors.png'
    }

    // Show scores on the board
    playerScoreText.textContent = playerScore;
    compScoreText.textContent = computerScore;

    
    // Return winner if one player scores 5
    if (playerScore == 5){
        modal.style.display ='block';
        modalText.textContent = 'You Won!';
    } else if (computerScore == 5){
        modal.style.display ='block';
        modalText.textContent = 'You Lost!';
    }

    // Reset game when clicking outside the modal
    window.onclick = function(event){
        if (event.target == modal){
            modal.style.display = 'none';
            resetGame();
        }
    }
}

