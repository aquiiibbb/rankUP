import { services } from '../data.js'
import Icon from './Icons.jsx'

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="wrap">
        <div className="head">
          <h2>How We Help Your Business Scale</h2>
          <p className="lead">From growth strategy to campaign execution, our unified team handles everything.</p>
        </div>
        <div className="grid-services">
          {services.map((s) => (
            <article className="service" key={s.name}>
              <div className="ico">
                <Icon name={s.name} />
              </div>
              <h3>{s.name}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
