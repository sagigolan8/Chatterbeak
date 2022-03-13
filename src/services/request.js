import axios from "axios"
const baseUrl = 'http://localhost:8080'
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

export const updateProfile = async (user) => { //send opt to email account again
    try{
        const { data } = await axios.put(`${baseUrl}/profile/update`,{ ...user });
        return data
    } catch (err) {
        console.error(err);
    }
}

export const deleteProfile = async (id) => { //send opt to email account again
    try{
        const { data } = await axios.delete(`${baseUrl}/profile/delete/${id}`);
        return data
    } catch (err) {
        console.error(err);
    }
}