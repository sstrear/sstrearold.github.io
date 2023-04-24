const choices = document.querySelectorAll('.choices button');
const result = document.querySelector('.result');
const playerChoiceImg = document.querySelector('.player-choice');
const computerChoiceImg = document.querySelector('.computer-choice');

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const choicesArray = ['rock', 'paper', 'scissors'];
  const computerChoice = Math.floor(Math.random() * 3);
  const computerChoiceName = choicesArray[computerChoice];

  if (playerChoice === computerChoiceName) {
    result.textContent = 'Tie!';
  } else if (
    (playerChoice === 'rock' && computerChoiceName === 'scissors') ||
    (playerChoice === 'paper' && computerChoiceName === 'rock') ||
    (playerChoice === 'scissors' && computerChoiceName === 'paper')
  ) {
    playerScore++;
    result.textContent = 'You win!';
  } else {
    computerScore++;
    result.textContent = 'You lose!';
  }

  // update images
  if (playerChoice === 'rock') {
    playerChoiceImg.src = 'TheRock.jpg';
  } else if (playerChoice === 'paper') {
    playerChoiceImg.src = 'PaperOffice.png';
  } else if (playerChoice === 'scissors') {
    playerChoiceImg.src = 'Scissors.png';
  }
  
  if (computerChoiceName === 'rock') {
    computerChoiceImg.src = 'TheRock.jpg';
  } else if (computerChoiceName === 'paper') {
    computerChoiceImg.src = 'PaperOffice.png';
  } else if (computerChoiceName === 'scissors') {
    computerChoiceImg.src = 'Scissors.png';
  }
}

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    playGame(choice.id);
  });
});
