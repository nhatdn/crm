import React, { useCallback } from 'react';
import { Button, Typography } from 'antd';
import { useTranslation } from 'react-i18next';

import { Images } from '@/assets';
import './style.scss';

const Offline: React.FC = () => {
    const { t } = useTranslation();

    const handleBackHomePage = useCallback(() => {
        window.location.href = '/';
    }, []);

    return (
        <div className='offline-page page'>
            <img src={Images.LostConnection} />
            <Typography.Paragraph className='description'>{t('offline.description')}</Typography.Paragraph>
            <Button type='primary' onClick={handleBackHomePage}>{t('common.back-to-home')}</Button>
        </div>
    );
};

export default Offline;