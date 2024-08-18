import { useState, useEffect } from 'react';
import './QuizPage.css';
import { OperationType, QuestionTemplate, Question } from '../backend/backend';
import { useNavigate } from 'react-router-dom';
import { tsParticles } from '@tsparticles/engine';
import { loadConfettiPreset } from '@tsparticles/preset-confetti';
import { shuffle } from '../backend/util';

interface Props {
  question: Question;
  onQuestionDone: () => void;
}

enum QuestionState {
  Unanswered,
  Correct,
  Wrong
}

function QuizDisplay({ question, onQuestionDone }: Props) {
  const navigate = useNavigate();
  const [wrongAnswerCounter, setWrongAnswerCounter] = useState(1);
  const [questionCounter, setQuestionCounter] = useState(1);
  const [wrongAnswers, setWrongAnswers] = useState<Record<number, { question: string, result: number, answer: number }>>({});
  const [questionState, setQuestionState] = useState<QuestionState>(QuestionState.Unanswered);
  const [buttonCSS, setButtonCSS] = useState<string[]>([]);
  const [questionCSS, setQuestionCSS] = useState<string[]>([]);
  const [questionQuantity, setQuestionQuantity] = useState(20);

  useEffect(() => {
    const shuffledButtonCSS = shuffle<string>(['quiz-button pink', 'quiz-button blue', 'quiz-button orange', 'quiz-button yellow', 'quiz-button green']);
    const shuffledQuestionCSS = shuffle<string>(['pink', 'yellow', 'green', 'blue', 'orange']);
    setButtonCSS(shuffledButtonCSS);
    setQuestionCSS(shuffledQuestionCSS);
    const storageQuestionQuantity = localStorage.getItem("questionQuantity")!;
    setQuestionQuantity(parseInt(storageQuestionQuantity));
  }, [question]);

  localStorage.setItem('questionCounter', JSON.stringify(questionCounter));

  async function checkAnswer(option: number, buttonId: number) {
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

      setQuestionState(QuestionState.Correct);
      setQuestionCounter(questionCounter + 1);
      localStorage.setItem('questionCounter', JSON.stringify(questionCounter));

    } else {
      const newWrongAnswerCounter = wrongAnswerCounter + 1;

      const newWrongAnswers = {
        ...wrongAnswers,
        [wrongAnswerCounter]: {
          "question": question.questionValues[0] + " " +  question.signal + " " + question.questionValues[1] + " = ",
          "result": question.result,
          "answer": question.options[buttonId]
        }
      };

      localStorage.setItem('wrongAnswers', JSON.stringify(newWrongAnswers));
      setWrongAnswers(newWrongAnswers);
      setWrongAnswerCounter(newWrongAnswerCounter);
      setQuestionState(QuestionState.Wrong);
      setQuestionCounter(questionCounter + 1);
      localStorage.setItem('questionCounter', JSON.stringify(questionCounter));
    }

    setTimeout(() => {
      onQuestionDone();
    }, 300);
  }

  return (
    <div className="quiz-container">
      <a onClick={() => navigate('/main')}>
        <img className='logo' src='mathmagik_logo.svg' alt='Logotipo Mathmagik' />
      </a>
      <h1>Questão: {questionCounter}</h1>
      <div className='rectangle question-rectangle'>
        <div className={questionCSS[0]}>{question.questionValues[0]}</div>
        <div className={questionCSS[1]}>{question.signal}</div>
        <div className={questionCSS[2]}>{question.questionValues[1]}</div>
      </div>
      <div className='quiz-buttons-section'>
        <div className='quiz-buttons'>
          <button id='0' onClick={() => checkAnswer(question.options[0], 0)} className={buttonCSS[0]}>{question.options[0]}</button>
          <button id='1' onClick={() => checkAnswer(question.options[1], 1)} className={buttonCSS[1]}>{question.options[1]}</button>
        </div>
        <div className='quiz-buttons'>
          <button id='2' onClick={() => checkAnswer(question.options[2], 2)} className={buttonCSS[2]}>{question.options[2]}</button>
          <button id='3' onClick={() => checkAnswer(question.options[3], 3)} className={buttonCSS[3]}>{question.options[3]}</button>
        </div>
      </div>
    </div>
  );
}

export default QuizDisplay