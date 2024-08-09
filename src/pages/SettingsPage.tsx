import React from 'react'
import { useState, useEffect } from 'react';
import './SettingsPage.css'
import { useNavigate } from 'react-router-dom';

function SettingsPage() {
  const navigate = useNavigate();

  const [timer, setTimer] = useState(20);
  const [difficulty, setDifficulty] = useState(2);

  function decreaseTime() {
    setTimer(timer - 1);
  }

  function increaseTime() {
    setTimer(timer + 1);
  }

  function save() {
    console.log(difficulty)
    localStorage.setItem("timer", (timer).toString());
    localStorage.setItem("difficulty", (difficulty).toString());
  }

  return (
    <>
      <a onClick={()=>(navigate('/main'))}>
        <img className='logo logo-settings' src='mathmagik_logo.svg' alt='Logotipo Mathmagik'/>
      </a>
      <div className='settings'>
        <div className='title'>
          <h1>Opções</h1>
        </div>
        <div className='setting'>
          <h2>Timer:</h2>
          <div className='timer'>
            <button className='round-btn minus'>
              <div onClick={() => decreaseTime()} className='signal'>
              -
              </div>
            </button>
            <div className='timer-rectangle purple'>{timer}s</div>
            <button className='round-btn sum'>
              <div onClick={() => increaseTime()} className='signal'>
              +
              </div>
            </button>
          </div>
        </div>
        <div className='setting'>
          <h2>Dificuldade:</h2>
          <div className='range'>
            <div className='difficulty-text'>
              <div className='value left'>0</div>
              <div className='value right'>5</div>
            </div>
            <div className='field'>
              <input id='difficulty' type='range' min='0' max='5' value={difficulty} onChange={(e) => setDifficulty(parseInt(e.target.value))}/>
            </div>
          </div>
        </div>
        <div className='setting'>
          <h2>Quantidade de questões:</h2>
          <div className='range'>
            <div className='difficulty-text'>
              <div className='value left'>0</div>
              <div className='value right'>200</div>
            </div>
            <div className='field'>
              <input type='range' min='0' max='200'></input>
            </div>
          </div>
        </div>
        <div className='setting'>
          <h2>Tipos de questões:</h2>
          <div className='question-types'>
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
      </div>
      <div className='gap'></div>
      <div className='buttons'>
        <button className='button-std' onClick={()=>(navigate('/main'))}>MENU</button>
        <button className='button-std' onClick={save}>SALVAR</button>
      </div>
      <div className='gap'></div>
    </>
  )
}

export default SettingsPage