import React, { useState, useEffect } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Teaching from './components/Teaching.jsx'
import Projects from './components/Projects.jsx'
import Footer from './components/Footer.jsx'
import styles from './App.module.css'

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <div className={styles.app}>
      <Nav scrolled={scrolled} />
      <main className={styles.main}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Teaching />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}
