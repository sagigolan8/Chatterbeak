import React, { useEffect, useRef, useState } from 'react';
import {
	FormColumn,
	FormWrapper,
	FormInput,
	FormSection,
	FormRow,
	FormLabel,
	FormInputRow,
	FormMessage,
	FormButton,
	FormTitle,
	FormConfirmation,
	FormConfirmationWrapper,
	FormLinks,
} from '../Form/FormStyles';
import { Container } from '../../globalStyles';
import validateForm from './validateSignUp';
import { Checkbox } from '@mui/material';
import { Redirect } from 'react-router-dom';
import { successNotification } from '../../services/alerts';
const SignUp = () => {
	const termsRef = useRef()

	useEffect(()=>{
		window.scrollTo(0, window.innerHeight*0.1)
	},[])

	const [terms, setTerms] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPass, setConfirmPass] = useState('');
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const resultError = await validateForm({ name, email, password, confirmPass,terms });	
		if (resultError) {
			return setError(resultError);
		}
		setTerms(!terms)
		setName('');
		setPassword('');
		setConfirmPass('');
		setError(null);
		setSuccess('success');
	};

	const messageVariants = {
		hidden: { y: 30, opacity: 0 },
		animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
	};

	const formData = [
		{ label: 'Name', value: name, onChange1: ({ target: { value } }) => setName(value), type: 'text' },
		{ label: 'Email', value: email, onChange1: ({ target: { value } }) => setEmail(value), type: 'email' },
		{
			label: 'Password',
			value: password,
			onChange1: ({ target: { value } }) => setPassword(value),
			type: 'password',
		},
		{
			label: 'Confirm Password',
			value: confirmPass,
			onChange1: ({ target: { value } }) => setConfirmPass(value),
			type: 'password',
		},
	];
	return (
		<FormSection>
			<Container>
				<FormRow>
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
										onChange={el.onChange1}
									/>
								</FormInputRow>
							))}
							<FormConfirmationWrapper>
							<FormConfirmation>
							<Checkbox onChange={()=>setTerms(termsRef.current.firstChild.checked)} ref={termsRef}/> 
								I confirm that I have read and accept the 
								<FormLinks target="_blank" href="/policy"> Privacy Policy</FormLinks>&nbsp;and&nbsp;
								<FormLinks target="_blank" href="/terms">Terms of Use</FormLinks>.		
							</FormConfirmation>
							<Checkbox/>
							Yes, please keep me updated on Chatterbeak news, events and offers.
							</FormConfirmationWrapper>
							<FormButton type="submit">Sign Up</FormButton>
						</FormWrapper>
						{error && (
							<FormMessage
								variants={messageVariants}
								initial="hidden"
								animate="animate"
								error
							>
								{error}
							</FormMessage>
						)}
						{success && (
							<FormMessage
								variants={messageVariants}
								initial="hidden"
								animate="animate"
							>
								{success}
								<Redirect to={{ pathname: "/signin", state: { email }}} />
							</FormMessage>
						)}
					</FormColumn>
				</FormRow>
			</Container>
		</FormSection>
	);
};

export default SignUp;
