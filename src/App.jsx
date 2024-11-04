import 'bootstrap/dist/css/bootstrap.min.css' 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '../src/assets/styles.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from '../src/pages/About.jsx'
import Portfolio from '../src/pages/Portfolio.jsx'
import Contact from '../src/pages/Contact.jsx'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import Resume from '../src/pages/Resume.jsx'

function App() {
  return (
    <Router>
    <div>
      <Header />
        <div className="d-flex custom-bg3 justify-content-center align-items-center p-5">
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> 
        </div>
      <Footer />
    </div>
    </Router>
  )
}


export default App
