import {useEffect} from "react";

import { useLocation, useNavigate } from 'react-router-dom';


function SessionProvider({children}){

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(()=>{

        if (exemptedRoutes.includes(location.pathname)) return;
        
            const token=localStorage.getItem("token");

            if(token==null){
                navigate("/login");
            }
      
    });

    const exemptedRoutes = [ '/login',];

    return children;
}

export default SessionProvider