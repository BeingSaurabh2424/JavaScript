let playerScore = 0;
let computerScore = 0;
for (let round = 1; round <= 3; round++) {
  let playerSelection = prompt(`Round ${round}: Choose Snake, Water, or Gun`);
  playerSelection = playerSelection.toUpperCase();
  let computerOptions = ["SNAKE", "WATER", "GUN"];
  let computerSelection = computerOptions[Math.floor(Math.random() * 3)];
  document.write(`Round ${round}: <br>`);
  document.write(`You chose ${playerSelection} <br>`);
  document.write(`Computer chose ${computerSelection} <br>`);
  if (playerSelection === computerSelection) {
    document.write("It's a tie! <br><br>");
  } else if (
    (playerSelection === "SNAKE" && computerSelection === "WATER") ||
    (playerSelection === "WATER" && computerSelection === "GUN") ||
    (playerSelection === "GUN" && computerSelection === "SNAKE")
  ) {
    document.write("You win! <br><br>");
    playerScore++;
  } else {
    document.write("Computer wins! <br><br>");
    computerScore++;
  }
}
if (playerScore === computerScore) {
  document.write("The game ends with a tie!");
} else if (playerScore > computerScore) {
  document.write("You win the game!");
} else {
  document.write("Computer wins the game!");
}