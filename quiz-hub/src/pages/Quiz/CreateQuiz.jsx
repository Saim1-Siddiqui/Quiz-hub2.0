import React, { useState } from 'react';
import './CreateQuiz.css';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

function CreateQuiz() {
  const [quizData, setQuizData] = useState({
    title: '',
    description: '',
    category: '',
    difficulty: 'medium',
    timeLimit: '',
    questions: [
      {
        text: '',
        options: ['', '', '', ''],
        correctAnswer: ''
      }
    ]
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuizData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...quizData.questions];
    updatedQuestions[index][field] = value;
    setQuizData(prev => ({
      ...prev,
      questions: updatedQuestions
    }));
  };

  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const updatedQuestions = [...quizData.questions];
    updatedQuestions[questionIndex].options[optionIndex] = value;
    setQuizData(prev => ({
      ...prev,
      questions: updatedQuestions
    }));
  };

  const addQuestion = () => {
    setQuizData(prev => ({
      ...prev,
      questions: [
        ...prev.questions,
        {
          text: '',
          options: ['', '', '', ''],
          correctAnswer: ''
        }
      ]
    }));
  };
const handleSubmit = (e) => {
  e.preventDefault();
  const { title, description, category, difficulty, timeLimit, questions } = quizData;

  const allQuestionsFilled = questions.every(
    (q) => q.text && q.correctAnswer && q.options.every((opt) => opt.trim() !== '')
  );

  if (title && description && category && difficulty && timeLimit && allQuestionsFilled) {
    console.log('Quiz Data:', quizData);
    toast.success("Quiz Created Successfully");
    // Send quizData to backend here
  } else {
    toast.warning("All the fields are required");
  }
};


  return (
    <div className='create-container'>
      <form className='create-form' onSubmit={handleSubmit}>
        <h1 className='form-title'>Create Quiz</h1>
        
        {/* Quiz Metadata */}
        <div className="form-section">
          <h3>Quiz Information</h3>
          <input 
            type="text" 
            name="title"
            placeholder='Quiz title' 
            className='create-item' 
            value={quizData.title}
            onChange={handleInputChange}
          />
          <textarea 
            name="description"
            placeholder='Add Description here.....' 
            className='create-item description' 
            value={quizData.description}
            onChange={handleInputChange}
          />
          <select 
            name="category" 
            className='create-item'
            value={quizData.category}
            onChange={handleInputChange}
          >
            <option value="" disabled>Select Category</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="javascript">JavaScript</option>
            <option value="react">React</option>
          </select>
          <select 
            name="difficulty" 
            className='create-item'
            value={quizData.difficulty}
            onChange={handleInputChange}
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <input 
            type="number" 
            name="timeLimit"
            placeholder='Time Limit (minutes)' 
            className='create-item' 
            value={quizData.timeLimit}
            onChange={handleInputChange}
          />
        </div>

        {/* Questions */}
        <div className="questions-container">
          {quizData.questions.map((question, qIndex) => (
            <div key={qIndex} className="question-section">
              <h3>Question {qIndex + 1}</h3>
              <input
                type="text"
                placeholder='Question text'
                className='create-item'
                value={question.text}
                onChange={(e) => handleQuestionChange(qIndex, 'text', e.target.value)}
              />
              
              <div className="options-grid">
                {question.options.map((option, oIndex) => (
                  <input
                    key={oIndex}
                    type="text"
                    placeholder={`Option ${oIndex + 1}`}
                    className='create-item option'
                    value={option}
                    onChange={(e) => handleOptionChange(qIndex, oIndex, e.target.value)}
                  />
                ))}
              </div>
              
              <select
                className='create-item'
                value={question.correctAnswer}
                onChange={(e) => handleQuestionChange(qIndex, 'correctAnswer', e.target.value)}
              >
                <option value="" disabled>Select Correct Answer</option>
                {question.options.map((_, index) => (
                  <option key={index} value={index}>Option {index + 1}</option>
                ))}
              </select>
            </div>
          ))}
        </div>

        <div className='btn-wrapper'>
          <button type="button" className='create-btn add-btn' onClick={addQuestion}>
            Add Question
          </button>
          <button type="submit" className='create-btn submit-btn'>
            Create Quiz
          </button>
        </div>
      </form>
      
      <div className="create-image">
        <img src="\Images\create-quiz.png" 
             alt="Quiz illustration" />
             
      </div>
      
    </div>
  );
}

export default CreateQuiz;