import { companies } from '../data.js'

export default function Brands() {
  return (
    <section className="brands-strip">
      <div className="wrap">
        <p className="brands-title">Trusted by Leading Brands, Ventures &amp; Startups</p>
        <div className="brands-grid">
          {companies.map((c) => {
            const logoContent = c.logo ? (
              <img src={c.logo} alt={`${c.name} logo`} className="brand-card-img" />
            ) : (
              <b className="brand-card-text">{c.name}</b>
            )

            return c.url ? (
              <a
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noreferrer"
                className="brand-card"
                title={`Visit ${c.name} (${c.url})`}
              >
                {logoContent}
              </a>
            ) : (
              <div className="brand-card" key={c.name} title={c.name}>
                {logoContent}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
