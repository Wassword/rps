
const hands = ['rock', 'paper', 'scissors'];

function getHand() {
  return hands[Math.floor(Math.random() * 3)];
}

const player1 = {
  name: 'Player 1',
  getHand: getHand
};

const player2 = {
  name: 'Player 2',
  getHand: getHand
};

function playRound(player1, player2) {
  let hand1 = player1.getHand();
  let hand2 = player2.getHand();

  document.getElementById('player1-hand').innerText = `Played: ${hand1}`;
  document.getElementById('player2-hand').innerText = `Played: ${hand2}`;

  if (hand1 === hand2) {
    return null;
  } else if (
    (hand1 === 'rock' && hand2 === 'scissors') ||
    (hand1 === 'paper' && hand2 === 'rock') ||
    (hand1 === 'scissors' && hand2 === 'paper')
  ) {
    return player1;
  } else {
    return player2;
  }
}

function playGame() {
  player1.wins = 0;
  player2.wins = 0;

  while (player1.wins < 3 && player2.wins < 3) {
    let winner = playRound(player1, player2);
    if (winner) {
      winner.wins += 1;
    }
  }

  if (player1.wins === 3) {
    document.getElementById('game-result').innerText = `${player1.name} wins the game!`;
  } else {
    document.getElementById('game-result').innerText = `${player2.name} wins the game!`;
  }


function startGame() {
  document.getElementById('game-result').innerText = '';
  playGame();
}
}