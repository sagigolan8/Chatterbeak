import { useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Container, Section } from '../../globalStyles';
import InfoModal from '../Modals/InfoModal';
import {
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

	const animation = useAnimation();
	const { ref, inView } = useInView({ threshold: 0.2 });

	useEffect(() => {
		if (inView) {
			animation.start({
				opacity: 1,
				y: 0,
			});
			return;
		}
	}, [inView, animation]);

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
				<FeatureWrapper ref={ref} >
					{featuresData.map((el, index) => (
						<FeatureColumn
							
							onClick={()=> showDescription(el.name,el.description,el.icon)}
							inverse={inverse}
							initial={initial}
							animate={animation}
							transition={{ duration: 0.5 + index * 0.1 }}
							key={index}
							>
							<FeatureImageWrapper inverse={inverse} className={el.imgClass}>
								{el.icon}
							</FeatureImageWrapper>
							<FeatureName>{el.name}</FeatureName>
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
