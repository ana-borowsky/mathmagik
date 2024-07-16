import './MainPage.css'
import { useNavigate } from 'react-router-dom';

function MainPage() {
  const navigate = useNavigate();
  return (
    <div className='page-root'>
      <h1>Main Page</h1>
      <a onClick={()=>(navigate("/settings"))}><h2>Opções</h2></a>
      <a onClick={()=>(navigate("/editor"))}><h2>Criar</h2></a>
      <a onClick={()=>(navigate("/quiz"))}><h2>Jogar</h2></a>
    </div>
  )
}

export default MainPage