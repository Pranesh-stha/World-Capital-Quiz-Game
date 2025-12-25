import React from "react";
import Gamecard from "./Gamecard.jsx";
import Resultcard from "./Resultcard.jsx";
import PixelBlast from "./PixelBlast.jsx";

function App() {
  const [gameState, setGameState] = React.useState(true);
  const [finalScore, setFinalScore] = React.useState(0)

  function toggleGameState() {
    setGameState(!gameState);
  }

  return (
    <div className="app-shell">
       <PixelBlast
        variant="square"
        pixelSize={4}
        color="#ffffffff"
        patternScale={3.75}
        patternDensity={1.2}
        pixelSizeJitter={0}
        enableRipples
        rippleSpeed={0.4}
        rippleThickness={0.12}
        rippleIntensityScale={1.5}
        speed={0.6}
        edgeFade={0.1}
        transparent
      />


    <div className="container">
      

      {gameState ? (
        <Gamecard endGame={toggleGameState} setFinalScore={setFinalScore}/>
      ) : (
        <Resultcard startGame={toggleGameState} score={finalScore} setScore={setFinalScore}/>
      )}
    </div>

     </div>
  );
}

export default App;
