// import React, { useEffect, useState } from 'react';
// import {
// 	FormColumn,
// 	FormWrapper,
// 	FormInput,
// 	FormSection,
// 	FormRow,
// 	FormLabel,
// 	FormInputRow,
// 	FormMessage,
// 	FormButton,
// 	FormTitle,
// } from '../Form/FormStyles';
// import { Container } from '../../globalStyles';
// import validateForm from '../SignUp/validateSignUp';
// import { useLocation } from 'react-router-dom';
// import { HeroFour } from '../../data/HeroData';
// import { Content } from '../Content/Content';
// import Features from '../Features/Features';
// import { SafetyData } from '../../data/FeaturesData';
// const Report = () => {
// 	const { state } = useLocation()
// 	useEffect(()=>{
// 		if(state){
// 			setEmail(state.email)
// 		}
// 		window.scrollTo(0, 0)

// 	},[])

// 	const [email, setEmail] = useState('');
// 	const [password, setPassword] = useState('');
// 	const [error, setError] = useState(null);
// 	const [success, setSuccess] = useState(null);

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		const resultError = validateForm({ name:'2', email, password, confirmPass:'' }); //add terms

// 		if (resultError !== null) {
// 			setError(resultError);
// 			return;
// 		}
// 		setEmail('');
// 		setPassword('');
// 		setError(null);
// 		setSuccess('Application was submitted!');
// 	};

// 	const messageVariants = {
// 		hidden: { y: 30, opacity: 0 },
// 		animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
// 	};

// 	const formData = [
// 		{ label: 'Email', value: email, onChange: ({ target: { value } }) => setEmail(value), type: 'email' },
// 		{
// 			label: 'Password',
// 			value: password,
// 			onChange: ({ target: { value } }) => setPassword(value),
// 			type: 'password',
// 		},

// 	];
// 	return (
//         <>
//         <Content padding="80px 0" {...HeroFour}/>
//         <Features 
//             featuresData={SafetyData}
//             header="Chatterbeak Is Safe"
//             inverse
//         />
// 		{/* <FormSection padding>
// 			<Container>
// 				<FormRow>
// 					<FormColumn small>
// 						<FormTitle>Report Form</FormTitle>
// 						<FormWrapper onSubmit={handleSubmit}>
// 							{formData.map((el, index) => (
// 								<FormInputRow key={index}>
// 									<FormLabel>{el.label}</FormLabel>
// 									<FormInput
// 										type={el.type}
// 										placeholder={`Enter ${el.label.toLocaleLowerCase()}`}
// 										value={el.value}
// 										onChange={el.onChange}
// 									/>
// 								</FormInputRow>
// 							))}
// 							<FormButton type="submit">Sign In</FormButton>
// 						</FormWrapper>
// 						{error && (
// 							<FormMessage
// 								variants={messageVariants}
// 								initial="hidden"
// 								animate="animate"
// 								error
// 							>
// 								{error}
// 							</FormMessage>
// 						)}
// 						{success && (
// 							<FormMessage
// 								variants={messageVariants}
// 								initial="hidden"
// 								animate="animate"
// 							>
// 								{success}
// 							</FormMessage>
// 						)}
// 					</FormColumn>
// 				</FormRow>
// 			</Container>
// 		</FormSection> */}
//         </>
//     );
// };

// export default Report;
