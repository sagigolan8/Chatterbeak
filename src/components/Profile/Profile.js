import React, { useContext, useEffect, useRef, useState } from 'react'
import './style.scss'
import $ from 'jquery'
import copy from 'copy-to-clipboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteAlert, errorNotification, infoNotification } from '../../services/alerts';
import { useHistory } from 'react-router-dom';
import Modal from '../Modals/ProfileColor'
import { DeleteButton } from './ProfileStyles';
import EditPassword from '../Modals/EditPassword';
import { Button } from '@mui/material';
import validator from 'validator';
import { UserContext } from '../Context/UserContext';
import { deleteCookie, deleteProfile, updateProfile } from '../../services/request';


export default function Profile() {
    const { user, setUser } = useContext(UserContext) 
    const [openModal, setOpenModal] = useState(false)
    const [changeName, setChangeName] = useState(false)
    const [changeEmail, setChangeEmail] = useState(false)
    const [allowEdit, setAllowEdit] = useState({pointerEvents: 'none'})
    const userName = useRef()
    const inputName = useRef()
    const changeNameBtn = useRef()
    const userEmail = useRef()
    const changeEmailBtn = useRef()
    const inputEmail = useRef()

    const picRef = useRef()

    const history = useHistory()

  useEffect(()=>{
    if(user.name){
      setAllowEdit({pointerEvents: 'auto'})
    }
    else{
      setAllowEdit({pointerEvents: 'none'})
      infoNotification('In order to get access to our system you have to sign in','top-center')
    }
		window.scrollTo(0, window.innerHeight*0.05)
  },[])

    const isEmailValid = (email) =>{
    	return validator.isEmail(email)
    }


    const deleteUser = async () =>{
      const isDeleted = await deleteAlert('Are you sure you want to delete the account?')
      if(isDeleted){
        deleteCookie(user._id)
        setUser({
          name:'',
          email:'',
          password:'',
          id:'',
          bgColor:'#969696',
          color:'#fff'
      })
        await deleteProfile(user._id)
        history.push('/')
      }
    }

    const changeColor = () => 
      setUser({...user, color: picRef.current.style.color, bgColor: picRef.current.style.background})
    

    const showId = async ()=> {
      $(".wrapper").toggleClass("is-hidden");
      var inputType = $(".wrapper").hasClass("is-hidden") ? "password" : "text";
      const input = $("#meeting-id").attr("type", inputType);
      copy(input[0].value)
      copy(input[0].value)
        setTimeout(function() {
          if(inputType === "text"){
            input.css('z-index', '1');
            infoNotification("Copied to clipboard","bottom-right")
          }
          else{
            input.css('z-index', '0');
          }
        }, 50);
      };

      const editName = () =>{
        setChangeName(!changeName)
        inputName.current.style.display = ""
        changeNameBtn.current.style.display = ""
        inputName.current.value = userName.current.textContent
        userName.current.style.display = "none"
      }
      
      const closeEditName = () =>{
        if(!/^[a-zA-Z]+ [a-zA-Z]+$/.test(inputName.current.value)){
          return errorNotification('Please enter first name and last name','top-center')
        }
        updateProfile(user)
        console.log('this',user)
        setChangeName(!changeName)
        userName.current.textContent = inputName.current.value
        inputName.current.style.display = "none"
        userName.current.style.display = ""
        changeNameBtn.current.style.display = "none"
      }

      const editEmail = () =>{
        setChangeEmail(!changeEmail)
        inputEmail.current.style.display = ""      //reveal input
        changeEmailBtn.current.style.display = ""  //reveal button
        inputEmail.current.value = userEmail.current.textContent //put in input the current email
        userEmail.current.style.display = "none" //hide email address
      }

      const closeEditEmail = () =>{
        if(!isEmailValid(inputEmail.current.value)){
          return errorNotification("Email is not valid","top-center")
        }
        updateProfile(user)
        setChangeEmail(!changeEmail)
        inputEmail.current.style.display = "none"
        userEmail.current.style.display = ""
        changeEmailBtn.current.style.display = "none"
        userEmail.current.textContent = inputEmail.current.value
      }

      const updateName = () =>{ 
        setUser({...user, name: inputName.current.value})
      }
      const updateEmail = () =>{ 
        setUser({...user, email: inputEmail.current.value})
      }

  return (
    <>
    <div style={allowEdit} className="profile">
    <h1>Profile</h1>
    <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
    <div className="wrapper-profile">
      <article className="content">
        <div className="row">
          <div className="left">
            <div 
              onClick={()=> setOpenModal(!openModal)}
              onChange={()=>changeColor()} 
              ref={picRef} 
              className="pic" 
              style={
                {
                  zIndex:1,background: user.bgColor,
                  color: user.color
                  ,pointerEvents: allowEdit.pointerEvents
                }}
            >
            <Modal setOpenModal={setOpenModal} openModal={openModal} style={{height:'800px',width:'800px',zIndex:2}} />
            </div>
          </div>
          <div className="middle">
            <span ref={userName} id="user-name">{user.name}</span>
            <input onChange={()=>updateName()} style={{display:'none'}} ref={inputName} id="change-name-input" type="text" />
            <Button style={{display:'none'}} ref={changeNameBtn} id="change-name-btn" onClick={()=>closeEditName()}>save</Button>
          </div>
          <div className="right edit"><a  id="edit-link" onClick={()=>editName()} >Edit</a></div>
        </div>

        <div className="row">
          {/* <div className="left meeting-id-div">Meeting ID</div> */}
          <div className="left meeting-id-div">Sign-In Email</div>
          <div className="middle">
            <div  className="wrapper is-hidden">
              <svg className="IconLock" viewBox="0 0 20 20">
                    <path d="m3,9v11h14V9M4,9V6c0-3.3 2.7-6 6-6c3.3,0 6,2.7 6,6v3H14V6c0-2.2-1.8-4-4-4-2.2,0-4,1.8-4,4v3"/>
                </svg>
              {/* <input  id="meeting-id" type="password" value={user._id} disabled/> */}
              <input  id="meeting-id" type="password" value={` ${user.email}`} disabled/>
            
              <span onClick={()=>showId()} className="eye-wrapper">
            <svg className="eye" viewBox="0 0 41 35">
                <path d="M0.383892538,3.17821758 L3.61610746,0.821782417 C9.18642427,8.46233259 14.6644355,12.1599181 20.0150445,12.1599181 C25.3829255,12.1599181 31.0335648,8.44371065 36.918544,0.781730062 L40.0908103,3.21826994 C33.52281,11.7695135 26.8470275,16.1599181 20.0150445,16.1599181 C13.1657895,16.1599181 6.63377097,11.7508915 0.383892538,3.17821758 Z"/>
                  <circle cx="20" cy="21" r="5"/>
                <path className="eye-lash" d="M30.9966289,12.3253231 L35.799988,18.2788105 L33.4651628,20.162581 L28.4263035,13.9172046 C26.2984052,15.057778 24.1568186,15.7664986 22,16.0360481 L22,23.7251965 L18,23.7251965 L18,16.0317832 C15.9550251,15.7707571 13.9385363,15.1116572 11.9495735,14.0611955 L6.15173109,21.009765 L3.84826891,19.0877708 L9.37055008,12.4694545 C6.31047708,10.305764 3.31613273,7.20023807 0.383892538,3.17821758 L3.61610746,0.821782417 C9.18642427,8.46233259 14.6644355,12.1599181 20.0150445,12.1599181 C25.3829255,12.1599181 31.0335648,8.44371065 36.918544,0.781730062 L40.0908103,3.21826994 C37.0835611,7.1335744 34.0537164,10.1766038 30.9966289,12.3253231 Z"/>
            </svg>
              </span>
            </div>
          </div>
          <div className="right edit"></div>
        </div>

        {/* <div className="row">
          <div className="left">Sign-In Email</div>
          <div className="middle">
            <span ref={userEmail} id="user-email" >{user.email}</span>
            <input onChange={()=>updateEmail()} id="change-email-input" ref={inputEmail} style={{display:'none'}} type="text" />
            <Button style={{display:'none'}} ref={changeEmailBtn} id="change-email-btn" onClick={()=>closeEditEmail()}>save</Button>
          </div>
          <div className="right edit"><a  onClick={()=>editEmail()} >
          {/* Edit Password */}
            {/* </a></div> */}
        {/* </div>  */}

        <div className="row">
          <div className="left">Password</div>
          <div className="middle pass" >**********</div>
          <div className="right edit"><a><EditPassword user={user} /></a></div>
        </div>
        
        <div className="row">
          <div className="left">License</div>
          <div className="middle">Basic - 100 participants</div>
          <div className="right edit"><a  target="_blank" href="/pricing">Edit</a></div>
        </div>

        <div className="row">
          <div className="left"></div>
          <DeleteButton  onClick={()=>deleteUser()} className="middle delete-btn">Delete Account</DeleteButton>
          <div className="right edit"></div>
        </div>
      </article>
    </div>
  </div>
  </>

  )
}
