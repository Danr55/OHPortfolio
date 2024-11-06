import 'bootstrap/dist/css/bootstrap.min.css' 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '../src/assets/styles.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './pages/About.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Contact from './pages/Contact.jsx'
import Header from './components/Header'
import Footer from './components/Footer'
import Resume from './pages/Resume.jsx'

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
