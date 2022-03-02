import styled from 'styled-components';
import { Button } from '../../globalStyles';

export const HeroSection = styled.section`
	height: 100vh;
	background-position: center;
	background-size: cover;
	padding-top: clamp(70px, 25vh, 220px);
	box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
`;

export const HeroVideo = styled.video`
	object-fit: cover;
	width: 100%;
	height: 100%;
	// background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
	background: transparent;
	top: 0;
	position: absolute;
	z-index: -1;
`;

export const HeroText = styled.p`
	margin-bottom: 35px;
	font-size: clamp(0.9rem,1.4vw,1.4rem);
	font-weight: 900;
	line-height: 40px;
	text-align: center;
	letter-spacing: 2px;
	color: #fff;
	@media screen and (max-width: 700px) {
		line-height: 25px;
	}
	@media screen and (orientation:landscape) and (max-width: 500px) {
		margin-bottom: 7px;
		line-height: 20px;
	 }
`;

export const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-flow: wrap;
	gap: 0.5rem;
`;

// styled(Button) - means overwritten from global style
export const HeroButton = styled(Button)`
	
`;
