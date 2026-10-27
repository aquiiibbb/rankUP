import { companies } from '../data.js'

export default function Companies() {
  return (
    <section id="companies" className="section section-dark">
      <div className="wrap">
        <div className="head">
          <h2>Our Portfolio Companies &amp; Ventures</h2>
          <p className="lead">
            Real brands we have built, optimized, and scaled. From custom websites and SEO dominance to multi-million-rupee ad campaigns, here is what we do.
          </p>
        </div>
        <div className="grid-companies">
          {companies.map((c) => (
            <article className="company" key={c.name}>
              <div className="company-header">
                <div className="company-logo-pill">
                  {c.logo ? (
                    <img src={c.logo} alt={`${c.name} logo`} className="company-logo-img" />
                  ) : (
                    <span className="mono">{c.name.charAt(0)}</span>
                  )}
                </div>
                <div className="company-title-wrap">
                  <h3>{c.name}</h3>
                  <span className="tag">{c.tag}</span>
                </div>
              </div>

              <p>{c.text}</p>
              <ul>
                {c.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              {c.url && (
                <a className="link" href={c.url} target="_blank" rel="noreferrer">
                  Visit Website &rarr;
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
