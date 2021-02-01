import { useState, useEffect } from "react";
import NewDeck, { ShuffleDeck }  from "./components/Deck"
import ScoreBoard from "./components/ScoreBoard"
import CardHolder from "./components/CardHolder"

function App() {
  const [cards, setCards] = useState([])
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  
  useEffect(() => {
    setCards(ShuffleDeck(NewDeck()))
  }, [])

  // useEffect(() => {
  //   setCards(ShuffleDeck(cards))
  // }, [score])

  const incrementScore = () => {
    setScore(score + 1)
  }

  const incrementHighScore = () => {
    if (score > highScore) setHighScore(score)
    setScore(0)
  }

  const getItemIndex = (cards, id) => {
    return cards.findIndex((card) => card.id === id);
  };

  const getIndexFromCard = (card) => {
    return cards.findIndex((deckCard) => deckCard.id === card.id);
  };

  // TODO: Get card instead of ID. How to update cards based on that. Need index.
  const handleClick = (id) => {
    let index = getItemIndex(cards, id) // TODO: Could pass card
    console.log(id)
    console.log(index)

    // if(card.clicked === false) {
    //   console.log("NOT CLICKED");
    //   // Pass separate CLICKED variable to Card via CardHolder
    //   // setCards(cards)
    //   // let new 



    //   card.clicked = true
    //   incrementScore()
    // }
    // else if (card.clicked === true) {
    //   console.log("CLICKED");
    //   incrementHighScore()

    //   // set all object clicked to false!
    //   // cards.forEach((card) => {
    //   //   setCards({...cards, card: {clicked: false}})
    //   // })
    // }

    // TODO: More efficient way to handle cards
    // TODO: useEffects for card shuffling?
    // TODO: Shuffle same vs shuffle new deck with all cards set to false.
    // TODO: Get from small batch - (3 from pool of many (New func => DrawThreeCards())) -> Reshuffle if not clicked, new deck if clicked.
    // TODO: OR just shuffle all cards and take first 3.

    cards.forEach((card) => {
      if(card.id === id && card.clicked === false) {
        console.log("NOT CLICKED");

        let cardsCopy = [...cards]
        cardsCopy[index].clicked = true
        setCards(cardsCopy)
        
        incrementScore() // TODO: useEffect on [score] to run above code. How will useEffect know what card to modify?
                        // have Current Card state to work with. Use getIndexFromCard() to modify.
      }
      else if (card.id === id && card.clicked === true) {
        console.log("CLICKED");
        incrementHighScore() // TODO: useEffect on [highScore] to run below code. OR shuffle.
        // set all object clicked to false!
        // TODO: Does using setState(newDeck()) produce a new deck for use in click handler?
        cards.forEach((card, idx) => { //Only setting individual object to false
          let newCards = [...cards]
          newCards[idx].clicked = false
          setCards(newCards)
        })
      }
    })

    // setCards(ShuffleDeck(cards))
  }

  // TODO: Material-UI for header and Cards.
  // TODO: Theme and styles.
  return (
    <div className="App">
      <ScoreBoard score={score} highScore={highScore} />
      <CardHolder cards={cards} handleClick={handleClick} />
    </div>
  );
}

export default App;
