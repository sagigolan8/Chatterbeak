import React, { useEffect } from 'react'
import {
    Container,
} from '../../globalStyles'
import{
    LegalSection,
    LegalHeaderWrapper,
    LegalHeading,
    LegalParagraph,
    LegalContent,
    LegalCardSubText,
    LegalBold,
} from '../Legal/LegalStyles'
import { TermsData } from '../../data//LegalData'
export default function Terms() {
    useEffect(()=>{
        window.scrollTo({
            top: window.innerHeight*0.1,
            left:0,
            behavior:"smooth",
          }) 
	},[])
  return (
      <LegalSection background>
            <LegalHeaderWrapper>
                <LegalHeading>Terms Of Use</LegalHeading>
            </LegalHeaderWrapper>
            <Container>
                <LegalCardSubText>
                    <LegalSection padding inverse lineHeight >
                        {TermsData.map((terms,index)=>(
                        <LegalContent key={index}>
                                <LegalBold>{terms.title}</LegalBold>
                                <LegalParagraph>{terms.text}</LegalParagraph>   
                                { !terms.title ? <br /> : '' }
                            </LegalContent>
                        ))}
                    </LegalSection>
                </LegalCardSubText>
            </Container>
        </LegalSection>
  )
}
