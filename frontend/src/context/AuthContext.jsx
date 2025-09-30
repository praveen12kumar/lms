import { createContext, useEffect, useState } from "react";
import axiosInstance from "@/config/axiosConfig";


const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{

    const [auth, setAuth] = useState({
        user:null,
        token:null,
        isLoading: true,

    })
    useEffect(()=>{
        const user = localStorage.getItem('user');
        const token = localStorage.getItem('token');

        if(user && token){
            setAuth({
                user:JSON.parse(user),
                token,
                isLoading: false,
            })
        }
        else{
            setAuth({
                user:null,
                token:null,
                isLoading: false,
            })
        }
    },[]);

   useEffect(() => {
  if (auth.user && auth.token) {
    axiosInstance.defaults.headers.common['x-access-token'] = auth.token;
  } else {
    delete axiosInstance.defaults.headers.common['x-access-token'];
  }
}, [auth?.token]);

    return(
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
