import React, { useEffect, useState } from 'react';
import Carousel from '../components/Carousel/Carousel';
import { Content } from '../components/Content/Content';
import Features from '../components/Features/Features';
import Hero from '../components/Hero/Hero';
import { heroOne, heroTwo, heroThree } from '../data/HeroData';
import { ScrollerDiv, ScrollerImg } from '../globalStyles';
import { WhyUsData } from '../data/FeaturesData';

// Hero Feature Content Carousel

const Home = () => {
	const [displayScroller, setDisplayScroller] = useState(false)
	useEffect(()=>{
		const onScroll = ()=>{
			window.pageYOffset > 300
			?
			setDisplayScroller(true)
			:
			setDisplayScroller(false)
		}
		window.addEventListener('scroll',onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	},[])
	
	const scrollTop = () => {
		window.scrollTo({
		top:0,
		left:0,
		behavior:"smooth",
	});     
	};

	return (
		<>
			<Hero  />
			<Features featuresData={WhyUsData} header="What We Offer"/>
			<Content {...heroOne} />
			<Content {...heroTwo} />
			<Content {...heroThree} />
			<Carousel />
			<ScrollerDiv onClick={()=>scrollTop()} displayScroller={displayScroller}>
				<ScrollerImg src="./assets/scrollUp.png" />
			</ScrollerDiv>
		</>
	);
};

export default Home;
