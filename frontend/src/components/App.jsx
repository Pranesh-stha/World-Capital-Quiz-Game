import React from "react";
import Gamecard from "./Gamecard.jsx";
import Resultcard from "./Resultcard.jsx";

function App() {
  const [gameState, setGameState] = React.useState(true);
  const [finalScore, setFinalScore] = React.useState(0)

  function toggleGameState() {
    setGameState(!gameState);
  }

  return (
    <div className="container">
      

      {gameState ? (
        <Gamecard endGame={toggleGameState} setFinalScore={setFinalScore}/>
      ) : (
        <Resultcard startGame={toggleGameState} score={finalScore} setScore={setFinalScore}/>
      )}
    </div>
  );
}

export default App;
