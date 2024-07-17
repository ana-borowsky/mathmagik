import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage';
import SettingsPage from './pages/SettingsPage';
import QuizPage from './pages/QuizPage';

function App() {
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
