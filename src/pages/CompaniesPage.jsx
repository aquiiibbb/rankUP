import { Link } from 'react-router-dom'
import { companies } from '../data.js'
import Testimonials from '../components/Testimonials.jsx'

export default function CompaniesPage() {
  return (
    <div className="page-wrap">
      {/* Header Banner */}
      <section className="page-header">
        <div className="wrap">
          <div className="page-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Companies &amp; Portfolio</span>
          </div>
          <h1>Ventures &amp; Brands Scaled to Market Leaders</h1>
          <p className="page-lead">
            Explore our ecosystem of proprietary platforms and client ventures. From high-converting property portals and luxury cosmetics to enterprise B2B SaaS and on-demand services.
          </p>
          <div className="page-header-actions">
            <Link to="/book-meeting" className="btn btn-solid">
              📅 Scale Your Brand With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase Grid */}
      <section className="section">
        <div className="wrap">
          <div className="head" style={{ marginBottom: '2.5rem' }}>
            <h2>Featured Ventures &amp; Case Studies</h2>
            <p className="lead">
              Every venture below represents end-to-end strategic execution: high-speed React web architecture, search engine dominance, and profitable paid advertising funnels.
            </p>
          </div>

          <div className="portfolio-detail-grid">
            {companies.map((c) => (
              <article className="portfolio-card" key={c.name}>
                <div className="portfolio-card-top">
                  {c.url ? (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noreferrer"
                      className="portfolio-logo-frame"
                      title={`Visit ${c.name} website`}
                    >
                      {c.logo ? (
                        <img src={c.logo} alt={`${c.name} logo`} className="portfolio-card-logo" />
                      ) : (
                        <span className="mono">{c.name.charAt(0)}</span>
                      )}
                    </a>
                  ) : (
                    <div className="portfolio-logo-frame">
                      {c.logo ? (
                        <img src={c.logo} alt={`${c.name} logo`} className="portfolio-card-logo" />
                      ) : (
                        <span className="mono">{c.name.charAt(0)}</span>
                      )}
                    </div>
                  )}
                  <div className="portfolio-meta">
                    <h3>{c.name}</h3>
                    <span className="portfolio-tag">{c.tag}</span>
                  </div>
                </div>

                <p className="portfolio-desc">{c.text}</p>

                <div className="portfolio-highlights">
                  <strong>Strategic Pillars:</strong>
                  <ul>
                    {c.points.map((p) => (
                      <li key={p}>
                        <span className="dot-green-sm" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="portfolio-card-bottom">
                  {c.url ? (
                    <a className="btn btn-ghost-dark btn-portfolio" href={c.url} target="_blank" rel="noreferrer">
                      Live Platform ↗
                    </a>
                  ) : (
                    <span className="platform-active-pill">● Live in Market</span>
                  )}
                  <Link to="/book-meeting" className="btn btn-solid btn-portfolio">
                    Book Growth →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Bottom CTA */}
      <section className="section section-mint text-center">
        <div className="wrap">
          <span className="badge-pill">Become Our Next Success Story</span>
          <h2>Ready to Scale Your Business to Market Dominance?</h2>
          <p className="lead" style={{ maxWidth: '640px', margin: '0.8rem auto 1.8rem' }}>
            Book a free strategy session. We'll show you the exact strategies we used to scale these ventures.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/book-meeting" className="btn btn-solid btn-lg">
              📅 Book Strategy Meeting
            </Link>
            <Link to="/services" className="btn btn-ghost btn-lg" style={{ color: '#0F2A3A', borderColor: '#0F2A3A' }}>
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
