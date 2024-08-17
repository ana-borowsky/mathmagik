import { useState, useEffect } from 'react';
import './QuizPage.css';
import { useNavigate } from 'react-router-dom';
import { shuffle } from '../backend/util';

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

export default WrongAnswerDisplay