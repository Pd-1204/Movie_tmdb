import './App.css';
import React from 'react';
import { HashRouter,Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

import MoviePage from './pages/MoviePage';
import Latest from './pages/Latest';

import Popular from './pages/Popular';
import TopRated from './pages/TopRated';



console.log(process.env.REACT_APP_API_KEY);
function App() {
  return (
    <HashRouter>
        <Routes>
            <Route exact path="/" element={< HomePage/>}/>
            <Route exact path="/movie/:movieId" element={< MoviePage/>}/>
            <Route exact path="/latest" element={< Latest/>}/>
            <Route exact path="/popular" element={< Popular/>}/>
            <Route exact path="/top" element={< TopRated/>}/>
            <Route exact path="/upcoming" element={< TopRated/>}/>
        </Routes>
    </HashRouter>
    
  );
}



export default App;
