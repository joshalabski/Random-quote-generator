const quotesArray  = [{
  quotes: "\"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.\"",
  author: "~ Ralph Waldo Emerson"
},  {
  quotes: "\"You must be the change you wish to see in the world.\"",
  author: "~ Mahatma Gandhi"
}, {
  quotes: "\"The only true wisdom is in knowing you know nothing\"",
  author: "~ Socrates"
}, {
  quotes: "\"Genius is one percent inspiration and ninety-nine percent perspiration.\"",
  author: "~ EF English Live"
}, {
  quotes: "\"There is no greater agony than bearing an untold story inside you.\"",
  author: "~ Maya Angelou"
}, {
  quotes: "\"Strive not to be a success, but rather to be of value.\"",
  author: "~ Albert Einstein"
}, {
  quotes: "\"Success is not final, failure is not fatal: It is the courage to continue that counts.\"",
  author: "~ EF English Live"
}, {
  quotes: "\"It is never too late to be what you might have been.\"",
  author: "~ George Elliot" 
}]

const generateBtn = document.getElementById("generate-btn");
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("quote-auth");
const heartBtn = document.querySelector(".heart-btn");
const copyBtn = document.querySelector(".copy-btn");
const quoteContainer = document.querySelector(".quote-container");
const iconContainer = document.getElementById("icon-contains");

let currentQuotesIndex = -1;

function randomQuote() {
let random;

  random = Math.floor(Math.
    random() *quotesArray.length);

  while(random === currentQuotesIndex){
    random = Math.floor(Math.random () *quotesArray.length);
  }

 currentQuotesIndex = random;

 const currentQuote = quotesArray[random];

 quoteText.textContent = currentQuote.quotes;
 quoteAuthor.textContent = currentQuote.author;

}

//event listeners
iconContainer.addEventListener("click", function(e) {
  if(e.target.classList.contains("heart-btn")){
    if(e.target.classList.contains("far")){
    e.target.classList.remove("far");
    e.target.classList.add("fas");
  } else{
    e.target.classList.remove("fas");
    e.target.classList.add("far");
  }

  } else if(e.target.classList.contains("copy-btn")){
    const quoText = `${quoteText.textContent}`;
    const quoAuth = `${quoteAuthor.textContent}`;

    const bothText = `${quoText} ${quoAuth}`

    navigator.clipboard.writeText(bothText).then(() => showCopySuccess(e.target));
  }
  
});

function showCopySuccess(element) {
  element.classList.remove("far", "fa-copy");
  element.classList.add("fas", "fa-check");

  element.style.color = "#48bb78";

  setTimeout(() => {
    element.classList.remove("fas", "fa-check");
    element.classList.add("far", "fa-copy");
    element.style.color = "";
  },1500)
};

generateBtn.addEventListener("click", randomQuote);

