import React, { useEffect } from 'react';
import { useUser } from '../../contexts/userContext';
import { useNavigate } from 'react-router';

const ProtectedRoute = ({children}) => {
    const navigate=useNavigate()

    const {user}=useUser()
    useEffect(function(){
        if(!user?.firstName){
            navigate('/login')
        }
        },[user?.firstName,navigate])

    if(!user?.firstName){
        return null
    }
    return <>{children}</>
}

export default ProtectedRoute;
