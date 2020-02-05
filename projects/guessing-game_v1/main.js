function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  // The maximum is inclusive and the minimum is inclusive
}

function guessingGame() {
  // Create a number to guess between 0 and 10
  let numberToGuess = getRandomIntInclusive(0, 10);

  let count = 1;

  // make your first Guess
  let guess = parseInt(prompt("Guess a number between 0 - 10: (You have only 3 attempts)"))

  // As long as thee guess is incorrect or you have tried to guess less than 3 times, try to guess again

  while(guess != numberToGuess && count < 3) {
    if(isNaN(guess)) {
      guess = parseInt(prompt("What the hell do you think you are doing?! I asked for a number!"))
    } else {
      guess = parseInt(prompt(`Wrong!!! Try again! You have ${3 - count} attempts left`));
      count++;
    }
  }

  if(guess == numberToGuess && count < 3) {
    alert(`Success: the number is indeed ${numberToGuess}. You got the number correct after ${count} attempts.`)
  } else {
    alert(`Sorry human, but you could not guess the number in less than 3 times. The number was ${numberToGuess}`)
  }
}

guessingGame();
