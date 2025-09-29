import React, { useState } from "react";

import SignUpCard from "./SignUpCard";


export const SignUpContainer = ()=>{

    const [signUpForm, setSignUpFrom] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
 

  const [validationErrors, setValidationErrors] = useState(null);

  console.log("validation errors", validationErrors);


  async function onSignUpFormSubmit(e){
    e.preventDefault();
    console.log("sign up data", signUpForm);
    if(!signUpForm.username || !signUpForm.email || !signUpForm.password || !signUpForm.confirmPassword){
        console.log("Please fill all the fields");
        setValidationErrors({
            target: "signUpForm",
            message: "Please fill all the fields"});
        return;
    }

    if(signUpForm.password !== signUpForm.confirmPassword){
        console.log("Password and confirm password do not match");
        setValidationErrors({
            target: "signUpForm",
            message: "Passwords do not match"});
        return;
    }
  }  

  return(
    <>
        <SignUpCard 
            signUpForm={signUpForm} 
            setSignUpForm={setSignUpFrom}
            validationErrors={validationErrors}
            onSignUpFormSubmit={onSignUpFormSubmit}
        />
    </>
  )
}