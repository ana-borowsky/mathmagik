import './QuizPage.css'
import { useNavigate } from 'react-router-dom'
import { shuffle } from '../backend/util'
import { Question } from '../backend/backend';

interface Props {
  wrongAnswers: Array<{ question: Question, answer: number }>,
  onBack: () => void,
  onReplay: () => void
}

function WrongAnswerDisplay({ wrongAnswers, onBack, onReplay }: Props) {
  const navigate = useNavigate()
  const numberOfWrongAnswers = wrongAnswers.length

  const formattedQuestion = (question: Question) => {
    const colors = ['pink', 'purple', 'yellow', 'green', 'blue', 'orange']
    const shuffledColors = shuffle(colors)
    const questionParts = [question.questionValues[0].toString(), question.signal, question.questionValues[1].toString(), '=', question.result.toString()]

    return questionParts.map((part, index) => {
      return <span key={index} className={`${shuffledColors[index]}`}>{part}</span>
    })
  }

  return (
    <div className='container wrong-answers-container'>
      <a className='logo' onClick={() => navigate('/main')}>
        <img src='mathmagik_logo.svg' alt='Logotipo Mathmagik' />
      </a>
      <div className='score-title'>
        <h1>Erros: {numberOfWrongAnswers}</h1>
      </div>
      <div className='wrong-answers'>
        {wrongAnswers.map((answer, key) => {
          return (
            <div key={key} className="wrong-answer">
              <div className='rectangle wrong-question-rectangle'>
                {formattedQuestion(answer.question)}
              </div>
              <div className='answer'>
                <h3>Sua resposta: {wrongAnswers[key].answer}</h3>
                <h3>Diferença: {Math.abs(answer.question.result - answer.answer)}</h3>
              </div>
            </div>
          );
        })}
      </div>
      <div className="buttons">
        <button className='button-std' onClick={onBack}>VOLTAR</button>
        <button className='button-std' onClick={onReplay}>REINICIAR</button>
      </div>
    </div>
  );
}

export default WrongAnswerDisplay