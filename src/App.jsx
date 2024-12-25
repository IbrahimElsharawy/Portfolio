import React from 'react'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import ScrollToTop from './components/ScrollToTop'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {

  return (
    <div className='overflow-x-hidden'>

      <About />
      <Experience />
      <Education />
      <Skills />
      <ScrollToTop />
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
