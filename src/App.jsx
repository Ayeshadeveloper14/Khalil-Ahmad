import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WhySection from './components/WhySection';
import TechStackSection from './components/TechStackSection';
import ProjectsSection from './components/ProjectsSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppFab from './components/WhatsAppFab';

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [activeSection, setActiveSection] = useState('top');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTechCategory, setActiveTechCategory] = useState('all');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Apply or remove theme class on root body element
  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add('dark-theme');
      document.documentElement.classList.remove('light-theme');
    } else {
      document.documentElement.classList.add('light-theme');
      document.documentElement.classList.remove('dark-theme');
    }
  }, [darkTheme]);

  // ScrollReveal & Active Section ScrollSpy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    // Fallback trigger to ensure all elements in view get revealed immediately
    const checkReveals = () => {
      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 100) {
          el.classList.add('in');
          el.classList.add('active');
        }
      });
    };

    // Run check once on load & after short delay
    checkReveals();
    const timer = setTimeout(checkReveals, 300);

    const handleScroll = () => {
      checkReveals();
      const sections = ['top', 'about', 'services', 'why', 'stack', 'projects', 'faq', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i]);
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? -1 : idx);
  };

  return (
    <>
      <div id="top"></div>

      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        darkTheme={darkTheme}
        setDarkTheme={setDarkTheme}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhySection />
        <TechStackSection
          activeTechCategory={activeTechCategory}
          setActiveTechCategory={setActiveTechCategory}
        />
        <ProjectsSection />
        <FaqSection openFaqIndex={openFaqIndex} toggleFaq={toggleFaq} />
        <ContactSection />
      </main>

      <Footer />
      <WhatsAppFab />
    </>
  );
}
