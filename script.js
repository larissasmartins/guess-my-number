'use strict';

// document.querySelector('.message').textContent
// document.querySelector('.highscore').textContent = 23;
// document.querySelector('.number').textContent = 20;''



let secretNumber = Math.trunc(Math.random() * 50) + 1;
document.querySelector('.number').textContent = secretNumber;

let score = 20;

document.querySelector('.check').addEventListener('click', function() {
let guess = Number(document.querySelector('.guess').value);

    //when there's no input
    if (!guess) {
        document.querySelector('.message').textContent = 'Please type a number!';
    } else if (guess < 1 || guess > 50) { //when it's not a valid name
        document.querySelector('.message').textContent = 'Please type a number between 1 and 50!';
    } else if (guess > secretNumber){
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too high!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.score').textContent = 0;
            document.body.style.backgroundColor = '#FF0000';
            document.querySelector('.message').textContent = 'Game over!';
        }
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.score').textContent = 0;
            document.body.style.backgroundColor = '#FF0000';
            document.querySelector('.message').textContent = 'Game over!';        
        }
        //when player wins the game
    } else if (guess === secretNumber) {
        document.body.style.backgroundColor = '#32CD32';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').style.padding = '6rem';
        document.querySelector('.message').textContent = 'Correct number!';
    }
})