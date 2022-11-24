import React from 'react'
import { Contents } from './content.style'

const Content = ({ children }) => {
  return (
    <Contents
      style={{
        margin: '24px 16px',
        padding: 24,
        minHeight: 280,
      }}
    >
      {children}
    </Contents>
  )
}

export default Content
