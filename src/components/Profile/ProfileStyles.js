import styled from "styled-components";
import { Button } from "../../globalStyles";

export const DeleteButton = styled(Button)`
	transition: all 0.4s linear; /* vendorless fallback */
	-o-transition: all 0.4s linear; /* opera */
	-ms-transition: all 0.4s linear; /* IE 10 */
	-moz-transition: all 0.4s linear; /* Firefox */
	-webkit-transition: all 0.4s linear; /*safari and chrome */
	
	@media screen and (max-width: 600px) {
		padding: 10px 0px;
	}
	@media screen and (max-width: 500px) {
		padding: 10px 0px;
		font-size: 12px;
	}
	@media screen and (max-width: 400px) {
		padding: 10px 0px;
		font-size: 8px;
	}
	@media screen and (max-width: 300px) {
		padding: 9px 3px;
		font-size: 7px;
	}
`;