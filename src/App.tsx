import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard";
const TOTAL_QUESTIONS = 10;
const App = () => {
  const [loadind, setLoading] = useState(false);
  const [questions, setQuestions] = useState([false]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameover, setGameOver] = useState(true);

  const startQuiz = async () => {};

  const chexkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};
  return (
    <div>
      <h1>React Quiz By Gopal</h1>
      <button className="start" onClick={startQuiz}></button>
      <p className="score">Score:</p>
      <p className="score">Loading Questions ...</p>
      <QuestionCard
        questionNum={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number]:undefined}
        callback={checkAnswer}
      />
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default App;
