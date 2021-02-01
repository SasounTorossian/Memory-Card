// Create array of objecs to serve as deck.
export default function newDeck() {
    let id = 0
    const cards = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
        .reduce((acc, text) => {
            acc.push({
                id: id++,
                text: text,
                clicked: false
            })
            return acc
        }, [])

    return cards
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
