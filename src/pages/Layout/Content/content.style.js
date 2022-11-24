import styled from 'styled-components'
import { Layout } from 'antd'
const { Content } = Layout

export const Contents = styled(Content)`
  background: rgba(255, 255, 255, 0.45) !important;
  -webkit-backdrop-filter: blur(10px) !important;
  backdrop-filter: blur(10px) !important;
  border: 1px solid rgba(255, 255, 255, 0.225) !important;
  border-radius: 1rem;
`
