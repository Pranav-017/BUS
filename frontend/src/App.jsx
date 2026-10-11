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

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Passenger Experience', href: '#passenger-experience' },
  { label: 'Our Ecosystem', href: '#ecosystem' },
  { label: 'Contact Us', href: '#contact' },
]

const stats = [
  { value: '120+', label: 'routes across Maharashtra' },
  { value: '4.8/5', label: 'avg passenger rating' },
  { value: '24/7', label: 'support team' },
  { value: '98%', label: 'on-time focus' },
]

const routes = ['Pune → Nagpur', 'Pune → Mumbai', 'Pune → Nashik', 'Nagpur → Pune']

const featureCards = [
  {
    title: 'Technology-Enabled Bus Operations',
    text: 'Technology-driven solutions that support smoother operations, route visibility and a better passenger journey.',
  },
  {
    title: 'Passenger Welcome Kits',
    text: 'Thoughtfully designed kits that make passengers feel cared for from the moment they begin their trip.',
  },
  {
    title: 'Onboard Food Services',
    text: 'Convenient, pre-bookable food options created to suit the pace of long-distance travel.',
  },
  {
    title: 'Highway Rest Stops',
    text: 'Cleaner, more comfortable stopovers focused on hygiene, rest and convenience during long rides.',
  },
  {
    title: 'Restaurant Partnerships',
    text: 'Connected service points that bring food and hospitality together in a travel-first ecosystem.',
  },
  {
    title: 'Hospitality and Travel Support',
    text: 'Practical, guest-friendly support designed to frame every journey around comfort and trust.',
  },
]

const experienceSteps = [
  {
    number: '01',
    title: 'Plan the route',
    text: 'Choose your city pair, preferred travel date and convenient departure detail.',
  },
  {
    number: '02',
    title: 'Book with ease',
    text: 'Reserve seats quickly, add meals and get a clear confirmation in minutes.',
  },
  {
    number: '03',
    title: 'Travel refreshed',
    text: 'Enjoy a premium journey with comfort, cleanliness and a hassle-free travel experience.',
  },
]

const ecosystemCards = [
  { title: 'Passengers', text: 'Comfort-focused travel planning, trusted journeys and smoother trip experiences.' },
  { title: 'Bus Operators', text: 'Operational support, better coordination and a more efficient travel ecosystem.' },
  { title: 'Restaurants', text: 'Food-service partnerships that match the travel rhythm of intercity passengers.' },
  { title: 'Rest-stop Owners', text: 'Hygienic, service-oriented stops that support long-route comfort and reliability.' },
  { title: 'Hospitality Providers', text: 'Travel-friendly services that elevate the quality of the complete passenger journey.' },
  { title: 'Technology Services', text: 'Digital tools that simplify passenger support, booking and service coordination.' },
]

const contactCards = [
  { title: 'Email', text: 'hello@classiqbus.com' },
  { title: 'Phone', text: '+91 7249835979' },
  { title: 'Office Address', text: 'Radha Krushana Nagari, TQ. Mangrulpir, Dist. Washim. Pin. 444403' },
  { title: 'Enquiry', text: 'Partnerships, route planning and corporate travel support.' },
]

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
        <AboutSection />
        <BusImageSection />
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
