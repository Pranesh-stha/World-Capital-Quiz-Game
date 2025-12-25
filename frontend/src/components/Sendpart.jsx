import React from "react";
import axios from "axios";
import { celebrateSideCannons } from "./utls/celebrate.js";

function Sendpart({ endGame, submit, setScore, newCountry, resultScore }) {
  const [answer, setAnswer] = React.useState("");
  const [vic, setVic] = React.useState(0);

  function handleChange(event) {
    setAnswer(event.target.value);
  }

  async function handleSubmit() {
    const response = await axios.post("http://localhost:5000/submit", {
      answer,
    });
    if (response.data.correct === true) {
      setScore(response.data.score);
      setVic(response.data.score);
      resultScore(response.data.score);
      submit();
      setAnswer("");
    } else {
      if (vic >= 5) {
        celebrateSideCannons();
        setVic(0);
      }
      endGame();
      
    }
  }

  function enterKey(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit();
    }
  }

  async function handlePlayAgain() {
    const response = await axios.post("http://localhost:5000/reset");
    newCountry();
    setScore(response.data.score);
  }

  return (
    <div>
      <div className="input-wrapper">
        <input
          type="text"
          className="answer-input"
          placeholder="Enter the capital city"
          autoComplete="off"
          value={answer}
          onChange={handleChange}
          onKeyDown={enterKey}
        />
        <span className="input-icon" role="img" aria-label="globe">
          🌍
        </span>
      </div>

      <div className="button-group">
        <button
          className="btn btn-submit"
          id="submitBtn"
          onClick={handleSubmit}
        >
          Submit Answer
        </button>
        <button className="btn btn-restart" id="restartBtn" onClick={handlePlayAgain}>
          Restart Game
        </button>
      </div>
    </div>
  );
}

export default Sendpart;
