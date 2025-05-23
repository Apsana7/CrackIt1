import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Navigation/Header'
import SideBar from '../Components/Navigation/SideBar'


function Layout() {
  return (
    <div className='overflow-clip h-screen w-screen'>
        <Header/>
        <div className='grid grid-cols-12 h-full '>
            <div className='col-span-2'>
                <SideBar/>
            </div>
            <div className='relative px-8    col-span-10 overflow-scroll pb-44'>
                <Outlet/>
            </div>
        </div>

       </div>
  )
}

export default Layout
