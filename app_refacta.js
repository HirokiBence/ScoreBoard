/* プレイヤー1 */
const p1 = {
  score: 0,
  button: document.querySelector('#p1Button'),
  display: document.querySelector('#p1Display'),
}

/* プレイヤー2 */
const p2 = {
  score: 0,
  button: document.querySelector('#p2Button'),
  display: document.querySelector('#p2Display'),
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#winningScore');

let winningScore = 3;
let isGameOver = false;

/* 得点加算処理 */
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

/* プレイヤー1に得点追加 */
p1.button.addEventListener('click', function () {
  updateScores(p1, p2);
});

/* プレイヤー2に得点追加 */
p2.button.addEventListener('click', function () {
  updateScores(p2, p1);
});

resetButton.addEventListener('click', reset);

/* 得点リセット */
function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove('has-text-success', 'has-text-danger');
    p.button.disabled = false;
  }
}

/* マッチポイント設定 */
winningScoreSelect.addEventListener('change', function () {
  winningScore = parseInt(this.value);
  reset();
})