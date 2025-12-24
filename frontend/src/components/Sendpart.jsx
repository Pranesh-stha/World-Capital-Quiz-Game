import React from "react";

function Sendpart({ endGame }) {
  return(
    <div>
      <div className="input-wrapper">
          <input
            type="text"
            className="answer-input"
            placeholder="Enter the capital city"
            autoComplete="off"
          />
          <span className="input-icon">🌍</span>
        </div>

        <div className="button-group">
          <button className="btn btn-submit" id="submitBtn" onClick={endGame}>
            Submit Answer
          </button>
          <button className="btn btn-restart" id="restartBtn">
            Restart Game
          </button>
        </div>
    </div>
  )
}

export default Sendpart;