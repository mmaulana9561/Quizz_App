import React from 'react';

function Question({ data, handleAnswer }) {
  const { question, correct_answer, incorrect_answers } = data;


  const answers = [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5);

  return (
    <div>
      <h3>{question}</h3>
      {answers.map((answer, idx) => (
        <button 
          key={idx} 
          onClick={() => handleAnswer(answer === correct_answer)}
        >
          {answer}
        </button>
      ))}
    </div>
  );
}

export default Question;
