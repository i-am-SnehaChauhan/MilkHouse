import React, { useState } from "react";
import Img from "../../../image/signin.png";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { signInWithEmailAndPassword, signInWithRedirect} from "firebase/auth";
import { auth, provider } from "../../../firebase";

import {
  FormContainer,
  SignInContainer,
  RightContainer,
  SignInForm,
  SignInButton,
  RightHeading,
  RightPara,
  SignInInput,
  SignInLabel,
  SignInh1,
  CheckBox,
  RememberMe,
  ForgotPassword,
  PasswordContainer,
  Image,
  Error,
  NewAccount,
  RadioContainer,
  RadioInput,
  RadioLabel,
} from "./SigninElements";
const SignIn = () => {
  const navigate = useNavigate();
  const Navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordToggle = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const [data, setData] = useState({});
  const [msg, setMsg] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const navigateToProfile = () => {
    navigate("/");
  };
  const sendPostRequest = async (e) => {
    if (data.password && data.password.length < 8) {
      setInvalid(true);
    }
    console.log("sendPostRequest is called!!!");
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigateToProfile();   
    } 
    catch (error) {
      toast.error(getErrorMessage(error), {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const getErrorMessage = (error) => {
    switch (error.code) {
      case "auth/invalid-email":
        return "Invalid email address.";
      case "auth/user-disabled":
        return "Your account has been disabled.";
      case "auth/user-not-found":
      case "auth/wrong-password":
        return "Invalid email or password.";
      default:
        return "An error occurred while signing in. Please try again.";
    }
  };  

  const setBack = () => {
    setInvalid(false);
    return;
  };
  if (invalid) {
    setTimeout(setBack, 5000);
  }

  const showInvalid = () => {
    return (
      <div class="alert alert-danger" role="alert">
        {msg}
      </div>
    );
  };
  const handleGoogleLogin = async () => {
    try {
      await signInWithRedirect(auth, provider);
      navigateToProfile();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      
        <FormContainer>
          <SignInContainer>
            <SignInForm onSubmit={sendPostRequest}>
              <SignInh1>Sign in</SignInh1>
              <RadioContainer>
                <RadioInput
                  type="radio"
                  id="user"
                  name="role"
                  value="user"
                  checked={!isAdmin}
                  onChange={() => setIsAdmin(false)}
                />
                <RadioLabel htmlFor="user">User</RadioLabel>

                <RadioInput
                  type="radio"
                  id="admin"
                  name="role"
                  value="admin"
                  checked={isAdmin}
                  onChange={() => setIsAdmin(true)}
                />
                <RadioLabel htmlFor="admin">Admin</RadioLabel>
              </RadioContainer>
              <SignInLabel htmlFor="email">
                {" "}
                {isAdmin ? "Admin Email" : "Email"}
              </SignInLabel>
              <SignInInput
                onChange={(e) => setData({ ...data, email: e.target.value })}
                type="email"
                placeholder="you@example.com"
                id="email"
                required
                aria-required="true"
              aria-label="Email"
              />
              <SignInLabel htmlFor="password">Password</SignInLabel>
              <PasswordContainer>
                <SignInInput
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                  type={showPassword ? "text" : "password"}
                  placeholder="at least 8 characters"
                  required
                  aria-required="true"
                aria-label="Password"
                />
                <i
                  className="password-toggle-icon"
                  style={{
                    position: "absolute",
                    top: "37%",
                    right: "16%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    color:'rgb(64, 49, 38)'
                  }}
                  onClick={handlePasswordToggle}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </i>
              </PasswordContainer>
              <RememberMe>
                <CheckBox type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe">Remember me</label>
              </RememberMe>

              <SignInButton
                type="submit"
              >
                Sign In
              </SignInButton>
              {/* {invalid && showInvalid()} */}
              <NavLink to="/signin/forgotPassword">
                <ForgotPassword>Forgot password?</ForgotPassword>
              </NavLink>
              <NavLink to="/signup">
                <NewAccount>New to MilkHouse? Create an account</NewAccount>
              </NavLink>
            </SignInForm>
            <div className='google-login-container' onClick={handleGoogleLogin}>
            <button className='login-button'>Sign in with Google</button>
            <img src={require('../../../assets/googleLogo.png')} style={{width:'2.5rem', position: 'absolute',left: '1rem',top: '0.375rem' }} alt='google' />
          </div>
          </SignInContainer>
          <RightContainer>
            <RightHeading>Hello, Friend!</RightHeading>
            <RightPara>Enter your details and let's get started.</RightPara>
            <Image src={Img} alt="Image Description" />
          </RightContainer>
        </FormContainer>
    </>
  );
};

export default SignIn;
