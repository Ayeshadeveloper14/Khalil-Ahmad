import React from 'react';
import { MessageSquare, Download } from 'lucide-react';
import { avatarImg } from '../data/constants';

export default function HeroSection() {
  return (
    <section className="hero container">
      <div className="hero-copy">
        {/* Intro Greeting Pill */}
        <div
          className="hero-greeting-pill"
          style={{
            marginBottom: '12px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: '9999px',
            background: 'var(--accent-light)',
            border: '1px solid rgba(255, 122, 0, 0.2)',
            fontSize: '0.85rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: 600,
            color: 'var(--accent)',
            maxWidth: '100%',
            flexWrap: 'wrap'
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              background: 'var(--accent)',
              borderRadius: '50%',
              display: 'inline-block',
              boxShadow: '0 0 8px var(--accent)',
              flexShrink: 0
            }}
          ></span>
          Hi, I'm <span className="accent-gradient" style={{ fontWeight: 800 }}>Khalil Ahmad</span> — Full-Stack &amp; AI Engineer
        </div>

        {/* Colorful Social Media Badges */}
        <div className="social-pills-row">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-pill-btn social-instagram"
            title="Instagram"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-pill-btn social-tiktok"
            title="TikTok"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-2.901 2.82 2.896 2.896 0 0 1-2.89-2.82 2.896 2.896 0 0 1 2.89-2.82c.28 0 .546.043.797.118V9.45a6.34 6.34 0 0 0-.797-.052 6.34 6.34 0 0 0-6.333 6.333 6.333 6.333 0 0 0 6.333 6.333 6.333 6.333 0 0 0 6.333-6.333V9.32a8.214 8.214 0 0 0 4.887 1.587V7.472a4.83 4.83 0 0 1-1.104-.786z"/>
            </svg>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-pill-btn social-github"
            title="GitHub"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-pill-btn social-youtube"
            title="YouTube"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
          <a
            href="https://wa.me/923461764101"
            target="_blank"
            rel="noopener noreferrer"
            className="social-pill-btn social-whatsapp"
            title="WhatsApp"
          >
            <MessageSquare size={20} />
          </a>
        </div>

        <h1 className="hero-main-title">
          I Build Websites, Web Apps &amp; AI Solutions
        </h1>

        <p className="hero-sub">
          I help startups, entrepreneurs, and businesses establish a powerful online presence through modern websites, scalable web applications, eCommerce solutions, and AI-powered automation — built for performance, experience, and growth.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            <Download size={18} /> View Projects
          </a>
          <a
            href="https://wa.me/923461764101"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            <MessageSquare size={18} /> Contact Me
          </a>
        </div>
      </div>

      {/* Right Column: Avatar Card */}
      <div className="hero-visual-wrapper">
        <div className="hero-avatar-card">
          <div className="card-ambient-glow"></div>
          <div className="card-shimmer-sheen"></div>

          <img
            src={avatarImg}
            alt="Khalil Ahmad Avatar"
            className="hero-avatar-img"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
}
