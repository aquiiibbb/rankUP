# Rank's Up – Ranksup.online (React + Vite)

## Chalane ke steps
```
npm install
npm run dev        # local par dekhne ke liye
npm run build      # production build -> dist/ folder
```

## Content badalna
Sab text `src/data.js` mein hai: phone numbers, services, companies, aur
"Domains aur projects jin par kaam kiya" list (`work`). Naye domain add karne ke liye
`work` array mein ek line add karo.

## Project Structure (`src/components/`)
Saare sections alag-alag dedicated component files mein divide hain:
- `Header.jsx`: Navbar & mobile menu
- `Hero.jsx`: Main headline, background image & search preview
- `Brands.jsx`: Royer Group client strip
- `Services.jsx`: 6 services grid with SVG icons
- `Why.jsx`: Rank's Up differentiators
- `Companies.jsx`: Royer Group portfolio
- `Work.jsx`: Projects table & 4-step workflow
- `About.jsx`: Mission & Vision
- `Contact.jsx`: WhatsApp direct lead generation form
- `Footer.jsx`: Copyright & footer
- `WhatsAppFloat.jsx`: Floating WhatsApp button
- `Icons.jsx`: SVG icons library

## Logo
`public/logo.png` ko replace kar do (same naam rakho).

## Deploy (Ranksup.online)
`dist/` folder ko hosting par upload karo (Netlify, Vercel, Hostinger, cPanel `public_html`).
Single page site hai, isliye extra routing setup ki zaroorat nahi.
