
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'
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
					<FormHead>Create Your Account</FormHead>
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
					<FormP>Already have an Account <span><NavLink to="/signin">SignIn</NavLink></span></FormP>
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
              
