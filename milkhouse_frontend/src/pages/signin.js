import React from 'react'
import SignIn from '../components/Accounts/Signin';
import Navbar from '../components/Navbar'

const SigninPage = () => {
  return (
    <div>
      <Navbar/>
        <SignIn/>  
    </div>
  );
};

export default SigninPage;