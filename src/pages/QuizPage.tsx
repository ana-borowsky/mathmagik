import { useState, useEffect } from 'react';
import './QuizPage.css';
import { OperationType, QuestionTemplate, Question } from '../backend/backend';
import { generateQuestion } from '../backend/database';
import { useNavigate } from 'react-router-dom';
import { tsParticles } from '@tsparticles/engine';
import { loadConfettiPreset } from '@tsparticles/preset-confetti';
import { shuffle } from '../backend/util';

function QuizPage() {
  let initialQuestion = generateQuestion([0], [OperationType.Sum]); //Generate question altered for testing purposes
  const [currentQuestion, setCurrentQuestion] = useState(initialQuestion)
  const handleQuestionDone = () => {
    let currentQuestion = generateQuestion([0], [OperationType.Sum]);
    setCurrentQuestion(currentQuestion)
  }

  return ( 
    <QuizDisplay question={currentQuestion} onQuestionDone={handleQuestionDone} />
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

function QuizDisplay({ question, onQuestionDone }: Props) {
  const navigate = useNavigate();
  const [wrongAnswerCounter, setWrongAnswerCounter] = useState(1);
  const [wrongAnswers, setWrongAnswers] = useState<Record<number, { question: string, result: number, answer: number }>>({});
  const [buttonCSS, setButtonCSS] = useState<string[]>([]);
  const [questionCSS, setQuestionCSS] = useState<string[]>([]);

  useEffect(() => {
    const shuffledButtonCSS = shuffle<string>(['quiz-button pink', 'quiz-button blue', 'quiz-button orange', 'quiz-button yellow', 'quiz-button green', 'quiz-button purple']);
    const shuffledQuestionCSS = shuffle<string>(['pink', 'purple', 'yellow', 'green', 'blue', 'orange']);
    setButtonCSS(shuffledButtonCSS);
    setQuestionCSS(shuffledQuestionCSS);
  }, [question]);

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
    } else {
      const newWrongAnswerCounter = wrongAnswerCounter + 1;

      const newWrongAnswers = {
        ...wrongAnswers,
        [wrongAnswerCounter]: {
          "question": question.questionValues[0] + " + " + question.questionValues[1] + " = ",
          "result": question.result,
          "answer": question.options[buttonId]
        }
      };

      localStorage.setItem('wrongAnswers', JSON.stringify(newWrongAnswers));

      setWrongAnswers(newWrongAnswers);
      setWrongAnswerCounter(newWrongAnswerCounter);
    }

    setTimeout(() => {
      onQuestionDone();
    }, 1000);
  }

  return (
    <div className="container">
      <div className="quiz-container">
        <a onClick={() => navigate('/main')}>
          <img className='logo' src='mathmagik_logo.svg' alt='Logotipo Mathmagik' />
        </a>
        <h1>Questão</h1>
        <div className='rectangle question-rectangle'>
          <div className={questionCSS[0]}>{question.questionValues[0]}</div>
          <div className={questionCSS[1]}>+</div>
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
    </div>
  );
}

function ScoreDisplay() {
  const navigate = useNavigate();
  const [totalTime, setTotalTime] = useState(126); // Set useState to 0. 126 used for display purposes only. Total time must come from quiz page
    const [questionQuantity, setQuestionQuantity] = useState(20); //get from settings
  const averageTimePerQuestion = totalTime / questionQuantity

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
            <div className='pink'>{numberOfWrongAnswers}</div>
            <div className='purple'>/</div>
            <div className='yellow'>{questionQuantity}</div>
          </div>
          <div className='details'>
            <div className='rectangle small'>
              <div className='text blue'>{Math.round(errorPercentage)}%</div>
            </div>
            <div>
              <h2>de acerto</h2>
            </div>
          </div>
          <div className='details'>
            <div className='rectangle small'>
              <div className='text orange'>{totalTime}</div>
            </div>
            <div>
              <h2>Tempo total</h2>
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
          <button className='button-std' onClick={() => (navigate('/quiz'))}>ERROS</button>
          <button className='button-std' onClick={() => (navigate('/quiz'))}>REPLAY</button>
        </div>
      </div>
    </div>
  )
}

function WrongAnswerDisplay() {
  const navigate = useNavigate();

  let questionCSS: string[] = ['pink', 'purple', 'yellow', 'green', 'blue', 'orange'];

  const storedWrongAnswers = localStorage.getItem('wrongAnswers');
  const wrongAnswers: Record<number, { question: string, result: number, answer: number }> = storedWrongAnswers 
    ? JSON.parse(storedWrongAnswers)
    : {}; 

  const numberOfWrongAnswers = Object.keys(wrongAnswers).length;

  const assignUniqueColors = (parts: string[], colors: string[]): string[] => {
    let shuffledColors = colors.slice(0, questionCSS.length);
    shuffledColors = shuffle(shuffledColors);

    return parts.map((part, index) => {
      return `<span class="${shuffledColors[index]}">${part}</span>`;
    });
  };

  return (
    <div className='container wrong-answers-container'>
      <a onClick={() => navigate('/main')}>
        <img className='logo' src='mathmagik_logo.svg' alt='Logotipo Mathmagik' />
      </a>
      <div className='score-title'>
        <h1>Erros: {numberOfWrongAnswers}</h1>
      </div>
      <div className='wrong-answers'>
        {Array.from({ length: numberOfWrongAnswers }, (_, i) => i + 1).map((key) => {
          const questionParts = `${wrongAnswers[key].question}${wrongAnswers[key].result}`.split(' ');

          const coloredQuestion = assignUniqueColors(questionParts, questionCSS).join(' ');

          return (
            <div key={key} className="wrong-answer">
              <div className='rectangle wrong-question-rectangle'>
                <div dangerouslySetInnerHTML={{ __html: coloredQuestion }}></div>
              </div>
              <div className='answer'>
                <h2>Sua resposta: {wrongAnswers[key].answer}</h2>
                <h2>Diferença: {Math.abs(wrongAnswers[key].result - wrongAnswers[key].answer)}</h2>
              </div>
            </div>
          );
        })}
      </div>
      <div className="buttons">
        <button className='button-std' onClick={() => navigate('/main')}>VOLTAR</button>
        <button className='button-std' onClick={() => navigate('/main')}>REPLAY</button>
      </div>
    </div>
  );
}


export default QuizPage