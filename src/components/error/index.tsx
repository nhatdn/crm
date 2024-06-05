import React from 'react';
import { Button, Typography } from 'antd';
import { useTranslation } from 'react-i18next';

import { Images } from '@/assets';
import './style.scss';
const Error: React.FC = () => {
    const { t } = useTranslation();

    // can't use useNavigate because Error component is used outside of BrowserRouter
    const backHomePage = () => {
        location.href = location.origin;
    }
    return (
        <div className="error-container">
            <img src={Images.Wrong} alt={t('common.something-is-wrong')} />
            <Typography.Title level={3}>{t('common.something-is-wrong')}</Typography.Title>
            {
                location.href != location.origin 
                && <Button 
                        type='primary' 
                        onClick={backHomePage}
                    >
                        {t('common.back-to-home')}
                    </Button>
            }
        </div>
    )
}

export default Error;