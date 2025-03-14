import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Certifications from './Components/Certifications/Certifications'
import MyWork from './Components/Projects/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import { ToastContainer, toast } from 'react-toastify';
const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar /> 
      <Hero />
      <About />
      <Certifications />
      <MyWork />
      <Contact/>
      <Footer />
    </div>
  )
}

export default App
