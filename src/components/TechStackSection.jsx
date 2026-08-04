import React from 'react';
import {
  Atom,
  Cpu,
  FileCode,
  Palette,
  Code,
  Layers,
  Sparkles,
  Server,
  Terminal as TerminalIcon,
  Database,
  Boxes,
  Globe,
  ShoppingBag,
  GitBranch,
  Bot,
  Workflow
} from 'lucide-react';

export default function TechStackSection({ activeTechCategory, setActiveTechCategory }) {
  return (
    <section className="tech" id="stack">
      <div className="container">
        <div className="tech-header reveal">
          <div className="about-pill-tag">
            <span className="pill-sparkle">✦</span>
            <span>TECH STACK &amp; ECOSYSTEM</span>
          </div>
          <h2 className="section-title">
            Technologies I <span className="accent-gradient">Master &amp; Build With</span>
          </h2>
          <p className="section-lede">
            A battle-tested ecosystem of modern languages, frameworks, databases, and AI tooling engineered for speed, scalability, and exceptional user experiences.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="tech-filter-bar reveal">
          <button
            className={`tech-filter-btn ${activeTechCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTechCategory('all')}
          >
            <span>All Stack</span>
            <span className="filter-count">16</span>
          </button>
          <button
            className={`tech-filter-btn ${activeTechCategory === 'frontend' ? 'active' : ''}`}
            onClick={() => setActiveTechCategory('frontend')}
          >
            <span>Frontend Architecture</span>
            <span className="filter-count">5</span>
          </button>
          <button
            className={`tech-filter-btn ${activeTechCategory === 'backend' ? 'active' : ''}`}
            onClick={() => setActiveTechCategory('backend')}
          >
            <span>Backend &amp; Databases</span>
            <span className="filter-count">5</span>
          </button>
          <button
            className={`tech-filter-btn ${activeTechCategory === 'cms' ? 'active' : ''}`}
            onClick={() => setActiveTechCategory('cms')}
          >
            <span>CMS &amp; E-Commerce</span>
            <span className="filter-count">3</span>
          </button>
          <button
            className={`tech-filter-btn ${activeTechCategory === 'ai' ? 'active' : ''}`}
            onClick={() => setActiveTechCategory('ai')}
          >
            <span>AI &amp; Automation</span>
            <span className="filter-count">3</span>
          </button>
        </div>

        {/* Tech Stack Cards Grid */}
        <div className="tech-cards-grid reveal">
          {(activeTechCategory === 'all' || activeTechCategory === 'frontend') && (
            <>
              <div className="tech-card">
                <div className="tech-card-icon">
                  <Atom size={26} />
                </div>
                <div className="tech-card-title">React.js</div>
                <div className="tech-card-cat">FRONTEND</div>
              </div>

              <div className="tech-card">
                <div className="tech-card-icon">
                  <Cpu size={26} />
                </div>
                <div className="tech-card-title">JavaScript</div>
                <div className="tech-card-cat">FRONTEND</div>
              </div>

              <div className="tech-card">
                <div className="tech-card-icon">
                  <FileCode size={26} />
                </div>
                <div className="tech-card-title">TypeScript</div>
                <div className="tech-card-cat">FRONTEND</div>
              </div>

              <div className="tech-card">
                <div className="tech-card-icon">
                  <Palette size={26} />
                </div>
                <div className="tech-card-title">Tailwind CSS</div>
                <div className="tech-card-cat">FRONTEND</div>
              </div>

              <div className="tech-card">
                <div className="tech-card-icon">
                  <Code size={26} />
                </div>
                <div className="tech-card-title">HTML5</div>
                <div className="tech-card-cat">FRONTEND</div>
              </div>

              <div className="tech-card">
                <div className="tech-card-icon">
                  <Layers size={26} />
                </div>
                <div className="tech-card-title">CSS3</div>
                <div className="tech-card-cat">FRONTEND</div>
              </div>

              <div className="tech-card">
                <div className="tech-card-icon">
                  <Sparkles size={26} />
                </div>
                <div className="tech-card-title">Next.js 14</div>
                <div className="tech-card-cat">FRONTEND</div>
              </div>
            </>
          )}

          {(activeTechCategory === 'all' || activeTechCategory === 'backend') && (
            <>
              <div className="tech-card">
                <div className="tech-card-icon">
                  <Server size={26} />
                </div>
                <div className="tech-card-title">Node.js</div>
                <div className="tech-card-cat">BACKEND</div>
              </div>

              <div className="tech-card">
                <div className="tech-card-icon">
                  <TerminalIcon size={26} />
                </div>
                <div className="tech-card-title">PHP</div>
                <div className="tech-card-cat">BACKEND</div>
              </div>

              <div className="tech-card">
                <div className="tech-card-icon">
                  <Database size={26} />
                </div>
                <div className="tech-card-title">MySQL</div>
                <div className="tech-card-cat">DATABASE</div>
              </div>

              <div className="tech-card">
                <div className="tech-card-icon">
                  <Boxes size={26} />
                </div>
                <div className="tech-card-title">MongoDB</div>
                <div className="tech-card-cat">DATABASE</div>
              </div>
            </>
          )}

          {(activeTechCategory === 'all' || activeTechCategory === 'cms') && (
            <>
              <div className="tech-card">
                <div className="tech-card-icon">
                  <Globe size={26} />
                </div>
                <div className="tech-card-title">WordPress</div>
                <div className="tech-card-cat">CMS</div>
              </div>

              <div className="tech-card">
                <div className="tech-card-icon">
                  <ShoppingBag size={26} />
                </div>
                <div className="tech-card-title">Shopify</div>
                <div className="tech-card-cat">E-COMMERCE</div>
              </div>
            </>
          )}

          {(activeTechCategory === 'all' || activeTechCategory === 'ai') && (
            <>
              <div className="tech-card">
                <div className="tech-card-icon">
                  <GitBranch size={26} />
                </div>
                <div className="tech-card-title">Git &amp; GitHub</div>
                <div className="tech-card-cat">TOOLS</div>
              </div>

              <div className="tech-card">
                <div className="tech-card-icon">
                  <Bot size={26} />
                </div>
                <div className="tech-card-title">OpenAI &amp; AI</div>
                <div className="tech-card-cat">AI</div>
              </div>

              <div className="tech-card">
                <div className="tech-card-icon">
                  <Workflow size={26} />
                </div>
                <div className="tech-card-title">AI Workflows</div>
                <div className="tech-card-cat">AUTOMATION</div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Continuous Infinite Moving Marquee Ticker */}
      <div className="tech-marquee-wrapper">
        <div className="tech-marquee-track">
          <span>REACT.JS</span>
          <span className="dot">✦</span>
          <span>NEXT.JS 14</span>
          <span className="dot">✦</span>
          <span>TYPESCRIPT</span>
          <span className="dot">✦</span>
          <span>TAILWIND CSS</span>
          <span className="dot">✦</span>
          <span>NODE.JS</span>
          <span className="dot">✦</span>
          <span>EXPRESS</span>
          <span className="dot">✦</span>
          <span>PYTHON</span>
          <span className="dot">✦</span>
          <span>POSTGRESQL</span>
          <span className="dot">✦</span>
          <span>MONGODB</span>
          <span className="dot">✦</span>
          <span>WORDPRESS</span>
          <span className="dot">✦</span>
          <span>SHOPIFY</span>
          <span className="dot">✦</span>
          <span>OPENAI AI AGENTS</span>
          <span className="dot">✦</span>
        </div>
        <div className="tech-marquee-track" aria-hidden="true">
          <span>REACT.JS</span>
          <span className="dot">✦</span>
          <span>NEXT.JS 14</span>
          <span className="dot">✦</span>
          <span>TYPESCRIPT</span>
          <span className="dot">✦</span>
          <span>TAILWIND CSS</span>
          <span className="dot">✦</span>
          <span>NODE.JS</span>
          <span className="dot">✦</span>
          <span>EXPRESS</span>
          <span className="dot">✦</span>
          <span>PYTHON</span>
          <span className="dot">✦</span>
          <span>POSTGRESQL</span>
          <span className="dot">✦</span>
          <span>MONGODB</span>
          <span className="dot">✦</span>
          <span>WORDPRESS</span>
          <span className="dot">✦</span>
          <span>SHOPIFY</span>
          <span className="dot">✦</span>
          <span>OPENAI AI AGENTS</span>
          <span className="dot">✦</span>
        </div>
      </div>
    </section>
  );
}
