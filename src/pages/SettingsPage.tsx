import { useState, useEffect } from 'react';
import './SettingsPage.css'
import { useNavigate } from 'react-router-dom';
import { readSettings, writeSettings } from '../backend/storage'

type ButtonName = 'subtraction' | 'division' | 'sum' | 'multiplication';

function SettingsPage() {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(20);
  const [difficulty, setDifficulty] = useState(3);
  const [questionQuantity, setQuestionQuantity] = useState(20);
  const [questionTypes, setQuestionTypes] = useState<Record<ButtonName, boolean>>({
    subtraction: false,
    division: false,
    sum: true,
    multiplication: false
  });

  const toggleButton = (buttonName: ButtonName) => {
    setQuestionTypes((prevState) => ({
      ...prevState,
      [buttonName]: !prevState[buttonName],
    }));
  };

  useEffect(() => {
    const settings = readSettings();

    setTimer(settings.timer);
    setDifficulty(settings.difficulty);
    setQuestionQuantity(settings.questionQuantity);
    setQuestionTypes(settings.questionTypes);

  }, []);

  function modifyTime(value: number) {
    let newTime = timer + value;
    if (newTime >= 1 ) {
      setTimer(newTime);
    }
  }

  function modifyDifficulty(value: number) {
    let newDifficulty = difficulty + value;
    if (newDifficulty >= 1 && newDifficulty <= 3) {
      setDifficulty(newDifficulty);
    }
  }

  function menu() {
    save();
    navigate('/main');
  }

  function save() {
    const atLeastOneActive = Object.values(questionTypes).some(value => value);

    if (atLeastOneActive) {

      let settings = {
        timer,
        difficulty,
        questionQuantity,
        questionTypes
      };

      writeSettings(settings)

      // alert("Configurações salvas!");
      navigate('/main');
    } else {
      alert("Escolha pelo menos um tipo de quesão!");
    }
  }

  return (
    <>
      <div className="container">
      <div className="gap"></div>
        <div className='settings'>
          <a className='logo' onClick={() => menu()}>
            <img src='mathmagik_logo.svg' alt='Logotipo Mathmagik' width='200rem' />
          </a>
          <div className='title'>
            <h1>Opções</h1>
          </div>
          <div className='settings-title'>
            <h2>Tempo para responder:</h2>
            <div className='timer'>
              <button className='round-btn minus dark-purple' onClick={() => modifyTime(-1)}>
                <div className='signal'>
                  -
                </div>
              </button>
              <div className='settings-rectangle blue'>{timer == 0 ? "OFF" : timer}</div>
              <button className='round-btn sum dark-purple' onClick={() => modifyTime(1)}>
                <div className='signal'>
                  +
                </div>
              </button>
            </div>
          </div>
          <div className='settings-title'>
            <h2>Dificuldade:</h2>
            <div className="timer">
              <button className='round-btn minus dark-purple' onClick={() => modifyDifficulty(-1)}>
                <div className='signal'>
                  -
                </div>
              </button>
              <div className='settings-rectangle orange'>{difficulty}</div>
              <button className='round-btn sum dark-purple' onClick={() => modifyDifficulty(1)}>
                <div className='signal'>
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
            <h2>Tipos de questões:</h2>
            <div className="timer">
              <button
                className={`round-btn ${questionTypes.subtraction ? 'purple' : 'inactive'}`}
                onClick={() => toggleButton('subtraction')}
              >
                <div className='signal-small'>
                  -
                </div>
              </button>
              <button
                className={`round-btn ${questionTypes.division ? 'green' : 'inactive'}`}
                onClick={() => toggleButton('division')}
              >
                <div className='signal'>
                  ÷
                </div>
              </button>
              <button
                className={`round-btn ${questionTypes.sum ? 'blue' : 'inactive'}`}
                onClick={() => toggleButton('sum')}
              >
                <div className='signal'>
                  +
                </div>
              </button>
              <button
                className={`round-btn ${questionTypes.multiplication ? 'pink' : 'inactive'}`}
                onClick={() => toggleButton('multiplication')}
              >
                <div className='signal'>
                  ×
                </div>
              </button>
            </div>
          </div>
          <div className='buttons'>
            <button className='button-std' onClick={save}>SALVAR</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SettingsPage