import { Link } from 'react-router-dom'
import { work, steps } from '../data.js'

export default function WorkPage() {
  return (
    <div className="page-wrap">
      {/* Header Banner */}
      <section className="page-header">
        <div className="wrap">
          <div className="page-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Our Work &amp; Process</span>
          </div>
          <h1>Proven Engineering Standards &amp; Systematic Growth</h1>
          <p className="page-lead">
            Great marketing cannot save a broken digital experience. We engineer every website, conversion funnel, and SEO asset using our disciplined 4-step framework.
          </p>
        </div>
      </section>

      {/* 4-Step Process Section */}
      <section className="section">
        <div className="wrap">
          <div className="head">
            <span className="badge-pill">The Framework</span>
            <h2>Our Systematic 4-Step Growth Process</h2>
            <p className="lead">
              Every successful campaign follows an exact, repeatable sequence from initial diagnosis to compounding revenue scale.
            </p>
          </div>

          <div className="process-cards-grid">
            {steps.map((s, index) => (
              <div key={s.title} className="process-card">
                <div className="process-num-badge">STEP 0{index + 1}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <div className="process-deliverable-line">
                  <strong>Expected Outcome:</strong>
                  <span>{
                    index === 0 ? 'Clear diagnosis of leaks & competitor vulnerability map' :
                    index === 1 ? 'Quantified ROI target, ad budget plan & timeline' :
                    index === 2 ? 'Live high-speed web assets, tracking pixels & active ad campaigns' :
                    'Compounding monthly organic traffic & lower cost-per-lead (CPL)'
                  }</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects & Domains Table */}
      <section className="section section-mint">
        <div className="wrap">
          <div className="head">
            <span className="badge-pill">Live Directory</span>
            <h2>Domains &amp; Digital Platforms Engineered by Rank's Up</h2>
            <p className="lead">A directory of platforms, real estate portals, EdTech engines, and venture websites we have deployed.</p>
          </div>

          <div className="work-table-enhanced">
            <div className="work-table-header">
              <span>Platform / Brand</span>
              <span>Primary Industry &amp; Niche</span>
              <span>Platform Architecture &amp; Execution</span>
              <span>Status</span>
            </div>

            {work.map((w) => (
              <div className="work-table-item" key={w.name + w.domain}>
                <div className="col-name">
                  {w.url ? (
                    <a
                      href={w.url}
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                      title={`Visit ${w.name}`}
                    >
                      <strong style={{ color: 'var(--navy)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        {w.name} <span style={{ fontSize: '0.8em', color: 'var(--green)' }}>↗</span>
                      </strong>
                    </a>
                  ) : (
                    <strong>{w.name}</strong>
                  )}
                  <span className="domain-mono">{w.domain}</span>
                </div>
                <div className="col-niche">
                  <span>{w.kind}</span>
                </div>
                <div className="col-tech">
                  <span className="tech-badge">React &amp; Next.js</span>
                  <span className="tech-badge">Performance SEO</span>
                  <span className="tech-badge">Lead Funnels</span>
                </div>
                <div className="col-action">
                  {w.url ? (
                    <a className="btn btn-solid btn-xs" href={w.url} target="_blank" rel="noreferrer">
                      Visit Platform ↗
                    </a>
                  ) : (
                    <span className="status-live-pill">Active in Production</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-dark text-center">
        <div className="wrap">
          <span className="badge-pill">Get Started Today</span>
          <h2>Want Your Platform Engineered With the Same Precision?</h2>
          <p className="lead" style={{ maxWidth: '640px', margin: '0.8rem auto 1.8rem' }}>
            Book a 1-on-1 strategy call. Let's discuss your domain, tech requirements, and organic traffic roadmap.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/book-meeting" className="btn btn-solid btn-lg">
              📅 Book a Strategy Meeting
            </Link>
            <Link to="/services" className="btn btn-ghost btn-lg">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
