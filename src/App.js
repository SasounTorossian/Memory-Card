import { useState, useEffect } from "react";
import NewDeck, { ShuffleDeck }  from "./components/Deck"
import ScoreBoard from "./components/ScoreBoard"
import Board from "./components/Board"

function App() {
  const [cards, setCards] = useState([])
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)

  useEffect(() => {
    setCards(ShuffleDeck(NewDeck()))
  }, [])

  const handleClick = (id) => {
    console.log(id)

    // if(clicked) {
    //   if (score > highScore) {
    //     setHighScore(score)
    //     setScore(0)
    //   }
    //   //reshuffle
    // }
    // else {
    //   clicked = true
    //   //reshuffle
    // }
  }

  return (
    <div className="App">
      <ScoreBoard score={score} highScore={highScore} />
      <Board cards={cards} handleClick={handleClick} />
    </div>
  );
}

export default App;
