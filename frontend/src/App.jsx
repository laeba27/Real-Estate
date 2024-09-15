import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import About from './pages/About'
import SignUp from './pages/SignUp'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/signin' element={<Signin/>} />
      <Route path='/Signup' element={<SignUp/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
