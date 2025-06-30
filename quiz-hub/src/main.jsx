import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QuizProvider } from './store/Context-api.jsx'
  import { ToastContainer } from 'react-toastify';
  
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < BrowserRouter >
    <QuizProvider>
      <App />
    </QuizProvider>
    <ToastContainer
position="top-center"
autoClose={2996}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"

/>
    </ BrowserRouter >
  </StrictMode>,
)
