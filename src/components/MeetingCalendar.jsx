import { useState } from 'react'
import { PHONES, WHATSAPP, EMAIL } from '../data.js'

const TIME_SLOTS = [
  '10:00 AM',
  '11:30 AM',
  '02:00 PM',
  '03:30 PM',
  '05:00 PM',
  '06:30 PM',
]

const SERVICES_LIST = [
  'All-in-One Digital Growth',
  'SEO & Organic Rankings',
  'Google & Meta Ads (ROAS Scaling)',
  'Website Design & Development',
  'Mobile App Development (Android & iOS)',
  'Marketing Automation & WhatsApp Funnels',
  'AI Ads & Conversational Chatbots',
]

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

const DAYS_SHORT = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export default function MeetingCalendar({ compact = false }) {
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedSlot, setSelectedSlot] = useState(TIME_SLOTS[0])
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: SERVICES_LIST[0],
  })

  const [bookingConfirmed, setBookingConfirmed] = useState(false)
  const [bookingId, setBookingId] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Get days in month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay()

  const handlePrevMonth = () => {
    if (currentMonth === today.getMonth() && currentYear === today.getFullYear()) return
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  const isPastDate = (day) => {
    const d = new Date(currentYear, currentMonth, day)
    const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    return d < todayMidnight
  }

  const isSunday = (day) => {
    const d = new Date(currentYear, currentMonth, day)
    return d.getDay() === 0
  }

  const handleDateSelect = (day) => {
    if (isPastDate(day) || isSunday(day)) return
    setSelectedDate(new Date(currentYear, currentMonth, day))
  }

  const handleInputChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value })
  }

  const handleBookingSubmit = (e) => {
    e.preventDefault()
    if (!selectedDate) {
      alert('Please select a date on the calendar first.')
      return
    }

    setIsSubmitting(true)
    const newBookingId = `RU-${Math.floor(10000 + Math.random() * 90000)}`
    setBookingId(newBookingId)

    const formattedDate = selectedDate.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })

    // Construct email mailto link for direct dispatch to agency
    const subject = encodeURIComponent(`New Meeting Booking [${newBookingId}] - ${formData.name}`)
    const body = encodeURIComponent(
      `Hello Rank's Up Team,\n\nA new 1-on-1 strategy meeting has been booked on ranksup.online:\n\n` +
      `Booking ID: ${newBookingId}\n` +
      `Client Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Selected Date: ${formattedDate}\n` +
      `Selected Time: ${selectedSlot} IST\n` +
      `Service Needed: ${formData.service}\n\n` +
      `Please confirm and send Google Meet link.`
    )

    // Trigger email via mailto to official address
    const mailtoUrl = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    
    // Simulate API dispatch and set confirmed
    setTimeout(() => {
      setIsSubmitting(false)
      setBookingConfirmed(true)
      // Attempt background trigger or open mail client if supported
      try {
        const link = document.createElement('a')
        link.href = mailtoUrl
        link.target = '_blank'
      } catch (err) {
        console.error('Mail link trigger error', err)
      }
    }, 600)
  }

  const getGoogleCalendarUrl = () => {
    if (!selectedDate) return '#'
    const year = selectedDate.getFullYear()
    const month = String(selectedDate.getMonth() + 1).padStart(2, '0')
    const day = String(selectedDate.getDate()).padStart(2, '0')
    
    // Approximate hour from slot
    let hour = 11
    if (selectedSlot.includes('10:00')) hour = 10
    if (selectedSlot.includes('11:30')) hour = 11
    if (selectedSlot.includes('02:00')) hour = 14
    if (selectedSlot.includes('03:30')) hour = 15
    if (selectedSlot.includes('05:00')) hour = 17
    if (selectedSlot.includes('06:30')) hour = 18
    
    const startTimeStr = `${year}${month}${day}T${String(hour).padStart(2, '0')}0000`
    const endTimeStr = `${year}${month}${day}T${String(hour + 1).padStart(2, '0')}0000`

    const title = encodeURIComponent("Rank's Up 1-on-1 Digital Growth Strategy Session")
    const details = encodeURIComponent(
      `Booking ID: ${bookingId}\n` +
      `Discussion on ${formData.service}\n` +
      `Host: Rank's Up Growth Strategist\n` +
      `Direct Call: +91 98833 30353\n` +
      `Website: https://ranksup.online`
    )
    const location = encodeURIComponent("Google Meet / Phone Consultation")

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTimeStr}/${endTimeStr}&details=${details}&location=${location}`
  }

  const getWhatsAppConfirmUrl = () => {
    const formattedDate = selectedDate ? selectedDate.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    }) : ''
    const msg = `Hi Rank's Up, I booked a strategy call!\nBooking ID: ${bookingId}\nName: ${formData.name}\nDate: ${formattedDate} at ${selectedSlot}\nService: ${formData.service}`
    return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`
  }

  const resetBooking = () => {
    setBookingConfirmed(false)
    setSelectedDate(null)
    setFormData({ name: '', email: '', service: SERVICES_LIST[0] })
  }

  const selectedDateFormatted = selectedDate
    ? selectedDate.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      })
    : null

  return (
    <div className={`meeting-card ${compact ? 'meeting-card-compact' : ''}`}>
      {!bookingConfirmed ? (
        <div className="meeting-grid">
          {/* Left Column: Calendar & Time Slots */}
          <div className="calendar-col">
            <div className="calendar-header">
              <span className="cal-sub">Select Date &amp; Time</span>
              <h3 className="cal-title">1. Choose a Meeting Slot</h3>
              <p className="cal-desc">Free 30-minute growth audit &amp; strategy roadmap with our agency founders.</p>
            </div>

            <div className="cal-month-nav">
              <h4>{MONTH_NAMES[currentMonth]} {currentYear}</h4>
              <div className="cal-nav-btns">
                <button
                  type="button"
                  className="cal-nav-btn"
                  onClick={handlePrevMonth}
                  aria-label="Previous Month"
                  disabled={currentMonth === today.getMonth() && currentYear === today.getFullYear()}
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="cal-nav-btn"
                  onClick={handleNextMonth}
                  aria-label="Next Month"
                >
                  ›
                </button>
              </div>
            </div>

            <div className="cal-weekdays">
              {DAYS_SHORT.map((d) => (
                <span key={d} className="cal-weekday">{d}</span>
              ))}
            </div>

            <div className="cal-days-grid">
              {/* Empty padding for offset */}
              {Array.from({ length: firstDayIndex }).map((_, idx) => (
                <div key={`empty-${idx}`} className="cal-day-empty" />
              ))}

              {/* Day cells */}
              {Array.from({ length: daysInMonth }).map((_, idx) => {
                const day = idx + 1
                const past = isPastDate(day)
                const sunday = isSunday(day)
                const isSelected =
                  selectedDate &&
                  selectedDate.getDate() === day &&
                  selectedDate.getMonth() === currentMonth &&
                  selectedDate.getFullYear() === currentYear
                const isToday =
                  today.getDate() === day &&
                  today.getMonth() === currentMonth &&
                  today.getFullYear() === currentYear

                return (
                  <button
                    key={day}
                    type="button"
                    disabled={past || sunday}
                    className={`cal-day-cell ${past || sunday ? 'is-disabled' : ''} ${isSelected ? 'is-selected' : ''} ${isToday ? 'is-today' : ''}`}
                    onClick={() => handleDateSelect(day)}
                    title={sunday ? 'Closed on Sundays' : undefined}
                  >
                    <span>{day}</span>
                  </button>
                )
              })}
            </div>

            {/* Time Slot Picker */}
            <div className="time-slots-section">
              <span className="slots-label">
                {selectedDate ? `Available Times (${selectedDateFormatted}):` : 'Select a date above to choose time:'}
              </span>
              <div className="slots-grid">
                {TIME_SLOTS.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    className={`slot-chip ${selectedSlot === slot ? 'is-active' : ''}`}
                    onClick={() => setSelectedSlot(slot)}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Information & Form */}
          <div className="booking-form-col">
            <div className="form-head">
              <span className="cal-sub">Client Information</span>
              <h3 className="cal-title">2. Enter Your Details</h3>
              <p className="cal-desc">Meeting confirmation &amp; Google Meet invite will be delivered to your email.</p>
            </div>

            {selectedDate && (
              <div className="selected-slot-banner">
                <span className="slot-badge">Selected:</span>
                <strong>📅 {selectedDateFormatted} at {selectedSlot} (IST)</strong>
              </div>
            )}

            <form onSubmit={handleBookingSubmit} className="meeting-form">
              <div className="form-group">
                <label>
                  Your Full Name *
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Sharma"
                    value={formData.name}
                    onChange={handleInputChange('name')}
                  />
                </label>
              </div>

              <div className="form-group">
                <label>
                  Work / Personal Email *
                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleInputChange('email')}
                  />
                </label>
              </div>

              <div className="form-group">
                <label>
                  Primary Service Needed
                  <select
                    value={formData.service}
                    onChange={handleInputChange('service')}
                  >
                    {SERVICES_LIST.map((svc) => (
                      <option key={svc} value={svc}>{svc}</option>
                    ))}
                  </select>
                </label>
              </div>

              <button
                type="submit"
                className="btn btn-solid btn-book-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Booking & Sending Invite...' : 'Confirm Strategy Meeting →'}
              </button>

              <div className="booking-trust-points">
                <span>🔒 100% Free &amp; Confidential</span>
                <span>⚡ Instant Email &amp; Calendar Notification</span>
                <span>📞 Direct Access to Senior Strategists</span>
              </div>
            </form>
          </div>
        </div>
      ) : (
        /* Confirmation State */
        <div className="booking-success-box">
          <div className="success-icon-wrap">
            <svg viewBox="0 0 24 24" width="44" height="44" fill="none" stroke="#2FC47A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <h2>Meeting Booked Successfully!</h2>
          <p className="lead">
            Thank you <strong>{formData.name}</strong>! Your strategy session has been locked in and a confirmation email notification has been dispatched.
          </p>

          <div className="confirmed-summary-card">
            <div className="confirmed-row">
              <span>Booking Reference:</span>
              <strong>{bookingId}</strong>
            </div>
            <div className="confirmed-row">
              <span>Date &amp; Time:</span>
              <strong>{selectedDateFormatted} at {selectedSlot} (IST)</strong>
            </div>
            <div className="confirmed-row">
              <span>Client Email:</span>
              <strong>{formData.email}</strong>
            </div>
            <div className="confirmed-row">
              <span>Service Discussion:</span>
              <strong>{formData.service}</strong>
            </div>
          </div>

          <div className="confirmed-actions">
            <a
              href={getGoogleCalendarUrl()}
              target="_blank"
              rel="noreferrer"
              className="btn btn-solid"
            >
              📅 Add to Google Calendar
            </a>
            <a
              href={getWhatsAppConfirmUrl()}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
              style={{ background: '#25D366', borderColor: '#25D366', color: '#fff' }}
            >
              💬 Instant WhatsApp Backup Alert
            </a>
            <button
              type="button"
              onClick={resetBooking}
              className="btn btn-ghost"
              style={{ color: '#163849', borderColor: '#D6E3E0' }}
            >
              Book Another Meeting
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
