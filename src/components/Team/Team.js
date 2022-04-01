import React, { useEffect } from 'react'
import { Container } from '../../globalStyles'
import { LegalHeaderWrapper, LegalHeading, LegalSection } from '../Legal/LegalStyles'
import CVModal from '../Modals/CVModal'
import './style.css'

export default function Team() {

    useEffect(()=> 
      window.scrollTo({
      top:0,
      left:0,
      behavior:"smooth",
    })   
    ,[])

  return (
    <LegalSection className='our-team' background>

    <LegalHeaderWrapper>
      <LegalHeading>Team</LegalHeading>
    </LegalHeaderWrapper>
    <Container>
    <CVModal inverse/>
    </Container>
    </LegalSection>
  )
}
