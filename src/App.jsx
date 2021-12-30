import './App.css';
import React from 'react';
import { HashRouter,Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

console.log(process.env.REACT_APP_API_KEY);
function App() {
  return (
    <HashRouter><Routes><Route exact path="/" element={< HomePage/>}/></Routes></HashRouter>
    
  );
}

export default App;
