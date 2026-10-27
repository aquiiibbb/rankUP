import { companies } from '../data.js'

export default function Brands() {
  return (
    <section className="brands-strip">
      <div className="wrap">
        <p className="brands-title">Trusted by Leading Brands, Ventures &amp; Startups</p>
        <div className="brands-grid">
          {companies.map((c) => (
            <div className="brand-card" key={c.name} title={c.name}>
              {c.logo ? (
                <img src={c.logo} alt={`${c.name} logo`} className="brand-card-img" />
              ) : (
                <b className="brand-card-text">{c.name}</b>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
