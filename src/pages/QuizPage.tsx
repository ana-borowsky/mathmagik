import { useState, useEffect } from 'react';
import './QuizPage.css';
import { OperationType, QuestionTemplate, Question } from '../backend/backend';
import { GenerateQuestion } from '../backend/database';
import { useNavigate } from 'react-router-dom';
import { tsParticles } from '@tsparticles/engine';
import { loadConfettiPreset } from '@tsparticles/preset-confetti';
import { shuffle, getRandomValue } from '../backend/util';

function QuizPage() {
  let initialQuestion = GenerateQuestion([0], [OperationType.Sum]);
  const [currentQuestion, setCurrentQuestion] = useState(initialQuestion)
  const handleQuestionDone = () => {
    let currentQuestion = GenerateQuestion([0], [OperationType.Sum]);
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
    }

    setTimeout(() => {
      onQuestionDone()
    }, 1500)
  }

  let buttonCSS: string[] = ['quiz-button pink', 'quiz-button blue', 'quiz-button orange', 'quiz-button yellow', 'quiz-button green']
  buttonCSS = shuffle<string>(buttonCSS);

  let questionCSS: string[] = ['pink', 'purple', 'yellow', 'green', 'blue']
  questionCSS = shuffle<string>(questionCSS);

  return (
    //   <div className="container">
    //     <div className="quiz-container">
    //       <a onClick={() => (navigate('/main'))}>
    //         <img className='logo' src='mathmagik_logo.svg' alt='Logotipo Mathmagik' />
    //       </a>
    //       <h1>Questão</h1>
    //       <div className='rectangle question-rectangle'>
    //         <div className={questionCSS[0]}>{question.questionValues[0]}</div>
    //         <div className={questionCSS[1]}>+</div>
    //         <div className={questionCSS[2]}>{question.questionValues[1]}</div>
    //       </div>
    //       <div className='quiz-buttons-section'>
    //         <div className='quiz-buttons'>
    //           <button onClick={() => checkAnswer(question.options[0])} className={buttonCSS[0]}>{question.options[0]}</button>
    //           <button onClick={() => checkAnswer(question.options[1])} className={buttonCSS[1]}>{question.options[1]}</button>
    //         </div>
    //         <div className='quiz-buttons'>
    //           <button onClick={() => checkAnswer(question.options[2])} className={buttonCSS[2]}>{question.options[2]}</button>
    //           <button onClick={() => checkAnswer(question.options[3])} className={buttonCSS[3]}>{question.options[3]}</button>
    //         </div>
    //       </div>

    //       <div className='progress-bar-section'>
    //         <div className='progress-bar-text'>
    //           <div>00:23</div>
    //           <div>1/90</div>
    //         </div>
    //         <div className='progress-bar-background'>
    //           <div className='progress-bar-background bar'></div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    <ScoreDisplay />
  )

}

function ScoreDisplay() {
  const navigate = useNavigate();
  const [totalTime, setTotalTime] = useState(126); // Set useState to 0. 126 used for display purposes only. Total time must come from quiz page
  const [wrongQuestions, setWrongQuestions] = useState(121); // Set useState to 0. 121 used for display purposes only. Wrog answers must come from quiz page
  const [questionQuantity, setQuestionQuantity] = useState(20); //get from settings
  const averageTimePerQuestion = totalTime / questionQuantity
  const errorPercentage = wrongQuestions / questionQuantity * 100

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
            <div className='pink'>{wrongQuestions}</div>
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

  const wrongAnswers: Record<number, { question: string, result: number, answer: number }> = {
    1: {
      "question": "7 x 9 = ",
      "result": 63,
      "answer": 56
    },
    2: {
      "question": "8 x 4 = ",
      "result": 32,
      "answer": 36
    },
    3: {
      "question": "6 x 7 = ",
      "result": 42,
      "answer": 47
    },
    4: {
      "question": "5 x 5 = ",
      "result": 25,
      "answer": 20
    },
    5: {
      "question": "9 x 9 = ",
      "result": 81,
      "answer": 72
    },
    6: {
      "question": "4 x 6 = ",
      "result": 24,
      "answer": 30
    },
    7: {
      "question": "3 x 8 = ",
      "result": 24,
      "answer": 20
    },
    8: {
      "question": "2 x 7 = ",
      "result": 14,
      "answer": 12
    },
    9: {
      "question": "10 x 3 = ",
      "result": 30,
      "answer": 33
    },
    10: {
      "question": "6 x 8 = ",
      "result": 48,
      "answer": 42
    }
  };

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