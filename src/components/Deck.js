export default function NewDeck() {
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

export function ShuffleDeck(cards) {
    var currentIndex = cards.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = cards[currentIndex];
      cards[currentIndex] = cards[randomIndex];
      cards[randomIndex] = temporaryValue;
    }
  
    return cards;
}

// Difficulty mode to draw more or less cards.
// Draws top 3 cards from deck
export function DrawThreeCards(cards) {
    let drawnHand = []
    for(let i=0; i<3; i++) {
        drawnHand.push(cards[i])
    }
    return drawnHand
}
