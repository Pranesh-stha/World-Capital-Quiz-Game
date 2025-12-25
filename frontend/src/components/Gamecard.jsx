import React from "react";
import Sendpart from "./Sendpart";
import axios from "axios";

function Gamecard( {endGame, setFinalScore} ) {

  const [countryData, setCountryData] = React.useState({});
  const [score, setScore] = React.useState(0);

  async function getCountries(){
    try{
      const response = await axios.get("http://localhost:5000/countries");
      setCountryData(response.data);
    }catch(error){
      console.error("Error fetching country data:", error);
    }
  }

  React.useEffect(() => {
    getCountries();
  }, []);

  return(
    <div className="quiz-card active">
        <div className="header">
          <div className="score-badge">
            <span className="score-label">Score</span>
            <span className="score-value">{score}</span>
          </div>
          <h1 className="quiz-title">Capital Cities</h1>
        </div>

        <div className="question-section">
          <h2 className="country-name">{countryData.country}</h2>
          <p className="question-text">What is the capital?</p>
        </div>

        <Sendpart endGame ={endGame} submit={getCountries} setScore={setScore} newCountry={getCountries} resultScore={setFinalScore}/>
      </div>
  )
}

export default Gamecard;