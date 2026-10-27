import { testimonials } from '../data.js'

export default function Testimonials() {
  return (
    <section className="section section-testimonials">
      <div className="wrap">
        <div className="head">
          <h2>Client Success &amp; Growth Stories</h2>
          <p className="lead">
            Here is what founders and leaders say about scaling their traffic, leads, and revenue with Rank's Up.
          </p>
        </div>
        <div className="grid-testimonials">
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.company}>
              <div className="testimonial-header">
                <div className="testimonial-logo-box">
                  <img src={t.logo} alt={t.company} className="testimonial-logo-img" />
                </div>
                <div className="testimonial-stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
              </div>
              <p className="testimonial-quote">"{t.quote}"</p>
              <div className="testimonial-author">
                <strong>{t.author}</strong>
                <span>{t.company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
