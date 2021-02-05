import { useState, useEffect } from "react";
import newDeck, { shuffleDeck, drawThreeCards }  from "./components/Deck"
import Header from "./components/Header"
import CardHolder from "./components/CardHolder"
import './App.css'

export default function App() {
  const [deck, setDeck] = useState([]) // Used to hold a newly created deck
  const [currentHand, setCurrentHand] = useState([]) // Holds current 3 cards to display
  const [message, setMessage] = useState("Starting game") // Holds messages for the header score board
  const [score, setScore] = useState(0) // Game score so far
  const [highScore, setHighScore] = useState(0) // Highest score acheived 
  
  // Creates new deck, and sets state with it on mount
  useEffect(() => { setDeckAndHand(newDeck()) }, []) 

  const incrementScore = () => { setScore(score + 1) }

  const resetScore = () => { setScore(0) }

  const incrementHighScore = () => { if (score > highScore) setHighScore(score) }

  // Takes deck of cards as parameter, shuffles it, and draws 3 cards from it to set state
  const setDeckAndHand = (deck) => {
    const shuffledDeck = shuffleDeck(deck)
    setDeck(shuffledDeck)
    setCurrentHand(drawThreeCards(shuffledDeck))
  }

  // Handles card clicks
  const handleClick = (card) => {
    if(card.clicked === false) { 
      incrementScore() 
      setMessage("Good choice")
      setDeck([...deck, card.clicked = true]) // Sets particular card object's "clicked" member to true.
      setDeckAndHand(deck) // Reshuffle same deck and draw 3 cards
    }
    else if (card.clicked === true) {
      incrementHighScore()
      resetScore()
      setMessage("Duplicate choice")
      setDeckAndHand(newDeck()) // Reshuffle new deck and draw 3 cards
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
