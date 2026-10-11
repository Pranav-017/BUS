const FooterBar = ({ currentYear }) => (
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

    <p>© {currentYear} ClassiqBus. Designed for premium, safe and comfortable travel.</p>
  </footer>
)

export default FooterBar
