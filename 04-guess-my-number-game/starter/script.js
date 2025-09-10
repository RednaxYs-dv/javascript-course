'use strict';

console.log(`=== GAME DEVELOPMENT: GUESS MY NUMBER ===`);

console.log('Goal: Build a complete interactive game from scratch');
console.log('Focus: DOM manipulation, game state, and user interaction');

// ===== DOM ELEMENTS SELECTION - THE FOUNDATION =====
console.log("--- DOM ELEMENTS SELECTION ---");

const messageEl = document.querySelector('.message');
console.log(messageEl);
console.log(messageEl.textContent);

messageEl.textContent = `Welcome!!!`;

/* const scoreEl = document.querySelector('.score');
console.log(scoreEl);
console.log(scoreEl.textContent);

scoreEl.textContent = 30; */

const guessEl = document.querySelector('.guess');
console.log(guessEl);


console.log('Elements updated!');

const guessInputEl = document.querySelector('.guess');

console.log('Current guess value:', guessInputEl.value);

guessInputEl.value = 23;
console.log('Guess set to:', guessInputEl.value);

/* const numberEl = document.querySelector('.number');
numberEl.textContent = 14; */

const highscoreEl = document.querySelector('.highscore');
console.log('Highscore:', highscoreEl.textContent);
highscoreEl.textContent = 10;

const guessInput = document.querySelector('.guess');
console.log('Guess input field:', guessInput);
guessInput.value = 15;

//  console.log('Number: ', numberEl);
console.log('Highscore: ', highscoreEl);
console.log('Guess input: ', guessInput);

let secretNumber = Math.trunc(Math.random() * 32) + 1;
// Debugging only
console.log('Secret number:', secretNumber);

let score = 32;
let highscore = 0;

document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;

console.log('Game state initialized!');
console.log('Secret:', secretNumber, 'Score:', score, 'Highscore:', highscore);

// Creating own game state variables:

// Mah code here...
let playerName = 'Xanderys';
let attempts = 0;
let gameActive = true;
let easySecret = Math.trunc(Math.random() * 10) + 1;

console.log('Player:', playerName);
console.log('Attempts:', attempts);
console.log('Game active:', gameActive);
console.log('East secret number:', easySecret);

console.log('Own game state initialized!');

// Event Listeners - Making the Buttons Interactive!!!

// Adding click event to the Check button
document.querySelector('.check').addEventListener('click', function() {
    const guess1 = Number(document.querySelector('.guess').value);
    console.log('Check button clicked!');

    // 1) Missing input
    if (!guess1) {
        document.querySelector('.message').textContent = 'No number!';
        return;
    }

    // 2) Out of range input
    if (guess1 < 1 || guess1 > 32) {
        document.querySelector('.message').textContent = '⛔ Out of range! Must be between 1 to 32!';
        return; // stop in here
    }

    // Getting the player's guess and convert to number
    const guess = Number(document.querySelector('.guess').value);
    console.log('Player guess:', guess);

    // BAsic game logic - check if guess if correct
    if (guess === secretNumber) {
        console.log('Correct guess');
         document.querySelector('.message').textContent = '🎉 Game Over!!!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.guess').value = '';
        document.body.style.backgroundColor = 'green';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
            console.log('New highscore:', highscore);
            document.querySelector('.message').textContent = '🏆 YOU WON!!!';
            document.querySelector('.guess').disabled = true;
            document.querySelector('.check').disabled = true;
        }
    } else if ( guess > secretNumber ) {
        console.log('Too high!');
        document.querySelector('.message').textContent = '📈 Too high!';
        score--;
    } else if (guess < secretNumber) {
        console.log('Too low!');
        document.querySelector('.message').textContent = '📉 Too low!';
        score--;
    } if (score < 1) {
        document.querySelector('.message').textContent = '💀 Game Over!';
        document.querySelector('.guess').value = '';
        document.querySelector('.guess').disabled = true;
        document.querySelector('.check').disabled = true;
        score = 0;
        document.body.style.backgroundColor = 'red';
    }
    document.querySelector('.score').textContent = score;
});
// Always convert input to number for comparison
const guess = Number(document.querySelector('.guess').value);

// Why we need Number():
console.log('Input as string:', document.querySelector('.guess').value); // "15"
console.log('Input as number:', Number(document.querySelector('.guess').value)); // 15
console.log('String comparison:', '15' === 15); // false
console.log('Number comparison:', 15 === 15); // true

// Game Foundation Verification

console.log('🎮 Game Foundation Complete!');
console.log('✅ DOM element selection working');
console.log('✅ Game state variables initialized');
console.log('✅ Event listeners responding');
console.log('✅ Basic game logic implemented');
console.log('Ready for advanced features in Hour 2!');

// Test your game one more time
console.log('Secret number for testing:', secretNumber);
console.log('Try to guess it!');

// Hour 2 - Event Handling and User Interactions

// Code updated from if, else if, else, also added score-- functionality to decrease score as it gets more wrong

// Code updated from if , else if, added Win or Lose situations, disabling further answer if guessed right or too wrong

// Game restart functionality
document.querySelector('.again').addEventListener('click', function() {
    // Reset game state variables
    score = 32;
    secretNumber = Math.trunc(Math.random() * 32) + 1;
    console.log('Game restarted! New secret number:', secretNumber);
    // Reset display
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    
    // Re-enable input and check button
    document.querySelector('.guess').disabled = false;
    document.querySelector('.check').disabled = false;

    document.body.style.backgroundColor = '';

});

////////////////////////////////////
// Enhanced Game Verification

console.log('🎮 Enhanced Game Complete!');
console.log('✅ Score tracking working');
console.log('✅ Win/lose conditions implemented');
console.log('✅ Game restart functionality working');
console.log('✅ Complete game experience ready');
console.log('Ready for visual polish in Hour 3!');

// Test your complete game
console.log('Test: Try to win, try to lose, then restart!');

// Hour 3 - Visual Polish and User Experience

// WIN: set background to green
