import React, { useState } from "react";
import Img from "../../image/signup.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../../firebase";
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
} from "./SignupElements";

const SignUp = () => {
  const Navigate = useNavigate();
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
    if(!data.name || !data.username || !data.email || !data.contactNumber || !data.password || !data.confirmpassword){
      setErrMessage("Please fill all the fields");
      return;
    }
    if(data.password !== data.confirmpassword){
      setErrMessage("Passwords do not match");
      return;
    }
    setErrMessage("");

    setSubmitBtnDisabled(true);
    createUserWithEmailAndPassword(auth,data.email, data.password)
      .then(async(userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setSubmitBtnDisabled(false);
        await updateProfile(user, {
          displayName: data.name,
        })
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
              Sign up to be a part of the community, because UMatter.
            </LeftPara>
            <Image src={Img} alt="Sign Up Graphic" />
          </LeftContainer>
          <SignUpContainer>
            <SignUpForm>
              <SignUph1>Create account</SignUph1>
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
                required
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
                  id="PasswordInput"
                  // type={passwordType}
                  placeholder="Password"
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
                  onClick={handleclick}
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
                ></i> */}
                {/* )} */}
              </PasswordContainer>
              <PasswordContainer>
                <FormInput
                  onChange={(e) =>
                    setData({ ...data, confirmpassword: e.target.value })
                  }
                  id="PasswordInput"
                  // type={passwordType}
                  placeholder="Confirm Password"
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
                  onClick={handleclick}
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
              {/* <Captcha message={setTrackState} trackState={trackState}/> */}
              <SignUpButton
                type="submit"
                onClick={handleSubmission}
                disabled={submitBtnDisabled}
                //   style={{cursor:`${trackState ? "pointer": "not-allowed"}`}}
              >
                Sign Up
              </SignUpButton>
              <Error>{errMessage}</Error>
            </SignUpForm>
          </SignUpContainer>
        </FormContainer>
      </Container>
    </>
  );
};

export default SignUp;
