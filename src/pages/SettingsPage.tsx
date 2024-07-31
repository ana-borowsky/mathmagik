import React from 'react'
import './SettingsPage.css'
import { useNavigate } from 'react-router-dom';

function SettingsPage() {
  const navigate = useNavigate();

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
              <div className='signal'>
              -
              </div>
            </button>
            <div className='timer-rectangle purple'>30s</div>
            <button className='round-btn sum'>
              <div className='signal'>
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
              <div className='value right'>10</div>
            </div>
            <div className='field'>
              <input type='range' min='0' max='10'></input>
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
            <button className='round-btn types'>
              <div className='signal-big yellow'>
              %
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className='gap'></div>
      <div className='buttons'>
        <button className='button-std' onClick={()=>(navigate('/main'))}>MENU</button>
        <button className='button-std' onClick={()=>(navigate('/main'))}>SALVAR</button>
      </div>
      <div className='gap'></div>
    </>
  )
}

export default SettingsPage