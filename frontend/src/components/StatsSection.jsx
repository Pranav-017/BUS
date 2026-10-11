const StatsSection = ({ stats }) => (
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
)

export default StatsSection
