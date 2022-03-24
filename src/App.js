import React, { useEffect, useState } from 'react';
import GlobalStyle, { ScrollerDiv, ScrollerImg } from './globalStyles';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

//Pages
// import Home from './pages/Home';
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
import { checkToken, deleteCookie } from './services/request';
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
	useEffect(()=>{
		const onScroll = ()=>{
			window.pageYOffset > 300
			?
			setDisplayScroller(true)
			:
			setDisplayScroller(false)
		}
		window.addEventListener('scroll',onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	},[])
	
	const scrollTop = () => {
		window.scrollTo({
		top:0,
		left:0,
		behavior:"smooth",
	    })   
	}



	return (
		<Router>
			<GlobalStyle />
			<UserContext.Provider value={{ user, setUser, initialState }}>
			<Navbar />
			</UserContext.Provider>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/policy" exact component={PrivacyPolicy} />
				<Route path="/terms" exact component={Terms} />
				<Route path="/disclaimer" exact component={Disclaimer} />
				<Route path="/safety" exact component={Safety} />
				<UserContext.Provider value={{ user, setUser, initialState }}>
					<Route path="/signup" exact component={SignUp} />
					<Route path="/verification" exact component={Verification} />
					<Route path="/signin" exact component={SignIn} />
					<Route path="/meeting" exact component={Meeting} />
					<Route path="/profile" exact component={Profile} />
					<Route path="/feedback" exact component={Feedback} />
					<Route path="/pricing" exact component={Pricing} />
				</UserContext.Provider>
					{/* <Route path="/contact" exact component={Contact} /> */}
			</Switch>
			<ScrollerDiv onClick={()=>scrollTop()} displayScroller={displayScroller}>
				<ScrollerImg src="./assets/scrollUp.png" />
			</ScrollerDiv>
			<Footer />
		</Router>
	);
}

export default App;
