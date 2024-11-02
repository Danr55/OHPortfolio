import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from '../src/pages/About.jsx'
import Portfolio from '../src/pages/Portfolio.jsx'
import Contact from '../src/pages/Contact.jsx'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'


function App() {
  return (
    <Router>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>  
      <Footer />
    </div>
    </Router>
  )
}


export default App
