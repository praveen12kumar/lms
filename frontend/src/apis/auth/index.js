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
        console.log(error);
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
        console.log(error);
        throw error.response.data.message;
    }
}