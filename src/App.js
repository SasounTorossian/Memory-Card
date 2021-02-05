import { useState, useEffect } from "react";
import newDeck, { shuffleDeck, drawThreeCards }  from "./components/Deck"
import Header from "./components/Header"
import CardHolder from "./components/CardHolder"
import './App.css'

export default function App() {
  const [deck, setDeck] = useState([])
  const [currentHand, setCurrentHand] = useState([])
  const [message, setMessage] = useState("Starting game")
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  
  useEffect(() => { setDeckAndHand(newDeck()) }, [])

  const incrementScore = () => { setScore(score + 1) }

  const resetScore = () => { setScore(0) }

  const incrementHighScore = () => { if (score > highScore) setHighScore(score) }

  const setDeckAndHand = (deck) => {
    const shuffledDeck = shuffleDeck(deck)
    setDeck(shuffledDeck)
    setCurrentHand(drawThreeCards(shuffledDeck))
  }

  const handleClick = (card) => {
    if(card.clicked === false) {
      incrementScore() 
      setMessage("Good choice")
      setDeck([...deck, card.clicked = true])
      setDeckAndHand(deck)
    }
    else if (card.clicked === true) {
      incrementHighScore()
      resetScore()
      setMessage("Duplicate choice")
      setDeckAndHand(newDeck())
    }
  }

  return (
    <div className="App">
      <div className="header">
        <Header score={score} highScore={highScore} message={message}/>
      </div>
      <div className="main">
        <CardHolder deck={currentHand} handleClick={handleClick} />
      </div>
    </div>
  );
}
