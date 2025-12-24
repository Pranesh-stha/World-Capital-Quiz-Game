import React from "react";

function Resultcard( {startGame} ) {
  return (
    <div className="game-over-card active" id="gameOverCard">
      <div className="game-over-header">
        <h1 className="game-over-title">Quiz Complete! 🎉</h1>
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
        <p>Great job! You're a geography expert! 🌎</p>
      </div>

      <div className="game-over-button-group">
        <button className="btn btn-restart-final" id="playAgainBtn" onClick={startGame}>
          Play Again
        </button>
      </div>
    </div>
  );
}

export default Resultcard;
