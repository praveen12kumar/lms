import React, { useEffect, useState } from 'react';
import ForgotPassword from '@/components/organisms/auth/ForgotPassword';
import { useForgotPassword } from '@/hooks/apis/auth/useForgotPassword';
import { useNavigate } from 'react-router-dom';

const ForgotPasswordContainer = () => {

    const [formInput, setFormInput] = useState({email:""});
    const [validationErrors, setValidationErrors] = useState(null);
    const {isPending, isSuccess, error, forgotPassword} = useForgotPassword();
    const navigate = useNavigate();

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

        await forgotPassword(formInput);
    }


    useEffect(()=>{
        if(isSuccess){
            navigate('/auth/forgot-password/otp', {
              state:{
                email: formInput.email,
              }
            });
        }
    },[isSuccess])

  return (
    <>
        <ForgotPassword
            error={error}
            isPending={isPending}
            isSuccess={isSuccess}
            formInput={formInput}
            setFormInput={setFormInput}
            validationErrors={validationErrors}
            onForgotPasswordFormSubmit={onForgotPasswordFormSubmit}
        />
    
    </>
  )
}

export default ForgotPasswordContainer