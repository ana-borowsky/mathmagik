import { useState } from 'react';
import './QuizPage.css';
import { OperationType, Question } from '../backend/backend';
import { generateQuestion } from '../backend/database';
import ScoreDisplay  from './ScoreDisplay'
import QuizDisplay  from './QuizDisplay'
import ProgressBar from './QuizProgressBar'
import { readSettings } from '../backend/storage'
import { useNavigate } from 'react-router-dom';

interface Props {
  settings: Question;
}

function QuizPage() {
  let initialQuestion = generateQuestion([0], [OperationType.Sum]); //Generate question altered for testing purposes
  const [currentQuestion, setCurrentQuestion] = useState(initialQuestion)
  const [questionCounter, setQuestionCounter] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState<Array<{ question: Question, answer: number }>>([]);
  const questionQuantity = readSettings().questionQuantity;
  const navigate = useNavigate();

  const handleQuestionDone = (answer: number) => {
    if (answer != currentQuestion.result) {
      const newWrongAnswers = [...wrongAnswers, {
        question: currentQuestion,
        answer
      }]

      setWrongAnswers(newWrongAnswers);
    }

    const newQuestion = generateQuestion([0], [OperationType.Sum]);
    setCurrentQuestion(newQuestion)
    setQuestionCounter(questionCounter + 1)
  }

  const reset = () => {
    setQuestionCounter(0);
    setWrongAnswers([]);
    const newQuestion = generateQuestion([0], [OperationType.Sum]);
    setCurrentQuestion(newQuestion)
  }

  return (
    <>
      {questionCounter >= questionQuantity ? (
        <ScoreDisplay wrongAnswers={wrongAnswers} totalTime={10} questionsQuantity={questionQuantity} onReplay={reset}/>
      ) : (
        <div className="container">
          <a className='logo' onClick={() => navigate('/main')}>
            <img src='mathmagik_logo.svg' alt='Logotipo Mathmagik' />
          </a>
          <div className="quiz-container">
            <ProgressBar questionCounter={questionCounter} questionQuantity={questionQuantity} />
            <QuizDisplay question={currentQuestion} onQuestionDone={handleQuestionDone} questionCounter={questionCounter} />
          </div>
        </div>
      )}
    </>
  );
}

export default QuizPage
