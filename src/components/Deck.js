import tiger from "../images/tiger.jpg"
import bear from "../images/bear.jpg"
import elephant from "../images/elephant.jpg"
import crocodile from "../images/crocodile.jpg"
import giraffe from "../images/giraffe.jpg"
import whale from "../images/whale.jpg"
import shrimp from "../images/shrimp.jpg"
import fox from "../images/fox.jpg"

// Create array of objecs to serve as deck.
export default function newDeck() {
    let deck = [
        {
            id: 0,
            image: tiger,
            title: "Siberian Tiger",
            body: "Tigers are badass",
            learnMoreLink: "",
            clicked: false
        },
        {
            id: 1,
            image: bear,
            title: "Brown Bear",
            body: "Bears are badass",
            learnMoreLink: "",
            clicked: false
        },
        {
            id: 2,
            image: elephant,
            title: "African Elephant",
            body: "Elephants are badass",
            learnMoreLink: "",
            clicked: false
        },
        {
            id: 3,
            image: crocodile,
            title: "Saltwater Crocodile",
            body: "Crocodiles are badass",
            learnMoreLink: "",
            clicked: false
        },
        {
            id: 4,
            image: giraffe,
            title: "Giraffe",
            body: "Giraffes are badass",
            learnMoreLink: "",
            clicked: false
        },
        {
            id: 5,
            image: whale,
            title: "Blue Whale",
            body: "Whales are badass",
            learnMoreLink: "",
            clicked: false
        },
        {
            id: 6,
            image: shrimp,
            title: "Mantis Shrimp",
            body: "Shrimp are badass",
            learnMoreLink: "",
            clicked: false
        },
        {
            id: 7,
            image: fox,
            title: "Red Fox",
            body: "Foxs are badass",
            learnMoreLink: "",
            clicked: false
        },
    ]

    return deck
}

// Shuffles deck using Fisher–Yates algorithm
export function shuffleDeck(deck) {
    var currentIndex = deck.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = deck[currentIndex];
      deck[currentIndex] = deck[randomIndex];
      deck[randomIndex] = temporaryValue;
    }
  
    return deck;
}

// Draws first 3 cards from deck
export function drawThreeCards(deck) { return deck.slice(0, 3) }
