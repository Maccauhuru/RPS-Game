const userInputBox = document.getElementById("userInputBox");
const submitBtn = document.getElementById("submitBtn");
const gameWinner = document.getElementById("gameWinner");
const compScore = document.getElementById("compScore");
const userScore = document.getElementById("userScore");
const choices = ["rock", "paper", "scissors"];
let uScore = 0;
let cScore = 0;
userScore.innerText = uScore;
compScore.innerText = cScore;
const getUserChoice = function(userInput) {
  userInput = userInput.toLowerCase();
  if (userInput === "rock") {
    return userInput;
  } else if (userInput === "paper") {
    return userInput;
  } else if (userInput === "scissors") {
    return userInput;
  } else {
    console.error("invalid choice!");
    return;
  }
};

const getComputerChoice = function() {
  let arrIndex = Math.floor(Math.random() * Math.floor(3));
  return choices[arrIndex];
};

const determineWinner = function(getUserChoice, getComputerChoice) {
  if (!getUserChoice || !getComputerChoice) {
    alert("invalid selection");
  } else if (getUserChoice === getComputerChoice) {
    gameWinner.innerText = "Its a tie!";
  } else if (
    (getUserChoice === "rock" && getComputerChoice === "scissors") ||
    (getUserChoice === "paper" && getComputerChoice === "rock") ||
    (getUserChoice === "scissors" && getComputerChoice === "paper")
  ) {
    uScore++;
    gameWinner.innerText = "You Won!";
    userScore.innerText = uScore;
  } else {
    cScore++;
    compScore.innerText = cScore;

    gameWinner.innerText = "Computer Won!";
  }
};

submitBtn.addEventListener("click", function(e) {
  e.preventDefault();
  let computerChoice = getComputerChoice();
  let userChoice = getUserChoice(userInputBox.value);
  console.log(userChoice, computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
  userInputBox.value = "";
});
