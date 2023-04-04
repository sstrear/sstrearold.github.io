document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#js-new-quote');
    button.addEventListener('click', getQuote);
  
    const tweetButton = document.querySelector('#js-tweet');
    tweetButton.addEventListener('click', showAnswer);
  
    async function getQuote() {
      const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';
  
      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw Error(response.statusText);
        }
        const json = await response.json();
        displayQuote(json.question);
        showAnswer(json.answer);
      } catch (err) {
        console.log(err);
        alert('Failed to fetch new trivia.');
      }
    }
  
    function displayQuote(quote) {
      const quoteText = document.querySelector("#js-quote-text");
      quoteText.textContent = quote;
    }
  
    function showAnswer() {
      const answerText = document.querySelector("#js-answer-text");
      answerText.style.display = 'block';
    }
  
    getQuote();
  });
  