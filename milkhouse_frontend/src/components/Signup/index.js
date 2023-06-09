

import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import Image from '../../image/signupImg.png';
import {
		Container,
		FormHead,
		FormSection,
		LeftData,
		RightData,
		
		
	} from './SignupElements';
	const SignUp = () => {

		const history = useNavigate();
	
		const [inpval, setInpval] = useState({
			name: "",
			email: "",
			date: "",
			password: ""
		})
	
	   
	
		const [data,setData] = useState([]);
		console.log(inpval);
	
		const getdata = (e) => {
			// console.log(e.target.value);
	
	
			const { value, name } = e.target;
			// console.log(value,name);
	
	
			setInpval(() => {
				return {
					...inpval,
					[name]: value
				}
			})
	
		}
	
		const addData = (e) => {
			e.preventDefault();
	
			const { name, email, date, password } = inpval;
	
			if (name === "") {
				toast.error(' name field is requred!',{
					position: "top-center",
				});
			} else if (email === "") {
				 toast.error('email field is requred',{
					position: "top-center",
				});
			} else if (!email.includes("@")) {
				 toast.error('plz enter valid email addres',{
					position: "top-center",
				});
			} else if (date === "") {
				 toast.error('date field is requred',{
					position: "top-center",
				});
			} else if (password === "") {
				 toast.error('password field is requred',{
					position: "top-center",
				});
			} else if (password.length < 5) {
				 toast.error('password length greater five',{
					position: "top-center",
				});
			} else {
				console.log("data added succesfully");
				history("/login")
				localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));
	
			}
	
		}
	

// const SignUp = () => {
  return (
	<>
		<Container>
			<FormSection>
				<LeftData>
					<FormHead>Create Account</FormHead>
					<Form>
						<Form.Group className="mb-3 col-lg-9" controlId="formBasicEmail">
							<Form.Control type="text"name='name' onChange={getdata} placeholder="Enter your Name" />
						</Form.Group>

						<Form.Group className="mb-3 col-lg-9" controlId="formBasicEmail">
							<Form.Control type="email"name='email' onChange={getdata} placeholder="Enter email" />
						</Form.Group>

						<Form.Group className="mb-3 col-lg-9" controlId="formBasicEmail">
							<Form.Control onChange={getdata} name='date' type="date"  />
						</Form.Group>

						<Form.Group className="mb-3 col-lg-9" controlId="formBasicPassword">
							<Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
						</Form.Group>
						
						<Button variant="primary" className="ml-5 col-lg-6" style={{background:"rgb(67,185,127)"}} onClick={addData} type="submit">
							Submit
						</Button>
					</Form>
					
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

export default SignUp;
              
