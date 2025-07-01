import React from 'react';
import './Dashboard.css';
import { NavLink } from 'react-router-dom';
import { useQuiz } from '../../store/Context-api';

function Dashboard() {
  const { data } = useQuiz();

  return (
    <div className="dashboard-container">
      <h1>Your Quizzes</h1>
      <section className="featured-quizzes">
        <h2>Featured Quizzes</h2>
        <div className="quiz-grid">
          {data.map((quiz, index) => (
            <NavLink
              to={`/quizintro/${quiz.category}`}
              key={index}
              className="quiz-card"
            >
              <img src={`/Images/${quiz.category}.jpg`} alt={quiz.title} />
              <div className="quiz-info">
                <p className="quiz-title">{quiz.title}</p>
                
              </div>
            </NavLink>
          ))}
        </div>
      </section>
   
      <section className="create-quiz">
        <h2>Create Your Own Quiz</h2>
        <div className="create-box">
          <h3>Create a new quiz</h3>
          <p>Add your own questions and challenge your friends</p>
          <NavLink to="/createquiz" className="dash-link">
            Create-Quiz
          </NavLink>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
