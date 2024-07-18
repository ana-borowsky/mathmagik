import React from 'react'
import './SettingsPage.css'
import { useNavigate } from 'react-router-dom';

function SettingsPage() {
  const navigate = useNavigate();

  return (
    <>
      <a onClick={()=>(navigate('/main'))}>
        <img className='logo logo-settings' src='mathmagik_logo.png' alt='Logotipo Mathmagik'/>
      </a>

      <h1>Opções</h1>
      <div className="gap"></div>
      <div className='settings'>
        <h2>Timer</h2>
        <div className="timer">
          <button className="timer-btn minus">
            <img src="subtraction_blue.png" alt="subtração"/>
          </button>
          <div className="timer-rectangle">30s</div>
          <button className="timer-btn sum">
            <img src="sum_blue.png" alt="adição"/>
          </button>
        </div>
      </div>

      <div className='settings'>
        <h2>Dificuldade</h2>
        <div className='range'>
          <div className="difficulty-text">
            <div className='value left'>0</div>
            <div className='value right'>10</div>
          </div>
          <div className='field'>
            <input type='range' min='0' max='10'></input>
          </div>
        </div>
      </div>

      <div className='settings'>
        <h2>Quantidade de questões</h2>
        <div className='range'>
          <div className="difficulty-text">
            <div className='value left'>0</div>
            <div className='value right'>200</div>
          </div>
          <div className='field'>
            <input type='range' min='0' max='200'></input>
          </div>
        </div>
      </div>

      <div className='settings'>
        <h2>Tipos de questões</h2>
        <div className="question-types">
          <button className="timer-btn sum">
            <img src="subtraction_green.png" alt="contas de subtração"/>
          </button>
          <button className="timer-btn sum">
            <img src="division_purple.png" alt="contas de divisão"/>
          </button>
          <button className="timer-btn sum">
            <img src="sum_blue.png" alt="contas de soma"/>
          </button>
          <button className="timer-btn sum">
            <img src="multiplication_pink.png" alt="contas de multiplicação"/>
          </button>
          <button className="timer-btn sum">
            <img src="percentage_yellow.png" alt="contas de porcentagem"/>
          </button>
        </div>
      </div>
      <div className="gap"></div>
      <div className='buttons'>
        <button className='button-std' onClick={()=>(navigate('/main'))}>MENU</button>
        <button className='button-std' onClick={()=>(navigate('/main'))}>SALVAR</button>
      </div>
      <div className="gap"></div>
    </>
  )
}

export default SettingsPage