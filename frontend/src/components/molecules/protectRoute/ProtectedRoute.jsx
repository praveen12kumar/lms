import { useAuth } from '@/hooks/conext/useAuth';
import { LucideLoader2 } from 'lucide-react';
import React  from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const {auth, setAuth} = useAuth();

    // is the loading state becomes false, then re-render the component


    if(auth.isLoading){
        return <div className='h-screen flex items-center justify-center'>
            <LucideLoader2 className='animate-spin' size={50}/>
        </div>
    }

    if(!auth.user || !auth.token){
        return <Navigate to='/auth/signin'/>
    }

    return children;

}

export default ProtectedRoute;