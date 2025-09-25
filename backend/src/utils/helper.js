

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateRegistrationData = (data)=>{
    const {username, email, password, confirmPassword} = data;

    if(!username || !email || !password || !confirmPassword){

    }
    if(!emailRegex.test(email)){
        throw new Error("Invalid email format");
    }
    if(password !== confirmPassword){
        throw new Error("Passwords do not match");
    }

}