import React, { useState } from 'react';
import {
	FooterLinkItems,
	FooterLinkTitle,
	FooterLink,
	FooterSpan,
	FooterLogo,
	SocialIcon,
	FooterRights,
	FooterSocialIcon,
	FooterWrapper,
	FooterAddress,
	FooterColumn,
	FooterGrid,
} from './FooterStyles';
import { footerData, footerSocialData } from '../../data/FooterData';
import { Row, Section } from '../../globalStyles';

function Footer() {
	const [linkActive, setLinkActive] = useState('')
	const removeNavMarker = () =>{
		const currLink = document.querySelector('.active-nav')
		if(currLink){
			currLink.classList.remove('active-nav')
		} 
	}
	const addFooterMarker = ({ target }) =>{
		removeNavMarker()
		if(linkActive)
		linkActive.classList.remove('active-footer')
		setLinkActive(target)
		target.classList.add('active-footer')
	}

	return (
		<Section padding="4rem 0 2rem 0">
			<FooterWrapper>
				<FooterGrid justify="space-between">
					<FooterColumn id="footerLogo">
						<FooterLogo to="/">
						<SocialIcon src="./assets/chatterlogo.png" alt="logo" />
						</FooterLogo>
						<FooterAddress>
						20 lilienblum St. Chatterbeak buildings, Tel Aviv

						</FooterAddress>

						<Row align="center" margin="auto  0 0 0" gap="1rem">
							{footerSocialData.map((social, index) => (
								<FooterSocialIcon
									key={index}
									href={social.to}
									target="_blank"
									aria-label={social.name}
								>
									{social.icon}
								</FooterSocialIcon>
							))}
						</Row>
					</FooterColumn>
					{footerData.map((footerItem, index) => (
						<FooterLinkItems key={index}>
							<FooterLinkTitle>{footerItem.title}</FooterLinkTitle>
							{footerItem.links.map((link, linkIndex) => (
								// <FooterLink key={linkIndex} to="/privacy-policy">
								<FooterLink
									key={linkIndex} 
									to={link.to}
									
								>
									<FooterSpan
										onClick={(e)=> addFooterMarker(e)
									}
									>
										{link.path}
									</FooterSpan>
									
								</FooterLink>
							))}
						</FooterLinkItems>
					))}
				</FooterGrid>
				<FooterRights>chatterbeak © 2021</FooterRights>
			</FooterWrapper>
		</Section>
	);
}

export default Footer;
