import React from 'react'
import Sidebar from './Sidebar'

const MainLayout = (props) => {
  return (
    <main className='cr-app'>
      <Sidebar />
      {props.children}
    </main>
  )
}

export default MainLayout;
