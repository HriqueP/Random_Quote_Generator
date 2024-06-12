const phrase = document.querySelector(".phrase");
const author = document.querySelector(".author");

// https://api.quotable.io/random - Random Quote
// https://api.quotable.io/quotes/random - Random Quotes

fetch("https://api.quotable.io/random").then((response) => {
  if (response.ok) {
    response.json().then((data) => {
      const content = `
        <img src="./assets/open-quotes.png" width="20" />
        ${data.content}
        <img src="./assets/close-quotes.png" width="20" />
      `;
      phrase.innerHTML = content;
      author.innerText = "- " + data.author;
    });
  } else {
    console.log("Some problem with URL");
  }
});
