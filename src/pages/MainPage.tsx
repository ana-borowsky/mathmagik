import './MainPage.css'
import { useNavigate } from 'react-router-dom';

function MainPage() {
  const navigate = useNavigate();

  return (
    <>
      <img className='logo' src="mathmagik_logo.png" alt="Logotipo Mathmagik"/>
      <div className='btn'>
        <button className='button-main' onClick={()=>(navigate("/settings"))}>OPÇÕES</button>
        <button className='button-main' onClick={()=>(navigate("/quiz"))}>JOGAR</button>
      </div>
    </>
  )
}

export default MainPage