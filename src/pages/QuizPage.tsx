import { useState, useEffect } from 'react';
import './QuizPage.css';
import { OperationType, QuestionTemplate, Question } from '../backend/backend';
import { generateQuestion } from '../backend/database';
// import WrongAnswerDisplay  from './WrongAnswersDisplay'
import ScoreDisplay  from './ScoreDisplay'
import QuizDisplay  from './QuizDisplay'
import { readSettings } from '../backend/storage'

function QuizPage() {
  let initialQuestion = generateQuestion([0], [OperationType.Sum]); //Generate question altered for testing purposes
  const [currentQuestion, setCurrentQuestion] = useState(initialQuestion)
  const handleQuestionDone = () => {
    let currentQuestion = generateQuestion([0], [OperationType.Sum]);
    setCurrentQuestion(currentQuestion)
  }
  const [questionQuantity, setQuestionQuantity] = useState(20);
  const [questionCounter, setQuestionCounter] = useState(1);
  const storedQuestionCounter = localStorage.getItem("questionCounter")!;

  useEffect(() => {
    const settings = readSettings();
    setQuestionQuantity(settings.questionQuantity);
  }, []);

  return (
    <>
      {parseInt(storedQuestionCounter) > questionQuantity ? ( 
        <ScoreDisplay />
      ) : (
        <div className="container">
          <QuizDisplay question={currentQuestion} onQuestionDone={handleQuestionDone} />
          <div className='progress-bar-section'>
            <div className='progress-bar-text'>
              <div>00:23</div>
              <div>{questionCounter}/{questionQuantity}</div>
            </div>
            <div className='progress-bar-background'>
              <div className='progress-bar-background bar'></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default QuizPage