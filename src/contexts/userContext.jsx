import React, { useContext, useState } from 'react';
import {  createContext } from "react";

const UserContext=createContext()

const UserProvider = ({children}) => {
    const [user, setUser] = useState(()=>{
        const data=localStorage.getItem('user')
        return data?JSON.parse(data):{}
    });

    function handelSetUser(user){
        setUser(user)
        localStorage.setItem('user',JSON.stringify(user))

    }

    // useEffect(function(){
    //     const savedUser = localStorage.getItem('user');
    //     console.log("savedUser:",savedUser)
    //     if (savedUser) {
    //       setUser(JSON.parse(savedUser));
    //     }
    //   },[])
    return (
        <div>
            <UserContext.Provider value={{user,onHandelSetUser:handelSetUser}}>{children}</UserContext.Provider>
        </div>
    );
}

function useUser(){
    const context=useContext(UserContext)
    if(context===undefined){
        throw new Error("Do not use user custom hook outside the UserProvider")
    }
    return context
}

export { useUser, UserProvider};
