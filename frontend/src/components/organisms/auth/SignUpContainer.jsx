import React, { useEffect, useState } from "react";

import SignUpCard from "./SignUpCard";
import { useSignUp } from "@/hooks/apis/auth/useSignUp";
import { useNavigate } from "react-router-dom";


export const SignUpContainer = ()=>{

    const [signUpForm, setSignUpFrom] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
 
  const navigate = useNavigate();

  const [validationErrors, setValidationErrors] = useState(null);

  const {isPending, isSuccess, error, signUp} = useSignUp();


  async function onSignUpFormSubmit(e){
    e.preventDefault();
    console.log("sign up data", signUpForm);
    if(!signUpForm.username || !signUpForm.email || !signUpForm.password || !signUpForm.confirmPassword){
        console.log("Please fill all the fields");
        setValidationErrors({
            message: "Please fill all the fields"});
        return;
    }

    if(signUpForm.password !== signUpForm.confirmPassword){
        console.log("Password and confirm password do not match");
        setValidationErrors({
            message: "Passwords do not match"});
        return;
    }

    setValidationErrors(null);

    await signUp(signUpForm);
  }  


  useEffect(()=>{
    if(isSuccess){
        navigate('/auth/signin');
    }
  },[isSuccess]);

  return(
    <>
        <SignUpCard 
            error={error}
            isPending={isPending}
            isSuccess={isSuccess}
            signUpForm={signUpForm} 
            setSignUpForm={setSignUpFrom}
            validationErrors={validationErrors}
            onSignUpFormSubmit={onSignUpFormSubmit}
        />
    </>
  )
}