import React from 'react';
import { ArrowRight } from 'lucide-react';
import { avatarImg } from '../data/constants';

export default function AboutSection() {
  return (
    <section className="about" id="about">
      {/* Animated Background Particle Elements */}
      <div className="about-bg-glow glow-1"></div>
      <div className="about-bg-glow glow-2"></div>

      <div className="container about-wrapper">
        {/* Left Visual Frame with Avatar Image, Laser Border */}
        <div className="about-visual-col reveal">
          <div className="about-ring-accent left-ring">
            <svg viewBox="0 0 200 200" className="spinning-ring">
              <circle cx="100" cy="100" r="85" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 8" opacity="0.4" />
              <circle cx="100" cy="100" r="65" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.6" />
            </svg>
          </div>

          <div className="about-avatar-card">
            {/* Ambient Glow and Glass Shimmer Sheen */}
            <div className="card-ambient-glow"></div>
            <div className="card-shimmer-sheen"></div>

            <img
              src={avatarImg}
              alt="Khalil Ahmad"
              className="about-avatar-img"
            />

            {/* Floating Interactive Badge */}
            <div className="avatar-floating-badge">
              <span className="badge-pulse-dot"></span>
              <span>Full-Stack &amp; AI Specialist</span>
            </div>
          </div>

          <div className="about-ring-accent right-ring">
            <svg viewBox="0 0 200 200" className="spinning-ring-reverse">
              <circle cx="100" cy="100" r="75" fill="none" stroke="var(--accent)" strokeWidth="2" strokeDasharray="8 8" opacity="0.5" />
              <circle cx="100" cy="100" r="55" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 5" opacity="0.3" />
            </svg>
          </div>
        </div>

        {/* Right Content Column */}
        <div className="about-content-col reveal">
          <div className="about-pill-tag">
            <span className="pill-sparkle">✦</span>
            <span>ABOUT ME</span>
          </div>

          <h2 className="about-headline">
            Hi, I'm <span className="accent-gradient">Khalil Ahmad</span>.
          </h2>

          <div className="about-text-content">
            <p>
              I'm a Full-Stack Developer passionate about building digital products that solve real business problems. I specialize in creating <strong className="highlight-text">fast, secure, scalable, and user-friendly</strong> websites, custom web applications, Shopify stores, WordPress websites, backend systems, REST APIs, and AI-powered solutions.
            </p>

            <p>
              Whether you're launching a startup, redesigning your website, or automating business processes with AI, I focus on delivering solutions that create <strong className="highlight-text">measurable results</strong>.
            </p>

            <p className="about-focus-quote">
              Every project starts with your business goal — not just the code — so what gets shipped actually <span className="accent-gradient font-bold">moves the needle</span>.
            </p>
          </div>

          {/* 3 Stat Cards Row */}
          <div className="about-stats-grid">
            <div className="about-stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="about-stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="about-stat-card">
              <div className="stat-number">4+</div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>

          {/* Get in Touch CTA Button */}
          <div className="about-cta-wrapper">
            <a
              href="https://wa.me/923461764101"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary get-in-touch-btn"
            >
              GET IN TOUCH <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
