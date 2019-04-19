var userInputBox = document.getElementById("userInputBox");
const submitBtn = document.getElementById("submitBtn");
const gameWinner = document.getElementById("gameWinner");
const compScore = document.getElementById("compScore");
const userScore = document.getElementById("userScore");
// let getUserChoice = "";
// let getComputerChoice = "";
const rps = {
  getUserChoice(userInput) {
    userInput = userInputBox.value;
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
  },
  getComputerChoice() {
    var arrIndex = Math.floor(Math.random() * Math.floor(3));
    return this.choices[arrIndex];
  },
  determineWinner(getUserChoice, getComputerChoice) {
    this.getUserChoice = getUserChoice;
    this.getComputerChoice = getComputerChoice;
    if (!getUserChoice || !getComputerChoice) {
      alert("invalid selection");
    } else if (this.getUserChoice === this.getComputerChoice) {
      gameWinner.innerText = "Its a tie!";
    } else if (
      (getUserChoice === "rock" && getComputerChoice === "scissors") ||
      (getUserChoice === "paper" && getComputerChoice === "rock") ||
      (getUserChoice === "scissors" && getComputerChoice === "paper")
    ) {
      this.uScore++;
      gameWinner.innerText = "You Won!";
      userScore.innerText = this.uScore;
    } else {
      this.cScore++;
      compScore.innerText = this.cScore;
      gameWinner.innerText = "Computer Won!";
    }
  },
  choices: ["rock", "paper", "scissors"],
  uScore: 0,
  cScore: 0
};

//Keep score count
userScore.innerText = rps.uScore;
compScore.innerText = rps.cScore;

submitBtn.addEventListener("click", function(e) {
  var uc = rps.getUserChoice();
  var cc = rps.getComputerChoice();
  e.preventDefault();
  rps.determineWinner(uc, cc);
  console.log("user input is :", uc);
  console.log("comp input is :", cc);
  reset();
});

function reset() {
  userInputBox.value = "";
}
