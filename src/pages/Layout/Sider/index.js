import { useNavigate } from 'react-router-dom'
import { Siders, Logo, Menus } from './sider.style'
import { HomeOutlined, LogoutOutlined, VideoCameraOutlined } from '@ant-design/icons'

export const Sider = () => {
  const navigate = useNavigate()
  const logout = () => {
    sessionStorage.removeItem('user')
    navigate('/login')
  }
  const handleClick = e => {
    const { key } = e
    switch (key) {
      case '1':
        console.log('homeopage')
        navigate('/homepage')
        break

      case '2':
        console.log('other')
        navigate('/other')
        break

      case '3':
        console.log('logouterr')
        logout()
        break

      default:
        console.log('default')
        break
    }
  }
  return (
    <Siders>
      <Logo>
        <h3>TOUCH</h3>
      </Logo>
      <Menus
        mode='inline'
        defaultSelectedKeys={['1']}
        onClick={handleClick}
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
            danger: true,
          },
        ]}
      />
    </Siders>
  )
}
