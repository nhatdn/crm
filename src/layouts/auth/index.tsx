import React from "react";
import { IPropsAuthLayout } from "@/types/type";
import CustomStorage from "@/helpers";
import { Navigate } from "react-router-dom";
import { ROUTES_PATH } from "@/constants";
const Auth: React.FC<IPropsAuthLayout> = ({ children, auth }) => {
    const storage = new CustomStorage();
    if(auth) {
        // if user logined 
        if(!storage.getAccount()) {
            storage.flushAll();
            return <Navigate to={ROUTES_PATH.LOGIN}/>
        }
    }
    return children;
};

export default Auth