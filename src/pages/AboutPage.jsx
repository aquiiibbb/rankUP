import { Link } from 'react-router-dom'
import { stats, why } from '../data.js'

export default function AboutPage() {
  return (
    <div className="page-wrap">
      {/* Header Banner */}
      <section className="page-header">
        <div className="wrap">
          <div className="page-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>About Us</span>
          </div>
          <h1>Built on Real Business Experience. Engineered for Scalable ROI.</h1>
          <p className="page-lead">
            Rank's Up is not another theory-driven agency. We are growth architects and engineers who first built, funded, and scaled our own multi-million-rupee ventures before offering our playbook to visionary brands.
          </p>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="section">
        <div className="wrap about-story-grid">
          <div>
            <span className="badge-pill">Our Origin</span>
            <h2>We Test Every Strategy On Our Own Money First</h2>
            <p className="lead" style={{ marginTop: '0.8rem' }}>
              Most digital marketing agencies burn client budgets testing theoretical concepts. At Rank's Up, we took the opposite approach.
            </p>
            <p>
              Having operated and scaled consumer platforms and service companies like Royer Appliances, ELOVAA Beauty Academy, Truenester, and Fullstack Guru, our team had to master organic search algorithms, high-conversion web development, and hyper-profitable paid ads to survive and dominate real markets.
            </p>
            <p>
              Today, Rank's Up operates as an elite growth partner for ambitious founders, startups, and established enterprises who demand verified conversions, predictable lead velocity, and compounding ROI.
            </p>
          </div>

          <div className="about-stats-card">
            <h3>Proven Track Record</h3>
            <div className="about-stats-grid">
              {stats.map((s) => (
                <div key={s.label} className="about-stat-box">
                  <span className="about-stat-val">{s.value}</span>
                  <span className="about-stat-lbl">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section section-mint">
        <div className="wrap mv-section-grid">
          <div className="mv-card">
            <div className="mv-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>
              To empower visionary businesses worldwide to realize their full commercial potential through transparent, data-driven performance marketing — delivering qualified leads, top Google rankings, and sustainable revenue growth.
            </p>
          </div>

          <div className="mv-card">
            <div className="mv-icon">🔭</div>
            <h3>Our Vision</h3>
            <p>
              To become the most reliable, trusted, and results-obsessed digital growth partner globally, known for uncompromising execution speed, engineering precision, and honest client partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values / Why Choose Us */}
      <section className="section">
        <div className="wrap">
          <div className="head text-center" style={{ maxWidth: '720px', margin: '0 auto 2.5rem' }}>
            <span className="badge-pill">The Rank's Up Edge</span>
            <h2>Our Core Operational Principles</h2>
            <p className="lead">How we consistently beat vanity metrics and drive bottom-line revenue.</p>
          </div>

          <div className="grid-why">
            {why.map((w) => (
              <div className="why" key={w.title}>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-dark text-center">
        <div className="wrap">
          <span className="badge-pill">Start Your Transformation</span>
          <h2>Ready to Build a Predictable Customer Acquisition Engine?</h2>
          <p className="lead" style={{ maxWidth: '640px', margin: '0.8rem auto 1.8rem' }}>
            Join our growing family of market leaders. Let's schedule a 30-minute discovery session to see if we're a mutual fit.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/book-meeting" className="btn btn-solid btn-lg">
              📅 Book Strategy Meeting
            </Link>
            <Link to="/companies" className="btn btn-ghost btn-lg">
              Explore Our Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
