const AboutSection = () => (
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
            serve them. From welcome kits and onboard meal solutions to hygienic highway rest stops
            and technology-enabled bus operations, we aim to improve the travel experience at every
            stage of the journey.
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
)

export default AboutSection
