import { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const navItems = [
  { label: 'Home', icon: '🏠', to: '/' },
  { label: 'Menu', icon: '☕', to: '/menu' },
  { label: 'Contact', icon: '✉️', to: '/contact' },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="navbar-wrap">
      <div className="brand-block">
        <h1>Coffee</h1>
        <span>Shop</span>
      </div>

      <button
        type="button"
        className="menu-toggle"
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        ☰
      </button>

      <nav className={`nav-bar ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
        <ul>
          {navItems.map((item) => (
            <li key={item.label}>
              <Link to={item.to} className="nav-link" onClick={() => setMenuOpen(false)}>
                <span className="nav-icon" aria-hidden="true">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}

          <li className="nav-action">
            <button
              type="button"
              className="order-btn"
              onClick={() => window.open('https://maps.app.goo.gl/ML56nynavyKNGykA9', '_blank', 'noopener,noreferrer')}
            >
              Location📍
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar