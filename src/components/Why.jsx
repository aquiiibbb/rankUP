import { why } from '../data.js'

export default function Why() {
  return (
    <section className="section section-mint">
      <div className="wrap">
        <div className="head">
          <h2>Why Choose Rank's Up?</h2>
          <p className="lead">Built on real business experience, complete transparency, and a relentless focus on ROI.</p>
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
  )
}
