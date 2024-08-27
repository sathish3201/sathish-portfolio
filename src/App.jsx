import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Content from './components/content/Content'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'
import "./App.css"


const App = () => {
  return (
      <div className="App">
        <div className="nav-section">
          <Navbar/>
        </div>
        <div className="hero-section" id="home"> <Hero/></div>
        <div className="content-section" id="about"><Content/></div>
        <div className="contact-section" id="contact"><Contact/></div>
        <div className="footer-section"><Footer/></div>
      </div>
  )
}

export default App
