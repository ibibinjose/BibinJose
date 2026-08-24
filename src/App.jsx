import { useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Ventures from './pages/Ventures'
import Ideas from './pages/Ideas'
import Now from './pages/Now'
import WorkWithMe from './pages/WorkWithMe'
import Contact from './pages/Contact'
import Meet from './pages/Meet'
import './App.css'

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#/')
  const cursorGlowRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (event) => {
      const glow = cursorGlowRef.current
      if (!glow) return

      glow.style.setProperty('--cursor-x', `${event.clientX}px`)
      glow.style.setProperty('--cursor-y', `${event.clientY}px`)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#/')
      window.scrollTo({ top: 0, behavior: 'auto' })
    }

    window.addEventListener('hashchange', handleHashChange)

    if (CSS.supports('(animation-timeline: view()) and (animation-range: entry)')) {
      return () => window.removeEventListener('hashchange', handleHashChange)
    }

    let observer
    const timer = window.setTimeout(() => {
      const elements = document.querySelectorAll('.scroll-reveal')
      if (elements.length === 0) return

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('reveal-visible')
              entry.target.classList.remove('reveal-hidden')
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
      )

      elements.forEach((element) => {
        element.classList.add('reveal-hidden')
        observer.observe(element)
      })
    }, 100)

    return () => {
      window.clearTimeout(timer)
      observer?.disconnect()
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [currentHash])

  const renderPage = () => {
    switch (currentHash) {
      case '#/':
        return <Home />
      case '#/about':
        return <About />
      case '#/ventures':
        return <Ventures />
      case '#/ideas':
        return <Ideas />
      case '#/now':
        return <Now />
      case '#/work-with-me':
        return <WorkWithMe />
      case '#/contact':
        return <Contact />
      case '#/meet':
        return <Meet />
      default:
        return <Home />
    }
  }

  const isMeetPage = currentHash === '#/meet'

  return (
    <div className={`app-container ${isMeetPage ? 'meet-route' : ''}`}>
      <div ref={cursorGlowRef} className="cursor-glow-bg" aria-hidden="true" />
      {!isMeetPage && <Header currentHash={currentHash} />}
      <main className="main-content">{renderPage()}</main>
      {!isMeetPage && <Footer />}
    </div>
  )
}
