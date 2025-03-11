import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Certifications from './Components/Certifications/Certifications'

const App = () => {
  return (
    <div>
      <Navbar /> 
      <Hero />
      <About />
      <Certifications />
    </div>
  )
}

export default App
