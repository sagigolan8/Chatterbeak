import React, { useState, useEffect, useRef, useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import { CgMenuRight } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	MobileIcon,
	NavMenu,
	NavLinks,
	NavItem,
	NavUser,
	NavLogOut,
} from './NavbarStyles.js';
import { useHistory } from 'react-router-dom';
import { data } from '../../data/NavbarData';
import { UserContext } from '../Context/UserContext.js';
import { BiLogOut } from 'react-icons/bi';
import { checkToken, deleteCookie } from '../../services/request.js';

const Navbar = () => {
	const { user, setUser, initialState } = useContext(UserContext)
	const history = useHistory();
	const navRef = useRef()
	const [inverse, setInverse] = useState(true)
	const [inverseHover, setInverseHover] = useState(true)
	const [show, setShow] = useState(false);

	useEffect(() => {
		const connectUserByToken = async (path=history.location.pathname) => {
			console.log('check token')
			const userData = await checkToken(document.cookie,path)
			if(userData.verify){
				return
			}
			if(userData.error){// => check all the time except the signup some user
				setUser(initialState)
				return handleLogOut(user._id,'tokenCheck') 
			}
			return setUser(userData)
		}
		connectUserByToken()

		history.listen( async () => await connectUserByToken(history.location.pathname));

        const onScroll = () => displayNavBackground()

        window.addEventListener('scroll', onScroll);
        
        return () => window.removeEventListener('scroll', onScroll);
    }, []);


	const handleClick = () => {
		setShow(!show);
	};

	const displayNavBackground = () => {
		if(window.pageYOffset > 0)
		{
			setInverseHover(true)
			setInverse(true)
			navRef.current.children[0].style.background = 'linear-gradient(to right, #000000, #021c41)'
		}
		else{
			setInverseHover(false)
			setInverse(false)
			navRef.current.children[0].style.background = 'transparent'
		}
	};


	const closeMobileMenu = (to) => {
		history.push(to);
		setShow(false);
	};

	const handleLogOut = (id,tokenCheck='') => {
		setUser(initialState)
		deleteCookie(id)
		if(!tokenCheck){
			history.push('/')
		}
	}

	return (
		<IconContext.Provider value={{ color: '#fff' }}>
		<Nav ref={navRef}>
				<NavbarContainer>
					{
						user.name 
						?
					<NavLogOut>
					<BiLogOut onClick={()=>handleLogOut(user._id)} style={{cursor:'pointer',fontSize:'26px'}} />
					</NavLogOut>
						:
						''
					}
					<NavLogo to="/">
						<NavIcon src="./assets/chatterlogo.png" alt="logo" />
					</NavLogo> 
						<NavUser href="/profile">
							{
								user.name ? `🟢 ${user.name}` : ''
							}
							</NavUser>
					<MobileIcon onClick={handleClick}>
						{show ? <FaTimes /> : <CgMenuRight />}
					</MobileIcon>
					<NavMenu show={show}>
						{data.map((el, index) => (
							<NavItem key={index}>
								<NavLinks
									inverseHover={inverseHover} 
									inverse={inverse} 
									onClick={(e) => closeMobileMenu(el.to, el.id,e)}>
									{el.text}
								</NavLinks>
							</NavItem>
						))}
					</NavMenu>
				</NavbarContainer>
			</Nav>
			</IconContext.Provider> 
	);
};		





export default Navbar;




