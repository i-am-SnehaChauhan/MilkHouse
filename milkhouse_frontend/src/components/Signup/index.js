
// import React from 'react';
// import {
// 	Container,
// 	Icons,
// 	FormButton,
// 	FormContent,
// 	Form,
// 	FormH1,
// 	FormInput,
// 	FormWrap,
// 	Text,
// } from './SignupElements';
// import { useState } from 'react';
// // import Navbar from '../Navbar';

// const SignUp = () => {

	

//   const [passwordType, setPasswordType] = useState('password');
//   const [data, setData] = useState({});
//   const handleclick = (e) => {
//     e.preventDefault();
//     if (passwordType === 'text') {
//       setPasswordType('password');
//     } else {
//       setPasswordType('text');
//     }
//   };
//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const validatePassword = (password) => {
//     // Password validation: at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one digit
//     const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
//     return passwordRegex.test(password);
//   };
//   const validateusername =  (username) => {
//     // username  should contains only alphabets
//     const usernameRegex = /[A-Za-z]{3}/;
//     return usernameRegex.test(username);
//   };

//   const validatename =  (name) => {
//     // name  should contains only alphabets
//     const nameRegex = /[A-Za-z]{3}/;
//     return nameRegex.test(name);
//   };
//   const validatecontactNumber =  (contactNumber) => {
//     // name  should contains only alphabets
//     const contactNumberRegex = /^\d{10}$/;
//     return contactNumberRegex.test(contactNumber);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validate form inputs
//     const { email, username, name, contactNumber, password,confirmpassword} = data;

//     if (!email || !validateEmail(email)) {
//       alert('Please enter a valid email address.');
//       return;
//     }

//     if (!username || !validateusername(username)) {
//       alert('Please enter a username(contains only alphabets).');
//       return;
//     }

//     if (!name  || !validatename(name)) {
//       alert('Please enter your full name.');
//       return;
//     }

//     if (!contactNumber || !validatecontactNumber(contactNumber)) {
//       alert('Please enter a contact number/verify once');
//       return;
//     }

//     if (!password || !validatePassword(password)) {
//       alert(
//         'Please enter a password with at least 8 characters including one uppercase letter, one lowercase letter, and one digit.'
//       );
//       return;
//     }
//     if (password !== confirmpassword) {
//       alert('Passwords do not match.');
//       return;
//     }
    
//     sendPostRequest();
//   };

// 	const sendPostRequest = async (e) => {
// 		console.log('sendPostRequest exicuted!!!');
// 		const response = await fetch('http://localhost:8081/SignUp', {
// 			mode: 'cors',
// 			method: 'POST',
// 			body: JSON.stringify(data),
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 		});
// 		console.log(response);
// 		const result = await response.json();
// 		console.log(result);
// 	};

// 	return (
// 		<>
// 			<Container>
				
// 				<FormWrap>
// 					<FormContent>
// 						<Form onSubmit={handleSubmit} action="#">
// 							<FormH1>Create an Account</FormH1>

// 							<FormInput
// 								onChange={(e) =>
// 									setData({ ...data, name: e.target.value })
// 								}
// 								id="FullNameInput"
// 								placeholder="Enter your Full Name"
// 								type="text"
// 								size="42"
// 							></FormInput>
// 							<br />
// 								<br/>


// 							<FormInput
// 								onChange={(e) =>
// 									setData({ ...data, username: e.target.value })
// 								}
// 								id="usernameInput"
// 								placeholder="Enter Username"
// 								type="text"
// 								size="42"
// 							></FormInput>
// 							<br />
// 							<br/>

// 							<FormInput
// 								onChange={(e) =>
// 									setData({ ...data, email: e.target.value })
// 								}
// 								id="emailInput"
// 								placeholder="email@example.com"
// 								type="email"
// 								size="42"
// 								require
// 							/>
// 							<br />
// 							<br />
// 							<div style={{float:'left'}}>
// 								<FormInput
// 								onChange={(e) =>
// 									setData({ ...data, countryCode: e.target.value })
// 								}
// 								id="CountryCode"
// 								placeholder="+XXX"
// 								type="text"
// 								size="1"
// 							></FormInput>
// 						</div>
// 								<div style={{float:'right'}}>
// 							<FormInput
// 								onChange={(e) =>
// 									setData({ ...data, contactNumber: e.target.value })
// 								}
// 								id="ContactNumber"
// 								placeholder="Enter phone number"
// 								type="text"
// 								size="32"
// 							></FormInput>

// 						</div>

// 						<br/>
// 						<br/>
// 						<br/>
// 							<div style={{ position: 'relative' }}>
// 								<FormInput
// 									onChange={(e) =>
// 										setData({ ...data, password: e.target.value })
// 									}
// 									id="PasswordInput"
// 									placeholder="Enter Password"
// 									type={passwordType}
// 									size="42"
// 								/>
// 								{passwordType === 'password' ? (
// 									<i
// 										className="fa-solid fa-eye-slash"
// 										id="eye"
// 										style={{
// 											position: 'absolute',
// 											top: '50%',
// 											right: '10px',
// 											transform: 'translateY(-50%)',
// 											cursor: 'pointer',
// 										}}
// 										onClick={handleclick}
// 									></i>
// 								) : (
// 									<i
// 										className="fa-solid fa-eye"
// 										id="eye"
// 										style={{
// 											position: 'absolute',
// 											top: '50%',
// 											right: '10px',
// 											transform: 'translateY(-50%)',
// 											cursor: 'pointer',
// 										}}
// 										onClick={handleclick}
// 									></i>
// 								)}
// 							</div>
// 							<br />
					

// 							<div style={{ position: 'relative' }}>
// 								<FormInput
// 									onChange={(e) =>
// 										setData({ ...data, confirmpassword: e.target.value })
// 									}
// 									id="PasswordInput"
// 									placeholder="Re Enter Password"
// 									type={passwordType}
// 									size="42"
// 								/>
// 								{passwordType === 'password' ? (
// 									<i
// 										className="fa-solid fa-eye-slash"
// 										id="eye"
// 										style={{
// 											position: 'absolute',
// 											top: '50%',
// 											right: '10px',
// 											transform: 'translateY(-50%)',
// 											cursor: 'pointer',
// 										}}
// 										onClick={handleclick}
// 									></i>
// 								) : (
// 									<i
// 										className="fa-solid fa-eye"
// 										id="eye"
// 										style={{
// 											position: 'absolute',
// 											top: '50%',
// 											right: '10px',
// 											transform: 'translateY(-50%)',
// 											cursor: 'pointer',
// 										}}
// 										onClick={handleclick}
// 									></i>
// 								)}
// 							</div>


// 							<button
// 								onClick={handleclick}
// 								style={{
// 									width: 'fit-content',
// 									position: 'absolute',
// 									right: '38rem',
// 									bottom: '20rem',
// 									background: 'transparent',
// 									border: 'none',
// 								}}
// 							></button>
// 							<FormButton type="submit">Continue</FormButton>
// 							<br/>
// 							<Text>Forgot password?</Text>
// 						</Form>
// 					</FormContent>
// 				</FormWrap>
// 			</Container>
// 		</>
// 	);
// };

// export default SignUp;

import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import Image from '../../image/signup_img.avif';
import {
		Container,
		FormHead,
		FormSection,
		LeftData,
		RightData,
		FormP,
		
	} from './SignupElements';

const SignUp = () => {
  return (
	<>
		<Container>
			<FormSection>
				<LeftData>
					<FormHead>Create Account</FormHead>
					<Form>
						<Form.Group className="mb-3 col-lg-9" controlId="formBasicEmail">
							<Form.Control type="text" placeholder="Enter your Name" />
						</Form.Group>

						<Form.Group className="mb-3 col-lg-9" controlId="formBasicEmail">
							<Form.Control type="email" placeholder="Enter email" />
						</Form.Group>

						<Form.Group className="mb-3 col-lg-9" controlId="formBasicEmail">
							<Form.Control type="date"  />
						</Form.Group>

						<Form.Group className="mb-3 col-lg-9" controlId="formBasicPassword">
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>
						
						<Button variant="primary" className="ml-5 col-lg-6" style={{background:"rgb(67,185,127)"}} type="submit">
							Submit
						</Button>
					</Form>
					<FormP>Already have an Account <span>Sign In</span></FormP>
				</LeftData>
				<RightData>
					<div className="sign_img mt-3">
						<img src={Image} style={{maxWidth:400}} alt=""/>
					</div>
				</RightData>
			</FormSection>
		</Container>
	</>
  )
}

export default SignUp
              