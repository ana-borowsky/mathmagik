import React from 'react'
import './QuizPage.css'
import { useNavigate } from 'react-router-dom';

function QuizPage() {
  const navigate = useNavigate();

  return (
    <>
      <a onClick={()=>(navigate("/main"))}><img className='logo' src="mathmagik_logo.png" alt="Logotipo Mathmagik"/></a>
      <h1>9 x 7</h1>
      <div className="btn">
        <div className='btn'>
          <button className='quiz-button pink-button' onClick={()=>(navigate("/settings"))}>23</button>
          <button className='quiz-button blue-button' onClick={()=>(navigate("/quiz"))}>27</button>
        </div>
        <div className='btn'>
          <button className='quiz-button orange-button' onClick={()=>(navigate("/settings"))}>32</button>
          <button className='quiz-button yellow-button' onClick={()=>(navigate("/quiz"))}>28</button>
        </div>
      </div>
    </>
  )
}

export default QuizPage