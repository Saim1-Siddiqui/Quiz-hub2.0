// import React from 'react'
// import './AttemptQuiz'

// function AttemptQuiz() {
//   return (
//     <div>AttemptQuiz</div>
//   )
// }

// export default AttemptQuiz







































import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AttemptQuiz.css';

const QuizForm = () => {
  const initialQuestions = [
    {
      text: 'What is Html?',
      correctAnswer: 'Hypertext Markup Language'
    },
    {
      text: 'What is Css?',
      correctAnswer: 'Causcading Style Sheet'
    },
    {
      text: 'Css Framework?',
      correctAnswer: 'Bootstap'
    },
    {
      text: 'what is a Javascript',
      correctAnswer: 'Function Language'
    },
    {
      text: 'What is the chemical symbol for gold?',
      correctAnswer: 'Au'
    },
    {
      text: 'Which country is home to the Markhor?',
      correctAnswer: 'Pakistan'
    },
    {
      text: 'What is the tallest mountain in the Pakistan?',
      correctAnswer: 'K2'
    },
    {
      text: 'What is the currency of Pakistan?',
      correctAnswer: 'Pkr'
    }
  ];

  const [userAnswers, setUserAnswers] = useState(Array(initialQuestions.length).fill(''));
  const navigate = useNavigate();

  const handleAnswerChange = (index, answer) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = answer;
    setUserAnswers(newAnswers);
  };

  const calculateResults = () => {
    const questionsWithResults = initialQuestions.map((question, index) => ({
      ...question,
      userAnswer: userAnswers[index],
      result: userAnswers[index] === question.correctAnswer ? 'Correct' : 'Incorrect'
    }));

    const correctAnswers = questionsWithResults.filter(
      q => q.result === 'Correct'
    ).length;

    return {
      totalQuestions: initialQuestions.length,
      correctAnswers,
      incorrectAnswers: initialQuestions.length - correctAnswers,
      questions: questionsWithResults
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const results = calculateResults();
    navigate('/scorecard', { state: { quizData: results } });
  };

  return (
    <div className="quiz-form-container">
      <form onSubmit={handleSubmit} className="quiz-form">
        <h2>Quiz Questions</h2>
        {initialQuestions.map((question, index) => (
          <div key={index} className="question-container">
            <label>
              {question.text}
              <input
                type="text"
                value={userAnswers[index]}
                onChange={(e) => handleAnswerChange(index, e.target.value)}
                required
              />
            </label>
          </div>
        ))}
        <button type="submit" className="submit-btn">Submit Answers</button>
      </form>
    </div>
  );
};

export default QuizForm;