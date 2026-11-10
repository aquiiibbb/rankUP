import { Link } from 'react-router-dom'
import MeetingCalendar from '../components/MeetingCalendar.jsx'
import { PHONES } from '../data.js'

export default function BookMeetingPage() {
  return (
    <div className="page-wrap">
      {/* Header Banner */}
      <section className="page-header">
        <div className="wrap text-center" style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div className="page-breadcrumb" style={{ justifyContent: 'center' }}>
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Book a Meeting</span>
          </div>
          <span className="badge-pill">1-on-1 Founder Consultation</span>
          <h1>Schedule Your Free Growth Strategy Session</h1>
          <p className="page-lead">
            Select a date and time slot below. Our senior strategists will review your website, analyze your current advertising metrics, and deliver an actionable scaling blueprint.
          </p>
        </div>
      </section>

      {/* Main Calendar Section */}
      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="wrap">
          <MeetingCalendar />
        </div>
      </section>

      {/* What Happens On The Call Section */}
      <section className="section section-mint">
        <div className="wrap">
          <div className="head text-center" style={{ maxWidth: '720px', margin: '0 auto 2.5rem' }}>
            <h2>What We Will Cover During Your 30-Minute Call</h2>
            <p className="lead">A focused, tactical roadmap tailored to your specific market and stage.</p>
          </div>

          <div className="meeting-benefits-grid">
            <div className="benefit-card">
              <div className="benefit-ico">🔍</div>
              <h4>Conversion &amp; SEO Audit</h4>
              <p>We analyze where your current website is leaking traffic and identify top untapped Google keyword opportunities.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-ico">📈</div>
              <h4>Ad ROAS &amp; Funnel Review</h4>
              <p>We review your Google &amp; Meta ad creatives, targeting funnels, and show you how to cut wasted spend.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-ico">🗺️</div>
              <h4>90-Day Execution Roadmap</h4>
              <p>You receive a step-by-step scaling plan detailing deliverables, estimated timeline, and expected ROI.</p>
            </div>
          </div>

          <div className="direct-call-fallback-box">
            <p>Need urgent assistance or prefer talking immediately?</p>
            <div className="phones-call-row">
              {PHONES.map((p) => {
                const tel = p.replace(/\s+/g, '')
                return (
                  <a key={p} href={tel.startsWith('+') ? `tel:${tel}` : `tel:+91${tel}`} className="btn btn-solid">
                    📞 Call Now: {p}
                  </a>
                )
              })}
              <a
                href="https://wa.me/919135770521"
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
                style={{ background: '#25D366', color: '#fff', borderColor: '#25D366' }}
              >
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
