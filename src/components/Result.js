import React from 'react';
import { useNavigate } from 'react-router-dom';

function Result({ score, total }) {
  const navigate = useNavigate();

  const handleRestart = () => {
    localStorage.removeItem('quizData');
    navigate('/quiz');
  };

  return (
    <div>
      <h2>Result</h2>
      <p>Correct Answers: {score}</p>
      <p>Total Questions: {total}</p>
      <button onClick={handleRestart}>Restart Quiz</button>
    </div>
  );
}

export default Result;
