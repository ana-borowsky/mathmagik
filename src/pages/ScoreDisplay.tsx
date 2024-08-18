import './QuizPage.css';
import { useNavigate } from 'react-router-dom';
import { Question } from '../backend/backend';

interface Props {
  wrongAnswers: Array<{ question: Question, answer: number }>
  totalTime: number,
  questionsQuantity: number
  onReplay: () => void
}

function ScoreDisplay({ wrongAnswers,  totalTime, questionsQuantity, onReplay}: Props) {
  const navigate = useNavigate();
  
  const averageTimePerQuestion = totalTime / questionsQuantity
  const numberOfWrongAnswers = Object.keys(wrongAnswers).length;
  const errorPercentage = numberOfWrongAnswers / questionsQuantity * 100 

  function reloadQuiz() {
    onReplay()
  }

  return (
    <div className="container">
      <div className="score-container">
        <a onClick={() => (navigate('/main'))}>
          <img className='logo' src='mathmagik_logo.svg' alt='Logotipo Mathmagik' />
        </a>
        <div className='score-title'>
          <img src='star.svg' alt='Estrela' />
          <h1>Pontuação</h1>
          <img src='star.svg' alt='Estrela' />
        </div>
        <div className='points'>
          <div className='rectangle long'>
            <div className='pink'>{questionsQuantity - numberOfWrongAnswers}</div>
            <div className='purple'>/</div>
            <div className='yellow'>{questionsQuantity}</div>
          </div>
          <div className='details'>
            <div className='rectangle small'>
              <div className='text blue'>{Math.round(errorPercentage)}%</div>
            </div>
            <div>
              <h2>de erros</h2>
            </div>
          </div>
          <div className='details'>
            <div className='rectangle small'>
              <div className='text orange'>{totalTime}s</div>
            </div>
            <div>
              <h2>de tempo total</h2>
            </div>
          </div>
          <div className='details'>
            <div className='rectangle small'>
              <div className='text green'>{Math.round(averageTimePerQuestion)}s</div>
            </div>
            <div>
              <h2>por questão</h2>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button className='button-std' onClick={() => reloadQuiz()}>ERROS</button>
          <button className='button-std' onClick={() => reloadQuiz()}>REPLAY</button>
        </div>
      </div>
    </div>
  )
}

export default ScoreDisplay