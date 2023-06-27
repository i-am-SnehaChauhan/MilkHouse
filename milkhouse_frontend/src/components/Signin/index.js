import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Image from '../../image/signin.png';
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom';



import {
	Container,
	FormHead,
	FormSection,
	LeftData,
	RightData,
	FormP
	
} from './SigninElements';


const SignIn = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

    const [data, setData] = useState([]);
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

        const getuserArr = localStorage.getItem("useryoutube");
        console.log(getuserArr);

        const { email, password } = inpval;
    }
	
	return (
		<>
			<Container>
			<FormSection>
				<LeftData>
					<FormHead>Login</FormHead>
                    <Form>	
						<Form.Group className="mb-3 " controlId="formBasicEmail">
                        <label  class="form-label">Email address</label>
							<Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
						</Form.Group>

						<Form.Group className="mb-3 " controlId="formBasicPassword">
                        <label class="form-label">Password</label>
							<Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
						</Form.Group>
						<button class="btn btn-primary" type="button">Submit</button>
					</Form>
                    <FormP>Don't have an Account?<span><NavLink to="/signup">Register Now</NavLink></span></FormP>
				</LeftData>
				<RightData>
					<div className="sign_img mt-3">
						<img src={Image} style={{maxWidth:400}} alt=""/>
					</div>
				</RightData>
			</FormSection>
		</Container>
		</>
	);
};

export default SignIn;