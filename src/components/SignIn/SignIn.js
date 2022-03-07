import React, { useEffect, useState } from 'react';
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
	FormLink
} from '../Form/FormStyles';
import { Container } from '../../globalStyles';
import validateForm from './validateSignIn';
import { Redirect, useLocation } from 'react-router-dom';
import { niceAlert } from '../../services/alerts';
const SignIn = () => {
	const { state } = useLocation()
	useEffect(()=>{
		if(state){
			setEmail(state.email)
			niceAlert('Welcome to Chatterbeak!',2000,'success')
		}
		window.scrollTo(0, window.innerHeight*0.1)

	},[])

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const resultError = await validateForm({ email, password});

		if (!resultError) {
			return setError(resultError);
		}
		setEmail('');
		setPassword('');
		setError(null);
		setSuccess('success');
	};

	const messageVariants = {
		hidden: { y: 30, opacity: 0 },
		animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
	};

	const formData = [
		{ label: 'Email', value: email, onChange: ({ target: { value } }) => setEmail(value), type: 'email' },
		{
			label: 'Password',
			value: password,
			onChange: ({ target: { value } }) => setPassword(value),
			type: 'password',
		},

	];
	return (
		<FormSection>
			<Container>
				<FormRow>
					<FormColumn small>
						<FormTitle>Sign in</FormTitle>
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
							<FormLink to="/" >forgot password?</FormLink>
							<FormButton type="submit">Sign In</FormButton>
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
								<Redirect to={{ pathname: "/meeting", state: { email }}} />
							</FormMessage>
						)}
					</FormColumn>
				</FormRow>
			</Container>
		</FormSection>
	);
};

export default SignIn;
