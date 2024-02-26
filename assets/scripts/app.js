const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK = 'ATTACK';
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';

const enteredValue = prompt('Maximum life for you and the monster.', '100');

let choosenMaxLife = parseInt(enteredValue);

if (isNaN(choosenMaxLife) || choosenMaxLife <= 0) {
  choosenMaxLife = 100;
}

let currentMonsterHealth = choosenMaxLife;
let currentPlayerHealth = choosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(choosenMaxLife);

function reset() {
  currentMonsterHealth = choosenMaxLife;
  currentPlayerHealth = choosenMaxLife;
  resetGame(choosenMaxLife);
}

function endRound() {
  const initialPlayerLife = currentPlayerHealth;
  const playerDamge = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamge;

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerLife;
    setPlayerHealth(initialPlayerLife);
    alert(`You would be dead but the bonus life saved you`);
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You won!');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You lose!');
  } else if (currentMonsterHealth <= 0 && currentMonsterHealth <= 0) {
    alert('You have a draw');
  }

  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    reset();
  }
}

function attackMonster(mode) {
  let maxDamage;
  if (mode === MODE_ATTACK) {
    maxDamage = ATTACK_VALUE;
  } else if (mode === MODE_STRONG_ATTACK) {
    maxDamage = STRONG_ATTACK_VALUE;
  }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  endRound();
}

function attackHamdler() {
  attackMonster(MODE_ATTACK);
}

function strongAttackHandler() {
  attackMonster(MODE_STRONG_ATTACK);
}

function healPlayerHandler() {
  let healValue;
  if (currentPlayerHealth >= choosenMaxLife - HEAL_VALUE) {
    alert(`You can't heal to more than your max initial health.`);
    healValue = choosenMaxLife - currentPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  }
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;

  endRound();
}

attackBtn.addEventListener('click', attackHamdler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
