import React from 'react'
import './QuizPage.css'
import { useNavigate } from 'react-router-dom';

function QuizPage() {
  const navigate = useNavigate();

  return (
    <QuizDisplay/>
  )
}

function QuizDisplay(){
  const navigate = useNavigate();
  return(
    <div>
      <a onClick={()=>(navigate('/main'))}>
        <img className='logo-quiz' src='mathmagik_logo.png' alt='Logotipo Mathmagik'/>
      </a>
      <h1>Questão</h1>
      <div className='question'>
        <div className='rectangle question-rectangle'>
          <div className='pink'>7</div>
          <div className='purple'>x</div>
          <div className='yellow'>9</div>
        </div>
      </div>
      <div className='quiz-buttons-section'>
        <div className='quiz-buttons'>
          <button className='quiz-button pink'>23</button>
          <button className='quiz-button blue'>27</button>
        </div>
        <div className='quiz-buttons'>
          <button className='quiz-button orange'>32</button>
          <button className='quiz-button yellow'>28</button>
        </div>
      </div>

      <div className='progress-bar-section'>
        <div className='progress-bar-text'>
          <div>00:23</div>
          <div>35/70</div>
        </div>
        <div className='progress-bar-background'>
          <div className='progress-bar-background bar'></div>
        </div>
      </div>
    </div>
  )
}

function ScoreDisplay() {
  const navigate = useNavigate();

  return (
    <div>
      <a onClick={()=>(navigate('/main'))}>
        <img className='logo-score' src='mathmagik_logo.png' alt='Logotipo Mathmagik'/>
      </a>
      <div className='score-title'>
        <img src='Star.png' alt='Estrela'/>
        <h1>Pontuação</h1>
        <img src='Star.png' alt='Estrela'/>
      </div>
      <div className='points'>
        <div className='rectangle'>
          <div className='pink'>52</div>
          <div className='purple'>/</div>
          <div className='yellow'>70</div>
        </div>

        <div className='details'>
          <div className='rectangle small'>
            <div className='text blue'>3:47</div>
          </div>
          <div>
            <h2>Tempo total</h2>
          </div>
        </div>

        <div className='details'>
          <div className='rectangle small'>
            <div className='text pink'>74%</div>
          </div>
          <div>
            <h2>de acertos</h2>
          </div>
        </div>

        <div className='details'>
          <div className='rectangle small'>
            <div className='text orange'>32s</div>
          </div>
          <div>
            <h2>por questão</h2>
          </div>
        </div>
      </div>
      <div className="gap"></div>
      <div className="buttons">
        <button className='button-std' onClick={()=>(navigate('/quiz'))}>ERROS</button>
        <button className='button-std' onClick={()=>(navigate('/quiz'))}>REPLAY</button>
      </div>
    </div>
  )
}

function WrongAnswerDisplay() {
  const navigate = useNavigate();

  return (
    <div>
      <a onClick={()=>(navigate('/main'))}>
        <img className='logo-score' src='mathmagik_logo.png' alt='Logotipo Mathmagik'/>
      </a>
      <div className='score-title'>
        <img src='Star.png' alt='Estrela'/>
        <h1>Erros: 4</h1>
        <img src='Star.png' alt='Estrela'/>
      </div>
      <div className="gap"></div>
      <div className='wrong-answers'>
        <div className="wrong-answer">
          <div className='rectangle long'>
            <div className='pink'>7</div>
            <div className='purple'>x</div>
            <div className='yellow'>9</div>
            <div className='blue'>=</div>
            <div className='purple'>63</div>
          </div>
          <div className='details'>
            <div>
              <h2>Sua resposta: 56</h2>
            </div>
          </div>
        </div>
        <div className="wrong-answer">
          <div className='rectangle long'>
            <div className='pink'>7</div>
            <div className='purple'>x</div>
            <div className='yellow'>9</div>
            <div className='blue'>=</div>
            <div className='purple'>63</div>
          </div>
          <div className='details'>
            <div>
              <h2>Sua resposta: 56</h2>
            </div>
          </div>
        </div>
        <div className="wrong-answer">
          <div className='rectangle long'>
            <div className='pink'>7</div>
            <div className='purple'>x</div>
            <div className='yellow'>9</div>
            <div className='blue'>=</div>
            <div className='purple'>63</div>
          </div>
          <div className='details'>
            <div>
              <h2>Sua resposta: 56</h2>
            </div>
          </div>
        </div>
        <div className="wrong-answer">
          <div className='rectangle long'>
            <div className='pink'>7</div>
            <div className='purple'>x</div>
            <div className='yellow'>9</div>
            <div className='blue'>=</div>
            <div className='purple'>63</div>
          </div>
          <div className='details'>
            <div>
              <h2>Sua resposta: 56</h2>
            </div>
          </div>
        </div>
       </div>
      <div className="buttons">
        <button className='button-std' onClick={()=>(navigate('/quiz'))}>VOLTAR</button>
        <button className='button-std' onClick={()=>(navigate('/quiz'))}>REPLAY</button>
      </div>
      <div className="gap"></div>
    </div>
  )
}

export default QuizPage