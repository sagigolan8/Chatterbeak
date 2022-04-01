import React, { useEffect, useState } from 'react';
import { Content } from '../Content/Content';
import Features from '../Features/Features';
import Carousel from '../Carousel/Carousel';
import Hero from '../Hero/Hero';
import { heroOne, heroTwo, heroThree } from '../../data/HeroData';
import { WhyUsData } from '../../data/FeaturesData';

const Home = () => {
	const [scrollDownArrow, setScrollDownArrow] = useState({display:''})

		useEffect(()=>{
			window.scrollTo({
				top: 0,
				left:0,
				behavior:"smooth",
			  })   
			const onScrollDown = ()=>{
				if(window.pageYOffset > window.innerHeight*0.5 ){
					localStorage.setItem('arrow','show')
					setScrollDownArrow({opacity:0,transition:'all 0.9s ease-out'})
					setTimeout(() => {
						setScrollDownArrow({display:'none'})
					}, 1000);
					window.removeEventListener('scroll', onScrollDown);
				}
			}
				
			!localStorage.getItem('arrow')
			?
			window.addEventListener('scroll',onScrollDown)
			:
			setScrollDownArrow({display:'none'})

			return () => window.removeEventListener('scroll', onScrollDown);
		},[])

		const scrollDown = () => {
			window.scrollTo({
			top:500,
			left:0,
			behavior:"smooth",
			})   
		}

	return (
		<>
			<Hero  />
			<Features featuresData={WhyUsData} header="What We Offer"/>
			<Content {...heroOne} />
			<Content {...heroTwo} />
			<Content {...heroThree} />
			<Carousel />
			<div onClick={()=>scrollDown()} style={scrollDownArrow} className="arrow bounce">
				<p className="fa fa-arrow-down fa-2x" ></p>
			</div>
		</>
	);
};

export default Home;
