import React from 'react';
import { Content } from '../Content/Content';
import Features from '../Features/Features';
import Carousel from '../Carousel/Carousel';
import Hero from '../Hero/Hero';
import { heroOne, heroTwo, heroThree } from '../../data/HeroData';
import { WhyUsData } from '../../data/FeaturesData';

const Home = () => {

	return (
		<>
			<Hero  />
			<Features featuresData={WhyUsData} header="What We Offer"/>
			<Content {...heroOne} />
			<Content {...heroTwo} />
			<Content {...heroThree} />
			<Carousel />
		</>
	);
};

export default Home;
