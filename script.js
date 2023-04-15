'use strict';

//varibles
let secretNumber = Math.trunc(Math.random() * 50) + 1;
let score = 20;
let highscore = Number(document.querySelector('.highscore').textContent);
const mobileScreenSize = 767;
const messageElement= document.querySelector('.message');
const numberElement = document.querySelector('.number');
const scoreElement = document.querySelector('.score');
const guessElement = document.querySelector('.guess');
const modalElement = document.querySelector('.modal_game-over');
const modalMessageElement= document.querySelector('.modal_message');
const overlay = document.querySelector('.overlay');
const closeModalButton = document.querySelector('.modal_close-btn');

//function that handles the game messages
const displayMessage = function(message){
    messageElement.textContent = message;
    modalMessageElement.textContent = message;
};

//function that handles the score updating
const updateScore = function() {
    score --;
    scoreElement.textContent = score;
};

//function that handless the modal close 
const closeModal = function() {
    modalElement.classList.add('hidden');
    overlay.classList.add('hidden');
}

const guessNumber = function() {
let guess = Number(document.querySelector('.guess').value);

    //when there's no input
    if (!guess) {
        displayMessage('⚠️ Please type a number!');
    } else if (guess < 1 || guess > 50) { //when it's not a valid name
        displayMessage('⚠️ Please type a number between 1 and 50!');
    } else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > secretNumber ? '⬆️ Too high!' : '⬇️ Too low!';
            updateScore();
        } else {
            scoreElement.textContent = 0;
            document.body.style.backgroundColor = '#FF0000';
            displayMessage('⚠️ Game over! Do you want to play again?');
            modalElement.classList.remove('hidden');
            overlay.classList.remove('hidden');
        }    
        //when player wins the game
    } else {
        document.body.style.backgroundColor = '#1fbb1f';
        numberElement.style.width = '25rem';
        numberElement.style.padding = '5rem';
        numberElement.style.fontSize = '8rem';
        numberElement.textContent = secretNumber; 
        displayMessage('👏 Correct number!');

        if (score > highscore) {
            document.querySelector('.highscore').textContent = score;
            highscore = score; //Update the highscore variable
        }

        if (window.innerWidth < mobileScreenSize) {        
            numberElement.style.width = '20rem';
            numberElement.style.padding = '4rem';
            numberElement.style.fontSize = '6rem';            
        }
    }
};

//function to restart the game
const restartGame = function() {
    modalElement.classList.add('hidden');
    overlay.classList.add('hidden');
    score = 20;
    secretNumber = Math.trunc(Math.random() * 50) + 1;

    displayMessage('💬 Start guessing...');
    guessElement.value = '';
    scoreElement.textContent = score;
    numberElement.textContent = '?';

    document.body.style.backgroundColor = '#000000';
    numberElement.style.width = '15rem';
    numberElement.style.padding = '3rem';
    numberElement.style.fontSize = '6rem';    
};

// Functions to define events onclick and enter key 
document.querySelector('.check').addEventListener('click', guessNumber);
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        guessNumber();
    }
});