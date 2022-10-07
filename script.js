'use strict';

const number = Math.trunc(Math.random() * 20 + 1);

let score = 10;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //when there is an empty input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number';

    //For correct input
  } else if (guess == number) {
    document.querySelector('.message').textContent = '✅ correct Number';
    let highScore = (document.querySelector('.highscore').textContent = score);

    document.querySelector('.number').textContent = number;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // when input is highier than the guessed number
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 Game Over';
      document.querySelector('.score').textContent = 0;
    }

    // when input is lower than the guessed number
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 Game Over';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  location.reload();
});
