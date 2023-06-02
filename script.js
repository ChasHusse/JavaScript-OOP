//Del 1
let cardDeck = [
    {
        suit: "hearts",
        color: "red",
        numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    },
    {
        suit: "diamonds",
        color: "red",
        numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    },
    {
        suit: "spades",
        color: "black",
        numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    },
    {
        suit: "clubs",
        color: "black",
        numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    }
];

let newCardDeck = [];
let allPlayers = [];


class Player {

    constructor(name) {
        this.name = name
        this.cards = []
        this.score = 0
        allPlayers.push(this)
    }

    fiveCards( ){
        let fiveCards = []
    
        for(let i = 0; i < 5; i++){
            let random = Math.floor(Math.random() * newCardDeck.length)
            let randomCard = newCardDeck.splice(random, 1)
            fiveCards.push(randomCard)
        }
        this.cards = fiveCards

        let showCards = []
        this.cards.forEach(element => {
            showCards.push(" " + element[0].number + " " + element[0].suit)        
        });

        console.log("This is " + this.name + "s cards:" + showCards +".")
        this.playerScore()
    }

    twoCards (){

        for(let i = 0; i < 2; i++){
            let random = Math.floor(Math.random() * newCardDeck.length)
            let randomCard = newCardDeck.splice(random, 1)

            random = Math.floor(Math.random() * this.cards.length)
            this.cards.splice(random, 1, randomCard )
        }

        let showCards = []
        this.cards.forEach(element => {
            showCards.push(" " + element[0].number + " " + element[0].suit)        
        });

        console.log("This is " + this.name + "s cards:" + showCards +".")
        this.playerScore()  
    };

    playerScore (){
        let points = 0;

        this.cards.forEach(card => {
            card.forEach(cardInfo => {
                points += cardInfo.number
            })  
        })

        this.score = points
        return this.score
    }
};

function startCardDeck () {

    cardDeck.forEach(element => {
        element.numbers.forEach(number => { newCardDeck.push({suit: element.suit, number: number}) })  
    })

    console.log("This is the new card deck:" + newCardDeck.map(card => " " + card.number + " " + card.suit))
};
startCardDeck();

function shuffleCardDeck(array) {
    for (let i = array.length - 1; i > 0; i--) { 
   
        // Generate random number 
        let random = Math.floor(Math.random() * (i + 1));
                   
        let temp = array[i];
        array[i] = array[random];
        array[random] = temp;
    }

    console.log("This is the shuffled card deck:" + newCardDeck.map(card => " " + card.number + " " + card.suit))
 };
shuffleCardDeck(newCardDeck);



let slim = new Player("Slim")
let luke = new Player("Luke")

console.log("This is our players for the night:" + allPlayers.map(player =>" " +  player.name) + "!")


slim.fiveCards()
luke.fiveCards()


console.log("This is the reamning cards in the deck:" + newCardDeck.map(card => " " + card.number + " " + card.suit))
console.log(`The total score of Slim and Luke is: ${slim.score + luke.score}` )


slim.twoCards()
luke.twoCards()

console.log(newCardDeck)
console.log("This is the reamning cards in the deck:" + newCardDeck.map(card => " " + card.number + " " + card.suit))

console.log(`The total score of Slim and Luke is: ${slim.score + luke.score}` )





