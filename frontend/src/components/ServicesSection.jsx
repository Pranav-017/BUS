const ServicesSection = ({ featureCards }) => (
  <section id="services" className="screen features-screen">
    <div className="screen-inner">
      <div className="section-heading center">
        <span className="eyebrow gold">Our Services</span>
        <h2>Essentials designed for a better, smoother and more rewarding trip.</h2>
      </div>

      <div className="feature-grid">
        {featureCards.map((feature, index) => (
          <article
            className="feature-card"
            key={feature.title}
            style={{ animationDelay: `${index * 0.12}s` }}
          >
            <div className="feature-icon">0{index + 1}</div>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default ServicesSection
