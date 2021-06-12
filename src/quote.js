const quotes = [
  {
    quote:
      "Walking isn't a lost art: one must, by some means, get to the garage.",
    auther: "Evan Esar",
  },
  {
    quote:
      "The revolution is not an apple that falls when it is ripe. You have to make it fall.",
    auther: 'Ernesto "Che" Guevara',
  },
  {
    quote: "Sincerity is the way of Heaven.",
    auther: "Mencius",
  },
  {
    quote:
      "A good plan, violently executed now, is better than a perfect plan next week.",
    auther: "George S. Patton",
  },
  {
    quote:
      "Laziness is nothing more than the habit of resting before you get tired.",
    auther: "Jules Renard",
  },
  {
    quote: "Ambition is a poor excuse for not having sense enough to be lazy.",
    auther: "Edgar Bergen",
  },
  {
    quote:
      "When we are planning for posterity, we ought to remember that virtue is not hereditary.",
    auther: "Thomas Paine",
  },
  {
    quote:
      "What saves a man is to take a step. Then another step. It is always the same step, but you have to take it.",
    auther: "Antoine de Saint-Exupery",
  },
  {
    quote: "Zeus does not bring all men's plans to fulfillment.",
    auther: "Homer",
  },
  {
    quote:
      "A little sincerity is a dangerous thing, and a great deal of it is absolutely fatal.",
    auther: "Oscar Wilde",
  },
  {
    quote:
      "If I only had an hour to chop down a tree, I would spend the first 45 minutes sharpening my axe.",
    auther: "Abraham Lincoln",
  },
  {
    quote:
      "Quality is never an accident; it is always the result of intelligent effort.",
    auther: "John Ruskin",
  },
  {
    quote:
      "Failure is not the only punishment for laziness; there is also the success of others.",
    auther: "Jules Renard",
  },
  {
    quote:
      "Just because something doesn't do what you planned it to do doesn't mean it's useless.",
    auther: "Thomas A. Edison",
  },
  {
    quote:
      "Our greatest glory is not in never falling, but in rising every time we fall.",
    auther: "Confucius",
  },
  {
    quote:
      "Appetite, with an opinion of attaining, is called hope; the same, without such opinion, despair.",
    auther: "Thomas Hobbes",
  },
];

const quoteText = document.querySelector(
    "footer .footer-quoteBox .footer-quoteBox_qoute"
  ),
  autherText = document.querySelector(
    "footer .footer-quoteBox .footer-quoteBox_autherBox .footer-quoteBox_auther"
  );

function loadQuote() {
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteText.innerText = todaysQuote.quote;
  autherText.innerText = todaysQuote.auther;
}

function init() {
  loadQuote();
}
init();
