'use strict';

//varibles
let secretNumber = Math.trunc(Math.random() * 50) + 1;
let score = 20;
let highscore = Number(document.querySelector('.highscore').textContent);

document.querySelector('.check').addEventListener('click', function() {
let guess = Number(document.querySelector('.guess').value);

    //when there's no input
    if (!guess) {
        document.querySelector('.message').textContent = '⚠️ Please type a number!';
    } else if (guess < 1 || guess > 50) { //when it's not a valid name
        document.querySelector('.message').textContent = '⚠️ Please type a number between 1 and 50!';
    } else if (guess > secretNumber){
        if (score > 1) {
            document.querySelector('.message').textContent = '⬆️ Too high!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.score').textContent = 0;
            document.body.style.backgroundColor = '#FF0000';
            document.querySelector('.message').textContent = '❌ Game over!';
        }
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '⬇️ Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.score').textContent = 0;
            document.body.style.backgroundColor = '#FF0000';
            document.querySelector('.message').textContent = '❌ Game over!';        
        }
        //when player wins the game
    } else if (guess === secretNumber) {
        document.body.style.backgroundColor = '#1fbb1f';
        document.querySelector('.number').style.width = '25rem';
        document.querySelector('.number').style.padding = '5rem';
        document.querySelector('.number').style.fontSize = '8rem';
        document.querySelector('.message').textContent = '👏 Correct number!';
        document.querySelector('.number').textContent = secretNumber; 

        if (score > highscore) {
            document.querySelector('.highscore').textContent = score;
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
    document.querySelector('.message').textContent = '💬 Start guessing...';
    document.querySelector('.score').textContent = score;

    document.body.style.backgroundColor = '#000000';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').style.padding = '3rem';
    document.querySelector('.number').style.fontSize = '6rem';    
});