import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '../../globalStyles'
import { errorNotification, infoNotification, niceAlert } from '../../services/alerts'
import { checkOtp, sendOtpAgain, validateSignIn } from '../../services/request'
import { UserContext } from '../Context/UserContext'
import { LegalSection } from '../Legal/LegalStyles'
import './style.scss'

export default function Verification() {
    const { user, setUser } = useContext(UserContext) 
    const [inputs, setInputs] = useState()
    const history = useHistory()
    
    useEffect(()=>{
      console.log(user)
      console.log(localStorage.getItem('signup'))
      window.scrollTo(0, window.innerHeight*0.1)
      if(!user.name){
        history.push('/')
    }
      infoNotification('You have 10 minutes to complete the verification ','bottom-right')

        const inputs = document.querySelectorAll('.input-form')
        inputs[0].focus()
        setInputs(inputs)

        const handlePaste = (e) => {
            e.preventDefault()
            const paste = e.clipboardData.getData('text')
            if(isNaN(paste)){
                return
            }
            inputs.forEach((input, i) => {
                input.value = paste[i] || ''
            })
        }
        
        inputs.forEach((input) => { 
        input.addEventListener('paste', handlePaste)
        input.addEventListener('focus', handleFocus)
        input.addEventListener('keydown', handleKeyDown)
    })

    return () => {
        inputs.forEach((input) => {
            input.removeEventListener('paste', handlePaste)
            input.removeEventListener('focus', handleFocus)
            input.removeEventListener('keydown', handleKeyDown)
        })
    }
    },[])
    
    const KEYBOARDS = {
        backspace: 8,
        arrowLeft: 37,
        arrowRight: 39,
      }

    const handleInput = (e) => {
        const input = e.target
        const nextInput = input.nextElementSibling
        if (nextInput && input.value) {
          nextInput.focus()
          if (nextInput.value) {
            nextInput.select()
          }
        }
      }


    const handleBackspace = (e) => { 
        const input = e.target
        if (input.value) {
          input.value = ''
          return
        }
        if(input.previousElementSibling)
        input.previousElementSibling.focus()
      }
      
    const handleArrowLeft = (e) => {
        const previousInput = e.target.previousElementSibling
        if (!previousInput) return
        previousInput.focus()
      }
      
    const handleArrowRight = (e) => {
        const nextInput = e.target.nextElementSibling
        if (!nextInput) return
        nextInput.focus()
      }

    const handleKeyDown = (e) => {
        switch(e.keyCode) {
          case KEYBOARDS.backspace:
            handleBackspace(e)
            break
          case KEYBOARDS.arrowLeft:
            handleArrowLeft(e)
            break
          case KEYBOARDS.arrowRight:
            handleArrowRight(e)
            break
          default:  
        }
      }

      const handleFocus = (e) =>{
        setTimeout(() => {
        e.target.select()
        }, 0)
      }

      const verifyOtp = async (e) => { 
        e.preventDefault()
        let otp = ''
        inputs.forEach(({ value }) => {
            otp = `${otp}${value}` 
          })
          const result = await checkOtp(user,otp)
          console.log('result',result)
          if(!result.error){
            console.log(user)
            setUser(result)
              niceAlert('Welcome to Chatterbeak!',1500,'success')
              await validateSignIn({ email: user.email, password: user.email })
              history.push('/signup')
              // localStorage.removeItem('signup')
            }
            else if(result.error.includes('10 minutes')){
              niceAlert(result.error,3500)
              history.push('/signup')
            }
            else{
                errorNotification(result.error,'top-center')
          }
      }

  return (
    <LegalSection background>
      <div className="verification">
          {/* <ToastContainer /> */}
              <h1 className="verification-header">Code Verification</h1>
              <h3 className="verification-subheader">Verification code just sent to your email please paste it here</h3>
          <form onSubmit={(e)=>verifyOtp(e)} onInput={(e)=>handleInput(e)} className="verification-form" action="#"> 
              <div className="verification-wrapper">
                <input type="tel" maxLength="1" pattern="[0-9]" className="input-form"/>
                <input type="tel" maxLength="1" pattern="[0-9]" className="input-form"/>
                <input type="tel" maxLength="1" pattern="[0-9]" className="input-form"/>
                <input type="tel" maxLength="1" pattern="[0-9]" className="input-form"/>
                <input type="tel" maxLength="1" pattern="[0-9]" className="input-form"/>
                <input type="tel" maxLength="1" pattern="[0-9]" className="input-form"/>
              </div>
              <div className="form-btn">
                  <Button type="submit" className="otp-btn">Check</Button>
                  <Button type="reset" className="otp-btn">Reset</Button>
                  <div className="send-again-wrapper">
                  <span
                    onClick={()=>{
                      sendOtpAgain(user)
                      infoNotification('verification code sent to your email','bottom-right')
                    }} className='send-again-link'>send again?</span>
                  </div>
              </div>
            </form>
      </div>
  </LegalSection>
  )
}
