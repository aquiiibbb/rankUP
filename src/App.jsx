import { Routes, Route, Navigate } from 'react-router-dom'
import { Header, Footer, ChatWidget } from './components'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import CompaniesPage from './pages/CompaniesPage.jsx'
import WorkPage from './pages/WorkPage.jsx'
import BookMeetingPage from './pages/BookMeetingPage.jsx'
import ContactPage from './pages/ContactPage.jsx'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/book-meeting" element={<BookMeetingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <ChatWidget />
    </>
  )
}
