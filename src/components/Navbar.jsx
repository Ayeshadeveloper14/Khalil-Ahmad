import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { SECTION_NAV_ITEMS } from '../data/constants';

export default function Navbar({
  activeSection,
  setActiveSection,
  darkTheme,
  setDarkTheme,
  mobileMenuOpen,
  setMobileMenuOpen
}) {
  return (
    <header className="nav">
      <div className="container" style={{ padding: 0 }}>
        <div className="nav-inner">
          <a href="#top" className="logo" onClick={() => setActiveSection('top')}>
            <span className="dot"></span>
            Khalil Ahmad
          </a>

          <nav className="nav-links">
            {SECTION_NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : ''}
                onClick={() => setActiveSection(item.id)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav-cta">
            <button
              type="button"
              className="theme-toggle-btn"
              onClick={() => setDarkTheme(!darkTheme)}
              title="Toggle Theme"
              aria-label="Toggle theme"
            >
              {darkTheme ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a
              href="https://wa.me/923461764101"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Hire Me
            </a>

            <button
              className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        <div className={`mobile-panel ${mobileMenuOpen ? 'open' : ''}`}>
          {SECTION_NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? 'active' : ''}
              onClick={() => {
                setActiveSection(item.id);
                setMobileMenuOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/923461764101"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            WhatsApp: +92 346 1764101
          </a>
        </div>
      </div>
    </header>
  );
}
