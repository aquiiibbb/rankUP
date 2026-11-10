import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { PHONES } from '../data.js'

const NAV = [
  ['Home', '/'],
  ['Services', '/services'],
  ['About Us', '/about'],
  ['Companies', '/companies'],
  ['Our Work', '/work'],
  ['Contact', '/contact'],
]

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`header ${open ? 'header-menu-open' : ''}`}>
      <div className="topbar">
        <div className="topbar-inner">
          <div className="topbar-disclaimer">
            <span className="topbar-badge">
              <span className="topbar-pulse" />
              <span>Growth Partner</span>
            </span>
            <span className="topbar-tagline">
              Google &amp; Meta Ads Campaign • High-Rank SEO • Mobile App &amp; Web Development
            </span>
            <span className="topbar-tagline-mobile">
              Ads • SEO • Mobile Apps • Web
            </span>
          </div>

          <div className="topbar-right">
            {PHONES.map((p) => {
              const tel = p.replace(/\s+/g, '')
              return (
                <a
                  key={p}
                  className="topbar-phone-pill"
                  href={tel.startsWith('+') ? `tel:${tel}` : `tel:+91${tel}`}
                  aria-label={`Call us at ${p}`}
                >
                  <span className="phone-pulse-dot" />
                  <svg
                    viewBox="0 0 24 24"
                    width="13"
                    height="13"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="topbar-phone-icon"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span className="topbar-call-label">Direct Call:</span>
                  <strong className="topbar-call-num">{p}</strong>
                </a>
              )
            })}
          </div>
        </div>
      </div>
      <div className="navbar">
        <div className="navbar-brand-row">
          <Link to="/" className="brand" aria-label="Rank's Up home" onClick={close}>
            <img src="/logo.png" alt="Rank's Up Digital Marketing Agency" />
          </Link>
          <button
            className={open ? 'menu-btn is-open' : 'menu-btn'}
            aria-expanded={open}
            aria-label="Menu"
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <nav className={open ? 'nav open' : 'nav'}>
          {NAV.map(([label, href]) => (
            <NavLink
              key={href}
              to={href}
              end={href === '/'}
              className={({ isActive }) => (isActive ? 'nav-link is-active' : 'nav-link')}
              onClick={close}
            >
              {label}
            </NavLink>
          ))}
          <Link className="btn btn-solid nav-cta" to="/book-meeting" onClick={close}>
            📅 Book a Meeting
          </Link>
        </nav>
      </div>
    </header>
  )
}
