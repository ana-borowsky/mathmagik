import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import MainPage from './pages/MainPage';
import SettingsPage from './pages/SettingsPage';
import QuizPage from './pages/QuizPage';

function App() {

  useEffect(() => {
    const defaultSettings = {
      timer: 20,
      difficulty: 3,
      questionQuantity: 20,
      questionTypes: {
        subtraction: false,
        division: false,
        sum: true,
        multiplication: false,
      }
    };

    if (!localStorage.getItem('timer')) {
      localStorage.setItem('timer', defaultSettings.timer.toString());
    }

    if (!localStorage.getItem('difficulty')) {
      localStorage.setItem('difficulty', defaultSettings.difficulty.toString());
    }

    if (!localStorage.getItem('questionQuantity')) {
      localStorage.setItem('questionQuantity', defaultSettings.questionQuantity.toString());
    }

    if (!localStorage.getItem('questionTypes')) {
      localStorage.setItem('questionTypes', JSON.stringify(defaultSettings.questionTypes));
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<MainPage/>}></Route>
        <Route path='/settings' element={<SettingsPage/>}></Route>
        <Route path='/quiz' element={<QuizPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
