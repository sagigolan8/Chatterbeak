import React, { useEffect } from 'react'
import { MainHeading, Section, Heading } from '../../globalStyles'
import { FiArrowDown } from 'react-icons/fi'
export default function AllServices() {
    useEffect(()=>{
		window.scrollTo(0, 0)
	},[])
    return (
    <Section style={{textAlign:'center'}} padding="90px 0 1px 0">
        <MainHeading textShadow>
        Here you can find all of our services
        </MainHeading >
        <FiArrowDown color="#fff" fontSize="70px"/>
    </Section>
  )
}
