import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

import { Icons } from '@/assets';
import { TabLabel } from '@/components';
import { Contact } from './components';
import i18n from '@/i18n';
import './style.scss'

const items: TabsProps['items'] = [
    {
        key: '1',
        label: <TabLabel label={i18n.t('filter.tab-name.contact')} icon={<Icons.Contact />} />,
        children: <Contact />,
    },
    {
        key: '2',
        label: <TabLabel label={i18n.t('filter.tab-name.etiquette')} icon={<Icons.Tag />} />,
        children: null,
    },
    {
        key: '3',
        label: <TabLabel label={i18n.t('filter.tab-name.opportunity')} icon={<Icons.Opportunity />} />,
        children: null,
    },
    {
        key: '4',
        label: <TabLabel label={i18n.t('filter.tab-name.task')} icon={<Icons.Task />} />,
        children: null,
    },
];


const Filter: React.FC = () => {
    return (
        <div className="filter-page">
            <Tabs defaultActiveKey="1" items={items} />
        </div>
    )
}

export default Filter;