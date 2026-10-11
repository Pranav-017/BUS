const HeroSection = ({ bookingForm, onChange, onSubmit, bookingMessage, selectedRoute }) => (
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

        <form className="search-panel" onSubmit={onSubmit}>
          <div className="field-group">
            <label htmlFor="from">Source city</label>
            <input id="from" name="from" value={bookingForm.from} onChange={onChange} />
          </div>

          <div className="field-group">
            <label htmlFor="to">Destination city</label>
            <input id="to" name="to" value={bookingForm.to} onChange={onChange} />
          </div>

          <div className="field-group">
            <label htmlFor="date">Journey date</label>
            <input
              id="date"
              type="date"
              name="date"
              value={bookingForm.date}
              onChange={onChange}
            />
          </div>

          <div className="field-group">
            <label htmlFor="seats">Passenger count</label>
            <select id="seats" name="seats" value={bookingForm.seats} onChange={onChange}>
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
)

export default HeroSection
