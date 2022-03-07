import validator from 'validator';
import axios from 'axios';
const baseUrl = 'http://localhost:8080'

///move validateForm to server 
export default async function validateForm({ name, email, password, confirmPass, terms }) {
	const { data } = await axios.post(`${baseUrl}/user/signup`,{
		name,
		email,
		password,
		confirmPass,
		terms
	})
	console.log(data)
	return data 
}


// export default function validateForm({ name, email, password, confirmPass, terms }) {
// 	if (!name.trim()) {
// 		return 'Username required';
// 	}
// 	// else if (!/^[A-Za-z]+/.test(name.trim())) {
// 	//   errors.name = 'Enter a valid name';
// 	// }

// 	const regex =
// 		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// 	if (!email) {
// 		return 'Email required';
// 	} else if (regex.test(email.toLocalLowerCase)) {
// 		return 'Email address is invalid';
// 	}
// 	if (!password) {
// 		return 'Password is required';
// 	} else if (password.length < 6) {
// 		return 'Password needs to be 6 characters or more';
// 	}

// 	if (!confirmPass) {
// 		return 'Enter Confirm password is required';
// 	} else if (confirmPass !== password) {
// 		return 'Passwords do not match';
// 	}
// 	if(!terms){
// 		return 'Terms confirmation is required';
// 	}
	
// 	return null;
// }
