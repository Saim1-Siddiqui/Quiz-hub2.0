// import React from 'react'
// import { ScoreCard } from 'react-router-dom';
// import './ScoreCard.css'

//   const Scorecard = ({ quizData }) => {
//   const scorePercentage = Math.round(
//     (quizData.correctAnswers / quizData.totalQuestions) * 100
//   );

//   return (
//     <div className="score-card-container">
//       <div className="score-card">
//         <h1 className="score-card-title"> 'Score Card' </h1>
//         <p className="completion-message">You've completed the quiz! Here's how you did.</p>

//         <div className="stats-grid">
//           <div className="stat-box1">
//             <h2 className="stat-label">Total Questions</h2>
//             <div className="stat-value total-questions">{quizData.totalQuestions}</div>
//           </div>
//           <div className="stat-box2">
//             <h2 className="stat-label">Correct Answers</h2>
//             <div className="stat-value correct-count">{quizData.correctAnswers}</div>
//           </div>
//           <div className="stat-box3">
//             <h2 className="stat-label">Incorrect Answers</h2>
//             <div className="stat-value incorrect-count">{quizData.incorrectAnswers}</div>
//           </div>
//         </div>

//         <div className="score-divider"></div>

//         <div className="overall-score">
//           <h3 className="score-label">Overall Score</h3>
//           <div className="score-percentage">{scorePercentage}%</div>
//         </div>

//         <div className="detailed-results">
//           <h3 className="results-title">Detailed Results...</h3>
//           <table className="results-table">
//             <thead>
//               <tr>
//                 <th>Question</th>
//                 <th>Your Answer</th>
//                 <th>Correct Answer</th>
//                 <th>Result</th>
//               </tr>
//             </thead>
//             <tbody>
//               {quizData.questions.map((question, index) => (
//                 <tr key={index}>
//                   <td>{question.text}</td>
//                   <td>{question.userAnswer}</td>
//                   <td>{question.correctAnswer}</td>
//                   <td className={question.result === 'Correct' ? 'result-correct' : 'result-incorrect'}>
//                     {question.result}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScoreCard;































import React from 'react';
import { useLocation } from 'react-router-dom';
import './Scorecard.css';

const Scorecard = () => {
  const location = useLocation();
  const quizData = location.state?.quizData; 
  const scorePercentage = Math.round(
    (quizData.correctAnswers / quizData.totalQuestions) * 100
  );

  return (
    <div className="score-card-container">
      <div className="score-card">
        <h1 className="score-card-title">Score Card</h1>
        <p className="completion-message">You've completed the quiz! Here's how you did.</p>

        <div className="stats-grid">
          <div className="stat-box1">
            <h2 className="stat-label">Total Questions</h2>
            <div className="stat-value total-questions">{quizData.totalQuestions}</div>
          </div>
          <div className="stat-box2">
            <h2 className="stat-label">Correct Answers</h2>
            <div className="stat-value correct-count">{quizData.correctAnswers}</div>
          </div>
          <div className="stat-box3">
            <h2 className="stat-label">Incorrect Answers</h2>
            <div className="stat-value incorrect-count">{quizData.incorrectAnswers}</div>
          </div>
        </div>

        <div className="score-divider"></div>

        <div className="overall-score">
          <h3 className="score-label">Overall Score</h3>
          <div className="score-percentage">{scorePercentage}%</div>
        </div>

        <div className="detailed-results">
          <h3 className="results-title">Detailed Results...</h3>
          <table className="results-table">
            <thead>
              <tr>
                <th>Question</th>
                <th>Your Answer</th>
                <th>Correct Answer</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              {quizData.questions.map((question, index) => (
                <tr key={index}>
                  <td>{question.text}</td>
                  <td>{question.userAnswer}</td>
                  <td>{question.correctAnswer}</td>
                  <td className={question.result === 'Correct' ? 'result-correct' : 'result-incorrect'}>
                    {question.result}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Scorecard;