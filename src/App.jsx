import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Tech from './components/Tech'
import Projects from './components/Projects'
import ContactUs from './components/ContactUs'
import Experince from './components/Experince'
const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      
      {/* Background Layer */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 
          bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        </div>
      </div>

      {/* Scrollable Content */}

        <div className="container mx-auto px-8">
          <NavBar />
          <Hero />
          <About />
          <Tech />
          <Projects />
          <Experince />
          <ContactUs />
        </div>
      </div>
      
  )
}

export default App


