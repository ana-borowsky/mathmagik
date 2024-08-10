import React from 'react'
import { useState, useEffect } from 'react';
import './SettingsPage.css'
import { useNavigate } from 'react-router-dom';

type ButtonName = 'subtraction' | 'division' | 'sum' | 'multiplication';

function SettingsPage() {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(20);
  const [difficulty, setDifficulty] = useState(2);
  const [questionQuantity, setQuestionQuantity] = useState(20);
  const [questionTypes, setQuestionTypes] = useState<Record<ButtonName, boolean>>({
    subtraction: false,
    division: false,
    sum: true,
    multiplication: false
  });

 
  const toggleButton = (buttonName: ButtonName) => {
    setQuestionTypes((prevState) => ({
      ...prevState,
      [buttonName]: !prevState[buttonName], 
    }));
  };

  useEffect(() => {
    const storageTime = localStorage.getItem("timer")!; //solve null possibility
    const storageDifficulty = localStorage.getItem("difficulty")!;
    const storageQuestionQuantity = localStorage.getItem("questionQuantity")!;
    const storageQuestionTypes = localStorage.getItem('questionTypes');
    setTimer(parseInt(storageTime));
    setDifficulty(parseInt(storageDifficulty));
    setQuestionQuantity(parseInt(storageQuestionQuantity));
    setQuestionTypes(storageQuestionTypes ? JSON.parse(storageQuestionTypes) : {
      subtraction: false,
      dividision: false,
      sum: false,
      multiplication: false
    });

  }, []);

  function decreaseTime() { //solve negative int possibility
    setTimer(timer - 1);
  }

  function increaseTime() {
    setTimer(timer + 1);
  }

  function decreaseDifficulty() {
    setDifficulty(difficulty - 1);
  }

  function increaseDifficulty() {
    setDifficulty(difficulty + 1);
  }

  function menu() {
    alert("Configurações não salvas!");
    navigate('/main');
  }

  function save() {
    const atLeastOneActive = Object.values(questionTypes).some(value => value);

    localStorage.setItem("timer", (timer).toString());
    localStorage.setItem("difficulty", (difficulty).toString());
    localStorage.setItem("questionQuantity", (questionQuantity).toString());

    if (atLeastOneActive) {
      localStorage.setItem('questionTypes', JSON.stringify(questionTypes));
      alert("Configurações salvas!");
    } else {
      alert("Escolha pelo menos um tipo de quesão!");
    }
  }

  return (
    <>
      <div className='settings'>
        <a onClick={() => (navigate('/main'))}>
          <img className='logo logo-settings' src='mathmagik_logo.svg' alt='Logotipo Mathmagik' />
        </a>
        <div className='title'>
          <h1>Opções</h1>
        </div>
        <div className="settings-containter">
          <div className='settings-title'>
            <h2>Timer:</h2>
            <div className='timer'>
              <button className='round-btn minus dark-purple'>
                <div onClick={() => decreaseTime()} className='signal'>
                  -
                </div>
              </button>
              <div className='settings-rectangle blue'>{timer}s</div>
              <button className='round-btn sum dark-purple'>
                <div onClick={() => increaseTime()} className='signal'>
                  +
                </div>
              </button>
            </div>
          </div>
          <div className='settings-title'>
            <h2>Dificuldade:</h2>
            <div className="timer">
              <button className='round-btn minus dark-purple'>
                <div onClick={() => decreaseDifficulty()} className='signal'>
                  -
                </div>
              </button>
              <div className='settings-rectangle orange'>{difficulty}</div>
              <button className='round-btn sum dark-purple'>
                <div onClick={() => increaseDifficulty()} className='signal'>
                  +
                </div>
              </button>
            </div>
          </div>
          <div className='settings-title'>
            <h2>Quantidade de questões:</h2>
            <select
              className="questionQuantity"
              id="questionsQuantity"
              name="questionsQuantity"
              value={questionQuantity}
              onChange={(e) => setQuestionQuantity(parseInt(e.target.value))}
            >
              {Array.from({ length: 20 }, (_, i) => (
                <option key={i} value={(i + 1) * 10}>
                  {(i + 1) * 10}
                </option>
              ))}
            </select>
          </div>
          <div className='settings-title'>
            <h2>Questões:</h2>
            <button
            className={`round-btn ${questionTypes.subtraction ? 'green' : 'inactive'}`}
            onClick={() => toggleButton('subtraction')}
          >
              <div className='signal-small'>
                -
              </div>
            </button>
            <button
            className={`round-btn ${questionTypes.division ? 'blue' : 'inactive'}`}
            onClick={() => toggleButton('division')}
          >
              <div className='signal'>
                ÷
              </div>
            </button>
            <button
            className={`round-btn ${questionTypes.sum ?  'pink' : 'inactive'}`}
            onClick={() => toggleButton('sum')}
          >
              <div className='signal'>
                +
              </div>
            </button>
            <button
            className={`round-btn ${questionTypes.multiplication ? 'orange' : 'inactive'}`}
            onClick={() => toggleButton('multiplication')}
          >
              <div className='signal'>
                ×
              </div>
            </button>
          </div>
        </div>
        <div className='buttons'>
          <button className='button-std' onClick={menu}>MENU</button>
          <button className='button-std' onClick={save}>SALVAR</button>
        </div>
      </div >
    </>
  )
}

export default SettingsPage