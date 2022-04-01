import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const FormSection = styled.div`
	padding: ${({ padding }) => (padding ? '0 0 15px 0' : '160px 0')};
	background: #101522;
`;

export const FormTitle = styled.h1`
	margin-bottom: -20px;
	font-size: ${(small)=>(small ? '25px' : '38px')};
	line-height: 1.1;
	font-weight: 600;
	@media screen and (max-width: 460px) {
		font-size: 140%;
		margin-bottom: 20px;
	}
	@media screen and (max-width: 300px) {
		font-size: 130%;
	}
`;

export const FormContainer = styled.div`
	display: flex;
`;

export const FormLink = styled(Link)`
	display: flex;
	justify-content: center;
	text-decoration: none;
	color: #0060ebd9;
	font-size: 16px;
	font-weight: 500;
	&:hover {
		color:#4995cb;
	}
	@media screen and (max-width: 320px) {
		font-size: 14px;
	}
`;

export const FormColumn = styled.div`
	position: ${(relative) => (relative ? 'relative' : 'static')};
	box-shadow: 0 6px 20px rgb(56 125 255 / 20%);
	padding: 50px;
	background: #242424;
	color:#fff;
	border: 20px;
	flex: 1;
	max-width: 60%;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 20px;
	flex-direction: column;
	@media screen and (max-width: 768px) {
		max-width: 100% !important;
		flex-basis: 100%;
	}

	img {
		@media screen and (max-width: 768px) {
			display: none;
		}
	}
`;

export const FormRow = styled.div`
	display: flex;
	justify-content: center;
	margin: 0 -15px -15px -15px;
	flex-wrap: wrap;
	align-items: center;
`;

export const FormWrapper = styled.form`
	padding-top: 0;
	width: 100%;
`;

export const FormMessage = styled(motion.div)`
	color: ${({ error }) => (error ? 'red' : 'green')};
	padding: 5px;
	text-align: center;
	margin-top: 1rem;
	font-weight: 500;
`;

export const FormInputRow = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: stretch;
	margin-bottom: 0.7rem;

	> p {
		font-size: 0.8rem;
		margin-top: 0.5rem;
		color: #f00e0e;
	}
`;
export const FormInput = styled.input`
	color: #fff;
	background: #242424;
	display: block;
	padding-left: 10px;
	outline: none;
	border-radius: 2px;
	height: 40px;
	width: 100%;
	border: none;
	border-bottom: 1px solid #cfcfcf;
	font-size: 1rem;
`;

export const FormLabel = styled.label`
	display: inline-block;
	font-size: 0.9rem;
	margin-bottom: 0.3rem;
	color: #afafaf;
`;
export const FormImgWrapper = styled.div`
	max-width: 555px;
	display: flex;
	justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};

`;
export const FormImg = styled.img`
	padding-right: 0;
	border: 0;
	max-width: 100%;
	vertical-align: middle;
	display: inline-block;
	max-height: 500px;
`;

export const FormButton = styled.button`
	border-radius: 4px;
	background: none;
	margin-top: 0.6rem;
	white-space: nowrap;
	color: #afafaf; 
	outline: none;
	width: 100%;
	font-size: 1.4rem;
	padding: 5px 15px;
	border: 2px solid #afafaf;
	position: relative;
	overflow: hidden;
	transition: all 0.4s linear; /* vendorless fallback */
	-o-transition: all 0.4s linear; /* opera */
	-ms-transition: all 0.4s linear; /* IE 10 */
	-moz-transition: all 0.4s linear; /* Firefox */
	-webkit-transition: all 0.4s linear; /*safari and chrome */

	&:hover {
		cursor: pointer;
		color: #242424;
		transition: background-color 0.4s ease-in;
		background-color: #fff;
		border-color: #fff;
	}
`;

export const FormConfirmation = styled.p`
	@media screen and (max-width: 1260px) {
		border-bottom: 1px solid #cfcfcf;
		width 100%;
	}
`

export const FormConfirmationWrapper = styled.div`
z-index: -1000;

	color: #afafaf;
	@media screen and (max-width: 471px) {
		font-size: .84rem;
	}
`
export const FormLinks = styled.a`
text-decoration: none;
	color: #0060ebd9;
	font-size: 14px;
	font-weight: 500;
	&:hover {
		color:#4995cb;
	}
	&:focus{
		border: 4px solid #00237cb8;
	}
	@media screen and (max-width: 471px) {
		font-size: 11px;
	}
	`
	
export const FormLogOutButton = styled.div`
	cursor:pointer;
	position: absolute;
	left: 10px;
	top: 10px;
	padding: 10px 15px;
	border-radius: 10px;
	border: none;
	color: #fff;
	font-weight: 600;
	letter-spacing: 2px;
	text-align: center;
	background: #8E0E00;
	background: -webkit-linear-gradient(to left, #8E0E00, #1F1C18);
	background: linear-gradient(to left, #8E0E00, #1F1C18);
	box-shadow: 3px 2px 3px rgb(255 255 255 / 41%);
	transition: all 0.4s linear; /* opera */
	
	&:hover{
		transform: scale(1.15);
		transition: all 0.3s ease-out;
		box-shadow: 5px 4px 5px rgb(255 255 255 / 41%);
	}
	@media screen and (max-width: 451px) {
		padding: 5px 10px;
		font-size: .8rem;
	}
`