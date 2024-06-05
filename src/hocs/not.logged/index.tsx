import { ROUTES_PATH } from "@/constants";
import useGlobalStore from "@/stores/global";
import React from "react";
import { Navigate } from "react-router-dom";
const notLogged = (Component: React.ComponentType) => {
    return (props: any) => {
        const account = useGlobalStore((state) => state.account);
        if (!account) {
            // this component can be login, fogot password, registration pages...
            return <Component {...props} />;
        }
        // if user logged, it will redirect to contact page, cant redirect to login page
        return <Navigate to={ROUTES_PATH.FILTER} />;
    };
}

export default notLogged;