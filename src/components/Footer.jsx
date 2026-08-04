import React from 'react';
import {
  MessageSquare,
  PhoneCall,
  Mail,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-black">
      <div className="footer-glow-backdrop"></div>
      <div className="container">
        <div className="footer-top-row">
          <div className="footer-brand-block">
            <a href="#top" className="footer-logo">
              <span className="logo-pulse-dot"></span>
              <span className="logo-text">Khalil Ahmad</span>
            </a>
            <p className="footer-tagline">
              Full-Stack Developer &amp; AI Solutions Specialist. Crafting high-performance web applications, custom e-commerce stores, and automated AI systems for businesses worldwide.
            </p>
            <div className="footer-status-pill">
              <span className="status-dot"></span>
              <span>Available for New Projects &amp; Remote Contracts</span>
            </div>
          </div>

          <div className="footer-nav-columns">
            <div className="footer-col">
              <h4 className="footer-col-title">Navigation</h4>
              <ul>
                <li><a href="#about">About Me</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#why">Why Work With Me</a></li>
                <li><a href="#stack">Tech Stack</a></li>
                <li><a href="#projects">Featured Work</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Core Services</h4>
              <ul>
                <li><a href="#services">Full-Stack Web Apps</a></li>
                <li><a href="#services">React &amp; Next.js Engineering</a></li>
                <li><a href="#services">WordPress &amp; Shopify Stores</a></li>
                <li><a href="#services">Backend REST APIs &amp; DBs</a></li>
                <li><a href="#services">AI Agents &amp; Automations</a></li>
                <li><a href="#services">Speed &amp; SEO Optimization</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Direct Contact</h4>
              <ul>
                <li>
                  <a href="https://wa.me/923461764101" target="_blank" rel="noopener noreferrer">
                    <MessageSquare size={14} className="icon-inline" /> WhatsApp: +92 346 1764101
                  </a>
                </li>
                <li>
                  <a href="tel:+923461764101">
                    <PhoneCall size={14} className="icon-inline" /> Call: +92 346 1764101
                  </a>
                </li>
                <li>
                  <a href="mailto:khalilahamd.developer@gmail.com">
                    <Mail size={14} className="icon-inline" /> Email Me
                  </a>
                </li>
                <li>
                  <a href="#contact">
                    <Sparkles size={14} className="icon-inline" /> Book Consultation
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom-row">
          <div className="footer-copy">
            © {currentYear} <span className="highlight-white">Khalil Ahmad</span>. All rights reserved. Precision Built with React &amp; JavaScript.
          </div>

          <div className="footer-bottom-links">
            <a href="#top" className="back-to-top-btn">
              <span>Back to Top</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
