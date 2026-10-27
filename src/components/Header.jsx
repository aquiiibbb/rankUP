import { useState, useEffect } from 'react'
import { PHONES } from '../data.js'

const NAV = [
  ['Home', '#home'],
  ['Services', '#services'],
  ['Companies', '#companies'],
  ['Work', '#work'],
  ['About', '#about'],
  ['Contact', '#contact'],
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
    <header className="header">
      <div className="topbar">
        <span className="topbar-phones">
          {PHONES.map((p) => (
            <a key={p} href={`tel:+91${p}`}>
              {p}
            </a>
          ))}
        </span>
      </div>
      <div className="navbar">
        <a href="#home" className="brand" aria-label="Rank's Up home" onClick={close}>
          <img src="/logo.png" alt="Rank's Up Digital Marketing Agency" />
        </a>
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
        <nav className={open ? 'nav open' : 'nav'}>
          {NAV.map(([label, href]) => (
            <a key={href} href={href} onClick={close}>
              {label}
            </a>
          ))}
          <a className="btn btn-solid nav-cta" href="#contact" onClick={close}>
            Free Strategy Call
          </a>
        </nav>
      </div>
    </header>
  )
}
