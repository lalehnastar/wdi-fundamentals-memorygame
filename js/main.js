

var cards = ['queen', 'queen', 'king', 'king'];

// Create an array to store the cards in play
var cardsInPlay = [];

// Create a variable cardOne to represent the first card the user flipped
var cardOne = cards[0];
// Add card to array of cards that are in play
cardsInPlay.push(cardOne);
// Use console.log() to display the card that the user flipped
console.log("User flipped " + cardOne);

// Create a variable cardTwo to represent the second card the user flipped
var cardTwo = cards[2];
// Add card to array of cards that are in play
cardsInPlay.push(cardTwo);
// Use console.log() to display the card that the user flipped
console.log("User flipped " + cardTwo);


// Check to see if two cards have been played
if (cardsInPlay.length === 2) {

  // Check to see if two cards match and provide feedback to user
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
}