import { stats } from '../data.js'

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="wrap stats-grid">
        {stats.map((s) => (
          <div className="stat-card" key={s.label}>
            <span className="stat-num">{s.value}</span>
            <span className="stat-lbl">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
