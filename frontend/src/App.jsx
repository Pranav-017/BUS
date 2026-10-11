import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import StatsSection from './components/StatsSection'
import AboutSection from './components/AboutSection'
import BusImageSection from './components/BusImageSection'
import ServicesSection from './components/ServicesSection'
import PassengerExperienceSection from './components/PassengerExperienceSection'
import EcosystemSection from './components/EcosystemSection'
import ContactSection from './components/ContactSection'
import FooterBar from './components/FooterBar'
import {
  navItems,
  stats,
  routes,
  featureCards,
  experienceSteps,
  ecosystemCards,
  contactCards,
} from './info/siteData'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedRoute] = useState(routes[0])
  const [bookingForm, setBookingForm] = useState({
    from: 'Pune',
    to: 'Nagpur',
    date: '2026-10-20',
    seats: '2',
  })
  const [bookingMessage, setBookingMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setBookingForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setBookingMessage(
      `Your ${bookingForm.seats}-seat trip request from ${bookingForm.from} to ${bookingForm.to} on ${bookingForm.date} is ready for confirmation.`,
    )
  }

  const closeNav = () => setMenuOpen(false)

  return (
    <div className="page-shell">
      <Header
        navItems={navItems}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((current) => !current)}
        onCloseNav={closeNav}
      />

      <main className="site-main">
        <HeroSection
          bookingForm={bookingForm}
          onChange={handleChange}
          onSubmit={handleSubmit}
          bookingMessage={bookingMessage}
          selectedRoute={selectedRoute}
        />
        <StatsSection stats={stats} />
        <BusImageSection />
        <AboutSection />
        <ServicesSection featureCards={featureCards} />
        <PassengerExperienceSection experienceSteps={experienceSteps} />
        <EcosystemSection ecosystemCards={ecosystemCards} />
        <ContactSection contactCards={contactCards} />
      </main>

      <FooterBar currentYear={new Date().getFullYear()} />
    </div>
  )
}

export default App
