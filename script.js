

//variables
const memeButton = document.getElementById("meme-btn");
const testButton = document.getElementById("test-btn");
var img = document.createElement("img");
var text = document.createElement("p");

const memeList = [];
const quotesList = [];
var memeListLength, randomMeme, randomQuote, textNode, quotesObject;

//fetch Quotes

// async function fetchQuoteList() {
//   // Fetch a random quote from the API
//   const response = await fetch("http://api.quotable.io/quotes?tags=inspirational&limit=75");
//   const data = await response.json();
//   if (response.ok) {
//     // Update array
//     quotesList.push(data);
//     quoteListLength = quotesList[0].results.length + 1;
//   } else {
//     quote.textContent = "An error occured";
//     console.log(data);
//   }
// }

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


//memebutton
memeButton.addEventListener("click", generateMeme)

//display meme and text on webpage

function generateMeme() {
  document.querySelector('section').appendChild(text);
    var label = document.querySelector('section > p');
    while (label.hasChildNodes()) {
        label.removeChild(label.firstChild);
      };
    let randomInt = Math.floor(Math.random() * memeListLength);
    randomMeme = memeList[0].data.memes[randomInt];
    // let randomIntQuote = Math.floor(Math.random() * quoteListLength);
    // randomQuote = quotesList[0].results[randomIntQuote].content;
    img.src = randomMeme.url;
    // var textNode = document.createTextNode(randomQuote);
    // text.appendChild(textNode);
    document.querySelector('section').appendChild(img);
}




