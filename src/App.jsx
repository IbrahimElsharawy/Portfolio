import React from 'react'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import ScrollToTop from './components/ScrollToTop'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from "./components/Home";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Home/>
      <About />
      <Experience />
      <Education />
      <Skills />
      <ScrollToTop />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
