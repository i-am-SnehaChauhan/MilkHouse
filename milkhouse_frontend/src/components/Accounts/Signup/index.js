import React, { useState, useEffect } from "react";
import Img from "../../../image/signup.png";
import { NavLink, useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { RecaptchaVerifier, signInWithPhoneNumber, PhoneAuthProvider } from "firebase/auth";
import { auth, db } from "../../../firebase";
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
import { doc, setDoc } from "firebase/firestore";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
  });
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const [isOtpPhase, setIsOtpPhase] = useState(false);
  const [submitBtnDisabled, setSubmitBtnDisabled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize the RecaptchaVerifier when the component mounts
    const recaptchaVerifier = new RecaptchaVerifier("recaptcha-container", {
      size: "invisible", // Use 'invisible' for non-intrusive captcha
      callback: (response) => {
        console.log("Recaptcha resolved:", response);
      },
      "expired-callback": () => {
        console.log("Recaptcha expired. Resetting...");
        recaptchaVerifier.reset(); // Reset recaptcha if expired
      },
    }, auth);

    // Cleanup the verifier on unmount
    return () => {
      recaptchaVerifier.clear(); // Cleanup on unmount
    };
  }, []);

  const handlePasswordToggle = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleConfirmPasswordToggle = () => {
    setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmission = async (e) => {
    e.preventDefault();

    // Basic validations here...
    if (!validateEmail(data.email)) {
      toast.error("Invalid email format.", { position: "top-center" });
      return;
    }

    if (!validatePhoneNumber(data.phone)) {
      toast.error("Phone number must be 10 digits.", { position: "top-center" });
      return;
    }

    if (!isValidPassword(data.password)) {
      toast.error("Password must be at least 8 characters long and include a number and special character.", { position: "top-center" });
      return;
    }

    if (data.password !== data.confirmpassword) {
      toast.error("Passwords do not match.", { position: "top-center" });
      return;
    }

    setSubmitBtnDisabled(true);

    try {
      // Use the initialized recaptchaVerifier
      const appVerifier = new RecaptchaVerifier("recaptcha-container", {}, auth);
      // Ensure that the phone number is formatted correctly
      const phoneNumber = `+91${data.phone}`;
      
      // Sign in with phone number
      const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      setVerificationId(confirmationResult.verificationId);
      setIsOtpPhase(true); // Move to OTP phase
    } catch (error) {
      console.error("ERROR", error.code, error.message); // Log the error code and message for debugging
      if (error.code === "auth/billing-not-enabled") {
        toast.error("Phone authentication requires billing to be enabled. Please enable billing in the Firebase console.", { position: "top-center" });
      } else {
        toast.error(`Error: ${error.message}`, { position: "top-center" });
      }
      setSubmitBtnDisabled(false);
    }
  };

  const handleOtpVerification = async () => {
    try {
      const credential = PhoneAuthProvider.credential(verificationId, otp);
      const userCredential = await auth.signInWithCredential(credential);
      const user = userCredential.user;

      // Add user details to Firestore
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: data.name,
        email: data.email,
        phone: data.phone,
        cartItems: [],
      });

      toast.success("Successfully signed up!", {
        position: "top-center",
      });

      setTimeout(() => {
        navigate("/dairy");
      }, 2000);
    } catch (error) {
      console.error("OTP Error", error.message);
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
          {/* Always render the recaptcha-container */}
          
          {!isOtpPhase ? (
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
              <FormInput
                value={data.phone}
                onChange={(e) => setData({ ...data, phone: e.target.value })}
                id="phoneInput"
                type="text"
                placeholder="Phone Number"
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
                  onChange={(e) => setData({ ...data, confirmpassword: e.target.value })}
                  id="PasswordInput"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                />
                <i onClick={handleConfirmPasswordToggle}
                  className="password-toggle-icon"
                  style={{
                    position: "absolute",
                    top: "37%",
                    right: "16%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                  }}
                >
                  {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                </i>
              </PasswordContainer>
              <div id="recaptcha-container"></div>
              <SignUpButton onClick={handleSubmission} disabled={submitBtnDisabled}>
                Sign Up
              </SignUpButton>
              <NavLink to="/signin">
                <p style={{
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "1rem",
                  lineHeight: "2rem",
                  color: "#403126",
                  
                }}>Already have an account? Login Here</p>
              </NavLink>
            </SignUpForm>
          ) : (
            <SignUpForm>
              <SignUph1>Verify OTP</SignUph1>
              <FormInput
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                id="otpInput"
                type="text"
                placeholder="Enter OTP"
              />
              <SignUpButton onClick={handleOtpVerification} disabled={submitBtnDisabled}>
                Verify OTP
              </SignUpButton>
            </SignUpForm>
          )}
        </SignUpContainer>
      </FormContainer>
    </>
  );
};

export default SignUp;
