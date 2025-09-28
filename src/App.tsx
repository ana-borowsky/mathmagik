import { Route, HashRouter, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SettingsPage from './pages/SettingsPage';
import QuizPage from './pages/QuizPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='*' element={<MainPage />}></Route>
        <Route path='/settings' element={<SettingsPage />}></Route>
        <Route path='/quiz' element={<QuizPage />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
