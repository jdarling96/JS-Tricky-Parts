function guessingGame() {
  let winningNumber = Math.floor(Math.random() * 100);

  let numberGuesses = 0;
  let won = false;
  return function (guess) {
    numberGuesses++;
    if (!won) {
      if (guess === winningNumber) {
        won = true;
        return `You win! You found ${winningNumber} in ${numberGuesses} guesses.`;
      } else if (guess > winningNumber) {
        return `${guess} is too high!`;
      } else {
        return `${guess} is too low!`;
      }
    } else {
      return "The game is over, you already won!";
    }
  };
}

module.exports = { guessingGame };
