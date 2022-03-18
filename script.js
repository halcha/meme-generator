

//variables
const memeButton = document.getElementById("meme-btn");
const testButton = document.getElementById("test-btn");
var img = document.createElement("img");
var text = document.createElement("p");

const memeList = [];
const quotesList = [];
var memeListLength, quoteListLength, randomMeme, randomQuote, textNode, quotesObject;

<<<<<<< HEAD
<<<<<<< HEAD
//fetch Quotes

async function fetchQuoteList() {
  // Fetch a random quote from the API
  const response = await fetch("http://api.quotable.io/quotes?tags=inspirational&limit=75");
  const data = await response.json();
  if (response.ok) {
    // Update array
    quotesList.push(data);
    quoteListLength = quotesList[0].results.length + 1;
  } else {
    quote.textContent = "An error occured";
    console.log(data);
  }
}

//fetch Memes

async function fetchMemeList() {
  // Fetch a random quote from the API
  const response = await fetch("https://api.imgflip.com/get_memes");
  const data = await response.json();
  if (response.ok) {
    // Update array
    memeList.push(data);
    memeListLength = memeList[0].data.memes.length + 1;
  } else {
    quote.textContent = "An error occured";
    console.log(data);
  }
}

// fetchQuoteList();
fetchMemeList();


=======
>>>>>>> parent of 58d98d1 (update with async fetch functions)
=======
>>>>>>> parent of 58d98d1 (update with async fetch functions)
//memebutton
memeButton.addEventListener("click", function(){
    document.querySelector('section').appendChild(text);
    var label = document.querySelector('section > p');
    while (label.hasChildNodes()) {
        label.removeChild(label.firstChild);
      };
    let randomInt = Math.floor(Math.random() * memeListLength);
    randomMeme = memeList[0][randomInt];
    let randomIntQuote = Math.floor(Math.random() * quoteListLength);
    randomQuote = quotesList[0].results[randomIntQuote].content;
    console.log("a meme!");
    console.log(randomMeme.name);
    console.log(randomQuote);
    img.src = randomMeme.url;
    var textNode = document.createTextNode(randomQuote);
    text.appendChild(textNode);
    document.querySelector('section').appendChild(img);
})

//textbutton
testButton.addEventListener("click", updateQuote);

//get data for memeList
// Store the element with the class 'content' as a variable for later use
//let content = document.querySelector('.content');

// Create new request for data and store as variable
var request = new XMLHttpRequest();

// Open a connection to the API endpoint,
//  passing in the arguments: (HTTP METHOD, URL ENDPOINT)
request.open('GET', 'https://api.imgflip.com/get_memes');


// When the URL loads
request.onload = function () {

  // Parse the response from the API as JSON data and store in a variable
  let data = JSON.parse(this.response);

  // Check the status codes to see if the request was successful
  if (request.status >= 200 && request.status < 400) {
    memeList.push(data.data.memes);
    memeListLength = memeList[0].length + 1;
  } else {
    // Handle error if API reqest is not successful
    let errorMessage = document.createElement('p');
    errorMessage.textContent = 'Error, unable to access API. Error: ' + request.status;
    content.appendChild(errorMessage);
  }
<<<<<<< HEAD
}
request.send();

//get data for quotes
// Store the element with the class 'content' as a variable for later use
//let content = document.querySelector('.content');

// Create new request for data and store as variable
var requestQuotes = new XMLHttpRequest();

// Open a connection to the API endpoint,
//  passing in the arguments: (HTTP METHOD, URL ENDPOINT)
requestQuotes.open('GET', 'http://api.quotable.io/quotes?tags=inspirational&limit=75');

=======
}
request.send();

//get data for quotes
// Store the element with the class 'content' as a variable for later use
//let content = document.querySelector('.content');

// Create new request for data and store as variable
var requestQuotes = new XMLHttpRequest();

// Open a connection to the API endpoint,
//  passing in the arguments: (HTTP METHOD, URL ENDPOINT)
requestQuotes.open('GET', 'http://api.quotable.io/quotes?tags=inspirational&limit=75');


// When the URL loads
requestQuotes.onload = function () {

  // Parse the response from the API as JSON data and store in a variable
  let dataQuotes = JSON.parse(this.response);

  // Check the status codes to see if the requestQuotes was successful
  if (requestQuotes.status >= 200 && requestQuotes.status < 400) {
    quotesList.push(dataQuotes);
    quoteListLength = quotesList[0].results.length + 1;
  } else {
    // Handle error if API reqest is not successful
    let errorMessage = document.createElement('p');
    errorMessage.textContent = 'Error, unable to access API. Error: ' + requestQuotes.status;
    content.appendChild(errorMessage);
  }
}
requestQuotes.send();
>>>>>>> parent of 58d98d1 (update with async fetch functions)

// When the URL loads
requestQuotes.onload = function () {

<<<<<<< HEAD
  // Parse the response from the API as JSON data and store in a variable
  let dataQuotes = JSON.parse(this.response);

  // Check the status codes to see if the requestQuotes was successful
  if (requestQuotes.status >= 200 && requestQuotes.status < 400) {
    quotesList.push(dataQuotes);
    quoteListLength = quotesList[0].results.length + 1;
  } else {
    // Handle error if API reqest is not successful
    let errorMessage = document.createElement('p');
    errorMessage.textContent = 'Error, unable to access API. Error: ' + requestQuotes.status;
    content.appendChild(errorMessage);
  }
}
requestQuotes.send();


//test fetch function

=======
//test fetch function

>>>>>>> parent of 58d98d1 (update with async fetch functions)
async function updateQuote() {
  // Fetch a random quote from the Quotable API
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();
  if (response.ok) {
    // Update DOM elements
    console.log(data);
  } else {
    quote.textContent = "An error occured";
    console.log(data);
  }
}

