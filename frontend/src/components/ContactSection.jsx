const ContactSection = ({ contactCards }) => (
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
)

export default ContactSection
