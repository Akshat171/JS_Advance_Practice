let randomNum = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrhi = document.querySelector(".lowOrhi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validGuess(guess);
  });
}

function validGuess(guess) {
  //validate if value is lie with in 1 and 100
  if (isNaN(guess)) {
    alert("PLease enter a valid number");
  } else if (guess < 1) {
    alert("Please Enter A Number Greater Than 1");
  } else if (guess > 100) {
    alert("Please Enter A Number Less Than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over . Random number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //if value is equal to random number if it is then use display message to show that you are win
  if (guess === randomNum) {
    displayMessage(`You guess it right`);
  } else if (guess < randomNum) {
    displayMessage(`Number is too low`);
  } else if (guess > randomNum) {
    displayMessage("number is too high");
  }
}

function displayGuess(guess) {
  //clean the values for next play , update guesses
  userInput.value = "";
  guessSlot.innerHTML += `${guess}`;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  //pass message
  lowOrhi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(message) {
  //end game
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">start new game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame(message) {
  //new Game
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function () {
    randomNum = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = "${11-numGuess}";
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
