let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = Math.trunc(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getHumanChoice() {
  let option = prompt(
    "Let's play a game! Choose one: Rock, Paper or Scissors!"
  );
  return option;
}

const compChoice = getComputerChoice();
const humanChoice = getHumanChoice();

const answer =
  "You chose: " + humanChoice + ". But computer chose: " + compChoice;

if (humanChoice === "rock") {
  switch (compChoice) {
    case "rock":
      console.log("draw! " + answer);
      break;
    case "paper":
      console.log("Loss! " + answer);
      computerScore++;
      break;
    case "scissors":
      console.log("Win! " + answer);
      humanScore++;
      break;
  }
}
else if (humanChoice === "paper") {
  switch (compChoice) {
    case "paper":
      console.log("draw! " + answer);
      break;
    case "scissors":
      console.log("Loss! " + answer);
      computerScore++;
      break;
    case "rock":
      console.log("Win! " + answer);
      humanScore++;
      break;
  }
}
else if (humanChoice === "scissors") {
  switch (compChoice) {
    case "scissors":
      console.log("draw! " + answer);
      break;
    case "rock":
      console.log("Loss! " + answer);
      computerScore++;
      break;
    case "paper":
      console.log("Win! " + answer);
      humanScore++;
      break;
  }
}
else {
    console.error("wrong input")
}
