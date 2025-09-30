import React, { useState } from 'react';
import ForgotPassword from '@/components/organisms/auth/ForgotPassword';

const ForgotPasswordContainer = () => {

    const [formInput, setFormInput] = useState({email:""});
    const [validationErrors, setValidationErrors] = useState(null);

    async function onForgotPasswordFormSubmit(e){
        e.preventDefault();
        console.log("forgot password data", formInput);
        if(!formInput.email){
            console.log("Please fill all the fields");
            setValidationErrors({
                message: "Please fill all the fields"});
            return;
        }
        setValidationErrors(null);
    }

  return (
    <>
        <ForgotPassword
            formInput={formInput}
            setFormInput={setFormInput}
            validationErrors={validationErrors}
            onForgotPasswordFormSubmit={onForgotPasswordFormSubmit}
        
        />
    
    </>
  )
}

export default ForgotPasswordContainer