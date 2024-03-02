const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// Show Loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}
// hide loading
function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

function newQuote() {
  loading();
  const quote = localQuotes [Math.floor(Math.random() * localQuotes.length)];
  if (quote.text.length > 120) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
  }

  authorText.textContent = quote.author;
  quoteText.textContent = quote.text;
  complete();
}

function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textConent} - ${authorText.textContent}`;
  window.open(twitterUrl, '_blank');
}

// Event listeneres
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

newQuote();
