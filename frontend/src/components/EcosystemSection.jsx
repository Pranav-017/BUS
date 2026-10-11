const EcosystemSection = ({ ecosystemCards }) => (
  <section id="ecosystem" className="screen ecosystem-screen">
    <div className="screen-inner">
      <div className="section-heading center light-heading">
        <span className="eyebrow gold">Passenger Experience</span>
        <h2>More Than a Journey. A Better Travel Experience.</h2>
      </div>

      <div className="ecosystem-grid">
        {ecosystemCards.map((card, index) => (
          <article
            className="ecosystem-card"
            key={card.title}
            style={{ animationDelay: `${index * 0.12}s` }}
          >
            <span>{card.title}</span>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default EcosystemSection
