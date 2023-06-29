import React, { useState } from "react";
import Img from "../../image/signin.png";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../../firebase";

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
} from "./SigninElements";

const SignIn = () => {
  const Navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errMessage, setErrMessage] = useState("");
  const [submitBtnDisabled, setSubmitBtnDisabled] = useState(false);

  const handleSubmission = () => {
    if(!data.email|| !data.password){
      setErrMessage("Please fill all the fields");
      return;
    }
    setErrMessage("");

    setSubmitBtnDisabled(true);
    signInWithEmailAndPassword(auth,data.email, data.password)
      .then(async(userCredential) => {
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
              <SignInLabel htmlFor="email">Email</SignInLabel>
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
                  placeholder="at least 8 characters"
                  require
                />
                {/* {passwordType === "password" ? (
                  <i
                    className="fa-solid fa-eye-slash"
                    id="eye"
                    style={{
                      position: "absolute",
                      top: "35%",
                      right: "18%",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                    }}
                  ></i>
                ) : (
                  <i
                    className="fa-solid fa-eye"
                    id="eye"
                    style={{
                      position: "absolute",
                      top: "35%",
                      right: "18%",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                    }}
                    onClick={handleclick}
                  ></i>
                )} */}
              </PasswordContainer>
              <RememberMe>
                <CheckBox type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe">Remember me</label>
              </RememberMe>

              <SignInButton disabled={submitBtnDisabled} type="submit" onClick={handleSubmission}>Sign In</SignInButton>
              <Error>{errMessage}</Error>
              <NavLink to="/signin/forgotPassword">
                <ForgotPassword>Forgot password?</ForgotPassword>
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
