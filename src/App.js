import React, { useEffect, useRef, useState } from 'react';
import GlobalStyle, { ScrollerDiv, ScrollerImg } from './globalStyles';
import { Switch, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import AgoraRTC from "agora-rtc-sdk-ng"

//Pages
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import SignUp from './components/SignUp/SignUp';
import Pricing from './components/Pricing/Pricing';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import Footer from './components/Footer/Footer';
import Terms from './components/Terms/Terms';
import Disclaimer from './components/Disclaimer/Disclaimer';
import SignIn from './components/SignIn/SignIn';
import Safety from './components/Safety/Safety';
import Feedback from './components/Feedback/Feedback';
import Profile from './components/Profile/Profile';
import Meeting from './components/Meeting/Meeting';
import Verification from './components/Verification/Verification';
import { UserContext } from './components/Context/UserContext';
import { ToastContainer } from 'react-toastify';
// import Contact from './components/Contact/Contact'

function App() {
	const initialState = { 
		name:'',
		email:'',
		password:'',
		_id:'',
		bgColor:'#969696',
		color:'#fff'
	}
	const [user, setUser] = useState(initialState);
	const [displayScroller, setDisplayScroller] = useState(false)
	const location = useLocation()
	const nodeRef = useRef()

	useEffect(()=>{
		AgoraRTC.setLogLevel(4) //stops agora logs
		
		const onScroll = ()=>{
			window.pageYOffset > 300
			?
			setDisplayScroller(true)
			:
			setDisplayScroller(false)
		}
		window.addEventListener('scroll',onScroll);
		return () => {
			window.removeEventListener('scroll', onScroll);
		}
	},[])
	
	const scrollTop = () => {
		window.scrollTo({
		top:0,
		left:0,
		behavior:"smooth",
	    })   
	}

	return (
		<>
			<ToastContainer/>
			<GlobalStyle />
			<UserContext.Provider value={{ user, setUser, initialState }}>
			<Navbar />
			</UserContext.Provider>
			<TransitionGroup>
				<CSSTransition
				  timeout={400}
				  classNames="fade"
				  key={location.key}
//nodeRef={nodeRef}// =>Fix the findDOMNode error but disable the fade animation. Solution:delete React.StrictMode 
				>
					<Switch>
						<Route location={location}  path="/" exact component={Home} />
						<Route location={location} path="/policy" exact component={PrivacyPolicy} />
						<Route location={location}  path="/terms" exact component={Terms} />
						<Route location={location} path="/disclaimer" exact component={Disclaimer} />
						<Route location={location} path="/safety" exact component={Safety} />
						<UserContext.Provider value={{ user, setUser, initialState }}>
							<Route location={location} path="/signup" exact component={SignUp} />
							<Route location={location} path="/verification" exact component={Verification} />
							<Route location={location} path="/signin" exact component={SignIn} />
							<Route location={location} path="/meeting" exact component={Meeting} />
							<Route location={location} path="/profile" exact component={Profile} />
							<Route location={location} path="/feedback" exact component={Feedback} />
							<Route location={location} path="/pricing" exact component={Pricing} />
						</UserContext.Provider>
						{/* <Route component={Pricing} /> */}
						<Route path='*' exact={true} component={Pricing} />
							{/* <Route path="*">
								<div>Not found</div>
							</Route> */}
							{/* <Route path="/contact" exact component={Contact} /> */}
					</Switch>
				</CSSTransition>
			</TransitionGroup>
			<ScrollerDiv onClick={()=>scrollTop()} displayScroller={displayScroller}>
				<ScrollerImg src="./assets/scrollUp.png" />
			</ScrollerDiv>
			<Footer />
			</>
	);
}

export default App;
