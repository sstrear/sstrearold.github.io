const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

let storyText = 'On a snowy 0 ferenheit day :insertx: decided to go sleding. When they got to :inserty:, they stood as their friends :insertz:. Creg stood there in shock — :insertx: weighs 500 pounds, and it was a freezing day.';
let insertX = ['A.S Muncher','Anita Naylor','Bo N. Herr'];
let insertY = ['the slopes','your Moms house','neverland'];
let insertZ = ['spontaneously combusted','got obducted by alians','froze abd broke into tiny pieces'];

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


function result() {
  let newStory = storyText;
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);
  newStory = newStory.replace(':insertx:',xItem).replace(':insertx:',xItem).replace(':inserty:',yItem).replace(':insertz:',zItem);

  if(customName.value !== '') {
    let name = customName.value;
    newStory =  newStory.replace('Creg',name);
  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300*0.07).toString() + ' stone';
    let temperature =  Math.round((94-32)/1.8).toString() + ' centigrade';
    newStory =  newStory.replace('0 fahrenheit',temperature).replace('500 pounds',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

randomize.addEventListener('click', result);