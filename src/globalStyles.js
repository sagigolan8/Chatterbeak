import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  button{
	&:focus{
		border: 4px solid #00237cb8;
	}
  }
  }

  /*scroll bar*/
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: red;
  background: linear-gradient(90deg, rgb(228, 218, 218), rgb(168, 151, 151));
}

::-webkit-scrollbar {
  width: 20px;
  background-color: black;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 6px 6px 6px rgba(0, 0, 0, 0.897);
  background: linear-gradient(to right, rgb(0, 0, 0), rgb(2, 28, 65));
}
#style-1::-webkit-hover {
  border-radius: 10px;
  -webkit-box-shadow: inset 6px 6px 6px rgba(0, 0, 0, 0.3);
  background: linear-gradient(to right, rgb(0, 0, 0), rgb(2, 28, 65));
}
#styled-avatar {
  border: 4px solid hsl(210, 30%, 0%);
}
/* transition animation between routes*/
/* simple - enter transition 400ms, exit 200ms */
.fade-appear,
.fade-enter {
    opacity: 0;
    z-index: 1;
}
.fade-appear-active,
.fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 400ms ease-in 200ms;
}

.fade-exit {
    opacity: 1;
}

.fade-exit.fade-exit-active {
    opacity: 0;
    transition: opacity 200ms ease-in;
}
`;

export const Container = styled.div`
	display: ${({ flex }) => (flex ? 'flex' : '')};
	width: 100%;
	max-width: 1300px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 50px;

	@media screen and (max-width: 960px) {
		padding: 0 30px;
	}
`;
export const MainHeading = styled.h1`
	font-family: 'Paytone One', sans-serif;
	font-size: clamp(2.3rem, 6vw, 4.5rem);
	margin-bottom: 2rem;
	color: ${({ inverse }) => (inverse ? '$403ae3' : '#fff')};
	width: 100%;
	letter-spacing: 4px;
	text-align: center;
	text-shadow: ${({ textShadow }) => (
		textShadow 
		?
		'1px 1px 1px #016f91, 1px 2px 1px #016f91, 1px 3px 1px #016f91, 1px 4px 1px #016f91, 1px 5px 1px #016f91, 1px 6px 1px #016f91, 1px 7px 1px #016f91, 1px 8px 1px #016f91, 1px 9px 1px #016f91, 1px 1px 1px #016f91, 1px 1px 1px rgb(16 16 16 / 40%), 1px 12px 10px rgb(16 16 16 / 20%), 1px 25px 35px rgb(16 16 16 / 20%), 1px 30px 60px rgb(16 16 16 / 40%)'
		: 
		''
		)}; 
		@media screen and (min-width : 600px) and (max-width : 1200px) and (orientation :landscape) {
			font-size: clamp(1.8rem,3.8vw,3.8rem);
			margin-bottom: 1rem;
		}
		
`;

export const Heading = styled.h2`
	font-size: clamp(1.3rem, 13vw, 3.1rem);
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
	color: ${({ inverse }) => (inverse ? '$403ae3' : '#fff')};
	letter-spacing: ${({ noSpacing }) => (noSpacing ? '' : '0.4rem')};
	line-height: 1.06;
	text-align: center;
	width: ${({ width }) => (width ? width : '100%')};
`;
export const TextWrapper = styled.span`
	color: ${({ color }) => (color ? color : '')};
	font-size: ${({ size }) => (size ? size : '')};
	font-weight: ${({ weight }) => (weight ? weight : '')};
	letter-spacing: ${({ spacing }) => (spacing ? spacing : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
`;
export const Section = styled.section`
	padding: ${({ padding }) => (padding ? padding : '140px 0')};
	margin: ${({ margin }) => (margin ? margin : '')};
	background: ${({ inverse }) => (inverse ? 'white' : '#071c2f')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
	@media screen and (max-width: 768px) {
		padding: ${({ smPadding }) => (smPadding ? smPadding : '70px 0')};
	}
`;

export const Row = styled.div`
	display: flex;
	justify-content: ${({ justify }) => (justify ? justify : '')};
	align-items: ${({ align }) => (align ? align : '')};
	gap: ${({ gap }) => (gap ? gap : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
	flex-wrap: ${({ wrap }) => (wrap ? wrap : '')};
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: ${({ justify }) => (justify ? justify : '')};
	align-items: ${({ align }) => (align ? align : '')};
	gap: ${({ gap }) => (gap ? gap : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
`;

export const Button = styled.button`
	border-radius: 4px;
	background: none;
	white-space: nowrap;
	padding: 10px 20px;
	font-size: 16px;
	font-weight: 500;
	color: #fff;
	outline: none;
	border: 2px solid #fff;
	cursor: pointer;
	overflow: hidden;
	position: relative;

	&:before {
		background: #fff;
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
		transition: all 0.4s ease;
		width: 100%;
		height: 0%;
		transform: ${({ contrast }) => (contrast ? 'translate(-50%, -50%) rotate(45deg)' : 'translate(-50%, -50%) rotate(-45deg)')};

	}

	&:hover:before {
		height: 500%;
	}

	&:hover {
		color: black;
	}
`;

export const LinkButton = styled.a`
	border-radius: 4px;
	background: none;
	white-space: nowrap;
	padding: 10px 20px;
	font-size: 16px;
	font-weight: 500;
	color: #fff;
	outline: none;
	border: 2px solid #fff;
	cursor: pointer;
	overflow: hidden;
	position: relative;

	&:before {
		background: #fff;
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
		transition: all 0.4s ease;
		width: 100%;
		height: 0%;
		transform: ${({ contrast }) => (contrast ? 'translate(-50%, -50%) rotate(45deg)' : 'translate(-50%, -50%) rotate(-45deg)')};

	}

	&:hover:before {
		height: 500%;
	}

	&:hover {
		color: black;
	}
`;


export const ScrollerDiv = styled.div`
	cursor: pointer;
	position: fixed;
	border: none;
	outline: none;
	background: transparent;
	z-index: 2000;
	bottom: 47px;
	right: 15px;
	width: 56px;
	height: 56px;
	display: ${({displayScroller})=>(displayScroller ? '' : 'none' )}; 
	`;
	
	export const ScrollerImg = styled.img`
	border:none;
	z-index: 2000;
`;

export const Main = styled.main`

`;


export default GlobalStyle;
