import { work, steps } from '../data.js'

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="wrap">
        <div className="head">
          <h2>Featured Domains &amp; Projects</h2>
          <p className="lead">A showcase of digital platforms, websites, and ventures we have built, launched, and scaled.</p>
        </div>
        <div className="work-table">
          {work.map((w) => (
            <div className="work-row" key={w.name + w.domain}>
              <strong>{w.name}</strong>
              <span>{w.kind}</span>
              {w.url ? (
                <a className="link" href={w.url} target="_blank" rel="noreferrer">
                  {w.domain || 'Visit Platform'}
                </a>
              ) : (
                <em>{w.domain}</em>
              )}
            </div>
          ))}
        </div>

        <h2 className="sub">Our Proven 4-Step Growth Process</h2>
        <ol className="steps">
          {steps.map((s) => (
            <li key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
