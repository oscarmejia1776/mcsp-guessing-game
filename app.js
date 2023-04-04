//create an object called players
//the key will be the players name
//the value will be an array of the  players previous scores
//scores will be added using the push method
//reference back to last score using .length -1
//run a highscore function that compares current score to previous scores. If current score is highest score, return "NEW HIGH SCORE"

var players = {};

function guessANumber() {
  let secretNumber = Math.floor(Math.random() * 10) + 1;
  let name = prompt("What's Your Name?");

  if (name == null) {
    alert("Goodbye");
    return;
  }

  let input = prompt(`${name}, Guess a Number`);
  let guess = input;
  let tries = 1;
  let history = [guess];

  while (guess != secretNumber) {
    if (guess === null) {
      alert("Goodbye");
      return;
    } else if (!Number.isInteger(Number(guess))) {
      guess = Number(prompt("Please input valid number"));
    } else if (guess > secretNumber) {
      guess = prompt(`Sorry ${name}, Too High!`);
    } else if (guess < secretNumber) {
      guess = prompt(`Sorry ${name}, Too Low!`);
    } else {
      prompt(`${name}, please enter a number between 1 and 10.`);
    }
    history.push(guess);
    tries++;
  }

  console.log(tries);
  console.log(history);

  if (players[name] !== undefined) {
    if (history.length > players[name].length) {
      alert(
        `That’s Correct ${name}! You did better in your last game by ${
          history.length - players[name].length
        } fewer guesses!`
      );
    } else if (players[name].length > history.length) {
      alert(
        `That’s Correct ${name}! And you beat your previous attempt by ${
          players[name].length > history.length
        } fewer guesses.`
      );
    }
  } else {
    alert(
      `Congrats ${name}! It only took you ${tries} tries and your previous guesses were ${history}`
    );
  }

  players[name] = history;
  console.log(players);

  let playAgain = prompt("Play again? (y/n)").toLowerCase();
  if (playAgain === "n") {
    alert("Goodbye");
    return;
  } else {
    guessANumber();
  }
}
