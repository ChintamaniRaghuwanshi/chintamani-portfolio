import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Skill from './components/Skill/Skill'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'

 
function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>

      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
      
    </>
  )
}
 
export default App
 
 