import React, { useEffect } from 'react';
import './Dashboard.css';
import { NavLink } from 'react-router-dom';


const quizzes = [
  {
    title: "Fun Quiz",
    image: "../../../public/Images/fun.jpg"
  },
  {
    title: "Science Quiz",
    image: "../../../public/Images/science.jpg"
  },
  {
    title: "Math Quiz",
    image: "../../../public/Images/math.jpg"
  },
  {
    title: "Computer Quiz",
    image: "../../../public/Images/computer.jpg"
  }
];

function Dashboard() {
  return (
  <div className="dashboard-container">
      <h1>Your Quizzes</h1>

      <section className="featured-quizzes">
        <h2>Featured Quizzes</h2>
        <div className="quiz-grid">
          {quizzes.map((quiz, index) => (
            <div className="quiz-card" key={index}>
              <img src={quiz.image} alt={quiz.title} />
              <p>{quiz.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="create-quiz">
        <h2>Create Your Own Quiz</h2>
        <div className="create-box">
          <h3>Create a new quiz</h3>
          <p>Add your own questions and challenge your best friends</p>
          <NavLink to="/createquiz" className="dash-link">Create-Quiz</NavLink>
        </div>
      </section>
    </div>
  );
};
export default Dashboard;