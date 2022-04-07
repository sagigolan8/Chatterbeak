import React, { useContext, useEffect, useRef, useState } from 'react';
import {
	FormColumn,
	FormWrapper,
	FormInput,
	FormSection,
	FormRow,
	FormLabel,
	FormInputRow,
	FormButton,
	FormTitle,
	FormConfirmation,
	FormConfirmationWrapper,
	FormLinks,
	FormLogOutButton,
} from '../Form/FormStyles';
import { Container } from '../../globalStyles';
import { Checkbox } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { errorNotification } from '../../services/alerts';
import { UserContext } from '../Context/UserContext';
import { deleteCookie, validateSignUp } from '../../services/request';

const SignUp = () => {
    const { user, setUser, initialState} = useContext(UserContext) 
	const termsRef = useRef()
	const history = useHistory()
	useEffect(()=>{
		setTimeout(() => {
			window.scrollTo({
				top:window.innerHeight*0.13,
				left:0,
				behavior:"smooth",
				})
		}, 700);
	},[])

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [terms, setTerms] = useState('');
	const [confirmPass, setConfirmPass] = useState('');

	const handleLogOut = (id) => {
		setUser(initialState)
		deleteCookie(id)
		history.push('/')
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		const resultError = await validateSignUp({ name, email, password, confirmPass,terms});	
		if (resultError) {
			return errorNotification(resultError,'top-center')
		}
        // localStorage.setItem('signup',true)
		setUser({
			...user,
			name,
			email,
			password
		  })
		// setError(null);
		// setSuccess('success');
		history.push('/verification')
		console.log(user)
	};

	const formData = [
		{ label: 'Name', value: name, onChange: ({ target: { value } }) => setName(value), type: 'text' },
		{ label: 'Email', value: email, onChange: ({ target: { value } }) => setEmail(value), type: 'email' },
		{
			label: 'Password',
			value: password,
			onChange: ({ target: { value } }) => setPassword(value),
			type: 'password',
		},
		{
			label: 'Confirm Password',
			value: confirmPass,
			onChange: ({ target: { value } }) => setConfirmPass(value),
			type: 'password',
		},
	];
	return (
		<FormSection>
			<Container>
				<FormRow>
				{
					user.name
					?
					<FormColumn relative small>
						<FormTitle style={{textTransform:'capitalize'}}>Welcome {user.name} </FormTitle>
						<FormLogOutButton onClick={()=>handleLogOut(user._id)}>
						Logout
						</FormLogOutButton>
					</FormColumn>
					:
					<FormColumn small>
					<FormTitle>Sign up</FormTitle>
					<FormWrapper onSubmit={handleSubmit}>
						{formData.map((el, index) => (
							<FormInputRow key={index}>
								<FormLabel>{el.label}</FormLabel>
								<FormInput
									type={el.type}
									placeholder={`Enter ${el.label.toLocaleLowerCase()}`}
									value={el.value}
									onChange={el.onChange}
								/>
							</FormInputRow>
						))}
						<FormConfirmationWrapper>
						<FormConfirmation>
						<Checkbox style={{color:'#eaeaea'}} onChange={()=>setTerms(termsRef.current.firstChild.checked)} ref={termsRef}/> 
							I confirm that I have read and accept the 
							<FormLinks target="_blank" onClick={()=>history.push('/policy')} href='#' > Privacy Policy</FormLinks>&nbsp;and&nbsp;
							<FormLinks target="_blank" onClick={()=>history.push('/terms')} href='#' >Terms of Use</FormLinks>.		
						</FormConfirmation>
						<Checkbox style={{color:'#eaeaea'}}/>
						Yes, please keep me updated on Chatterbeak news, events and offers.
						</FormConfirmationWrapper>
						<FormButton type="submit">Sign Up</FormButton>
					</FormWrapper>
						{/* {success && (
							<>
								{success}
							</>
						)} */}
					{/* <ToastContainer/> */}
				</FormColumn>
				}
				</FormRow>
			</Container>
		</FormSection>
	);
};

export default SignUp;
