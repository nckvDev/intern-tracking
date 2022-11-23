import styled from 'styled-components'
import { Layout, Menu } from 'antd'
const { Header, Sider, Content } = Layout

export const Layouts = styled(Layout)`
  min-height: 100vh;
  background: #b3ffab;
  background: -webkit-linear-gradient(49deg, #b3ffab 0%, #12fff7 100%);
  background: linear-gradient(49deg, #b3ffab 0%, #12fff7 100%);
`

export const Siders = styled(Sider)`
  background: rgba(255, 255, 255, 0.15) !important;
  -webkit-backdrop-filter: blur(10px) !important;
  backdrop-filter: blur(10px) !important;
  border: 1px solid rgba(255, 255, 255, 0.225) !important;
`

export const Headers = styled(Header)`
  /* background: #b9e1ff !important; */
  background: rgba(255, 255, 255, 0.45) !important;
  -webkit-backdrop-filter: blur(10px) !important;
  backdrop-filter: blur(10px) !important;
  border: 1px solid rgba(255, 255, 255, 0.225) !important;
  display: flex;
  align-items: center;

  span {
    font-size: 1.2rem;
  }
`

export const Contents = styled(Content)`
  background: rgba(255, 255, 255, 0.45) !important;
  -webkit-backdrop-filter: blur(10px) !important;
  backdrop-filter: blur(10px) !important;
  border: 1px solid rgba(255, 255, 255, 0.225) !important;
`

export const Menus = styled(Menu)`
  min-height: calc(100vh - 64px);
  background: rgba(255, 255, 255, 0.35) !important;
  -webkit-backdrop-filter: blur(10px) !important;
  backdrop-filter: blur(10px) !important;
  border: 1px solid rgba(255, 255, 255, 0.225) !important;
  padding: 0.6rem 0;
`

export const Logo = styled.div`
  background: rgba(255, 255, 255, 0.35) !important;
  -webkit-backdrop-filter: blur(10px) !important;
  backdrop-filter: blur(10px) !important;
  border: 1px solid rgba(255, 255, 255, 0.825) !important;

  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 64px;

  h3 {
    padding: 0.4rem;
    background: ${({ collapsed }) => (collapsed ? null : `#b9e1ff`)};
    border-radius: 0.4rem;
  }
`
