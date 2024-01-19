'use strict';
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.number').textContent = '?';

document.querySelector('.check').addEventListener('click', function () {
  if (!score) {
    document.querySelector('.message').textContent = 'You Lost! Try Again';
    document.querySelector('body').style.backgroundColor = '#A00404';
  } else {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
      document.querySelector('.message').textContent = 'No Number guessed :(';
      console.log('no guessed val');
    } else if (guess == number) {
      document.querySelector('.message').textContent =
        'Hurray Your Number matched!!';
      document.querySelector('.number').textContent = number;
      console.log(' guessed val matched');

      highscore = Math.max(highscore, score);
      document.querySelector('.highscore').textContent = highscore;

      document.querySelector('body').style.backgroundColor = '#03CF11';
    } else if (guess > number) {
      score -= 1;
      document.querySelector('.score').textContent = score;
      if (guess - number <= 2)
        document.querySelector('.message').textContent = 'Your guess is big ';
      else
        document.querySelector('.message').textContent =
          'Your guess is too big !';
    } else if (guess < number) {
      score -= 1;
      document.querySelector('.score').textContent = score;
      if (guess - number >= -2)
        document.querySelector('.message').textContent = 'Your guess is small ';
      else
        document.querySelector('.message').textContent =
          'Your guess is too small !';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = ' ';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
});
