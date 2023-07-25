import React, { useState } from "react";
import Img from "../../image/signin.png";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";

import {
  NewContainer,
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
  const Navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordToggle = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errMessage, setErrMessage] = useState("");
  const [submitBtnDisabled, setSubmitBtnDisabled] = useState(false);

  const handleSubmission = () => {
    if (!data.email || !data.password) {
      setErrMessage("Please fill all the fields");
      return;
    }
    setErrMessage("");

    setSubmitBtnDisabled(true);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        setSubmitBtnDisabled(false);
        Navigate("/");
      })
      .catch((error) => {
        setSubmitBtnDisabled(false);
        console.log("Error-", error.message);
      });

    console.log(data);
  };

  return (
    <>
      <NewContainer>
        <FormContainer>
          <SignInContainer>
            <SignInForm>
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
                require
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
                />
                <i
                  className="password-toggle-icon"
                  style={{
                    position: "absolute",
                    top: "37%",
                    right: "16%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
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
                disabled={submitBtnDisabled}
                type="submit"
                onClick={handleSubmission}
              >
                Sign In
              </SignInButton>
              <Error>{errMessage}</Error>
              <NavLink to="/signin/forgotPassword">
                <ForgotPassword>Forgot password?</ForgotPassword>
              </NavLink>
              <NavLink to="/signup">
                <NewAccount>New to MilkHouse? Create an account</NewAccount>
              </NavLink>
            </SignInForm>
          </SignInContainer>
          <RightContainer>
            <RightHeading>Hello, Friend!</RightHeading>
            <RightPara>Enter your details and let's get started.</RightPara>
            <Image src={Img} alt="Image Description" />
          </RightContainer>
        </FormContainer>
      </NewContainer>
    </>
  );
};

export default SignIn;
