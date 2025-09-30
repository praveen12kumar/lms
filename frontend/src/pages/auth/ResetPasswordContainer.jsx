import ResetPassword from '@/components/organisms/auth/ResetPassword';
import { useResetPassword } from '@/hooks/apis/auth/useResetPassword';
import React, { useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom'


const ResetPasswordContainer = () => {
  const [formInput, setFormInput] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
    })
   
    const navigate = useNavigate();

    const {isPending, isSuccess, error, resetPassword} = useResetPassword();

    const [validationErrors, setValidationErrors] = useState(null);

    async function onResetPasswordFormSubmit(e){
        e.preventDefault();
        if(!formInput.oldPassword || !formInput.newPassword || !formInput.confirmPassword){
            setValidationErrors({
                message: "Please fill all the fields"});
            return;
        }
        if(formInput.newPassword !== formInput.confirmPassword){
            setValidationErrors({
                message: "Passwords do not match"});
            return;
        }

        if(formInput.oldPassword === formInput.newPassword || formInput.oldPassword === formInput.confirmPassword){
            setValidationErrors({
                message: "New password cannot be same as old password"});
            return;
        }
    
        setValidationErrors(null);
        await resetPassword({oldPassword: formInput.oldPassword, newPassword: formInput.newPassword})
    };

    useEffect(()=>{
        if(isSuccess){
            navigate('/auth/signin');
        }
    }, [isSuccess]);


  return (
    <div className=''>
        <ResetPassword
            error={error}
            isPending={isPending}
            isSuccess={isSuccess}
            validationErrors={validationErrors}
            formInput={formInput}
            setFormInput={setFormInput}
            onResetPasswordFormSubmit={onResetPasswordFormSubmit}
        />
    </div>
  )
}


export default ResetPasswordContainer;