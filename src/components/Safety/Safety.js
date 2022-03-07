import React, { useEffect } from 'react';
import { HeroFour } from '../../data/HeroData';
import { Content } from '../Content/Content';
import Features from '../Features/Features';
import { SafetyData } from '../../data/FeaturesData';
import { Modal } from '@mui/material';
const Safety = () => {
	useEffect(()=>{

		window.scrollTo(0, 0)

	},[])

	return (
        <>
          <Content padding="80px 0" {...HeroFour}/>
          <Features 
              featuresData={SafetyData}
              header="You are safe"
              inverse
          />
        </>
    );
};

export default Safety;
