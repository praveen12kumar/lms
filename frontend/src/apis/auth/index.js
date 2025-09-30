import axios from '../../config/axiosConfig.js';


export const signUpRequest = async({username, email, password})=>{
    try {
        const response = await axios.post('/api/v1/users/signup', {
            username,
            email,
            password
        });

        return response.data;
    } catch (error) {
        console.log("error is signing up",error);
        throw error.response.data.message;
    }
}


export const signInRequest = async({email, password})=>{
    try {
        const response = await axios.post('/api/v1/users/signin', {
            email,
            password
        });

        return response.data;
    } catch (error) {
        console.log("error in signing in",error);
        throw error.response.data.message;
    }
}


export const verifyEmailRequest = async({username, email, password, otp})=>{
    console.log("username, email, password, otp",username, email, password, otp);
    try {
        const response = await axios.post('/api/v1/users/verify-email', {
            username,
            email,
            password,
            otp
        });

        return response.data;

    } catch (error) {
        console.log("error is verifing the email",error);
        throw error.response.data.message;
    }
}