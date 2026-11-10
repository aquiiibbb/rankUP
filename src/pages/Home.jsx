import { Link } from 'react-router-dom'
import {
  Hero,
  Brands,
  Stats,
  Services,
  Why,
  Companies,
  Testimonials,
} from '../components'
import MeetingCalendar from '../components/MeetingCalendar.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <Stats />
      
      {/* Services Preview Section */}
      <section className="home-section-wrap">
        <Services />
        <div className="section-cta-wrap wrap">
          <Link to="/services" className="btn btn-solid">
            Explore All 7 Services &amp; Deliverables →
          </Link>
        </div>
      </section>

      <Why />

      {/* Companies Portfolio */}
      <section className="home-section-wrap">
        <Companies />
        <div className="section-cta-wrap wrap">
          <Link to="/companies" className="btn btn-solid">
            View All Portfolio Ventures &amp; Results →
          </Link>
        </div>
      </section>

      <Testimonials />

      {/* Dedicated Calendar Booking Section on Home */}
      <section id="meeting" className="section section-mint meeting-home-section">
        <div className="wrap">
          <div className="head" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 2.5rem' }}>
            <span className="badge-pill">Free 30-Min Strategy Call</span>
            <h2>Book a Meeting with Our Growth Strategists</h2>
            <p className="lead">
              Select a date on our live calendar below. We'll audit your current traffic, review your advertising campaigns, and deliver a high-ROI growth roadmap directly to your inbox.
            </p>
          </div>
          <MeetingCalendar />
        </div>
      </section>
    </>
  )
}
