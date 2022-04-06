import React, { useEffect, useRef, useState } from 'react'
import './style.scss'
import {
    Button,
    Container,
} from '../../globalStyles'
import{
    LegalSection,
    LegalCardSubText,
    LegalHeaderWrapper,
    LegalHeading,
} from '../Legal/LegalStyles'
import { HeroFive } from '../../data/HeroData'
import { Content } from '../Content/Content'
import { TextField } from '@mui/material'
import { isEmail } from 'validator'
import { errorNotification, niceAlert } from '../../services/alerts';
import { useHistory } from 'react-router-dom'
import Select from 'react-select'

const options = [
  { value: 'Comments or suggestions', label: 'Comments or suggestions' },
  { value: 'Having a problem', label: 'Having a problem' },
  { value: 'Special greeting', label: 'Special greeting' },
  { value: 'Other', label: 'Other' },
]

export default function Contact() {
    const history = useHistory()
    const nameRef = useRef()
    const emailRef = useRef()
    const textareaRef = useRef()
    const [selectedValue, setSelectedValue] = useState('');
    useEffect(()=>{
        window.scrollTo({
            top: window.innerHeight*0.1,
            left:0,
            behavior:"smooth",
          })   
          const messageElement = document.getElementById("message");
          const countElement = document.getElementById("counter");
          
          messageElement.addEventListener("input", function (e) {
            const target = e.target;
          
            // Get the `maxlength` attribute
            const maxLength = target.getAttribute("maxlength");
          
            // Count the current number of characters
            const currentLength = target.value.length;
          
            countElement.innerHTML = `${currentLength}/${maxLength}`;
          
            if (currentLength >= 250 && currentLength < 500 ) {
              countElement.style.backgroundColor = "#008daa";
            }
            else if (currentLength >= 500 && currentLength < 750 ) {
              countElement.style.backgroundColor = "#ffc400e6";
            }
            else if(currentLength >= 750){
                countElement.style.backgroundColor = "#f00";
            }
             else {
              countElement.style.backgroundColor = "#0a0";
            }
          });
	},[])

    const sendForm = (e) =>{
        e.preventDefault()
        const name = nameRef.current.value
        const email = emailRef.current.value
        const textareaLength = textareaRef.current.value.trim().split(' ').length
        if(!name.trim()){
            nameRef.current.focus()
            return errorNotification('Full name required')
        }
        else if(!/^[a-zA-Z]+ [a-zA-Z]+$/.test(name)){
            nameRef.current.focus()
            return errorNotification('Please enter first name and last name')
        }
        if(!email || !isEmail(email)){
            emailRef.current.focus()
            return errorNotification('Email is not valid','top-center')
        }
        if(!email || !isEmail(email)){
            emailRef.current.focus()
            return errorNotification('Email is not valid','top-center')
        }
        if(textareaLength < 10){
            textareaRef.current.focus()
            return errorNotification('Type at least 10 words','top-center')
        }
        if(!selectedValue){
            return errorNotification('Pick some subject from the dropdown selector','top-center')
        }
        history.push('/')
        niceAlert('Thank you for contact us!',3000,'success')
    }

      // handle onChange event of the dropdown
    const handleChange = e => {
        setSelectedValue(e.value);
    }
  return (
        <>
            <Content padding="160px 0 0px 0" {...HeroFive}/>
            <LegalSection style={{padding:'110px 0'}} background>
                <Container className="contact-container">
                <LegalHeaderWrapper>
                <LegalHeading>Contact Form</LegalHeading>
                </LegalHeaderWrapper>
                <form onSubmit={sendForm}>
                    <LegalCardSubText className="contact">
                        <div className="fields">
                            <TextField
                                style={{ width: "350px",margin: '15px 5px',display:'block' }}
                                type="text"
                                label="Full Name"
                                variant="outlined"
                                fullWidth 
                                inputRef={nameRef}
                                className="name-field"
                                inputProps={{
                                    autoComplete: 'off',
                                    spellCheck: 'false'
                                 }}
                            />
                            <TextField
                                style={{ width: "350px", margin: "15px 5px",display:'block' }}
                                type="email"
                                label="Email"
                                variant="outlined"
                                fullWidth 
                                inputRef={emailRef}
                                className="email-field"
                                inputProps={{
                                    autoComplete: 'new-password',
                                    spellCheck: 'false'
                                 }}
                            />
                            <Select 
                              value={options.filter(obj => obj.value === selectedValue)}
                              onChange={handleChange}
                              className="select-subject" 
                              placeholder="Subject" 
                              options={options}
                            />
                        </div>
                        <div className="overlay">
                        <div className="message-wrapper" >
                            <textarea
                              ref={textareaRef} 
                              spellCheck="false" 
                              maxLength="1000" 
                              id="message"
                              placeholder="Type here (at least 10 words)" 
                            />
                            <div className="inbox">
                            <div id="counter">0/1000</div>
                            <span className="characters-used">Characters Used</span>
                            </div>
                            </div>
                        </div>
                        {window.innerWidth >= 550 || window.innerWidth <= 1000  ? <br /> : ''}
                            <Button>Submit</Button>
                    </LegalCardSubText>
                    </form>
                </Container>
            </LegalSection>
        </>
  )
}

