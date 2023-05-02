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
  updateScores();

  if (playerChoice === computerChoiceName) {
    result.textContent = 'Tie!';
  } else if (
    (playerChoice === 'rock' && computerChoiceName === 'scissors') ||
    (playerChoice === 'paper' && computerChoiceName === 'rock') ||
    (playerChoice === 'scissors' && computerChoiceName === 'paper')
  ) {
    playerScore++;
    result.textContent = 'You win!';
    document.getElementById("player-score").textContent = playerScore;
  } else {
    computerScore++;
    result.textContent = 'You lose!';
    document.getElementById("computer-score").textContent = computerScore;
  }

  // update images
  if (playerChoice === 'rock') {
    playerChoiceImg.src = 'TheRock.png';
  } else if (playerChoice === 'paper') {
    playerChoiceImg.src = 'PaperOffice.png';
  } else if (playerChoice === 'scissors') {
    playerChoiceImg.src = 'Scissors.png';
  }
  
  if (computerChoiceName === 'rock') {
    computerChoiceImg.src = 'TheRock.png';
  } else if (computerChoiceName === 'paper') {
    computerChoiceImg.src = 'PaperOffice.png';
  } else if (computerChoiceName === 'scissors') {
    computerChoiceImg.src = 'Scissors.png';
  }
}

function updateScores() {
  const playerScoreDisplay = document.getElementById('player-score');
  const computerScoreDisplay = document.getElementById('computer-score');

  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
}



choices.forEach(choice => {
  choice.addEventListener('click', () => {
    playGame(choice.id);
  });
});
