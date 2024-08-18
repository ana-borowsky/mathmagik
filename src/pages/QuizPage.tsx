import { useState, useEffect } from 'react';
import './QuizPage.css';
import { OperationType, QuestionTemplate, Question } from '../backend/backend';
import { generateQuestion } from '../backend/database';
import ScoreDisplay  from './ScoreDisplay'
import QuizDisplay  from './QuizDisplay'
import ProgressBar from './QuizProgressBar'
import { readSettings } from '../backend/storage'
// import WrongAnswerDisplay  from './WrongAnswersDisplay'

function QuizPage() {
  let initialQuestion = generateQuestion([0], [OperationType.Sum]); //Generate question altered for testing purposes
  const [currentQuestion, setCurrentQuestion] = useState(initialQuestion)
  const [questionQuantity, setQuestionQuantity] = useState(20);
  const [questionCounter, setQuestionCounter] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState<Array<{ question: Question, answer: number }>>([]);

  const handleQuestionDone = (answer: number) => {
    if (answer != currentQuestion.result) {
      const newWrongAnswers = [...wrongAnswers, {
        question: currentQuestion,
        answer
      }]

      setWrongAnswers(newWrongAnswers);
    }

    let newQuestion = generateQuestion([0], [OperationType.Sum]);
    setCurrentQuestion(newQuestion)
    setQuestionCounter(questionCounter + 1);
  }

  useEffect(() => {
    const settings = readSettings();
    setQuestionQuantity(settings.questionQuantity);
  }, []);

  return (
    <>
      {questionCounter > questionQuantity ? ( 
        <ScoreDisplay />
      ) : (
        <div className="container">
          <QuizDisplay question={currentQuestion} onQuestionDone={handleQuestionDone} questionCounter={questionCounter}/>
          <ProgressBar questionCounter={questionCounter} questionQuantity={questionQuantity} />
        </div>
      )}
    </>
  );
}

export default QuizPage
