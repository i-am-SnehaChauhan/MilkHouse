import React, { useState } from "react";
import Img from "../../../image/signin.png";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider, db } from "../../../firebase"; // Include db
import { doc, setDoc, getDoc } from "firebase/firestore"; // Firestore methods

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
  Separator,
  SeparatorText,
  PasswordContainer,
  Image,
  FormFooter,
  NewAccount,
  RadioContainer,
  RadioInput,
  RadioLabel,
} from "./SigninElements";

const SignIn = () => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const [data, setData] = useState({});
  const [invalid, setInvalid] = useState(false);

  const navigateToProfile = () => {
    navigate("/dairy");
  };

  const sendPostRequest = async (e) => {
    if (data.password && data.password.length < 8) {
      setInvalid(true);
    }
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigateToProfile();
    } catch (error) {
      toast.error(getErrorMessage(error), {
        position: "top-center",
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
  };
  if (invalid) {
    setTimeout(setBack, 5000);
  }

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Reference to the user's document in Firestore
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      // Check if the user document exists
      if (!userSnap.exists()) {
        // Create a new document if it doesn't exist
        await setDoc(userRef, {
          uid: user.uid,
          name: user.displayName,
          email: user.email,
          phone: "",
          cart: [], // Initialize an empty cart
        });
      }

      navigateToProfile();
    } catch (err) {
      console.log(err);
      toast.error("An error occurred while signing in with Google.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <FormContainer>
        <SignInContainer>
          <SignInForm onSubmit={sendPostRequest}>
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
                onChange={(e) => setData({ ...data, password: e.target.value })}
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
                  color: "rgb(64, 49, 38)",
                }}
                onClick={handlePasswordToggle}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </i>
            </PasswordContainer>
            <FormFooter>
              <NavLink to="/signin/forgotPassword">
                <ForgotPassword>Forgot password?</ForgotPassword>
              </NavLink>
            </FormFooter>
            <SignInButton type="submit">Sign in</SignInButton>
          </SignInForm>
          <Separator>
            <SeparatorText>or</SeparatorText>
          </Separator>
          <div className="google-login-container" onClick={handleGoogleLogin}>
            <button className="login-button">
              <img
                src={require("../../../assets/googleLogo.png")}
                alt="Google"
              />
              Sign in with Google
            </button>
          </div>
          <NavLink to="/signup">
            <NewAccount>New to MilkDelights? Create an account</NewAccount>
          </NavLink>
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
