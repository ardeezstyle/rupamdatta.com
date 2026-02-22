import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Download, Moon, Sun, Menu, X } from 'lucide-react'
import { trackEvent } from '../../analytics'
import { AnalyticsEvent } from '../../AnalyticsEvent'

export default function Header() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const handleResumeDownload = () => {
    trackEvent(AnalyticsEvent.ResumeDownload, 'engagement', 'header')
    setMenuOpen(false)
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="header">
      <div className="header__inner container">
        <div className="header__brand">
          <NavLink to="/" className="brand-link" onClick={closeMenu}>
            Rupam Datta
          </NavLink>
        </div>

        <div className="header__right">
          {/* Desktop Nav */}
          <nav className="header__nav">
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/work" className="nav-link">
              Work
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </nav>

          <div className="header__actions">
            <button
              className="theme-toggle"
              onClick={() =>
                setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
              }
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            {/* Desktop Resume */}
            <a
              href="/resume-rupam-datta.pdf"
              download
              onClick={handleResumeDownload}
              className="resume-link desktop-only"
              aria-label="Download resume"
              title="Download Resume"
            >
              <Download size={20} />
            </a>

            {/* Hamburger (Mobile only) */}
            <button
              className="hamburger mobile-only"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="mobile-menu">
          <NavLink to="/about" className="nav-link" onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/work" className="nav-link" onClick={closeMenu}>
            Work
          </NavLink>
          <NavLink to="/contact" className="nav-link" onClick={closeMenu}>
            Contact
          </NavLink>

          <a
            href="/resume-rupam-datta.pdf"
            download
            onClick={handleResumeDownload}
            className="nav-link"
          >
            Download Resume
          </a>
        </div>
      )}
    </header>
  )
}
