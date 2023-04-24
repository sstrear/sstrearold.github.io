const volumeDisplay = document.querySelector('.volume-value');
//const volumeIncreaseButton = document.querySelector('.volume-increase');
//const volumeDecreaseButton = document.querySelector('.volume-decrease');

let currentVolume = Math.floor(Math.random() * 101); // generate random number between 0 and 100
volumeDisplay.textContent = currentVolume; // set initial value of volume display to random number

volumeIncreaseButton.addEventListener('click', () => {
  currentVolume++;
  volumeDisplay.textContent = currentVolume;
});

volumeDecreaseButton.addEventListener('click', () => {
  currentVolume--;
  volumeDisplay.textContent = currentVolume;
});
