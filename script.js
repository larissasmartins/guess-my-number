'use strict';

//varibles
let secretNumber = Math.trunc(Math.random() * 50) + 1;
let score = 20;
let highscore = Number(document.querySelector('.highscore').textContent);

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
} 

document.querySelector('.check').addEventListener('click', function() {
let guess = Number(document.querySelector('.guess').value);

    //when there's no input
    if (!guess) {
        displayMessage('⚠️ Please type a number!');
    } else if (guess < 1 || guess > 50) { //when it's not a valid name
        displayMessage('⚠️ Please type a number between 1 and 50!');
    } else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > secretNumber ? '⬆️ Too high!' : '⬇️ Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.score').textContent = 0;
            document.body.style.backgroundColor = '#FF0000';
            displayMessage('❌ Game over!');
        }    
        //when player wins the game
    } else if (guess === secretNumber) {
        document.body.style.backgroundColor = '#1fbb1f';
        document.querySelector('.number').style.width = '25rem';
        document.querySelector('.number').style.padding = '5rem';
        document.querySelector('.number').style.fontSize = '8rem';
        document.querySelector('.number').textContent = secretNumber; 
        displayMessage('👏 Correct number!');

        if (score > highscore) {
            document.querySelector('.highscore').textContent = score;
            highscore = score; //Update the highscore variable
        }

        if (window.innerWidth < 767) {        
            document.querySelector('.number').style.width = '20rem';
            document.querySelector('.number').style.padding = '4rem';
            document.querySelector('.number').style.fontSize = '6rem';            
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    document.querySelector('.number').textContent = '?';
    secretNumber = Math.trunc(Math.random() * 50) + 1;

    document.querySelector('.guess').value = '';
    displayMessage('💬 Start guessing...');
    document.querySelector('.score').textContent = score;

    document.body.style.backgroundColor = '#000000';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').style.padding = '3rem';
    document.querySelector('.number').style.fontSize = '6rem';    
});