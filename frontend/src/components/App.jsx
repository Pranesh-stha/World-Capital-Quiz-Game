import React from "react";
import Gamecard from "./Gamecard.jsx";
import Resultcard from "./Resultcard.jsx";

function App() {
  const [gameState, setGameState] = React.useState(true);

  function toggleGameState() {
    setGameState(!gameState);
  }

  return (
    <div className="container">

      {gameState ? (
        <Gamecard endGame={toggleGameState} />
      ) : (
        <Resultcard startGame={toggleGameState} />
      )}
    </div>
  );
}

export default App;
