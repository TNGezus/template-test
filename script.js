const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const localQuotes = [
{
text: ' May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.',
author: 'Paul', 
},
{
text: ' For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.',
author: 'Paul', 
},
{
text: 'The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
author: 'Jeremiah', 
},
{
text: ' So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen.',
author: 'Paul', 
},
{
text: 'What, then, shall we say in response to these things? If God is for us, who can be against us?',
author: 'Paul', 
},
{
text: 'Be strong and courageous. Do not be afraid or terrified because of them, for the Lord your God goes with you; he will never leave you nor forsake you.',
author: 'Moses', 
},
{
text: 'The Lord is my light and my salvation; whom shall I fear? The Lord is the stronghold of my life; of whom shall I be afraid?',
author: 'King David', 
},
{
text: 'There is no fear in love. But perfect love drives out fear, because fear has to do with punishment. The one who fears is not made perfect in love.',
author: 'John', 
},
{
text: ' Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand.',
author: 'God', 
},
{
text: 'But they who wait for the Lord shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint.',
author: 'Isaiah', 
},
{
text: 'Greater love has no one than this: to lay down ones life for ones friends.',
author: 'John', 
},
{
text: 'Jesus looked at them and said, -With man it is impossible, but not with God. For all things are possible with God.-',
author: 'Mark', 
},
{
text: ' I can do all things through him who strengthens me.',
author: 'Paul', 
},
{
text: ' Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.',
author: 'King David', 
},
{
text: 'Be watchful, stand firm in the faith, act like men, be strong. Let all that you do be done in love.',
author: 'Paul', 
},
{
text: ' Our faith can move mountains.',
author: 'Matthew', 
},
{
text: ' Taste and see that the Lord is good; blessed is the one who takes refuge in him.',
author: 'King David', 
},
{
text: ' And we know that in all things God works for the good of those who love him, who have been called according to his purpose.',
author: 'Paul', 
},
{
text: 'Cast all your anxieties on him, because he cares for you.',
author: 'Peter', 
},
{
text: ' I have told you all this so that you may have peace in me. Here on earth you will have many trials and sorrows. But take heart, because I have overcome the world.',
author: 'Jesus', 
},
{
text: 'Come to Me, all you who are weary and burdened, and I will give you rest.',
author: 'Jesus', 
},
{
text: 'A friend loves at all times, and a brother is born for a time of adversity.',
author: 'Solomon', 
},
{
text: 'but those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.',
author: 'Isaiah', 
},
{
text: 'Whoever pursues righteousness and love finds life, prosperity and honor.',
author: 'Solomon', 
},
{
text: 'When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. When you walk through the fire, you will not be burned; the flames will not set you ablaze.',
author: 'God', 
},
{
text: 'Come to me, all you who are weary and burdened, and I will give you rest.',
author: 'Jesus', 
},
{
text: 'Jesus replied, “Because you have so little faith. Truly I tell you, if you have faith as small as a mustard seed, you can say to this mountain, ‘Move from here to there,’ and it will move. Nothing will be impossible for you.”',
author: 'Matthew', 
},

{
text: 'The name of the LORD is a fortified tower; the righteous run to it and are safe.', 
author: 'Solomon',
}, 
{
text: ' May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.',
author: 'Paul', 
},
{
  text: 'The grass withers and the flowers fall, but the word of our God endures forever.',
  author: 'Isaiah',
  },

{
text: 'Therefore encourage one another and build each other up, just as in fact you are doing.',
author: 'Paul', 
},
{
text: 'I keep my eyes always on the LORD. With him at my right hand, I will not be shaken.',
author: 'Solomon', 
},
{
text: 'Even youths grow tired and weary, and young men stumble and fall but those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint. ',
author: 'Isaiah', 
},
{
text: 'Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.',
author: 'Paul', 
},
{
text: 'In the world you will have tribulation. But take heart; I have overcome the world."',
author: 'Jesus', 
},
{
text: 'I sought the LORD, and He answered me and delivered me from all my fears. Those who look to Him are radiant, and their faces shall never be ashamed. Oh, taste and see that the LORD is good! Blessed is the man who takes refuge in Him!',
author: 'King David', 
},
{
text: 'Humble yourselves, therefore, under the mighty hand of God so that at the proper time He may exalt you, casting all your anxieties on Him, because He cares for you.',
author: 'Peter', 
},
{
text: 'If my people who are called by My name humble themselves, and pray and seek My face and turn from their wicked ways, then I will hear from heaven and will forgive their sin and heal their land',
author: 'God', 
},
{
text: 'So do not worry, saying, What shall we eat? or What shall we drink? or What shall we wear? For the pagans run after all these things, and your heavenly Father knows that you need them. But seek first His kingdom and His righteousness, and all these things will be given to you as well. Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.',
author: 'Jesus', 
},
{
text: 'For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
author: 'Paul', 
},
{
text: 'And without faith it is impossible to please God, because anyone who comes to him must believe that he exists and that he rewards those who earnestly seek him.',
author: 'Paul', 
},]

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
