import React, { useEffect } from 'react'
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container'
import { Navbar } from './components'
import { AiOutlineArrowUp } from 'react-icons/ai'
import './App.css'

const App = () => {
  const [showTopButton, setShowTopButton] = React.useState(false)
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setShowTopButton(true)
      } else {
        setShowTopButton(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />

      {showTopButton && (
        <button
          onClick={() => window.scrollTo(0, 0)}
          style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000, padding: '10px', opacity: '0.5', animation: 'smooth' }}
        >
          <AiOutlineArrowUp size={20} color="red" fontWeight="bold" />
        </button>
      )}
    </div>
  )
}

export default App
