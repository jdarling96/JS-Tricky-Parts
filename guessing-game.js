function guessingGame() {
  let winningNumber = Math.floor(Math.random() * 100);

  let numberGuesses = 0;
  let won = false;
  return function (guess) {
    numberGuesses++;
    if (won) return "The game is over, you already won!";
      if (guess === winningNumber) {
        won = true;
        const isPlural = numberGuesses === 1 ? "guess" : "guesses"
        return `You win! You found ${winningNumber} in ${numberGuesses} ${isPlural}.`;
      } else if (guess > winningNumber) {
        return `${guess} is too high!`;
      } else {
        return `${guess} is too low!`;
      }
    } 
  
}

module.exports = { guessingGame };
