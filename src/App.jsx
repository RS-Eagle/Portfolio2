import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ParticleBackground from './components/ParticleBackground'
import Skills from './components/Skills'

function App() {
  

  return (
    <>
   
      <Navbar/>
      <div>
      {/* <ParticleBackground/> */}
        <Hero/>
        <Skills/>
      </div>
    </>
  )
}

export default App
