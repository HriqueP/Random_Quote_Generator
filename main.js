// https://api.quotable.io/random - Random Quote
// https://api.quotable.io/quotes/random - Random Quotes

// Page Elements
const phrase = document.querySelector(".phrase");
const author = document.querySelector(".author");

// Refresh quote on button click
async function showQuote() {
  const response = await fetch("https://api.quotable.io/random");
  console.log(response);
  const data = await response.json();
  console.log(data);

  const content = ` 
    <img src="./assets/open-quotes.png" width="20" />
    ${data.content}
    <img src="./assets/close-quotes.png" width="20" />`;

  phrase.innerHTML = content;
  author.innerText = "- " + data.author;
}

// Quote when page first loads
showQuote();
