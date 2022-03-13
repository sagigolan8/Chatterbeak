import React, { useState } from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

//Pages
import Home from './pages/Home';
import SignUp from './components/SignUp/SignUp';
import Pricing from './components/Pricing/Pricing';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import Footer from './components/Footer/Footer';
import Terms from './components/Terms/Terms';
import Disclaimer from './components/Disclaimer/Disclaimer';
import Report from './components/Report/Report';
import SignIn from './components/SignIn/SignIn';
import Safety from './components/Safety/Safety';
import Feedback from './components/Feedback/Feedback';
import Profile from './components/Profile/Profile';
import Meeting from './components/Meeting/Meeting';
import Verification from './components/Verification/Verification';
import { UserContext } from './components/Context/UserContext';
// import Contact from './components/Contact/Contact'

function App() {

	const [user, setUser] = useState({
		name:'',
		email:'',
		password:'',
		id:'',
		bgColor:'#969696',
		color:'#fff'
	});

	return (
		<Router>
			<GlobalStyle />
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/policy" exact component={PrivacyPolicy} />
				<Route path="/terms" exact component={Terms} />
				<Route path="/disclaimer" exact component={Disclaimer} />
				{/* <Route path="/report" exact component={Report} /> */}
				<Route path="/safety" exact component={Safety} />
				<UserContext.Provider value={{ user, setUser }}>
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
			<Footer />
		</Router>
	);
}

export default App;
