const Header = ({ navItems, menuOpen, onToggleMenu, onCloseNav }) => (
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
      onClick={onToggleMenu}
    >
      <span />
      <span />
      <span />
    </button>

    <nav className={menuOpen ? 'main-nav nav-open' : 'main-nav'} aria-label="Main navigation">
      {navItems.map((item) => (
        <a key={item.label} href={item.href} onClick={onCloseNav}>
          {item.label}
        </a>
      ))}
    </nav>

    <a href="#contact" className="primary-btn nav-cta" onClick={onCloseNav}>
      Book Now
    </a>
  </header>
)

export default Header
