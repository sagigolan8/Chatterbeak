import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

const Hero = () => {
	return (
		<HeroSection>
			<HeroVideo src="./assets/connections.mp4" autoPlay muted loop />
			<Container>
				<MainHeading textShadow >Enabling The Hybrid Workforce</MainHeading>
				<HeroText>
				A collaborative place for customers to find solutions, ask questions, and connect with peers
				</HeroText>
				<ButtonWrapper>
					<Link to="signin">
						<HeroButton contrast>Sign In</HeroButton>
					</Link>
					<Link to="signup">
						<Button>Get Started</Button>
					</Link>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;
