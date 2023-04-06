document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('#js-find-bar');
  button.addEventListener('click', () => {
    const city = document.querySelector('#js-city-input').value;
    if (city !== "") {
      getQuote(city);
    }
  });

  async function getQuote(city) {
    const endpoint = `https://api.openbrewerydb.org/breweries?by_city=${city}`;

    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      displayQuote(json);
    } catch (err) {
      console.log(err);
      alert('Failed to fetch breweries.');
    }
  }

  function displayQuote(breweries) {
    const quoteText = document.querySelector("#js-quote-text");
    let html = "";
    breweries.forEach(brewery => {
      html += `<p><strong>${brewery.name}</strong><br>${brewery.street}, ${brewery.city}, ${brewery.state} ${brewery.postal_code}</p>`;
    });
    quoteText.innerHTML = html;
  }

});
