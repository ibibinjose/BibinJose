import { useState, useEffect } from 'react'
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
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 }) // Start offscreen

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#/')
      // Scroll to top on navigation
      window.scrollTo({ top: 0, behavior: 'instant' })
    };

    window.addEventListener('hashchange', handleHashChange)
    
    // Register scroll animations fallback for browsers that don't support animation-timeline
    if (!CSS.supports('(animation-timeline: view()) and (animation-range: entry)')) {
      const registerObserver = () => {
        const elements = document.querySelectorAll('.scroll-reveal');
        if (elements.length === 0) return;

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                entry.target.classList.remove('reveal-hidden');
              } else {
                // optional: hide again when scrolled away
                // entry.target.classList.remove('reveal-visible');
                // entry.target.classList.add('reveal-hidden');
              }
            });
          },
          {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px' // Trigger slightly before entering fully
          }
        );

        elements.forEach((el) => {
          el.classList.add('reveal-hidden');
          observer.observe(el);
        });
      };
      
      // Delay slightly to allow DOM to render
      const timer = setTimeout(registerObserver, 100);
      return () => {
        clearTimeout(timer);
        window.removeEventListener('hashchange', handleHashChange);
      };
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentHash]); // Run on hash change to re-observe elements on new pages

  // Route resolver
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
    <div className="app-container">
      <div 
        className="cursor-glow-bg" 
        style={{ 
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)` 
        }} 
      />
      {!isMeetPage && <Header currentHash={currentHash} />}
      <main className="main-content">
        {renderPage()}
      </main>
      {!isMeetPage && <Footer />}
    </div>
  )
}
