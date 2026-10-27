const ICONS = {
  'SEO': (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="M20 20l-4.500-4.500" />
    </>
  ),
  'Paid Advertising': (
    <>
      <path d="M3 11v2a1 1 0 0 0 1 1h3l6 4V6L7 10H4a1 1 0 0 0-1 1z" />
      <path d="M17 9a4 4 0 0 1 0 6" />
    </>
  ),
  'Website Design & Development': (
    <>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 9h18M8 21h8" />
    </>
  ),
  'Mobile App Development': (
    <>
      <rect x="5" y="2" width="14" height="20" rx="3" />
      <path d="M12 18h.01" />
      <path d="M9 5h6" />
    </>
  ),
  'Social Media Marketing': (
    <>
      <path d="M4 5h16v11H9l-5 4z" />
    </>
  ),
  'Marketing Automation': (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.500 5.500l2 2M16.500 16.500l2 2M18.500 5.500l-2 2M7.500 16.500l-2 2" />
    </>
  ),
  'AI Ads & Chatbots': (
    <>
      <rect x="5" y="8" width="14" height="10" rx="3" />
      <path d="M12 4v4M9 13h.01M15 13h.01" />
    </>
  ),
}

export default function Icon({ name }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="26"
      height="26"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name] || null}
    </svg>
  )
}
