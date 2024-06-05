import React, { useCallback } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Button, Layout, Row, Menu } from 'antd';

import { Icons } from '@/assets';
import useGlobalStore from '@/stores/global';
import { ROUTES_PATH } from '@/constants';
import items from './menu';
import { Header } from '@/components';
import './style.scss';

const { Sider, Content } = Layout;

const Primary: React.FC = () => {
    const navigate = useNavigate();
    const { setAccount } = useGlobalStore();
    const handleLogout = useCallback(() => {
        // call API to logout,
        // if status response is OK, then clear storage and navigate to login page,
        setAccount(undefined);
        navigate(ROUTES_PATH.LOGIN);
    }, [navigate, setAccount]);

    return (
        <div className="primary-layout">
            <Layout>
                <Header/>
                <Layout className='primary-layout-content'>
                    <Sider width="48">
                        <Row>
                            <Menu mode='vertical' defaultSelectedKeys={['10']} items={items} />
                        </Row>
                        <Button onClick={handleLogout} type='text'>
                            <Icons.Logout />
                        </Button>
                    </Sider>
                    <Content className='content'>
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default Primary;