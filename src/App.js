import './App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './components/Singnin';
import Home from './components/Home';
import { Header } from './components/Header';

function App() {

  return (
    <div className="App">
        <Header />
        <Home></Home>
        <Router>
          <Routes>
          <Route exact path="/" element={<Signin />} />
          <Route  />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
