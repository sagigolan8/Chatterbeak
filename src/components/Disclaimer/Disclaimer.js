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
} from '../Legal/LegalStyles'
import { DisclaimerData } from '../../data/LegalData'
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
                <LegalHeading>Disclaimer</LegalHeading>
            </LegalHeaderWrapper>
            <Container>
                <LegalCardSubText>
                    <LegalSection padding inverse lineHeight >
                        {DisclaimerData.map((terms,index)=>(
                        <LegalContent key={index}>
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
