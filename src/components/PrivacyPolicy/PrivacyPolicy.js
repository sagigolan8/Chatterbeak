import React, { useEffect } from 'react'
import {
    Container,
} from '../../globalStyles'
import{
    LegalSection,
    LegalHeaderWrapper,
    LegalHeading,
    LegalSubHeader,
    LegalParagraph,
    LegalContent,
    LegalCardSubText,
    LegalBold,
} from '../Legal/LegalStyles'
import { PrivacyPolicyData } from '../../data/LegalData'
export default function PrivacyPolicy() {
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
                <LegalHeading>Privacy policy of Chatterbeak</LegalHeading>
            </LegalHeaderWrapper>
            <Container>
                <LegalCardSubText>
                    <LegalSubHeader>
                        <LegalBold>Chatterbeak</LegalBold> operates the "chatterbeakweb.com" website, which provides the SERVICE
                    </LegalSubHeader>
                    <LegalSection padding inverse lineHeight >
                        {PrivacyPolicyData.map((policies,index)=>(
                        <LegalContent key={index}>
                                <LegalBold>{policies.title}</LegalBold>
                                <LegalParagraph>{policies.text}</LegalParagraph>                          
                            </LegalContent>
                        ))}
                    </LegalSection>
                </LegalCardSubText>
         
            </Container>
        </LegalSection>
  )
}
