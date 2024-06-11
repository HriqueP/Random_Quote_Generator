// https://api.quotable.io/random - Random Quote
// https://api.quotable.io/quotes/random - Random Quotes

fetch("https://api.quotable.io/random").then((response) => {
  if (response.ok) {
    response.json().then((data) => {
      console.log(data);
    });
  } else {
    console.log("Some problem with URL");
  }
});
