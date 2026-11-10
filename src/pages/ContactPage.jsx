import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PHONES, WHATSAPP, EMAIL } from '../data.js'

export default function ContactPage() {
  const [f, setF] = useState({ name: '', email: '', service: 'SEO & Organic Rankings' })
  const [submitted, setSubmitted] = useState(false)

  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    const msg = `Hello Rank's Up,\nName: ${f.name}\nEmail: ${f.email}\nService Interested: ${f.service}`
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <div className="page-wrap">
      {/* Header Banner */}
      <section className="page-header">
        <div className="wrap text-center" style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div className="page-breadcrumb" style={{ justifyContent: 'center' }}>
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Contact</span>
          </div>
          <h1>Let's Discuss Your Growth Goals</h1>
          <p className="page-lead">
            Whether you need to scale Google Ads, dominate search rankings, or launch a custom web or mobile platform, our team is ready to assist you.
          </p>
        </div>
      </section>

      {/* Contact Cards Row */}
      <section className="section" style={{ paddingTop: '1.5rem' }}>
        <div className="wrap">
          <div className="contact-methods-grid">
            <div className="method-card">
              <div className="method-icon">📞</div>
              <h3>Direct Call</h3>
              <p>Speak directly with our senior growth consulting team.</p>
              <div className="method-links">
                {PHONES.map((p) => {
                  const tel = p.replace(/\s+/g, '')
                  return (
                    <a key={p} href={tel.startsWith('+') ? `tel:${tel}` : `tel:+91${tel}`} className="method-val">
                      {p}
                    </a>
                  )
                })}
              </div>
              <span className="method-sub">Available Mon–Sat: 9:30 AM – 7:30 PM IST</span>
            </div>

            <div className="method-card">
              <div className="method-icon">💬</div>
              <h3>WhatsApp Chat</h3>
              <p>Fastest way to get campaign quotes and portfolio decks.</p>
              <a
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hello Rank's Up, I want to discuss a new digital marketing project.")}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-solid method-btn"
                style={{ background: '#25D366' }}
              >
                Chat on WhatsApp →
              </a>
              <span className="method-sub">Typical reply time: Under 15 mins</span>
            </div>

            <div className="method-card">
              <div className="method-icon">📅</div>
              <h3>Book a Meeting</h3>
              <p>Schedule a 30-min strategy session directly on our live calendar.</p>
              <Link to="/book-meeting" className="btn btn-solid method-btn">
                Select Calendar Slot →
              </Link>
              <span className="method-sub">Includes Free Growth Audit</span>
            </div>

            <div className="method-card">
              <div className="method-icon">✉️</div>
              <h3>Email Support</h3>
              <p>Send RFPs, partnership proposals, and detailed scopes.</p>
              <a href={`mailto:${EMAIL}`} className="method-val">
                {EMAIL}
              </a>
              <span className="method-sub">Formal proposals within 24 hours</span>
            </div>
          </div>

          {/* Form Grid */}
          <div className="contact-page-form-grid">
            <div className="form-info-side">
              <span className="badge-pill">Direct Inquiry</span>
              <h2>Send Us a Message</h2>
              <p className="lead">
                Fill out the quick form and we will connect with you immediately on WhatsApp and Email with customized growth blueprints.
              </p>
              <ul className="contact-perks-list">
                <li>✓ Direct senior consultant contact (No junior support reps)</li>
                <li>✓ Strict NDA &amp; confidentiality protection</li>
                <li>✓ Transparent pricing with zero hidden fees</li>
              </ul>
            </div>

            <div className="form-wrap-side">
              {submitted ? (
                <div className="contact-success-notice">
                  <div className="success-icon-wrap" style={{ width: '40px', height: '40px' }}>✓</div>
                  <h3>Thank you for reaching out!</h3>
                  <p>Your message has been initiated. If your WhatsApp tab didn't open automatically, click below:</p>
                  <a
                    href={`https://wa.me/${WHATSAPP}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-solid method-btn"
                    style={{ background: '#25D366', marginTop: '1rem' }}
                  >
                    Open WhatsApp Chat
                  </a>
                </div>
              ) : (
                <form onSubmit={submit} className="form">
                  <label>
                    Your Full Name *
                    <input required value={f.name} onChange={set('name')} autoComplete="name" placeholder="John Sharma" />
                  </label>
                  <label>
                    Email Address *
                    <input required type="email" value={f.email} onChange={set('email')} autoComplete="email" placeholder="john@example.com" />
                  </label>
                  <label>
                    Service You Are Interested In
                    <select value={f.service} onChange={set('service')}>
                      <option value="SEO & Organic Rankings">SEO &amp; Organic Rankings</option>
                      <option value="Google & Meta Paid Ads">Google &amp; Meta Paid Ads</option>
                      <option value="Website Design & Development">Website Design &amp; Development</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="Marketing Automation & CRM">Marketing Automation &amp; CRM</option>
                      <option value="All-in-One Performance Retainer">All-in-One Performance Retainer</option>
                    </select>
                  </label>
                  <button className="btn btn-solid contact-submit-btn" type="submit">
                    Send on WhatsApp →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
