import React, { useEffect, useState } from "react";
import SignInCard from "../../components/organisms/auth/SignInCard";
import { useSignIn } from "@/hooks/apis/auth/useSignIn";
import { useNavigate } from "react-router-dom";


const SignInContainer = ()=>{
  const navigate = useNavigate();
  const [signInForm, setSignInForm] = useState({
    email: "",
    password: "",
  });

  const [validationErrors, setValidationErrors] = useState(null);

  const {isPending, isSuccess, error, signIn} = useSignIn();

  async function onSignInFormSubmit(e){
    e.preventDefault();
    //console.log("sign in data", signInForm);
    if(!signInForm.email || !signInForm.password){
        //console.log("Please fill all the fields");
        setValidationErrors({
            target: "signInForm",
            message: "Please fill all the fields"});
        return;
    }

    setValidationErrors(null);
    await signIn(signInForm);

  }

  useEffect(()=>{

    if(isSuccess){
      navigate("/");
    }

  },[isSuccess])


  return(
    <>
        <SignInCard 
            error={error}
            isPending={isPending}
            isSuccess={isSuccess}
            signInForm={signInForm} 
            setSignInForm={setSignInForm}
            validationErrors={validationErrors}
            onSignInFormSubmit={onSignInFormSubmit}
        />
    </>
  )
}


export default SignInContainer;