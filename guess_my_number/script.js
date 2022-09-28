'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '😍 Correct Number!';
// // console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;


// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = Number(document.querySelector('.score').textContent);
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (score > 1) {
        if (!guess) {
            document.querySelector('.message').textContent = '⛔ No Number Input!!';
        }
        else if (guess == secretNumber) {
            document.querySelector('.message').textContent = '😍 Correct Number!';
        }
        else if (guess > secretNumber) {
            document.querySelector('.message').textContent = '☝ Too High!';
            score--;
        }
        else if (guess < secretNumber) {
            document.querySelector('.message').textContent = '👇 Too Low!';
            score--;
        }
    
        document.querySelector('.score').textContent = score;
    }
    else {
        document.querySelector('.message').textContent = 'You lost the Game! 😭';
        document.querySelector('.score').textContent = score - 1;
    }
    

});

