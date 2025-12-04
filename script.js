function getComputerChoice() {
  let choice = Math.trunc(Math.random() * 3);
  switch (choice) {
    case 0:
      console.log("Rock");
      break;
    case 1:
      console.log("paper");
      break;
    case 2:
      console.log("Scissors");
      break;
  }
}

function getHumanChoice(){
    let option = prompt("Let's play a game! Choose one: Rock, Paper or Scissors!")
    console.log(option)
}


