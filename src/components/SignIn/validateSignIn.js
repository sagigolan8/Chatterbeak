import axios from 'axios';
const baseUrl = 'http://localhost:8080'

///move validateForm to server 
export default async function validateForm({ email, password}) {
	const { data } = await axios.post(`${baseUrl}/user/signin`,{
		email,
		password,
	})
	console.log(data)
	return data 
}
