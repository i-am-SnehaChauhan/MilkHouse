import React, { useState } from "react";
import Img from "../../../image/signup.png";
import { NavLink, useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Container,
  FormContainer,
  LeftContainer,
  SignUpContainer,
  SignUpForm,
  LeftHeading,
  LeftPara,
  SignUph1,
  FormInput,
  PhoneContainer,
  SignUpButton,
  PasswordContainer,
  Image,
  Error,
} from "./SignupElements";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [submitBtnDisabled, setSubmitBtnDisabled] = useState(false);
  const navigate = useNavigate();

  const handlePasswordToggle = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleConfirmPasswordToggle = () => {
    setShowConfirmPassword(
      (prevShowConfirmPassword) => !prevShowConfirmPassword
    );
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    const passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmission = async (e) => {
    e.preventDefault();
    if (!data.name || !data.email || !data.password || !data.confirmpassword) {
      toast.error("Please fill all the fields", {
        position: "top-center",
      });
      return;
    }

    if (!validateEmail(data.email)) {
      toast.error("Please enter a valid email address", {
        position: "top-center",
      });
      return;
    }

    if (!isValidPassword(data.password)) {
      toast.error(
        "Password must be at least 8 characters long, include a number and a special character",{
          position: "top-center",
        }
      );
      return;
    }

    if (data.password !== data.confirmpassword) {
      toast.error("Passwords do not match", {
        position: "top-center",
      });
      return;
    }

    setSubmitBtnDisabled(true);

    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      toast.success("Successfully signed up!", {
        position: "top-center",
      });
      setTimeout(() => {
        navigate("/dairy");
      }, 2000);
    } catch (error) {
      toast.error(`${error.message}`, {
        position: "top-center",
      });
      setSubmitBtnDisabled(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <FormContainer>
        <LeftContainer>
          <LeftHeading>Welcome!</LeftHeading>
          <LeftPara>Hii, Sign-up now and be part of the Community.</LeftPara>
          <Image src={Img} alt="Sign Up Graphic" />
        </LeftContainer>
        <SignUpContainer>
          <SignUpForm>
            <SignUph1>Create account</SignUph1>
            <FormInput
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              id="FullNameInput"
              type="text"
              placeholder="Full Name"
            />
            <FormInput
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              id="emailInput"
              type="email"
              placeholder="Email"
            />
            <PasswordContainer>
              <FormInput
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                type={showPassword ? "text" : "password"}
                id="PasswordInput"
                placeholder="Password"
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
                  color: "rgb(64, 49, 38)",
                }}
                onClick={handlePasswordToggle}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </i>
            </PasswordContainer>
            <PasswordContainer>
              <FormInput
                value={data.confirmpassword}
                onChange={(e) =>
                  setData({ ...data, confirmpassword: e.target.value })
                }
                id="PasswordInput"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
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
                onClick={handleConfirmPasswordToggle}
              >
                {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
              </i>
            </PasswordContainer>
            <SignUpButton
              type="submit"
              onClick={handleSubmission}
              disabled={submitBtnDisabled}
            >
              Sign Up
            </SignUpButton>

            <NavLink to="/signin">
              <p
                style={{
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "1rem",
                  lineHeight: "2rem",
                  color: "#403126",
                }}
              >
                Already have an account? Login Here
              </p>
            </NavLink>
          </SignUpForm>
        </SignUpContainer>
      </FormContainer>
    </>
  );
};

export default SignUp;
