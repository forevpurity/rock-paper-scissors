const getComputerChoice = () => {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * 3)];
};

let you = 0,
  pc = 0;

const body = document.querySelector("body");
const score = document.createElement("div");
const announcement = document.createElement("div");
const result = document.createElement("div");

score.textContent = "YOU 0 : 0 PC";
announcement.textContent = "Please Choose One!";

body.appendChild(score);
body.appendChild(announcement);
body.appendChild(result);

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection == computerSelection) {
    announcement.textContent = `This round is Draw! Your choice is ${playerSelection}, PC choice is ${computerSelection}`;
  }

  if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    score.textContent = `YOU ${++you} : ${pc} PC`;
    announcement.textContent = `You win this round! Your choice is ${playerSelection}, PC choice is ${computerSelection}`;
  } else {
    score.textContent = `YOU ${you} : ${++pc} PC`;
    announcement.textContent = `You lose this round! Your choice is ${playerSelection}, PC choice is ${computerSelection}`;
  }
  if (you == 5) {
    result.textContent = "You Win The Game !!!";
    buttons.forEach((button) => {
      button.disabled = true;
    });
  } else if (pc == 5) {
    result.textContent = "You Lose The Game !!!";
    buttons.forEach((button) => {
      button.disabled = true;
    });
  }
};

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (event) =>
    playRound(event.target.textContent, getComputerChoice())
  );
});
