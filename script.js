//variables
const memeButton = document.getElementById("meme-btn");
const testButton = document.getElementById("test-btn");
var img = document.createElement("img");
var text = document.createElement("p");

const memeList = [];
const quotesList = [];
var memeListLength, quoteListLength, randomMeme, randomQuote, textNode, quotesObject;

var ronSwansonQuotes = ["Go back to the library where you belong.","There are only three ways to motivate people: money, fear, and hunger.","Cultivating a manly musk puts opponent on notice.","I like Tom. He doesn’t do a lot of work around here. He shows zero initiative. He’s not a team player. He’s never wanted to go that extra mile. Tom is exactly what I’m looking for in a government employee.","Once a year, every branch of this government meets in a room and announces what they intend to waste taxpayer money on.","I've never been hungover. After I've had too much whiskey, I cook myself a large flank steak, pan fried and salted butter. I eat that, put on a pair of wet socks and go to sleep.","Just give me all the bacon and eggs you have. Wait...wait. I worry what you just heard was: Give me a lot of bacon and eggs. What I said was: Give me all the bacon and eggs you have. Do you understand?","I’ve had the same haircut since 1978 and I’ve driven the same car since 1991. I’ve used the same wooden comb for three decades. I have one bowl. I still get my milk delivered by horse.","Do you have any history of mental illness in your family? I have an uncle who does yoga.","Keep your tears in your eyes where they belong.","Strippers do nothing for me…but I will take a free breakfast buffet anytime, anyplace.","I call this turf ‘n’ turf. It's a 16 oz T-bone and a 24 oz porterhouse. Also, whiskey and a cigar. I am going to consume all of this at the same time because I am a free American.","Every time she laughs, an angel dies. Even telemarketers avoid her. Her birth was payback for the sins of man. But you know the worst thing about her? She works for the library.","I've cried twice in my life. Once when I was seven and hit by a school bus. And then again when I heard that Li'l Sebastian has passed.","It's always a good idea to demonstrate to your coworkers that you are capable of withstanding a tremendous amount of pain.","Put some alcohol in your mouth to block with words from coming out.","I love nothing.","Say what you want about organized religion, but those bastards knew how to construct an edifice.","Sting like a bee. Do not float like a butterfly. That’s ridiculous.","America: The only country that matters. If you want to experience other ‘cultures,’ use an atlas or a ham radio.","It's an impossible puzzle, and I love puzzles!","I wanna punch you in the face so bad right now.","Give a man a fish and feed him for a day. Don't teach a man to fish… and feed yourself. He's a grown man. And fishing's not that hard.","It’s pointless for a human to paint scenes of nature when they can go outside and stand in it.","[On bowling] Straight down the middle. No hook, no spin, no fuss. Anything more and this becomes figure skating.","I leave no meat behind. It’s an honor thing.","I change my locks every 16 days.","I've had the same will since I was 8 years old. Upon my death, I will transfer all of my belongings to the man or animal who has killed me.","There are three acceptable haircuts: high and tight, crew cut, buzz cut.","Any dog under fifty pounds is a cat and cats are useless.","I believe in cutting useless government projects. I also believe in cutting useful government projects.","Son, there is no wrong way to consume alcohol.","When people get a little too chummy with me I like to call them by the wrong name to let them know I don't really care about them.","You had me at meat tornado.","Normally, if given the choice between doing something and nothing, I’d choose to do nothing. But I will do something if it helps someone else do nothing. I’d work all night, if it meant nothing got done.","Capitalism is the only way … It makes America great, England OK and France terrible.","Every two weeks I need to sand down my toe nails. They're too strong for clippers.","Friends: one to three is sufficient.","I love riddles!","Well, I am not usually one for speeches. So, goodbye.","Honor: if you need it defined, you don't have it.","People who buy things are suckers.","There has never been a sadness that can’t been cured by breakfast food.","Standard birth control methods are usually ineffective against a Swanson.","We have one activity planned: not getting killed.","Clear alcohols are for rich women on diets.","An ideal night out, to me, is stepping onto my porch area and grilling up a thick slab of something’s flesh and then popping in a highlight real from the WNBA.","Fish, for sport only, not for meat. Fish meat is practically a vegetable.","Turkey can never beat cow.","What's cholesterol?","Don't waste energy moving unless necessary.","The three most useless jobs in the world in order are: lawyer, congressman, and doctor.","I enjoy government functions like I enjoy getting kicked in the nuggets with a steel toed boot.","I regret nothing. The end.","I believe luck is a concept invented by the weak to explain their failures.","I'm going to get 12 eggs and part of a dead animal. Dealer's choice. Please and thank you.","Is Star Wars the one with the wizard boy?","Great job, everyone. The reception will be held in each of our individual houses, alone.","Don’t start chasing applause and acclaim. That way lies madness.","Under my tutelage, you will grow from boys to men. From men into gladiators. And from gladiators into Swansons.","I will leave my children $50 a piece. Enough for the cab ride home from the funeral and a steak dinner. End of discussion.","An hour ago a giant fireball consumed my entire face and it was far preferable to spending another second with you.","My only official recommendations are US Army-issued mustache trimmers, Morton's Salt, and the C.R. Lawrence Fein two inch axe-style scraper oscillating knife blade.","First rule. No conversation lasts longer than 100 total words.","I'm a simple man. I like pretty, dark-haired women, and breakfast food.","There is only one bad word: taxes.","Barbecues should be about one thing: good shared meat.","My first ex-wife’s name is Tammy. My second ex-wife’s name is Tammy. My Mom’s name is Tamara…she goes by Tammy.","The government is a greedy piglet that suckles on a taxpayer's teat until they have sore, chapped nipples.","History began July 4th, 1776. Anything before that was a mistake.","I don't want to paint with a broad brush here, but every single contractor in the world is a miserable, incompetent thief.","Dear frozen yogurt, you are the celery of desserts. Be ice cream or be nothing. Zero stars.","Never half-ass two things. Whole-ass one thing.","Children are terrible artists and artists are crooks.","Give 100%. 110% is impossible. Only idiots recommend that."];

//fetch Quotes

// async function fetchQuoteList() {
//   // Fetch a random quote from the API
//   // const response = await fetch("https://api.quotable.io/quotes?tags=inspirational&limit=75");
//   const response = await fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes/75");
//   const data = await response.json();
//   if (response.ok) {
//     // Update array
//     // test ronSwanson quotes 
//     console.log(ronSwansonQuotes[0]);
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
// generate meme
function generateMeme() {
  document.querySelector('section').appendChild(text);
  var label = document.querySelector('section > p');
  while (label.hasChildNodes()) {
    label.removeChild(label.firstChild);
  };
  let randomInt = Math.floor(Math.random() * memeListLength);
  randomMeme = memeList[0].data.memes[randomInt];
  let randomIntQuote = Math.floor(Math.random() * ronSwansonQuotes.length);
  randomQuote = ronSwansonQuotes[randomIntQuote];
  console.log("a meme!");
  console.log(ronSwansonQuotes[5]);
  console.log(randomMeme.name);
  console.log(randomQuote);
  img.src = randomMeme.url;
  var textNode = document.createTextNode(randomQuote);
  text.appendChild(textNode);
  document.querySelector('section').appendChild(img);
}

//memebutton
memeButton.addEventListener("click", generateMeme);
