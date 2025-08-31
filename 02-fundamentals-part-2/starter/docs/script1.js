const score1El = document.getElementById('score-1');
const score2El = document.getElementById('score-2');
const btnAdd = document.querySelectorAll('.btn-add');
const btnReset = document.getElementById('btn-reset');
const winningScoreInput = document.getElementById('winning-score');
const statusEl = document.querySelector('.status .target');
const winnerMsg = document.querySelector('.winner');
const winnerName = document.querySelector('.winner-name');

let scores = [0, 0];
let winningScore = parseInt(winningScoreInput.value, 10);
if (isNaN(winningScore) || winningScore <= 0) {
    winningScore = 5; // default value
    winningScoreInput.value = winningScore;
}
let gameOver = false;

function updateScores() {
    score1El.textContent = scores[0];
    score2El.textContent = scores[1];
}

function checkWinner() {
    if (scores[0] >= winningScore) {
        gameOver = true;
        winnerMsg.classList.remove('hidden');
        winnerName.textContent = 'Player 1';
    } else if (scores[1] >= winningScore) {
        gameOver = true;
        winnerMsg.classList.remove('hidden');
        winnerName.textContent = 'Player 2';
    }
}
        const playerData = this.dataset.player;
        const player = parseInt(playerData, 10) - 1;
        if (isNaN(player) || player < 0 || player > 1) return;
        scores[player]++;
        updateScores();
        checkWinner();
        const player = parseInt(this.dataset.player, 10) - 1;
        scores[player]++;
        updateScores();
        checkWinner();
    });
});

btnReset.addEventListener('click', function () {
    scores = [0, 0];
    gameOver = false;
    updateScores();
    winnerMsg.classList.add('hidden');
});

winningScoreInput.addEventListener('change', function () {
    winningScore = parseInt(this.value, 10);
    statusEl.textContent = winningScore;
    btnReset.click();
});

// Initialize
updateScores();
statusEl.textContent = winningScore;
winnerMsg.classList.add('hidden');