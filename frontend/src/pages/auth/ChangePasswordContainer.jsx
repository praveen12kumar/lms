import ChangePassword from '@/components/organisms/auth/ChangePassword'
import React, { useState } from 'react'

const ChangePasswordContainer = () => {
    const [formInput, setFormInput] = useState({
        password: "",
        confirmPassword: ""
    })

    const [validationErrors, setValidationErrors] = useState(null);

    async function onChangePasswordFormSubmit(e){
        e.preventDefault();
        console.log("change password data", formInput);
        if(!formInput.password || !formInput.confirmPassword){
            setValidationErrors({
                message: "Please fill all the fields"});
            return;
        }
        if(formInput.password !== formInput.confirmPassword){
            setValidationErrors({
                message: "Passwords do not match"});
            return;
        }
    
        setValidationErrors(null);
    }


  return (
    <div className=''>
        <ChangePassword
            validationErrors={validationErrors}
            formInput={formInput}
            setFormInput={setFormInput}
            onChangePasswordFormSubmit={onChangePasswordFormSubmit}
        
        />
    </div>
  )
}

export default ChangePasswordContainer