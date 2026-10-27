import { useState } from 'react'
import { PHONES, WHATSAPP } from '../data.js'

export default function Contact() {
  const [f, setF] = useState({ name: '', phone: '', need: '' })

  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const msg = `Hello Rank's Up,\nName: ${f.name}\nPhone: ${f.phone}\nRequirement: ${f.need}`
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <section id="contact" className="section section-dark">
      <div className="wrap contact-grid">
        <div>
          <h2>Ready to Scale Your Business? Let's Talk.</h2>
          <p className="lead">Fill out the quick form below to start a direct consultation with our growth strategists on WhatsApp.</p>
          <div className="phones">
            {PHONES.map((p) => (
              <a key={p} href={`tel:+91${p}`}>
                {p}
              </a>
            ))}
          </div>
          <p className="domain">ranksup.online</p>
        </div>
        <form onSubmit={submit} className="form">
          <label>
            Your Full Name
            <input required value={f.name} onChange={set('name')} autoComplete="name" placeholder="John Doe" />
          </label>
          <label>
            Phone / WhatsApp Number
            <input required inputMode="tel" value={f.phone} onChange={set('phone')} autoComplete="tel" placeholder="+91 98765 43210" />
          </label>
          <label>
            How can we help you? (Project Requirements)
            <textarea rows="4" required value={f.need} onChange={set('need')} placeholder="Tell us about your business, current traffic, and growth goals..." />
          </label>
          <button className="btn btn-solid btn-lg" type="submit">
            Connect on WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}
