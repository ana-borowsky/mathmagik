import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Route, BrowserRouter, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage';
import SettingsPage from './pages/SettingsPage';
import QuizPage from './pages/QuizPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<MainPage/>}></Route>
        <Route path='/settings' element={<SettingsPage/>}></Route>
        <Route path='quiz' element={<QuizPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
