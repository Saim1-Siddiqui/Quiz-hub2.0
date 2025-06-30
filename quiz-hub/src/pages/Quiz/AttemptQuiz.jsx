// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import './AttemptQuiz.css';


// const AttemptQuiz = () => {
//   const quizQuestions = [
//     {
//       question: 'What is the capital of France?',
//       options: ['London', 'Paris', 'Berlin', 'Rome'],
//       correctAnswer: 'Paris'
//     },
//     {
//       question: 'What is HTML?',
//       options: ['Hypertext Markup Language', 'High-level Text Machine Language', 'Home Tool Markup Language', 'Hyperlink and Text Markup Language'],
//       correctAnswer: 'Hypertext Markup Language'
//     },
//     {
//       question: 'What is CSS?',
//       options: ['Computer Style Sheets', 'Creative Style System', 'Cascading Style Sheets', 'Colorful Style Sheets'],
//       correctAnswer: 'Cascading Style Sheets'
//     },
//     {
//       question: 'Which CSS framework is most popular?',
//       options: ['Tailwind', 'Bulma', 'Bootstrap', 'Foundation'],
//       correctAnswer: 'Bootstrap'
//     },
//     {
//       question: 'Which is Javascript Framework?',
//       options: ['Tailwind', 'React', 'Angular', 'Foundation'],
//       correctAnswer: 'React'
//     },
//     {
//       question: 'What is the capital of Pakistan?',
//       options: ['Islamabad', 'Lahore', 'Bahawalpur', 'Karachi'],
//       correctAnswer: 'Islamabad'
//     },
//     {
//       question: 'What is React.js?',
//       options: ['Function', 'App', 'Framework', 'Program'],
//       correctAnswer: 'Framework'
//     }
//   ];

//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [userAnswers, setUserAnswers] = useState(Array(quizQuestions.length).fill(null));
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [direction, setDirection] = useState('right');
//   const navigate = useNavigate();

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//     const newAnswers = [...userAnswers];
//     newAnswers[currentQuestionIndex] = option;
//     setUserAnswers(newAnswers);

//     // Auto-advance to next question after a short delay
//     setTimeout(() => {
//       if (currentQuestionIndex < quizQuestions.length - 1) {
//         setDirection('right');
//         setCurrentQuestionIndex(currentQuestionIndex + 1);
//         setSelectedOption(userAnswers[currentQuestionIndex + 1]);
//       }
//     }, 500); // 0.5 second delay before moving to next question
//   };

//   const goToNextQuestion = () => {
//     if (currentQuestionIndex < quizQuestions.length - 1) {
//       setDirection('right');
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//       setSelectedOption(userAnswers[currentQuestionIndex + 1]);
//     }
//   };

//   const goToPreviousQuestion = () => {
//     if (currentQuestionIndex > 0) {
//       setDirection('left');
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//       setSelectedOption(userAnswers[currentQuestionIndex - 1]);
//     }
//   };

//   const calculateResults = () => {
//     const questionsWithResults = quizQuestions.map((question, index) => ({
//       text: question.question,
//       correctAnswer: question.correctAnswer,
//       userAnswer: userAnswers[index],
//       result: userAnswers[index] === question.correctAnswer ? 'Correct' : 'Incorrect'
//     }));

//     const correctAnswers = questionsWithResults.filter(
//       q => q.result === 'Correct'
//     ).length;

//     return {
//       totalQuestions: quizQuestions.length,
//       correctAnswers,
//       incorrectAnswers: quizQuestions.length - correctAnswers,
//       questions: questionsWithResults
//     };
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const results = calculateResults();
//     navigate('/scorecard', { state: { quizData: results } });
//   };

//   const currentQuestion = quizQuestions[currentQuestionIndex];
//   const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;

//   return (
//     <div className="quiz-container">
//       <div className="quiz-header">
//         <h2>Quiz Board</h2>
//         <p>Complete this Quiz and Earn 10$ Dollers!</p>
//       </div>

//       <div className="quiz-progress">
//         Question {currentQuestionIndex + 1} of {quizQuestions.length}
//       </div>

//       <TransitionGroup component={null}>
//         <CSSTransition
//           key={currentQuestionIndex}
//           timeout={300}
//           classNames={direction === 'right' ? 'slide' : 'slide-back'}
//           unmountOnExit
//         >
//           <div className="question-card">
//             <h3>{currentQuestion.question}</h3>
//             <div className="options-list">
//               {currentQuestion.options.map((option, index) => (
//                 <div 
//                   key={index} 
//                   className={`option-item ${selectedOption === option ? 'selected' : ''}`}
//                   onClick={() => handleOptionSelect(option)}
//                 >
//                   <input
//                     type="radio"
//                     name="quiz-option"
//                     checked={selectedOption === option}
//                     readOnly
//                   />
//                   <span>{option}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </CSSTransition>
//       </TransitionGroup>

//       <div className="quiz-navigation">
//         <button 
//           type="button" 
//           className="nav-button prev-button"
//           onClick={goToPreviousQuestion}
//           disabled={currentQuestionIndex === 0}
//         >
//           Previous
//         </button>

//         {!isLastQuestion ? (
//           <button 
//             type="button" 
//             className="nav-button next-button"
//             onClick={goToNextQuestion}
//             disabled={!selectedOption}
//           >
//             Next
//           </button>
//         ) : (
//           <button 
//             type="button" 
//             className="nav-button submit-button"
//             onClick={handleSubmit}
//             disabled={!selectedOption}
//           >
//             Submit Quiz
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AttemptQuiz;




































import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './AttemptQuiz.css';

const AttemptQuiz = () => {
  const quizQuestions = [
    {
      question: 'What is the capital of France?',
      options: ['London', 'Paris', 'Berlin', 'Rome'],
      correctAnswer: 'Paris'
    },
    {
      question: 'What is HTML?',
      options: ['Hypertext Markup Language', 'High-level Text Machine Language', 'Home Tool Markup Language', 'Hyperlink and Text Markup Language'],
      correctAnswer: 'Hypertext Markup Language'
    },
    {
      question: 'What is CSS?',
      options: ['Computer Style Sheets', 'Creative Style System', 'Cascading Style Sheets', 'Colorful Style Sheets'],
      correctAnswer: 'Cascading Style Sheets'
    },
    {
      question: 'Which CSS framework is most popular?',
      options: ['Tailwind', 'Bulma', 'Bootstrap', 'Foundation'],
      correctAnswer: 'Bootstrap'
    },
    {
      question: 'Which is Javascript Framework?',
      options: ['Tailwind', 'React', 'Angular', 'Foundation'],
      correctAnswer: 'React'
    },
    {
      question: 'What is the capital of Pakistan?',
      options: ['Islamabad', 'Lahore', 'Bahawalpur', 'Karachi'],
      correctAnswer: 'Islamabad'
    },
    {
      question: 'What is React.js?',
      options: ['Function', 'App', 'Framework', 'Program'],
      correctAnswer: 'Framework'
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(quizQuestions.length).fill(null));
  const [selectedOption, setSelectedOption] = useState(null);
  const [direction, setDirection] = useState('right');
  const navigate = useNavigate();
  const nodeRef = useRef(null); // Added nodeRef here

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = option;
    setUserAnswers(newAnswers);

    setTimeout(() => {
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setDirection('right');
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(userAnswers[currentQuestionIndex + 1]);
      }
    }, 500);
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setDirection('right');
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(userAnswers[currentQuestionIndex + 1]);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setDirection('left');
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption(userAnswers[currentQuestionIndex - 1]);
    }
  };

  const calculateResults = () => {
    const questionsWithResults = quizQuestions.map((question, index) => ({
      text: question.question,
      correctAnswer: question.correctAnswer,
      userAnswer: userAnswers[index],
      result: userAnswers[index] === question.correctAnswer ? 'Correct' : 'Incorrect'
    }));

    const correctAnswers = questionsWithResults.filter(
      q => q.result === 'Correct'
    ).length;

    return {
      totalQuestions: quizQuestions.length,
      correctAnswers,
      incorrectAnswers: quizQuestions.length - correctAnswers,
      questions: questionsWithResults
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const results = calculateResults();
    navigate('/scorecard', { state: { quizData: results } });
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;

  return (
    <div className="Main-Container">
      <div className="quiz-container">
        <div className="quiz-header">
          <h2>Quiz Board</h2>
          <p>Complete this Quiz and Earn 10$ Dollers!</p>
        </div>

        <div className="quiz-progress">
          Question {currentQuestionIndex + 1} of {quizQuestions.length}
        </div>

        <TransitionGroup component={null}>
          <CSSTransition
            key={currentQuestionIndex}
            nodeRef={nodeRef} // Added nodeRef here
            timeout={300}
            classNames={direction === 'right' ? 'slide' : 'slide-back'}
            unmountOnExit
          >
            <div ref={nodeRef} className="question-card"> {/* Attached ref here */}
              <h3>{currentQuestion.question}</h3>
              <div className="options-list">
                {currentQuestion.options.map((option, index) => (
                  <div
                    key={index}
                    className={`option-item ${selectedOption === option ? 'selected' : ''}`}
                    onClick={() => handleOptionSelect(option)}
                  >
                    <input
                      type="radio"
                      name="quiz-option"
                      checked={selectedOption === option}
                      readOnly
                    />
                    <span>{option}</span>
                  </div>
                ))}
              </div>
            </div>
          </CSSTransition>
        </TransitionGroup>

        <div className="quiz-navigation">
          <button
            type="button"
            className="nav-button prev-button"
            onClick={goToPreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </button>

          {!isLastQuestion ? (
            <button
              type="button"
              className="nav-button next-button"
              onClick={goToNextQuestion}
              disabled={!selectedOption}
            >
              Next
            </button>
          ) : (
            <button
              type="button"
              className="nav-button submit-button"
              onClick={handleSubmit}
              disabled={!selectedOption}
            >
              Submit Quiz
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AttemptQuiz;