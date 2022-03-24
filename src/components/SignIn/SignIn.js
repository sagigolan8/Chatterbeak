import React, { useContext, useEffect, useState } from 'react';
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
	// FormLink, // => forgot password
} from '../Form/FormStyles';
import { Container } from '../../globalStyles';
import { useHistory } from 'react-router-dom';
import { errorNotification, niceAlert } from '../../services/alerts';
import { ToastContainer } from 'react-toastify';
import { UserContext } from '../Context/UserContext';
import { validateSignIn } from '../../services/request';
const SignIn = () => {
	const history = useHistory()
    const { user, setUser, initialState } = useContext(UserContext) 
	


	useEffect(()=>{
		window.scrollTo(0, window.innerHeight*0.1)
	},[])

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		const result = await validateSignIn({ email, password });

		if (result.error) {
			return errorNotification(result.error,'top-center')
		}
		setUser(result)
		niceAlert('enjoy our services',2000,'success')
		setEmail('');
		setPassword('');

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
					{
						user.name
						?
						<FormColumn small>
							<FormTitle>You are successfully logged in </FormTitle>
						</FormColumn>
						:
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
							{/* <FormLink to="/" >forgot password?</FormLink> */}
							<FormButton type="submit">Sign In</FormButton>
						</FormWrapper>
							<ToastContainer/>
					</FormColumn>
					}
					
				</FormRow>
			</Container>
		</FormSection>
	);
};

export default SignIn;
