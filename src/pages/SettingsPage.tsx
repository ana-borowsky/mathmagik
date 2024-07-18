import React from 'react'
import { useNavigate } from 'react-router-dom';

function SettingsPage() {
  const navigate = useNavigate();

  return (
    <>
      <a onClick={()=>(navigate('/main'))}>
        <img className='logo-settings' src='mathmagik_logo.png' alt='Logotipo Mathmagik'/>
      </a>

      <h1>Opções</h1>
      <div className="settings">
        <h2>Timer</h2>
      </div>

      <div className="settings">
        <h2>Dificuldade</h2>
      </div>

      <div className="settings">
        <h2>Quantidade de questões</h2>
      </div>

      <div className="settings">
        <h2>Tipos de questões</h2>
      </div>

      <div className="buttons">
        <button className='button-std' onClick={()=>(navigate('/quiz'))}>MENU</button>
        <button className='button-std' onClick={()=>(navigate('/quiz'))}>SALVAR</button>
      </div>
    </>
  )
}

export default SettingsPage