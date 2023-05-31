import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <Sidebar/>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
