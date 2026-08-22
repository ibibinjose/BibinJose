import { useState, useEffect } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'

export default function Header({ currentHash }) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('color-scheme')
    if (savedTheme) return savedTheme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'light'
  })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Synchronize theme attribute and register system setting listeners
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleSystemThemeChange = (e) => {
      if (!localStorage.getItem('color-scheme')) {
        const newTheme = e.matches ? 'dark' : 'light'
        setTheme(newTheme)
      }
    }

    mediaQuery.addEventListener('change', handleSystemThemeChange)
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange)
  }, [theme])


  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    localStorage.setItem('color-scheme', nextTheme)
    document.documentElement.setAttribute('data-theme', nextTheme)
    document.querySelector('meta[name="color-scheme"]').content = nextTheme
  }

  const navLinks = [
    { label: 'Home', hash: '#/' },
    { label: 'Story', hash: '#/about' },
    { label: 'Ventures', hash: '#/ventures' },
    { label: 'Ideas Lab', hash: '#/ideas' },
    { label: 'Now', hash: '#/now' },
    { label: 'Work With Me', hash: '#/work-with-me' },
    { label: 'Contact', hash: '#/contact' },
  ]

  const closeMenu = () => setMobileMenuOpen(false)

  return (
    <header className="header glass-panel">
      <div className="header-container">
        <a href="#/" className="logo" onClick={closeMenu}>
          BIBIN <span className="logo-accent">JOSE</span>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.hash}
              href={link.hash}
              className={`nav-link ${currentHash === link.hash ? 'active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Hamburger Menu (Mobile) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <div className={`mobile-drawer glass-panel ${mobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          {navLinks.map((link) => (
            <a
              key={link.hash}
              href={link.hash}
              className={`mobile-nav-link ${currentHash === link.hash ? 'active' : ''}`}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
