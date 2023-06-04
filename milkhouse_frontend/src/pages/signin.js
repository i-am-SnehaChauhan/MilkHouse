import React from 'react'
import SignIn from '../components/Signin';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'

const SigninPage = () => {
  return (
    <div>
        <Navbar/>
        <SignIn/>  
        <Footer/> 
    </div>
  );
};

export default SigninPage;