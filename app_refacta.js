const p1 = {
  score: 0,
  button: document.querySelector('#p1Button'),
  display: document.querySelector('#p1Display'),
}

const p2 = {
  score: 0,
  button: document.querySelector('#p2Button'),
  display: document.querySelector('#p2Display'),
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#winningScore');
// const p1Button = document.querySelector('#p1Button');
// const p2Button = document.querySelector('#p2Button');
// const p1Display = document.querySelector('#p1Display');
// const p2Display = document.querySelector('#p2Display');

let winningScore = 3;
let isGameOver = false;
// let p1Score = 0;
// let p2Score = 0;

function updateScores(player, opponent) {
  if (!isGameOver) {
    player.Score += 1;
    player.textContent = player.Score;
    if (player.Score === winningScore) {
      isGameOver = true;
      player.classList.add('has-text-success');
      opponent.classList.add('has-text-danger');
      player.disabled = true;
      opponent.disabled = true;
    }
  }
}

p1.button.addEventListener('click', function () {
  updateScores(p1, p2);
});

p2.button.addEventListener('click', function () {
  updateScores(p2, p1);
});

resetButton.addEventListener('click', reset);

function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove('has-text-success', 'has-text-danger');
    p.button.disabled = false;
  }
  // p2.score = 0;
  // p2.display.textContent = 0;
  // p2.display.classList.remove('has-text-danger', 'has-text-success');
  // p2.button.disabled = false;
}

winningScoreSelect.addEventListener('change', function () {
  winningScore = parseInt(this.value);
  reset();
})