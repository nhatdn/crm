import React from 'react';
import { useTranslation } from 'react-i18next';

import './style.scss';

const Loading: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className="loading-container">
            <img className="loading-img" src="./public/loading.webp" alt={t('common.loading')} />
        </div>
    );
};

export default Loading;