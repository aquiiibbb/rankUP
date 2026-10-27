import './footer.css'

// Same links as the Header menu
const NAV = [
  ['Home', '#home'],
  ['Services', '#services'],
  ['Companies', '#companies'],
  ['Work', '#work'],
  ['About', '#about'],
  ['Contact', '#contact'],
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-in">
        <a href="#home" className="footer-brand" aria-label="Rank's Up home">
          <img src="/logo.png" alt="Rank's Up" />
        </a>

        <nav className="footer-nav" aria-label="Footer">
          {NAV.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <p className="footer-copy">© {new Date().getFullYear()} Rank's Up. Ranksup.online</p>
      </div>
    </footer>
  )
}