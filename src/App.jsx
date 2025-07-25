import React from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Contact from './components/Contact'


const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App
