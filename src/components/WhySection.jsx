import React from 'react';
import {
  Code2,
  Smartphone,
  Zap,
  Search,
  ShieldCheck,
  Headphones,
  CheckCircle2
} from 'lucide-react';

export default function WhySection() {
  return (
    <section className="why" id="why">
      <div className="container">
        <div className="why-header reveal">
          <div className="about-pill-tag">
            <span className="pill-sparkle">✦</span>
            <span>WHY WORK WITH ME</span>
          </div>
          <h2 className="section-title">
            Built for <span className="accent-gradient">Quality, Speed &amp; Results</span>
          </h2>
          <p className="section-lede">
            I combine engineering excellence with business strategy to deliver reliable, high-performance web products that scale seamlessly with your business.
          </p>
        </div>

        <div className="why-grid">
          <div className="why-card reveal reveal-delay-1">
            <div className="why-card-top">
              <div className="why-icon-badge">
                <Code2 size={22} />
              </div>
              <span className="why-number">01</span>
            </div>
            <h3 className="why-card-title">Clean &amp; Maintainable Code</h3>
            <p className="why-card-desc">
              Modular, type-safe TypeScript &amp; React code structure that is easy to expand, update, and maintain long-term.
            </p>
            <div className="why-card-check">
              <CheckCircle2 size={15} />
              <span>100% Quality Assured</span>
            </div>
          </div>

          <div className="why-card reveal reveal-delay-2">
            <div className="why-card-top">
              <div className="why-icon-badge">
                <Smartphone size={22} />
              </div>
              <span className="why-number">02</span>
            </div>
            <h3 className="why-card-title">Mobile-First &amp; Responsive</h3>
            <p className="why-card-desc">
              Pixel-perfect UI design tested across smartphones, tablets, laptops, and ultra-wide desktop monitors.
            </p>
            <div className="why-card-check">
              <CheckCircle2 size={15} />
              <span>Flawless Cross-Device Experience</span>
            </div>
          </div>

          <div className="why-card reveal reveal-delay-3">
            <div className="why-card-top">
              <div className="why-icon-badge">
                <Zap size={22} />
              </div>
              <span className="why-number">03</span>
            </div>
            <h3 className="why-card-title">High Performance &amp; Speed</h3>
            <p className="why-card-desc">
              Lightweight bundles, optimized image assets, lazy loading, and sub-second load times for maximum conversion.
            </p>
            <div className="why-card-check">
              <CheckCircle2 size={15} />
              <span>Sub-Second Load Times</span>
            </div>
          </div>

          <div className="why-card reveal reveal-delay-1">
            <div className="why-card-top">
              <div className="why-icon-badge">
                <Search size={22} />
              </div>
              <span className="why-number">04</span>
            </div>
            <h3 className="why-card-title">SEO &amp; Growth Focused</h3>
            <p className="why-card-desc">
              Semantic HTML5 tags, structured meta data, fast page rendering, and search engine best practices built-in.
            </p>
            <div className="why-card-check">
              <CheckCircle2 size={15} />
              <span>Rank &amp; Convert Better</span>
            </div>
          </div>

          <div className="why-card reveal reveal-delay-2">
            <div className="why-card-top">
              <div className="why-icon-badge">
                <ShieldCheck size={22} />
              </div>
              <span className="why-number">05</span>
            </div>
            <h3 className="why-card-title">Secure &amp; Scalable Architecture</h3>
            <p className="why-card-desc">
              Safe backend APIs, server-side proxies for secret keys, encrypted databases, and robust auth systems.
            </p>
            <div className="why-card-check">
              <CheckCircle2 size={15} />
              <span>Enterprise Security</span>
            </div>
          </div>

          <div className="why-card reveal reveal-delay-3">
            <div className="why-card-top">
              <div className="why-icon-badge">
                <Headphones size={22} />
              </div>
              <span className="why-number">06</span>
            </div>
            <h3 className="why-card-title">Clear Communication &amp; Support</h3>
            <p className="why-card-desc">
              Transparent milestone updates, reliable deadlines, prompt responses, and ongoing post-launch maintenance.
            </p>
            <div className="why-card-check">
              <CheckCircle2 size={15} />
              <span>Dedicated Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
