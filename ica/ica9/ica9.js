// Event listener for changing the box color
var box = document.querySelector('.box');
var button1 = document.querySelectorAll('.button')[0];
button1.addEventListener('click', function() {
  box.style.backgroundColor = 'red';
});

// Event listener for changing the paragraph text
var paragraph = document.querySelector('p');
var button2 = document.querySelectorAll('.button')[1];
button2.addEventListener('click', function() {
  paragraph.textContent = 'The text has been changed!';
});