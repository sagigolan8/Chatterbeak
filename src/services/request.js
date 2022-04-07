import axios from "axios"
import Cookies from 'js-cookie'
// const baseUrl = 'http://localhost:8080'
const baseUrl = 'https://chatterbeak.herokuapp.com'

//Temporary - handles cookies problem when cookies is created with localhost but not with heroku 
const isHeroku = baseUrl.includes('herokuapp') ? true : false 


export const validateSignUp = async ({ name, email, password, confirmPass, terms }) => {
	const { data } = await axios.post(`${baseUrl}/signup`,{
		name,
		email,
		password,
		confirmPass,
		terms
	})
	return data 
}

export const validateSignIn = async ({ email, password })  => {
    const { data } = await axios.post(`${baseUrl}/signin`,{
        email,
        password,
    },{ withCredentials: true })
    try {
        console.log(data)
        if(isHeroku){ //heroku not let us create cookie with axios so we need to create it from the client side
            Cookies.set(data.user._id,data.token,{
                expires: 1/48 //30
            })
            return data
        }
        else{
            return data
        }
    } catch (err) {
        console.log(err)
        return data
    }

}

export const checkOtp = async (user,otp) => {
    try{
        const { data } = await axios.post(`${baseUrl}/otp`,{ user, otp });
        return data
        
    } catch (err) {
        console.error(err);
    }
}

export const sendOtpAgain = async (user) => { //send opt to email account again
    try{
        const { data } = await axios.post(`${baseUrl}/send-opt-again`,{ email: user.email, name: user.name });
        return data
    } catch (err) {
        console.error(err);
    }
}

export const updateProfile = async (user) => { 
    try{
        const { data } = await axios.put(`${baseUrl}/profile/update`,{ ...user });
        return data
    } catch (err) {
        console.error(err);
    }
}

export const deleteProfile = async (id) => { 
    try{
        const { data } = await axios.delete(`${baseUrl}/profile/delete/${id}`);
        return data
    } catch (err) {
        console.error(err);
    }
}

export const checkPassword = async (user, password) => { 
    try{
        const { data } = await axios.post(`${baseUrl}/profile/password`,{ id: user._id, password });
        return data
    } catch (err) {
        console.error(err);
    }
}

export const setNewPassword = async (user, password) => { 
    try{
        const { data } = await axios.put(`${baseUrl}/profile/password`,{ user, password });
        return data
    } catch (err) {
        console.error(err);
    }
}

export const deleteCookie = async (id) => { 
    Cookies.remove(id)
    
}

export const getAgoraToken = async () => { 
    try{
        const { data } = await axios.get(`${baseUrl}/agora/token`);
        console.log(data)
        return data
    } catch (err) {
        console.error(err);
    }
}

export const checkToken = async (token, path) => { //Check of cookie exist 
    try{
        const { data } = await axios.post(`${baseUrl}/token`,{ path },{ 
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(data)
        return data
    } catch (err) {
        console.error(err);
    }
}

