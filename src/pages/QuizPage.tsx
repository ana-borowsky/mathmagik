import { useState } from 'react';
import './QuizPage.css';
import { OperationType, Question } from '../backend/backend';
import { generateQuestion } from '../backend/database';
import ScoreDisplay  from './ScoreDisplay'
import QuizDisplay  from './QuizDisplay'
import ProgressBar from './QuizProgressBar'
import { readSettings } from '../backend/storage'
import { useNavigate } from 'react-router-dom';


function generateQuestionsWrapper(){
  const storage = readSettings();

  let operations = [];

  //Temporary Implementation, replace with question builder later!
  if(storage.questionTypes.sum){
    operations.push(OperationType.Sum);
  }
  if(storage.questionTypes.subtraction){
    operations.push(OperationType.Subtraction);
  }
  if(storage.questionTypes.multiplication){
    operations.push(OperationType.Multiplication);
  }
  if(storage.questionTypes.division){
    operations.push(OperationType.Division);
  }

  return generateQuestion([storage.difficulty], operations);
}

function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(generateQuestionsWrapper())
  const [questionCounter, setQuestionCounter] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState<Array<{ question: Question, answer: number }>>([]);
  const questionQuantity = readSettings().questionQuantity;
  const navigate = useNavigate();
  const handleQuestionDone = (answer: number) => {
    if (answer !== currentQuestion.result) {
      const newWrongAnswers = [...wrongAnswers, {
        question: currentQuestion,
        answer
      }]

      setWrongAnswers(newWrongAnswers);
    }

    const newQuestion = generateQuestionsWrapper();
    setCurrentQuestion(newQuestion)
    setQuestionCounter(questionCounter + 1)
  }

  const reset = () => {
    setQuestionCounter(0);
    setWrongAnswers([]);
    const newQuestion = generateQuestionsWrapper();
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
