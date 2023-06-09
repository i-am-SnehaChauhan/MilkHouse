import React,{useEffect} from 'react';
import './App.css';
import Home from './pages';
import SignupPage from './pages/signup';
import SigninPage from './pages/signin';
import ContactPage from './pages/contact';
import DairyPage from './pages/dairy';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
       <Route exact path="/signin" element={<SigninPage />} />
        <Route exact path="/signup" element={<SignupPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/dairy" element ={<DairyPage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
