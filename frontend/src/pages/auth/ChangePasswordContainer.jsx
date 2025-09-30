import ChangePassword from '@/components/organisms/auth/ChangePassword'
import { useChangePassword } from '@/hooks/apis/auth/useChnagePassword'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const ChangePasswordContainer = () => {
    const [formInput, setFormInput] = useState({
        password: "",
        confirmPassword: ""
    })
    const location = useLocation();
    const navigate = useNavigate();

    const {email} = location.state || {};

    const {isPending, isSuccess, error, changePassword} = useChangePassword();

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
        await changePassword({email, password:formInput.password})
    };

    useEffect(()=>{
        if(isSuccess){
            navigate('/auth/signin');
        }
    }, [isSuccess]);


  return (
    <div className=''>
        <ChangePassword
            error={error}
            isPending={isPending}
            isSuccess={isSuccess}
            validationErrors={validationErrors}
            formInput={formInput}
            setFormInput={setFormInput}
            onChangePasswordFormSubmit={onChangePasswordFormSubmit}
        />
    </div>
  )
}

export default ChangePasswordContainer