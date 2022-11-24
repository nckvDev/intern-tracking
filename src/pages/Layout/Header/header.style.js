import styled from 'styled-components'
import { Layout } from 'antd'
const { Header } = Layout

export const Headers = styled(Header)`
  /* background: #b9e1ff !important; */
  background: rgba(255, 255, 255, 0.45) !important;
  -webkit-backdrop-filter: blur(10px) !important;
  backdrop-filter: blur(10px) !important;
  border: 1px solid rgba(255, 255, 255, 0.225) !important;
  border-radius: 1rem;

  display: flex;
  align-items: center;
  margin: 0 1rem;

  span {
    font-size: 1.2rem;
  }
`
