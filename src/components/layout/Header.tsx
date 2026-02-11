import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Header() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

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

          <button
            className="theme-toggle"
            onClick={() =>
              setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
            }
          >
            {theme === 'light' ? 'Dark' : 'Light'}
          </button>
        </div>
      </div>
    </header>
  )
}
