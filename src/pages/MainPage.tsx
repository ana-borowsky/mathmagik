import './MainPage.css'
import { useNavigate } from 'react-router-dom';

function MainPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <img className='logo' src="mathmagik_logo.svg" alt="Logotipo Mathmagik" style={{display:"block"}}/>
        <div className='buttons'>
          <button className='button-std' onClick={()=>(navigate("/settings"))}>OPÇÕES</button>
          <button className='button-std' onClick={()=>(navigate("/quiz"))}>JOGAR</button>
        </div>
      </div>
    </>
  )
}

export default MainPage