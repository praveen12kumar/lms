import React, { useState } from "react";
import SignInCard from "./SignInCard";


export const SignInContainer = ()=>{

  const [signInForm, setSignInForm] = useState({
    email: "",
    password: "",
  });

  const [validationErrors, setValidationErrors] = useState(null);

  console.log("validation errors", validationErrors);

  async function onSignInFormSubmit(e){
    e.preventDefault();
    console.log("sign in data", signInForm);
    if(!signInForm.email || !signInForm.password){
        console.log("Please fill all the fields");
        setValidationErrors({
            target: "signInForm",
            message: "Please fill all the fields"});
        return;
    }

  }





  return(
    <>
        <SignInCard 
            signInForm={signInForm} 
            setSignInForm={setSignInForm}
            validationErrors={validationErrors}
            onSignInFormSubmit={onSignInFormSubmit}
        />
    </>
  )
}