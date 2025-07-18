// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './ScoreCard.css';

// const ScoreCard = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const quizData = location.state?.quizData;

//   if (!quizData) {
//     return (
//       <div className="scorecard-container">
//         <div className="scorecard-card">
//           <h1>No Results Found</h1>
//           <p>Please complete a quiz to see your results</p>
//           <button className="retake-btn" onClick={() => navigate('/')}>
//             Back to Quiz
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const scorePercentage = Math.round(
//     (quizData.correctAnswers / quizData.totalQuestions) * 100
//   );

//   const getPerformanceMessage = () => {
//     if (scorePercentage >= 80) return "Excellent work! You've mastered this material.";
//     if (scorePercentage >= 60) return "Good job! You're on the right track.";
//     if (scorePercentage >= 40) return "Keep practicing! You're getting there.";
//     return "Don't worry! Review the material and try again.";
//   };

//   return (
//     <div className="scorecard-container">
//       <div className="scorecard-card">
//         <h1 className="scorecard-title">Score Card</h1>
//         <p className="completion-message">{getPerformanceMessage()}</p>

//         <div className="stats-grid">
//           <div className="stat-box total-box">
//             <h2 className="stat-label">Total Questions</h2>
//             <div className="stat-value">{quizData.totalQuestions}</div>
//           </div>
//           <div className="stat-box correct-box">
//             <h2 className="stat-label">Correct Answers</h2>
//             <div className="stat-value">{quizData.correctAnswers}</div>
//           </div>
//           <div className="stat-box incorrect-box">
//             <h2 className="stat-label">Incorrect Answers</h2>
//             <div className="stat-value">{quizData.incorrectAnswers}</div>
//           </div>
//         </div>

//         <div className="score-divider"></div>

//         <div className="overall-score">
//           <h3 className="score-label">Overall Score</h3>
//           <div className="score-percentage">{scorePercentage}%</div>
//         </div>

//         <div className="detailed-results">
//           <h3 className="results-title">Detailed Results</h3>
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
//                   <td>{question.userAnswer || 'Not answered'}</td>
//                   <td>{question.correctAnswer}</td>
//                   <td className={question.result === 'Correct' ? 'result-correct' : 'result-incorrect'}>
//                     {question.result}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <button className="retake-btn" onClick={() => navigate('/')}>
//           Retake Quiz
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ScoreCard;




















































import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ScoreCard.css';

const ScoreCard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const quizData = location.state?.quizData;

  if (!quizData) {
    return (
      <div className="scorecard-container">
        <div className="scorecard-card">
          <h1>No Results Found</h1>
          <p>Please complete a quiz to see your results</p>
          <button className="retake-btn" onClick={() => navigate('/')}>
            Back to Quiz
          </button>
        </div>
      </div>
    );
  }

  const scorePercentage = Math.round(
    (quizData.correctAnswers / quizData.totalQuestions) * 100
  );

  const scorePoints = Math.round(
    (quizData.correctAnswers / quizData.totalQuestions) * 1000
  );

  const getPerformanceMessage = () => {
    if (scorePercentage >= 80) return "Excellent work! You've mastered this material.";
    if (scorePercentage >= 60) return "Good job! You're on the right track.";
    if (scorePercentage >= 40) return "Keep practicing! You're getting there.";
    return "Don't worry! Review the material and try again.";
  };

  const handleViewLeaderboard = () => {
    navigate('/leaderboard', {
      state: {
        quizData: {
          correctAnswers: quizData.correctAnswers,
          totalQuestions: quizData.totalQuestions,
          percentageScore: scorePoints
        }
      }
    });
  };

  return (
    <div className="scorecard-container">
      <div className="scorecard-card">
        <h1 className="scorecard-title">Score Card</h1>
        <p className="completion-message">{getPerformanceMessage()}</p>

        <div className="stats-grid">
          <div className="stat-box total-box">
            <h2 className="stat-label">Total Questions</h2>
            <div className="stat-value">{quizData.totalQuestions}</div>
          </div>
          <div className="stat-box correct-box">
            <h2 className="stat-label">Correct Answers</h2>
            <div className="stat-value">{quizData.correctAnswers}</div>
          </div>
          <div className="stat-box incorrect-box">
            <h2 className="stat-label">Incorrect Answers</h2>
            <div className="stat-value">{quizData.incorrectAnswers}</div>
          </div>
        </div>

        <div className="score-divider"></div>

        <div className="overall-score">
          <h3 className="score-label">Overall Score</h3>
          <div className="score-percentage">{scorePercentage}%</div>
          <div className="score-points">{scorePoints} points</div>
        </div>

        <div className="detailed-results">
          <h3 className="results-title">Detailed Results</h3>
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
                  <td>{question.userAnswer || 'Not answered'}</td>
                  <td>{question.correctAnswer}</td>
                  <td className={question.result === 'Correct' ? 'result-correct' : 'result-incorrect'}>
                    {question.result}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="scorecard-actions">
          <button className="retake-btn" onClick={() => navigate('/')}>
            Retake Quiz
          </button>
          <button 
            className="leaderboard-btn" 
            onClick={handleViewLeaderboard}
          >
            View Leaderboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;