import { useState, useEffect } from 'react';
import './QuizPage.css';
import { useNavigate } from 'react-router-dom';

function ScoreDisplay() {
  const navigate = useNavigate();
  const [totalTime, setTotalTime] = useState(10); 
  const [questionQuantity, setQuestionQuantity] = useState(20); 
  const averageTimePerQuestion = totalTime / questionQuantity
  let [questionCounter, setQuestionCounter] = useState(1);
  const storedWrongAnswers = localStorage.getItem('wrongAnswers');
  const wrongAnswers: Record<number, { question: string, result: number, answer: number }> = storedWrongAnswers 
    ? JSON.parse(storedWrongAnswers)
    : {}; 

  const numberOfWrongAnswers = Object.keys(wrongAnswers).length;
  const errorPercentage = numberOfWrongAnswers / questionQuantity * 100

  useEffect(() => {
    const storageQuestionQuantity = localStorage.getItem("questionQuantity")!;
    setQuestionQuantity(parseInt(storageQuestionQuantity));
  }, []);

  function reloadQuiz() {
    questionCounter = 1
    setQuestionCounter(questionCounter);
    const storeQuestionCounter = localStorage.setItem('questionCounter', '1');
    window.location.reload();

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
            <div className='pink'>{questionQuantity - numberOfWrongAnswers}</div>
            <div className='purple'>/</div>
            <div className='yellow'>{questionQuantity}</div>
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