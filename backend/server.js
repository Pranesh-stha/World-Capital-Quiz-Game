import express from 'express';
import cors from 'cors';
import pg from 'pg';
import dotenv from "dotenv";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

db.connect();

let quiz = [
  { country: "Seychelles", capital: "Victoria" },
  { country: "France", capital: "Paris" },
  { country: "Japan", capital: "Tokyo" },
];

db.query("SELECT * FROM capitals", (err,res)=>{
  if (err){
    console.log("Error Executing Message", err.stack);
  } else{
    quiz = res.rows
  }

  db.end();
})

let activeCountry = {};
let score = 0;

app.get('/countries', (req, res) => {
  const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];
  activeCountry = randomCountry;
  res.json(randomCountry);
})

app.post("/reset", (req, res) => {
  score = 0;
  activeCountry = {};
  res.json({ ok: true, score: score });
});

app.post('/submit', (req, res) => {
  const { answer } = req.body;
  if (answer.toLowerCase() === activeCountry.capital.toLowerCase()) {
    score ++;
    res.json({ correct: true, score: score });
    
  } else {
    res.json({ correct: false, correctAnswer: activeCountry.capital });
    score = 0;
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});