import './MainPage.css'
import { useNavigate } from 'react-router-dom';

function MainPage() {
  const navigate = useNavigate();

  return (
    <>
      <img className='logo' src="mathmagik_logo.png" alt="Logotipo Mathmagik"/>
      <button onClick={()=>(navigate("/settings"))}>OPÇÕES</button>
      <button onClick={()=>(navigate("/editor"))}>CRIAR</button>
      <button onClick={()=>(navigate("/quiz"))}>JOGAR</button>
    </>
  )
}

export default MainPage