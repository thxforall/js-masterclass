const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = 'ROCK';
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WIN = 'PLAYER_WIN';
const RESULT_COMPUTER_WIN = 'COMPUER_WIN';

let gameIsRunning = false;

const startGameBtn = document.getElementById('start-game-btn');

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ''
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const add = (a, b) => a + b;

const getWinnr = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WIN
    : RESULT_COMPUTER_WIN;

//   if (cChoice === pChoice) {
//     return RESULT_DRAW;
//   } else if (
//     (cChoice === ROCK && pChoice === PAPER) ||
//     (cChoice === PAPER && pChoice === SCISSORS) ||
//     (cChoice === SCISSORS && pChoice === ROCK)
//   ) {
//     return RESULT_PLAYER_WIN;
//   } else {
//     return RESULT_COMPUTER_WIN;
//   }

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;

  if (playerChoice) {
    winner = getWinnr(computerChoice, playerChoice);
  } else {
    winner = getWinnr(computerChoice);
  }

  let message = `You Picked ${
    playerChoice || DEFAULT_USER_CHOICE
  }, computer pickd ${computerChoice}, therefore you `;

  if (winner === RESULT_DRAW) {
    message = message + 'had a draw.';
  } else if (winner === RESULT_PLAYER_WIN) {
    message = message + 'won.';
  } else {
    message = message + 'lost.';
  }
  alert(message);
  gameIsRunning = false;
});

// not related to game

const sumUp = (a, b, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };
  let sum = 0;
  for (const num of numbers) {
    sum += validateNumber(num);
  }
  return sum;
};

const substractUp = function () {
  let sum = 0;
  for (const num of arguments) {
    // don't use that
    sum -= num;
  }
  return sum;
};

console.log(sumUp(1, 5, 10, 'dd', 6, 10, 10));
console.log(substractUp(1, 5, 10, 3, 6, 10, 10));
