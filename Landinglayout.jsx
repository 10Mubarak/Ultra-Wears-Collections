import React from 'react'
import Navbar from './src/Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './src/Components/Footer'

const Landinglayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      
    </div>
  )
}

export default Landinglayout;

