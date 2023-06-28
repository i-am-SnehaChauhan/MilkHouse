import React, { useState } from "react";
import Img from "../../image/signin.png";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

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
  Image
} from "./SigninElements";

const SignIn = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  const [data, setData] = useState([]);
  console.log(inpval);

  const getdata = (e) => {
    // console.log(e.target.value);

    const { value, name } = e.target;
    // console.log(value,name);

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };
  const addData = (e) => {
    e.preventDefault();

    const getuserArr = localStorage.getItem("useryoutube");
    console.log(getuserArr);

    const { email, password } = inpval;
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
                // onChange={(e) => setData({ ...data, email: e.target.value })}
                type="email"
                placeholder="you@example.com"
                // id="email"
                require
              />
              <SignInLabel htmlFor="password">Password</SignInLabel>
              <PasswordContainer>
                <SignInInput
                //   onChange={(e) =>
                //     setData({ ...data, password: e.target.value })
                //   }
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

              <SignInButton type="submit">Sign In</SignInButton>
              {/* {invalid && showInvalid()} */}
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
