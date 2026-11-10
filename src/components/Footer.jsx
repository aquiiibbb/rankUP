import { Link } from 'react-router-dom'
import { PHONES, WHATSAPP, EMAIL } from '../data.js'
import './footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="wrap footer-main">
        {/* Column 1: Brand & Social */}
        <div className="footer-col footer-col-brand">
          <Link to="/" className="footer-brand" aria-label="Rank's Up home">
            <img src="/logo.png" alt="Rank's Up Digital Marketing Agency" />
          </Link>
          <p className="footer-desc">
            Rank's Up is a premier digital marketing &amp; growth agency. We engineer organic search engine dominance, high-ROAS paid ad campaigns, custom React web platforms, and automated WhatsApp conversion funnels.
          </p>
          <div className="footer-status-pill">
            <span className="footer-pulse-dot" />
            <span>Accepting New Growth Retainers</span>
          </div>

          <div className="footer-social-wrap">
            <span className="social-label">Connect With Us:</span>
            <div className="social-icons">
              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="Rank's Up on LinkedIn" className="social-icon-btn">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.7a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Rank's Up on Instagram" className="social-icon-btn">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Rank's Up on Facebook" className="social-icon-btn">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

            

              {/* YouTube */}
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="Rank's Up on YouTube" className="social-icon-btn">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.26 5 12 5 12 5s-6.26 0-7.82.42A2.5 2.5 0 0 0 2.42 7.19 26.54 26.54 0 0 0 2 12a26.54 26.54 0 0 0 .42 4.81 2.5 2.5 0 0 0 1.76 1.77C5.74 19 12 19 12 19s6.26 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77A26.54 26.54 0 0 0 22 12a26.54 26.54 0 0 0-.42-4.81zM10 15V9l5.2 3-5.2 3z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" aria-label="Chat with Rank's Up on WhatsApp" className="social-icon-btn" style={{ color: '#25D366' }}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.54 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.32z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Column 2: Growth Services */}
        <div className="footer-col">
          <h4 className="footer-col-title">Growth Services</h4>
          <ul className="footer-links-list">
            <li><Link to="/services#seo">Search Engine Optimization (SEO)</Link></li>
            <li><Link to="/services#paid-advertising">Google &amp; Meta Paid Ads</Link></li>
            <li><Link to="/services#website-design-development">Custom Website Development</Link></li>
            <li><Link to="/services#mobile-app-development">Android &amp; iOS Mobile Apps</Link></li>
            <li><Link to="/services#social-media-marketing">Social Media Marketing</Link></li>
            <li><Link to="/services#marketing-automation">WhatsApp Automation &amp; CRM</Link></li>
            <li><Link to="/services#ai-ads-chatbots">AI Ads &amp; Conversational Bots</Link></li>
          </ul>
        </div>

        {/* Column 3: Quick Links & Portfolio */}
        <div className="footer-col">
          <h4 className="footer-col-title">Company &amp; Portfolio</h4>
          <ul className="footer-links-list">
            <li><Link to="/">Home Overview</Link></li>
            <li><Link to="/about">About Rank's Up</Link></li>
            <li><Link to="/companies">Portfolio Companies</Link></li>
            <li><Link to="/work">Our 4-Step Process</Link></li>
            <li><Link to="/book-meeting">📅 Book a Strategy Meeting</Link></li>
            <li><Link to="/contact">Contact Support</Link></li>
          </ul>
        </div>

        {/* Column 4: Direct Contact & Availability */}
        <div className="footer-col footer-col-contact">
          <h4 className="footer-col-title">Direct Contact</h4>
          <p className="contact-note">Get in touch directly with our senior consulting team:</p>
          
          <div className="footer-contact-items">
            <div className="f-contact-item">
              <span className="f-ico">📞</span>
              <div>
                <small>Direct Phone:</small>
                {PHONES.map((p) => {
                  const tel = p.replace(/\s+/g, '')
                  return (
                    <a key={p} href={tel.startsWith('+') ? `tel:${tel}` : `tel:+91${tel}`} className="f-val">
                      {p}
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="f-contact-item">
              <span className="f-ico">💬</span>
              <div>
                <small>WhatsApp Business:</small>
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="f-val">
                  +91 91357 70521
                </a>
              </div>
            </div>

            <div className="f-contact-item">
              <span className="f-ico">✉️</span>
              <div>
                <small>Official Email:</small>
                <a href={`mailto:${EMAIL}`} className="f-val">
                  {EMAIL}
                </a>
              </div>
            </div>

            <div className="f-contact-item">
              <span className="f-ico">⏰</span>
              <div>
                <small>Working Hours:</small>
                <span className="f-val-text">Mon – Sat: 9:30 AM – 7:30 PM IST</span>
              </div>
            </div>
          </div>

          <Link to="/book-meeting" className="btn btn-solid btn-sm footer-book-btn">
            📅 Schedule 30-Min Call
          </Link>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Compliance */}
      <div className="footer-bottom-bar">
        <div className="wrap footer-bottom-inner">
          <p className="footer-copy">
            © {currentYear} <strong>Rank's Up</strong> (ranksup.online). All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link to="/about">Privacy Policy</Link>
            <span>•</span>
            <Link to="/about">Terms of Service</Link>
            <span>•</span>
            <Link to="/contact">Support</Link>
            <span>•</span>
            <a href="/sitemap.xml" target="_blank" rel="noreferrer">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
