import styled from 'styled-components';
import { Heading } from '../../globalStyles';

export const LegalSection = styled.div`
	padding: ${({padding})=> (padding ? '20px 0' : '160px 0')};
	line-height: ${({lineHeight})=> (lineHeight ? '40px' : '')};
	background: ${({background})=> (background ? '#101522' : '')};
	font-size: 18px;
	font-weight: 500;
	display: flex;
	flex-direction: column;
	justify-content: center;
	color: #fff;
	text-align: left;	
`;

export const LegalHeading = styled.h1`
	margin-bottom: 40px;
	${Heading}
`

export const LegalSubHeader = styled.span`
`

export const LegalBold = styled.b`
	font-weight: bolder;
`

export const LegalContent = styled.span`
`

export const LegalParagraph = styled.p`
	color: #c6c5c5b0;
`


export const LegalHeaderWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;

	@media screen and (max-width: 960px) {
		margin: 0 30px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;



export const LegalCard = styled.div`
	&:hover {
		transform: scale(1.06);
		transition: all 0.3s ease-out;
	}
`;

export const LegalCardSubText = styled.div`
	letter-spacing: 1px;
	font-weight: 600;
	font-size: 22px;
	background: #242424;
	box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
	text-decoration: none;
	border-radius: 4px;
	height: 100%;
	text-align: center;
	padding: 24px;
	color: #fff;
	margin: auto;
	> button {
		margin-top: auto;

		&:hover {
			color: black;
			background: white;
			transition: background 0.3s ease;
		}
	}

	@media screen and (max-width: 768px) {
		width: 90%;

		&:hover {
			transform: none;
		}
	}
`;


