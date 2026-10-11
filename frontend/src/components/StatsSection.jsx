import { useEffect, useRef } from 'react'

const StatsSection = ({ stats }) => {
  const statsRef = useRef(null)

  useEffect(() => {
    const elements = statsRef.current?.querySelectorAll('[data-count]')
    if (!elements || elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          const el = entry.target
          const target = Number(el.dataset.count)
          const suffix = el.dataset.suffix || ''
          const decimals = Number(el.dataset.decimals || 0)

          let start = 0
          const duration = 1500
          const startTime = performance.now()

          const animate = (currentTime) => {
            const progress = Math.min((currentTime - startTime) / duration, 1)
            const eased = 1 - (1 - progress) ** 3
            const value = target * eased
            const formatted = decimals > 0 ? value.toFixed(decimals) : Math.round(value)
            el.textContent = `${formatted}${suffix}`

            if (progress < 1) {
              requestAnimationFrame(animate)
            } else {
              el.textContent = `${target}${suffix}`
            }
          }

          requestAnimationFrame(animate)
          observer.unobserve(el)
        })
      },
      { threshold: 0.4 },
    )

    elements.forEach((element) => {
      element.textContent = '0'
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [stats])

  return (
    <section className="screen stats-screen">
      <div className="screen-inner stats-bar" aria-label="Business stats" ref={statsRef}>
        {stats.map((stat) => {
          const hasDecimal = stat.value.includes('.')
          const suffix = stat.value.replace(/[0-9.]/g, '')
          const numericValue = Number(stat.value.replace(/[^0-9.]/g, ''))

          return (
            <div className="stat-box" key={stat.label}>
              <strong
                data-count={numericValue}
                data-suffix={suffix}
                data-decimals={hasDecimal ? '1' : '0'}
              >
                0
              </strong>
              <span>{stat.label}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default StatsSection
