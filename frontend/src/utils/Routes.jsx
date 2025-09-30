import {Routes, Route} from 'react-router-dom';

import ProtectedRoute from '@/components/molecules/protectRoute/ProtectedRoute';
import Home from '@/pages/home/Home';
import { SignInContainer} from '@/components/organisms/auth/SignInContainer';
import { SignUpContainer } from '@/components/organisms/auth/SignUpContainer';
import OneTimePasswordContainer from '@/pages/auth/OneTimePasswordContainer';
import ForgotPasswordContainer from '@/pages/auth/ForgotPasswordContainer';
import ForgotPasswordOtpVerificationContainer from '@/pages/auth/ForgotPasswordOtpVerificationContainer';
import ChangePasswordContainer from '@/pages/auth/ChangePasswordContainer';
import ResetPasswordContainer from '@/pages/auth/ResetPasswordContainer';
import NotFound from '@/pages/notFound/NotFound';





export const AppRoutes = ()=>{
    return(
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth/signin' element={<Auth> <SignInContainer/></Auth>}/>
        <Route path='/auth/signup' element={<Auth> <SignUpContainer/></Auth>}/>
        <Route path='/auth/otp' element={<OneTimePasswordContainer/>}/>
        <Route path='/auth/forgot-password' element={<ForgotPasswordContainer/>}/>
        <Route path="/auth/change-password" element={<ChangePasswordContainer/>}/>
        <Route path='/auth/reset-password' element={<ProtectedRoute><ResetPasswordContainer/></ProtectedRoute>}/>
        <Route path='/auth/forgot-password/otp' element={<ForgotPasswordOtpVerificationContainer/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    )
}