import React, { useEffect, useRef } from 'react'
import './style.scss'
import $ from 'jquery'
import copy from 'copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '../../globalStyles';
import { niceAlert, deleteAlert } from '../../services/alerts';
import { useHistory } from 'react-router-dom';
import { Modal } from '@mui/material';

export default function Profile() {
    const history = useHistory()
    const eyeRef = useRef()
    useEffect(()=>{

    },[])

    const changeColor = (element)=> {
        document.body.style.background = element.value
    }

    const deleteUser = async () =>{
      const isDeleted = await deleteAlert('Are you sure you want to delete the account?')
      if(isDeleted)
      history.push('/')
    }

    const showId = ()=> {
        $(".wrapper").toggleClass("is-hidden");
        var inputType = $(".wrapper").hasClass("is-hidden") ? "password" : "text";
        setTimeout(function() {
          const input = $("input").attr("type", inputType);
          if(inputType === "text"){
              toast.info('Copied', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                });
              copy(input[0].value)
          }
        }, 50);
      };
  return (
    <div className="profile">
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
            <Modal/>
            <Modal/>
            <Modal/>
            <Modal/>
            <div className="pic">
              s
            </div>
          </div>
          <div className="middle">Sagi Golan</div>
          <div className="right edit"><a href="/">Edit</a></div>
        </div>

        <div className="row">
          <div className="left">Meeting ID</div>
          <div className="middle">
            <div className="wrapper is-hidden">
              <svg className="IconLock" viewBox="0 0 20 20">
                    <path d="m3,9v11h14V9M4,9V6c0-3.3 2.7-6 6-6c3.3,0 6,2.7 6,6v3H14V6c0-2.2-1.8-4-4-4-2.2,0-4,1.8-4,4v3"/>
                </svg>
              <input id="meeting-id" type="password" value="91u2dhjk2343e3d" disabled/>
            
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

        <div className="row">
          <div className="left">Sign-In Email</div>
          <div className="middle">saking88@gmail.com</div>
          <div className="right edit"><a href="/">Edit</a></div>
        </div>

        <div className="row">
          <div className="left">Password</div>
          <div className="middle pass">**********</div>
          <div className="right edit"><a href="/">Edit</a></div>
        </div>
        
        <div className="row">
          <div className="left">License</div>
          <div className="middle">Basic - 100 participants</div>
          <div className="right edit"><a href="/">Edit</a></div>
        </div>

        <div className="row">
          <div className="left"></div>
          <Button onClick={()=>deleteUser()} className="middle delete-btn">Delete Account</Button>
          <div className="right edit"></div>
        </div>
      </article>
    </div>
  </div>
  )
}
