import React from 'react';
import { PROJECTS_DATA } from '../data/constants';

export default function ProjectsSection() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <span className="eyebrow">featured projects</span>
        <h2 className="section-title">Recent work</h2>
        <p className="section-lede">
          A snapshot of recent web applications, custom e-commerce stores, and AI solutions I have engineered.
        </p>

        <div className="project-grid">
          {PROJECTS_DATA.map((proj) => (
            <div key={proj.id} className="project-card reveal">
              <div className="project-thumb">
                <img src={proj.img} alt={proj.alt} className="project-thumb-img" />
                <span className="project-scroll-hint">Hover to scroll ↓</span>
              </div>
              <div className="project-body">
                <h3>{proj.title}</h3>
                <p>{proj.desc}</p>
                <div className="project-links">
                  <a href={proj.link} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
