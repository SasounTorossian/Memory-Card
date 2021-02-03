import { useState, useEffect } from "react";
import newDeck, { shuffleDeck, drawThreeCards }  from "./components/Deck"
import Header from "./components/Header"
import CardHolder from "./components/CardHolder"
import './App.css'

export default function App() {
  const [deck, setDeck] = useState([])
  const [currentHand, setCurrentHand] = useState([])
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  
  useEffect(() => {
    setDeckAndHand(newDeck())
  }, [])

  const incrementScore = () => { setScore(score + 1) }

  const incrementHighScore = () => {
    if (score > highScore) setHighScore(score)
    setScore(0)
  }

  const setDeckAndHand = (deck) => {
    const shuffledDeck = shuffleDeck(deck)
    setDeck(shuffledDeck)
    setCurrentHand(drawThreeCards(shuffledDeck))
  }

  const handleClick = (card) => {
    if(card.clicked === false) {
      incrementScore() 

      setDeck([...deck, card.clicked = true])

      setDeckAndHand(deck)
    }
    else if (card.clicked === true) {
      incrementHighScore()

      setDeckAndHand(newDeck())
    }
  }

  return (
    <div className="App">
      <div className="header">
        <Header score={score} highScore={highScore} />
      </div>
      <div className="main">
        {currentHand.length > 1 && <CardHolder deck={currentHand} handleClick={handleClick} />}
      </div>
    </div>
  );
}
