import React, { useCallback, useMemo, useState } from 'react';
import { Button, Form, Input, Typography, message } from 'antd';
import { useTranslation } from 'react-i18next';
import { TokenResponse, useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

import { apiLogin, apiLoginByGoogle } from '@/mocks/apis';
import { Icons } from '@/assets';
import { TLogin } from '@/types/type';
import CustomStorage from '@/helpers';
import { ROUTES_PATH } from '@/constants';
import './style.scss';

enum LOADING_TYPE {
    NOT_LOADING = 0,
    FORM = 1,
    GOOGLE = 2,
    FACEBOOK = 3
}

const Login: React.FC = () => {
    const [loading, setLoading] = useState<LOADING_TYPE>(LOADING_TYPE.NOT_LOADING);
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [loginForm] = Form.useForm();

    const storage = useMemo(() => new CustomStorage(), []);

    const handleLoginByForm = useCallback(async (payload: TLogin) => {
        setLoading(LOADING_TYPE.FORM);
        try {
            const response = await apiLogin(payload);
            storage.setAccount(response);
            message.success(t('login.success'));
            navigate(ROUTES_PATH.CONTACT);
        } catch (error) {
            console.log(error);
            message.error(t('login.fail'))
        } finally {
            setLoading(LOADING_TYPE.NOT_LOADING);
        }
    }, [setLoading, navigate, t, storage]);

    const onGoogleLoginSuccess = useCallback(async (data: TokenResponse) => {
        if (data.error) {
            message.error(t('login.fail'));
        } else {
            setLoading(LOADING_TYPE.GOOGLE);
            // next step, send access token to backend, afer backend auth with google, 
            // it will return user data including access token
            try {
                const response = await apiLoginByGoogle(data.access_token);
                storage.setAccount(response);
                message.success(t('login.success'));
                navigate(ROUTES_PATH.CONTACT);

            } catch (error) {
                console.log(error);
                message.error(t('login.fail'));
            } finally {
                setLoading(LOADING_TYPE.NOT_LOADING);
            }
        }
    }, [t, navigate, setLoading, storage]);

    const handleLoginByGoogle = useGoogleLogin({
        onSuccess: onGoogleLoginSuccess,
        onError: (error) => {
            console.log({ error })
            setLoading(LOADING_TYPE.NOT_LOADING);
        },
    });

    const handleLoginByFacebook = useCallback(() => {
        message.info(t('common.developing'));
    }, [t]);

    const handleFogotPassword = useCallback(() => {
        message.info(t('common.developing'));
    },  [t]);

    const handleRegister = useCallback(() => {
        message.info(t('common.developing'));
    },  [t]);

    return (
        <div className="login-page page">
            <div className="login-form-container">
                <span className='light first'></span>
                <Typography.Title className='short-name-app-title'>
                    <Icons.ShortNameApp />
                </Typography.Title>
                <Typography.Title level={3} className='child-title'>
                    {t('login.connexion')}
                </Typography.Title>
                <Typography.Paragraph className='description-text'>
                    {t('login.description')}
                </Typography.Paragraph>
                <Form<TLogin> form={loginForm} onError={console.log} onFinish={handleLoginByForm}>
                    <Form.Item
                        className='hide-label'
                        name='username'
                        label={t('common.email-address')}
                        rules={[
                            { required: true, message: t('common.required.email') },
                            { type: 'email', message: t('common.invalid.email') }
                        ]}>
                        <Input
                            disabled={!!loading}
                            autoComplete='on'
                            size='large'
                            placeholder={t('common.email-address')}
                        />
                    </Form.Item>
                    <Form.Item
                        className='hide-label'
                        name='password'
                        label={t('common.password')}
                        rules={[
                            { required: true, message: t('common.required.password') },
                        ]}>
                        <Input.Password
                            disabled={!!loading}
                            autoComplete='on'
                            size='large'
                            placeholder={t('common.password')}
                        />
                    </Form.Item>
                    <div className="btn-forgot-password-container">
                        <Button
                            disabled={!!loading}
                            onClick={handleFogotPassword}
                            type='text'
                            className='btn-forgot-password'>
                            {t('login.forgot-password')}
                        </Button>
                    </div>
                    <Button
                        disabled={!!loading}
                        loading={loading == LOADING_TYPE.FORM}
                        type='primary'
                        size='large'
                        htmlType='submit'
                        className='btn-submit'
                    >
                        {t('login.connexion')}
                    </Button>
                </Form>
                <div className="line-bar">
                    <Typography.Text className='or-text'>{t('common.or')}</Typography.Text>
                </div>
                <Button
                    loading={loading == LOADING_TYPE.GOOGLE}
                    disabled={!!loading}
                    onClick={() => handleLoginByGoogle()}
                    type='primary'
                    htmlType='button'
                    size='large'
                    className='btn-gg-login'
                >
                    <Icons.Google />
                    {t('login.with-gg')}
                </Button>
                <Button
                    disabled={!!loading}
                    onClick={handleLoginByFacebook}
                    type='primary'
                    htmlType='button'
                    size='large'
                    className='btn-fb-login'
                >
                    <Icons.Facebook />
                    {t('login.with-fb')}
                </Button>
                <div className="not-registion-container">
                    <Typography.Text className='not-a-member-text'>
                        {t('login.not-a-member')}
                    </Typography.Text>
                    <Typography.Link href='#' disabled={!!loading} onClick={handleRegister} className='registration-link'>
                        {t('login.registration')}
                    </Typography.Link>
                </div>
            </div>
            <span className='light second'></span>
            <span className='light third'></span>
        </div>
    )
}

export default Login;