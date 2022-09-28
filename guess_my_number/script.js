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
let score = 10;
document.querySelector('.score').textContent = score;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (score > 0) {

        // when there is no input
        if (!guess) {
            document.querySelector('.message').textContent = '⛔ No Number Input!!';
        }
        // when the player wins
        else if (guess == secretNumber) {
            document.querySelector('.message').textContent = '😍 Correct Number!';

            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem'
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
    }
    
});

