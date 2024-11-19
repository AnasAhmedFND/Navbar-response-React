import { useState } from 'react'

import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Rooted from './Components/Rooted'
import Shop from './pages/Shop'



function App() {
  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route element={<Rooted/>}>
      <Route path='/' element={<Home/>} />
      <Route path='/shop' element={<Shop/>} />
    </Route>

  ))
 

  return (
    <>
   
    <RouterProvider router={myRoute}/>
    
    </>
  )
}

export default App
