import Navbar from '@/components/Navbar'
import { AppProvider } from '@/context/AppContext'
import React from 'react'

const Template = ({ children }) => {
  return (
    <AppProvider>
          <Navbar />

        {children}
    </AppProvider>
  )
}

export default Template