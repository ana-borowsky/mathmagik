import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Route, BrowserRouter, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<MainPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
