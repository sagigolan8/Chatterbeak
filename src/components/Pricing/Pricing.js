import React, { useEffect, useRef } from 'react';
import { Button, Heading, TextWrapper } from '../../globalStyles';
import { IconContext } from 'react-icons/lib';
import {
	PricingSection,
	PricingWrapper,
	PricingContainer,
	PricingCardInfo,
	PricingCardPlan,
	PricingCardCost,
	PricingCardFeatures,
	PricingCardText,
	PricingCardFeature,
	PricingCard,
	PriceLink
} from './PricingStyles';
import { pricingData } from '../../data/PricingData';
import { useHistory } from 'react-router-dom'

function Pricing() {
	const linkRef = useRef()

	useEffect(()=>{
		window.scrollTo(0, window.innerHeight*0.1)
	},[])

	return (
		<IconContext.Provider value={{ color: '#a9b3c1', size: '1rem' }}>
			<PricingSection id="pricing">
				<PricingWrapper>
					<Heading noSpacing> Choose a plan</Heading>

					<TextWrapper
						mb="1.4rem"
						weight="600"
						size="1.1rem"
						color="white"
						align="center"
					>
						{/* Create, maintain and store your data with Chatterbeak. */}
						Find the right solution for your needs in Chatterbeak.
					</TextWrapper>
					<PricingContainer>
						{pricingData.map((card, index) => (
							<PricingCard key={index}>
								<PricingCardInfo>
									<PricingCardPlan>{card.title}</PricingCardPlan>
									<PricingCardCost>{card.price}</PricingCardCost>
									<PricingCardText>{card.description}</PricingCardText>
									<PricingCardFeatures>
										{card.features.map((feature, index) => (
											<PricingCardFeature key={index}>
												{feature}
											</PricingCardFeature>
										))}
									</PricingCardFeatures>
										<Button
											onClick={()=>document.getElementById(card.title).click()}
										>
										Get Started
										</Button>
										<PriceLink id={card.title} href={card.to} target={card.blank}></PriceLink>
										
								</PricingCardInfo>
							</PricingCard>
						))}
					</PricingContainer>
				</PricingWrapper>
			</PricingSection>
		</IconContext.Provider>
	);
}
export default Pricing;
