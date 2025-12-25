import React from "react";
import axios from "axios";

function Resultcard({ startGame, score, setScore }) {
  
  async function handlePlayAgain() {
    await axios.post("http://localhost:5000/reset");
    startGame();
    setScore(0);
  }
  return (
    <div className="game-over-card active" id="gameOverCard">
      <div className="game-over-header">
        <h1 className="game-over-title" role="img" aria-label="success">
          Quiz Complete! <span role="img" aria-label="success">🎉</span>
        </h1>
      </div>

      <div className="final-score-section">
        <p className="final-score-label">Your Final Score</p>
        <div className="final-score-display">
          <span className="final-score-value">{score}</span>
          
        </div>
        
      </div>

      <div className="game-over-message">
        <p>
          {score > 7 ? "Great job! You're a geography expert!" : "Not so good at geography try again"}{" "}
          <span role="img" aria-label="globe">
            🌎
          </span>
        </p>
      </div>

      <div className="game-over-button-group">
        <button
          className="btn btn-restart-final"
          id="playAgainBtn"
          onClick={handlePlayAgain}
        >
          Play Again
        </button>
      </div>
    </div>
  );
}

export default Resultcard;
