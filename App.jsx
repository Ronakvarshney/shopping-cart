import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Navbar from './components/Navbar'


function App() {

  return (
    <div>
      <div className='bg-slate-900'>
        <Navbar/>
      </div>

      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Cart' element={<Cart/>}></Route>
      </Routes>
    </div>
  )
}

export default App
