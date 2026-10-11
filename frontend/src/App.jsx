import { useState } from 'react'
import './App.css'

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
  const [selectedRoute, setSelectedRoute] = useState(routes[0])
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
      <header className="topbar">
        <div className="brand-wrap">
          <img src="/photos/logo.png" alt="ClassiqBus logo" className="brand-logo" />
          <div className="brand-text">
            <span className="brand-name">ClassiqBus</span>
            <small>Comfort on every mile</small>
          </div>
        </div>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={menuOpen ? 'main-nav nav-open' : 'main-nav'} aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={closeNav}>
              {item.label}
            </a>
          ))}
        </nav>

        <button type="button" className="primary-btn nav-cta">
          Book Now
        </button>
      </header>

      <main className="site-main">
        <section id="home" className="screen hero-screen">
          <div className="screen-inner hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Premium intercity travel</span>
              <h1>Redefining the Way India Travels.</h1>
              <p>
                Smarter journeys. Better experiences. A more connected world of intercity bus travel.
              </p>

              <div className="hero-actions">
                <button type="button" className="primary-btn">
                  Search Buses
                </button>
                <button type="button" className="secondary-btn">
                  View Routes
                </button>
              </div>

              <form className="search-panel" onSubmit={handleSubmit}>
                <div className="field-group">
                  <label htmlFor="from">Source city</label>
                  <input id="from" name="from" value={bookingForm.from} onChange={handleChange} />
                </div>

                <div className="field-group">
                  <label htmlFor="to">Destination city</label>
                  <input id="to" name="to" value={bookingForm.to} onChange={handleChange} />
                </div>

                <div className="field-group">
                  <label htmlFor="date">Journey date</label>
                  <input
                    id="date"
                    type="date"
                    name="date"
                    value={bookingForm.date}
                    onChange={handleChange}
                  />
                </div>

                <div className="field-group">
                  <label htmlFor="seats">Passenger count</label>
                  <select id="seats" name="seats" value={bookingForm.seats} onChange={handleChange}>
                    <option value="1">1 Passenger</option>
                    <option value="2">2 Passengers</option>
                    <option value="3">3 Passengers</option>
                    <option value="4">4 Passengers</option>
                  </select>
                </div>

                <button type="submit" className="primary-btn search-btn">
                  Search Buses
                </button>
              </form>

              {bookingMessage && <p className="booking-message">{bookingMessage}</p>}
            </div>

            <div className="hero-visual">
              <div className="featured-bus-card">
                <span className="route-chip">Popular route</span>
                <h2>{selectedRoute}</h2>
                <div className="route-meta">
                  <span>Luxury coach</span>
                  <span>AC Sleeper</span>
                </div>
                <div className="price-row">
                  <strong>From ₹899</strong>
                  <small>2 hrs 45 min</small>
                </div>
              </div>
              <div className="mini-card">
                <span>On-board comfort</span>
                <strong>Wi-Fi • Charging • Meal Ready</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="screen stats-screen">
          <div className="screen-inner stats-bar" aria-label="Business stats">
            {stats.map((stat) => (
              <div className="stat-box" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="screen about-screen">
          <div className="screen-inner about-shell">
            <div className="section-heading">
              <span className="eyebrow gold">About us</span>
              <h2>We are building a smarter ecosystem for intercity bus travel.</h2>
            </div>

            <div className="about-grid">
              <article className="story-card">
                <p>
                  ClassiqBus is building a smarter ecosystem for intercity bus travel. We bring together
                  technology, passenger hospitality, food services and highway facilities to make every
                  journey more comfortable, convenient and reliable.
                </p>
                <p>
                  Our services are designed around the real needs of passengers and the businesses that
                  serve them. From welcome kits and onboard meal solutions to hygienic highway rest
                  stops and technology-enabled bus operations, we aim to improve the travel experience at
                  every stage of the journey.
                </p>
                <p>
                  We work towards connecting bus operators, restaurants, rest-stop owners, hospitality
                  providers and passengers through a unified service ecosystem.
                </p>
              </article>

              <article className="story-card highlight-card">
                <h3>What we are building</h3>
                <ul>
                  <li>Modern intercity travel for families and professionals</li>
                  <li>Food and welcome services that improve the journey</li>
                  <li>Trusted rest-stop partners and safer highway experiences</li>
                  <li>Technology-led operations for better service quality</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="services" className="screen image-screen">
          <div className="screen-inner image-frame">
            <img src="/photos/busImage.png" alt="Luxury bus travel" />
            <div className="image-overlay">
              <span className="eyebrow">Travel experience</span>
              <h2>Modern journeys built around comfort, safety and convenience.</h2>
            </div>
          </div>
        </section>

        <section id="services" className="screen features-screen">
          <div className="screen-inner">
            <div className="section-heading center">
              <span className="eyebrow gold">Our Services</span>
              <h2>Essentials designed for a better, smoother and more rewarding trip.</h2>
            </div>

            <div className="feature-grid">
              {featureCards.map((feature, index) => (
                <article className="feature-card" key={feature.title} style={{ animationDelay: `${index * 0.12}s` }}>
                  <div className="feature-icon">0{index + 1}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="passenger-experience" className="screen experience-screen">
          <div className="screen-inner exp-layout">
            <div className="exp-copy">
              <span className="eyebrow gold">Passenger Experience</span>
              <h2>A simpler path from booking to arrival.</h2>
              <p>
                At ClassiqBus, we believe that a better journey is not just about reaching a destination.
                It is about the quality of the experience along the way.
              </p>
            </div>

            <div className="exp-cards">
              {experienceSteps.map((step) => (
                <div className="exp-card" key={step.number}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="ecosystem" className="screen ecosystem-screen">
          <div className="screen-inner">
            <div className="section-heading center light-heading">
              <span className="eyebrow gold">Passenger Experience</span>
              <h2>More Than a Journey. A Better Travel Experience.</h2>
            </div>

            <div className="ecosystem-grid">
              {ecosystemCards.map((card, index) => (
                <article className="ecosystem-card" key={card.title} style={{ animationDelay: `${index * 0.12}s` }}>
                  <span>{card.title}</span>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="screen contact-screen">
          <div className="screen-inner contact-panel">
            <div className="contact-copy">
              <span className="eyebrow gold">Contact & enquiry</span>
              <h2>Let’s plan your next comfortable journey.</h2>
              <p>
                For ticket assistance, route bookings, corporate travel and partnership enquiries, our team
                is ready to help with a quick and friendly response.
              </p>
            </div>

            <div className="contact-list">
              {contactCards.map((card) => (
                <div className="contact-item" key={card.title}>
                  <strong>{card.title}</strong>
                  <span>{card.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="footer" className="site-footer">
        <div className="footer-inner">
          <div className="brand-wrap footer-brand">
            <img src="/photos/logo.png" alt="ClassiqBus logo" className="brand-logo" />
            <div className="brand-text">
              <span className="brand-name">ClassiqBus</span>
              <small>Comfort on every mile</small>
            </div>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Our Services</a>
            <a href="#passenger-experience">Passenger Experience</a>
            <a href="#ecosystem">Our Ecosystem</a>
            <a href="#contact">Contact Us</a>
          </div>
        </div>

        <p>© {new Date().getFullYear()} ClassiqBus. Designed for premium, safe and comfortable travel.</p>
      </footer>
    </div>
  )
}

export default App
