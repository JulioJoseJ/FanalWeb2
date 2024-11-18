import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateEntityPage from './pages/CreateEntityPage'
import EntityListPage from './pages/EntityListPage'
import './App.css';

const App : React.FC = ()=>{
  return(
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
                <Route path="/create" element={<CreateEntityPage />} />
                <Route path="/list" element={<EntityListPage />} />
      </Routes>
    </Router>
  )
}

export default App;
