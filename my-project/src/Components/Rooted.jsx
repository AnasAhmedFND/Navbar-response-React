import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'





const Rooted = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Outlet/>

      <Footer/>
    </div>
  )
}

export default Rooted
