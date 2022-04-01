import React, { useContext, useEffect, useRef, useState } from 'react'
import AgoraRTC from "agora-rtc-sdk-ng"
import './style.scss'
import{
    LegalSection,
    LegalHeaderWrapper,
    LegalCardSubText,
} from '../Legal/LegalStyles'
import { UserContext } from '../Context/UserContext'
import { getAgoraToken } from '../../services/request'
import { Main, Container } from '../../globalStyles'
import { FormButton, FormLabel } from '../Form/FormStyles'
import { infoNotification } from '../../services/alerts'

// stills in progress

export default function Meeting() {
    const { user } = useContext(UserContext)
    const [audio, setAudio] = useState(false)
    const [video, setVideo] = useState(false)
    const videoRef = useRef()
    const audioRef = useRef()
    const leaveRef = useRef()

//#1
let client = AgoraRTC.createClient({mode:'rtc', codec:"vp8"})


//#2
let config = {
  appid:'ee8c78bbbb69425f8a9ab38fc1914a71',
  token: null, // => value will change by function getAgoraToken
  uid:null,  // => created by agora if not given
  channel:'chatroom',
}

//#3 - Setting tracks for when user joins
let localTracks = {
  audioTrack:null,
  videoTrack:null
}

//#4 - Want to hold state for users audio and video so user can mute and hide
let localTrackState = {
  audioTrackMuted:false,
  videoTrackMuted:false
}

//#5 - Set remote tracks to store other users
let remoteTracks = {}
  useEffect(()=>{
      
    AgoraRTC.setLogLevel(4) //stops agora logs

    window.scrollTo({
        top: 0,
        left:0,
        behavior:"smooth",
      })   

    document.getElementById('join-btn').addEventListener('click', async () => {
        if(!document.cookie){
            return infoNotification('In order to get in the stream you must sign in first','top-center')
        }
        const res = await getAgoraToken() 
        console.log(res)
        config.token = res 
        // config.uid = document.getElementById('username').value
        await joinStreams()
        document.getElementById('join-wrapper').style.display = 'none'
        document.getElementById('footer').style.display = 'flex'
    })

    const handleAudio = async () => {
        if(!localTrackState.audioTrackMuted){
            setAudio(true)
            //Mute your audio
            await localTracks.audioTrack.setMuted(true);
            localTrackState.audioTrackMuted = true
        }else{
            setAudio(false)
            await localTracks.audioTrack.setMuted(false)
            localTrackState.audioTrackMuted = false
        }
    }
    const handleVideo = async () =>{
        //Check if what the state of muted currently is
        //Disable button
        if(!localTrackState.videoTrackMuted){
        setVideo(true)
        //Mute your audio
        await localTracks.videoTrack.setMuted(true);
        localTrackState.videoTrackMuted = true
    }else{
        setVideo(false)
        await localTracks.videoTrack.setMuted(false)
        localTrackState.videoTrackMuted = false
        }
    }


    const handleLeave = async () => {
            //Loop threw local tracks and stop them so unpublish event gets triggered, then set to undefined
            //Hide footer
            for (let trackName in localTracks){
                let track = localTracks[trackName]
                if(track){
                    track.stop()
                    track.close()
                    localTracks[trackName] = null
                }
            }
            //Leave the channel
            await client.leave()
            if(document.getElementById('footer')){
                document.getElementById('footer').style.display = 'none'
                document.getElementById('user-streams').innerHTML = ''
                document.getElementById('join-wrapper').style.display = 'block'
            }
        }

    audioRef.current.addEventListener('click', handleAudio)

    videoRef.current.addEventListener('click', handleVideo)

    leaveRef.current.addEventListener('click', handleLeave)


//Method will take all my info and set user stream in frame
let joinStreams = async () => {
    //Is this place hear strategicly or can I add to end of method?
    
    client.on("user-published", handleUserJoined);
    client.on("user-left", handleUserLeft);


    client.enableAudioVolumeIndicator(); // Triggers the "volume-indicator" callback event every two seconds.
    client.on("volume-indicator", (evt) => {
        console.log(evt)
        for (let i = 0; evt.length > i; i++){
            let speaker = evt[i].uid
            let volume = evt[i].level
            if(volume > 0.3 ){
                document.getElementById(`volume-${speaker}`).src = './assets/volume-on.svg'
            }else{
                if(document.getElementById(`volume-${speaker}`))
                document.getElementById(`volume-${speaker}`).src = './assets/volume-off.svg'
            }
        }
    });

    //#6 - Set and get back tracks for local user
    [config.uid, localTracks.audioTrack, localTracks.videoTrack] = await  Promise.all([
        client.join(config.appid, config.channel, config.token || null, config.uid || null),
        AgoraRTC.createMicrophoneAudioTrack(),
        AgoraRTC.createCameraVideoTrack()
    ])
    

    
    
    
    
    
    // <div style="z-index: 1;position:absolute;display:flex;align-items:center;flex-direction: column;justify-content: center;height: 5vw;width: 5vw;border-radius:10px;background:${user.bgColor};color:${user.color}">${user.name ? user.name.charAt(0).toUpperCase(): ''}</div>
    //#7 - Create player and add it to player list
    let player = `<div class="video-containers" id="video-wrapper-${config.uid}" style="display:flex;">
    <p class="user-uid"><img class="volume-icon" id="volume-${config.uid}" src="./assets/volume-on.svg" />${user.name}</p>
                        <div class="video-player player" id="stream-${config.uid}"></div>
                  </div>`

    document.getElementById('user-streams').insertAdjacentHTML('beforeend', player);
    //#8 - Player user stream in div
    localTracks.videoTrack.play(`stream-${config.uid}`)

    //#9 Add user to user list of names/ids

    //#10 - Publish my local video tracks to entire channel so everyone can see it
    await client.publish([localTracks.audioTrack, localTracks.videoTrack])
}

let handleUserJoined = async (participant, mediaType) => {
    console.log('Handle user joined')
    //#11 - Add participant to list of remote participants
    remoteTracks[participant.uid] = participant
    console.log(remoteTracks)
    //#12 Subscribe ro remote participants
    await client.subscribe(participant, mediaType)
    
    if (mediaType === 'video'){
        let player = document.getElementById(`video-wrapper-${participant.uid}`)
        console.log('player:', player)
        if (player != null){
            player.remove()
        }
 
        player = `<div class="video-containers" id="video-wrapper-${participant.uid}">
                        <p class="user-uid"><img class="volume-icon" id="volume-${participant.uid}" src="./assets/volume-on.svg" />${user.name}</p>
                        <div  class="video-player player" id="stream-${participant.uid}"></div>
                  </div>`
        document.getElementById('user-streams').insertAdjacentHTML('beforeend', player);
         participant.videoTrack.play(`stream-${participant.uid}`)
    }

    if (mediaType === 'audio') {
        participant.audioTrack.play();
      }
}




let handleUserLeft = (participant) => {
    console.log('Handle participant left!')
    //Remove from remote participants and remove participants video wrapper
    delete remoteTracks[participant.uid]
    document.getElementById(`video-wrapper-${participant.uid}`).remove()
}

    
return () => {
   //remove camera light
   const videos = document.querySelectorAll('.video-containers')
   for (const video of videos) {
       video.srcObject = null;
   }
   handleLeave()
   if(audioRef.current && videoRef.current && leaveRef.current){
       audioRef.current.removeEventListener('click', handleAudio)
   
       videoRef.current.removeEventListener('click', handleVideo)
   
       leaveRef.current.removeEventListener('click', handleLeave)
   }

}
  },[])

  return (
    <LegalSection background style={{padding:'90px 0'}}>
    <LegalHeaderWrapper>
    </LegalHeaderWrapper>
    <Container>
        <LegalCardSubText>

    <Main className='main-meeting-container'>

        {/* <div id="join-wrapper">
        <input id="username" type="text" placeholder="Enter your name..." />
         <button id="join-btn">Join Stream</button>
        </div> */}
        <Container id="join-wrapper">
            {/* <FormLabel style={{color:'#afafaf'}}>Create Meeting</FormLabel>
            <FormInput placeholder='Paste here your meeting ID' />
            <FormButton style={{marginBottom:'20px'}}>Create Stream</FormButton> */}
            
            <FormLabel style={{color:'#afafaf'}}>Join Meeting</FormLabel>
            {/* <FormInput placeholder="Paste here your friend's meeting ID" /> */}
            <FormButton id="join-btn">Join Stream</FormButton>
        </Container>


        <div id="user-streams" ></div>
        <div id="footer">
                <div 
                    ref={videoRef}
                 className="main__controls__button main__video_button" >
                    {
                       video
                       ?
                       <>
                       <i id="camera-btn" className="stop fas fa-video-slash"></i>
                       <span>Play Video</span>
                       </>
                       :
                       <>
                       <i id="camera-btn" className="fas fa-video"></i>
                       <span>Stop Video</span>
                       </>
                   }
               </div>
               <div 
                    ref={audioRef}
               className="main__controls__button main__mute_button">
                   {
                       audio
                       ?
                       <>
                       <i id="mic-btn" className="unmute fas fa-microphone-slash"></i>
                       <span>Unmute</span>
                       </>
                       :
                       <>
                       <i id="mic-btn" className="fas fa-microphone"></i>
                       <span>Mute</span>
                       </>
                   }
               </div>
            <div
                ref={leaveRef}
                className="main__controls__block"
                >
               <div className="main__controls__button">
                  <span id="leave-btn" className="leave_meeting">Leave Meeting</span>
               </div>
            </div>
        </div>
    </Main>
            </LegalCardSubText>
        </Container>
    </LegalSection> 
  )
}
