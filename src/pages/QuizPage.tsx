import React from 'react'
import './QuizPage.css'
import { useNavigate } from 'react-router-dom';

function QuizPage() {
  // const navigate = useNavigate();

  return (
    // <>
    //   <a onClick={()=>(navigate('/main'))}><img className='logo-quiz' src='mathmagik_logo.png' alt='Logotipo Mathmagik'/></a>

    //   <div className='question'>
    //     <h1>4 x 7</h1>
    //   </div>
    //   <div className='btn'>
    //     <div className='btn'>
    //       <button className='quiz-button pink'>23</button>
    //       <button className='quiz-button blue'>27</button>
    //     </div>
    //     <div className='btn'>
    //       <button className='quiz-button orange'>32</button>
    //       <button className='quiz-button yellow'>28</button>
    //     </div>
    //   </div>

    //   <div className='gap'>
    //     <div className='progress-bar-text'>
    //       <div>00:23</div>
    //       <div>35/70</div>
    //     </div>
    //     <div className='progress-bar-background'>
    //       <div className='progress-bar-background bar'></div>
    //     </div>
    //   </div>
    // </>
    <ScorePage></ScorePage>
  )
}

function ScorePage() {
  const navigate = useNavigate();

  return (
    <>
      <a onClick={()=>(navigate('/main'))}><img className='logo-score' src='mathmagik_logo.png' alt='Logotipo Mathmagik'/></a>
      <div className='score-title'>
        <img src='Star.png' alt='Estrela'/>
        <h1>Pontuação</h1>
        <img src='Star.png' alt='Estrela'/>
      </div>
      <div className="btn">
        <div className='rectangle'>
          <div className='pink'>52</div>
          <div className='purple'>/</div>
          <div className='yellow'>70</div>
        </div>

        <div className="details">
          <div className='rectangle small'>
            <div className='text blue'>3:47</div>
          </div>
          <div>
            <h2>Tempo total</h2>
          </div>
        </div>

        <div className="details">
          <div className='rectangle small'>
            <div className='text pink'>74%</div>
          </div>
          <div>
            <h2>de acertos</h2>
          </div>
        </div>

        <div className="details">
          <div className='rectangle small'>
            <div className='text yellow'>32s</div>
          </div>
          <div>
            <h2>por questão</h2>
          </div>
        </div>

      </div>
      <button className='button-main' onClick={()=>(navigate("/quiz"))}>REPLAY</button>
    </>
  )
}

export default QuizPage