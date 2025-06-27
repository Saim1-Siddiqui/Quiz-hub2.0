import React from 'react'
import './CreateQuiz.css'
import {NavLink} from 'react-router-dom'

function CreateQuiz() {
  return (
    <div className='create-container' >
        <form className='create-form' >
          <h1>Create Quiz</h1>
          <input type="text" placeholder='Quiz title' className='create-item' />
          <textarea name="" id="" placeholder='Add Description here.....'></textarea>
          <select name="" id="">
            <option value="cetagory" disabled>
              Select Cetagory
            </option>
            <option value="html">
              HTML
            </option>
             <option value="css">
              Css
            </option>
             <option value="javascript">
              Java Script
            </option>
             <option value="react">
              React
            </option>
          </select>
          <select name="" id="">
            <option value="difficulty" disabled >Diffculty Level</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <input type="text" placeholder='Add Question here '  />
          <input type="text" placeholder='Option 1'  />
          <input type="text" placeholder='Option 2'  />
          <input type="text" placeholder='Option 3'  />
          <input type="text" placeholder='Option 4'  />
          <input type="text" placeholder='Correct Answer' />
          <NavLink>add Question</NavLink>
          <NavLink>Create Quiz</NavLink>
          
        </form>
      <div className="create-right"></div>
    </div>
  )
}

export default CreateQuiz