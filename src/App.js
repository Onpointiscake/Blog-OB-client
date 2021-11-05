import React from 'react';
import Home from './components/Home'
import ReadArticle from './components/ReadArticle'
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateArticle from './components/CreateArticle';

function App() {
  return (
    <BrowserRouter>
    <div className="App App-header">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/Article/:id_articulo" element={ <ReadArticle /> } />
        <Route path="/CreateArticle" element={ <CreateArticle /> } />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
