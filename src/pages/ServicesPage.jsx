import { Link } from 'react-router-dom'
import { services } from '../data.js'
import Icon from '../components/Icons.jsx'

const SERVICE_DETAILS = {
  'SEO': {
    subtitle: 'Dominate Google Search Results & Capture High-Intent Organic Leads',
    deliverables: [
      'Technical SEO Audit & Core Web Vitals Optimization',
      'High-Intent Commercial Keyword Research',
      'On-Page Semantic Optimization & Schema Markup',
      'Authoritative White-Hat Link Building',
      'Google My Business & Local Map Pack Rankings',
      'Monthly Ranking & Organic Revenue Reporting',
    ],
    tech: ['Google Search Console', 'Ahrefs', 'SEMrush', 'Screaming Frog'],
    badge: 'High Organic ROI',
  },
  'Paid Advertising': {
    subtitle: 'Laser-Targeted Google & Meta Campaigns Engineered for Maximum ROAS',
    deliverables: [
      'High-Converting Ad Copy & Visual Creative Design',
      'Google Search, Display & Performance Max Campaigns',
      'Meta (Facebook & Instagram) Interest & Lookalike Funnels',
      'Dynamic Retargeting & Abandoned Cart Recovery',
      'Conversion API (CAPI) & Pixel Tracking Setup',
      'Weekly Cost-Per-Lead (CPL) Optimization',
    ],
    tech: ['Google Ads', 'Meta Business Suite', 'GA4', 'Tag Manager'],
    badge: '5.2x Average ROAS',
  },
  'Website Design & Development': {
    subtitle: 'Blazing Fast React & Modern Web Platforms Built for Conversions',
    deliverables: [
      'Custom React & Next.js Responsive Architecture',
      'Figma UI/UX Design Tailored for High Conversion Rates',
      'Mobile-First Layout with 95+ PageSpeed Scores',
      'Interactive Calendars, Calculators & Lead Funnels',
      'Automated Contact Forms & WhatsApp Web Sync',
      'End-to-End Hosting & CDN Deployment',
    ],
    tech: ['React.js', 'Vite', 'Next.js', 'Node.js', 'Tailwind/CSS3'],
    badge: 'Ultra Fast Load Times',
  },
  'Mobile App Development': {
    subtitle: 'Native-Quality Android & iOS Mobile Applications Built to Scale',
    deliverables: [
      'Cross-Platform Development in React Native & Flutter',
      'Intuitive iOS & Android User Interface (UI/UX)',
      'Secure Authentication, Push Notifications & In-App Purchases',
      'Scalable REST & GraphQL Backend Integrations',
      'App Store Optimization (ASO) & Play Store Launch',
      'Continuous Maintenance & Feature Updates',
    ],
    tech: ['React Native', 'Flutter', 'Firebase', 'iOS & Android SDK'],
    badge: 'App Store & Play Store',
  },
  'Social Media Marketing': {
    subtitle: 'Viral Reels, Strategic Content Calendars & Brand Authority Building',
    deliverables: [
      'Monthly Content Strategy & Editorial Calendars',
      'High-Engagement Short-Form Video & Viral Reels',
      'Custom Graphic Creatives & Carousel Posts',
      'B2B Thought Leadership on LinkedIn',
      'Community Management & Follower Growth',
      'Audience Analytics & Trend Jacking',
    ],
    tech: ['Canva Pro', 'Premiere Pro', 'Figma', 'Meta Creator Studio'],
    badge: 'Viral Engagement',
  },
  'Marketing Automation': {
    subtitle: 'Automated WhatsApp Funnels, Smart Email Drips & Zero-Friction CRM',
    deliverables: [
      'Instant WhatsApp Chatbot & Catalog Automation',
      'Behavioral Email Drip Sequences & Abandoned Lead Retargeting',
      'Seamless CRM Integration (HubSpot, Zoho, Leadsquared)',
      'Automated Lead Scoring & Instant Sales Rep Alerts',
      'Zapier & Webhook Automated Pipelines',
      'Comprehensive Funnel Conversion Analytics',
    ],
    tech: ['WhatsApp Cloud API', 'Make / Zapier', 'HubSpot', 'ActiveCampaign'],
    badge: '24/7 Automation',
  },
  'AI Ads & Chatbots': {
    subtitle: 'Next-Gen AI Dynamic Ads & Intelligent Customer Service Chatbots',
    deliverables: [
      'Custom Trained GPT Chatbots for Customer Support & Sales',
      'Automated AI Lead Qualification & Appointment Booking',
      'Multi-Language Support (English, Hindi & Regional)',
      'Dynamic AI Ad Creative & Copy Testing at Scale',
      'CRM & Google Calendar Direct Integration',
      'Continuous Learning & Sentiment Analytics',
    ],
    tech: ['OpenAI API', 'Botpress', 'Voiceflow', 'LangChain'],
    badge: 'Next-Gen AI',
  },
}

export default function ServicesPage() {
  return (
    <div className="page-wrap">
      {/* Header Banner */}
      <section className="page-header">
        <div className="wrap">
          <div className="page-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Services</span>
          </div>
          <h1>High-Performance Digital Growth Services</h1>
          <p className="page-lead">
            From technical SEO dominance and high-ROAS paid advertising to custom React web development and AI chatbots — we handle your entire growth stack under one roof.
          </p>
          <div className="page-header-actions">
            <Link to="/book-meeting" className="btn btn-solid">
              📅 Book a Free Growth Call
            </Link>
            <a href="tel:+919883330353" className="btn btn-ghost">
              📞 Direct Call: +91 98833 30353
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section services-detail-section">
        <div className="wrap">
          <div className="services-detail-list">
            {services.map((s, index) => {
              const detail = SERVICE_DETAILS[s.name] || {}
              return (
                <article key={s.name} id={s.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')} className="service-detail-card">
                  <div className="svc-card-header">
                    <div className="svc-header-top">
                      <div className="svc-icon-badge">
                        <Icon name={s.name} />
                      </div>
                      <div className="svc-header-meta">
                        <span className="svc-number">0{index + 1} / SERVICE</span>
                        <h2>{s.name}</h2>
                      </div>
                      {detail.badge && <span className="svc-pill">{detail.badge}</span>}
                    </div>
                    <p className="svc-subtitle">{detail.subtitle || s.text}</p>
                  </div>

                  <p className="svc-full-desc">{s.text}</p>

                  <div className="svc-deliverables-box">
                    <h4>What's Included &amp; Key Deliverables:</h4>
                    <ul className="svc-points-grid">
                      {(detail.deliverables || []).map((pt) => (
                        <li key={pt}>
                          <span className="check-ico">✓</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {detail.tech && (
                    <div className="svc-tech-stack">
                      <strong>Tools &amp; Tech Stack:</strong>
                      <div className="tech-chips">
                        {detail.tech.map((t) => (
                          <span key={t} className="tech-chip">{t}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="svc-card-footer">
                    <Link to="/book-meeting" className="btn btn-solid btn-svc">
                      Book Consultation for {s.name} →
                    </Link>
                    <a
                      href={`https://wa.me/919135770521?text=${encodeURIComponent(`Hi Rank's Up, I am interested in your ${s.name} service.`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-ghost-dark btn-svc"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="section section-dark text-center">
        <div className="wrap">
          <span className="badge-pill">Ready to Scale?</span>
          <h2>Let's Build a Custom Growth Strategy for Your Brand</h2>
          <p className="lead" style={{ maxWidth: '680px', margin: '0.8rem auto 1.8rem' }}>
            Book a free 30-minute discovery call with our senior strategists. We will audit your current positioning and show you the exact roadmap to scale your revenue.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/book-meeting" className="btn btn-solid btn-lg">
              📅 Schedule Strategy Session
            </Link>
            <Link to="/contact" className="btn btn-ghost btn-lg">
              Contact Us Directly
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
