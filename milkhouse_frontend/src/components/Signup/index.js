import React, { useState } from "react";
import Img from "../../image/signup.png";
import { NavLink } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

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
  RadioContainer,
  RadioInput,
  RadioLabel,
} from "./SignupElements";

const SignUp = () => {
  const Navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handlePasswordToggle = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleConfirmPasswordToggle = () => {
    setShowConfirmPassword(
      (prevShowConfirmPassword) => !prevShowConfirmPassword
    );
  };
  const paragraphStyles = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "1rem",
    lineHeight: "2rem",
    color: "#01bf71",
  };
  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    countryCode: "",
    contactNumber: "",
    password: "",
    confirmpassword: "",
  });

  const [errMessage, setErrMessage] = useState("");
  const [submitBtnDisabled, setSubmitBtnDisabled] = useState(false);

  const handleSubmission = () => {
    if (
      !data.name ||
      !data.username ||
      !data.email ||
      !data.contactNumber ||
      !data.password ||
      !data.confirmpassword
    ) {
      setErrMessage("Please fill all the fields");
      return;
    }
    if (data.password !== data.confirmpassword) {
      setErrMessage("Passwords do not match");
      return;
    }
    setErrMessage("");

    setSubmitBtnDisabled(true);
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setSubmitBtnDisabled(false);
        await updateProfile(user, {
          displayName: data.name,
        });
        Navigate("/signin");
      })
      .catch((error) => {
        setErrMessage(error.message);
        setSubmitBtnDisabled(false);
        console.log("Error-", error.message);
      });

    console.log(data);
  };

  return (
    <>
      <Container>
        <FormContainer>
          <LeftContainer>
            <LeftHeading>Welcome!</LeftHeading>
            <LeftPara>
              Hii, Sign-up now and be the part of Community.
            </LeftPara>
            <Image src={Img} alt="Sign Up Graphic" />
          </LeftContainer>
          <SignUpContainer>
            <SignUpForm>
              <SignUph1>Create account</SignUph1>
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
              <FormInput
                onChange={(e) => setData({ ...data, name: e.target.value })}
                id="FullNameInput"
                type="text"
                placeholder="Full Name"
              ></FormInput>
              <FormInput
                onChange={(e) => setData({ ...data, username: e.target.value })}
                id="usernameInput"
                type="text"
                placeholder="Username"
              ></FormInput>
              <FormInput
                onChange={(e) => setData({ ...data, email: e.target.value })}
                id="emailInput"
                type="email"
                placeholder="Email"
              ></FormInput>

              <PhoneContainer>
                <FormInput
                  onChange={(e) =>
                    setData({ ...data, countryCode: e.target.value })
                  }
                  id="CountryCode"
                  type="text"
                  placeholder="+XXX"
                ></FormInput>
                <FormInput
                  onChange={(e) =>
                    setData({ ...data, contactNumber: e.target.value })
                  }
                  id="ContactNumber"
                  type="text"
                  placeholder="Phone Number"
                  maxLength={10}
                ></FormInput>
              </PhoneContainer>
              <PasswordContainer>
                <FormInput
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
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
                  }}
                  onClick={handlePasswordToggle}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </i>
              </PasswordContainer>
              <PasswordContainer>
                <FormInput
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
              {/* <Captcha message={setTrackState} trackState={trackState}/> */}
              <SignUpButton
                type="submit"
                onClick={handleSubmission}
                disabled={submitBtnDisabled}
                //   style={{cursor:`${trackState ? "pointer": "not-allowed"}`}}
              >
                Sign Up
              </SignUpButton>

              <NavLink to="/signin">
                <p style={paragraphStyles}>
                  Already having an account? Login Here
                </p>
              </NavLink>
              <Error>{errMessage}</Error>
            </SignUpForm>
          </SignUpContainer>
        </FormContainer>
      </Container>
    </>
  );
};

export default SignUp;
