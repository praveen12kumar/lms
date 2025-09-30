import {Routes, Route} from 'react-router-dom';


import './App.css'
import Auth from './pages/auth/Auth';
import NotFound from './pages/notFound/NotFound';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SignUpContainer } from './components/organisms/auth/SignUpContainer';
import { SignInContainer } from './components/organisms/auth/SignInContainer';
import OneTimePasswordContainer from './pages/auth/OneTimePasswordContainer';
import Home from './pages/home/Home';
import ForgotPasswordContainer from './pages/auth/ForgotPasswordContainer';
import ForgotPasswordOtpVerificationContainer from './pages/auth/ForgotPasswordOtpVerificationContainer';
import ChangePasswordContainer from './pages/auth/ChangePasswordContainer';
import ResetPasswordContainer from './pages/auth/ResetPasswordContainer';



function App() {
  
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth/signin' element={<Auth> <SignInContainer/></Auth>}/>
        <Route path='/auth/signup' element={<Auth> <SignUpContainer/></Auth>}/>
        <Route path='/auth/otp' element={<OneTimePasswordContainer/>}/>
        <Route path='/auth/forgot-password' element={<ForgotPasswordContainer/>}/>
        <Route path="/auth/change-password" element={<ChangePasswordContainer/>}/>
        <Route path='/auth/reset-password' element={<ResetPasswordContainer/>}/>
        <Route path='/auth/forgot-password/otp' element={<ForgotPasswordOtpVerificationContainer/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
      </QueryClientProvider>
    </>
  )
}

export default App;
