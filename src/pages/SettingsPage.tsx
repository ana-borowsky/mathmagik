import React from 'react'
import { useState, useEffect } from 'react';
import './SettingsPage.css'
import { useNavigate } from 'react-router-dom';

function SettingsPage() {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(20);
  const [difficulty, setDifficulty] = useState(2);
  const [questionQuantity, setQuestionQuantity] = useState(20);

  useEffect(() => {
    const storageTime = localStorage.getItem("timer")!; //solve null possibility
    const storageDifficulty = localStorage.getItem("difficulty")!;
    const storageQuestionQuantity = localStorage.getItem("questionQuantity")!;
    setTimer(parseInt(storageTime));
    setDifficulty(parseInt(storageDifficulty));
    setQuestionQuantity(parseInt(storageQuestionQuantity));
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
    alert("Configurações salvas!");
    localStorage.setItem("timer", (timer).toString());
    localStorage.setItem("difficulty", (difficulty).toString());
    localStorage.setItem("questionQuantity", (questionQuantity).toString());
    navigate('/main');
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
              <button className='round-btn types'>
                <div className='signal-small green'>
                  -
                </div>
              </button>
              <button className='round-btn types'>
                <div className='signal purple'>
                  ÷
                </div>
              </button>
              <button className='round-btn types'>
                <div className='signal pink'>
                  +
                </div>
              </button>
              <button className='round-btn types'>
                <div className='signal blue'>
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