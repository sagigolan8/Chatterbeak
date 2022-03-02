import React, { useState, useEffect, useRef } from 'react';
import { FaRProject, FaTimes } from 'react-icons/fa';
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
} from './NavbarStyles.js';
import { useLocation, useHistory } from 'react-router-dom';
import { data } from '../../data/NavbarData';
// import { animateScroll as scroll } from 'react-scroll';
const Navbar = () => {
	const navRef = useRef()
	const [inverse, setInverse] = useState(true)
	const [inverseHover, setInverseHover] = useState(true)
	const [linkActive, setLinkActive] = useState('')

	useEffect(() => {
		// if

        const onScroll = () => displayNavBackground()

        window.addEventListener('scroll', onScroll);
        
        return () => window.removeEventListener('scroll', onScroll);
    }, [linkActive]);

	const [show, setShow] = useState(false);

	let history = useHistory();
	let location = useLocation();

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

	/**
	 * If we are in "homePage" we scroll to the selected id section. 
	 * Else navigate to the location that pushed into the history. 
	 */
	const closeMobileMenu = (to, id,{ target: { parentElement } }) => {
		removeFooterMarker()
		if(linkActive)
		linkActive.classList.remove('active-nav')
		setLinkActive(parentElement)
		parentElement.classList.add('active-nav')
		history.push(to);
		setShow(false);
	};

	const removeFooterMarker = () =>{
		const currLink = document.querySelector('.active-footer')
		if(currLink){
			currLink.classList.remove('active-footer')
		} 
	}

	return (
		<IconContext.Provider value={{ color: '#fff' }}>
		<Nav ref={navRef}>
				<NavbarContainer>
					<NavLogo to="/" onClick={()=>{
						if(linkActive)
						linkActive.classList.remove('active-nav')
					}}>
						<NavIcon src="./assets/chatterlogo.png" alt="logo" />

					</NavLogo> 
					<MobileIcon onClick={handleClick}>
						{show ? <FaTimes /> : <CgMenuRight />}
					</MobileIcon>
					<NavMenu show={show}>
						{data.map((el, index) => (
							<NavItem key={index}>
								<NavLinks
									inverseHover={inverseHover} 
									inverse={inverse} 
									onClick={(e) => closeMobileMenu(el.to, el.id,e)
									}
								>
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




