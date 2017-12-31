

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
var flipCard = function(){
	 cardId = this.getAttribute('data-id');
console.log("User flipped " + cards[cardId].rank);

// Create a variable cardTwo to represent the second card the user flipped

// Add card to array of cards that are in play

// Use console.log() to display the card that the user flipped


cardsInPlay.push(cards[cardId].rank);
console.log(cards[cardId].cardImage)

  
  console.log(cards[cardId].suit)

// Check to see if two cards have been played
this.setAttribute('src', cards[cardId].cardImage);
if (cardsInPlay.length === 2) {

  // Check to see if two cards match and provide feedback to user
    checkForMatch();

  
}
};



var createBoard = function(){
	for (var i = 0; i < cards.length; i++) {
 var cardElement = document.createElement('img');
cardElement.setAttribute('src', 'images/back.png');
cardElement.setAttribute('data-id', i);

cardElement.addEventListener('click',flipCard);
 document.getElementById('game-board').appendChild(cardElement);
}
}


createBoard();


