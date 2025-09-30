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

export const forgotPasswordRequest = async({email})=>{
    try {
        const response = await axios.post('/api/v1/users/forgot-password', {
            email
        });

        return response.data;

    } catch (error) {
        console.log("error is forgot password",error);
        throw error.response.data.message;
    }
}

export const verifyOtpRequest = async({email, otp})=>{
    try {
        const response = await axios.post('/api/v1/users/verify-otp', {
            email,
            otp
        });

        return response.data;

    } catch (error) {
        console.log("error is verifing the otp",error);
        throw error.response.data.message;
    }
}


// change password

export const changePasswordRequest = async({email, password})=>{
    try {
        const response = await axios.post('/api/v1/users/change-password', {
            email,
            password
        });

        return response.data;

    } catch (error) {
        console.log("error is changing password",error);
        throw error.response.data.message;
    }
};


// reset password

export const resetPasswordRequest = async({email, password})=>{
    try {
        const response = await axios.post('/api/v1/users/reset-password', {
            email,
            password
        });

        return response.data;

    } catch (error) {
        console.log("error is reset password",error);
        throw error.response.data.message;
    }
};