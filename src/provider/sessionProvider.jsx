import {useEffect} from "react";

import { useLocation, useNavigate } from 'react-router-dom';


function SessionProvider({children}){

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(()=>{

        if (exemptedRoutes.includes(location.pathname)) return;
        setTimeout(()=>{
            navigate("/");
        },1000);
    });

    const exemptedRoutes = [ '/',];

    return children;
}

export default SessionProvider