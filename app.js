function guessANumber(){
var name = prompt("What's Your Name?")

  var input = prompt(`${name}, Guess a Number`);
  var guess = Number(input);
  var secretNumber = Math.floor(Math.random() * 10) + 1;
  var tries = 1;
  var history = [guess];

  while (!Number.isInteger(guess)){
  guess = Number(prompt ("Please input valid number"));
  };

  while (guess !== secretNumber) {
    if (guess === 0) {
      alert ("Later Loser");
      return;
    }
    if (guess > secretNumber){
      guess = Number(prompt("Too High!"))
    } else if (guess < secretNumber){
      guess = Number(prompt("Too Low"))
    }
  history.push(guess);
  tries++;
  };

console.log(tries);
console.log(history);
  alert (`Congrats ${name}! It only took you ${tries} tries and your previous guesses were ${history}`);
  let playAgain = prompt("Play again? (y/n)").toLowerCase();
   if (playAgain === "n"){
    alert ("Later Loser!");
   } else {
    let input = prompt(`${name}, Guess a Number`)
   }
}
