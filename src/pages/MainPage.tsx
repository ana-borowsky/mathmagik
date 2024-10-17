import './MainPage.css'
import { useNavigate } from 'react-router-dom';

function MainPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="container no-scroll">
        <div className="content">
          <img className='logo logo-main' src="mathmagik_logo.svg" alt="Logotipo Mathmagik" />
          <div className='buttons-main'>
            <button className='button-main' onClick={() => (navigate("/settings"))}>OPÇÕES</button>
            <button className='button-main' onClick={() => (navigate("/quiz"))}>JOGAR</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainPage