import styled from "styled-components"
export const FeedbackButton = styled.button`
text-transform: uppercase;
border-radius: 4px;
background: none;
white-space: nowrap;
padding: 13px 14px;
font-size: clamp(9px,14px,17px);
font-weight: 500;
color: #fff;
outline: none;
border: 2px solid #fff;
cursor: pointer;
overflow: hidden;
text-align: center;
width: 100px;
position: absolute;
bottom: 22px;
transition: all 0.4s linear; /* vendorless fallback */
-o-transition: all 0.4s linear; /* opera */
-ms-transition: all 0.4s linear; /* IE 10 */
-moz-transition: all 0.4s linear; /* Firefox */
-webkit-transition: all 0.4s linear; /*safari and chrome */

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
    background: #fff;
    color: black;
    transition: all 0.6s ease;
}
` 