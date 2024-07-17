import React from 'react'
import './QuizPage.css'
import { useNavigate } from 'react-router-dom';

function QuizPage() {
  const navigate = useNavigate();

  return (
    <>
      <a onClick={()=>(navigate("/main"))}><img className='logo' src="mathmagik_logo.png" alt="Logotipo Mathmagik"/></a>

      <div className='question'>
        <h1>9 x 7</h1>
      </div>
      <div className="btn">
        <div className='btn'>
          <button className='quiz-button pink-button'>23</button>
          <button className='quiz-button blue-button'>27</button>
        </div>
        <div className='btn'>
          <button className='quiz-button orange-button'>32</button>
          <button className='quiz-button yellow-button'>28</button>
        </div>
      </div>

      <div className="gap">
        <div className='progress-bar-text'>
          <div>00:23</div>
          <div>23/70</div>
        </div>
        <div className='progress-bar-background'>
          <div className='progress-bar-background bar'></div>
        </div>
      </div>
    </>
  )
}

export default QuizPage