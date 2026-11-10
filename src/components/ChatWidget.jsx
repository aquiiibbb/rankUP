import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PHONES, WHATSAPP } from '../data.js'
import './chatwidget.css'

const QUICK_OPTIONS = [
  { label: '🔍 Boost SEO & Google Ranking', key: 'seo' },
  { label: '📈 Scale Google & Meta Ads (5.2x ROAS)', key: 'ads' },
  { label: '💻 Custom React Web & Mobile App', key: 'web' },
  { label: '📅 Book a Free 1-on-1 Meeting', key: 'meeting' },
  { label: '💬 Chat Directly on WhatsApp', key: 'whatsapp' },
  { label: '📞 Call Senior Strategist', key: 'call' },
]

// Friendly Growth Strategist Avatar (matching reference design)
function StrategistAvatar({ size = 44, hasGreenDot = true }) {
  return (
    <div className="strategist-avatar-wrap" style={{ width: size, height: size }}>
      <svg viewBox="0 0 64 64" width={size} height={size} className="avatar-svg-pro" aria-hidden="true">
        {/* Warm Sand Background Circle */}
        <circle cx="32" cy="32" r="32" fill="#EED2AF" />

        {/* Rust-Red / Terracotta T-Shirt */}
        <path d="M12 62 C14 47 21 43 32 43 C43 43 50 47 52 62 Z" fill="#D9534F" />

        {/* Neck */}
        <rect x="27.5" y="34" width="9" height="10" fill="#DEAB82" rx="2" />

        {/* Face */}
        <circle cx="32" cy="27" r="12.5" fill="#F0BE97" />

        {/* Dark Brown Styled Hair */}
        <path d="M19.5 24 C19.5 14 24 11 32 11 C40 11 44.5 14 44.5 24 C44.5 17 40 14.5 32 14.5 C24 14.5 19.5 17 19.5 24 Z" fill="#4A2E1B" />

        {/* Eyes */}
        <circle cx="27.5" cy="25" r="1.4" fill="#2C1B10" />
        <circle cx="36.5" cy="25" r="1.4" fill="#2C1B10" />

        {/* Full Groomed Beard and Mustache */}
        <path
          d="M21.5 26.5 C21.5 36 26.5 39.5 32 39.5 C37.5 39.5 42.5 36 42.5 26.5 C42.5 29.5 40 32 38.5 32 C36.5 32 35 29.8 32 29.8 C29 29.8 27.5 32 25.5 32 C24 32 21.5 29.5 21.5 26.5 Z"
          fill="#4A2E1B"
        />

        {/* Friendly Smile inside beard */}
        <path d="M29 32.5 Q32 34.2 35 32.5" fill="none" stroke="#FAF1E6" strokeWidth="1.3" strokeLinecap="round" />
      </svg>

      {hasGreenDot && <span className="avatar-online-dot" />}
    </div>
  )
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const [hasUnread, setHasUnread] = useState(true)
  const messagesEndRef = useRef(null)
  const timerRef = useRef([])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  // Clear timers on unmount
  useEffect(() => {
    return () => {
      timerRef.current.forEach((t) => clearTimeout(t))
    }
  }, [])

  // Automated Sequential Welcome Conversation when chat opens
  useEffect(() => {
    if (isOpen) {
      setHasUnread(false)
      if (!hasStarted) {
        startWelcomeSequence()
      } else {
        scrollToBottom()
      }
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
    }
  }, [messages, isTyping])

  const startWelcomeSequence = () => {
    // Clear any previous timers
    timerRef.current.forEach((t) => clearTimeout(t))
    timerRef.current = []

    setHasStarted(true)
    setMessages([])
    setIsTyping(true)

    // Step 1: Hello 🤝 after 300ms
    const t1 = setTimeout(() => {
      setMessages([
        {
          id: 1,
          sender: 'bot',
          type: 'greeting',
          text: 'Hello',
          emoji: '🤝',
        },
      ])

      // Step 2: Welcome to Rank's Up with Logo after another 450ms
      const t2 = setTimeout(() => {
        setIsTyping(false)
        setMessages((prev) => [
          ...prev,
          {
            id: 2,
            sender: 'bot',
            type: 'welcome',
            text: "Welcome To Rank's Up",
            showLogo: true,
            time: 'Just now',
          },
        ])
      }, 450)
      timerRef.current.push(t2)
    }, 300)

    timerRef.current.push(t1)
  }

  const restartChat = () => {
    startWelcomeSequence()
  }

  const handleSend = (textToSend) => {
    const text = typeof textToSend === 'string' ? textToSend : inputText
    if (!text.trim()) return

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: text.trim(),
      time: 'Just now',
    }

    setMessages((prev) => [...prev, userMsg])
    if (typeof textToSend !== 'string') {
      setInputText('')
    }

    setIsTyping(true)

    // Contextual bot reply
    setTimeout(() => {
      setIsTyping(false)
      const botReply = generateBotResponse(text.trim())
      setMessages((prev) => [...prev, botReply])
    }, 700)
  }

  const handleOptionClick = (opt) => {
    if (opt.key === 'whatsapp') {
      window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hello Rank's Up, I am looking to scale my business.")}`, '_blank')
      return
    }
    if (opt.key === 'call') {
      window.location.href = `tel:+91${PHONES[0].replace(/\s+/g, '')}`
      return
    }
    handleSend(opt.label)
  }

  const generateBotResponse = (query) => {
    const q = query.toLowerCase()

    if (q.includes('seo') || q.includes('ranking') || q.includes('google')) {
      return {
        id: Date.now() + 1,
        sender: 'bot',
        type: 'text',
        text: "Rank's Up specializes in high-intent SEO. We help your business rank #1 on Google with technical audits, on-page optimization, and high-authority backlinks. Our clients see an average of +248% organic traffic growth!",
        actionBtn: { label: '📅 Book Free SEO Audit Call', to: '/book-meeting' },
        time: 'Just now',
      }
    }

    if (q.includes('ad') || q.includes('roas') || q.includes('meta') || q.includes('paid')) {
      return {
        id: Date.now() + 1,
        sender: 'bot',
        type: 'text',
        text: 'We engineer data-driven Google & Meta ad campaigns focused purely on ROI and qualified leads, averaging 5.2x ROAS across client ventures. No vanity clicks — just paying customers.',
        actionBtn: { label: '💬 Discuss Ad Budget on WhatsApp', href: `https://wa.me/${WHATSAPP}` },
        time: 'Just now',
      }
    }

    if (q.includes('web') || q.includes('app') || q.includes('mobile') || q.includes('react') || q.includes('flutter')) {
      return {
        id: Date.now() + 1,
        sender: 'bot',
        type: 'text',
        text: 'We develop ultra-fast React/Next.js websites and cross-platform Android & iOS mobile apps (React Native/Flutter) engineered for high conversion rates and 95+ PageSpeed scores.',
        actionBtn: { label: 'View Our Live Platforms', to: '/work' },
        time: 'Just now',
      }
    }

    if (q.includes('meet') || q.includes('call') || q.includes('consult') || q.includes('book')) {
      return {
        id: Date.now() + 1,
        sender: 'bot',
        type: 'text',
        text: 'You can book a 1-on-1 strategy meeting directly on our live interactive calendar. Our founders will review your goals and deliver a 90-day growth roadmap!',
        actionBtn: { label: '📅 Open Meeting Calendar', to: '/book-meeting' },
        time: 'Just now',
      }
    }

    // Default friendly response
    return {
      id: Date.now() + 1,
      sender: 'bot',
      type: 'text',
      text: `Thank you for your message! Our senior growth strategists are active right now. Would you like to connect directly on WhatsApp or schedule a free strategy session?`,
      actionBtn: { label: '💬 Chat on WhatsApp (+91 91357 70521)', href: `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hi Rank's Up, inquiry: ${query}`)}` },
      time: 'Just now',
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSend()
  }

  return (
    <div className="chat-widget-root">
      {/* Floating Trigger Button (Bottom Right) */}
      <button
        type="button"
        className={`chat-trigger-btn ${isOpen ? 'is-active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close chat' : 'Open live chat with Rank\'s Up'}
        aria-expanded={isOpen}
      >
        <StrategistAvatar size={50} hasGreenDot={true} />

        {/* Unread badge notification when closed */}
        {!isOpen && hasUnread && (
          <span className="trigger-unread-chip">1</span>
        )}
      </button>

      {/* Floating Chat Box Window */}
      {isOpen && (
        <div className="chat-window-box" role="dialog" aria-label="Rank's Up Interactive Assistant">
          {/* Header Bar (Minimalist & Clean, matching reference) */}
          <div className="chat-window-header">
            <div className="chat-header-tools">
              <button
                type="button"
                className="tool-btn"
                onClick={restartChat}
                title="Restart Conversation"
                aria-label="Restart Conversation"
              >
                <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l6.67-5.19" />
                </svg>
              </button>
              <button
                type="button"
                className="tool-btn close-btn"
                onClick={() => setIsOpen(false)}
                title="Close Chat"
                aria-label="Close Chat"
              >
                <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div className="chat-messages-container">
            {messages.map((m) => {
              if (m.sender === 'user') {
                return (
                  <div key={m.id} className="chat-msg user-msg">
                    <div className="msg-bubble user-bubble">{m.text}</div>
                    <span className="msg-timestamp">{m.time}</span>
                  </div>
                )
              }

              // Bot messages
              return (
                <div key={m.id} className="chat-msg bot-msg">
                  <div className="msg-row">
                    <div className="bot-tiny-avatar">
                      <StrategistAvatar size={24} hasGreenDot={false} />
                    </div>

                    <div className="bot-bubbles-wrap">
                      {/* Greeting with Handshake */}
                      {m.type === 'greeting' && (
                        <div className="msg-bubble bot-card-bubble">
                          <span className="bubble-text">{m.text}</span>
                          <div className="handshake-icon" aria-hidden="true">
                            {m.emoji}
                          </div>
                        </div>
                      )}

                      {/* Welcome message with Brand Logo */}
                      {m.type === 'welcome' && (
                        <div className="msg-bubble bot-card-bubble">
                          <span className="bubble-text">{m.text}</span>
                          <div className="chat-brand-logo-box">
                            <img src="/logo.png" alt="Rank's Up" className="chat-logo-img" />
                          </div>
                        </div>
                      )}

                      {/* Options prompt */}
                      {m.type === 'options' && (
                        <div className="msg-bubble bot-text-bubble">
                          <p className="bubble-p">{m.text}</p>
                          <div className="quick-options-grid">
                            {QUICK_OPTIONS.map((opt) => (
                              <button
                                key={opt.key}
                                type="button"
                                className="quick-chip-btn"
                                onClick={() => handleOptionClick(opt)}
                              >
                                {opt.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Standard text message */}
                      {m.type === 'text' && (
                        <div className="msg-bubble bot-text-bubble">
                          <p className="bubble-p">{m.text}</p>
                          {m.actionBtn && (
                            <div className="msg-action-wrap">
                              {m.actionBtn.to ? (
                                <Link
                                  to={m.actionBtn.to}
                                  className="msg-action-btn"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {m.actionBtn.label} →
                                </Link>
                              ) : (
                                <a
                                  href={m.actionBtn.href}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="msg-action-btn"
                                >
                                  {m.actionBtn.label} ↗
                                </a>
                              )}
                            </div>
                          )}
                        </div>
                      )}

                      <span className="msg-timestamp">{m.time}</span>
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Typing indicator */}
            {isTyping && (
              <div className="chat-msg bot-msg">
                <div className="msg-row">
                  <div className="bot-tiny-avatar">
                    <StrategistAvatar size={24} hasGreenDot={false} />
                  </div>
                  <div className="typing-bubble">
                    <span className="dot-bounce" />
                    <span className="dot-bounce" />
                    <span className="dot-bounce" />
                  </div>
                </div>
              </div>
            )}

            {/* Contextual Suggestion Pills for 1-click answers */}
            {messages.length === 2 && !isTyping && (
              <div className="chat-quick-hints">
                <button type="button" className="quick-hint-pill" onClick={() => handleSend('Tell me about SEO ranking')}>
                  🔍 Boost SEO
                </button>
                <button type="button" className="quick-hint-pill" onClick={() => handleSend('Scale Google & Meta Ads')}>
                  📈 Paid Ads (ROAS)
                </button>
                <button type="button" className="quick-hint-pill" onClick={() => handleSend('Custom React Web & App')}>
                  💻 Web &amp; App
                </button>
                <button type="button" className="quick-hint-pill" onClick={() => handleOptionClick({ key: 'meeting', label: 'Book a Strategy Call' })}>
                  📅 Book Meeting
                </button>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Box Footer */}
          <form className="chat-input-bar" onSubmit={handleSubmit}>
            <input
              type="text"
              className="chat-text-input"
              placeholder="Type an answer..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button
              type="submit"
              className={`chat-send-btn ${inputText.trim() ? 'has-text' : ''}`}
              disabled={!inputText.trim()}
              aria-label="Send message"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
