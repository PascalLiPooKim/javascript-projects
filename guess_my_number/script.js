'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '😍 Correct Number!';
// // console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;


// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
// let score = Number(document.querySelector('.score').textContent);
const startingScore = 20
let score = startingScore;
document.querySelector('.score').textContent = score;
// document.querySelector('.number').textContent = secretNumber;
let highestScore = 0;

document.querySelector('.check').addEventListener('click', function () {

    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (score > 0) {

        // when there is no input
        if (!guess || guess < 1 || guess > 20) {
            document.querySelector('.message').textContent = '⛔ Invalid Input!!';
        }
        // when the player wins
        else if (guess == secretNumber) {
            document.querySelector('.message').textContent = '😍 Correct Number!';
            document.querySelector('.number').textContent = secretNumber;

            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem'
            
            highestScore = Math.max(highestScore, score)
            document.querySelector('.highscore').textContent = highestScore;
        }
        // when guess is too high
        else if (guess > secretNumber) {
            document.querySelector('.message').textContent = '☝ Too High!';
            score--;
        }
        // when guess is too low
        else if (guess < secretNumber) {
            document.querySelector('.message').textContent = '👇 Too Low!';
            score--;
        }
    }
    
    
    document.querySelector('.score').textContent = score;

    if (!score) {
        document.querySelector('.message').textContent = 'You lost the Game! 😭';
        // document.querySelector('.score').textContent = score;
        document.querySelector('body').style.backgroundColor = 'red';
        document.querySelector('.number').style.width = '45rem';
    }
    
});

document.querySelector('.again').addEventListener('click', function () {
    score = startingScore;
    secretNumber = Math.trunc(Math.random() * 20) + 1
    document.querySelector('.message').textContent = 'Start guessing';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'
    console.log(secretNumber);
});