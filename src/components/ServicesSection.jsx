import React from 'react';
import {
  Globe,
  Laptop,
  Layers,
  ShoppingBag,
  Server,
  Cpu,
  Sparkles,
  Wrench
} from 'lucide-react';

export default function ServicesSection() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-header reveal">
          <div className="about-pill-tag">
            <span className="pill-sparkle">✦</span>
            <span>SERVICES &amp; SOLUTIONS</span>
          </div>
          <h2 className="section-title">
            What I Can <span className="accent-gradient">Build For You</span>
          </h2>
          <p className="section-lede">
            From high-converting landing pages to fully automated web applications with AI layers — pick what your business needs today and scale it effortlessly.
          </p>
        </div>

        <div className="grid-3">
          <div className="service-card reveal reveal-delay-1">
            <div className="service-card-top">
              <div className="service-icon-badge">
                <Globe size={22} />
              </div>
            </div>
            <h3 className="service-card-title">Custom Website Development</h3>
            <p className="service-card-desc">
              Modern, responsive, fast-loading, and SEO-friendly business websites tailored for maximum conversion.
            </p>
          </div>

          <div className="service-card reveal reveal-delay-2">
            <div className="service-card-top">
              <div className="service-icon-badge">
                <Laptop size={22} />
              </div>
            </div>
            <h3 className="service-card-title">Web Application Development</h3>
            <p className="service-card-desc">
              Scalable full-stack SaaS apps and web portals built with React, Next.js, Node.js, and TypeScript.
            </p>
          </div>

          <div className="service-card reveal reveal-delay-3">
            <div className="service-card-top">
              <div className="service-icon-badge">
                <Layers size={22} />
              </div>
            </div>
            <h3 className="service-card-title">WordPress Development</h3>
            <p className="service-card-desc">
              Custom-themed WordPress sites and headless CMS setups optimized for speed, security, and easy editing.
            </p>
          </div>

          <div className="service-card reveal reveal-delay-1">
            <div className="service-card-top">
              <div className="service-icon-badge">
                <ShoppingBag size={22} />
              </div>
            </div>
            <h3 className="service-card-title">Shopify Development</h3>
            <p className="service-card-desc">
              High-converting e-commerce stores customized with Liquid themes, custom apps, and smooth checkout flows.
            </p>
          </div>

          <div className="service-card reveal reveal-delay-2">
            <div className="service-card-top">
              <div className="service-icon-badge">
                <Server size={22} />
              </div>
            </div>
            <h3 className="service-card-title">Backend &amp; Database Architecture</h3>
            <p className="service-card-desc">
              Secure server architecture, custom authentication, cloud databases (PostgreSQL/MongoDB), and admin tools.
            </p>
          </div>

          <div className="service-card reveal reveal-delay-3">
            <div className="service-card-top">
              <div className="service-icon-badge">
                <Cpu size={22} />
              </div>
            </div>
            <h3 className="service-card-title">REST &amp; GraphQL API Development</h3>
            <p className="service-card-desc">
              Fast, well-documented, secure APIs and 3rd-party software integrations (Stripe, Twilio, OpenAI).
            </p>
          </div>

          <div className="service-card reveal reveal-delay-1">
            <div className="service-card-top">
              <div className="service-icon-badge">
                <Sparkles size={22} />
              </div>
            </div>
            <h3 className="service-card-title">AI Solutions &amp; Automation</h3>
            <p className="service-card-desc">
              Custom AI agents, automated workflows, intelligent chatbots, and custom LLM integrations for your business.
            </p>
          </div>

          <div className="service-card reveal reveal-delay-2">
            <div className="service-card-top">
              <div className="service-icon-badge">
                <Wrench size={22} />
              </div>
            </div>
            <h3 className="service-card-title">Website Maintenance &amp; Optimization</h3>
            <p className="service-card-desc">
              Continuous performance optimization, security updates, automated backups, and 24/7 technical support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
