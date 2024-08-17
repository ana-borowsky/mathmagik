import { useState, useEffect } from 'react';
import './QuizPage.css';
import { OperationType, QuestionTemplate, Question } from '../backend/backend';
import { generateQuestion } from '../backend/database';
// import WrongAnswerDisplay  from './WrongAnswersDisplay'
import ScoreDisplay  from './ScoreDisplay'
import QuizDisplay  from './QuizDisplay'

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
    const storageQuestionQuantity = localStorage.getItem("questionQuantity")!;
    setQuestionQuantity(parseInt(storageQuestionQuantity));
  }, []);

  return (
    <>
      {parseInt(storedQuestionCounter) > questionQuantity ? (
        <ScoreDisplay />
      ) : (
        <QuizDisplay question={currentQuestion} onQuestionDone={handleQuestionDone} />
      )}
    </>
  );
}

export default QuizPage