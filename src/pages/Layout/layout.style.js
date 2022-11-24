import styled from 'styled-components'
import { Layout, Menu } from 'antd'
const { Sider } = Layout

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
    border-radius: 0.4rem;
  }
`

export const Menus = styled(Menu)`
  min-height: calc(100vh - 64px);
  background: rgba(255, 255, 255, 0.35) !important;
  -webkit-backdrop-filter: blur(10px) !important;
  backdrop-filter: blur(10px) !important;
  border: 1px solid rgba(255, 255, 255, 0.225) !important;
  padding: 0.6rem 0;
`
