import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Checkbox, Col, Row, Select, Typography } from 'antd';

import { Icons, Images } from '@/assets';
import { Table } from '@/components';
import { listContact } from '@/mocks';
import './style.scss'
import clsx from 'clsx';

const Contact: React.FC = () => {
    const { t } = useTranslation();
    const [checkAll, setCheckAll] = React.useState(false);

    const columns: any = [
        {
            title: <Checkbox onChange={() => setCheckAll(!checkAll)} />,
            dataIndex: 'id',
            key: 'name',
            width: 78,
            align: 'center',
            render: () => <Checkbox defaultChecked={checkAll} />,
        },
        {
            title: t('filter.contact.name'),
            dataIndex: 'name',
            key: 'name',
            render: (name: string, record: any) => (
                <div className="name-container">
                    <Typography.Text className='name'>{name}</Typography.Text>
                    <Typography.Text className='type'>{record?.typeName}</Typography.Text>
                </div>
            )
        },
        {
            title: t('common.email'),
            dataIndex: 'email',
            key: 'email',
            render: (email: string) => (
                <Typography.Link href={`mailto:${email}`} className='email-container'>
                    <Icons.Mail />
                    {email}
                </Typography.Link>
            )
        },
        {
            title: t('common.telephone'),
            dataIndex: 'telephone',
            key: 'telephone',
            render: (telephone: string) => (
                <Typography.Link href={`tel:${telephone}`} className='telephone-container'>
                    <Icons.Phone />
                    {telephone}
                </Typography.Link>
            )
        },
        {
            title: t('common.opportunity'),
            dataIndex: 'opportunity',
            key: 'opportunity',
        },
        {
            title: t('common.responsable'),
            dataIndex: 'responsable',
            key: 'responsable',
            render: (responsable: string) => (
                <div className="responseble-container">
                    <img src={Images.AvatarAdmin} className='mini-avt' alt={t('common.responsable')} />
                    <Typography.Text className='responsable'>{responsable}</Typography.Text>
                </div>
            )
        },
        {
            title: t('common.etiquettes'),
            dataIndex: 'etiquettes',
            key: 'etiquettes',
            render: (amuetiquettes: any[]) => (
                <div className="etiquettes-container">
                    {amuetiquettes.map((amuetiquette: any) => (
                        <div className={clsx('etiquette', amuetiquette.color)} key={amuetiquette.id}>
                            {amuetiquette.value}
                        </div>
                    ))}
                </div>
            )
        },
        {
            title: <Icons.Setting className='setting' />,
            key: 'id',
            width: 78,
            align: 'center',
            render: () => (
                <div className='actional-container'>
                    <Button type='text'>
                        <Icons.Pen />
                    </Button>
                    <Button type='text'>
                        <Icons.Edit />
                    </Button>
                </div>
            )
        },
    ]

    // pagination of table antd has many detail elements, and antd dont support
    // so it's quite hard to custom pagination of ant table

    return (
        <div className="contact">
            <Row className='contact-container'>
                <Col className='contact-statistic'>
                    <Button className='contact-btn-add' type='primary'>
                        <Icons.SquarePlus />
                        <span>{t('filter.contact.btn-add')}</span>
                    </Button>
                    <Typography.Text className='total-contact'>
                        <span className='value'>100</span> {t('common.contact')}
                    </Typography.Text>
                </Col>
                <Col className='tools-container'>
                    <Select placeholder={t('filter.contact.select-type-search')} options={[]} />
                    <Select placeholder={t('filter.contact.everyone')} options={[]} />
                    <Select placeholder={t('filter.contact.not-filter')} options={[]} />
                    <Button type='text' className='btn-setting'>
                        <Icons.Setting />
                    </Button>
                </Col>
            </Row>
            <div className="content-contact">
                <Table rowKey={'id'} columns={columns} dataSource={listContact} />
            </div>
        </div>
    )
}

export default Contact;