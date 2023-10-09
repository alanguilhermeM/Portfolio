import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css';
// import Header from './components/Header';
import { About } from './components/About';
import { Tecnologies } from './components/Tecnologies';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <About /> } />
        <Route path="/tecnologies" element={ <Tecnologies /> } />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
