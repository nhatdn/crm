import React from 'react';
import { Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Images } from '@/assets';
import { ROUTES_PATH } from '@/constants';
import './style.scss';

const NotFound: React.FC = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    return <div className="not-found-page page">
        <img src={Images.NotFound} alt={t('not-found.alt-image')} />
        <Typography.Paragraph className="description">{t('not-found.description')}</Typography.Paragraph>
        <Button type="primary" onClick={() => navigate(ROUTES_PATH.FILTER)}>
            {t('common.back-to-home')}
        </Button>
    </div>;
};

export default NotFound;