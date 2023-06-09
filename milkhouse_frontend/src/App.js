import React from 'react';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages';
//import SignupPage from './pages/signup';
//import SigninPage from './pages/signin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
       {/* <Route exact path="/signin" element={<SigninPage />} />
        <Route exact path="/signup" element={<SignupPage />} />*/}
        
      </Routes>
    </Router>
  );
};

export default App;
