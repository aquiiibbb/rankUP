import {
  Header,
  Hero,
  Brands,
  Stats,
  Services,
  Why,
  Companies,
  Testimonials,
  Work,
  About,
  Contact,
  Footer,
  WhatsAppFloat,
} from './components'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Brands />
        <Stats />
        <Services />
        <Why />
        <Companies />
        <Testimonials />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
