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

  const handleClick = (id) => {
    let index = getItemIndex(cards, id)
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
    


    cards.forEach((card) => {
      if(card.id === id && card.clicked === false) {
        console.log("NOT CLICKED");
        // Pass separate CLICKED variable to Card via CardHolder
        // setCards(cards)

        let cardsCopy = [...cards]
        cardsCopy[index].clicked = true
        setCards(cardsCopy)
        
        incrementScore()
      }
      else if (card.id === id && card.clicked === true) {
        console.log("CLICKED");
        incrementHighScore()
        // set all object clicked to false!
        cards.forEach((card, idx) => { //Only setting indidual object to false
          let newCards = [...cards]
          newCards[idx].clicked = false
          setCards(newCards)
        })
      }
    })

    // setCards(ShuffleDeck(cards))
  }

  return (
    <div className="App">
      <ScoreBoard score={score} highScore={highScore} />
      <CardHolder cards={cards} handleClick={handleClick} />
    </div>
  );
}

export default App;
