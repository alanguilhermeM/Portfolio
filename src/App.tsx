import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css';
// import Header from './components/Header';
import { About } from './components/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <About /> } />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
