import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import RegisterPage from './Pages/RegisterPage'
import LoginPage from './Pages/LoginPage'

const App = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-[#F7FF80]">
      <div className="sticky top-0 z-10">
      <Navbar />
      </div>
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          
        </Routes>
      </div>
      <Footer />
      </div>
      </>
  )
}

export default App