console.log("POKER PART START")


//kort
class Card {
  constructor(suit, number) {
        
    this.suit = suit;
    this.number = number;
  }
}
  
//tomt kortlek
class Deck {
  constructor() {
    this.cards = [];
    const suits = ["hearts", "diamonds", "clubs", "spades"];
    const numbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    //skapar kort och pushar in i kortleken
    for (let suit of suits) {
      for (let number of numbers) {
        this.cards.push(new Card(suit, number));
      }
    }
    }

    //blandar kortleken.
    shuffle() {
      for (let i = this.cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
    }

    draw() {
      return this.cards.shift();
    }
}

//ny spelare class
class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
    this.number = 0;
    }

  //drar kort till spelaren
  newCards(deck, numCards) {
    for (let i = 0; i < numCards; i++) {
      let card = deck.draw();
      this.hand.push(card);
      this.number += parseInt(card.number) || 10;
    }
  }

  //drar av kort från spelaren
  removeCards(numCards) {
    for (let i = 0; i < numCards; i++) {
      let discardedCard = this.hand.shift();    
      console.log(`${this.name} discarded ${discardedCard.number} of ${discardedCard.suit}`);
      this.number -= parseInt(discardedCard.number) || 10;
    }
  }
}
  
const deck = new Deck();
console.log("New unshuffled deck: ", deck.cards);
deck.shuffle();
console.log("Shuffled deck: ", deck.cards);
  
const mario = new Player("Mario");
const godzilla = new Player("Godzilla");

console.log("Players: ", mario, godzilla);
  
mario.newCards(deck, 5);
godzilla.newCards(deck, 5);
console.log("Cards left: ", deck.cards);
console.log("Players: ", mario, godzilla);
  
mario.removeCards(2);
godzilla.removeCards(2);
console.log("Cards left: ", deck.cards);
console.log("Players: ", mario, godzilla);
  
mario.newCards(deck, 2);
godzilla.newCards(deck, 2);
console.log("Cards left: ", deck.cards);
console.log("Players: ", mario, godzilla);
  

class Game {
  constructor(deck, players) {
    this.deck = deck;
    this.players = players;
    this.discardPile = [];
  }


  reset() {
    for (let player of this.players) {
      this.deck.cards.push(...player.hand);
      player.hand = [];
    }
    while (this.discardPile.length > 0) {
      this.deck.cards.push(this.discardPile.pop());
    }
    this.deck.shuffle();
    console.log("New shuffled deck:");
    console.log(this.deck.cards);
    console.log("Players and discard pile have no cards.");
  }
 
}

const newGame = new Game(deck, [mario, godzilla]);
newGame.reset();
  
function resetGame() {
  newGame.reset();
}

console.log("POKER PART END")
