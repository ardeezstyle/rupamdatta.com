import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Download, Moon, Sun } from 'lucide-react'
import { trackEvent } from '../../analytics'
import { AnalyticsEvent } from '../../AnalyticsEvent'

export default function Header() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const handleResumeDownload = () => {
    trackEvent(AnalyticsEvent.ResumeDownload, 'engagement', 'header')
  }

  return (
    <header className="header">
      <div className="header__inner container">
        <div className="header__brand">
          <NavLink to="/" className="brand-link">
            Rupam Datta
          </NavLink>
        </div>

        <div className="header__right">
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

          {/* Action icons cluster */}
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

            <a
              href="/resume-rupam-datta.pdf"
              download
              onClick={handleResumeDownload}
              className="resume-link"
              aria-label="Download resume"
              title="Download Resume"
            >
              <Download size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
