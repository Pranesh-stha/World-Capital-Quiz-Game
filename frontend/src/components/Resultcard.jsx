import React from "react";
import axios from "axios";

function Resultcard({ startGame }) {
  async function handlePlayAgain() {
    await axios.post("http://localhost:5000/reset");
    startGame();
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
          <span className="final-score-value">8</span>
          <span className="final-score-total">/ 10</span>
        </div>
        <p className="score-percentage">80% Correct</p>
      </div>

      <div className="game-over-message">
        <p>
          Great job! You're a geography expert!{" "}
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
