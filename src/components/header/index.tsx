import React from 'react'
import { Avatar, Button, Col, Layout, Row, Typography, Input } from 'antd'

import { Icons, Images } from '@/assets'
import useGlobalStore from '@/stores/global'
import { useTranslation } from 'react-i18next'
import './style.scss'
const { Header: H } = Layout
const { Search } = Input

const Header: React.FC = () => {
  const { t } = useTranslation()
  const { account } = useGlobalStore()

  return (
    <H className='header'>
      <Row className='header-container' justify={'space-between'} align={'middle'}>
        <Col span={8} className='header-left'>
          <img src={Images.LogoCRM} alt={t('common.logo')} />
        </Col>
        <Col className='header-center' span={8}>
          <Search
            autoSave='on'
            size='middle'
            prefix={<Icons.Search />}
            placeholder={t('layout.primary.placeholder-search')}
            enterButton
          />
          <Button className='btn-search' type='primary'>
            <Icons.Plus />
          </Button>
        </Col>
        <Col span={8} className='header-right'>
          <Row justify={'end'} align={'middle'}>
            <Button type='text'>
              <Icons.Bell />
            </Button>
            <Button type='text'>
              <Icons.Question />
            </Button>
            <Button type='text'>
              <Icons.Setting />
            </Button>
            <Avatar size='large' src={Images.AvatarAdmin} alt={t('common.avatar')} />
            <div className='infor-admin-container'>
              <Typography.Text className='fullname'>{account?.fullname}</Typography.Text>
              <Typography.Text className='role'>{account?.role}</Typography.Text>
            </div>
          </Row>
        </Col>
      </Row>
    </H>
  )
}

export default Header
