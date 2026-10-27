import { useState, useEffect, useRef } from 'react'
import './hero.css'

const SLIDES = [
  {
    image: '/slides/slide-seo.png',
    badge: 'No. 1 Google Ranking',
    title: "Rank's Up – SEO & Organic Traffic",
    desc: '+248% Organic traffic growth, top keyword authority & verified rankings.',
    query: 'best digital marketing agency',
  },
  {
    image: '/slides/slide-app.png',
    badge: 'Android & iOS Apps',
    title: 'Mobile App Development (iOS & Android)',
    desc: 'High-performance React Native & Flutter apps on Apple App Store & Google Play.',
    query: 'mobile app development android ios',
  },
  {
    image: '/slides/slide-ads.png',
    badge: '5.2x High ROAS',
    title: 'Meta & Google Paid Ads Campaign',
    desc: '1,840+ targeted leads, 4.1% conversion rate, and profitable scaling.',
    query: 'high roas google & meta ads agency',
  },
  {
    image: '/slides/slide-web.png',
    badge: 'Fast & Modern',
    title: 'High-Converting React Web Design',
    desc: 'Ultra-fast loading, sleek mobile UI/UX engineered to convert visitors into customers.',
    query: 'fast react website development',
  },
  {
    image: '/slides/slide-automation.png',
    badge: '24/7 AI Leads',
    title: 'WhatsApp Automation & AI Chatbots',
    desc: 'Instant lead qualification, automated CRM sync, and high-converting follow-up funnels.',
    query: 'whatsapp marketing automation crm',
  },
]

const SWIPE_THRESHOLD = 40 // minimum horizontal distance (px) to count as a swipe
const AUTOPLAY_MS = 3800

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef(null)
  const touchStartY = useRef(null)

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length)
    }, AUTOPLAY_MS)
    return () => clearInterval(timer)
  }, [isPaused])

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % SLIDES.length)
  }

  // Touch handlers: swipe left/right to change slides, pause autoplay while touching
  const handleTouchStart = (e) => {
    const t = e.touches[0]
    touchStartX.current = t.clientX
    touchStartY.current = t.clientY
    setIsPaused(true)
  }

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const t = e.changedTouches[0]
    const dx = t.clientX - touchStartX.current
    const dy = t.clientY - touchStartY.current
    touchStartX.current = null
    touchStartY.current = null
    setIsPaused(false)

    // Ignore mostly-vertical gestures so page scroll is not hijacked
    if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) < Math.abs(dy)) return
    if (dx < 0) nextSlide()
    else prevSlide()
  }

  const handleTouchCancel = () => {
    touchStartX.current = null
    touchStartY.current = null
    setIsPaused(false)
  }

  // Keyboard support: arrow keys when the slider has focus
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') prevSlide()
    if (e.key === 'ArrowRight') nextSlide()
  }

  const slide = SLIDES[current]

  return (
    <section id="home" className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <h1>Rank Higher on Google. Turn Clicks into Paying Customers.</h1>
          <p>
            Rank's Up is a results-driven digital marketing agency delivering verified leads,
            high ROAS, and scalable business growth through SEO, paid ads, custom websites, mobile apps, and marketing automation.
          </p>
          <div className="hero-actions">
            <a className="btn btn-solid btn-lg" href="#contact">
              Book a Free Strategy Call
            </a>
            <a className="btn btn-ghost btn-lg" href="#services">
              Explore Services
            </a>
          </div>
          <ul className="hero-points">
            <li>SEO</li>
            <li>Google &amp; Meta Ads</li>
            <li>Web Development</li>
            <li>Android &amp; iOS Apps</li>
            <li>Automation</li>
          </ul>
        </div>

        <div className="hero-art">
          <div
            className="serp"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
          >
            <div className="serp-bar">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
              <div className="serp-input">
                <svg
                  viewBox="0 0 24 24"
                  width="15"
                  height="15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ opacity: 0.6, flexShrink: 0 }}
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
                <span className="serp-query-text">{slide.query}</span>
              </div>
            </div>

            <div className="serp-body">
              <div
                className="serp-slider"
                role="group"
                aria-roledescription="carousel"
                aria-label="Our services"
                tabIndex={0}
                onKeyDown={handleKeyDown}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onTouchCancel={handleTouchCancel}
              >
                <div className="slider-track" aria-live={isPaused ? 'polite' : 'off'}>
                  {SLIDES.map((s, idx) => (
                    <div
                      key={s.title}
                      className={`slider-slide ${idx === current ? 'is-active' : ''}`}
                      role="group"
                      aria-roledescription="slide"
                      aria-label={`${idx + 1} of ${SLIDES.length}`}
                      aria-hidden={idx !== current}
                    >
                      <img
                        src={s.image}
                        alt={s.title}
                        className="slide-image"
                        loading={idx === 0 ? 'eager' : 'lazy'}
                        decoding="async"
                        draggable="false"
                      />
                      <div className="slide-caption">
                        <span className="slide-badge">{s.badge}</span>
                        <h4 className="slide-title">{s.title}</h4>
                        <p className="slide-desc">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  className="slider-nav prev"
                  onClick={prevSlide}
                  aria-label="Previous Slide"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="slider-nav next"
                  onClick={nextSlide}
                  aria-label="Next Slide"
                >
                  ›
                </button>

                <div className="slider-dots">
                  {SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`slider-dot ${idx === current ? 'active' : ''}`}
                      onClick={() => setCurrent(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      aria-current={idx === current}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="trend" aria-hidden="true">
            <svg viewBox="0 0 220 90">
              <defs>
                <linearGradient id="g" x1="0" x2="1">
                  <stop offset="0" stopColor="#1B7F86" />
                  <stop offset="1" stopColor="#2FC47A" />
                </linearGradient>
              </defs>
              <path
                className="draw"
                d="M8 78 L50 58 L84 66 L130 34 L160 44 L208 10"
                fill="none"
                stroke="url(#g)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <small>Rapid Traffic Growth</small>
          </div>
        </div>
      </div>
    </section>
  )
}