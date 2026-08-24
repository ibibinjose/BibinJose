import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', hash: '#/' },
  { label: 'Story', hash: '#/about' },
  { label: 'Ventures', hash: '#/ventures' },
  { label: 'Ideas Lab', hash: '#/ideas' },
  { label: 'Now', hash: '#/now' },
  { label: 'Work With Me', hash: '#/work-with-me' },
  { label: 'Contact', hash: '#/contact' },
]

export default function Header({ currentHash }) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('color-scheme')
    if (savedTheme) return savedTheme
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleSystemThemeChange = (event) => {
      if (!localStorage.getItem('color-scheme')) {
        setTheme(event.matches ? 'dark' : 'light')
      }
    }

    mediaQuery.addEventListener('change', handleSystemThemeChange)
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange)
  }, [theme])

  useEffect(() => {
    if (!mobileMenuOpen) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMobileMenuOpen(false)
    }

    document.body.classList.add('nav-open')
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.classList.remove('nav-open')
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [mobileMenuOpen])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    localStorage.setItem('color-scheme', nextTheme)
    document.documentElement.setAttribute('data-theme', nextTheme)
    document.querySelector('meta[name="color-scheme"]')?.setAttribute('content', nextTheme)
  }

  const closeMenu = () => setMobileMenuOpen(false)

  return (
    <header className="header">
      <div className="header-container">
        <a href="#/" className="logo" onClick={closeMenu} aria-label="Bibin Jose home">
          <span className="logo-mark" aria-hidden="true">BJ</span>
          <span>BIBIN <span className="logo-accent">JOSE</span></span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.hash}
              href={link.hash}
              className={`nav-link ${currentHash === link.hash ? 'active' : ''}`}
              aria-current={currentHash === link.hash ? 'page' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
            className="mobile-menu-toggle"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`} id="mobile-navigation">
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <span className="mobile-nav-label">Explore the studio</span>
          {navLinks.map((link, index) => (
            <a
              key={link.hash}
              href={link.hash}
              className={`mobile-nav-link ${currentHash === link.hash ? 'active' : ''}`}
              onClick={closeMenu}
              aria-current={currentHash === link.hash ? 'page' : undefined}
              style={{ '--menu-index': index }}
            >
              <span>{link.label}</span>
              <span aria-hidden="true">0{index + 1}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
