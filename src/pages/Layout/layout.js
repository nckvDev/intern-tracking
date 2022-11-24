import { Outlet } from 'react-router-dom'
import { Layouts } from './layout.style'
import { Sider } from './Sider'
import Header from './Header'
import Content from './Content'

const Layout = () => {
  return (
    <Layouts>
      <Sider />
      <Layouts>
        {/* <Header /> */}
        <Content>
          <Outlet />
        </Content>
      </Layouts>
    </Layouts>
  )
}

export default Layout
