import React, { useEffect, useState } from 'react';
import { fetchQuestions } from '../api';
import Question from './Question';
import Result from './Result';

function Quiz() {
  const [questions, setQuestions] = useState([]); 
  const [currentQuestion, setCurrentQuestion] = useState(0); 
  const [score, setScore] = useState(0); // Skor
  const [timer, setTimer] = useState(60); // Timer
  const [quizOver, setQuizOver] = useState(false);

  
  useEffect(() => {
    fetchQuestions().then(data => {
      console.log('Questions fetched:', data); 
      setQuestions(data);
    }).catch(error => {
      console.error('Error fetching questions:', error); 
    });
  }, []);

  // Timer untuk kuis
  useEffect(() => {
    if (timer === 0) {
      setQuizOver(true); 
    } else if (!quizOver) {
      const interval = setInterval(() => setTimer(timer - 1), 1000); 
      return () => clearInterval(interval); 
    }
  }, [timer, quizOver]);

 
  const handleAnswer = (correct) => {
    if (correct) setScore(score + 1); 
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion); 
    } else {
      setQuizOver(true); 
    }
  };

 
  if (quizOver) return <Result score={score} total={questions.length} />;

  return (
    <div>
      <h2>Quiz</h2>
      {questions.length > 0 ? (
        <>
          <Question 
            data={questions[currentQuestion]} 
            handleAnswer={handleAnswer} 
          />
          <p>Time remaining: {timer} seconds</p>
          <p>{currentQuestion + 1}/{questions.length}</p>
        </>
      ) : (
        <p>Loading questions...</p> 
      )}
    </div>
  );
}

export default Quiz;
