import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  HomeOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import { Headers, Siders, Layouts, Logo, Menus, Contents } from './homepage.style'
const { Header, Sider, Content } = Layouts

export const HomePage = () => {
  const [collapsed, setCollapsed] = useState(false)
  const navigate = useNavigate()
  const logout = () => {
    sessionStorage.removeItem('user')
    navigate('/login')
  }

  return (
    // <div>
    //   HomePage
    //   <button onClick={logout}> Logout</button>
    // </div>

    <Layouts>
      <Siders trigger={null} collapsible collapsed={collapsed}>
        <Logo collapsed={collapsed}>
          <h3>Korat Tracking</h3>
        </Logo>
        <Menus
          mode='inline'
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <HomeOutlined />,
              label: 'homepage',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'other',
            },
            {
              key: '3',
              icon: <LogoutOutlined />,
              label: 'logout',
            },
          ]}
        />
      </Siders>
      <Layouts className='site-layout'>
        <Headers
          style={{
            padding: '0.8rem',
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Headers>
        <Contents
          className='site-layout-background'
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Contents>
      </Layouts>
    </Layouts>
  )
}
