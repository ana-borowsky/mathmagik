import { useState, useEffect } from 'react';
import './QuizPage.css';
import { OperationType, QuestionTemplate, Question } from '../backend/backend';
import { GenerateQuestion } from '../backend/database';
import { useNavigate } from 'react-router-dom';
import { tsParticles } from '@tsparticles/engine';
import { loadConfettiPreset } from '@tsparticles/preset-confetti';

function QuizPage() {
  let initialQuestion = GenerateQuestion([0], [OperationType.Sum]);
  const [currentQuestion, setCurrentQuestion] = useState(initialQuestion)

  const handleQuestionDone = () => {
    let currentQuestion = GenerateQuestion([0], [OperationType.Sum]);
    setCurrentQuestion(currentQuestion)
  }

  return (
    <QuizDisplay question={currentQuestion} onQuestionDone={handleQuestionDone}/>
  )
}

interface Props {
  question: Question;
  onQuestionDone: () => void;
}

enum QuestionState {
  Unanswered,
  Correct,
  Wrong
}

function QuizDisplay({question, onQuestionDone} : Props) {
  const navigate = useNavigate();

  async function checkAnswer(option: number) {
    if (option === question.result) {
      await loadConfettiPreset(tsParticles);
      tsParticles.load({
        id: "tsparticles",
        options: {
          preset: "confetti",
          particleCount: 100,
          spread: 70,
          particles: {
            size: {
              value: 8,
            },
          }
        },
      });

      setTimeout(() => {
        onQuestionDone()
      }, 1500)
    }
  }

  return(
    <div className="quiz-container">
      <a onClick={()=>(navigate('/main'))}>
        <img className='logo-quiz' src='mathmagik_logo.svg' alt='Logotipo Mathmagik'/>
      </a>
      <h1>Questão</h1>
      <div className='question'>
        <div className='rectangle question-rectangle'>
          <div className='pink'>{question.questionValues[0]}</div>
          <div className='purple'>+</div>
          <div className='yellow'>{question.questionValues[1]}</div>
        </div>
      </div>
      <div className='quiz-buttons-section'>
        <div className='quiz-buttons'>
          <button onClick={() => checkAnswer(question.options[0])} className='quiz-button pink'>{question.options[0]}</button>
          <button onClick={() => checkAnswer(question.options[1])}  className='quiz-button blue'>{question.options[1]}</button>
        </div>
        <div className='quiz-buttons'>
          <button onClick={() => checkAnswer(question.options[2])} className='quiz-button orange'>{question.options[2]}</button>
          <button onClick={() => checkAnswer(question.options[3])} className='quiz-button yellow'>{question.options[3]}</button>
        </div>
      </div>

      <div className='progress-bar-section'>
        <div className='progress-bar-text'>
          <div>00:23</div>
          <div>1/90</div>
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
    <div className="quiz-container">
      <a onClick={()=>(navigate('/main'))}>
        <img className='logo-score' src='mathmagik_logo.svg' alt='Logotipo Mathmagik'/>
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
        <img className='logo-score' src='mathmagik_logo.svg' alt='Logotipo Mathmagik'/>
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