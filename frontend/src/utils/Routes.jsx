import {Routes, Route} from 'react-router-dom';

import ProtectedRoute from '@/components/molecules/protectRoute/ProtectedRoute';
import Auth from '@/pages/auth/Auth';
import Home from '@/pages/home/Home';
import SignInContainer from '@/pages/auth/SignInContainer';
import SignUpContainer  from '@/pages/auth/SignUpContainer';
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
        <Route path='/auth/otp' element={ <Auth><OneTimePasswordContainer/></Auth>}/>
        <Route path='/auth/forgot-password' element={<Auth><ForgotPasswordContainer/></Auth>}/>
        <Route path="/auth/change-password" element={<Auth><ChangePasswordContainer/></Auth>}/>
        <Route path='/auth/reset-password' element={<ProtectedRoute><Auth><ResetPasswordContainer/></Auth></ProtectedRoute>}/>
        <Route path='/auth/forgot-password/otp' element={<Auth><ForgotPasswordOtpVerificationContainer/></Auth>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    )
}