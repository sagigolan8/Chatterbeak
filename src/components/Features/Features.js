import React, { useState } from 'react';
import { Container, Section } from '../../globalStyles';
import InfoModal from '../Modals/InfoModal';
import {
	FeatureText,
	FeatureTitle,
	FeatureWrapper,
	FeatureColumn,
	FeatureImageWrapper,
	FeatureName,
	FeatureTextWrapper,
} from './FeaturesStyles';

const Features = ({featuresData,header,inverse}) => {
	const [openModal, setOpenModal] = useState(false)
	const [headline, setHeadline] = useState()
	const [text, setText] = useState()
	const [icon, setIcon] = useState()
	const initial = {
		y: 40,
		opacity: 0,
	};
	const animate = {
		y: 0,
		opacity: 1,
	};
	const showDescription = (headline,text,icon) =>{
		setOpenModal(!openModal)
		setHeadline(headline)
		setText(text)
		setIcon(icon)
	}

	return (
		<Section smPadding="50px 10px" position="relative" inverse id="about">
			<Container>
				<FeatureTextWrapper>
					<FeatureTitle>{header}</FeatureTitle>
				</FeatureTextWrapper>
				<FeatureWrapper >
					{featuresData.map((el, index) => (
						<FeatureColumn 
							onClick={()=> showDescription(el.name,el.description,el.icon)}
							inverse={inverse}
							initial={initial}
							animate={animate}
							transition={{ duration: 0.5 + index * 0.1 }}
							key={index}
							>
							<FeatureImageWrapper inverse={inverse} className={el.imgClass}>
								{el.icon}
							</FeatureImageWrapper>
							<FeatureName>{el.name}</FeatureName>
							{/* <FeatureText>{el.description}</FeatureText> */}
							
						</FeatureColumn>
					))}
				</FeatureWrapper>
			</Container>
						<InfoModal 
							headline={headline}
							text={text}
							icon={icon}
							setOpenModal={setOpenModal} 
							openModal={openModal}
							inverse={inverse}
						/>
		</Section>
	);
};

export default Features;
