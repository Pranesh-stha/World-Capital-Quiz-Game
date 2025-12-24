import React from "react";
import Sendpart from "./Sendpart";

function Gamecard( {endGame} ) {
  return(
    <div className="quiz-card active">
        <div className="header">
          <div className="score-badge">
            <span className="score-label">Score</span>
            <span className="score-value">0</span>
          </div>
          <h1 className="quiz-title">Capital Cities</h1>
        </div>

        <div className="question-section">
          <h2 className="country-name">Seychelles</h2>
          <p className="question-text">What is the capital?</p>
        </div>

        <Sendpart endGame ={endGame}/>
      </div>
  )
}

export default Gamecard;