const PassengerExperienceSection = ({ experienceSteps }) => (
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
)

export default PassengerExperienceSection
