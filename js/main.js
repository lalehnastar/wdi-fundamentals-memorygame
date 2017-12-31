

var cards = [
{
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png'
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png'
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png'
  },
  {
    rank: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png'
  }






];


var cardsInPlay = [];













var checkForMatch = function () {
  // Check to see if two cards match and provide feedback to user
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
};
var flipCard = function(cardId){
console.log("User flipped " + cards[cardId].rank);

// Create a variable cardTwo to represent the second card the user flipped

// Add card to array of cards that are in play

// Use console.log() to display the card that the user flipped


cardsInPlay.push(cards[cardId].rank);
console.log(cards[cardId].cardImage)

  
  console.log(cards[cardId].suit)

// Check to see if two cards have been played
if (cardsInPlay.length === 2) {

  // Check to see if two cards match and provide feedback to user
    checkForMatch();

  
}
};






flipCard(0);
flipCard(2);