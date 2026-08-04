import React from 'react';
import {
  MessageSquare,
  Send,
  PhoneCall,
  Mail,
  Github,
  Linkedin,
  Facebook,
  Instagram
} from 'lucide-react';

export default function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.elements.namedItem('firstName').value;
    const lastName = form.elements.namedItem('lastName').value;
    const email = form.elements.namedItem('email').value;
    const phonePrefix = form.elements.namedItem('phonePrefix').value;
    const phone = form.elements.namedItem('phone').value;
    const msg = form.elements.namedItem('message').value;
    const text = `Hi Khalil, I am ${firstName} ${lastName}.\nEmail: ${email}\nContact: ${phonePrefix} ${phone}\nMessage: ${msg}`;
    window.open(`https://wa.me/923461764101?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="cta" id="contact">
      <div className="container">
        <div className="contact-split-container reveal">
          {/* Left Column: Modern Message Form Card */}
          <div className="contact-form-card">
            <h2 className="contact-card-main-title">Send us a message</h2>
            <p className="contact-card-sub">
              Do you have a question? A project idea? Or need any help to choose the right digital solution? Feel free to contact me.
            </p>

            <form className="contact-modern-form" onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="form-group">
                  <label htmlFor="form-first-name">First Name</label>
                  <input id="form-first-name" name="firstName" type="text" placeholder="Enter your first name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="form-last-name">Last Name</label>
                  <input id="form-last-name" name="lastName" type="text" placeholder="Enter your last name" required />
                </div>
              </div>

              <div className="contact-form-row">
                <div className="form-group">
                  <label htmlFor="form-email">Email</label>
                  <input id="form-email" name="email" type="email" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="form-phone">Contact Details</label>
                  <div className="phone-input-group">
                    <select name="phonePrefix" defaultValue="PK +92" className="phone-prefix-select" aria-label="Country Code">
                      <option value="PK +92">PK +92</option>
                      <option value="US +1">US +1</option>
                      <option value="UK +44">UK +44</option>
                      <option value="UAE +971">UAE +971</option>
                      <option value="KSA +966">KSA +966</option>
                      <option value="IN +91">IN +91</option>
                      <option value="CA +1">CA +1</option>
                      <option value="AU +61">AU +61</option>
                    </select>
                    <input id="form-phone" name="phone" type="tel" placeholder="Enter your contact number" required />
                  </div>
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="form-message">Message</label>
                <textarea id="form-message" name="message" rows={4} placeholder="Enter your message" required></textarea>
              </div>

              <div className="contact-form-footer">
                <button type="submit" className="btn btn-green-whatsapp">
                  <MessageSquare size={18} />
                  <span>Direct WhatsApp Chat</span>
                </button>
                <button
                  type="button"
                  className="btn btn-dark-send"
                  onClick={(e) => {
                    const form = e.currentTarget.closest('form');
                    if (form && form.reportValidity()) {
                      const firstName = form.elements.namedItem('firstName').value;
                      const lastName = form.elements.namedItem('lastName').value;
                      const email = form.elements.namedItem('email').value;
                      const phonePrefix = form.elements.namedItem('phonePrefix').value;
                      const phone = form.elements.namedItem('phone').value;
                      const msg = form.elements.namedItem('message').value;
                      const text = `Hi Khalil, I am ${firstName} ${lastName}.\nEmail: ${email}\nContact: ${phonePrefix} ${phone}\nMessage: ${msg}`;
                      window.open(`https://wa.me/923461764101?text=${encodeURIComponent(text)}`, '_blank');
                    }
                  }}
                >
                  <Send size={18} />
                  <span>Send Message &amp; Open WhatsApp</span>
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Dark Help Card */}
          <div className="contact-info-dark-card">
            <h3 className="help-title">Hi! I am always here to help you.</h3>
            <div className="orange-accent-bar"></div>

            <div className="contact-info-boxes">
              <a href="tel:+923461764101" className="info-box-item">
                <div className="info-box-icon orange-icon">
                  <PhoneCall size={20} />
                </div>
                <div className="info-box-content">
                  <span className="info-box-label">HOTLINE</span>
                  <span className="info-box-value">+92 346 1764101</span>
                </div>
              </a>

              <a href="https://wa.me/923461764101" target="_blank" rel="noopener noreferrer" className="info-box-item">
                <div className="info-box-icon green-icon">
                  <MessageSquare size={20} />
                </div>
                <div className="info-box-content">
                  <span className="info-box-label">SMS / WHATSAPP</span>
                  <span className="info-box-value">+92 346 1764101</span>
                </div>
              </a>

              <a href="mailto:khalilahamd.developer@gmail.com" className="info-box-item">
                <div className="info-box-icon blue-icon">
                  <Mail size={20} />
                </div>
                <div className="info-box-content">
                  <span className="info-box-label">EMAIL</span>
                  <span className="info-box-value">khalilahamd.developer@gmail.com</span>
                </div>
              </a>
            </div>

            <div className="info-box-divider"></div>

            <div className="connect-social-section">
              <span className="connect-label">CONNECT WITH US</span>
              <div className="social-circle-buttons">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-circle-btn">
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-circle-btn">
                  <Linkedin size={18} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-circle-btn">
                  <Facebook size={18} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-circle-btn">
                  <Instagram size={18} />
                </a>
                <a href="https://wa.me/923461764101" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="social-circle-btn">
                  <MessageSquare size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
