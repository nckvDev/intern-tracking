import styled from 'styled-components'
import { Layout, Menu } from 'antd'
const { Sider } = Layout

export const Siders = styled(Sider)`
  background: rgba(255, 255, 255, 0.15) !important;
  -webkit-backdrop-filter: blur(10px) !important;
  backdrop-filter: blur(10px) !important;
  border: 1px solid rgba(255, 255, 255, 0.225) !important;
  border-radius: 1rem;
`

export const Logo = styled.div`
  background: rgba(255, 255, 255, 0.35) !important;
  -webkit-backdrop-filter: blur(10px) !important;
  backdrop-filter: blur(10px) !important;
  border: 1px solid rgba(255, 255, 255, 0.825) !important;
  border-top-right-radius: 1rem;

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
  border-bottom-right-radius: 1rem;
`
