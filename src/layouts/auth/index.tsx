import React from 'react';
import { Navigate } from 'react-router-dom';
import { ROUTES_PATH } from '@/constants';
import { IPropsAuthLayout } from '@/types/type';
import useGlobalStore from '@/stores/global';
const Auth: React.FC<IPropsAuthLayout> = ({ children, auth }) => {
    const { account } = useGlobalStore();
    // Supposedly, logged in users will have their information saved to local storage. 
    // However, the actual project is implemented with logined checks via cookies for more security.

    if (auth) {
        // if user logined
        if (!account) {
            return <Navigate to={ROUTES_PATH.LOGIN} />
        }
    }

    return children;
};

export default Auth;